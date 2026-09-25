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
          'Le righe possono anche essere annidate. <code>groupBy</code> le raggruppa per colonne, con l’<code>aggregate</code> di ogni colonna sulle righe di gruppo e in una riga <code>totals</code>; <code>children</code> mostra dati ad albero; e un template <code>nuiGridDetail</code> si apre sotto una riga. Con righe raggruppate o annidate, la tabella è un <code>treegrid</code>.',
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
          groups: {
            title: 'Gruppi e totali',
            text: 'Raggruppa per una o due colonne. Le righe di gruppo contano i loro ordini e calcolano somma e media dei loro importi, e <code>totals</code> fa lo stesso su tutte le righe. La freccia sinistra chiude un gruppo.',
          },
          tree: {
            title: 'Dati ad albero',
            text: '<code>children</code> dà a ogni cartella i suoi file. Le righe si aprono con la freccia destra o con il loro pulsante toggle, e <code>[(expanded)]</code> tiene traccia di quelle aperte. Una ricerca tiene aperte le cartelle sopra un risultato.',
          },
          details: {
            title: 'Dettagli della riga',
            text: 'Un template <code>nuiGridDetail</code> mostra gli articoli di un ordine sotto la sua riga, da una colonna di pulsanti toggle, e <code>[(details)]</code> tiene traccia di quelli aperti.',
          },
          live: {
            title: 'Dati live, esportazione e stampa',
            text: 'I prezzi cambiano ogni due secondi, e <code>flash</code> mostra quali celle sono cambiate. <code>exportXlsx()</code> scarica un vero foglio di calcolo, <code>print()</code> stampa tutte le righe, e <code>layout="auto"</code> mostra delle card sugli schermi stretti.',
          },
          cards: {
            title: 'Card sui telefoni',
            text: '<code>layout="list"</code> mostra le righe come card, e <code>auto</code> lo fa sotto i 36rem. Le card non hanno una riga di intestazione, quindi una barra degli strumenti le ordina, e il suo pulsante «Filter» apre il pannello della colonna che scegli. <code>toolbar</code> può anche mostrarla sopra una tabella, o ometterla.',
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
              'groupBy, collapsed':
                'Le colonne per cui raggruppare le righe, a partire dalla più esterna, e le chiavi dei gruppi chiusi.',
              children: 'I figli di una riga: la griglia mostra dati ad albero.',
              'expanded, details':
                'Le chiavi delle righe aperte nei dati ad albero, e quelle delle righe con i dettagli aperti.',
              'totals, flash':
                'Una riga di aggregati su tutte le righe filtrate; celle che lampeggiano quando il loro testo cambia, nelle righe con un <code>rowId</code> stabile.',
              layout:
                '<code>list</code> mostra le righe come card, e <code>auto</code> lo fa sugli schermi stretti.',
              toolbar:
                'Una barra che ordina le righe e apre il pannello della colonna: sempre, mai, o <code>auto</code> con le card.',
              'exportXlsx, print':
                'Le righe filtrate e ordinate come foglio di calcolo; stampa tutte le righe.',
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
              aggregate:
                'Cosa mostrano le righe di gruppo e la riga dei totali: una somma, una media, un minimo, un massimo, un conteggio o una funzione.',
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
          NuiGridDetail: {
            summary:
              'I dettagli di una riga, mostrati sotto di essa quando è aperta. Il contesto contiene la riga.',
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
          [
            'Freccia destra e sinistra su un gruppo',
            'Lo aprono o lo chiudono; anche sulla prima cella di una riga con figli.',
          ],
          ['Invio su un gruppo', 'Lo apre o lo chiude; Spazio ne seleziona le righe.'],
          ['Invio sul pulsante dei dettagli', 'Mostra o nasconde i dettagli della riga.'],
        ],
        notes: [
          'Una <code>&lt;table&gt;</code> nativa con <code>role="grid"</code> e il nome dato da <code>label</code>. Le intestazioni hanno <code>aria-sort</code>, e le righe selezionabili <code>aria-selected</code>.',
          'La griglia è un unico tab stop. Il focus passa da una cella all’altra con un <code>tabindex</code> mobile, così gli screen reader leggono ogni cella con le intestazioni di riga e di colonna.',
          '<code>aria-rowcount</code>, <code>aria-rowindex</code> e <code>aria-colindex</code> restano corretti anche con righe paginate o virtualizzate.',
          'Ordinamento, filtri, paginazione ed errori di modifica vengono annunciati in modo cortese in una regione di stato.',
          'Le righe raggruppate o annidate fanno della tabella un <code>treegrid</code>: le righe hanno <code>aria-level</code>, <code>aria-setsize</code> e <code>aria-posinset</code>, e <code>aria-expanded</code> quando si possono aprire. Gli aggregati vengono letti con il loro tipo, come «Sum: 475».',
          'Le card non hanno una riga di intestazione, quindi prima viene una barra degli strumenti: un gruppo chiamato «Sort and filter» con una select etichettata per la colonna di ordinamento, pulsanti toggle per la direzione e un pulsante «Filter» che apre il pannello della colonna, dove una select sceglie la colonna. Il tab stop della griglia passa alla prima card.',
        ],
      },
      chat: {
        name: 'Chat',
        title: 'Componente chat AI per Angular',
        summary: 'Parla con un modello: risposte in streaming, tool, versioni e file.',
        description:
          'Chat Angular accessibile per assistenti AI: risposte Markdown in streaming, ragionamento, chiamate ai tool, fonti, file e nuovi tentativi come versioni.',
        apiDescription:
          'Riferimento API della chat Needless UI: input di nui-chat, la NuiChatSession che trasmette le risposte, messaggi, template dei tool e lettori di stream.',
        a11yDescription:
          'Tastiera e accessibilità della chat Needless UI: un feed di messaggi con nome, Pag su e Pag giù, e risposte annunciate solo quando sono complete.',
        overview: [
          'La chat è tutto ciò che sta tra i tuoi utenti e un modello. Crea una <code>NuiChatSession</code> con una funzione <code>respond</code> e <code>&lt;nui-chat&gt;</code> fa il resto: trasmette la risposta in streaming come Markdown, la segue verso il basso finché chi legge non scorre in su e, mentre arriva, trasforma il pulsante di invio in un pulsante di stop.',
          '<code>respond</code> restituisce testo, una promise, una <code>async function*</code> o un Observable, quindi va bene qualsiasi API. Oltre al testo, una risposta può contenere il ragionamento del modello, le sue chiamate ai tool (disegnate dai tuoi template) e le fonti usate. <code>nuiEventStream</code> legge i server-sent events che la maggior parte delle API dei modelli invia in streaming.',
          'Non si perde nulla: una risposta rigenerata o una domanda modificata diventa una nuova versione accanto alla vecchia, e la conversazione conserva ogni ramo. Gli screen reader annunciano ogni risposta quando è completa, non parola per parola.',
        ],
        examples: {
          assistant: {
            title: 'Un assistente',
            text: 'I suggerimenti avviano la conversazione. Le risposte arrivano in streaming come Markdown; fermale, rigenerale, valutale o modifica la domanda. <code>attach</code> accetta file scelti, incollati o trascinati.',
          },
          tools: {
            title: 'Ragionamento, tool e fonti',
            text: 'I delta aggiungono alla risposta il ragionamento del modello, le chiamate ai tool e le fonti. <code>nuiChatTool</code> disegna il tool del meteo come una card; gli altri tool restano chiusi, con il loro input e output.',
          },
          server: {
            title: 'Streaming da un server',
            text: '<code>nuiEventStream</code> legge uno stream di eventi in stile OpenAI, e un <code>NuiChatError</code> ne mostra il messaggio. <code>all()</code> salva la conversazione, versioni comprese.',
          },
        },
        api: {
          NuiChat: {
            summary: 'La conversazione e la casella di testo, insieme.',
            members: {
              session: 'La conversazione da mostrare.',
              assistant: 'Il nome dell’assistente, nelle intestazioni lette dagli screen reader.',
              headingLevel:
                'Il livello dell’intestazione di ogni messaggio, visibile solo agli screen reader. Le intestazioni nelle risposte scendono di un livello.',
              announce:
                'Cosa annunciano gli screen reader quando una risposta è completa: tutta, un breve avviso o niente.',
              images:
                'Mostra le immagini nelle risposte. Altrimenti il loro testo è un link all’immagine.',
              value: 'Il testo che si sta scrivendo.',
              placeholder: 'Il testo mostrato nel campo vuoto.',
              suggestions: 'Prompt da inviare con un clic, fino al primo messaggio.',
              sendOn:
                'Se si invia con Invio, o con Ctrl o ⌘ + Invio. <code>auto</code> invia con Invio dove c’è una tastiera; sugli schermi touch, Invio va a capo e il pulsante invia.',
              disabled: 'Impedisce l’invio dalla casella di testo.',
              attach: 'Accetta file: scelti, incollati o trascinati.',
              accept: 'I tipi di file accettati, come per <code>&lt;input type="file"&gt;</code>.',
              maxFiles: 'Quanti file può contenere un messaggio.',
              maxSize: 'La dimensione massima di un file, in byte.',
              labels: 'Ogni testo che la chat mostra o annuncia, da tradurre.',
              rated:
                'Emette una risposta valutata dall’utente, con il giudizio, o <code>null</code> quando lo ritira.',
              focus: 'Sposta il focus sul campo di testo.',
              scrollToEnd: 'Scorre fino all’ultimo messaggio e lo segue.',
            },
          },
          NuiChatSession: {
            summary:
              'La conversazione, senza DOM. Creala in un componente, con le opzioni <code>respond</code>, <code>messages</code> e <code>id</code>.',
            members: {
              respond:
                'La tua funzione: scrive la risposta a <code>request.messages</code> e si ferma quando <code>request.signal</code> viene annullato.',
              messages: 'La conversazione sullo schermo.',
              all: 'Ogni messaggio di ogni versione, da salvare e ripassare come <code>messages</code>.',
              busy: 'Se una risposta è in arrivo.',
              send: 'Invia un messaggio e chiede una risposta.',
              stop: 'Ferma la risposta, conservando ciò che ha già scritto.',
              retry: 'Chiede di nuovo. La nuova risposta è una versione accanto alla vecchia.',
              edit: 'Invia una nuova versione di uno dei messaggi dell’utente.',
              versions: 'Tutte le versioni di un messaggio, dalla più vecchia.',
              show: 'Porta la conversazione su questa versione.',
              rate: 'Registra il giudizio dell’utente su una risposta.',
              'remove, load, clear':
                'Rimuove un messaggio e ciò che lo segue, sostituisce la conversazione o ricomincia da capo.',
            },
          },
          NuiChatMessage: {
            summary:
              'Un messaggio. I messaggi con lo stesso <code>parent</code> sono versioni l’uno dell’altro.',
            members: {
              'id, parent': 'La chiave del messaggio, e quella del messaggio a cui fa seguito.',
              role: 'Chi l’ha scritto.',
              text: 'Markdown dall’assistente, testo semplice dall’utente.',
              status: 'A che punto è una risposta, dall’attesa alla fine.',
              reasoning: 'Cosa ha pensato il modello prima di rispondere.',
              tools: 'I tool chiamati, con stato, input e output.',
              sources: 'Le pagine usate.',
              attachments: 'I file inviati con il messaggio.',
              rating: 'Il giudizio dell’utente.',
              data: 'Qualsiasi altra cosa da conservare con il messaggio, come il nome del modello.',
            },
          },
          NuiChatToolTemplate: {
            summary:
              'Disegna una chiamata a un tool, come una card per il meteo. Il contesto contiene la chiamata e il suo messaggio.',
            members: {
              nuiChatTool:
                'Il nome del tool. Senza nome, disegna ogni chiamata che nessun altro template nomina.',
            },
          },
          NuiChatThread: {
            summary:
              'La conversazione da sola, per un tuo layout. Accetta gli input di <code>nui-chat</code> che riguardano la conversazione.',
            members: {},
          },
          NuiChatComposer: {
            summary:
              'La casella di testo da sola. Accetta gli input di <code>nui-chat</code> che riguardano la scrittura.',
            members: {},
          },
          NuiServerEvent: {
            summary:
              'Ciò che <code>nuiEventStream</code> restituisce per ogni evento. <code>nuiTextStream</code> legge testo semplice e <code>nuiJsonStream</code> righe JSON; tutti e tre accettano una risposta di <code>fetch</code>.',
            members: {
              event: 'Il nome dell’evento.',
              data: 'Le sue righe di dati, unite.',
              id: 'L’ultimo id inviato dallo stream.',
            },
          },
          NuiChatError: {
            summary:
              'Lancialo da <code>respond</code> per mostrarne il messaggio. Qualsiasi altro errore mostra un messaggio generico, così non trapela nulla di interno.',
            members: {},
          },
        },
        keyboard: [
          ['Pag giù e Pag su', 'Passa al messaggio successivo o precedente.'],
          ['Ctrl + Fine e Ctrl + Home', 'Esce dalla conversazione, in avanti o all’indietro.'],
          ['Invio', 'Invia. Con Maiusc, va a capo.'],
          ['Esc', 'Interrompe la modifica di un messaggio.'],
        ],
        notes: [
          'La conversazione è un <code>feed</code> di <code>article</code>. Ognuno prende il nome da un’intestazione visibile solo agli screen reader, come «You said», e ha <code>aria-posinset</code> e <code>aria-setsize</code>.',
          'Una risposta in fase di scrittura è <code>aria-busy</code>. Quando è completa viene annunciata per intero; un errore viene annunciato subito.',
          'Ogni pulsante con icona ha un nome e un tooltip. Le valutazioni sono pulsanti toggle, e il selettore di versione è un gruppo con un nome come «Version 2 of 3».',
          'Ragionamento e chiamate ai tool sono elementi espandibili nativi. Se rimuovi un file, il focus torna al campo di testo.',
        ],
      },
      markdown: {
        name: 'Markdown',
        title: 'Componente renderer Markdown per Angular',
        summary: 'Renderizza Markdown in modo sicuro, anche mentre arriva in streaming.',
        description:
          'Renderer Markdown sicuro per Angular e risposte AI: tabelle GitHub, elenchi di attività e blocchi di codice come elementi reali, fluido anche in streaming.',
        apiDescription:
          'Riferimento API del renderer Markdown Needless UI: input di nui-markdown, il template per i blocchi di codice e il parser alla base.',
        a11yDescription:
          'Accessibilità del renderer Markdown Needless UI: intestazioni, elenchi e tabelle reali, regioni di scorrimento con nome e un pulsante di copia che parla.',
        overview: [
          'Il renderer Markdown trasforma testo come quello scritto da un modello in elementi reali: intestazioni, elenchi ed elenchi di attività, citazioni, tabelle, blocchi di codice con pulsante di copia, e link. Analizza il testo in un albero e lo disegna con i template, così l’HTML grezzo resta testo e niente viene mai inserito come HTML.',
          'Con <code>streaming</code>, il testo scritto a metà si legge già come sarà una volta completo: un delimitatore di codice aperto è già un blocco di codice, un <code>**</code> isolato aspetta il suo compagno e un cursore segue l’ultima parola. I blocchi che non cambiano mantengono il loro DOM.',
          'I link funzionano solo per indirizzi web ed email e per numeri di telefono, e le immagini restano link finché non attivi <code>images</code>.',
        ],
        examples: {
          document: {
            title: 'Un documento',
            text: 'Le intestazioni partono da <code>headingLevel</code>, così si inseriscono sotto quelle della pagina. Tabelle larghe e codice scorrono in regioni proprie.',
          },
          streaming: {
            title: 'Streaming',
            text: 'Lo stesso testo, pochi caratteri alla volta. Nessun simbolo compare nemmeno per un attimo, e solo l’ultimo blocco viene renderizzato di nuovo.',
          },
          highlight: {
            title: 'Evidenziazione del codice',
            text: '<code>nuiMarkdownCode</code> disegna i blocchi di codice con un tuo template, qui con un minuscolo evidenziatore. Riceve il codice e il suo linguaggio.',
          },
        },
        api: {
          NuiMarkdown: {
            summary: 'Renderizza Markdown come elementi.',
            members: {
              text: 'Il Markdown.',
              streaming: 'Il testo sta ancora arrivando.',
              headingLevel:
                'Il livello di un’intestazione <code>#</code>. Quelle più profonde seguono, fino a 6.',
              images:
                'Mostra le immagini. Altrimenti il loro testo è un link, perché un’immagine può tracciare.',
              labels: 'I testi del pulsante di copia e simili, da tradurre.',
              codeTemplate:
                'Un template per i blocchi di codice preso altrove, come da una chat che contiene questo renderer.',
            },
          },
          NuiMarkdownCode: {
            summary:
              'Disegna i blocchi di codice. Il contesto contiene il codice, <code>lang</code>, e <code>open</code> mentre il blocco sta ancora arrivando.',
            members: {},
          },
          nuiParseMarkdown: {
            summary: 'Il parser e le sue funzioni di supporto, da usare senza il componente.',
            members: {
              nuiParseMarkdown: 'L’albero di blocchi ed elementi inline che il componente disegna.',
              nuiMarkdownToText:
                'Il testo semplice, una riga per blocco, da annunciare o mostrare in anteprima.',
              nuiSafeUrl: 'Se un link porta a un indirizzo web o email, o a un numero di telefono.',
            },
          },
        },
        keyboard: [
          [
            'Tab',
            'Raggiunge i link, i pulsanti di copia e le tabelle e il codice larghi, per scorrerli.',
          ],
        ],
        notes: [
          'Intestazioni, elenchi, citazioni, tabelle con intestazioni <code>th</code> e <code>scope</code>, e codice sono elementi reali.',
          'Tabelle larghe e blocchi di codice scorrono in una regione focalizzabile; la regione di una tabella prende il nome dalle sue intestazioni.',
          'Le caselle degli elenchi di attività dicono se ogni attività è completata. Il pulsante di copia si chiama «Copy code» e dice «Copied» tramite un messaggio di stato.',
          'Il cursore dello streaming è nascosto agli screen reader, e resta fermo con la riduzione del movimento.',
        ],
      },
      calendar: {
        name: 'Calendario',
        title: 'Componente calendario per Angular',
        summary: 'Scegli un giorno, un intervallo o più giorni, anche da tastiera.',
        description:
          'Calendario Angular accessibile: scegli un giorno, un intervallo o più giorni, con min e max, giorni non disponibili, mesi affiancati e numeri di settimana.',
        apiDescription:
          'Riferimento API del calendario Needless UI: model di selezione di nui-calendar, min, max e giorni non disponibili, mesi affiancati ed etichette.',
        a11yDescription:
          'Tastiera e accessibilità del calendario Needless UI: una griglia di giorni con nome, frecce per giorno e settimana, Pag su e Pag giù per mese.',
        overview: [
          'Il calendario permette di scegliere un giorno, un intervallo di giorni o più giorni. I valori sono semplici date ISO, come <code>2026-09-25</code>, senza fuso orario che le sposti, quindi vanno dritte a un server o a un <code>&lt;input type="date"&gt;</code>.',
          'Le settimane iniziano dal primo giorno previsto dal locale, e nomi e cifre seguono la sua lingua. <code>min</code>, <code>max</code> e <code>unavailable</code> escludono dei giorni, <code>months</code> mostra più mesi affiancati, e il titolo allarga la vista a mesi e anni per le date lontane.',
          'Ogni giorno è raggiungibile da tastiera, come nel selettore di data di WAI-ARIA, e ognuno ha come nome la sua data completa.',
        ],
        examples: {
          delivery: {
            title: 'Un giorno di consegna',
            text: 'I giorni prima di oggi, dopo <code>max</code> o esclusi da <code>unavailable</code> non si possono scegliere, ma la tastiera ci passa comunque.',
          },
          stay: {
            title: 'Un intervallo',
            text: 'Con <code>selection="range"</code>, la prima scelta avvia l’intervallo e la fascia evidenziata segue il puntatore fino alla seconda. <code>months="2"</code> e <code>weekNumbers</code> mostrano di più in una volta.',
          },
          'days-off': {
            title: 'Più giorni',
            text: 'Con <code>selection="multiple"</code>, ogni scelta aggiunge o rimuove un giorno. <code>firstDay</code> fa iniziare la settimana da un giorno diverso da quello del locale.',
          },
        },
        api: {
          NuiCalendar: {
            summary: 'Un calendario per scegliere giorni.',
            members: {
              selection: 'Quanti giorni si possono scegliere.',
              value: 'Il giorno scelto.',
              values: 'I giorni scelti, in ordine.',
              range: 'L’intervallo scelto, estremi inclusi.',
              month: 'Il mese mostrato, il primo quando ce ne sono diversi.',
              view: 'Giorni, mesi o anni.',
              'min, max': 'Il primo e l’ultimo giorno che si possono scegliere.',
              unavailable: 'Esclude altri giorni, come le festività.',
              months: 'Mesi affiancati.',
              weekNumbers: 'Mostra i numeri di settimana ISO.',
              firstDay:
                'Il primo giorno della settimana, 1 per lunedì. Di default, quello del locale.',
              locale: 'Formatta nomi e cifre, e sceglie il primo giorno della settimana.',
              labels: 'Ogni testo che il calendario mostra o annuncia, da tradurre.',
              picked: 'Emette ogni scelta: un giorno, o un intervallo quando è completo.',
              focusDate: 'Sposta il focus da tastiera su un giorno e ne mostra il mese.',
            },
          },
          NuiDateRange: {
            summary: 'Un intervallo di giorni.',
            members: { 'start, end': 'Il primo e l’ultimo giorno, entrambi inclusi.' },
          },
        },
        keyboard: [
          [
            'Freccia sinistra e destra',
            'Giorno precedente o successivo. Le frecce si invertono nel testo da destra a sinistra.',
          ],
          ['Freccia su e giù', 'Settimana precedente o successiva.'],
          ['Home e Fine', 'Primo o ultimo giorno della settimana.'],
          ['Pag su e Pag giù', 'Mese precedente o successivo; con Maiusc, anno.'],
          ['Invio o Spazio', 'Sceglie il giorno, o entra in un mese o in un anno.'],
          ['Esc', 'Annulla il primo estremo di un intervallo, o torna alla vista più dettagliata.'],
        ],
        notes: [
          'Ogni mese è una <code>grid</code> con il nome dato dal suo titolo e i nomi completi dei giorni della settimana in <code>abbr</code>.',
          'Ogni giorno ha come nome la sua data completa, con l’aggiunta di «Today», «unavailable» e degli estremi di un intervallo. <code>aria-selected</code> indica cosa è scelto, e <code>aria-disabled</code> cosa non si può scegliere.',
          'La griglia è un unico tab stop, con un <code>tabindex</code> mobile. I pulsanti precedente e successivo annunciano il nuovo mese.',
        ],
      },
      'date-picker': {
        name: 'Selettore di data',
        title: 'Componenti selettore di data e ora per Angular',
        summary: 'Digita una data o un’ora a segmenti, o sceglila in un calendario.',
        description:
          'Selettori di data, ora e intervallo Angular accessibili: segmenti nell’ordine del locale, un calendario in un popover, preset e supporto ai form.',
        apiDescription:
          'Riferimento API dei selettori di data Needless UI: nui-date-field, nui-time-field, nui-date-picker e nui-date-range-picker, con i preset.',
        a11yDescription:
          'Tastiera e accessibilità dei selettori di data Needless UI: uno spinbutton per ogni parte della data e un calendario in un dialog.',
        overview: [
          'I campi di data e ora si digitano a segmenti: giorno, mese e anno nell’ordine del locale, poi ore e minuti con il suo orologio a 12 o 24 ore. Ogni segmento è uno spinbutton: quando digiti le cifre avanza da solo al successivo, oppure puoi cambiarlo a passi con le frecce. Incolla una data intera e tutti i segmenti si riempiono.',
          'I selettori aggiungono un calendario in un popover, per una data o per un intervallo con preset. I valori sono semplici stringhe ISO, come <code>2026-09-25</code> o <code>2026-09-25T09:30</code>, e ogni campo funziona con Signal Forms, i form reattivi e <code>ngModel</code>.',
          'Su questo sito, gli esempi seguono la lingua della pagina: passa a un’altra lingua per vedere come cambiano ordine, separatori e cifre.',
        ],
        examples: {
          fields: {
            title: 'Campi di data e ora',
            text: 'Digita le cifre, o usa le frecce. Un secondo Backspace torna al segmento precedente. <code>minuteStep</code> stabilisce di quanto le frecce spostano i minuti.',
          },
          pickers: {
            title: 'Selettori di data',
            text: 'Il pulsante apre un calendario sul giorno scelto, e la scelta lo chiude. Con <code>granularity="minute"</code>, il selettore accetta anche un orario, e il calendario cambia solo la data.',
          },
          range: {
            title: 'Un intervallo di date',
            text: 'Due campi e un calendario di due mesi. <code>nuiDateRangePresets()</code> aggiunge gli intervalli più comuni; il valore resta null finché entrambi gli estremi non sono impostati, in ordine.',
          },
        },
        api: {
          NuiDateField: {
            summary: 'Una data, o una data e un’ora, digitata a segmenti.',
            members: {
              value: 'Il valore, o null finché ogni segmento non è compilato.',
              granularity: 'Si ferma al giorno, o prosegue fino all’ora, al minuto o al secondo.',
              'min, max':
                'Il primo e l’ultimo valore consentiti. Fuori da questi limiti, il campo non è valido.',
              placeholder: 'Il punto di partenza dei segmenti vuoti quando si usano le frecce.',
              hourCycle: 'Un orologio a 12 o 24 ore. Di default, quello del locale.',
              minuteStep: 'Di quanto le frecce spostano i minuti.',
              'disabled, readonly': 'Bloccano le modifiche.',
              locale: 'Imposta ordine, separatori, cifre e orologio.',
              labels: 'Ogni testo che il campo annuncia, da tradurre.',
              invalid: 'Se il valore è fuori da <code>min</code> e <code>max</code>.',
              focus: 'Sposta il focus sul primo segmento vuoto.',
            },
          },
          NuiTimeField: {
            summary: 'Un orario digitato a segmenti. Accetta gli stessi input del campo di data.',
            members: { granularity: 'Si ferma all’ora, al minuto o al secondo.' },
          },
          NuiDatePicker: {
            summary:
              'Un campo di data con un calendario in un popover. Accetta gli input del campo di data, più questi.',
            members: {
              unavailable: 'Giorni che il calendario non fa scegliere.',
              'firstDay, weekNumbers': 'Passati al calendario.',
              labels: 'I testi del campo, del pulsante e del calendario.',
              show: 'Apre il calendario.',
            },
          },
          NuiDateRangePicker: {
            summary:
              'Due campi di data con un calendario a intervallo. Accetta gli input del selettore di data, più questi.',
            members: {
              value:
                'L’intervallo, o null finché entrambi gli estremi non sono impostati, in ordine.',
              presets: 'Intervalli con nome da scegliere con un clic.',
              months: 'Mesi affiancati nel calendario; uno solo su uno schermo stretto.',
            },
          },
          NuiDateRangePreset: {
            summary: 'Un intervallo con nome, fisso o calcolato al momento della scelta.',
            members: {
              label: 'Il suo nome.',
              range: 'L’intervallo, o una funzione che lo crea.',
            },
          },
        },
        keyboard: [
          [
            'Cifre',
            'Scrivono nel segmento. Il focus passa al successivo appena nessun’altra cifra può seguire.',
          ],
          [
            'Freccia su e giù',
            'Aumentano o diminuiscono il segmento; Pag su e Pag giù a passi più ampi.',
          ],
          ['Freccia sinistra e destra, Tab', 'Segmento precedente o successivo.'],
          ['Backspace', 'Svuota il segmento, poi torna a quello precedente.'],
          ['A e P', 'Imposta AM o PM.'],
        ],
        notes: [
          'Un campo è un <code>group</code>: dagli un nome con <code>aria-label</code> o <code>aria-labelledby</code>. Ogni segmento è uno <code>spinbutton</code> con il nome della sua parte, che legge i mesi per nome e i segmenti vuoti come «Empty».',
          'I segmenti sono testo modificabile, quindi le tastiere virtuali mostrano subito le cifre.',
          'Il pulsante del selettore si chiama «Choose a date», e il suo popover è un <code>dialog</code>. Scegliere una data riporta il focus sul pulsante.',
          'Il calendario interno funziona come il <a href="/components/calendar">calendario</a>.',
        ],
      },
      scheduler: {
        name: 'Pianificatore',
        title: 'Componente pianificatore per Angular',
        summary:
          'Eventi in un mese, una settimana, un giorno o un’agenda, trascinati al loro posto.',
        description:
          'Pianificatore Angular accessibile: mese, settimana, giorno e agenda, eventi sovrapposti affiancati, da spostare e ridimensionare trascinando o da tastiera.',
        apiDescription:
          'Riferimento API del pianificatore Needless UI: viste, eventi, modifica e selezione di nui-scheduler, i suoi output e il template degli eventi.',
        a11yDescription:
          'Tastiera e accessibilità del pianificatore Needless UI: griglie di giorni e orari, eventi con nome e un’alternativa da tastiera per ogni trascinamento.',
        overview: [
          'Il pianificatore mostra gli eventi in un mese, una settimana, un giorno o un’agenda. Gli eventi sono semplici dati con orari ISO; quelli sovrapposti si dividono la larghezza, quelli a cavallo della mezzanotte compaiono in entrambi i giorni, e quelli che durano tutto il giorno si estendono in alto come barre.',
          'Non modifica mai i tuoi eventi da solo. Trascina un evento, o il suo bordo inferiore, e <code>eventChange</code> riporta i nuovi orari; scegli un orario sulla griglia, e <code>slotSelect</code> te lo segnala. <code>rangeChange</code> ti dice quali giorni sono visibili, così puoi caricarne gli eventi.',
          'Tutto ciò che fa un puntatore lo fa anche la tastiera: la griglia è un unico tab stop, le frecce si muovono tra giorni e orari, e Alt con le frecce sposta un evento.',
        ],
        examples: {
          planner: {
            title: 'Una settimana da pianificare',
            text: 'Con <code>editable</code> e <code>selectable</code>, trascina gli eventi per spostarli, trascina il loro bordo inferiore per ridimensionarli, e trascina su un orario libero per aggiungerne uno. L’esempio aggiorna i suoi eventi in base agli output.',
          },
          month: {
            title: 'Un mese e un’agenda',
            text: 'Gli eventi su più giorni appaiono come barre; un giorno pieno mostra quanti altri ce ne sono. <code>views</code> offre solo il mese e l’agenda dei prossimi <code>agendaDays</code> giorni.',
          },
          rooms: {
            title: 'Prenotazioni delle sale in un giorno',
            text: '<code>nuiSchedulerEvent</code> disegna ogni prenotazione con la sua sala e il suo organizzatore. <code>slotMinutes="15"</code> rende le righe più fitte.',
          },
        },
        api: {
          NuiScheduler: {
            summary: 'Eventi in un mese, una settimana, un giorno o un’agenda.',
            members: {
              events: 'Gli eventi da mostrare.',
              view: 'La vista mostrata.',
              views: 'Le viste tra cui si può passare.',
              date: 'Il giorno mostrato, dove si trova anche il focus da tastiera.',
              slotMinutes:
                'Minuti per riga della griglia oraria, e il passo con cui si spostano gli eventi.',
              scrollHour: 'L’ora a cui si apre la griglia oraria.',
              agendaDays: 'Quanti giorni in avanti mostra l’agenda.',
              editable:
                'Gli eventi si possono spostare e ridimensionare, con il puntatore e da tastiera.',
              selectable: 'Si può scegliere un orario sulla griglia, per creare eventi.',
              firstDay:
                'Il primo giorno della settimana, 1 per lunedì. Di default, quello del locale.',
              headingLevel:
                'Il livello di intestazione del titolo; i giorni dell’agenda scendono di un livello.',
              locale: 'Formatta giorni e orari.',
              labels: 'Ogni testo che il pianificatore mostra o annuncia, da tradurre.',
              eventClick: 'Emette un evento cliccato, o aperto con Invio.',
              eventChange:
                'Emette i nuovi orari di un evento dopo uno spostamento o un ridimensionamento.',
              slotSelect: 'Emette l’orario scelto sulla griglia.',
              rangeChange: 'Emette il primo e l’ultimo giorno mostrati quando cambiano.',
            },
          },
          NuiSchedulerEvent: {
            summary:
              'Un evento. La fine di un evento con orario è esclusa; quella di un evento di tutto il giorno è il suo ultimo giorno.',
            members: {
              'id, title': 'La sua chiave, e cosa mostra.',
              'start, end': 'Date e orari, o solo date per gli eventi di tutto il giorno.',
              allDay: 'Di default, se <code>start</code> non ha un orario.',
              tone: 'Il suo colore.',
              editable: 'Se si può spostare, qualunque cosa dica il pianificatore.',
              data: 'Qualsiasi altra cosa da tenere insieme all’evento.',
            },
          },
          NuiSchedulerEventTemplate: {
            summary:
              'Disegna gli eventi. Il contesto contiene l’evento e il suo orario come testo.',
            members: {},
          },
        },
        keyboard: [
          [
            'Frecce',
            'Spostano di un giorno o di uno slot. Le frecce si invertono nel testo da destra a sinistra.',
          ],
          ['Pag su e Pag giù', 'Mese, settimana o giorno precedente o successivo.'],
          ['Maiusc + frecce', 'Estendono l’orario scelto.'],
          ['Invio o Spazio su una cella', 'Entra nei suoi eventi, o ne sceglie l’orario.'],
          ['Freccia su e giù su un evento', 'Evento precedente o successivo nella cella.'],
          ['Alt + frecce su un evento', 'Lo spostano di uno slot o di un giorno.'],
          ['Alt + Maiusc + freccia su o giù', 'Accorcia o allunga l’evento.'],
          ['Esc', 'Torna alla cella, annulla l’orario scelto o interrompe un trascinamento.'],
        ],
        notes: [
          'Mese, settimana e giorno sono <code>grid</code> con il nome dato dal loro titolo. I giorni fanno da intestazione alle colonne e gli orari alle righe, così ogni cella si legge con il suo giorno e il suo orario.',
          'Ogni evento è un pulsante con il nome dato da titolo, giorno e orario, come «Standup, Friday, September 25, 9:00 – 9:30 AM». Uno spostamento o un ridimensionamento annuncia il nuovo orario.',
          'Ogni trascinamento ha un equivalente da tastiera, così nessuno ha bisogno di un puntatore.',
          'Le viste sono pulsanti toggle in un gruppo, e passare a un’altra settimana o a un altro mese ne annuncia il titolo.',
        ],
      },
      splitter: {
        name: 'Splitter',
        title: 'Splitter e pannelli ridimensionabili per Angular',
        summary: 'Pannelli affiancati o impilati, con maniglie per ridimensionarli.',
        description:
          'Splitter Angular accessibile: pannelli ridimensionabili affiancati o impilati, con limiti, pannelli comprimibili, dimensioni salvate e tutto da tastiera.',
        apiDescription:
          'Riferimento API dello splitter Needless UI: orientamento e dimensioni di nuiSplitter, limiti e compressione dei pannelli, e le maniglie che li separano.',
        a11yDescription:
          'Tastiera e accessibilità dello splitter Needless UI: maniglie focalizzabili con un valore, secondo il pattern Window Splitter, frecce, Home, Fine e Invio.',
        overview: [
          'Uno splitter divide il suo spazio tra più pannelli, con una maniglia tra un pannello e l’altro. Trascina una maniglia, oppure dalle il focus e usa le frecce. Le dimensioni sono percentuali che sommano a 100 e si collegano con <code>[(sizes)]</code>.',
          'Per ogni pannello puoi indicare la dimensione iniziale, la minima e la massima, in pixel, rem o percentuale. Un pannello <code>collapsible</code> si comprime quando viene trascinato sotto la metà della sua dimensione minima, o con Invio sulla sua maniglia, e si riapre alla dimensione che aveva.',
          'Con <code>storageKey</code>, le dimensioni restano in <code>localStorage</code>, così alla visita successiva ognuno ritrova il layout come l’aveva lasciato.',
        ],
        examples: {
          editor: {
            title: 'Un editor',
            text: 'File, codice e un’anteprima. File e anteprima si possono comprimere, il codice tiene almeno il 30% della larghezza e le dimensioni vengono salvate.',
          },
          stacked: {
            title: 'Pannelli impilati',
            text: '<code>orientation="vertical"</code> impila i pannelli, e <code>[(sizes)]</code> ne legge le dimensioni mentre cambiano.',
          },
        },
        api: {
          NuiSplitter: {
            summary: 'Pannelli separati da maniglie.',
            members: {
              orientation: 'Affiancati o impilati.',
              sizes: 'La quota di ogni pannello, in percentuale, in ordine.',
              storageKey: 'Conserva le dimensioni in <code>localStorage</code> con questa chiave.',
              step: 'Di quanto le frecce spostano una maniglia, in percentuale. Il doppio con Maiusc.',
              move: 'Sposta di una percentuale il confine dopo un pannello.',
            },
          },
          NuiSplitterPane: {
            summary: 'Un pannello. Le sue dimensioni accettano pixel, rem o percentuale.',
            members: {
              defaultSize: 'La dimensione iniziale, quando non ci sono dimensioni da ripristinare.',
              min: 'La dimensione minima.',
              max: 'La dimensione massima.',
              collapsible: 'Si comprime: trascinato sotto la metà del minimo, o con Invio.',
              collapsedSize: 'La dimensione da compresso, per esempio una barra di icone.',
              label: 'Dà il nome alla maniglia che lo ridimensiona.',
            },
          },
          NuiSplitterHandle: {
            summary: 'La maniglia tra due pannelli.',
            members: {
              label: 'Le dà un nome, quando non lo fa l’etichetta del pannello.',
              disabled: 'Non si sposta.',
              toggle: 'Comprime il pannello accanto, o lo ripristina.',
            },
          },
        },
        keyboard: [
          [
            'Freccia sinistra e destra',
            'Spostano la maniglia tra pannelli affiancati. Le frecce si invertono nel testo da destra a sinistra.',
          ],
          ['Freccia su e giù', 'Spostano la maniglia tra pannelli impilati.'],
          ['Maiusc + frecce', 'La spostano di un passo doppio.'],
          [
            'Home e Fine',
            'Porta il pannello che precede la maniglia alla sua dimensione minima o massima.',
          ],
          ['Invio', 'Comprime il pannello comprimibile, o lo ripristina.'],
        ],
        notes: [
          'Ogni maniglia è un <code>separator</code> focalizzabile, come nel pattern Window Splitter di WAI-ARIA: il suo valore è la dimensione del pannello che la precede, entro i limiti di quel pannello, e <code>aria-controls</code> punta al pannello.',
          'Dai un nome alle maniglie con l’input <code>label</code> dei pannelli: «Files» dice a uno screen reader cosa ridimensiona una maniglia.',
          'Anche un doppio clic su una maniglia comprime il suo pannello, e durante il trascinamento il puntatore resta catturato, così i movimenti veloci non perdono la maniglia.',
        ],
      },
      tour: {
        name: 'Tour',
        title: 'Componente tour guidato per Angular',
        summary:
          'Una card per ogni passaggio, accanto a ciò di cui parla, con il resto della pagina oscurato.',
        description:
          'Tour guidato Angular accessibile: una card per ogni passaggio accanto al suo target evidenziato, passaggi interattivi e il focus che torna dov’era.',
        apiDescription:
          'Riferimento API del tour Needless UI: i passaggi di nui-tour, i binding di open e step, i suoi output, e target, posizione e hook di ogni passaggio.',
        a11yDescription:
          'Tastiera e accessibilità del tour Needless UI: ogni card è un dialog con il nome dato dal titolo, il focus trattenuto e restituito, ed Esc per uscire.',
        overview: [
          'Un tour accompagna gli utenti attraverso una pagina, un passaggio alla volta. Ogni passaggio punta a un elemento con una card accanto e oscura il resto della pagina intorno; un passaggio senza target compare al centro.',
          'I passaggi sono semplici dati: un target (un selettore, un elemento o una funzione che lo trova), un titolo e un contenuto come testo o template. <code>beforeShow</code> viene eseguito prima, così un passaggio può aprire il pannello in cui si trova il suo target, e se il target è fuori vista, la pagina scorre fin lì.',
          'Ogni card è un dialog. È modale, a meno che il passaggio sia <code>interactive</code>: allora si può usare ciò a cui punta. Esc termina il tour, e il focus torna dov’era.',
        ],
        examples: {
          basics: {
            title: 'Un primo sguardo',
            text: 'Quattro passaggi, il primo senza target. <code>finished</code> e <code>dismissed</code> distinguono i due modi in cui finisce il tour.',
          },
          interactive: {
            title: 'Passaggi da provare',
            text: '<code>beforeShow</code> apre le impostazioni prima che il secondo passaggio punti al loro interno, e <code>interactive</code> permette di usare l’interruttore mentre la card è visibile.',
          },
        },
        api: {
          NuiTour: {
            summary: 'Un tour guidato.',
            members: {
              steps: 'I passaggi, in ordine.',
              open: 'Se il tour è attivo.',
              step: 'Il passaggio mostrato, da 0.',
              labels: 'Ogni testo che mostra, da tradurre.',
              finished: 'Emette quando l’ultimo passaggio è completato.',
              dismissed:
                'Emette il passaggio su cui il tour è terminato, quando termina in anticipo.',
              start: 'Avvia il tour, dal primo passaggio o da quello indicato.',
              end: 'Termina il tour, come completato o interrotto.',
            },
          },
          NuiTourStep: {
            summary: 'Un passaggio del tour.',
            members: {
              target: 'Ciò a cui punta. Senza target, la card compare al centro.',
              title: 'Il titolo della card.',
              content: 'Il suo testo, o un template.',
              side: 'Su quale lato del target va la card.',
              align: 'Come la card si allinea al target.',
              padding: 'Margine intorno al target evidenziato, in pixel.',
              interactive: 'Il target si può usare mentre la card è visibile.',
              beforeShow:
                'Viene eseguito prima che il passaggio compaia. Se restituisce una promise, il tour la attende.',
            },
          },
        },
        keyboard: [
          ['Tab', 'Scorre i pulsanti della card. Nei passaggi modali, il focus resta nella card.'],
          ['Invio o Spazio', 'Attiva il pulsante con il focus: «Avanti», «Indietro» o «Fine».'],
          ['Esc', 'Termina il tour.'],
        ],
        notes: [
          'Ogni card è un <code>dialog</code> con il nome dato dal suo titolo e la descrizione dal suo contenuto. A ogni passaggio il focus va sul pulsante principale, e quando il tour finisce torna dov’era.',
          'I passaggi modali rendono inerte il resto della pagina. Quelli interattivi non sono modali, così il loro target si raggiunge con la tastiera oltre che con il puntatore.',
          'L’avanzamento è un testo, come «2 of 4»; i puntini servono solo a disegnarlo.',
        ],
      },
      dropzone: {
        name: 'Dropzone',
        title: 'Dropzone e caricamento di file per Angular',
        summary:
          'Trascina i file o sceglili, con controlli, anteprime e caricamenti con avanzamento.',
        description:
          'Dropzone Angular accessibile: file e cartelle trascinati o incollati, controlli di tipo e dimensione, anteprime, caricamenti con avanzamento e nuovi tentativi.',
        apiDescription:
          'Riferimento API della dropzone Needless UI: file e controlli di nui-dropzone, la funzione di caricamento e la sua coda, i suoi output e i suoi testi.',
        a11yDescription:
          'Tastiera e accessibilità della dropzone Needless UI: una zona che è un pulsante, risultati annunciati, barre di avanzamento e azioni con un nome.',
        overview: [
          'Una dropzone accetta i file trascinati su di essa, scelti con il selettore di file o incollati. Le cartelle trascinate vengono lette per intero, e ogni file conserva il suo percorso.',
          'Ogni file viene controllato con <code>accept</code>, <code>maxSize</code>, <code>minSize</code>, <code>maxFiles</code> e la tua funzione <code>validate</code>, e quelli rifiutati compaiono in un elenco con il motivo. Le immagini hanno un’anteprima.',
          'Senza una funzione <code>upload</code>, la dropzone conserva i file per un modulo, in <code>[(files)]</code>. Con una funzione, li carica alcuni alla volta, con avanzamento, annullamento e nuovo tentativo. Passa il <code>signal</code> del caricamento a <code>fetch</code>, così annullare lo interrompe davvero.',
        ],
        examples: {
          upload: {
            title: 'Caricamenti',
            text: 'Un caricamento simulato riporta il suo avanzamento a passi. I file con «fail» nel nome falliscono, per mostrare il nuovo tentativo, e <code>directory</code> aggiunge un pulsante per scegliere una cartella.',
          },
          attach: {
            title: 'Allegati per un modulo',
            text: 'Nessun <code>upload</code>: la dropzone conserva fino a tre documenti in <code>[(files)]</code>, e il testo messo al suo interno sostituisce quello predefinito.',
          },
        },
        api: {
          NuiDropzone: {
            summary: 'Un’area in cui trascinare i file, o da cui sceglierli.',
            members: {
              files: 'I file che contiene, in ordine.',
              accept: 'I tipi di file accettati, come per <code>&lt;input type="file"&gt;</code>.',
              multiple: 'Più di un file alla volta.',
              directory: 'Offre un pulsante per scegliere una cartella.',
              maxFiles: 'Quanti file può contenere.',
              'maxSize, minSize': 'La dimensione massima e minima di un file, in byte.',
              validate:
                'Controlla ogni file: se restituisce un messaggio, il file viene rifiutato.',
              upload: 'Invia un file. Senza questa funzione, i file vengono solo conservati.',
              concurrency: 'Quanti file si caricano contemporaneamente.',
              hint: 'Una riga sotto il testo della zona, per esempio cosa accetta.',
              disabled: 'Non accetta file.',
              labels: 'Ogni testo che mostra o annuncia, da tradurre.',
              uploaded: 'Emette un file caricato, con ciò che ha restituito <code>upload</code>.',
              rejected: 'Emette i file rifiutati, con i motivi.',
              queue:
                'La coda dei caricamenti, per annullare, riprovare e leggere l’avanzamento da codice.',
              take: 'Aggiunge file da codice, controllandoli uno per uno.',
            },
          },
          NuiUploader: {
            summary:
              'Invia un file: riporta l’avanzamento da 0 a 1, e si ferma quando il signal segnala l’annullamento.',
            members: {
              '(file, context)':
                'Restituisce una promise con qualunque cosa risponda il tuo server.',
            },
          },
        },
        keyboard: [
          ['Invio o Spazio', 'Sulla zona, apre il selettore di file.'],
          ['Ctrl + V (⌘ + V su Mac)', 'Sulla zona, aggiunge i file incollati.'],
          ['Tab', 'Scorre la zona e le azioni di ogni file.'],
        ],
        notes: [
          'La zona è un pulsante, quindi funziona anche senza puntatore, e il suggerimento la descrive.',
          'I file aggiunti e quelli rifiutati vengono annunciati. Ogni barra di avanzamento è una <code>progressbar</code> con il nome del suo file, e ogni azione ha il nome di ciò che fa, come «Remove beach.jpg».',
          'Le anteprime sono decorative: è il nome del file a dire di quale file si tratta.',
        ],
      },
      mask: {
        name: 'Maschera di input',
        title: 'Direttiva maschera di input per Angular',
        summary: 'Campi di testo che si formattano mentre si digita: date, carte, IBAN, codici.',
        description:
          'Maschera di input Angular: formattazione durante la digitazione, cursore che resta al suo posto, funzioni per carte e IBAN e validazione dei form.',
        apiDescription:
          'Riferimento API della maschera di input Needless UI: la direttiva nuiMask, i suoi token e il suo valore, e funzioni di supporto per numeri di carta e IBAN.',
        a11yDescription:
          'Accessibilità della maschera di input Needless UI: campi nativi con le loro etichette, tastiere numeriche sui telefoni e cancellazione che salta i letterali.',
        overview: [
          'Una maschera formatta un campo di testo mentre si digita: <code>00/00/0000</code> inserisce le barre, <code>AA 000 AA</code> accetta a turno lettere e cifre. I caratteri che non corrispondono vengono scartati, e il cursore resta al suo posto quando si digita nel mezzo.',
          'Le maschere sono fatte di token e letterali: <code>0</code> è una cifra, <code>a</code> una lettera, <code>*</code> l’una o l’altra, e <code>A</code> e <code>X</code> fanno lo stesso per i codici, in maiuscolo. Aggiungi i tuoi con <code>tokens</code>, o passa una funzione che sceglie la maschera in base a ciò che si digita, come fa <code>nuiCardMask</code> a seconda del circuito della carta.',
          'Il valore è ciò che viene mostrato, o solo i dati con <code>unmask</code>. La maschera funziona con Signal Forms, i form reattivi e <code>ngModel</code>, e un valore incompleto è un errore.',
        ],
        examples: {
          formats: {
            title: 'Formati',
            text: 'Una data, un orario, una targa e un colore con un token tutto suo per le cifre esadecimali.',
          },
          payment: {
            title: 'Dati di pagamento',
            text: 'Campi con Signal Forms. La maschera della carta segue il circuito, il codice di sicurezza ha quattro cifre per American Express, e <code>nuiCardValid</code> e <code>nuiIbanValid</code> verificano i numeri.',
          },
        },
        api: {
          NuiMask: {
            summary: 'Una maschera su un campo di testo nativo.',
            members: {
              nuiMask: 'La maschera, o una funzione che ne sceglie una in base ai dati digitati.',
              tokens: 'Caratteri della maschera da aggiungere o sostituire.',
              unmask: 'Il valore contiene solo i dati, senza i letterali.',
              value: 'Il valore: ciò che viene mostrato, o i dati con <code>unmask</code>.',
              raw: 'I dati digitati, senza i letterali.',
              complete: 'Ogni posizione della maschera è compilata.',
            },
          },
          Helpers: {
            summary: 'Funzioni per formattare, verificare e costruire maschere.',
            members: {
              'nuiMaskFormat, nuiUnmask':
                'Formattano un valore con una maschera, o ne estraggono i dati.',
              nuiCardMask:
                'Una maschera per i numeri di carta, raggruppati come li stampa il loro circuito.',
              nuiCardBrand: 'Il circuito di un numero di carta, dalle sue prime cifre.',
              'nuiCardValid, nuiLuhn':
                'Se un numero di carta ha la lunghezza del suo circuito e supera il controllo di Luhn.',
              nuiIbanMask: 'Una maschera per gli IBAN, lunga quanto l’IBAN del paese.',
              nuiIbanValid:
                'Se un IBAN ha la lunghezza del suo paese e le cifre di controllo giuste.',
            },
          },
        },
        keyboard: [
          ['Backspace', 'Cancella il carattere prima del cursore, saltando i letterali.'],
          ['Canc', 'Cancella il carattere dopo il cursore, saltando i letterali.'],
        ],
        notes: [
          'La maschera lavora sul tuo <code>&lt;input&gt;</code>, quindi etichetta e testo di aiuto restano come li hai scritti. Scrivi lì cosa va inserito: una maschera non è un’istruzione.',
          'Le maschere di cifre impostano <code>inputmode="numeric"</code>, così i telefoni mostrano un tastierino numerico, a meno che il campo non imposti il proprio.',
          'Accetta cifre di qualsiasi sistema di scrittura e le scrive da 0 a 9.',
        ],
      },
      'phone-field': {
        name: 'Campo telefono',
        title: 'Campo numero di telefono per Angular',
        summary: 'Un selettore del paese e un numero, raggruppato come lo scrive quel paese.',
        description:
          'Campo telefono Angular accessibile: selettore del paese, numeri raggruppati come li scrive ogni paese, prefissi digitati o incollati e valori in E.164.',
        apiDescription:
          'Riferimento API del campo telefono Needless UI: valore e paese di nui-phone-field, i paesi offerti e funzioni di supporto per leggere e scrivere i numeri.',
        a11yDescription:
          'Accessibilità del campo telefono Needless UI: un selettore del paese con nome, il paese annunciato quando lo sceglie un prefisso e la compilazione automatica.',
        overview: [
          'Un campo telefono è un selettore del paese più un numero. Il numero viene raggruppato mentre lo si digita, come il suo paese scrive i numeri, e il valore è il numero in E.164, come <code>+393331234567</code>.',
          'Ognuno digita i numeri come li conosce. Uno 0 iniziale (o l’1 prima di un numero nordamericano) viene riconosciuto come prefisso nazionale e lasciato fuori dal valore. Un prefisso internazionale digitato o incollato, come <code>+44</code> o <code>0044</code>, sceglie il suo paese, e lo stesso fa un prefisso di zona dove più paesi condividono il prefisso internazionale.',
          'Il primo paese è quello del locale, e <code>countries</code> limita l’elenco. Con i form, un numero troppo corto o troppo lungo per il suo paese è un errore. Per una validazione completa, verifica i numeri anche sul server.',
        ],
        examples: {
          basic: {
            title: 'Un numero',
            text: 'Inizia con <code>+</code> e un prefisso internazionale per cambiare paese mentre digiti.',
          },
          countries: {
            title: 'Paesi a scelta',
            text: '<code>countries</code> ne offre undici, il campo funziona con un <code>FormControl</code> reattivo e <code>nuiFormatPhone</code> riscrive il valore in forma leggibile.',
          },
        },
        api: {
          NuiPhoneField: {
            summary: 'Un campo per numeri di telefono.',
            members: {
              value: 'Il numero in E.164, o vuoto.',
              country: 'Il paese, come codice di regione.',
              countries: 'I paesi offerti, come codici di regione.',
              locale: 'La lingua dei nomi dei paesi.',
              label: 'Dà un nome al numero, quando non lo fa un <code>&lt;label for&gt;</code>.',
              inputId: 'L’id del numero, per <code>&lt;label for&gt;</code>.',
              placeholder: 'Testo mostrato mentre il numero è vuoto.',
              invalid: 'Segna il numero come non valido.',
              disabled: 'Non si può modificare.',
              labels: 'Ogni testo che annuncia, da tradurre.',
            },
          },
          Helpers: {
            summary: 'Funzioni per i numeri di telefono.',
            members: {
              nuiParsePhone:
                'Scompone un numero scritto in qualsiasi modo in regione, prefisso internazionale e numero nazionale.',
              nuiFormatPhone: 'Scrive un numero raggruppato come fa il suo paese, o in E.164.',
              nuiPhoneValid:
                'Se un numero ha un prefisso internazionale noto e la lunghezza del suo paese.',
            },
          },
        },
        keyboard: [
          ['Lettere sul selettore del paese', 'Passano ai paesi che iniziano con quelle lettere.'],
          ['Invio o Spazio', 'Apre l’elenco dei paesi, o ne sceglie uno.'],
          ['Backspace', 'Sul numero, cancella una cifra, saltando spazi e parentesi.'],
        ],
        notes: [
          'Il selettore del paese si chiama «Country code» e legge la sua bandiera e il suo prefisso. Quando un prefisso internazionale o di zona sceglie un paese, il nuovo paese viene annunciato.',
          'Dai un nome al numero con <code>&lt;label for&gt;</code> e <code>inputId</code>, o con <code>label</code>.',
          'Il numero ha <code>autocomplete="tel"</code>, così i browser possono compilarlo, prefisso compreso, e i telefoni mostrano un tastierino telefonico.',
        ],
      },
      'color-picker': {
        name: 'Selettore di colore',
        title: 'Selettore di colore OKLCH per Angular',
        summary: 'Un colore in OKLCH, con slider, campioni, contagocce e verifica del contrasto.',
        description:
          'Selettore di colore Angular accessibile in OKLCH: colori P3 ad ampio gamut, ogni sintassi di colore CSS, campioni, contagocce e verifica del contrasto WCAG.',
        apiDescription:
          'Riferimento API del selettore di colore Needless UI: valore, formato e gamut di nui-color-picker, campioni e contrasto, e funzioni di supporto per i colori.',
        a11yDescription:
          'Tastiera e accessibilità del selettore di colore Needless UI: uno slider a due valori per l’area, slider nativi e livelli di contrasto espressi a parole.',
        overview: [
          'Il selettore di colore lavora in OKLCH, lo spazio colore percettivo del CSS moderno. Sull’asse orizzontale dell’area, il croma va dal grigio al massimo che lo schermo può mostrare a quella luminosità: ogni punto è quindi un colore utilizzabile, e il cursore resta fermo mentre la tonalità ruota.',
          'Il campo accetta qualsiasi colore CSS, nomi compresi, e il pulsante del formato scrive il valore in esadecimale, <code>rgb()</code>, <code>hsl()</code>, <code>oklch()</code> o <code>color(display-p3)</code>. Un colore fuori dal gamut di un formato viene riportato al suo interno come fa CSS, mantenendo luminosità e tonalità.',
          'Aggiungi <code>swatches</code> per scegliere tra dei campioni, e <code>contrastWith</code> per verificare il contrasto del colore con uno sfondo, misurato secondo WCAG 2. Dove il browser ha un contagocce, un pulsante preleva un colore dallo schermo.',
        ],
        examples: {
          brand: {
            title: 'Un colore del brand',
            text: 'Campioni con nome e il contrasto di un testo bianco sul colore: scegline uno chiaro e AA non passa.',
          },
          wide: {
            title: 'Gamut esteso',
            text: '<code>gamut="p3"</code> riempie l’area di colori Display P3, e una linea tratteggiata segna dove finisce sRGB. Il valore resta in <code>oklch()</code>.',
          },
          popover: {
            title: 'In un popover',
            text: 'Un pulsante che mostra il colore apre il selettore in un <a href="/components/popover">popover</a>.',
          },
        },
        api: {
          NuiColorPicker: {
            summary: 'Un selettore di colore in OKLCH.',
            members: {
              value: 'Il colore, scritto nel formato scelto. Vuoto finché non se ne sceglie uno.',
              format: 'Come viene scritto il valore.',
              formats: 'I formati tra cui passa il pulsante del formato.',
              gamut: 'I colori contenuti nell’area: sRGB o Display P3.',
              alpha: 'Mostra lo slider dell’opacità.',
              swatches: 'Colori tra cui scegliere, con i loro nomi.',
              contrastWith: 'Uno sfondo con cui verificare il contrasto.',
              eyeDropper: 'Mostra il contagocce, dove il browser ne ha uno.',
              disabled: 'Non si può modificare.',
              labels: 'Ogni testo che annuncia, da tradurre.',
              color: 'Il colore scelto, in OKLCH.',
            },
          },
          Helpers: {
            summary: 'Funzioni per i colori.',
            members: {
              nuiParseColor: 'Legge un colore in qualsiasi sintassi CSS.',
              nuiFormatColor: 'Scrive un colore in un formato.',
              nuiToGamut: 'Riporta un colore in sRGB o Display P3, come fa CSS.',
              nuiContrast: 'Il rapporto di contrasto WCAG 2 di un colore su uno sfondo.',
            },
          },
        },
        keyboard: [
          ['Freccia sinistra e destra', 'Sull’area, meno o più croma.'],
          ['Freccia su e giù', 'Sull’area, più chiaro o più scuro.'],
          ['Maiusc + frecce', 'Spostano il cursore dieci volte tanto.'],
          ['Home e Fine', 'Sull’area, croma nullo o massimo.'],
          ['Pag su e Pag giù', 'Sull’area, molto più chiaro o più scuro.'],
        ],
        notes: [
          'Il cursore dell’area è uno <code>slider</code> chiamato «Color» che annuncia entrambi i valori, come «Lightness 62%, chroma 75%». Tonalità e opacità sono input range nativi.',
          'I campioni sono pulsanti con il nome della loro etichetta, e risultano premuti quando corrispondono al colore.',
          'AA e AAA dicono «passes» o «fails» a parole, non solo con il colore, e in modalità forced colors i colori stessi restano.',
        ],
      },
      carousel: {
        name: 'Carosello',
        title: 'Componente carosello e slider per Angular',
        summary: 'Slide in fila che scorrono e si agganciano, con pulsanti, puntini e rotazione.',
        description:
          'Carosello Angular accessibile: scroll snapping e swipe nativi, più slide per vista, puntini, loop e una rotazione che va in pausa e si ferma come chiede WCAG.',
        apiDescription:
          'Riferimento API del carosello Needless UI: slide per vista, indice, loop e rotazione di nui-carousel, i suoi metodi e la direttiva nuiCarouselSlide.',
        a11yDescription:
          'Tastiera e accessibilità del carosello Needless UI: il pattern Carousel di WAI-ARIA, un controllo della rotazione, slide con nome e spostamenti annunciati.',
        overview: [
          'Un carosello mostra le slide in una fila che scorre e si aggancia a ciascuna: swipe, trackpad e tasti freccia lo spostano in modo nativo, così come i pulsanti precedente e successivo e i puntini. Segna ogni slide con <code>nuiCarouselSlide</code>, che le dà come nome il suo titolo.',
          'Mostra una slide alla volta, o più di una con <code>perView</code>, oppure lascia che ogni slide mantenga la propria larghezza con <code>perView="auto"</code>. <code>[(index)]</code> collega la prima slide visibile, e <code>loop</code> ricomincia dall’inizio.',
          'Con <code>autoplay</code> gira da solo, preceduto da un controllo della rotazione. La rotazione va in pausa sotto il puntatore e si ferma del tutto quando entra il focus da tastiera, come chiede il pattern WAI-ARIA.',
        ],
        examples: {
          featured: {
            title: 'Viaggi in evidenza',
            text: 'Una nuova slide ogni sei secondi, con l’anello sul controllo della rotazione che si riempie fino alla successiva. Passa sopra con il mouse per mettere in pausa la rotazione, o entra con Tab per fermarla.',
          },
          shelf: {
            title: 'Uno scaffale di card',
            text: '<code>perView="auto"</code> mantiene la larghezza di ogni card e ne mostra quante ce ne stanno. I puntini seguono lo swipe, e <code>[(index)]</code> dice dove si trova.',
          },
        },
        api: {
          NuiCarousel: {
            summary: 'Un carosello di slide.',
            members: {
              label: 'Dà un nome al carosello.',
              index: 'La prima slide visibile, a partire da 0.',
              perView:
                'Le slide visibili contemporaneamente, o <code>auto</code> per slide che decidono da sé la propria larghezza.',
              gap: 'Lo spazio tra le slide, come qualsiasi lunghezza CSS.',
              loop: 'Andare oltre l’ultima slide riporta alla prima, e viceversa.',
              autoplay: 'Millisecondi tra una slide e l’altra quando gira da solo; con 0 non gira.',
              'controls, indicators': 'I pulsanti precedente e successivo, e i puntini.',
              labels: 'Ogni suo testo, da tradurre.',
              'next, previous': 'Va avanti o indietro di una slide.',
              goTo: 'Scorre fino a una slide.',
            },
          },
          NuiCarouselSlide: {
            summary: 'Una slide.',
            members: { nuiCarouselSlide: 'Il suo titolo, letto al posto della sua posizione.' },
          },
        },
        keyboard: [
          ['Tab', 'Scorre il controllo della rotazione, i pulsanti, le slide e poi i puntini.'],
          ['Freccia sinistra e destra sulle slide', 'Portano alla slide precedente o successiva.'],
          ['Invio o Spazio', 'Attiva il pulsante o il puntino con il focus.'],
        ],
        notes: [
          'Il carosello è una <code>region</code> con <code>aria-roledescription="carousel"</code>, e ogni slide un <code>group</code> con <code>aria-roledescription="slide"</code>, con un nome come «Lake Como, 2 of 4».',
          'Il controllo della rotazione viene per primo e dice cosa farà. La rotazione va in pausa sotto il puntatore e si ferma quando entra il focus da tastiera, così non sposta mai ciò che qualcuno sta leggendo.',
          'Viene annunciato dove arriva il carosello dopo uno swipe, un pulsante o un puntino; la rotazione resta in silenzio.',
        ],
      },
      editor: {
        name: 'Editor di testo formattato',
        title: 'Componente editor di testo formattato per Angular',
        summary:
          'Intestazioni, elenchi, link e formattazione, con barra degli strumenti e Markdown mentre scrivi.',
        description:
          'Editor di testo formattato Angular accessibile: barra degli strumenti, scorciatoie, Markdown mentre scrivi, incolla pulito, link e undo, in HTML o Markdown.',
        apiDescription:
          'Riferimento API dell’editor di testo formattato Needless UI: valore e formato di nui-editor, strumenti, testi, comandi e i convertitori HTML e Markdown.',
        a11yDescription:
          'Tastiera e accessibilità dell’editor di testo formattato Needless UI: campo multiriga, barra degli strumenti WAI-ARIA, scorciatoie e dialog per i link.',
        overview: [
          'L’editor scrive paragrafi, intestazioni, citazioni, elenchi, blocchi di codice e separatori, con grassetto, corsivo, sottolineato, barrato, codice e link. Il suo valore è HTML, o Markdown con <code>format="markdown"</code>, e funziona con i moduli.',
          'Gestisce un proprio documento e ogni modifica, quindi ciò che viene incollato o trascinato arriva alla pagina solo come quel documento: struttura e formattazione restano, anche da Google Docs e Word, mentre script, stili e link non sicuri spariscono.',
          'Scrivi Markdown e diventa formattazione: <code># </code> inizia un’intestazione, <code>- </code> un elenco, e <code>**bold**</code> e <code>`code`</code> si formattano appena li chiudi. Ogni formato ha la sua scorciatoia e il suo pulsante nella barra degli strumenti.',
        ],
        examples: {
          comment: {
            title: 'Un commento',
            text: '<code>tools</code> sceglie i pulsanti della barra degli strumenti. Scrivi Markdown, incolla da qualsiasi fonte e guarda l’HTML che l’editor conserva.',
          },
          markdown: {
            title: 'Markdown in entrata e in uscita',
            text: 'Con <code>format="markdown"</code>, il valore è Markdown: letto con elenchi annidati, citazioni e codice, e riscritto mentre modifichi.',
          },
        },
        api: {
          NuiEditor: {
            summary: 'Un editor di testo formattato.',
            members: {
              value: 'Il contenuto, in HTML o Markdown; vuoto quando non c’è testo.',
              format: 'Come viene scritto il valore.',
              tools:
                'I pulsanti della barra degli strumenti in ordine, con <code>|</code> tra i gruppi.',
              'label, labelledBy, describedBy': 'Danno un nome e una descrizione al contenuto.',
              placeholder: 'Testo mostrato finché è vuoto.',
              'readonly, disabled, invalid':
                'Mostra il contenuto senza poterlo modificare; lo disattiva; lo segna come non valido.',
              labels: 'Ogni suo testo, da tradurre.',
              run: 'Esegue un comando della barra degli strumenti.',
              'undo, redo, focus': 'Annulla, ripete e sposta il focus nel testo.',
            },
          },
          Helpers: {
            summary: 'Funzioni per convertire i documenti.',
            members: {
              'nuiEditorToHtml, nuiEditorToMarkdown': 'Scrivono un documento in HTML o Markdown.',
              'nuiEditorFromHtml, nuiEditorFromMarkdown':
                'Leggono HTML o Markdown in un documento, tenendo ciò che l’editor può mostrare.',
            },
          },
        },
        keyboard: [
          [
            'Ctrl + B, I o U',
            'Grassetto, corsivo o sottolineato. Sui dispositivi Apple, ⌘ al posto di Ctrl.',
          ],
          ['Ctrl + K', 'Aggiunge o modifica un link.'],
          ['Ctrl + Alt + 1, 2 o 3', 'Un’intestazione; Ctrl + Alt + 0 la riporta a paragrafo.'],
          ['Ctrl + Maiusc + 7 o 8', 'Un elenco numerato o puntato.'],
          [
            'Tab e Maiusc + Tab in un elenco',
            'Aumentano o riducono il rientro; altrove, Tab esce dall’editor.',
          ],
          ['Ctrl + Z, Ctrl + Maiusc + Z', 'Annulla e ripeti.'],
          [
            'Freccia sinistra e destra nella barra degli strumenti',
            'Si spostano tra i suoi pulsanti.',
          ],
        ],
        notes: [
          'Il contenuto è una <code>textbox</code> con <code>aria-multiline</code>, con il nome dato da <code>label</code> e il segnaposto in <code>aria-placeholder</code>.',
          'La barra degli strumenti è una toolbar WAI-ARIA con un solo tab stop: i formati sono pulsanti toggle con <code>aria-pressed</code>, e ogni pulsante indica la sua scorciatoia in <code>aria-keyshortcuts</code> e nel suo tooltip.',
          'Un comando della barra degli strumenti riporta il focus al testo, e anche il dialog dei link lo fa con Esc. Tab non resta mai bloccato: fuori dagli elenchi esce dall’editor.',
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
      'browser-support': {
        title: 'Supporto dei browser',
        description:
          'I browser che Needless UI supporta e testa: versioni di Chrome, Edge, Firefox e Safari, telefoni e schermi touch, e cosa tralasciano i browser più vecchi.',
        blocks: [
          {
            kind: 'p',
            html: 'Needless UI si basa su elementi nativi e su funzionalità recenti della piattaforma web, come l’API Popover. Supporta i browser qui sotto a partire dalla versione indicata. Nelle versioni precedenti, menu, select e popover non si aprono.',
          },
          { kind: 'h2', id: 'supported', text: 'Browser supportati' },
          {
            kind: 'table',
            caption: 'Versioni minime supportate',
            head: ['Browser', 'Dalla versione', 'Necessaria per'],
            rows: [
              [
                'Chrome ed Edge, su computer e Android',
                '120',
                'Icone disegnate con le maschere CSS e <code>:dir()</code> per il testo da destra a sinistra',
              ],
              ['Firefox, su computer e Android', '125', 'L’API Popover'],
              ['Safari su Mac', '17', 'L’API Popover'],
              ['Tutti i browser su iPhone e iPad', 'iOS 17', 'L’API Popover'],
              ['Samsung Internet su Android', '25', 'Come per Chrome'],
            ],
          },
          {
            kind: 'p',
            html: 'Gli altri browser basati su Chromium, come Opera e Brave, seguono le versioni di Chrome. Angular 22 di per sé richiede Chrome, Edge e Firefox 119, oltre a Safari 17. Internet Explorer e il vecchio Edge, precedente a Chromium, non sono supportati.',
          },
          { kind: 'h2', id: 'tested', text: 'Browser testati' },
          {
            kind: 'p',
            html: 'A ogni modifica, i test di tutti i componenti girano nei motori di Chrome, Firefox e Safari. Prima di una release, ciascuna pagina di questa documentazione viene verificata in tutti i motori, su un computer e su un telefono con input touch: deve caricarsi, aprire ogni menu e popup, stare nello schermo e superare i controlli di accessibilità.',
          },
          {
            kind: 'table',
            caption: 'Browser testati',
            head: ['Motore', 'Versione', 'Testato su'],
            rows: [
              [
                'Chromium (in Chrome ed Edge)',
                '153',
                'Un computer e un telefono Android con input touch',
              ],
              ['Firefox', '155', 'Un computer e uno schermo touch grande come un telefono'],
              ['WebKit (in Safari)', '26.6', 'Un computer e un iPhone con input touch'],
              ['Safari su iPhone', 'iOS 17.5 e 18.6', 'Il simulatore di iPhone'],
            ],
          },
          {
            kind: 'p',
            html: 'Le versioni intermedie, tra la più vecchia supportata e quelle testate, non vengono verificate una per una: sono supportate perché hanno tutte le funzionalità che servono ai componenti.',
          },
          { kind: 'h2', id: 'newer', text: 'Extra nei browser più recenti' },
          {
            kind: 'p',
            html: 'Alcuni dettagli usano funzionalità che hanno solo i browser più recenti. Gli altri browser li tralasciano, senza che si rompa nulla:',
          },
          {
            kind: 'table',
            caption: 'Dettagli che richiedono browser più recenti',
            head: ['Dettaglio', 'Browser', 'Altrove'],
            rows: [
              [
                'Popover, menu e dialog si animano in entrata e in uscita',
                'Chrome ed Edge, Firefox 129, Safari 17.5',
                'Compaiono e scompaiono all’istante',
              ],
              [
                'Angoli squircle (<code>corner-shape</code>)',
                'Chrome ed Edge 139',
                'Angoli arrotondati',
              ],
              [
                'Prelevare un colore da qualsiasi punto dello schermo',
                'Chrome ed Edge su computer',
                'Nessun pulsante contagocce',
              ],
              ['Scegliere un’intera cartella nella dropzone', 'Browser su computer', 'Solo file'],
              [
                'L’anello sul controllo della rotazione del carosello si riempie in modo fluido',
                'Chrome ed Edge, Firefox 128, Safari',
                'Si riempie di colpo',
              ],
            ],
          },
          { kind: 'h2', id: 'touch', text: 'Telefoni e schermi touch' },
          {
            kind: 'p',
            html: 'Ogni componente funziona al tocco. Le maniglie dello splitter, l’area del colore, i bordi delle colonne e i toast seguono il dito senza far scorrere la pagina, lo swipe del carosello usa lo scorrimento nativo del browser, e una pressione prolungata afferra un evento del pianificatore. Sugli schermi touch il testo dei campi è di almeno 16px, così gli iPhone non fanno zoom su di essi, e le parole che alcune tastiere compongono, come quelle Android, arrivano intere.',
          },
          {
            kind: 'p',
            html: 'Gli schermi touch non conoscono l’hover, quindi una hovercard si limita ad arricchire ciò che c’è già nella pagina: non metterci niente di essenziale. Su un telefono, il tasto Invio della chat va a capo, e il pulsante invia.',
          },
          { kind: 'h2', id: 'keyboard', text: 'La tastiera in Safari' },
          {
            kind: 'p',
            html: 'Di default, in Safari il tasto Tab si sposta solo tra campi di testo e menu a comparsa. Per raggiungere ogni pulsante e link, attiva «Premi Tab per evidenziare ogni elemento di una pagina web» («Press Tab to highlight each item on a webpage») nelle impostazioni Avanzate di Safari, oppure premi Opzione + Tab. Inoltre Safari non dà il focus a un pulsante quando lo si clicca; i componenti rimediano, così dopo un clic la tastiera riprende da lì come negli altri browser.',
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
