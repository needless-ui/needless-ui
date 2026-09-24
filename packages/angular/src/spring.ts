/** A damped spring: how hard it pulls, how much it resists, how heavy it is. */
export interface NuiSpring {
  stiffness: number;
  damping: number;
  /** Defaults to 1. */
  mass?: number;
}

const REST = 0.001;
const TOLERANCE = 0.004;
const MAX_MS = 10_000;

function position({ stiffness: k, damping: c, mass: m = 1 }: NuiSpring, t: number): number {
  const w0 = Math.sqrt(k / m);
  const zeta = c / (2 * Math.sqrt(k * m));
  if (Math.abs(zeta - 1) < 1e-9) return 1 - Math.exp(-w0 * t) * (1 + w0 * t);
  if (zeta < 1) {
    const wd = w0 * Math.sqrt(1 - zeta * zeta);
    return (
      1 - Math.exp(-zeta * w0 * t) * (Math.cos(wd * t) + ((zeta * w0) / wd) * Math.sin(wd * t))
    );
  }
  const spread = w0 * Math.sqrt(zeta * zeta - 1);
  const slow = -zeta * w0 + spread;
  const fast = -zeta * w0 - spread;
  return 1 - (fast * Math.exp(slow * t) - slow * Math.exp(fast * t)) / (fast - slow);
}

/**
 * Compiles a spring to the time and easing of a CSS transition: the time it
 * takes to settle, and its exact curve as `linear()`.
 *
 * ```ts
 * springTransition({ stiffness: 170, damping: 7 }); // '1845ms linear(0, 0.003 0.33%, …, 1)'
 * ```
 *
 * The spring tokens (`--nui-spring-*`) are compiled by this same function, so a
 * spring given here moves exactly like a token with the same physics.
 */
export function springTransition(spring: NuiSpring): string {
  for (const key of ['stiffness', 'damping', 'mass'] as const) {
    const value = spring[key] ?? 1;
    if (!(value > 0) || !Number.isFinite(value)) {
      throw new Error(`NuiSpring: ${key} must be a positive number, got ${value}`);
    }
  }
  let unsettled = 0;
  for (let ms = 0; ms <= MAX_MS; ms++) {
    if (Math.abs(position(spring, ms / 1000) - 1) >= REST) unsettled = ms;
  }
  if (unsettled === MAX_MS) {
    throw new Error(`NuiSpring: ${JSON.stringify(spring)} doesn't settle within ${MAX_MS}ms`);
  }
  const end = unsettled + 1;
  const samples = Array.from({ length: end + 1 }, (_, ms) => position(spring, ms / 1000));
  samples[end] = 1;

  // Ramer–Douglas–Peucker, measured vertically: keep the sample furthest from
  // the straight line between two kept ones until every sample is close enough.
  const kept = [0, end];
  const simplify = (from: number, to: number) => {
    let worst = -1;
    let error = TOLERANCE;
    for (let i = from + 1; i < to; i++) {
      const line = samples[from] + ((samples[to] - samples[from]) * (i - from)) / (to - from);
      if (Math.abs(samples[i] - line) > error) {
        error = Math.abs(samples[i] - line);
        worst = i;
      }
    }
    if (worst < 0) return;
    kept.push(worst);
    simplify(from, worst);
    simplify(worst, to);
  };
  simplify(0, end);
  kept.sort((a, b) => a - b);

  const round = (n: number, digits: number) => String(+n.toFixed(digits));
  const stops = kept
    .slice(1, -1)
    .map((ms) => `${round(samples[ms], 3)} ${round((ms / end) * 100, 2)}%`);
  return `${end}ms linear(${['0', ...stops, '1'].join(', ')})`;
}
