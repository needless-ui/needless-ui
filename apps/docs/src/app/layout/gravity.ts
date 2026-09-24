import Matter from 'matter-js';

/**
 * What falls. The outermost match wins, so a card falls with its text, and a
 * block too big for the screen falls as its children instead.
 */
const BLOCKS = [
  '.site-header .brand',
  '.site-nav a',
  '.site-tools > *',
  '.page-header',
  '.sidenav',
  '.toc',
  '.tabs',
  '.hero-showcase',
  '.hero-actions > *',
  '.feature',
  '.card',
  '.code',
  '.example',
  '.api-entry',
  '.table-wrap',
  '.theme-panel',
  '.not-found-code',
  'main h1',
  'main h2',
  'main h3',
  'main p',
  'main ul',
  'main ol',
  'main dl',
  'main pre',
  '.site-footer p',
  '.emergency-unit',
].join(', ');
const MAX_BODIES = 200;
const STEP = 1000 / 60;

interface Falling {
  el: HTMLElement;
  body: Matter.Body;
  x: number;
  y: number;
}

/**
 * Hands every visible block of the page to a 2D physics engine. Blocks keep
 * their place in the DOM and only move with CSS transforms, so they stay
 * clickable, focusable and readable by screen readers. There is no way back:
 * reloading the page is it, and links now load their page for real.
 */
export function startGravity(document: Document): void {
  const { Engine, Bodies, Body, Composite, Constraint, Sleeping } = Matter;
  const view = document.defaultView!;
  const root = document.documentElement;
  root.classList.add('gravity');
  const width = () => root.clientWidth;
  const height = () => view.innerHeight;

  const candidates = new Set(document.querySelectorAll<HTMLElement>(BLOCKS));
  const nested = (el: HTMLElement) => {
    for (let parent = el.parentElement; parent; parent = parent.parentElement) {
      if (candidates.has(parent)) return true;
    }
    return false;
  };
  const collect = (el: HTMLElement): HTMLElement[] => {
    const r = el.getBoundingClientRect();
    const onScreen =
      r.width >= 4 &&
      r.height >= 4 &&
      r.bottom > 0 &&
      r.top < height() &&
      r.right > 0 &&
      r.left < width();
    if (!onScreen) return [];
    if (r.width <= width() && r.height <= height() * 0.85) return [el];
    return [...el.children].flatMap((child) =>
      child instanceof HTMLElement ? collect(child) : [],
    );
  };
  const blocks = [...candidates]
    .filter((el) => !nested(el))
    .flatMap(collect)
    .slice(0, MAX_BODIES);

  // Transforms don't apply to inline boxes.
  for (const el of blocks) {
    if (view.getComputedStyle(el).display === 'inline') el.style.display = 'inline-block';
  }

  const engine = Engine.create({ enableSleeping: true });
  const world = engine.world;
  const falling: Falling[] = blocks.map((el) => {
    const r = el.getBoundingClientRect();
    const body = Bodies.rectangle(r.left + r.width / 2, r.top + r.height / 2, r.width, r.height, {
      restitution: 0.3,
      friction: 0.3,
      frictionAir: 0.01,
      chamfer: { radius: Math.min(8, r.width / 3, r.height / 3) },
    });
    // The floor drops out: a jolt up and sideways, and a spin, so the page tumbles
    // into a heap instead of settling a few pixels lower.
    Body.setVelocity(body, { x: (Math.random() - 0.5) * 8, y: -2 - Math.random() * 6 });
    Body.setAngularVelocity(body, (Math.random() - 0.5) * 0.12);
    return { el, body, x: body.position.x, y: body.position.y };
  });
  Composite.add(
    world,
    falling.map((item) => item.body),
  );

  let walls: Matter.Body[] = [];
  const buildWalls = () => {
    Composite.remove(world, walls);
    const w = width();
    const h = height();
    const t = 200;
    const options = { isStatic: true, friction: 0.8 };
    walls = [
      Bodies.rectangle(w / 2, h + t / 2, w * 3, t, options),
      Bodies.rectangle(-t / 2, h / 2, t, h * 4, options),
      Bodies.rectangle(w + t / 2, h / 2, t, h * 4, options),
    ];
    Composite.add(world, walls);
  };
  buildWalls();
  view.addEventListener('resize', buildWalls);

  // Grab anything and throw it. A click that didn't move still clicks.
  const byElement = new Map(falling.map((item) => [item.el, item]));
  let grab: { constraint: Matter.Constraint; x: number; y: number; moved: boolean } | null = null;
  let swallowClick = false;
  document.addEventListener('pointerdown', (event) => {
    let node = event.target instanceof Element ? event.target : null;
    while (node && !byElement.has(node as HTMLElement)) node = node.parentElement;
    const item = node && byElement.get(node as HTMLElement);
    if (!item) return;
    const point = { x: event.clientX, y: event.clientY };
    const constraint = Constraint.create({
      pointA: point,
      bodyB: item.body,
      pointB: { x: point.x - item.body.position.x, y: point.y - item.body.position.y },
      length: 0,
      stiffness: 0.2,
      damping: 0.1,
    });
    Sleeping.set(item.body, false);
    Composite.add(world, constraint);
    grab = { constraint, x: point.x, y: point.y, moved: false };
  });
  document.addEventListener('pointermove', (event) => {
    if (!grab) return;
    grab.constraint.pointA = { x: event.clientX, y: event.clientY };
    if (Math.hypot(event.clientX - grab.x, event.clientY - grab.y) > 6) grab.moved = true;
  });
  const release = () => {
    if (!grab) return;
    Composite.remove(world, grab.constraint);
    swallowClick = grab.moved;
    grab = null;
  };
  document.addEventListener('pointerup', release);
  document.addEventListener('pointercancel', release);
  document.addEventListener(
    'click',
    (event) => {
      if (swallowClick) {
        swallowClick = false;
        event.preventDefault();
        event.stopImmediatePropagation();
      } else if (event.target instanceof Element && event.target.closest('a[href]')) {
        // Skip the router: the browser loads the page, which is the only way back.
        event.stopImmediatePropagation();
      }
    },
    true,
  );

  const keepOnScreen = (body: Matter.Body) => {
    const { x, y } = body.position;
    if (x < -300 || x > width() + 300 || y > height() + 300 || y < -3000) {
      Body.setPosition(body, { x: width() / 2, y: 0 });
      Body.setVelocity(body, { x: 0, y: 0 });
    }
  };

  let last = view.performance.now();
  let pending = 0;
  const frame = (now: number) => {
    // Real time down to 4 fps; beyond that (a background tab), skip rather than catch up.
    pending = Math.min(pending + now - last, 250);
    last = now;
    while (pending >= STEP) {
      Engine.update(engine, STEP);
      pending -= STEP;
    }
    for (const { el, body, x, y } of falling) {
      keepOnScreen(body);
      if (body.isSleeping) continue;
      el.style.transform = `translate(${body.position.x - x}px, ${body.position.y - y}px) rotate(${body.angle}rad)`;
    }
    view.requestAnimationFrame(frame);
  };
  view.requestAnimationFrame(frame);
}
