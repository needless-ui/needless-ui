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
    toaster: { label: 'Notifiche (Alt + T)', close: 'Chiudi' },
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
      kinds: {
        input: 'Input',
        model: 'Bidirezionale',
        output: 'Output',
        method: 'Metodo',
        property: 'Proprietà',
      },
      texts: 'Anche ogni testo che mostra o annuncia è un input, così puoi tradurlo:',
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
          presses: {
            title: 'Effetti alla pressione',
            text: 'Tieni premuto ciascun pulsante. <code>press</code> stabilisce cosa fa un pulsante mentre resta premuto, e <code>motion</code> la molla con cui torna in posizione. <code>data-nui-press</code> su qualsiasi elemento imposta l’effetto per tutto ciò che contiene.',
          },
          shapes: {
            title: 'Angoli, raggio e densità',
            text: '<code>corners</code> cambia la forma degli angoli, <code>radius</code> la loro dimensione e <code>density</code> lo spazio che occupa un pulsante, senza mai scendere sotto l’area di tocco minima di 24px. I browser senza <code>corner-shape</code> disegnano angoli arrotondati.',
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
          entrances: {
            title: 'Animazioni di entrata',
            text: 'Ogni pulsante apre lo stesso dialog con un preset <code>enter</code> diverso e la molla <code>bouncy</code>. Comunque entri in scena, esce con una rapida dissolvenza.',
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
          entrances: {
            title: 'Animazioni di entrata e molle',
            text: 'Ogni menu abbina un preset <code>enter</code> a una molla <code>motion</code> e cresce dal lato in cui si apre. I sottomenu ereditano entrambi.',
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

      avatar: {
        name: 'Avatar',
        title: 'Componente avatar per Angular',
        summary: 'La foto di una persona, o le sue iniziali su un colore che è sempre il suo.',
        description:
          'Avatar Angular con iniziali al posto della foto mancante, un colore stabile per ogni nome, pallini di stato e gruppi, leggibili con ogni tema.',
        apiDescription:
          'Riferimento API dell’avatar Needless UI: nuiAvatar con nome, foto, dimensione, forma e stato, più nuiAvatarGroup.',
        a11yDescription:
          'Accessibilità dell’avatar Needless UI: ruolo e nome dell’immagine, avatar decorativi e iniziali che mantengono un contrasto di 4,5:1.',
        overview: [
          'Il componente <code>nuiAvatar</code> mostra una foto, oppure le iniziali della persona quando la foto manca o non si carica. Le iniziali stanno su un colore calcolato dal nome, così la stessa persona ha lo stesso colore ovunque.',
          'Ogni tonalità è limitata a una luminosità e a una crominanza che mantengono le iniziali bianche sopra un contrasto di 4,5:1, qualunque siano il nome e il tema.',
        ],
        examples: {
          people: {
            title: 'Iniziali, foto e stato',
            text: 'Senza <code>src</code>, iniziali e colore derivano da <code>name</code>. <code>status</code> aggiunge un pallino di presenza.',
          },
          group: {
            title: 'Gruppi, dimensioni e forme',
            text: '<code>nuiAvatarGroup</code> sovrappone una fila di avatar. <code>size</code> accetta <code>sm</code>, <code>md</code> o <code>lg</code>, e <code>shape="square"</code> è adatto a team e app.',
          },
        },
        api: {
          NuiAvatar: {
            summary: 'Una foto o delle iniziali, con il nome della persona.',
            members: {
              name: 'Il nome della persona. Da qui derivano nome accessibile, iniziali e colore.',
              src: 'URL della foto. Se non si carica, al suo posto compaiono le iniziali.',
              size: 'Dimensione: <code>sm</code>, <code>md</code> o <code>lg</code>.',
              shape: '<code>circle</code> o <code>square</code>.',
              status:
                'Un pallino di presenza: <code>online</code>, <code>away</code>, <code>busy</code> o <code>offline</code>.',
              label: 'Un nome accessibile che dice più del solo nome, come «Ada Lovelace, online».',
              decorative:
                'Nasconde l’avatar alle tecnologie assistive, per gli avatar accanto al nome visibile.',
            },
          },
          NuiAvatarGroup: {
            summary: 'Una fila di avatar sovrapposti. Dagli un nome con <code>aria-label</code>.',
            members: {},
          },
        },
        keyboard: [],
        notes: [
          'Un avatar è un’immagine (<code>role="img"</code>) con il nome della persona. Accanto al suo nome visibile, imposta <code>decorative</code> così gli screen reader non lo leggono due volte.',
          'Il pallino di stato è solo visivo. Quando lo stato conta, includilo in <code>label</code>.',
          'Le iniziali mantengono un contrasto di almeno 4,5:1 su ogni colore generato.',
        ],
      },

      breadcrumbs: {
        name: 'Breadcrumbs',
        title: 'Componente breadcrumbs per Angular',
        summary: 'Il percorso di pagine che porta a quella corrente.',
        description:
          'Breadcrumbs Angular accessibili su nav ed elenco nativi, con separatori CSS che si specchiano nel testo da destra a sinistra e percorsi lunghi che scorrono.',
        apiDescription:
          'Riferimento API dei breadcrumbs Needless UI: la direttiva nuiBreadcrumbs e l’etichetta del suo landmark di navigazione.',
        a11yDescription:
          'Accessibilità dei breadcrumbs Needless UI: landmark di navigazione, semantica di elenco, pagina corrente e aree di tocco.',
        overview: [
          'I breadcrumbs mostrano dove si trova una pagina all’interno del sito. La direttiva <code>nuiBreadcrumbs</code> dà stile a un <code>&lt;nav&gt;</code> nativo e al suo elenco; l’ultima voce è la pagina corrente, contrassegnata da <code>aria-current="page"</code>.',
          'Un percorso più lungo del suo contenitore scorre in orizzontale invece di andare a capo. Parte già scorso fino alla fine, e le estremità sfumano dove c’è altro da vedere.',
        ],
        examples: {
          trail: {
            title: 'Un percorso',
            text: 'Link alle pagine superiori, poi la pagina corrente come testo semplice con <code>aria-current="page"</code>.',
          },
          long: {
            title: 'Percorsi lunghi',
            text: 'In un contenitore stretto il percorso scorre, partendo con la pagina corrente in vista.',
          },
        },
        api: {
          NuiBreadcrumbs: {
            summary: 'Dà stile di breadcrumbs a un <code>&lt;nav&gt;</code> e al suo elenco.',
            members: { label: 'Nome accessibile del landmark di navigazione.' },
          },
        },
        keyboard: [['Tab', 'Passa al link successivo del percorso.']],
        notes: [
          'È un landmark di navigazione con un semplice elenco, quindi gli screen reader annunciano quante pagine ha il percorso.',
          'I separatori sono disegnati con il CSS, quindi non vengono letti ad alta voce, e si specchiano nel testo da destra a sinistra.',
          'Ogni link è alto almeno 24px.',
        ],
      },

      empty: {
        name: 'Stato vuoto',
        title: 'Componente stato vuoto per Angular',
        summary: 'Cosa mostrare quando non c’è niente da mostrare, e come uscirne.',
        description:
          'Stato vuoto Angular con immagine, titolo, breve spiegazione e azioni, più quattro illustrazioni integrate che fluttuano dolcemente.',
        apiDescription:
          'Riferimento API dello stato vuoto Needless UI: nuiEmpty e le sue parti per immagine, titolo, descrizione e azioni.',
        a11yDescription:
          'Accessibilità dello stato vuoto Needless UI: immagini decorative, intestazioni significative e riduzione del movimento.',
        overview: [
          'Uno stato vuoto sostituisce un elenco, una tabella o una pagina che non contiene ancora nulla. Spiega il perché e propone il passo successivo.',
          'La parte media accoglie la tua immagine, oppure ne disegna una integrata: <code>search</code>, <code>inbox</code>, <code>files</code> o <code>error</code>.',
        ],
        examples: {
          search: {
            title: 'Nessun risultato',
            text: 'Un titolo che dice cosa è successo, una riga di aiuto e le azioni per uscirne.',
          },
          pictures: {
            title: 'Immagini integrate',
            text: 'Imposta <code>illustration</code> su <code>nuiEmptyMedia</code>. Le immagini seguono il tema e fluttuano, a meno che il movimento non sia ridotto.',
          },
        },
        api: {
          NuiEmpty: { summary: 'Il contenitore: una colonna centrata.', members: {} },
          NuiEmptyMedia: {
            summary: 'L’immagine, nascosta alle tecnologie assistive.',
            members: {
              illustration:
                'Un’immagine integrata: <code>search</code>, <code>inbox</code>, <code>files</code> o <code>error</code>.',
            },
          },
          NuiEmptyTitle: {
            summary: 'Il titolo. Usa il livello di intestazione adatto alla pagina.',
            members: {},
          },
          NuiEmptyDescription: { summary: 'Una riga di spiegazione.', members: {} },
          NuiEmptyActions: { summary: 'Una riga di pulsanti.', members: {} },
        },
        keyboard: [],
        notes: [
          'L’immagine è decorativa (<code>aria-hidden</code>): il messaggio lo portano titolo e descrizione.',
          'Usa un’intestazione per il titolo, al livello adatto alla struttura della pagina.',
          'Le immagini integrate smettono di fluttuare quando l’utente preferisce meno movimento.',
        ],
      },

      'number-field': {
        name: 'Campo numerico',
        title: 'Componente campo numerico per Angular',
        summary: 'Un input numerico con pulsanti di incremento, formattato per ogni locale.',
        description:
          'Campo numerico Angular accessibile: uno spinbutton con pulsanti di incremento, passi da tastiera, min e max e formati locali per valute, percentuali e unità.',
        apiDescription:
          'Riferimento API del campo numerico Needless UI: nuiNumberField, nuiNumberInput con min, max, step e format, e nuiNumberStep.',
        a11yDescription:
          'Interazione da tastiera e accessibilità del campo numerico Needless UI: ruolo spinbutton, frecce, tasti pagina e pulsanti di incremento.',
        overview: [
          'Il campo numerico è un input di testo che contiene un numero. Mostra il numero formattato secondo il locale, rilegge il testo digitato nello stesso formato e, quando perde il focus, lo allinea a <code>step</code> tra <code>min</code> e <code>max</code>.',
          'Legge anche cifre e separatori nativi: numeri arabo-indiani, persiani e devanagari, spazi e punti come separatori delle migliaia e ogni segno meno. Tenendo premuto un pulsante di incremento, lo scatto si ripete sempre più velocemente.',
        ],
        examples: {
          guests: {
            title: 'Pulsanti di incremento',
            text: 'Pulsanti su ogni lato, disattivati a <code>min</code> e <code>max</code>. Anche le frecce della tastiera cambiano il valore a scatti.',
          },
          formats: {
            title: 'Valuta e percentuale',
            text: 'Passa le opzioni di <code>Intl.NumberFormat</code> a <code>format</code> insieme a un <code>locale</code>. Il valore resta un semplice numero.',
          },
        },
        api: {
          NuiNumberField: {
            summary: 'Raggruppa l’input con i suoi pulsanti di incremento.',
            members: {},
          },
          NuiNumberInput: {
            summary: 'Un input di testo che contiene un numero, come spinbutton ARIA.',
            members: {
              value: 'Il numero, o <code>null</code> se è vuoto. Funziona anche con i moduli.',
              min: 'Valore minimo consentito.',
              max: 'Valore massimo consentito.',
              step: 'Di quanto cambia il valore a ogni passo. Quando l’input perde il focus, il valore si allinea a questo passo.',
              format:
                "Opzioni di <code>Intl.NumberFormat</code>, come <code>{ style: 'currency', currency: 'EUR' }</code>.",
              locale: 'Locale per formattare e leggere i numeri.',
              disabled: 'Disattiva l’input e i suoi pulsanti.',
              stepBy: 'Avanza (positivo) o arretra (negativo) di un certo numero di passi.',
            },
          },
          NuiNumberStep: {
            summary: 'Un pulsante di incremento. Tenerlo premuto ripete l’azione.',
            members: {
              nuiNumberStep:
                '<code>1</code> sale di un passo e <code>-1</code> scende di un passo.',
              label: 'Nome accessibile. Di default è «Increase» o «Decrease».',
            },
          },
        },
        keyboard: [
          ['Freccia su e giù', 'Aumenta o diminuisce il valore di un passo.'],
          ['Pag su e Pag giù', 'Avanza o arretra di dieci passi.'],
          ['Home e Fine', 'Va al minimo o al massimo.'],
          ['Invio', 'Conferma il valore digitato.'],
        ],
        notes: [
          'L’input è uno <code>spinbutton</code> con <code>aria-valuenow</code>, <code>aria-valuemin</code>, <code>aria-valuemax</code> e il valore formattato come <code>aria-valuetext</code>.',
          'I pulsanti di incremento restano fuori dall’ordine di tabulazione, perché i tasti fanno lo stesso lavoro, ma hanno un nome e sono collegati all’input con <code>aria-controls</code>.',
          'Etichetta l’input con <code>aria-label</code> o con un <code>&lt;label&gt;</code>.',
        ],
      },

      otp: {
        name: 'Campo OTP',
        title: 'Campo OTP e codice di verifica per Angular',
        summary: 'Codici di verifica in caselle separate, su un unico input reale.',
        description:
          'Campo OTP Angular accessibile: un campo nativo sotto le caselle, compilazione da SMS, WebOTP, pulizia all’incolla, gruppi, mascheratura e vibrazione d’errore.',
        apiDescription:
          'Riferimento API del campo OTP Needless UI: nuiOtp con lunghezza, pattern, gruppi e mascheratura, e nuiOtpInput con WebOTP.',
        a11yDescription:
          'Tastiera e accessibilità del campo OTP Needless UI: un campo di testo etichettato, un anello di focus visibile e compilazione automatica.',
        overview: [
          'Il campo OTP sembra una fila di caselle, ma sotto c’è un unico <code>&lt;input&gt;</code> nativo. Compilazione automatica da SMS (<code>autocomplete="one-time-code"</code>), incolla, password manager, moduli e screen reader vedono tutti un normale campo di testo.',
          'I codici incollati vengono ripuliti, così «123-456» e «123 456» funzionano entrambi, e i caratteri che il pattern non consente vengono rifiutati. Su Android, <code>webOtp</code> compila il codice dall’SMS appena arriva.',
        ],
        examples: {
          verify: {
            title: 'Verifica',
            text: '<code>(completed)</code> scatta quando si riempie l’ultima casella. Imposta <code>aria-invalid</code> sull’input per rifiutare un codice: le caselle diventano rosse e vibrano.',
          },
          letters: {
            title: 'Lettere, gruppi e mascheratura',
            text: '<code>pattern="alphanumeric"</code> accetta anche le lettere, <code>[groups]</code> aggiunge i separatori e <code>masked</code> disegna dei puntini.',
          },
        },
        api: {
          NuiOtp: {
            summary: 'Disegna le caselle e avvolge l’input.',
            members: {
              length: 'Numero di caratteri.',
              pattern: '<code>digits</code>, oppure <code>alphanumeric</code> per lettere e cifre.',
              groups:
                'Dimensioni dei gruppi, disegnati con un separatore tra l’uno e l’altro, come <code>[3, 3]</code>.',
              masked: 'Disegna puntini al posto dei caratteri.',
              completed: 'Emette il codice ogni volta che si riempie l’ultima casella.',
            },
          },
          NuiOtpInput: {
            summary: 'L’input reale. Riceve gli attributi che servono a un codice monouso.',
            members: {
              webOtp:
                'Compila il codice da un SMS in arrivo tramite l’API WebOTP, dove supportata.',
            },
          },
        },
        keyboard: [
          ['Cifre o lettere', 'Riempiono la casella corrente e passano alla successiva.'],
          ['Backspace', 'Cancella il carattere prima del cursore.'],
          [
            'Freccia sinistra e destra',
            'Spostano di una casella; una casella piena viene selezionata, così digitando la si sostituisce.',
          ],
          ['Incolla', 'Riempie le caselle da un codice copiato.'],
        ],
        notes: [
          'Gli screen reader trovano un solo campo di testo. Etichettalo con <code>aria-label</code> o con un <code>&lt;label&gt;</code>.',
          'Le caselle sono nascoste alle tecnologie assistive; la casella in modifica mostra l’anello di focus.',
          'Con la riduzione del movimento il cursore non lampeggia e le caselle non saltellano né vibrano.',
        ],
      },

      rating: {
        name: 'Valutazione',
        title: 'Componente valutazione a stelle per Angular',
        summary: 'Stelle per dare un voto, su veri radio button.',
        description:
          'Valutazione a stelle Angular accessibile su radio button nativi: tastiera e moduli, anteprima al passaggio del mouse, azzeramento e frazioni in sola lettura.',
        apiDescription:
          'Riferimento API della valutazione Needless UI: nuiRating con valore, massimo, modalità sola lettura e azzerabile ed etichette traducibili.',
        a11yDescription:
          'Interazione da tastiera e accessibilità della valutazione Needless UI: gruppo radio con nome, stelle etichettate e immagine in sola lettura.',
        overview: [
          'La valutazione è un gruppo di radio button nativi disegnati come stelle. Frecce, moduli e screen reader funzionano come con qualsiasi gruppo radio; il CSS riempie le stelle e mostra l’anteprima di un nuovo voto sotto il puntatore.',
          'In sola lettura mostra qualsiasi frazione, come una media di 4,3.',
        ],
        examples: {
          pick: {
            title: 'Dare un voto',
            text: 'Collega <code>[(value)]</code> o un modulo. Con <code>clearable</code>, scegliere di nuovo la stessa stella azzera la valutazione.',
          },
          average: {
            title: 'Mostrare una media',
            text: '<code>readonly</code> riempie le stelle fino a qualsiasi frazione e dà all’immagine il nome «Rated 4.3 out of 5».',
          },
        },
        api: {
          NuiRating: {
            summary:
              'Un gruppo radio di stelle, oppure l’immagine in sola lettura di una valutazione.',
            members: {
              value: 'La valutazione, o <code>null</code>. Funziona anche con i moduli.',
              max: 'Numero di stelle.',
              readonly: 'Mostra il valore, con qualsiasi frazione, invece di chiederne uno.',
              disabled: 'Disattiva tutte le stelle.',
              clearable: 'Scegliere di nuovo la stella corrente azzera la valutazione.',
              name: 'Nome condiviso dai radio button. Generato di default.',
              starLabel: 'Nome accessibile di ogni stella, in funzione del suo valore.',
              readonlyLabel: 'Nome accessibile in modalità sola lettura.',
            },
          },
        },
        keyboard: [
          ['Tab', 'Entra nel gruppo, sulla stella selezionata.'],
          ['Frecce', 'Cambiano la valutazione.'],
          ['Spazio', 'Seleziona la stella con il focus.'],
        ],
        notes: [
          'Ogni stella è un radio button nativo con il nome «3 stars». Dai un nome al gruppo con <code>aria-label</code>.',
          'In sola lettura, la valutazione è un’immagine (<code>role="img"</code>) con il nome «Rated 4.3 out of 5».',
          'Le stelle sono disegnate con maschere CSS, quindi seguono i forced colors.',
        ],
      },

      skeleton: {
        name: 'Skeleton',
        title: 'Componente skeleton loader per Angular',
        summary: 'Segnaposto che mantengono il layout mentre il contenuto si carica.',
        description:
          'Skeleton loader Angular per testo, cerchi e blocchi, con un unico riflesso che attraversa tutta la pagina e nessuno quando il movimento è ridotto.',
        apiDescription:
          'Riferimento API dello skeleton Needless UI: la direttiva nuiSkeleton e le sue forme text, circle e block.',
        a11yDescription:
          'Accessibilità dello skeleton Needless UI: segnaposto nascosti, regioni aria-busy, riduzione del movimento e forced colors.',
        overview: [
          'Gli skeleton mantengono la forma dei contenuti ancora in caricamento, così la pagina non salta quando arrivano. Dimensionali con il CSS.',
          'Il riflesso è fissato al viewport: un’unica luce attraversa insieme tutti gli skeleton della pagina, qualunque siano dimensione e posizione.',
        ],
        examples: {
          card: {
            title: 'Caricamento di una card',
            text: 'Righe, un cerchio e un blocco al posto di un profilo. La card è <code>aria-busy</code> mentre si carica.',
          },
        },
        api: {
          NuiSkeleton: {
            summary: 'Un segnaposto, nascosto alle tecnologie assistive.',
            members: {
              shape: '<code>text</code> (una riga), <code>circle</code> o <code>block</code>.',
            },
          },
        },
        keyboard: [],
        notes: [
          'Gli skeleton sono nascosti agli screen reader. Imposta <code>aria-busy="true"</code> sulla regione in caricamento e rimuovilo quando arriva il contenuto.',
          'Non c’è nessun riflesso quando l’utente preferisce meno movimento.',
          'In modalità forced colors ogni skeleton riceve un contorno.',
        ],
      },

      toast: {
        name: 'Toast',
        title: 'Notifiche toast per Angular',
        summary:
          'Brevi messaggi che si impilano, si scartano con uno swipe e non rubano mai il focus.',
        description:
          'Toast Angular accessibili: una pila nel top layer, toast per le promise, azioni di annullamento, swipe per chiudere e timer che si fermano con hover e focus.',
        apiDescription:
          'Riferimento API dei toast Needless UI: il servizio NuiToaster, le sue opzioni e i toast per le promise, e la regione nui-toaster.',
        a11yDescription:
          'Interazione da tastiera e accessibilità dei toast Needless UI: annunci, la scorciatoia Alt + T, Esc e timer in pausa.',
        overview: [
          'I toast confermano ciò che è appena successo, o offrono un’azione come «Annulla», senza interrompere. Metti un <code>&lt;nui-toaster&gt;</code> nella shell dell’app, poi chiama <code>NuiToaster</code> da qualsiasi punto.',
          'Si impilano dietro il più recente e si aprono a ventaglio al passaggio del mouse o con il focus, tutto con la molla scelta. Uno swipe laterale ne scarta uno. I timer si fermano finché la pila ha il mouse sopra o il focus, e finché la pagina è in background.',
        ],
        examples: {
          tones: {
            title: 'Toni',
            text: '<code>show()</code>, <code>success()</code>, <code>warning()</code> e <code>danger()</code>. I toast danger restano più a lungo e vengono annunciati in modo prioritario.',
          },
          actions: {
            title: 'Azioni e promise',
            text: 'Una <code>action</code> aggiunge un pulsante come «Annulla». <code>promise()</code> mostra uno spinner, poi si trasforma nel risultato.',
          },
        },
        api: {
          NuiToaster: {
            summary: 'Il servizio che mostra i toast. Iniettalo ovunque.',
            members: {
              toasts: 'Tutti i toast sullo schermo, dal più recente.',
              show: 'Mostra un toast. Passa un titolo, oppure delle opzioni con descrizione, tono, durata, azione o id.',
              success: 'Mostra un toast di successo.',
              warning: 'Mostra un toast di avviso.',
              danger:
                'Mostra un toast danger. Resta 8 secondi e viene annunciato in modo prioritario.',
              promise:
                'Mostra un toast di caricamento finché la promise non si risolve, poi il suo messaggio di successo o di errore.',
              dismiss: 'Chiude un toast, o tutti.',
            },
          },
          NuiToasterRegion: {
            summary:
              'La regione in cui compaiono i toast. Inseriscila una sola volta, nella shell dell’app.',
            members: {
              position:
                'Angolo o bordo del viewport. Inizio e fine seguono la direzione del testo.',
              expanded: 'Tiene la pila aperta a ventaglio.',
              label: 'Nome accessibile della regione. Indica come raggiungerla.',
              closeLabel: 'Nome accessibile dei pulsanti di chiusura.',
              hotkey:
                'Il tasto, come <code>KeyboardEvent.code</code>, che insieme ad Alt sposta il focus sul toast più recente.',
            },
          },
        },
        keyboard: [
          ['Alt + T', 'Sposta il focus sul toast più recente.'],
          ['Tab', 'Scorre i toast, le loro azioni e i pulsanti di chiusura.'],
          ['Esc', 'Chiude il toast con il focus.'],
        ],
        notes: [
          'Ogni toast viene annunciato quando compare: in modo cortese, oppure prioritario per danger. I toast non prendono mai il focus.',
          'I timer si fermano finché la pila ha il mouse sopra o il focus e finché la pagina è nascosta, e i toast in attesa di una promise non scadono mai.',
          'Tutto ciò su cui l’utente deve agire dovrebbe trovarsi anche fuori dal toast.',
          'Con la riduzione del movimento i toast non si animano né si scartano con lo swipe, e la linea del timer è nascosta.',
        ],
      },
      combobox: {
        name: 'Combobox',
        title: 'Combobox e autocompletamento per Angular',
        summary: 'Un campo di testo che suggerisce opzioni mentre scrivi.',
        description:
          'Combobox Angular accessibile: ricerca fuzzy con evidenziazione, più valori come chip, nuovi valori dal testo digitato e risultati da un server.',
        apiDescription:
          'Riferimento API della combobox Needless UI: nui-combobox con value, values, multiple, create, filtering, loading e clearable, e righe personalizzate.',
        a11yDescription:
          'Tastiera e accessibilità della combobox Needless UI: combobox modificabile con autocompletamento a elenco, discendente attivo, chip e input IME.',
        overview: [
          'La combobox è un campo di testo con un elenco di suggerimenti. La ricerca è fuzzy e ignora gli accenti: le corrispondenze migliori vengono prima e le lettere trovate sono evidenziate. Accetta gli stessi oggetti <a href="/components/select/api#NuiOption"><code>NuiOption</code></a> della select.',
          'Con <code>multiple</code>, le opzioni scelte diventano chip prima del testo, e <code>create</code> trasforma il testo digitato in un nuovo valore. Per i risultati da un server, disattiva <code>filtering</code>, cerca su <code>(queryChange)</code> e imposta <code>loading</code> durante l’attesa.',
        ],
        examples: {
          country: {
            title: 'Ricerca',
            text: 'Le lettere trovate non devono per forza essere vicine, e contano anche le <code>keywords</code>. <code>clearable</code> aggiunge un pulsante per cancellare, e anche Esc cancella il valore.',
          },
          tags: {
            title: 'Chip e nuovi valori',
            text: '<code>multiple</code> mostra i chip e collega <code>[(values)]</code>. Quando il testo non è ancora un’opzione, <code>create</code> propone di aggiungerlo.',
          },
          people: {
            title: 'Risultati dal server',
            text: 'L’elenco mostra ciò che ha inviato il server, senza filtri, con una riga di caricamento durante l’attesa. Le etichette scelte restano quando arrivano nuovi risultati.',
          },
        },
        api: {
          NuiCombobox: {
            summary: 'Un campo di testo che suggerisce opzioni mentre scrivi.',
            members: {
              options:
                'Le opzioni, come oggetti <a href="/components/select/api#NuiOption"><code>NuiOption</code></a>.',
              value: 'Il valore scelto, o <code>null</code>. Funziona anche con i moduli.',
              values: 'I valori scelti, con <code>multiple</code>.',
              multiple: 'Permette di scegliere più opzioni, mostrate come chip.',
              create:
                'Crea un valore dal testo digitato. L’elenco propone allora di aggiungere il testo che non è un’opzione.',
              filtering: 'Filtra le opzioni mentre scrivi. Disattivalo quando le filtra un server.',
              loading: 'Mostra una riga di caricamento mentre i risultati sono in arrivo.',
              clearable:
                'Aggiunge un pulsante che cancella il valore, e permette di cancellarlo con Esc.',
              placeholder: 'Testo mostrato mentre il campo è vuoto.',
              label:
                'Nome accessibile, quando nessun <code>&lt;label&gt;</code> dà un nome al campo.',
              inputId: 'Id del campo di testo, per <code>&lt;label for&gt;</code>.',
              disabled: 'Disattiva il campo.',
              compareWith:
                'Indica se due valori sono la stessa opzione, per i valori che sono oggetti.',
              displayWith:
                'Testo per un valore che non è tra le opzioni, come uno impostato prima che si carichino.',
              virtual:
                'Renderizza solo le righe visibili: sempre, mai, o <code>auto</code> oltre 200 righe.',
              queryChange: 'Emette il testo mentre viene digitato, per una ricerca sul server.',
              openChange: 'Emette quando l’elenco si apre o si chiude.',
              show: 'Apre l’elenco.',
              hide: 'Chiude l’elenco.',
              clear: 'Cancella il valore e il testo.',
              focus: 'Sposta il focus sul campo di testo.',
            },
          },
          NuiOptionTemplate: {
            summary:
              'Mettilo su un <code>ng-template</code> dentro il componente per disegnare tu ogni riga. Il contesto contiene l’opzione e la sua riga.',
            members: {},
          },
          NuiOptionText: {
            summary:
              'Disegna l’etichetta di un’opzione con le lettere trovate evidenziate, la sua descrizione e il suo percorso, per le tue righe.',
            members: { nuiOptionText: 'La riga, dal contesto del template.' },
          },
        },
        keyboard: [
          ['Freccia giù e su', 'Apre l’elenco, poi si sposta tra le opzioni.'],
          ['Pag giù e Pag su', 'Si sposta di dieci opzioni.'],
          ['Invio', 'Sceglie l’opzione attiva.'],
          ['Alt + freccia giù o su', 'Apre o chiude l’elenco.'],
          ['Esc', 'Chiude l’elenco; poi cancella il testo, o il valore se è azzerabile.'],
          ['Backspace', 'In un campo vuoto, rimuove l’ultimo chip.'],
          [
            'Freccia sinistra',
            'Dall’inizio del testo (freccia destra nel testo da destra a sinistra), passa ai chip. Lì, Backspace o Canc rimuove un chip.',
          ],
        ],
        notes: [
          'Il campo di testo è una <code>combobox</code> con <code>aria-autocomplete="list"</code>, <code>aria-expanded</code> e <code>aria-controls</code>. Il focus resta lì, e <code>aria-activedescendant</code> punta all’opzione attiva.',
          'I chip formano un elenco con nome, e ogni pulsante di rimozione prende il nome dal suo chip, come «Remove Italy».',
          '«No matches» e la riga di caricamento sono messaggi di stato, quindi gli screen reader li annunciano.',
          'I tasti che confermano una composizione IME, come per il cinese o il giapponese, vengono lasciati all’IME.',
        ],
      },
      command: {
        name: 'Palette dei comandi',
        title: 'Componente palette dei comandi per Angular',
        summary: 'Ogni comando della tua app, a portata di tasto.',
        description:
          'Palette dei comandi Angular accessibile: ⌘K ovunque, ricerca fuzzy anche nelle pagine annidate, gruppi e scorciatoie nella notazione di ogni piattaforma.',
        apiDescription:
          'Riferimento API della palette dei comandi Needless UI: nui-command-palette con commands, hotkey, bindShortcuts e loop, e la struttura di NuiCommand.',
        a11yDescription:
          'Tastiera e accessibilità della palette dei comandi Needless UI: un dialog modale con una combobox di ricerca, discendente attivo e navigazione tra pagine.',
        overview: [
          'La palette dei comandi è un campo di ricerca sui comandi della tua app, in un dialog modale. ⌘K la apre da qualsiasi punto (Ctrl+K su Windows e Linux). Scegli un comando: la palette si chiude, poi lo esegue.',
          'I comandi possono avere un gruppo, una descrizione, parole chiave e una scorciatoia, mostrata con i simboli di ogni piattaforma. Un comando con <code>children</code> apre una pagina di altri comandi, e dal livello principale la ricerca raggiunge anche le pagine.',
        ],
        examples: {
          palette: {
            title: 'Comandi e pagine',
            text: 'Gruppi, scorciatoie, un comando disattivato e due pagine. <code>(run)</code> ti dice cosa è stato eseguito; funziona anche il <code>run</code> del comando stesso.',
          },
          people: {
            title: 'Righe personalizzate',
            text: 'Un <code>nuiOptionTemplate</code> disegna ogni riga, e <code>nuiOptionText</code> mantiene le corrispondenze evidenziate. <code>[hotkey]="null"</code> lascia ⌘K alla palette qui sopra.',
          },
        },
        api: {
          NuiCommandPalette: {
            summary: 'Un dialog modale con un campo di ricerca sui tuoi comandi.',
            members: {
              commands: 'I comandi, come oggetti <code>NuiCommand</code>.',
              open: 'Indica se la palette è aperta.',
              hotkey:
                'La scorciatoia che la apre e la chiude da qualsiasi punto, o <code>null</code> per nessuna. <code>mod</code> è ⌘ sui dispositivi Apple e Ctrl altrove.',
              bindShortcuts:
                'Esegue i comandi anche con le loro scorciatoie, ovunque nella pagina.',
              loop: 'La freccia giù sull’ultimo comando passa al primo, e la freccia su sul primo passa all’ultimo.',
              filtering:
                'Filtra mentre scrivi. Disattivalo quando è un server a filtrare i comandi.',
              loading: 'Mostra una riga di caricamento mentre i risultati sono in arrivo.',
              hints: 'Mostra in basso i tasti da usare.',
              virtual:
                'Renderizza solo le righe visibili: sempre, mai, o <code>auto</code> oltre 200 righe.',
              label: 'Nome accessibile del dialog e del suo campo di ricerca.',
              placeholder: 'Testo mostrato nel campo di ricerca vuoto.',
              run: 'Emette ogni comando eseguito.',
              queryChange: 'Emette il testo mentre viene digitato, per una ricerca sul server.',
              show: 'Apre la palette.',
              hide: 'Chiude la palette.',
              toggle: 'Apre la palette, o la chiude.',
              back: 'Torna alla pagina precedente.',
            },
          },
          NuiCommand: {
            summary: 'Un comando, o una pagina di comandi.',
            members: {
              label: 'Il testo mostrato e cercato.',
              description: 'Testo secondario sotto l’etichetta.',
              group: 'I comandi con lo stesso gruppo sono elencati sotto quell’intestazione.',
              keywords: 'Altre parole che la ricerca trova, come i sinonimi.',
              shortcut: 'Tasti mostrati accanto al comando, come <code>mod+shift+p</code>.',
              disabled: 'Visibile, ma non si può eseguire.',
              children:
                'Comandi di un livello inferiore: scegliere questo comando li apre come pagina.',
              run: 'Viene eseguito quando lo si sceglie, dopo la chiusura della palette.',
              id: 'Per i tuoi scopi, ad esempio distinguere i comandi in <code>(run)</code>.',
            },
          },
        },
        keyboard: [
          ['⌘K o Ctrl+K', 'Apre o chiude la palette.'],
          ['Freccia giù e su', 'Si sposta tra i comandi, ricominciando dall’altra estremità.'],
          ['Pag giù e Pag su', 'Si sposta di dieci comandi.'],
          ['Invio', 'Esegue il comando attivo, o apre la sua pagina.'],
          ['Esc', 'Torna indietro di una pagina; al livello principale, chiude la palette.'],
          ['Backspace', 'In un campo vuoto dentro una pagina, torna indietro.'],
        ],
        notes: [
          'È un <code>&lt;dialog&gt;</code> modale nativo: la pagina dietro è inerte, il focus resta all’interno e la chiusura riporta il focus dov’era.',
          'Il campo di ricerca è una <code>combobox</code> che punta al comando attivo con <code>aria-activedescendant</code>. In una pagina, prende il nome della pagina.',
          'I tasti delle scorciatoie sono testo in ogni opzione, quindi gli screen reader li leggono. I suggerimenti dei tasti in basso sono nascosti alle tecnologie assistive.',
          'Le scorciatoie senza Ctrl, Alt o ⌘ non si attivano mentre scrivi in un campo.',
        ],
      },
      popover: {
        name: 'Popover',
        title: 'Componenti popover e hovercard per Angular',
        summary:
          'Pannelli flottanti accanto a un pulsante e tooltip ricchi al passaggio del mouse.',
        description:
          'Popover e hovercard Angular accessibili sull’API popover nativa: posizione che si ribalta e segue, frecce, chiusura al clic esterno e ritardi di hover.',
        apiDescription:
          'Riferimento API del popover Needless UI: nuiPopover e nuiHovercard con side, align, offset e arrow, e le loro direttive trigger.',
        a11yDescription:
          'Tastiera e accessibilità di popover e hovercard Needless UI: ruoli dialog e tooltip, ritorno del focus, tasto Esc e WCAG 1.4.13.',
        overview: [
          'Un popover è un piccolo pannello che si apre accanto a un pulsante, per contenuti interattivi: filtri, un breve modulo, un selettore di colore. È un <code>popover="auto"</code> nativo, quindi il browser lo chiude con Esc o con un clic esterno, riporta il focus e lo mette subito dopo il suo trigger nell’ordine di tabulazione.',
          'Una hovercard è un tooltip ricco. Si apre dopo un breve passaggio del mouse, o subito con il focus da tastiera, e descrive il suo trigger. Resta aperta mentre il puntatore ci si sposta sopra, così il testo si può leggere e selezionare.',
          'Entrambi passano al lato opposto quando manca spazio, restano sullo schermo e seguono il loro trigger mentre la pagina scorre.',
        ],
        examples: {
          filters: {
            title: 'Filtri',
            text: 'Un popover con un modulo all’interno. <code>arrow</code> lo fa puntare verso il suo trigger, e <code>hide()</code> lo chiude da codice.',
          },
          profile: {
            title: 'Hovercard',
            text: 'Passa il mouse su un nome, o raggiungilo con Tab. La card descrive il link, quindi gli screen reader la leggono dopo il nome.',
          },
          sides: {
            title: 'Lati e animazioni di entrata',
            text: '<code>side</code> e <code>align</code> stabiliscono dove si apre; <code>start</code> e <code>end</code> seguono la direzione del testo. <code>enter</code> e <code>motion</code> stabiliscono come entra in scena.',
          },
        },
        api: {
          NuiPopover: {
            summary: 'Un popover nativo posizionato accanto all’elemento che lo ha aperto.',
            members: {
              side: 'Il lato del trigger su cui si apre. Passa al lato opposto quando manca spazio.',
              align: 'Come si allinea al trigger lungo quel lato.',
              offset: 'Distanza tra il trigger e il pannello, in pixel.',
              arrow: 'Mostra una freccia che punta al trigger.',
              openChange: 'Emette quando si apre o si chiude.',
              show: 'Lo apre accanto a qualsiasi elemento.',
              hide: 'Lo chiude.',
            },
          },
          NuiPopoverTrigger: {
            summary:
              'Un pulsante che apre e chiude un popover, con il <code>popovertarget</code> nativo.',
            members: { nuiPopoverTrigger: 'Il popover da aprire.' },
          },
          NuiHovercard: {
            summary: 'Un tooltip ricco che descrive il suo trigger.',
            members: {
              side: 'Il lato del trigger su cui si apre. Passa al lato opposto quando manca spazio.',
              align: 'Come si allinea al trigger lungo quel lato.',
              offset: 'Distanza tra il trigger e la card, in pixel.',
              arrow: 'Mostra una freccia che punta al trigger.',
              openDelay:
                'Millisecondi di hover prima dell’apertura. Il focus da tastiera la apre subito.',
              closeDelay: 'Millisecondi prima della chiusura, dopo che il puntatore è uscito.',
              openChange: 'Emette quando si apre o si chiude.',
              show: 'La apre accanto a qualsiasi elemento.',
              hide: 'La chiude.',
            },
          },
          NuiHovercardTrigger: {
            summary:
              'Mostra una hovercard al passaggio del mouse e con il focus da tastiera, e ne fa la descrizione di questo elemento.',
            members: { nuiHovercardTrigger: 'La hovercard da mostrare.' },
          },
        },
        keyboard: [
          ['Invio o Spazio sul trigger', 'Apre o chiude il popover.'],
          ['Tab', 'Entra in un popover aperto, che viene subito dopo il suo trigger.'],
          ['Esc', 'Chiude il popover e riporta il focus sul suo trigger, o nasconde la hovercard.'],
        ],
        notes: [
          'Il popover è un <code>dialog</code> non modale: dagli un nome con <code>aria-label</code> o <code>aria-labelledby</code>. Il suo trigger riceve <code>aria-haspopup</code> e l’<code>aria-expanded</code> del browser.',
          'La hovercard è un <code>tooltip</code> e l’<code>aria-describedby</code> del suo trigger, quindi il suo testo viene letto insieme al trigger. Non metterci controlli; per quelli usa un popover.',
          'La hovercard rispetta WCAG 1.4.13: Esc la nasconde senza spostare il focus, il puntatore può andarci sopra, e resta visibile finché ha il mouse sopra o il focus.',
        ],
      },
      select: {
        name: 'Select',
        title: 'Componente select per Angular',
        summary: 'Scegli una o più opzioni, da un elenco breve o enorme.',
        description:
          'Select Angular accessibile: singola o multipla, gruppi, alberi, ricerca per digitazione, seleziona tutto e scorrimento virtuale per elenchi di ogni lunghezza.',
        apiDescription:
          'Riferimento API della select Needless UI: nui-select con value, values, multiple, selectAll e virtual, la struttura di NuiOption e righe personalizzate.',
        a11yDescription:
          'Accessibilità della select Needless UI: combobox di sola selezione con listbox o albero, discendente attivo, ricerca per digitazione e tasti per gli alberi.',
        overview: [
          'La select è un pulsante che apre un elenco di opzioni. Passale <code>options</code>, un array di <code>NuiOption</code>, e collega <code>[(value)]</code>, oppure <code>[(values)]</code> con <code>multiple</code>. Funziona anche con Signal Forms, i form reattivi e <code>ngModel</code>.',
          'Le opzioni possono avere un <code>group</code>, una <code>description</code> e delle <code>keywords</code>, e <code>children</code> trasforma l’elenco in un albero. Oltre le 200 righe, vengono renderizzate solo quelle visibili, così 100.000 opzioni si aprono veloci come dieci.',
          'Per digitare e filtrare, usa invece la <a href="/components/combobox">combobox</a>.',
        ],
        examples: {
          countries: {
            title: 'Gruppi',
            text: 'Le opzioni con un <code>group</code> sono elencate sotto la sua intestazione. Digitando una lettera si salta alla prossima opzione che inizia con essa.',
          },
          toppings: {
            title: 'Più opzioni insieme',
            text: '<code>multiple</code> tiene aperto l’elenco e collega <code>[(values)]</code>. <code>selectAll</code> aggiunge un pulsante che seleziona o deseleziona tutte le opzioni. Le opzioni disattivate non si possono scegliere.',
          },
          folders: {
            title: 'Albero',
            text: 'Le opzioni con <code>children</code> formano un albero. L’elenco si apre con le cartelle dell’opzione scelta già espanse.',
          },
          zones: {
            title: 'Elenchi lunghi',
            text: 'Tutti i fusi orari, per regione. Oltre le 200 righe, vengono renderizzate solo quelle visibili, e l’opzione attiva resta renderizzata per gli screen reader.',
          },
        },
        api: {
          NuiSelect: {
            summary: 'Un pulsante che apre un elenco di opzioni.',
            members: {
              options: 'Le opzioni, come oggetti <code>NuiOption</code>.',
              value: 'Il valore scelto, o <code>null</code>. Funziona anche con i moduli.',
              values: 'I valori scelti, con <code>multiple</code>.',
              multiple: 'Permette di scegliere più opzioni. L’elenco resta aperto mentre scegli.',
              selectAll:
                'Con <code>multiple</code>, aggiunge un pulsante che seleziona o deseleziona tutte le opzioni.',
              placeholder: 'Testo mostrato finché non si sceglie nulla.',
              label:
                'Nome accessibile, quando nessun <code>&lt;label&gt;</code> dà un nome al pulsante.',
              triggerId: 'Id del pulsante, per <code>&lt;label for&gt;</code>.',
              disabled: 'Disattiva la select.',
              compareWith:
                'Indica se due valori sono la stessa opzione, per i valori che sono oggetti.',
              virtual:
                'Renderizza solo le righe visibili: sempre, mai, o <code>auto</code> oltre 200 righe.',
              openChange: 'Emette quando l’elenco si apre o si chiude.',
              show: 'Apre l’elenco.',
              hide: 'Chiude l’elenco.',
              focus: 'Sposta il focus sul pulsante.',
            },
          },
          NuiOption: {
            summary: 'Un’opzione. La usano la select, la combobox e la palette dei comandi.',
            members: {
              value: 'Il valore impostato quando la si sceglie. Di qualsiasi tipo.',
              label: 'Il testo mostrato e cercato.',
              description: 'Testo secondario sotto l’etichetta.',
              group:
                'Le opzioni con lo stesso gruppo sono elencate in ordine sotto quell’intestazione.',
              keywords: 'Altre parole che la ricerca trova, come sinonimi o codici.',
              disabled: 'Visibile, ma non si può scegliere.',
              children:
                'Opzioni di un livello più in basso, che trasformano l’elenco in un albero.',
            },
          },
          NuiOptionTemplate: {
            summary:
              'Mettilo su un <code>ng-template</code> dentro il componente per disegnare tu ogni riga. Il contesto contiene l’opzione e la sua riga.',
            members: {},
          },
          NuiOptionText: {
            summary:
              'Disegna l’etichetta di un’opzione con le lettere trovate evidenziate, la sua descrizione e il suo percorso, per le tue righe.',
            members: { nuiOptionText: 'La riga, dal contesto del template.' },
          },
        },
        keyboard: [
          ['Freccia giù e su', 'Apre l’elenco, poi si sposta tra le opzioni.'],
          ['Home e Fine', 'Va alla prima o all’ultima opzione.'],
          ['Pag giù e Pag su', 'Si sposta di dieci opzioni.'],
          ['Invio o Spazio', 'Apre l’elenco, o sceglie l’opzione attiva.'],
          ['Lettere', 'Passa alla prossima opzione che inizia con quelle lettere.'],
          [
            'Freccia destra e sinistra',
            'In un albero, espande un’opzione o passa al suo primo figlio; la comprime o passa al genitore. Le frecce si invertono nel testo da destra a sinistra.',
          ],
          ['Alt + freccia su', 'Sceglie l’opzione attiva e chiude l’elenco.'],
          ['Tab', 'Con scelta singola, sceglie l’opzione attiva e prosegue.'],
          ['Esc', 'Chiude l’elenco senza scegliere.'],
        ],
        notes: [
          'Il pulsante è una <code>combobox</code> di sola selezione con <code>aria-expanded</code> e <code>aria-controls</code>. Il focus resta su di esso, e <code>aria-activedescendant</code> punta all’opzione attiva.',
          'L’elenco è una <code>listbox</code>, o un <code>tree</code> con <code>aria-level</code> e <code>aria-expanded</code>. <code>aria-setsize</code> e <code>aria-posinset</code> restano corretti anche quando solo alcune righe sono renderizzate.',
          'L’opzione attiva ha un riempimento pieno e, in modalità forced colors, un contorno.',
          'Dai un nome alla select con un <code>&lt;label for&gt;</code> che punta a <code>triggerId</code>, o con <code>label</code>.',
        ],
      },
      grid: {
        name: 'Griglia dati',
        title: 'Componente griglia dati per Angular',
        summary: 'Ordina, filtra, seleziona, modifica e scorri un numero qualsiasi di righe.',
        description:
          'Griglia dati Angular accessibile su tabella nativa: ordinamento su più colonne, filtri, pagine o scorrimento virtuale, selezione, modifica e colonne spostabili.',
        apiDescription:
          'Riferimento API della griglia dati Needless UI: input e model di nui-grid, la definizione di NuiGridColumn e i template per celle personalizzate.',
        a11yDescription:
          'Tastiera e accessibilità della griglia dati Needless UI: tabella nativa con ruoli grid, un solo tab stop, frecce e annunci.',
        overview: [
          'La griglia dati è una tabella nativa con ordinamento, filtri, paginazione e modifica. Descrivi le <code>columns</code>, passa le <code>rows</code> e ogni cella viene formattata in base al tipo e al locale: numeri, valute, date, sì e no, ed etichette per i valori <code>enum</code>.',
          'Tutto il suo stato è nei model, che puoi collegare, salvare e inviare a un server: <code>sort</code>, <code>filters</code>, <code>search</code>, <code>page</code>, <code>selected</code> e <code>columnState</code> per larghezze, ordine, colonne bloccate e nascoste scelte dagli utenti. Senza paginazione vengono renderizzate solo le righe visibili, così 100.000 righe scorrono come dieci.',
          'Ogni cella è raggiungibile da tastiera, e il pannello di ogni colonna permette di ordinarla, filtrarla, bloccarla, spostarla, adattarla al contenuto e nasconderla.',
        ],
        examples: {
          orders: {
            title: 'Ricerca, ordinamento e paginazione',
            text: 'Scrivi per cercare in tutte le colonne. Fai clic su un’intestazione per ordinare; con Maiusc + clic aggiungi una seconda colonna. <code>nuiGridCell</code> disegna lo stato, e <code>exportCsv()</code> restituisce ciò che è visibile.',
          },
          selection: {
            title: 'Selezione',
            text: '<code>selection="multiple"</code> aggiunge le checkbox e collega le chiavi delle righe selezionate. Maiusc + clic seleziona un intervallo; la checkbox nell’intestazione seleziona tutte le righe che corrispondono.',
          },
          editing: {
            title: 'Modifica',
            text: 'Fai doppio clic su una cella, premi Invio o inizia a scrivere. <code>validate</code> tiene aperto l’editor con un messaggio; una modifica confermata aggiorna <code>rows</code> ed emette <code>cellEdit</code>.',
          },
          big: {
            title: '100.000 righe',
            text: 'Senza paginazione vengono renderizzate solo le righe visibili. Le colonne bloccate restano ai bordi, e <code>columnState</code> conserva il layout scelto dagli utenti.',
          },
          server: {
            title: 'Dati dal server',
            text: 'In modalità <code>server</code> la griglia mostra le righe man mano che arrivano e segnala ogni cambiamento con <code>queryChange</code>. Imposta <code>loading</code> mentre carichi i dati.',
          },
        },
        api: {
          NuiGrid: {
            summary: 'Una griglia dati su una tabella nativa.',
            members: {
              rows: 'I dati. Le modifiche sostituiscono le righe, quindi collegali con <code>[(rows)]</code>.',
              columns: 'Le colonne, come oggetti <code>NuiGridColumn</code>.',
              rowId: 'La chiave di una riga, per la selezione e il tracciamento.',
              label: 'Nome accessibile della griglia.',
              selection: 'Se le righe si possono selezionare, e quante.',
              selected: 'Le chiavi delle righe selezionate.',
              sort: 'L’ordinamento, come oggetti <code>{ column, direction }</code>; il primo ordina per primo.',
              filters: 'Un filtro per ogni id di colonna: un operatore e un valore.',
              search: 'Parole che devono comparire tutte in una riga.',
              pageSize: 'Righe per pagina, o 0 per un unico elenco a scorrimento.',
              page: 'La pagina mostrata, a partire da 0.',
              pageSizes: 'Le scelte nel paginatore.',
              virtual:
                'Renderizza solo le righe visibili: sempre, mai, o <code>auto</code> oltre 100 righe senza paginazione.',
              height: 'Una lunghezza CSS che limita la griglia; il contenuto scorre all’interno.',
              columnState:
                'Larghezza, ordine, blocco e visibilità di ogni colonna, da salvare e ripristinare.',
              mode: '<code>server</code> mostra le righe man mano che arrivano e lascia a te ordinamento, filtri e paginazione.',
              total: 'Il numero di righe sul server.',
              loading: 'Mostra una barra di avanzamento, e righe segnaposto quando non ce ne sono.',
              locale: 'Formatta numeri e date, e legge i numeri digitati.',
              labels: 'Ogni testo che la griglia mostra o annuncia, da tradurre.',
              rowActivate: 'Emette una riga aperta con Invio o con un doppio clic.',
              cellEdit: 'Emette ogni modifica confermata.',
              queryChange: 'Emette ordinamento, filtri, ricerca e pagina a ogni cambiamento.',
              exportCsv: 'Le righe filtrate e ordinate delle colonne visibili, in CSV.',
              focusCell: 'Sposta il focus su una cella; la riga <code>-1</code> è l’intestazione.',
              clearFilters: 'Azzera tutti i filtri e la ricerca.',
            },
          },
          NuiGridColumn: {
            summary: 'Una colonna. Solo <code>id</code> e <code>header</code> sono obbligatori.',
            members: {
              id: 'Univoco; la chiave in ordinamento, filtri e stato delle colonne.',
              header: 'Il testo dell’intestazione.',
              value:
                'Una chiave della riga, o una funzione della riga. Di default è <code>row[id]</code>.',
              type: 'Stabilisce allineamento, ordinamento, filtro ed editor.',
              format:
                'Opzioni di <code>Intl</code> per numeri e date, o una funzione che produce il testo.',
              options:
                'Le opzioni di una colonna <code>enum</code>, come oggetti <code>NuiOption</code>.',
              'width, minWidth, maxWidth': 'In pixel.',
              flex: 'Divide lo spazio rimasto con le altre colonne <code>flex</code>.',
              align: 'Di default dipende dal tipo: numeri e date alla fine.',
              'pinned, hidden': 'Blocco e visibilità iniziali della colonna.',
              'sortable, filterable, resizable, reorderable, hideable':
                'Ognuna si può disattivare con <code>false</code>.',
              compare: 'Un ordinamento personalizzato.',
              'editable, validate':
                'Se le celle si possono modificare, e un messaggio quando un valore non è valido.',
              set: 'Crea la riga modificata. Di default è una copia con il nuovo valore.',
            },
          },
          NuiGridCell: {
            summary:
              'Disegna le celle di una colonna. Il contesto contiene la riga, il valore e il testo.',
            members: { nuiGridCell: 'L’id della colonna.' },
          },
          NuiGridHeader: {
            summary: 'Disegna l’intestazione di una colonna.',
            members: { nuiGridHeader: 'L’id della colonna.' },
          },
          NuiGridEmpty: {
            summary:
              'Cosa si vede quando non ci sono righe. Il contesto indica se le hanno nascoste i filtri.',
            members: {},
          },
        },
        keyboard: [
          [
            'Frecce',
            'Spostano di una cella. Sinistra e destra si invertono nel testo da destra a sinistra.',
          ],
          ['Home e Fine', 'Va alla prima o all’ultima cella della riga; con Ctrl, della griglia.'],
          ['Pag giù e Pag su', 'Si sposta di una schermata di righe.'],
          [
            'Invio o Spazio su un’intestazione',
            'Ordina per la colonna; con Maiusc, la aggiunge all’ordinamento.',
          ],
          ['Alt + freccia giù su un’intestazione', 'Apre il pannello della colonna.'],
          [
            'Alt + freccia sinistra o destra su un’intestazione',
            'Restringe o allarga la colonna; con Maiusc, la sposta.',
          ],
          ['Invio su una cella', 'Modifica la cella, o apre la riga se non è modificabile.'],
          ['F2, o digitare', 'Modifica la cella.'],
          ['Invio, Esc e Tab durante la modifica', 'Conferma, annulla, o conferma e passa oltre.'],
          ['Spazio', 'Seleziona la riga; con Maiusc, le righe dall’ultima selezionata.'],
          ['Ctrl + A', 'Seleziona tutte le righe.'],
        ],
        notes: [
          'Una <code>&lt;table&gt;</code> nativa con <code>role="grid"</code> e il nome dato da <code>label</code>. Le intestazioni hanno <code>aria-sort</code>, e le righe selezionabili <code>aria-selected</code>.',
          'La griglia è un unico tab stop. Il focus passa da una cella all’altra con un <code>tabindex</code> mobile, così gli screen reader leggono ogni cella con le intestazioni di riga e di colonna.',
          '<code>aria-rowcount</code>, <code>aria-rowindex</code> e <code>aria-colindex</code> restano corretti anche con righe paginate o virtualizzate.',
          'Ordinamento, filtri, paginazione ed errori di modifica vengono annunciati in modo cortese in una regione di stato.',
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
