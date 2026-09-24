import type { Messages } from './types';

export const messages: Messages = {
  site: {
    name: 'Needless UI',
    tagline: 'The Needlessly Engineered Styling Toolkit',
    description:
      'Componenti Angular accessibili e personalizzabili, basati su elementi nativi, design token W3C e un unico foglio di stile. Open source, licenza MIT.',
    skipToContent: 'Vai al contenuto principale',
    nav: {
      label: 'Principale',
      home: 'Home di Needless UI',
      components: 'Componenti',
      guides: 'Guide',
      github: 'GitHub',
      language: 'Lingua',
      theme: 'Tema',
      themes: { system: 'Sistema', light: 'Chiaro', dark: 'Scuro' },
    },
    footer: {
      license: 'Distribuito con licenza MIT.',
      source: 'Codice sorgente',
      built: 'Progettato in modo inutilmente accurato.',
      legal: 'Note legali',
      privacy: 'Privacy',
    },
    emergency: {
      label: 'NON PREMERE',
      cover: 'Solleva la protezione',
      button: 'Non premere',
      armed: 'La protezione è alzata. Ripensaci.',
      falling: 'Protocollo di emergenza attivato…',
      fallen: 'Ora la gravità è permanente. Ricarica la pagina per ricostruire l’universo.',
      reduced:
        'Il tuo sistema chiede meno animazioni, quindi la gravità resta spenta. Che fortuna.',
    },
  },

  home: {
    title: 'Needless UI · Componenti Angular accessibili e inutilmente curati',
    description:
      'Needless UI è una libreria open source di componenti Angular: elementi nativi, un unico foglio di stile, design token W3C e WCAG 2.2 AA integrati.',
    eyebrow: 'Open source · Angular 22 · MIT',
    heading: 'Componenti UI, progettati con una cura inutilmente accurata.',
    lead: 'Needless UI dà stile agli <strong>elementi nativi</strong> con un unico foglio di stile indipendente dal framework e design token W3C. Le direttive Angular aggiungono il comportamento di Angular Aria, così ogni componente è accessibile fin dal primo render.',
    getStarted: 'Inizia',
    browse: 'Sfoglia i componenti',
    featuresTitle: 'Perché esiste',
    features: [
      {
        title: 'Prima gli elementi nativi',
        text: '<code>&lt;button nuiButton&gt;</code> è un vero pulsante. Moduli, tastiera e screen reader funzionano perché niente lo avvolge.',
      },
      {
        title: 'Un foglio di stile per ogni framework',
        text: 'I componenti sono CSS puro in cascade layer: Angular oggi, React domani, HTML semplice sempre.',
      },
      {
        title: 'Il tuo CSS vince sempre',
        text: 'Tutto è dentro <code>@layer nui</code>, quindi i tuoi stili lo sovrascrivono senza <code>!important</code> né battaglie di specificità.',
      },
      {
        title: 'Accessibile per costruzione',
        text: 'Ogni coppia di colori viene verificata rispetto alle WCAG 2.2 AA quando si genera la palette. Focus, forced colors e riduzione del movimento sono già gestiti.',
      },
      {
        title: 'Inutilmente personalizzabile',
        text: 'Molle, effetti alla pressione, animazioni di entrata, forme degli angoli, raggio e densità: <a href="/guides/customization">un attributo</a> per tutta l’app o un input per componente, su design token W3C standard.',
      },
      {
        title: 'Angular moderno',
        text: 'Input signal, zoneless, rendering lato server e un entry point per componente: le app includono solo ciò che importano.',
      },
    ],
    codeTitle: 'Due import e hai finito',
    codeText:
      'Aggiungi il pacchetto, importa il foglio di stile una volta e usa i componenti in qualsiasi componente standalone.',
  },

  components: {
    title: 'Componenti',
    description:
      'Sfoglia i componenti Needless UI per Angular: pulsanti, dialoghi e menu accessibili, con esempi dal vivo, riferimento API e supporto da tastiera.',
    intro:
      'Ogni componente si basa su elementi nativi ed è documentato con esempi dal vivo, la sua API e il suo comportamento da tastiera.',
    tabsLabel: 'Sezioni della documentazione',
    tabs: { overview: 'Panoramica', api: 'API', accessibility: 'Accessibilità' },
    sidenavLabel: 'Componenti',
    onThisPage: 'In questa pagina',
    example: {
      showCode: 'Mostra il codice',
      hideCode: 'Nascondi il codice',
      copy: 'Copia',
      copied: 'Copiato',
      files: 'File sorgente',
    },
    api: {
      import: 'Import',
      selector: 'Selettore',
      exportAs: 'Esportato come',
      members: 'Proprietà',
      name: 'Nome',
      type: 'Tipo',
      default: 'Predefinito',
      description: 'Descrizione',
      kinds: { input: 'Input', model: 'Bidirezionale', output: 'Output', method: 'Metodo' },
      customization: {
        note: 'Gli input di personalizzazione che non imposti seguono l’attributo <code>data-nui-*</code> più vicino. Vedi la <a href="/guides/customization">guida alla personalizzazione</a>.',
        members: {
          motion:
            'La molla con cui si muove: <code>snappy</code>, <code>bouncy</code>, <code>jelly</code>, <code>elastic</code>, <code>lazy</code>, <code>mechanical</code> o <code>none</code>.',
          spring:
            'Qualsiasi molla, nella forma <code>{ stiffness, damping, mass }</code>, compilata in CSS a runtime. Ha la precedenza su <code>motion</code>.',
          press:
            'Cosa fa mentre è tenuto premuto: <code>sink</code>, <code>squish</code>, <code>pop</code>, <code>wobble</code>, <code>rubber</code>, <code>tilt</code> o <code>none</code>.',
          enter:
            'Come entra in scena: <code>zoom</code>, <code>fade</code>, <code>drop</code>, <code>rise</code>, <code>unfold</code>, <code>flip</code>, <code>swing</code>, <code>slide</code> o <code>none</code>.',
          corners:
            'La forma degli angoli: <code>round</code>, <code>squircle</code>, <code>bevel</code>, <code>scoop</code>, <code>notch</code> o <code>square</code>.',
          radius:
            'Quanto sono grandi gli angoli: <code>none</code>, <code>small</code>, <code>medium</code>, <code>large</code> o <code>full</code>.',
          density:
            'Quanto spazio occupa: <code>compact</code>, <code>regular</code> o <code>roomy</code>.',
        },
      },
    },
    a11y: {
      keyboard: 'Interazione da tastiera',
      key: 'Tasto',
      action: 'Azione',
      notes: 'Note sull’accessibilità',
    },
    titles: {
      api: (name) => `API di ${name}`,
      accessibility: (name) => `Accessibilità di ${name}`,
    },
    items: {
      button: {
        name: 'Button',
        title: 'Componente pulsante per Angular',
        summary: 'Azioni e link, con lo stile applicato a elementi button e anchor nativi.',
        description:
          'Direttiva Angular accessibile per pulsanti su elementi button e anchor nativi, con quattro varianti, tre toni, tre dimensioni e supporto ai link.',
        apiDescription:
          'Riferimento API del pulsante Needless UI: la direttiva nuiButton, il suo selettore e gli input variant, tone, size e disabled.',
        a11yDescription:
          'Comportamento da tastiera e accessibilità del pulsante Needless UI: semantica nativa, anello di focus, contrasto, area di tocco e link disattivati.',
        overview: [
          'La direttiva <code>nuiButton</code> dà stile a un <code>&lt;button&gt;</code> o a un <code>&lt;a&gt;</code> nativo. L’elemento conserva semantica, comportamento da tastiera e partecipazione ai moduli; la direttiva si limita a riflettere i suoi input negli attributi data usati dal foglio di stile.',
          'Usa un <code>&lt;button&gt;</code> per le azioni e un <code>&lt;a&gt;</code> per la navigazione. Hanno lo stesso aspetto ed entrambi supportano <code>disabled</code>.',
        ],
        examples: {
          variants: {
            title: 'Varianti',
            text: 'Quattro stili di riempimento, dal più evidente al più discreto. Usa un solo pulsante pieno per vista, per l’azione principale.',
          },
          tones: {
            title: 'Toni',
            text: 'I toni cambiano la palette: accent per il percorso principale, neutral per le azioni secondarie, danger per quelle distruttive.',
          },
          sizes: {
            title: 'Dimensioni',
            text: 'Tre altezze: 28, 36 e 44 pixel. Anche la più piccola supera l’area di tocco minima delle WCAG 2.2.',
          },
          links: {
            title: 'Link e pulsanti disattivati',
            text: 'Gli anchor non si possono disattivare nativamente: un link disattivato riceve <code>aria-disabled="true"</code> e i suoi clic vengono bloccati, anche con <code>routerLink</code>.',
          },
        },
        api: {
          NuiButton: {
            summary:
              'Dà stile di pulsante a un <code>&lt;button&gt;</code> o a un <code>&lt;a&gt;</code> nativo.',
            members: {
              variant:
                'Stile di riempimento: <code>solid</code>, <code>soft</code>, <code>outline</code> o <code>ghost</code>.',
              tone: 'Palette di colori: <code>accent</code>, <code>neutral</code> o <code>danger</code>.',
              size: 'Altezza, padding e dimensione del testo: <code>sm</code>, <code>md</code> o <code>lg</code>.',
              disabled:
                'Disattiva il pulsante. Sugli anchor imposta <code>aria-disabled</code> e blocca l’attivazione.',
            },
          },
        },
        keyboard: [
          ['Tab', 'Sposta il focus sul pulsante o sul link.'],
          ['Invio', 'Attiva il pulsante o segue il link.'],
          ['Spazio', 'Attiva il pulsante. Sui link scorre la pagina (comportamento nativo).'],
        ],
        notes: [
          'Il nome accessibile è il testo dell’elemento. I pulsanti con sola icona richiedono un <code>aria-label</code>.',
          'Il testo raggiunge un contrasto di 4,5:1 per ogni variante, tono e tema; lo garantisce il generatore della palette.',
          'L’anello di focus è un contorno di 2px con un contrasto di almeno 3:1 rispetto alla pagina, in entrambi i temi.',
          'Un <code>&lt;button&gt;</code> disattivato esce dall’ordine di tabulazione. Un link disattivato resta raggiungibile, così chi usa uno screen reader può trovarlo, e viene annunciato come disattivato.',
          'In modalità forced colors il bordo trasparente diventa un contorno visibile con i colori di sistema.',
        ],
      },

      dialog: {
        name: 'Dialog',
        title: 'Finestra di dialogo per Angular',
        summary:
          'Una finestra modale sull’elemento dialog nativo, con il focus gestito dal browser.',
        description:
          'Dialog Angular accessibile basato sull’elemento dialog nativo: focus modale, chiusura con Esc, valori di ritorno e chiusura dallo sfondo.',
        apiDescription:
          'Riferimento API del dialog Needless UI: nuiDialog con binding bidirezionale di open, dimensioni, valori di ritorno e le parti titolo, descrizione e chiusura.',
        a11yDescription:
          'Comportamento da tastiera e accessibilità del dialog Needless UI: focus modale, tasto Esc, ripristino del focus e contenuto etichettato.',
        overview: [
          'La direttiva <code>nuiDialog</code> trasforma un <code>&lt;dialog&gt;</code> nativo in un dialog Needless UI. Il comportamento modale lo fornisce il browser: la pagina dietro diventa inerte, il focus resta all’interno, Esc lo chiude e il focus torna all’elemento che l’ha aperto.',
          'Collega <code>[(open)]</code> a un signal e assegna un valore ai pulsanti di chiusura con <code>nuiDialogClose="…"</code> per sapere come è stato chiuso il dialog.',
        ],
        examples: {
          confirm: {
            title: 'Conferma',
            text: 'Una conferma distruttiva. La scelta sicura ha <code>autofocus</code> e il valore scelto arriva tramite <code>(closed)</code>.',
          },
          form: {
            title: 'Modulo in un dialog',
            text: 'Un dialog può contenere qualsiasi cosa. Qui il primo campo riceve il focus quando il dialog si apre.',
          },
          dismissible: {
            title: 'Non chiudibile',
            text: 'Con <code>[dismissible]="false"</code>, Esc e i clic sullo sfondo vengono ignorati: bisogna scegliere un’opzione.',
          },
        },
        api: {
          NuiDialog: {
            summary: 'Trasforma un <code>&lt;dialog&gt;</code> nativo in un dialog Needless UI.',
            members: {
              open: 'Indica se il dialog è aperto. Collegalo con <code>[(open)]</code>.',
              modal: 'Apre il dialog come modale, con uno sfondo e la pagina dietro resa inerte.',
              dismissible: 'Indica se Esc e i clic sullo sfondo chiudono il dialog.',
              size: 'Larghezza massima: <code>sm</code> (24rem), <code>md</code> (32rem) o <code>lg</code> (44rem).',
              closed:
                'Emette il valore di ritorno a ogni chiusura. È vuoto se il dialog è stato chiuso senza scegliere.',
              close: 'Chiude il dialog con un valore di ritorno facoltativo.',
            },
          },
          NuiDialogTitle: {
            summary:
              'Il titolo del dialog. Riceve un id e diventa l’<code>aria-labelledby</code> del dialog.',
            members: {},
          },
          NuiDialogDescription: {
            summary:
              'Una breve descrizione, collegata tramite l’<code>aria-describedby</code> del dialog.',
            members: {},
          },
          NuiDialogActions: {
            summary: 'Una riga di pulsanti in fondo al dialog, allineata alla fine.',
            members: {},
          },
          NuiDialogClose: {
            summary: 'Chiude il dialog che lo contiene quando viene cliccato.',
            members: {
              nuiDialogClose:
                'Il valore con cui si chiude il dialog, emesso da <code>(closed)</code>.',
            },
          },
        },
        keyboard: [
          ['Tab', 'Sposta il focus all’elemento successivo nel dialog.'],
          ['Maiusc + Tab', 'Sposta il focus all’elemento precedente nel dialog.'],
          ['Esc', 'Chiude il dialog, salvo che sia impostato come non chiudibile.'],
        ],
        notes: [
          'L’apertura con <code>showModal()</code> dà al dialog <code>role="dialog"</code> e la semantica modale, e rende inerte il resto della pagina.',
          'Titolo e descrizione sono collegati tramite id generati, quindi gli screen reader li annunciano entrambi all’apertura.',
          'Il focus iniziale va all’elemento con <code>autofocus</code> o al primo elemento focalizzabile. Nelle conferme distruttive, metti <code>autofocus</code> sulla scelta sicura.',
          'Alla chiusura, il focus torna all’elemento che ha aperto il dialog.',
          'I browser potrebbero comunque chiudere un dialog non chiudibile dopo più pressioni di Esc senza altre interazioni: offri sempre una via d’uscita esplicita.',
        ],
      },

      menu: {
        name: 'Menu',
        title: 'Componente menu per Angular',
        summary:
          'Un elenco di azioni a comparsa, con sottomenu, voci selezionabili e pieno supporto da tastiera.',
        description:
          'Menu Angular accessibile basato su Angular Aria: navigazione da tastiera, ricerca per digitazione, sottomenu, voci checkbox e radio e posizionamento automatico.',
        apiDescription:
          'Riferimento API del menu Needless UI: nuiMenuTrigger, nuiMenu e nuiMenuItem, con valori, toni, sottomenu e stato selezionato.',
        a11yDescription:
          'Interazione da tastiera e accessibilità del menu Needless UI: frecce, ricerca per digitazione, sottomenu, tasto Esc e ritorno del focus.',
        overview: [
          'Un menu mostra un elenco di azioni quando si attiva il suo trigger. Il comportamento viene dal pattern menu di Angular Aria; Needless UI aggiunge gli stili, mostra il menu come popover sopra la pagina e lo mantiene dentro il viewport.',
          'Passa il riferimento <code>ngMenu</code> del menu a <code>[nuiMenuTrigger]</code>, assegna a ogni voce un <code>value</code> univoco e reagisci con <code>(selected)</code> sulla voce o con <code>(itemSelected)</code> sul menu.',
        ],
        examples: {
          actions: {
            title: 'Azioni',
            text: 'Un menu di azioni con suggerimenti delle scorciatoie, un separatore e una voce distruttiva.',
          },
          submenu: {
            title: 'Sottomenu',
            text: 'Collega una voce a un <code>nuiMenu</code> annidato con <code>[submenu]</code>. Si apre al passaggio del mouse o con la freccia destra.',
          },
          checkable: {
            title: 'Voci checkbox e radio',
            text: 'Imposta <code>role</code> e collega <code>[checked]</code>. Il menu mostra l’indicatore e annuncia lo stato.',
          },
        },
        api: {
          NuiMenuTrigger: {
            summary: 'Apre un menu. Di solito si applica a un <code>nuiButton</code>.',
            members: {
              nuiMenuTrigger:
                'Il menu da aprire: il riferimento <code>ngMenu</code> di un <code>nuiMenu</code>.',
            },
          },
          NuiMenu: {
            summary:
              'Un menu di voci, mostrato come popover accanto al suo trigger. L’export <code>ngMenu</code> è il menu di Angular Aria che trigger e sottomenu si aspettano.',
            members: {
              wrap: 'Indica se le frecce passano dall’ultima voce alla prima.',
              typeaheadDelay: 'Millisecondi prima che la ricerca per digitazione si azzeri.',
              disabled: 'Disattiva l’intero menu.',
              itemSelected:
                'Emette il valore della voce scelta. Sul menu principale scatta anche per le voci dei sottomenu.',
            },
          },
          NuiMenuItem: {
            summary: 'Una voce di un <code>nuiMenu</code>.',
            members: {
              value: 'Identifica la voce. Deve essere univoco in tutto il menu, sottomenu inclusi.',
              disabled:
                'Disattiva la voce. Resta raggiungibile con le frecce ma non si può scegliere.',
              submenu: 'Un <code>nuiMenu</code> annidato che questa voce apre.',
              role: '<code>menuitem</code>, <code>menuitemcheckbox</code> o <code>menuitemradio</code>.',
              checked: 'Stato selezionato di una voce checkbox o radio.',
              tone: '<code>danger</code> per le azioni distruttive.',
              searchTerm:
                'Testo usato dalla ricerca per digitazione. Di default è l’etichetta della voce.',
              selected:
                'Emette il valore della voce quando viene scelta con il mouse o con la tastiera.',
            },
          },
          NuiMenuSeparator: { summary: 'Una linea tra gruppi di voci.', members: {} },
          NuiMenuShortcut: {
            summary: 'Un suggerimento di scorciatoia da tastiera, allineato alla fine della voce.',
            members: {},
          },
        },
        keyboard: [
          [
            'Invio o Spazio',
            'Sul trigger: apre il menu sulla prima voce. Su una voce: la sceglie o apre il suo sottomenu.',
          ],
          [
            'Freccia giù',
            'Sul trigger: apre il menu sulla prima voce. Nel menu: passa alla voce successiva.',
          ],
          [
            'Freccia su',
            'Sul trigger: apre il menu sull’ultima voce. Nel menu: passa alla voce precedente.',
          ],
          ['Home e Fine', 'Passa alla prima o all’ultima voce.'],
          [
            'Freccia destra',
            'Apre un sottomenu e passa alla sua prima voce (freccia sinistra nel testo da destra a sinistra).',
          ],
          [
            'Freccia sinistra',
            'Chiude un sottomenu e torna alla voce che l’ha aperto (freccia destra nel testo da destra a sinistra).',
          ],
          ['Esc', 'Chiude il menu e riporta il focus sul trigger.'],
          ['Lettere', 'Passa alla voce successiva la cui etichetta inizia con il testo digitato.'],
        ],
        notes: [
          'Il trigger riceve <code>aria-haspopup</code>, <code>aria-expanded</code> e <code>aria-controls</code>; menu e voci ricevono i ruoli ARIA da Angular Aria.',
          'La voce evidenziata usa un riempimento pieno con un contrasto del testo di almeno 4,5:1 e fa anche da indicatore di focus. In modalità forced colors riceve un contorno di evidenziazione di sistema.',
          'Le voci selezionabili annunciano il loro stato tramite <code>aria-checked</code>.',
          'Scegliere una voce chiude il menu e riporta il focus sul trigger. Anche spostare il focus fuori dal trigger e dal menu lo chiude.',
          'Le voci sono alte almeno 28 pixel, oltre l’area di tocco minima delle WCAG 2.2.',
        ],
      },
    },
  },

  guides: {
    title: 'Guide',
    items: {
      'getting-started': {
        title: 'Per iniziare',
        description:
          'Installa Needless UI in un’app Angular 22: aggiungi i pacchetti, importa il foglio di stile e usa il tuo primo componente accessibile in pochi minuti.',
        blocks: [
          {
            kind: 'p',
            html: 'Needless UI funziona con Angular 22. I componenti sono direttive standalone, quindi non ci sono moduli da importare.',
          },
          { kind: 'h2', id: 'install', text: 'Installazione' },
          {
            kind: 'p',
            html: 'Aggiungi il pacchetto Angular insieme ad Angular Aria e al CDK, che forniscono il comportamento da tastiera e l’accessibilità. Il foglio di stile arriva con esso.',
          },
          { kind: 'code', file: 'snippets/install.sh' },
          { kind: 'h2', id: 'styles', text: 'Importa gli stili' },
          {
            kind: 'p',
            html: 'Importa il foglio di stile una volta in <code>src/styles.css</code>. Include i design token e tutti i componenti.',
          },
          { kind: 'code', file: 'snippets/styles.css' },
          {
            kind: 'p',
            html: 'Tutto è dentro <code>@layer nui</code>. Se la tua app ha reset globali come <code>a { color: inherit }</code>, mettili in un layer dichiarato prima di <code>nui</code>, così non sovrascrivono i componenti.',
          },
          { kind: 'h2', id: 'use', text: 'Usa un componente' },
          {
            kind: 'p',
            html: 'Importa le direttive che ti servono dai loro entry point e aggiungile agli <code>imports</code> del tuo componente.',
          },
          { kind: 'code', file: 'snippets/usage.ts' },
          { kind: 'h2', id: 'next', text: 'Prossimi passi' },
          {
            kind: 'p',
            html: 'Sfoglia i <a href="/components">componenti</a> per gli esempi dal vivo, oppure leggi la <a href="/guides/theming">guida ai temi</a> per adattarli al tuo brand.',
          },
        ],
      },
      theming: {
        title: 'Temi',
        description:
          'Personalizza Needless UI con le custom property CSS: modalità chiara e scura, temi annidati, override dei token e una palette di brand dal contrasto verificato.',
        blocks: [
          {
            kind: 'p',
            html: 'Ogni scelta visiva è una custom property CSS generata dai design token W3C. I componenti usano solo token semantici come <code>--nui-color-accent-solid</code>, quindi cambiare un token cambia lo stile di ogni componente che lo usa.',
          },
          { kind: 'h2', id: 'modes', text: 'Chiaro e scuro' },
          {
            kind: 'p',
            html: 'Di default la modalità segue la preferenza del sistema operativo. Puoi fissarla su qualsiasi elemento con <code>data-nui-theme</code> e annidare i temi liberamente.',
          },
          { kind: 'code', file: 'snippets/theme-attribute.html' },
          { kind: 'demo', demo: 'nested-themes' },
          { kind: 'h2', id: 'tokens', text: 'Sovrascrivi i token' },
          {
            kind: 'p',
            html: 'I token vivono in <code>@layer nui</code>, quindi il CSS della tua app li sovrascrive. Impostali su <code>:root</code> per tutta l’app o su un elemento per una sola parte.',
          },
          { kind: 'code', file: 'snippets/override.css' },
          { kind: 'h2', id: 'palette', text: 'Una palette per il tuo brand' },
          {
            kind: 'p',
            html: 'Le scale di colore sono generate. Cambia una tonalità in <code>packages/tokens/scripts/palette.ts</code> e rigenera: lo script riadatta ogni colore allo spazio sRGB e ricontrolla il contrasto di ogni coppia di testo e sfondo.',
          },
          { kind: 'code', file: 'snippets/palette.sh' },
        ],
      },
      customization: {
        title: 'Personalizzazione',
        description:
          'Fisica delle molle, effetti alla pressione, animazioni di entrata, forme degli angoli, raggio e densità: regola Needless UI in tutta l’app o per componente.',
        blocks: [
          {
            kind: 'p',
            html: 'Ogni componente ha una personalità che puoi cambiare: la molla con cui si muove, cosa fa un pulsante sotto il tuo dito, come entrano in scena dialog e menu, la forma e la dimensione degli angoli e quanto spazio occupa. Ognuno di questi tratti è un attributo per tutto ciò che sta dentro un elemento, o un input per un singolo componente.',
          },
          { kind: 'demo', demo: 'playground' },
          { kind: 'h2', id: 'attributes', text: 'Un attributo, un intero sottoalbero' },
          {
            kind: 'p',
            html: 'Metti gli attributi <code>data-nui-*</code> su <code>&lt;body&gt;</code> per tutta l’app, o su un elemento qualsiasi per una sola parte. Vince il più vicino, perciò si possono annidare. Impostano solo custom property CSS, quindi funzionano allo stesso modo con qualsiasi framework, o anche senza.',
          },
          { kind: 'code', file: 'snippets/customize.html' },
          { kind: 'h2', id: 'inputs', text: 'Un solo componente' },
          {
            kind: 'p',
            html: 'In Angular, <code>nuiButton</code>, <code>nuiDialog</code> e <code>nuiMenu</code> accettano gli stessi valori come input. Gli input che non imposti seguono gli attributi intorno al componente.',
          },
          { kind: 'code', file: 'snippets/customize-inputs.html' },
          { kind: 'h2', id: 'springs', text: 'Molle compilate in CSS' },
          {
            kind: 'p',
            html: 'Il movimento è fisica delle molle: rigidezza, smorzamento e massa al posto di una durata e di una curva. Il compilatore dei token risolve ogni molla e la scrive nel CSS come tempo di assestamento più un easing <code>linear()</code>, così gira sul compositor senza JavaScript. Sei molle sono incluse come token, da <code>--nui-spring-snappy</code> a <code>--nui-spring-mechanical</code>, e <code>--nui-motion</code> contiene quella in uso.',
          },
          {
            kind: 'p',
            html: 'Qualsiasi altra molla è a un input di distanza. Angular la compila a runtime con lo stesso risolutore, e <code>springTransition()</code> ti dà il CSS per i tuoi elementi.',
          },
          { kind: 'code', file: 'snippets/customize-spring.ts' },
          { kind: 'h2', id: 'css', text: 'Tutte le vie di mezzo' },
          {
            kind: 'p',
            html: 'I preset sono scorciatoie. Per tutto il resto imposta tu le custom property: qualsiasi trasformazione per <code>--nui-press</code> e <code>--nui-enter</code>, qualsiasi numero per <code>--nui-radius-scale</code> e <code>--nui-density</code>.',
          },
          { kind: 'code', file: 'snippets/customize.css' },
          { kind: 'h2', id: 'accessibility', text: 'Accessibilità' },
          {
            kind: 'p',
            html: 'Quando il sistema chiede meno animazioni, le molle diventano istantanee, mentre effetti alla pressione e animazioni di entrata restano fermi. La densità non porta mai un controllo sotto l’area di tocco minima di 24px delle WCAG 2.2, e nessun preset tocca i colori, quindi ogni verifica di contrasto resta valida. I browser senza <code>corner-shape</code> disegnano tutti gli angoli arrotondati.',
          },
        ],
      },
    },
    playground: {
      label: 'Area di prova per la personalizzazione',
      motion: 'Movimento',
      custom: 'personalizzato',
      stiffness: 'Rigidezza',
      damping: 'Smorzamento',
      mass: 'Massa',
      press: 'Pressione',
      enter: 'Entrata',
      corners: 'Angoli',
      radius: 'Raggio',
      density: 'Densità',
      surprise: 'Sorprendimi',
      reset: 'Ripristina predefiniti',
      hint: 'Tieni premuto un pulsante, poi rilascialo. Apri il dialog e il menu per vederli entrare in scena.',
      save: 'Salva',
      cancel: 'Annulla',
      delete: 'Elimina',
      openDialog: 'Apri il dialog',
      openMenu: 'Apri il menu',
      menu: ['Rinomina', 'Duplica', 'Elimina'],
      dialogTitle: 'Inutilmente animato',
      dialogText: 'Questo dialog è arrivato esattamente come gli hai chiesto.',
      close: 'Chiudi',
      curve:
        'La posizione della molla nel tempo. Parte dal basso e si ferma sulla linea tratteggiata.',
      settles: (ms, overshoot) => `Si assesta in ${ms} ms · sfora del ${overshoot}%`,
      instant: 'Nessun movimento: tutto salta subito dove deve andare.',
      stuck:
        'Questa molla non si assesta entro 10 secondi. Aumenta lo smorzamento o la rigidezza; nel frattempo i componenti tengono l’ultima che ci è riuscita.',
      reducedMotion:
        'Il tuo sistema chiede meno animazioni, quindi qui non si muove niente. Molle, effetti alla pressione e animazioni di entrata tornano quando smette di chiederlo.',
      noCornerShape:
        'Questo browser non sa ancora disegnare le forme degli angoli, quindi tutti gli angoli restano arrotondati.',
      everywhere: 'Su qualsiasi elemento, per tutto ciò che contiene:',
      oneComponent: 'Su un singolo componente, in Angular:',
    },
  },

  notFound: {
    title: 'Pagina non trovata',
    description:
      'Questa pagina non esiste. Sfoglia i componenti Needless UI o riparti dalla home page.',
    text: 'Questa pagina non esiste o è stata spostata.',
    home: 'Vai alla home page',
    components: 'Sfoglia i componenti',
  },

  legal: {
    translationNote:
      'Questa traduzione è fornita per comodità: in caso di differenze prevale la versione inglese.',
    labels: { name: 'Nome', address: 'Indirizzo', email: 'Email', uid: 'IDI', vat: 'Numero IVA' },
    notice: {
      title: 'Note legali',
      description:
        'Chi gestisce needlessui.com: nome, indirizzo postale ed email del gestore, con i dati del registro di commercio e dell’IVA.',
      operator: 'Gestore del sito',
      legalForm: 'ditta individuale',
      country: 'Svizzera',
      register: 'Registro di commercio',
      registerEntry: 'Iscritta nel registro di commercio del Cantone di Zugo.',
      vatSuffix: 'IVA',
      blocks: [
        { kind: 'h2', id: 'liability', text: 'Responsabilità' },
        {
          kind: 'p',
          html: 'I contenuti di questo sito sono curati con attenzione, ma senza garanzia di esattezza, completezza o attualità. I siti collegati sono fuori dal nostro controllo: dei loro contenuti rispondono i rispettivi gestori.',
        },
        { kind: 'h2', id: 'license', text: 'Licenza' },
        {
          kind: 'p',
          html: 'Needless UI, compreso questo sito, è open source con <a href="https://github.com/needless-ui/needless-ui/blob/main/LICENSE">licenza MIT</a>.',
        },
      ],
    },
    privacy: {
      title: 'Informativa sulla privacy',
      description:
        'Come needlessui.com tratta i dati personali: niente cookie, analisi o tracciamento. Cosa tratta l’hosting durante la visita e quali diritti hai.',
      updated: 'Ultimo aggiornamento: 24 settembre 2026',
      blocks: [
        {
          kind: 'p',
          html: 'Questa informativa spiega quali dati personali vengono trattati quando visiti www.needlessui.com e quali sono i tuoi diritti. In breve: il sito non usa cookie, strumenti di analisi o tracciamento e non ti chiede mai dati personali.',
        },
        { kind: 'h2', id: 'controller', text: 'Titolare del trattamento' },
        {
          kind: 'p',
          html: 'Il gestore indicato nelle <a href="/legal">note legali</a>, Angelo Lamonaca. Contatto: {email}.',
        },
        { kind: 'h2', id: 'hosting', text: 'Hosting' },
        {
          kind: 'p',
          html: 'Il sito è ospitato da Vercel Inc., 440 N Barranca Avenue #4133, Covina, CA 91723, USA. Quando apri una pagina, il browser invia i dati tecnici che riceve ogni sito web: indirizzo IP, data e ora, pagina richiesta, pagina di provenienza e user agent del browser. Vercel tratta questi dati per nostro conto per erogare il sito e mantenerlo sicuro, e li conserva solo per il tempo necessario. Può trattarli negli Stati Uniti; Vercel è certificata secondo l’EU-U.S. Data Privacy Framework, la sua estensione per il Regno Unito e lo Swiss-U.S. Data Privacy Framework. Consulta l’<a href="https://vercel.com/legal/privacy-policy">informativa di Vercel</a>.',
        },
        {
          kind: 'p',
          html: 'Dove si applica il GDPR, la base giuridica è il nostro legittimo interesse a gestire un sito sicuro (art. 6, par. 1, lett. f GDPR).',
        },
        { kind: 'h2', id: 'storage', text: 'Cookie e archiviazione locale' },
        {
          kind: 'p',
          html: 'Il sito non imposta cookie. Se scegli il tema chiaro o scuro, l’archiviazione locale del browser ricorda la scelta per la visita successiva. Non lascia mai il tuo dispositivo: per eliminarla, torna a «Sistema» o cancella i dati del sito.',
        },
        { kind: 'h2', id: 'tracking', text: 'Nessun tracciamento' },
        {
          kind: 'p',
          html: 'Non ci sono strumenti di analisi, pubblicità, plugin social, contenuti incorporati di terzi né font esterni. I link a GitHub e npm portano a siti con una propria informativa sulla privacy.',
        },
        { kind: 'h2', id: 'rights', text: 'I tuoi diritti' },
        {
          kind: 'p',
          html: 'Puoi chiedere quali tuoi dati personali vengono trattati e ottenerne la rettifica o la cancellazione. Dove si applica il GDPR, puoi anche opporti al trattamento, chiederne la limitazione e ricevere i tuoi dati in un formato portabile. Scrivi a {email}. Puoi inoltre presentare reclamo a un’autorità di controllo: in Svizzera l’Incaricato federale della protezione dei dati e della trasparenza (IFPDT); nell’UE l’autorità del tuo Paese, in Italia il Garante per la protezione dei dati personali.',
        },
        { kind: 'h2', id: 'changes', text: 'Modifiche' },
        {
          kind: 'p',
          html: 'L’informativa cambia quando cambia il sito, per esempio con un nuovo hosting. La data qui sotto indica la versione in vigore.',
        },
      ],
    },
  },
};
