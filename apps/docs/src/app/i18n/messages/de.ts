import type { Messages } from './types';

export const messages: Messages = {
  site: {
    name: 'Needless UI',
    tagline: 'The Needlessly Engineered Styling Toolkit',
    description:
      'Barrierefreie, anpassbare Angular-Komponenten: native Elemente, W3C-Design-Tokens und ein frameworkunabhängiges Stylesheet. Open Source unter MIT-Lizenz.',
    skipToContent: 'Zum Hauptinhalt springen',
    nav: {
      label: 'Hauptnavigation',
      home: 'Startseite von Needless UI',
      components: 'Komponenten',
      guides: 'Anleitungen',
      github: 'GitHub',
      language: 'Sprache',
      theme: 'Theme',
      themes: { system: 'System', light: 'Hell', dark: 'Dunkel' },
    },
    footer: {
      license: 'Veröffentlicht unter der MIT-Lizenz.',
      source: 'Quellcode',
      built: 'Unnötig ausgeklügelt, sorgfältig gebaut.',
      legal: 'Impressum',
      privacy: 'Datenschutz',
    },
  },

  home: {
    title: 'Needless UI · Barrierefreie Angular-Komponenten, unnötig ausgeklügelt',
    description:
      'Needless UI ist eine Open-Source-Komponentenbibliothek für Angular: native Elemente, ein Stylesheet für alle Frameworks, W3C-Design-Tokens und WCAG 2.2 AA.',
    eyebrow: 'Open Source · Angular 22 · MIT',
    heading: 'UI-Komponenten, unnötig gut durchdacht.',
    lead: 'Needless UI gestaltet <strong>native Elemente</strong> mit einem einzigen frameworkunabhängigen Stylesheet und W3C-Design-Tokens. Die Angular-Direktiven ergänzen das Verhalten aus Angular Aria, sodass jede Komponente vom ersten Rendern an barrierefrei ist.',
    getStarted: 'Loslegen',
    browse: 'Komponenten ansehen',
    featuresTitle: 'Warum es Needless UI gibt',
    features: [
      {
        title: 'Native Elemente zuerst',
        text: '<code>&lt;button nuiButton&gt;</code> ist ein echter Button. Formulare, Tastatur und Screenreader funktionieren, weil nichts ihn umhüllt.',
      },
      {
        title: 'Ein Stylesheet für jedes Framework',
        text: 'Die Komponenten sind reines CSS in Cascade Layers: heute Angular, als Nächstes React und schlichtes HTML sowieso.',
      },
      {
        title: 'Dein CSS gewinnt immer',
        text: 'Alles steckt in <code>@layer nui</code>, deshalb überschreiben deine eigenen Styles es ohne <code>!important</code> und ohne Kampf um Spezifität.',
      },
      {
        title: 'Barrierefrei von Grund auf',
        text: 'Beim Generieren der Palette wird jedes Farbpaar gegen WCAG 2.2 AA geprüft. Fokus, Forced Colors und reduzierte Bewegung sind bereits berücksichtigt.',
      },
      {
        title: 'Standardisierte Design-Tokens',
        text: 'Token-Dateien im W3C-DTCG-Format werden zu CSS Custom Properties kompiliert, mit hellen, dunklen und verschachtelten Themes.',
      },
      {
        title: 'Modernes Angular',
        text: 'Signal Inputs, zoneless, serverseitiges Rendering und ein Entry Point pro Komponente – so liefern Apps nur aus, was sie importieren.',
      },
    ],
    codeTitle: 'Zwei Imports, fertig',
    codeText:
      'Füge das Paket hinzu, importiere das Stylesheet einmal und verwende die Komponenten in jeder Standalone-Komponente.',
  },

  components: {
    title: 'Komponenten',
    description:
      'Entdecke die Komponenten von Needless UI für Angular: barrierefreie Buttons, Dialoge und Menüs mit Live-Beispielen, API-Referenz und Tastaturbedienung.',
    intro:
      'Jede Komponente basiert auf nativen Elementen und ist mit Live-Beispielen, ihrer API und ihrem Tastaturverhalten dokumentiert.',
    tabsLabel: 'Abschnitte der Dokumentation',
    tabs: { overview: 'Übersicht', api: 'API', accessibility: 'Barrierefreiheit' },
    sidenavLabel: 'Komponenten',
    onThisPage: 'Auf dieser Seite',
    example: {
      showCode: 'Code anzeigen',
      hideCode: 'Code ausblenden',
      copy: 'Kopieren',
      copied: 'Kopiert',
      files: 'Quelldateien',
    },
    api: {
      import: 'Import',
      selector: 'Selektor',
      exportAs: 'Exportiert als',
      members: 'Eigenschaften',
      name: 'Name',
      type: 'Typ',
      default: 'Standardwert',
      description: 'Beschreibung',
      kinds: { input: 'Input', model: 'Two-Way', output: 'Output', method: 'Methode' },
    },
    a11y: {
      keyboard: 'Tastaturbedienung',
      key: 'Taste',
      action: 'Aktion',
      notes: 'Hinweise zur Barrierefreiheit',
    },
    titles: {
      api: (name) => `API der ${name}-Komponente`,
      accessibility: (name) => `Barrierefreiheit der ${name}-Komponente`,
    },
    items: {
      button: {
        name: 'Button',
        title: 'Button-Komponente für Angular',
        summary: 'Aktionen und Links, direkt auf nativen Buttons und Links gestaltet.',
        description:
          'Barrierefreie Angular-Direktive für native Button- und Link-Elemente, mit vier Varianten, drei Farbtönen, drei Größen und Link-Unterstützung.',
        apiDescription:
          'API-Referenz des Buttons von Needless UI: die Direktive nuiButton, ihr Selektor und ihre Inputs variant, tone, size und disabled.',
        a11yDescription:
          'Tastaturverhalten und Barrierefreiheit des Buttons von Needless UI: native Semantik, Fokusring, Kontrast, Zielgröße und deaktivierte Links.',
        overview: [
          'Die Direktive <code>nuiButton</code> gestaltet ein natives <code>&lt;button&gt;</code> oder <code>&lt;a&gt;</code>. Das Element behält seine Semantik und sein Tastaturverhalten und nimmt weiter an Formularen teil; die Direktive überträgt nur ihre Inputs auf die Data-Attribute, die das Stylesheet anspricht.',
          'Verwende ein <code>&lt;button&gt;</code> für Aktionen und ein <code>&lt;a&gt;</code> für die Navigation. Beide sehen gleich aus, und beide unterstützen <code>disabled</code>.',
        ],
        examples: {
          variants: {
            title: 'Varianten',
            text: 'Vier Füllstile, vom auffälligsten bis zum dezentesten. Verwende pro Ansicht nur einen gefüllten Button für die Hauptaktion.',
          },
          tones: {
            title: 'Farbtöne',
            text: 'Der Farbton bestimmt die Palette: accent für den Hauptweg, neutral für sekundäre Aktionen, danger für destruktive.',
          },
          sizes: {
            title: 'Größen',
            text: 'Drei Höhen: 28, 36 und 44 Pixel. Selbst die kleinste übertrifft die Mindestzielgröße der WCAG 2.2.',
          },
          links: {
            title: 'Links und deaktivierte Buttons',
            text: 'Links lassen sich nicht nativ deaktivieren. Ein deaktivierter Link erhält daher <code>aria-disabled="true"</code>, und seine Klicks werden blockiert, auch mit <code>routerLink</code>.',
          },
        },
        api: {
          NuiButton: {
            summary:
              'Gestaltet ein natives <code>&lt;button&gt;</code> oder <code>&lt;a&gt;</code> als Button.',
            members: {
              variant:
                'Füllstil: <code>solid</code>, <code>soft</code>, <code>outline</code> oder <code>ghost</code>.',
              tone: 'Farbpalette: <code>accent</code>, <code>neutral</code> oder <code>danger</code>.',
              size: 'Höhe, Innenabstand und Schriftgröße: <code>sm</code>, <code>md</code> oder <code>lg</code>.',
              disabled:
                'Deaktiviert den Button. Bei Links wird <code>aria-disabled</code> gesetzt und die Aktivierung blockiert.',
            },
          },
        },
        keyboard: [
          ['Tab', 'Setzt den Fokus auf den Button oder Link.'],
          ['Enter', 'Aktiviert den Button oder folgt dem Link.'],
          [
            'Leertaste',
            'Aktiviert den Button. Auf Links scrollt sie die Seite (natives Verhalten).',
          ],
        ],
        notes: [
          'Der zugängliche Name ist der Text des Elements. Buttons, die nur ein Icon enthalten, brauchen ein <code>aria-label</code>.',
          'Der Text erreicht in jeder Variante, jedem Farbton und jedem Theme ein Kontrastverhältnis von 4,5:1; der Palettengenerator stellt das sicher.',
          'Der Fokusring ist eine 2 px breite Kontur mit mindestens 3:1 Kontrast zur Seite, in beiden Themes.',
          'Ein deaktiviertes <code>&lt;button&gt;</code> fällt aus der Tab-Reihenfolge. Ein deaktivierter Link bleibt fokussierbar, damit man ihn auch mit Screenreader findet, und wird als deaktiviert angesagt.',
          'Im Forced-Colors-Modus wird der transparente Rahmen zu einer sichtbaren Kontur in Systemfarbe.',
        ],
      },

      dialog: {
        name: 'Dialog',
        title: 'Dialog-Komponente für Angular',
        summary:
          'Ein modales Fenster auf Basis des nativen dialog-Elements, dessen Fokus der Browser verwaltet.',
        description:
          'Barrierefreier Angular-Dialog auf Basis des nativen dialog-Elements: modaler Fokus, Schließen mit Esc, Rückgabewerte und Schließen per Klick auf den Backdrop.',
        apiDescription:
          'API-Referenz des Dialogs von Needless UI: nuiDialog mit Two-Way-Binding für open, Größen, Rückgabewerten sowie Teilen für Titel, Beschreibung und Schließen.',
        a11yDescription:
          'Tastaturverhalten und Barrierefreiheit des Dialogs von Needless UI: modaler Fokus, Esc, Wiederherstellung des Fokus und beschriftete Inhalte.',
        overview: [
          'Die Direktive <code>nuiDialog</code> macht aus einem nativen <code>&lt;dialog&gt;</code> einen Dialog von Needless UI. Das modale Verhalten liefert der Browser: Die Seite dahinter wird inert, der Fokus bleibt im Dialog, Esc schließt ihn, und der Fokus kehrt zum auslösenden Element zurück.',
          'Binde <code>[(open)]</code> an ein Signal und gib Schließen-Buttons mit <code>nuiDialogClose="…"</code> einen Wert, um zu erfahren, wie der Dialog geschlossen wurde.',
        ],
        examples: {
          confirm: {
            title: 'Bestätigung',
            text: 'Eine Bestätigung für eine destruktive Aktion. Die sichere Option hat <code>autofocus</code>, und der gewählte Wert kommt über <code>(closed)</code> an.',
          },
          form: {
            title: 'Formular im Dialog',
            text: 'Ein Dialog kann beliebige Inhalte enthalten. Hier erhält das erste Feld beim Öffnen den Fokus.',
          },
          dismissible: {
            title: 'Erzwungene Auswahl',
            text: 'Mit <code>[dismissible]="false"</code> werden Esc und Klicks auf den Backdrop ignoriert: Es muss eine Option gewählt werden.',
          },
        },
        api: {
          NuiDialog: {
            summary:
              'Macht aus einem nativen <code>&lt;dialog&gt;</code> einen Dialog von Needless UI.',
            members: {
              open: 'Ob der Dialog geöffnet ist. Wird mit <code>[(open)]</code> gebunden.',
              modal: 'Öffnet den Dialog modal, mit Backdrop und inerter Seite dahinter.',
              dismissible: 'Ob Esc und Klicks auf den Backdrop den Dialog schließen.',
              size: 'Maximale Breite: <code>sm</code> (24rem), <code>md</code> (32rem) oder <code>lg</code> (44rem).',
              closed:
                'Emittiert bei jedem Schließen den Rückgabewert. Er ist leer, wenn der Dialog ohne Auswahl geschlossen wurde.',
              close: 'Schließt den Dialog mit einem optionalen Rückgabewert.',
            },
          },
          NuiDialogTitle: {
            summary:
              'Der Titel des Dialogs. Er erhält eine ID und wird zum <code>aria-labelledby</code> des Dialogs.',
            members: {},
          },
          NuiDialogDescription: {
            summary:
              'Eine kurze Beschreibung, auf die das <code>aria-describedby</code> des Dialogs verweist.',
            members: {},
          },
          NuiDialogActions: {
            summary: 'Eine Reihe von Buttons am unteren Rand des Dialogs, am Ende ausgerichtet.',
            members: {},
          },
          NuiDialogClose: {
            summary: 'Schließt beim Klicken den umgebenden Dialog.',
            members: {
              nuiDialogClose:
                'Der Rückgabewert beim Schließen des Dialogs, ausgegeben über <code>(closed)</code>.',
            },
          },
        },
        keyboard: [
          ['Tab', 'Verschiebt den Fokus zum nächsten Element im Dialog.'],
          ['Umschalt + Tab', 'Verschiebt den Fokus zum vorherigen Element im Dialog.'],
          ['Esc', 'Schließt den Dialog, sofern er keine Auswahl erzwingt.'],
        ],
        notes: [
          'Beim Öffnen mit <code>showModal()</code> erhält der Dialog <code>role="dialog"</code> und modale Semantik, und der Rest der Seite wird inert.',
          'Titel und Beschreibung sind über generierte IDs verknüpft, sodass Screenreader beim Öffnen beides ansagen.',
          'Der Fokus geht zuerst an das Element mit <code>autofocus</code> oder an das erste fokussierbare Element. Setze <code>autofocus</code> bei destruktiven Bestätigungen auf die sichere Option.',
          'Beim Schließen kehrt der Fokus zu dem Element zurück, das den Dialog geöffnet hat.',
          'Browser können einen Dialog, der eine Auswahl erzwingt, nach mehrmaligem Drücken von Esc ohne weitere Interaktion trotzdem schließen. Biete daher immer einen ausdrücklichen Ausweg an.',
        ],
      },

      menu: {
        name: 'Menu',
        title: 'Menü-Komponente für Angular',
        summary:
          'Eine aufklappbare Liste von Aktionen, mit Untermenüs, Checkbox- und Radio-Einträgen und voller Tastaturunterstützung.',
        description:
          'Barrierefreies Angular-Menü auf Basis von Angular Aria: Tastaturnavigation, Typeahead, Untermenüs, Checkbox- und Radio-Einträge und Positionierung im Viewport.',
        apiDescription:
          'API-Referenz des Menüs von Needless UI: nuiMenuTrigger, nuiMenu und nuiMenuItem mit Werten, Farbtönen, Untermenüs und Auswahlzustand.',
        a11yDescription:
          'Tastaturbedienung und Barrierefreiheit des Menüs von Needless UI: Pfeiltasten, Typeahead, Untermenüs, Esc und Rückkehr des Fokus.',
        overview: [
          'Ein Menü zeigt eine Liste von Aktionen, sobald sein Trigger aktiviert wird. Das Verhalten stammt aus dem Menü-Pattern von Angular Aria; Needless UI ergänzt die Styles, rendert das Menü als Popover über der Seite und hält es im Viewport.',
          'Übergib die <code>ngMenu</code>-Referenz des Menüs an <code>[nuiMenuTrigger]</code>, gib jedem Eintrag einen eindeutigen <code>value</code> und reagiere auf <code>(selected)</code> am Eintrag oder auf <code>(itemSelected)</code> am Menü.',
        ],
        examples: {
          actions: {
            title: 'Aktionen',
            text: 'Ein Aktionsmenü mit Tastenkürzel-Hinweisen, einem Trenner und einem destruktiven Eintrag.',
          },
          submenu: {
            title: 'Untermenüs',
            text: 'Verknüpfe einen Eintrag über <code>[submenu]</code> mit einem verschachtelten <code>nuiMenu</code>. Es öffnet sich beim Überfahren mit der Maus oder mit der Pfeiltaste nach rechts.',
          },
          checkable: {
            title: 'Checkbox- und Radio-Einträge',
            text: 'Setze <code>role</code> und binde <code>[checked]</code>. Das Menü stellt die Markierung dar und sagt den Zustand an.',
          },
        },
        api: {
          NuiMenuTrigger: {
            summary: 'Öffnet ein Menü. Wird meist auf einen <code>nuiButton</code> angewendet.',
            members: {
              nuiMenuTrigger:
                'Das zu öffnende Menü: die <code>ngMenu</code>-Referenz eines <code>nuiMenu</code>.',
            },
          },
          NuiMenu: {
            summary:
              'Ein Menü aus Einträgen, als Popover neben seinem Trigger gerendert. Sein Export <code>ngMenu</code> ist das Angular-Aria-Menü, das Trigger und Untermenüs erwarten.',
            members: {
              wrap: 'Ob die Pfeiltasten vom letzten Eintrag wieder zum ersten springen.',
              typeaheadDelay: 'Millisekunden, bis die Typeahead-Suche zurückgesetzt wird.',
              disabled: 'Deaktiviert das gesamte Menü.',
              itemSelected:
                'Emittiert den Wert des gewählten Eintrags. Am obersten Menü auch für Einträge aus Untermenüs.',
            },
          },
          NuiMenuItem: {
            summary: 'Ein Eintrag in einem <code>nuiMenu</code>.',
            members: {
              value:
                'Identifiziert den Eintrag. Muss im gesamten Menü eindeutig sein, Untermenüs eingeschlossen.',
              disabled:
                'Deaktiviert den Eintrag. Er bleibt mit den Pfeiltasten erreichbar, kann aber nicht gewählt werden.',
              submenu: 'Ein verschachteltes <code>nuiMenu</code>, das dieser Eintrag öffnet.',
              role: '<code>menuitem</code>, <code>menuitemcheckbox</code> oder <code>menuitemradio</code>.',
              checked: 'Auswahlzustand eines Checkbox- oder Radio-Eintrags.',
              tone: '<code>danger</code> für destruktive Aktionen.',
              searchTerm:
                'Text, den die Typeahead-Suche abgleicht. Standardmäßig die Beschriftung des Eintrags.',
              selected:
                'Emittiert den Wert des Eintrags, wenn er per Maus oder Tastatur gewählt wird.',
            },
          },
          NuiMenuSeparator: { summary: 'Eine Linie zwischen Gruppen von Einträgen.', members: {} },
          NuiMenuShortcut: {
            summary: 'Ein Hinweis auf ein Tastenkürzel, am Ende eines Eintrags ausgerichtet.',
            members: {},
          },
        },
        keyboard: [
          [
            'Enter oder Leertaste',
            'Auf dem Trigger: öffnet das Menü und fokussiert den ersten Eintrag. Auf einem Eintrag: wählt ihn oder öffnet sein Untermenü.',
          ],
          [
            'Pfeil nach unten',
            'Auf dem Trigger: öffnet das Menü und fokussiert den ersten Eintrag. Im Menü: springt zum nächsten Eintrag.',
          ],
          [
            'Pfeil nach oben',
            'Auf dem Trigger: öffnet das Menü und fokussiert den letzten Eintrag. Im Menü: springt zum vorherigen Eintrag.',
          ],
          ['Pos1 und Ende', 'Springt zum ersten oder letzten Eintrag.'],
          [
            'Pfeil nach rechts',
            'Öffnet ein Untermenü und springt zu dessen erstem Eintrag (Pfeil nach links bei Text von rechts nach links).',
          ],
          [
            'Pfeil nach links',
            'Schließt ein Untermenü und kehrt zum übergeordneten Eintrag zurück (Pfeil nach rechts bei Text von rechts nach links).',
          ],
          ['Esc', 'Schließt das Menü und setzt den Fokus zurück auf den Trigger.'],
          [
            'Buchstaben',
            'Springt zum nächsten Eintrag, dessen Beschriftung mit dem eingegebenen Text beginnt.',
          ],
        ],
        notes: [
          'Der Trigger erhält <code>aria-haspopup</code>, <code>aria-expanded</code> und <code>aria-controls</code>; Menü und Einträge bekommen ihre ARIA-Rollen von Angular Aria.',
          'Der hervorgehobene Eintrag hat eine volle Füllung mit mindestens 4,5:1 Textkontrast und dient zugleich als Fokusindikator. Im Forced-Colors-Modus erhält er eine Hervorhebungskontur in Systemfarbe.',
          'Checkbox- und Radio-Einträge melden ihren Zustand über <code>aria-checked</code>.',
          'Die Wahl eines Eintrags schließt das Menü und setzt den Fokus zurück auf den Trigger. Verlässt der Fokus Trigger und Menü, schließt es sich ebenfalls.',
          'Einträge sind mindestens 28 Pixel hoch und liegen damit über der Mindestzielgröße der WCAG 2.2.',
        ],
      },
    },
  },

  guides: {
    title: 'Anleitungen',
    items: {
      'getting-started': {
        title: 'Erste Schritte',
        description:
          'So installierst du Needless UI in Angular 22: Pakete hinzufügen, Stylesheet importieren und in wenigen Minuten die erste barrierefreie Komponente nutzen.',
        blocks: [
          {
            kind: 'p',
            html: 'Needless UI funktioniert mit Angular 22. Die Komponenten sind Standalone-Direktiven, du musst also keine Module importieren.',
          },
          { kind: 'h2', id: 'install', text: 'Installation' },
          {
            kind: 'p',
            html: 'Füge das Angular-Paket zusammen mit Angular Aria und dem CDK hinzu, die Tastaturverhalten und Barrierefreiheit liefern. Das Stylesheet ist schon dabei.',
          },
          { kind: 'code', file: 'snippets/install.sh' },
          { kind: 'h2', id: 'styles', text: 'Styles importieren' },
          {
            kind: 'p',
            html: 'Importiere das Stylesheet einmal in <code>src/styles.css</code>. Es enthält die Design-Tokens und alle Komponenten.',
          },
          { kind: 'code', file: 'snippets/styles.css' },
          {
            kind: 'p',
            html: 'Alles steckt in <code>@layer nui</code>. Wenn deine App globale Resets wie <code>a { color: inherit }</code> hat, lege sie in einen Layer, der vor <code>nui</code> deklariert ist, damit sie die Komponenten nicht überschreiben.',
          },
          { kind: 'h2', id: 'use', text: 'Komponente verwenden' },
          {
            kind: 'p',
            html: 'Importiere die benötigten Direktiven aus ihren Entry Points und füge sie zu den <code>imports</code> deiner Komponente hinzu.',
          },
          { kind: 'code', file: 'snippets/usage.ts' },
          { kind: 'h2', id: 'next', text: 'Nächste Schritte' },
          {
            kind: 'p',
            html: 'Sieh dir die <a href="/components">Komponenten</a> mit Live-Beispielen an, oder lies die <a href="/guides/theming">Theming-Anleitung</a>, um alles an deine Marke anzupassen.',
          },
        ],
      },
      theming: {
        title: 'Theming',
        description:
          'Passe Needless UI mit CSS Custom Properties an: heller und dunkler Modus, verschachtelte Themes, eigene Token-Werte und eine kontrastgeprüfte Markenpalette.',
        blocks: [
          {
            kind: 'p',
            html: 'Jede visuelle Entscheidung ist eine CSS Custom Property, generiert aus W3C-Design-Tokens. Komponenten verwenden nur semantische Tokens wie <code>--nui-color-accent-solid</code>: Änderst du ein Token, ändert sich das Aussehen jeder Komponente, die es verwendet.',
          },
          { kind: 'h2', id: 'modes', text: 'Hell und dunkel' },
          {
            kind: 'p',
            html: 'Standardmäßig bestimmt die Einstellung des Betriebssystems den Modus. Mit <code>data-nui-theme</code> legst du auf jedem Element einen Modus fest, beliebig verschachtelt.',
          },
          { kind: 'code', file: 'snippets/theme-attribute.html' },
          { kind: 'demo', demo: 'nested-themes' },
          { kind: 'h2', id: 'tokens', text: 'Tokens überschreiben' },
          {
            kind: 'p',
            html: 'Die Tokens liegen in <code>@layer nui</code>, daher kann normales CSS deiner App sie überschreiben. Definiere sie auf <code>:root</code> für die ganze App oder auf einem beliebigen Element für einen Teil davon.',
          },
          { kind: 'code', file: 'snippets/override.css' },
          { kind: 'h2', id: 'palette', text: 'Eine Palette für deine Marke' },
          {
            kind: 'p',
            html: 'Die Farbskalen werden generiert. Ändere einen Farbton in <code>packages/tokens/scripts/palette.ts</code> und generiere neu: Das Skript passt jede Farbe an den sRGB-Farbraum an und prüft den Kontrast jedes Text-Hintergrund-Paars erneut.',
          },
          { kind: 'code', file: 'snippets/palette.sh' },
        ],
      },
    },
  },

  notFound: {
    title: 'Seite nicht gefunden',
    description:
      'Diese Seite gibt es nicht. Sieh dir die Komponenten von Needless UI an oder beginne auf der Startseite.',
    text: 'Diese Seite gibt es nicht, oder sie wurde verschoben.',
    home: 'Zur Startseite',
    components: 'Komponenten ansehen',
  },

  legal: {
    translationNote:
      'Diese Übersetzung wird der Einfachheit halber bereitgestellt; bei Abweichungen gilt der englische Text.',
    labels: {
      name: 'Name',
      address: 'Adresse',
      email: 'E-Mail',
      uid: 'UID',
      vat: 'MWST-Nummer',
    },
    notice: {
      title: 'Impressum',
      description:
        'Wer needlessui.com betreibt: Name, Postanschrift und E-Mail-Adresse des Betreibers sowie Angaben zu Handelsregister und Mehrwertsteuer.',
      operator: 'Betreiber',
      legalForm: 'Einzelunternehmen',
      country: 'Schweiz',
      register: 'Handelsregister',
      registerEntry: 'Eingetragen im Handelsregister des Kantons Zug.',
      vatSuffix: 'MWST',
      blocks: [
        { kind: 'h2', id: 'liability', text: 'Haftung' },
        {
          kind: 'p',
          html: 'Diese Website wird mit Sorgfalt erstellt, jedoch ohne Gewähr für Richtigkeit, Vollständigkeit und Aktualität. Verlinkte Websites liegen außerhalb unseres Einflusses; für ihre Inhalte sind ihre Betreiber verantwortlich.',
        },
        { kind: 'h2', id: 'license', text: 'Lizenz' },
        {
          kind: 'p',
          html: 'Needless UI, einschließlich dieser Website, ist Open Source unter der <a href="https://github.com/needless-ui/needless-ui/blob/main/LICENSE">MIT-Lizenz</a>.',
        },
      ],
    },
    privacy: {
      title: 'Datenschutzerklärung',
      description:
        'Wie needlessui.com mit deinen Daten umgeht: keine Cookies, keine Analyse, kein Tracking. Was der Hoster bei deinem Besuch verarbeitet und welche Rechte du hast.',
      updated: 'Stand: 24. September 2026',
      blocks: [
        {
          kind: 'p',
          html: 'Diese Erklärung beschreibt, welche personenbezogenen Daten verarbeitet werden, wenn du www.needlessui.com besuchst, und welche Rechte du hast. Kurz gesagt: Die Website verwendet keine Cookies, keine Analyse und kein Tracking und fragt dich nie nach personenbezogenen Daten.',
        },
        { kind: 'h2', id: 'controller', text: 'Verantwortlicher' },
        {
          kind: 'p',
          html: 'Der im <a href="/legal">Impressum</a> genannte Betreiber, Angelo Lamonaca. Kontakt: {email}.',
        },
        { kind: 'h2', id: 'hosting', text: 'Hosting' },
        {
          kind: 'p',
          html: 'Die Website wird von Vercel Inc., 440 N Barranca Avenue #4133, Covina, CA 91723, USA, gehostet. Wenn du eine Seite aufrufst, sendet dein Browser die technischen Daten, die jede Website erhält: deine IP-Adresse, Datum und Uhrzeit, die angeforderte Seite, die Seite, von der du kommst, und den User-Agent deines Browsers. Vercel verarbeitet diese Daten in unserem Auftrag, um die Website auszuliefern und abzusichern, und speichert sie nur so lange, wie es dafür nötig ist. Dies kann in den USA geschehen; Vercel ist nach dem EU-U.S. Data Privacy Framework, dessen UK-Erweiterung und dem Swiss-U.S. Data Privacy Framework zertifiziert. Siehe die <a href="https://vercel.com/legal/privacy-policy">Datenschutzhinweise von Vercel</a>.',
        },
        {
          kind: 'p',
          html: 'Soweit die DSGVO anwendbar ist, ist Rechtsgrundlage unser berechtigtes Interesse am Betrieb einer sicheren Website (Art. 6 Abs. 1 lit. f DSGVO).',
        },
        { kind: 'h2', id: 'storage', text: 'Cookies und lokaler Speicher' },
        {
          kind: 'p',
          html: 'Die Website setzt keine Cookies. Wenn du ein helles oder dunkles Theme wählst, merkt sich der lokale Speicher deines Browsers diese Wahl für deinen nächsten Besuch. Sie verlässt nie dein Gerät; stelle wieder auf „System“ um oder lösche die Websitedaten, um sie zu entfernen.',
        },
        { kind: 'h2', id: 'tracking', text: 'Kein Tracking' },
        {
          kind: 'p',
          html: 'Es gibt keine Analysetools, keine Werbung, keine Social-Media-Plugins, keine eingebetteten Inhalte Dritter und keine externen Schriftarten. Links zu GitHub und npm führen zu Websites mit eigenen Datenschutzerklärungen.',
        },
        { kind: 'h2', id: 'rights', text: 'Deine Rechte' },
        {
          kind: 'p',
          html: 'Du kannst Auskunft darüber verlangen, welche personenbezogenen Daten über dich verarbeitet werden, und sie berichtigen oder löschen lassen. Soweit die DSGVO anwendbar ist, kannst du außerdem der Verarbeitung widersprechen, ihre Einschränkung verlangen und deine Daten in einem übertragbaren Format erhalten. Schreib an {email}. Du kannst dich auch bei einer Aufsichtsbehörde beschweren: in der Schweiz beim Eidgenössischen Datenschutz- und Öffentlichkeitsbeauftragten (EDÖB); in der EU bei der Behörde deines Landes.',
        },
        { kind: 'h2', id: 'changes', text: 'Änderungen' },
        {
          kind: 'p',
          html: 'Diese Erklärung ändert sich, wenn sich die Website ändert, etwa bei einem Wechsel des Hosters. Das Datum unten nennt den aktuellen Stand.',
        },
      ],
    },
  },
};
