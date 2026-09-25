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
    emergency: {
      label: 'NICHT DRÜCKEN',
      cover: 'Schutzkappe anheben',
      button: 'Nicht drücken',
      armed: 'Die Schutzkappe ist offen. Überleg es dir gut.',
      falling: 'Notfallprotokoll aktiviert …',
      fallen:
        'Die Schwerkraft bleibt jetzt. Lade die Seite neu, um das Universum wieder aufzubauen.',
      reduced:
        'Dein System wünscht weniger Bewegung, also bleibt die Schwerkraft aus. Glück gehabt.',
    },
    toaster: { label: 'Benachrichtigungen (Alt + T)', close: 'Schließen' },
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
        title: 'Unnötig anpassbar',
        text: 'Federn, Druckeffekte, Eingangsanimationen, Eckenformen, Radius und Dichte: <a href="/guides/customization">ein Attribut</a> für die ganze App oder ein Input pro Komponente, auf Basis standardisierter W3C-Design-Tokens.',
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
      kinds: {
        input: 'Input',
        model: 'Two-Way',
        output: 'Output',
        method: 'Methode',
        property: 'Eigenschaft',
      },
      texts:
        'Auch jeder Text, den die Komponente anzeigt oder ansagt, ist ein Input und lässt sich so übersetzen:',
      customization: {
        note: 'Anpassungs-Inputs, die du nicht setzt, richten sich nach dem nächstgelegenen <code>data-nui-*</code>-Attribut. Mehr dazu in der <a href="/guides/customization">Anleitung zur Anpassung</a>.',
        members: {
          motion:
            'Die Feder, mit der sich die Komponente bewegt: <code>snappy</code>, <code>bouncy</code>, <code>jelly</code>, <code>elastic</code>, <code>lazy</code>, <code>mechanical</code> oder <code>none</code>.',
          spring:
            'Eine beliebige Feder als <code>{ stiffness, damping, mass }</code>, zur Laufzeit zu CSS kompiliert. Hat Vorrang vor <code>motion</code>.',
          press:
            'Was beim Gedrückthalten passiert: <code>sink</code>, <code>squish</code>, <code>pop</code>, <code>wobble</code>, <code>rubber</code>, <code>tilt</code> oder <code>none</code>.',
          enter:
            'Wie die Komponente erscheint: <code>zoom</code>, <code>fade</code>, <code>drop</code>, <code>rise</code>, <code>unfold</code>, <code>flip</code>, <code>swing</code>, <code>slide</code> oder <code>none</code>.',
          corners:
            'Die Form der Ecken: <code>round</code>, <code>squircle</code>, <code>bevel</code>, <code>scoop</code>, <code>notch</code> oder <code>square</code>.',
          radius:
            'Wie groß die Ecken sind: <code>none</code>, <code>small</code>, <code>medium</code>, <code>large</code> oder <code>full</code>.',
          density:
            'Wie viel Platz die Komponente einnimmt: <code>compact</code>, <code>regular</code> oder <code>roomy</code>.',
        },
      },
    },
    a11y: {
      keyboard: 'Tastaturbedienung',
      key: 'Taste',
      action: 'Aktion',
      notes: 'Hinweise zur Barrierefreiheit',
    },
    titles: {
      // Apposition instead of a compound: "Bewertung-Komponente" would need a linking s.
      api: (name) => `API der Komponente ${name}`,
      accessibility: (name) => `Barrierefreiheit der Komponente ${name}`,
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
          presses: {
            title: 'Druckeffekte',
            text: 'Halte jeden Button gedrückt. <code>press</code> bestimmt, was ein Button beim Gedrückthalten macht, und <code>motion</code> die Feder, mit der er zurückkehrt. <code>data-nui-press</code> auf einem beliebigen Element setzt den Effekt für alles darin.',
          },
          shapes: {
            title: 'Ecken, Radius und Dichte',
            text: '<code>corners</code> ändert die Form der Ecken, <code>radius</code> ihre Größe und <code>density</code> den Platz, den ein Button einnimmt – ohne je unter die Mindestzielgröße von 24 px zu fallen. Browser ohne <code>corner-shape</code> zeichnen runde Ecken.',
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
          entrances: {
            title: 'Eingangsanimationen',
            text: 'Jeder Button öffnet denselben Dialog mit einem anderen <code>enter</code>-Preset und der Feder <code>bouncy</code>. Egal, wie er erscheint: Er verschwindet mit einem schnellen Ausblenden.',
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
          entrances: {
            title: 'Eingangsanimationen und Federn',
            text: 'Jedes Menü kombiniert ein <code>enter</code>-Preset mit einer <code>motion</code>-Feder und wächst von der Seite aus, an der es sich öffnet. Untermenüs erben beides.',
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

      avatar: {
        name: 'Avatar',
        title: 'Avatar-Komponente für Angular',
        summary: 'Das Bild einer Person oder ihre Initialen auf einer Farbe, die immer ihr gehört.',
        description:
          'Angular-Avatar mit Initialen, wenn ein Bild fehlt, einer festen Farbe pro Name, Statuspunkten und Gruppen, in jedem Theme gut lesbar.',
        apiDescription:
          'API-Referenz des Avatars von Needless UI: nuiAvatar mit Name, Bild, Größe, Form und Status sowie nuiAvatarGroup.',
        a11yDescription:
          'Barrierefreiheit des Avatars von Needless UI: Bildrolle und Name, dekorative Avatare und Initialen mit einem Kontrast von 4,5:1.',
        overview: [
          'Die Komponente <code>nuiAvatar</code> zeigt ein Bild oder die Initialen der Person, wenn es keins gibt oder es nicht lädt. Die Initialen stehen auf einer Farbe, die aus dem Namen berechnet wird, sodass dieselbe Person überall dieselbe Farbe behält.',
          'Jeder Farbton ist auf eine Helligkeit und Buntheit begrenzt, bei der weiße Initialen ein Kontrastverhältnis von über 4,5:1 behalten, unabhängig von Name und Theme.',
        ],
        examples: {
          people: {
            title: 'Initialen, Bilder und Status',
            text: 'Ohne <code>src</code> ergeben sich Initialen und Farbe aus <code>name</code>. <code>status</code> ergänzt einen Punkt für den Anwesenheitsstatus.',
          },
          group: {
            title: 'Gruppen, Größen und Formen',
            text: '<code>nuiAvatarGroup</code> lässt eine Reihe von Avataren überlappen. <code>size</code> akzeptiert <code>sm</code>, <code>md</code> oder <code>lg</code>, und <code>shape="square"</code> passt zu Teams und Apps.',
          },
        },
        api: {
          NuiAvatar: {
            summary: 'Ein Bild oder Initialen, benannt nach der Person.',
            members: {
              name: 'Der Name der Person. Daraus ergeben sich der zugängliche Name, die Initialen und die Farbe.',
              src: 'URL des Bildes. Lädt es nicht, erscheinen stattdessen die Initialen.',
              size: 'Größe: <code>sm</code>, <code>md</code> oder <code>lg</code>.',
              shape: '<code>circle</code> oder <code>square</code>.',
              status:
                'Ein Punkt für den Anwesenheitsstatus: <code>online</code>, <code>away</code>, <code>busy</code> oder <code>offline</code>.',
              label:
                'Ein zugänglicher Name, der mehr sagt als der Name allein, etwa „Ada Lovelace, online“.',
              decorative:
                'Verbirgt den Avatar vor assistiven Technologien, für Avatare neben dem sichtbaren Namen.',
            },
          },
          NuiAvatarGroup: {
            summary: 'Eine Reihe überlappender Avatare. Benenne sie mit <code>aria-label</code>.',
            members: {},
          },
        },
        keyboard: [],
        notes: [
          'Ein Avatar ist ein Bild (<code>role="img"</code>), benannt nach der Person. Steht er neben ihrem sichtbaren Namen, setze <code>decorative</code>, damit Screenreader den Namen nicht doppelt ansagen.',
          'Der Statuspunkt ist rein visuell. Wenn der Status wichtig ist, nimm ihn in <code>label</code> auf.',
          'Initialen behalten auf jeder generierten Farbe ein Kontrastverhältnis von mindestens 4,5:1.',
        ],
      },

      breadcrumbs: {
        name: 'Breadcrumbs',
        title: 'Breadcrumbs-Komponente für Angular',
        summary: 'Der Pfad aus Seiten, der zur aktuellen Seite führt.',
        description:
          'Barrierefreie Angular-Breadcrumbs auf nativem nav und nativer Liste: CSS-Trenner, die sich bei Rechts-nach-links-Text spiegeln, und scrollende lange Pfade.',
        apiDescription:
          'API-Referenz der Breadcrumbs von Needless UI: die Direktive nuiBreadcrumbs und der Name ihrer Navigations-Landmark.',
        a11yDescription:
          'Barrierefreiheit der Breadcrumbs von Needless UI: Navigations-Landmark, Listensemantik, die aktuelle Seite und Zielgrößen.',
        overview: [
          'Breadcrumbs zeigen, wo eine Seite innerhalb der Website liegt. Die Direktive <code>nuiBreadcrumbs</code> gestaltet ein natives <code>&lt;nav&gt;</code> und seine Liste; der letzte Eintrag ist die aktuelle Seite, markiert mit <code>aria-current="page"</code>.',
          'Ein Pfad, der länger als sein Container ist, scrollt seitlich, statt umzubrechen. Er ist anfangs ans Ende gescrollt, und die Ränder blenden aus, wo es noch mehr zu sehen gibt.',
        ],
        examples: {
          trail: {
            title: 'Ein Pfad',
            text: 'Links zu den übergeordneten Seiten, dann die aktuelle Seite als reiner Text mit <code>aria-current="page"</code>.',
          },
          long: {
            title: 'Lange Pfade',
            text: 'In einem schmalen Container scrollt der Pfad, und die aktuelle Seite ist von Anfang an sichtbar.',
          },
        },
        api: {
          NuiBreadcrumbs: {
            summary: 'Gestaltet ein <code>&lt;nav&gt;</code> und seine Liste als Breadcrumbs.',
            members: { label: 'Zugänglicher Name der Navigations-Landmark.' },
          },
        },
        keyboard: [['Tab', 'Springt zum nächsten Link im Pfad.']],
        notes: [
          'Die Breadcrumbs sind eine Navigations-Landmark mit einer einfachen Liste, sodass Screenreader ansagen, wie viele Seiten der Pfad hat.',
          'Die Trenner werden mit CSS gezeichnet, deshalb werden sie nicht vorgelesen, und bei Rechts-nach-links-Text spiegeln sie sich.',
          'Jeder Link ist mindestens 24 px hoch.',
        ],
      },

      empty: {
        name: 'Empty State',
        title: 'Empty-State-Komponente für Angular',
        summary: 'Was du zeigst, wenn es nichts zu zeigen gibt, und wie es weitergeht.',
        description:
          'Angular-Empty-State mit Bild, Titel, kurzer Erklärung und Aktionen, dazu vier eingebaute Illustrationen, die sanft schweben.',
        apiDescription:
          'API-Referenz des Empty State von Needless UI: nuiEmpty und seine Teile für Bild, Titel, Beschreibung und Aktionen.',
        a11yDescription:
          'Barrierefreiheit des Empty State von Needless UI: dekorative Bilder, aussagekräftige Überschriften und reduzierte Bewegung.',
        overview: [
          'Ein Empty State ersetzt eine Liste, Tabelle oder Seite, die noch nichts enthält. Er erklärt, warum, und bietet den nächsten Schritt an.',
          'Der Bildteil nimmt dein eigenes Bild auf oder zeichnet ein eingebautes: <code>search</code>, <code>inbox</code>, <code>files</code> oder <code>error</code>.',
        ],
        examples: {
          search: {
            title: 'Keine Ergebnisse',
            text: 'Ein Titel, der sagt, was passiert ist, eine Zeile Hilfe und Aktionen als Ausweg.',
          },
          pictures: {
            title: 'Eingebaute Bilder',
            text: 'Setze <code>illustration</code> auf <code>nuiEmptyMedia</code>. Die Bilder folgen dem Theme und schweben, sofern Bewegung nicht reduziert ist.',
          },
        },
        api: {
          NuiEmpty: { summary: 'Der Container: eine zentrierte Spalte.', members: {} },
          NuiEmptyMedia: {
            summary: 'Das Bild, verborgen vor assistiven Technologien.',
            members: {
              illustration:
                'Ein eingebautes Bild: <code>search</code>, <code>inbox</code>, <code>files</code> oder <code>error</code>.',
            },
          },
          NuiEmptyTitle: {
            summary: 'Der Titel. Verwende die Überschriftenebene, die zur Seite passt.',
            members: {},
          },
          NuiEmptyDescription: { summary: 'Eine Zeile Erklärung.', members: {} },
          NuiEmptyActions: { summary: 'Eine Reihe von Buttons.', members: {} },
        },
        keyboard: [],
        notes: [
          'Das Bild ist dekorativ (<code>aria-hidden</code>): Titel und Beschreibung transportieren die Botschaft.',
          'Verwende für den Titel eine Überschrift, auf der Ebene, die zur Gliederung der Seite passt.',
          'Die eingebauten Bilder schweben nicht mehr, wenn reduzierte Bewegung bevorzugt wird.',
        ],
      },

      'number-field': {
        name: 'Zahlenfeld',
        title: 'Zahlenfeld-Komponente für Angular',
        summary: 'Eine Zahleneingabe mit Schritt-Buttons, passend formatiert für jede Locale.',
        description:
          'Barrierefreies Angular-Zahlenfeld: ein Spinbutton mit Schritt-Buttons, Tastatursteuerung, min und max sowie Locale-Formaten für Währung, Prozent und Einheiten.',
        apiDescription:
          'API-Referenz des Zahlenfelds von Needless UI: nuiNumberField, nuiNumberInput mit min, max, step und format sowie nuiNumberStep.',
        a11yDescription:
          'Tastaturbedienung und Barrierefreiheit des Zahlenfelds von Needless UI: Rolle spinbutton, Pfeil- und Bildtasten sowie Schritt-Buttons.',
        overview: [
          'Das Zahlenfeld ist ein Texteingabefeld, das eine Zahl enthält. Es zeigt die Zahl im Format der Locale an, liest eingegebenen Text im selben Format wieder ein und lässt sie beim Verlassen des Felds auf <code>step</code> einrasten, zwischen <code>min</code> und <code>max</code>.',
          'Es versteht auch native Ziffern und Trennzeichen: arabisch-indische, persische und Devanagari-Ziffern, Leerzeichen und Punkte als Tausendertrennzeichen und jede Art von Minuszeichen. Hältst du einen Schritt-Button gedrückt, wiederholt er sich immer schneller.',
        ],
        examples: {
          guests: {
            title: 'Schritt-Buttons',
            text: 'Buttons auf beiden Seiten, die bei <code>min</code> und <code>max</code> deaktiviert werden. Auch die Pfeiltasten ändern den Wert schrittweise.',
          },
          formats: {
            title: 'Währung und Prozent',
            text: 'Übergib an <code>format</code> Optionen von <code>Intl.NumberFormat</code> und dazu eine <code>locale</code>. Der Wert bleibt eine einfache Zahl.',
          },
        },
        api: {
          NuiNumberField: {
            summary: 'Gruppiert das Eingabefeld mit seinen Schritt-Buttons.',
            members: {},
          },
          NuiNumberInput: {
            summary: 'Ein Texteingabefeld, das eine Zahl enthält, als ARIA-Spinbutton.',
            members: {
              value:
                'Die Zahl oder <code>null</code>, wenn das Feld leer ist. Funktioniert auch mit Formularen.',
              min: 'Kleinster erlaubter Wert.',
              max: 'Größter erlaubter Wert.',
              step: 'Um wie viel ein Schritt den Wert ändert. Beim Verlassen des Felds rastet der Wert darauf ein.',
              format:
                "Optionen für <code>Intl.NumberFormat</code>, etwa <code>{ style: 'currency', currency: 'EUR' }</code>.",
              locale: 'Locale zum Formatieren und Einlesen von Zahlen.',
              disabled: 'Deaktiviert das Eingabefeld und seine Buttons.',
              stepBy: 'Geht eine Anzahl von Schritten nach oben (positiv) oder unten (negativ).',
            },
          },
          NuiNumberStep: {
            summary: 'Ein Schritt-Button. Gedrückt gehalten, wiederholt er sich.',
            members: {
              nuiNumberStep:
                '<code>1</code> geht einen Schritt nach oben, <code>-1</code> einen nach unten.',
              label: 'Zugänglicher Name. Standardmäßig „Increase“ oder „Decrease“.',
            },
          },
        },
        keyboard: [
          ['Pfeil nach oben und unten', 'Erhöht oder verringert den Wert um einen Schritt.'],
          ['Bild auf und Bild ab', 'Geht zehn Schritte auf einmal.'],
          ['Pos1 und Ende', 'Springt zum Minimum oder Maximum.'],
          ['Enter', 'Übernimmt die Eingabe.'],
        ],
        notes: [
          'Das Eingabefeld ist ein <code>spinbutton</code> mit <code>aria-valuenow</code>, <code>aria-valuemin</code>, <code>aria-valuemax</code> und dem formatierten Wert als <code>aria-valuetext</code>.',
          'Die Schritt-Buttons liegen außerhalb der Tab-Reihenfolge, weil die Tasten dasselbe erledigen, sind aber benannt und über <code>aria-controls</code> mit dem Eingabefeld verknüpft.',
          'Beschrifte das Eingabefeld mit <code>aria-label</code> oder einem <code>&lt;label&gt;</code>.',
        ],
      },

      otp: {
        name: 'OTP-Eingabe',
        title: 'OTP- und Bestätigungscode-Eingabe für Angular',
        summary: 'Bestätigungscodes in einzelnen Slots, auf einem einzigen echten Eingabefeld.',
        description:
          'Barrierefreie OTP-Eingabe für Angular: natives Feld unter den Slots, SMS-Autofill, WebOTP, bereinigtes Einfügen, Gruppen, Maskierung und Wackeln bei Fehlern.',
        apiDescription:
          'API-Referenz der OTP-Eingabe von Needless UI: nuiOtp mit Länge, Muster, Gruppen und Maskierung sowie nuiOtpInput mit WebOTP.',
        a11yDescription:
          'Tastaturbedienung und Barrierefreiheit der OTP-Eingabe von Needless UI: ein beschriftetes Textfeld, ein sichtbarer Fokusring und Autofill.',
        overview: [
          'Die OTP-Eingabe sieht aus wie eine Reihe von Slots, darunter liegt aber ein einziges natives <code>&lt;input&gt;</code>. SMS-Autofill (<code>autocomplete="one-time-code"</code>), Einfügen, Passwortmanager, Formulare und Screenreader sehen alle ein gewöhnliches Textfeld.',
          'Eingefügte Codes werden bereinigt, sodass „123-456“ und „123 456“ beide funktionieren, und Zeichen, die das Muster nicht erlaubt, werden abgelehnt. Unter Android füllt <code>webOtp</code> den Code aus der SMS aus, sobald sie ankommt.',
        ],
        examples: {
          verify: {
            title: 'Verifizierung',
            text: '<code>(completed)</code> wird ausgelöst, sobald der letzte Slot gefüllt ist. Setze <code>aria-invalid</code> auf das Eingabefeld, um einen Code abzulehnen: Die Slots werden rot und wackeln.',
          },
          letters: {
            title: 'Buchstaben, Gruppen und Maskierung',
            text: '<code>pattern="alphanumeric"</code> akzeptiert auch Buchstaben, <code>[groups]</code> fügt Trenner ein und <code>masked</code> zeichnet Punkte.',
          },
        },
        api: {
          NuiOtp: {
            summary: 'Zeichnet die Slots und umschließt das Eingabefeld.',
            members: {
              length: 'Anzahl der Zeichen.',
              pattern:
                '<code>digits</code> oder <code>alphanumeric</code> für Buchstaben und Ziffern.',
              groups:
                'Gruppengrößen, jeweils durch einen Trenner abgesetzt, etwa <code>[3, 3]</code>.',
              masked: 'Zeichnet Punkte statt der Zeichen.',
              completed: 'Emittiert den Code jedes Mal, wenn der letzte Slot gefüllt wird.',
            },
          },
          NuiOtpInput: {
            summary: 'Das echte Eingabefeld. Es erhält die Attribute, die ein Einmalcode braucht.',
            members: {
              webOtp:
                'Füllt den Code über die WebOTP-API aus einer eingehenden SMS aus, sofern unterstützt.',
            },
          },
        },
        keyboard: [
          ['Ziffern oder Buchstaben', 'Füllen den aktuellen Slot und springen zum nächsten.'],
          ['Rücktaste', 'Löscht das Zeichen vor dem Cursor.'],
          [
            'Pfeil nach links und rechts',
            'Springen einen Slot weiter; ein gefüllter Slot wird markiert, sodass Tippen ihn ersetzt.',
          ],
          ['Einfügen', 'Füllt die Slots aus einem kopierten Code.'],
        ],
        notes: [
          'Screenreader treffen auf ein einziges Textfeld. Beschrifte es mit <code>aria-label</code> oder einem <code>&lt;label&gt;</code>.',
          'Die Slots sind vor assistiven Technologien verborgen; der gerade bearbeitete Slot zeigt den Fokusring.',
          'Bei reduzierter Bewegung blinkt der Cursor nicht, und die Slots hüpfen und wackeln nicht.',
        ],
      },

      rating: {
        name: 'Bewertung',
        title: 'Komponente für Sternebewertungen in Angular',
        summary: 'Sterne zum Bewerten, auf echten Radiobuttons.',
        description:
          'Barrierefreie Sternebewertung für Angular auf nativen Radiobuttons: Tastatur und Formulare, Vorschau beim Hovern, Zurücksetzen und schreibgeschützte Bruchteile.',
        apiDescription:
          'API-Referenz der Bewertung von Needless UI: nuiRating mit value, max, schreibgeschütztem und zurücksetzbarem Modus sowie übersetzbaren Beschriftungen.',
        a11yDescription:
          'Tastaturbedienung und Barrierefreiheit der Bewertung von Needless UI: benannte Radiogruppe, beschriftete Sterne und das schreibgeschützte Bild.',
        overview: [
          'Die Bewertung ist eine Gruppe nativer Radiobuttons, die als Sterne gezeichnet werden. Pfeiltasten, Formulare und Screenreader funktionieren wie bei jeder Radiogruppe; CSS füllt die Sterne und zeigt unter dem Mauszeiger eine Vorschau der neuen Bewertung.',
          'Schreibgeschützt zeigt sie beliebige Bruchteile an, etwa einen Durchschnitt von 4,3.',
        ],
        examples: {
          pick: {
            title: 'Etwas bewerten',
            text: 'Binde <code>[(value)]</code> oder ein Formular. Mit <code>clearable</code> setzt die erneute Wahl desselben Sterns die Bewertung zurück.',
          },
          average: {
            title: 'Einen Durchschnitt anzeigen',
            text: '<code>readonly</code> füllt die Sterne bis zu einem beliebigen Bruchteil und gibt dem Bild den Namen „Rated 4.3 out of 5“.',
          },
        },
        api: {
          NuiRating: {
            summary:
              'Eine Radiogruppe aus Sternen oder ein schreibgeschütztes Bild einer Bewertung.',
            members: {
              value: 'Die Bewertung oder <code>null</code>. Funktioniert auch mit Formularen.',
              max: 'Anzahl der Sterne.',
              readonly:
                'Zeigt den Wert auf beliebige Bruchteile genau an, statt nach einem zu fragen.',
              disabled: 'Deaktiviert alle Sterne.',
              clearable: 'Die erneute Wahl des aktuellen Sterns setzt die Bewertung zurück.',
              name: 'Gemeinsamer Name der Radiobuttons. Wird standardmäßig generiert.',
              starLabel: 'Zugänglicher Name jedes Sterns, als Funktion seines Werts.',
              readonlyLabel: 'Zugänglicher Name im schreibgeschützten Modus.',
            },
          },
        },
        keyboard: [
          ['Tab', 'Springt in die Gruppe, zum ausgewählten Stern.'],
          ['Pfeiltasten', 'Ändern die Bewertung.'],
          ['Leertaste', 'Wählt den fokussierten Stern aus.'],
        ],
        notes: [
          'Jeder Stern ist ein nativer Radiobutton mit dem Namen „3 stars“. Benenne die Gruppe mit <code>aria-label</code>.',
          'Schreibgeschützt ist die Bewertung ein Bild (<code>role="img"</code>) mit dem Namen „Rated 4.3 out of 5“.',
          'Die Sterne werden mit CSS-Masken gezeichnet und folgen daher dem Forced-Colors-Modus.',
        ],
      },

      skeleton: {
        name: 'Skeleton',
        title: 'Skeleton-Loader-Komponente für Angular',
        summary: 'Platzhalter, die das Layout halten, während Inhalte laden.',
        description:
          'Skeleton-Loader für Angular als Text, Kreis und Block, mit einem Schimmer, der über die ganze Seite zieht, und ohne Schimmer bei reduzierter Bewegung.',
        apiDescription:
          'API-Referenz des Skeletons von Needless UI: die Direktive nuiSkeleton und ihre Formen text, circle und block.',
        a11yDescription:
          'Barrierefreiheit des Skeletons von Needless UI: verborgene Platzhalter, Bereiche mit aria-busy, reduzierte Bewegung und Forced Colors.',
        overview: [
          'Skeletons halten die Form von Inhalten, die noch laden, damit die Seite nicht springt, wenn sie ankommen. Ihre Größe legst du mit CSS fest.',
          'Der Schimmer ist am Viewport fixiert: Ein einziges Glanzlicht zieht gleichzeitig über jedes Skeleton auf der Seite, egal wie groß es ist und wo es liegt.',
        ],
        examples: {
          card: {
            title: 'Eine Karte laden',
            text: 'Zeilen, ein Kreis und ein Block als Platzhalter für ein Profil. Die Karte ist <code>aria-busy</code>, solange sie lädt.',
          },
        },
        api: {
          NuiSkeleton: {
            summary: 'Ein Platzhalter, verborgen vor assistiven Technologien.',
            members: {
              shape: '<code>text</code> (eine Zeile), <code>circle</code> oder <code>block</code>.',
            },
          },
        },
        keyboard: [],
        notes: [
          'Skeletons sind vor Screenreadern verborgen. Setze <code>aria-busy="true"</code> auf den Bereich, der lädt, und entferne es, sobald der Inhalt da ist.',
          'Wird reduzierte Bewegung bevorzugt, gibt es keinen Schimmer.',
          'Im Forced-Colors-Modus erhält jedes Skeleton eine Kontur.',
        ],
      },

      toast: {
        name: 'Toast',
        title: 'Toast-Benachrichtigungen für Angular',
        summary:
          'Kurze Meldungen, die sich stapeln, sich wegwischen lassen und nie den Fokus stehlen.',
        description:
          'Barrierefreie Toasts für Angular: ein Stapel im Top Layer, Promise-Toasts, Rückgängig-Aktionen, Wischen zum Schließen und bei Hover und Fokus pausierende Timer.',
        apiDescription:
          'API-Referenz der Toasts von Needless UI: der Service NuiToaster, seine Optionen und Promise-Toasts sowie die Region nui-toaster.',
        a11yDescription:
          'Tastaturbedienung und Barrierefreiheit der Toasts von Needless UI: Ansagen, der Hotkey Alt + T, Esc und pausierende Timer.',
        overview: [
          'Toasts bestätigen, was gerade passiert ist, oder bieten eine Aktion wie „Rückgängig“ an, ohne zu unterbrechen. Platziere ein <code>&lt;nui-toaster&gt;</code> in der App-Shell und rufe dann <code>NuiToaster</code> von überall auf.',
          'Sie stapeln sich hinter dem neuesten und fächern sich bei Hover oder Fokus auf, alles mit der eingestellten Feder. Ein seitliches Wischen wirft einen Toast weg. Die Timer pausieren, solange der Mauszeiger auf dem Stapel liegt oder er den Fokus hat, und solange die Seite im Hintergrund ist.',
        ],
        examples: {
          tones: {
            title: 'Farbtöne',
            text: '<code>show()</code>, <code>success()</code>, <code>warning()</code> und <code>danger()</code>. Danger-Toasts bleiben länger und werden mit Vorrang angesagt.',
          },
          actions: {
            title: 'Aktionen und Promises',
            text: 'Eine <code>action</code> fügt einen Button wie „Rückgängig“ hinzu. <code>promise()</code> zeigt einen Spinner und verwandelt sich dann in das Ergebnis.',
          },
        },
        api: {
          NuiToaster: {
            summary: 'Der Service, der Toasts anzeigt. Du kannst ihn überall injizieren.',
            members: {
              toasts: 'Alle Toasts auf dem Bildschirm, die neuesten zuerst.',
              show: 'Zeigt einen Toast. Übergib einen Titel oder Optionen mit Beschreibung, Farbton, Dauer, Aktion oder ID.',
              success: 'Zeigt einen Erfolgs-Toast.',
              warning: 'Zeigt einen Warn-Toast.',
              danger:
                'Zeigt einen Danger-Toast. Er bleibt 8 Sekunden und wird mit Vorrang angesagt.',
              promise:
                'Zeigt einen Lade-Toast, bis das Promise abgeschlossen ist, und dann die passende Meldung für Erfolg oder Fehler.',
              dismiss: 'Schließt einen Toast oder alle.',
            },
          },
          NuiToasterRegion: {
            summary:
              'Die Region, in der Toasts erscheinen. Platziere sie einmal, in der App-Shell.',
            members: {
              position: 'Ecke oder Rand des Viewports. Start und Ende folgen der Textrichtung.',
              expanded: 'Hält den Stapel aufgefächert.',
              label: 'Zugänglicher Name der Region. Sag darin, wie man sie erreicht.',
              closeLabel: 'Zugänglicher Name der Schließen-Buttons.',
              hotkey:
                'Die Taste als <code>KeyboardEvent.code</code>, die zusammen mit Alt den Fokus auf den neuesten Toast setzt.',
            },
          },
        },
        keyboard: [
          ['Alt + T', 'Setzt den Fokus auf den neuesten Toast.'],
          ['Tab', 'Wechselt zwischen den Toasts, ihren Aktionen und Schließen-Buttons.'],
          ['Esc', 'Schließt den fokussierten Toast.'],
        ],
        notes: [
          'Jeder Toast wird angesagt, sobald er erscheint: höflich oder, bei danger, mit Vorrang. Toasts nehmen nie den Fokus.',
          'Die Timer pausieren, solange der Mauszeiger auf dem Stapel liegt oder er den Fokus hat und solange die Seite verborgen ist, und Toasts, die auf ein Promise warten, laufen nie ab.',
          'Alles, worauf reagiert werden muss, sollte auch außerhalb des Toasts verfügbar sein.',
          'Bei reduzierter Bewegung sind Toasts nicht animiert und lassen sich nicht wegwischen, und die Timer-Linie ist ausgeblendet.',
        ],
      },
      combobox: {
        name: 'Combobox',
        title: 'Combobox und Autovervollständigung für Angular',
        summary: 'Ein Textfeld, das beim Tippen Optionen vorschlägt.',
        description:
          'Barrierefreie Angular-Combobox: Fuzzy-Suche mit Hervorhebung, mehrere Werte als Chips, neue Werte aus eingegebenem Text und Ergebnisse vom Server.',
        apiDescription:
          'API-Referenz der Combobox von Needless UI: nui-combobox mit value, values, multiple, create, filtering, loading und clearable sowie eigenen Zeilen.',
        a11yDescription:
          'Tastatur und Barrierefreiheit der Combobox von Needless UI: editierbar, mit Listen-Autovervollständigung, aria-activedescendant, Chips und IME.',
        overview: [
          'Die Combobox ist ein Textfeld mit einer Liste von Vorschlägen. Die Fuzzy-Suche ignoriert Akzente: Die besten Treffer stehen oben, und die gefundenen Buchstaben werden markiert. Sie akzeptiert dieselben <a href="/components/select/api#NuiOption"><code>NuiOption</code></a>-Objekte wie das Select.',
          'Mit <code>multiple</code> werden gewählte Optionen zu Chips vor dem Text, und <code>create</code> macht aus eingegebenem Text einen neuen Wert. Für Ergebnisse vom Server schaltest du <code>filtering</code> aus, suchst bei <code>(queryChange)</code> und setzt <code>loading</code>, während du wartest.',
        ],
        examples: {
          country: {
            title: 'Suche',
            text: 'Gefundene Buchstaben müssen nicht nebeneinanderstehen, und auch <code>keywords</code> zählen. <code>clearable</code> fügt einen Button zum Leeren hinzu, und Esc leert dann den Wert.',
          },
          tags: {
            title: 'Chips und neue Werte',
            text: '<code>multiple</code> zeigt Chips und bindet <code>[(values)]</code>. Ist der Text noch keine Option, bietet <code>create</code> an, ihn hinzuzufügen.',
          },
          people: {
            title: 'Ergebnisse vom Server',
            text: 'Die Liste zeigt ungefiltert, was der Server geschickt hat, und eine Ladezeile, solange sie wartet. Gewählte Beschriftungen bleiben erhalten, wenn neue Ergebnisse kommen.',
          },
        },
        api: {
          NuiCombobox: {
            summary: 'Ein Textfeld, das beim Tippen Optionen vorschlägt.',
            members: {
              options:
                'Die Optionen als <a href="/components/select/api#NuiOption"><code>NuiOption</code></a>-Objekte.',
              value: 'Der gewählte Wert oder <code>null</code>. Funktioniert auch mit Formularen.',
              values: 'Die gewählten Werte, mit <code>multiple</code>.',
              multiple: 'Erlaubt die Wahl mehrerer Optionen, angezeigt als Chips.',
              create:
                'Macht aus eingegebenem Text einen Wert. Die Liste bietet dann an, Text hinzuzufügen, der keine Option ist.',
              filtering:
                'Filtert die Optionen beim Tippen. Schalte es aus, wenn ein Server sie filtert.',
              loading: 'Zeigt eine Ladezeile, solange Ergebnisse unterwegs sind.',
              clearable: 'Ergänzt einen Button, der den Wert leert, und lässt Esc ihn leeren.',
              placeholder: 'Text, der angezeigt wird, solange das Feld leer ist.',
              label: 'Zugänglicher Name, wenn kein <code>&lt;label&gt;</code> das Feld benennt.',
              inputId: 'ID des Textfelds, für <code>&lt;label for&gt;</code>.',
              disabled: 'Deaktiviert das Feld.',
              compareWith:
                'Prüft, ob zwei Werte dieselbe Option sind, für Werte, die Objekte sind.',
              displayWith:
                'Text für einen Wert, der nicht unter den Optionen ist, etwa einen, der vor dem Laden gesetzt wurde.',
              virtual:
                'Rendert nur die sichtbaren Zeilen: immer, nie oder <code>auto</code> bei mehr als 200 Zeilen.',
              queryChange: 'Emittiert den Text während der Eingabe, für eine Suche auf dem Server.',
              openChange: 'Emittiert, wenn sich die Liste öffnet oder schließt.',
              show: 'Öffnet die Liste.',
              hide: 'Schließt die Liste.',
              clear: 'Leert den Wert und den Text.',
              focus: 'Fokussiert das Textfeld.',
            },
          },
          NuiOptionTemplate: {
            summary:
              'Setze es auf ein <code>ng-template</code> in der Komponente, um jede Zeile selbst zu zeichnen. Der Kontext enthält die Option und ihre Zeile.',
            members: {},
          },
          NuiOptionText: {
            summary:
              'Zeichnet die Beschriftung einer Option mit markierten Treffern, ihre Beschreibung und ihren Pfad, für eigene Zeilen.',
            members: { nuiOptionText: 'Die Zeile, aus dem Template-Kontext.' },
          },
        },
        keyboard: [
          [
            'Pfeil nach unten und oben',
            'Öffnet die Liste und bewegt sich dann durch die Optionen.',
          ],
          ['Bild ab und Bild auf', 'Springt zehn Optionen weiter.'],
          ['Enter', 'Wählt die aktive Option.'],
          ['Alt + Pfeil nach unten oder oben', 'Öffnet oder schließt die Liste.'],
          ['Esc', 'Schließt die Liste; leert danach den Text oder, falls erlaubt, den Wert.'],
          ['Rücktaste', 'Entfernt in einem leeren Feld den letzten Chip.'],
          [
            'Pfeil nach links',
            'Springt vom Textanfang (Pfeil nach rechts bei Text von rechts nach links) in die Chips. Dort entfernen Rücktaste oder Entf einen Chip.',
          ],
        ],
        notes: [
          'Das Textfeld ist eine <code>combobox</code> mit <code>aria-autocomplete="list"</code>, <code>aria-expanded</code> und <code>aria-controls</code>. Der Fokus bleibt darin, und <code>aria-activedescendant</code> zeigt auf die aktive Option.',
          'Die Chips sind eine benannte Liste, und jeder Entfernen-Button ist nach seinem Chip benannt, etwa „Remove Italy“.',
          '„No matches“ und die Ladezeile sind Statusmeldungen, daher sagen Screenreader sie an.',
          'Tasten, die eine IME-Eingabe bestätigen, etwa bei Chinesisch oder Japanisch, überlässt die Combobox der Eingabemethode.',
        ],
      },
      command: {
        name: 'Befehlspalette',
        title: 'Befehlspaletten-Komponente für Angular',
        summary: 'Jeder Befehl deiner App, nur einen Tastendruck entfernt.',
        description:
          'Barrierefreie Befehlspalette für Angular: ⌘K von überall, Fuzzy-Suche bis in verschachtelte Seiten, Gruppen und Tastenkürzel passend zur Plattform.',
        apiDescription:
          'API-Referenz der Befehlspalette von Needless UI: nui-command-palette mit commands, hotkey, bindShortcuts und loop sowie die Struktur von NuiCommand.',
        a11yDescription:
          'Tastaturbedienung und Barrierefreiheit der Befehlspalette von Needless UI: modaler Dialog mit Such-Combobox, aria-activedescendant und Seitennavigation.',
        overview: [
          'Die Befehlspalette ist ein Suchfeld für die Befehle deiner App, in einem modalen Dialog. ⌘K öffnet sie von überall (Ctrl+K unter Windows und Linux). Wählst du einen Befehl, schließt sich die Palette und führt ihn dann aus.',
          'Befehle können eine Gruppe, eine Beschreibung, Schlüsselwörter und ein Tastenkürzel haben, das mit den Symbolen der Plattform erscheint. Ein Befehl mit <code>children</code> öffnet eine Seite weiterer Befehle, und die Suche auf oberster Ebene reicht bis in die Seiten.',
        ],
        examples: {
          palette: {
            title: 'Befehle und Seiten',
            text: 'Gruppen, Tastenkürzel, ein deaktivierter Befehl und zwei Seiten. <code>(run)</code> meldet, was ausgeführt wurde; auch das eigene <code>run</code> eines Befehls funktioniert.',
          },
          people: {
            title: 'Eigene Zeilen',
            text: 'Ein <code>nuiOptionTemplate</code> zeichnet jede Zeile, und <code>nuiOptionText</code> behält die markierten Treffer. <code>[hotkey]="null"</code> überlässt ⌘K der Palette oben.',
          },
        },
        api: {
          NuiCommandPalette: {
            summary: 'Ein modaler Dialog mit einem Suchfeld für deine Befehle.',
            members: {
              commands: 'Die Befehle als <code>NuiCommand</code>-Objekte.',
              open: 'Ob die Palette geöffnet ist.',
              hotkey:
                'Das Tastenkürzel, das sie von überall öffnet und schließt, oder <code>null</code> für keines. <code>mod</code> ist ⌘ auf Apple-Geräten und sonst Ctrl.',
              bindShortcuts:
                'Führt Befehle auch über ihre eigenen Tastenkürzel aus, überall auf der Seite.',
              loop: 'Pfeil nach unten auf dem letzten Befehl springt zum ersten, Pfeil nach oben auf dem ersten zum letzten.',
              filtering:
                'Filtert beim Tippen. Schalte es aus, wenn ein Server die Befehle filtert.',
              loading: 'Zeigt eine Ladezeile, solange Ergebnisse unterwegs sind.',
              hints: 'Zeigt unten die Tasten, die du verwenden kannst.',
              virtual:
                'Rendert nur die sichtbaren Zeilen: immer, nie oder <code>auto</code> bei mehr als 200 Zeilen.',
              label: 'Zugänglicher Name des Dialogs und seines Suchfelds.',
              placeholder: 'Text im leeren Suchfeld.',
              run: 'Emittiert jeden ausgeführten Befehl.',
              queryChange: 'Emittiert den Text während der Eingabe, für eine Suche auf dem Server.',
              show: 'Öffnet die Palette.',
              hide: 'Schließt die Palette.',
              toggle: 'Öffnet die Palette oder schließt sie.',
              back: 'Geht zur vorherigen Seite zurück.',
            },
          },
          NuiCommand: {
            summary: 'Ein Befehl oder eine Seite voller Befehle.',
            members: {
              label: 'Der angezeigte und durchsuchte Text.',
              description: 'Zusätzlicher Text unter der Beschriftung.',
              group: 'Befehle mit derselben Gruppe stehen unter dieser Überschrift.',
              keywords: 'Weitere Wörter, die die Suche findet, etwa Synonyme.',
              shortcut: 'Tasten, die daneben angezeigt werden, etwa <code>mod+shift+p</code>.',
              disabled: 'Wird angezeigt, lässt sich aber nicht ausführen.',
              children:
                'Befehle eine Ebene tiefer: Wählst du diesen Befehl, öffnen sie sich als Seite.',
              run: 'Wird beim Auswählen ausgeführt, sobald die Palette geschlossen ist.',
              id: 'Für deine eigenen Zwecke, etwa um Befehle in <code>(run)</code> zu unterscheiden.',
            },
          },
        },
        keyboard: [
          ['⌘K oder Ctrl+K', 'Öffnet oder schließt die Palette.'],
          ['Pfeil nach unten und oben', 'Bewegt sich reihum durch die Befehle.'],
          ['Bild ab und Bild auf', 'Springt zehn Befehle weiter.'],
          ['Enter', 'Führt den aktiven Befehl aus oder öffnet seine Seite.'],
          ['Esc', 'Geht eine Seite zurück; auf der obersten Ebene wird die Palette geschlossen.'],
          ['Rücktaste', 'Geht in einem leeren Feld auf einer Seite zurück.'],
        ],
        notes: [
          'Sie ist ein natives modales <code>&lt;dialog&gt;</code>: Die Seite dahinter ist inert, der Fokus bleibt darin, und beim Schließen kehrt der Fokus dorthin zurück, wo er war.',
          'Das Suchfeld ist eine <code>combobox</code>, die mit <code>aria-activedescendant</code> auf den aktiven Befehl zeigt. Auf einer Seite trägt es den Namen der Seite.',
          'Tastenkürzel stehen als Text in jeder Option, sodass Screenreader sie vorlesen. Die Tastenhinweise unten sind vor assistiven Technologien verborgen.',
          'Tastenkürzel ohne Ctrl, Alt oder ⌘ werden nicht ausgeführt, während du in ein Feld tippst.',
        ],
      },
      popover: {
        name: 'Popover',
        title: 'Popover- und Hovercard-Komponenten für Angular',
        summary: 'Schwebende Panels neben einem Button und reichhaltige Tooltips beim Hovern.',
        description:
          'Barrierefreie Popover und Hovercards für Angular mit nativer Popover-API: umklappende, mitwandernde Platzierung, Pfeile, Light Dismiss und Hover-Verzögerung.',
        apiDescription:
          'API-Referenz des Popovers von Needless UI: nuiPopover und nuiHovercard mit side, align, offset und arrow sowie ihre Trigger-Direktiven.',
        a11yDescription:
          'Tastaturbedienung und Barrierefreiheit des Popovers und der Hovercard von Needless UI: Rollen dialog und tooltip, Fokusrückgabe, Esc und WCAG 1.4.13.',
        overview: [
          'Ein Popover ist ein kleines Panel, das sich neben einem Button öffnet, für interaktive Inhalte: Filter, ein kurzes Formular, eine Farbauswahl. Es ist ein natives <code>popover="auto"</code>, daher schließt der Browser es bei Esc oder einem Klick außerhalb, gibt den Fokus zurück und setzt es in der Tab-Reihenfolge direkt hinter seinen Trigger.',
          'Eine Hovercard ist ein reichhaltiger Tooltip. Sie öffnet sich nach kurzem Hovern oder sofort bei Tastaturfokus und beschreibt ihren Trigger. Sie bleibt offen, während der Mauszeiger auf sie wechselt, damit man ihren Text lesen und markieren kann.',
          'Beide klappen auf die andere Seite um, wenn der Platz fehlt, bleiben auf dem Bildschirm und folgen ihrem Trigger, wenn die Seite scrollt.',
        ],
        examples: {
          filters: {
            title: 'Filter',
            text: 'Ein Popover mit einem Formular darin. <code>arrow</code> lässt es auf seinen Trigger zeigen, und <code>hide()</code> schließt es per Code.',
          },
          profile: {
            title: 'Hovercard',
            text: 'Fahre mit der Maus über einen Namen oder erreiche ihn mit Tab. Die Karte beschreibt den Link, daher lesen Screenreader sie nach dem Namen vor.',
          },
          sides: {
            title: 'Seiten und Eingangsanimationen',
            text: '<code>side</code> und <code>align</code> legen fest, wo es sich öffnet; <code>start</code> und <code>end</code> folgen der Schreibrichtung. <code>enter</code> und <code>motion</code> legen fest, wie es erscheint.',
          },
        },
        api: {
          NuiPopover: {
            summary: 'Ein natives Popover, platziert neben dem Element, das es geöffnet hat.',
            members: {
              side: 'Die Seite des Triggers, an der es sich öffnet. Fehlt der Platz, klappt es um.',
              align: 'Wie es entlang dieser Seite am Trigger ausgerichtet ist.',
              offset: 'Abstand zwischen Trigger und Panel, in Pixeln.',
              arrow: 'Blendet einen Pfeil ein, der auf den Trigger zeigt.',
              openChange: 'Emittiert, wenn es sich öffnet oder schließt.',
              show: 'Öffnet es neben einem beliebigen Element.',
              hide: 'Schließt es.',
            },
          },
          NuiPopoverTrigger: {
            summary:
              'Ein Button, der ein Popover öffnet und schließt, mit dem nativen <code>popovertarget</code>.',
            members: { nuiPopoverTrigger: 'Das zu öffnende Popover.' },
          },
          NuiHovercard: {
            summary: 'Ein reichhaltiger Tooltip, der seinen Trigger beschreibt.',
            members: {
              side: 'Die Seite des Triggers, an der sie sich öffnet. Fehlt der Platz, klappt sie um.',
              align: 'Wie sie entlang dieser Seite am Trigger ausgerichtet ist.',
              offset: 'Abstand zwischen Trigger und Karte, in Pixeln.',
              arrow: 'Blendet einen Pfeil ein, der auf den Trigger zeigt.',
              openDelay:
                'Millisekunden Hovern, bevor sie sich öffnet. Tastaturfokus öffnet sie sofort.',
              closeDelay:
                'Millisekunden bis zum Schließen, nachdem der Mauszeiger sie verlassen hat.',
              openChange: 'Emittiert, wenn sie sich öffnet oder schließt.',
              show: 'Öffnet sie neben einem beliebigen Element.',
              hide: 'Schließt sie.',
            },
          },
          NuiHovercardTrigger: {
            summary:
              'Zeigt eine Hovercard beim Hovern und bei Tastaturfokus an und macht sie zur Beschreibung dieses Elements.',
            members: { nuiHovercardTrigger: 'Die anzuzeigende Hovercard.' },
          },
        },
        keyboard: [
          ['Enter oder Leertaste auf dem Trigger', 'Öffnet oder schließt das Popover.'],
          ['Tab', 'Springt in ein geöffnetes Popover, das direkt auf seinen Trigger folgt.'],
          [
            'Esc',
            'Schließt das Popover und setzt den Fokus zurück auf seinen Trigger, oder blendet die Hovercard aus.',
          ],
        ],
        notes: [
          'Das Popover ist ein nicht modaler <code>dialog</code>: Benenne es mit <code>aria-label</code> oder <code>aria-labelledby</code>. Sein Trigger erhält <code>aria-haspopup</code> und das <code>aria-expanded</code> des Browsers.',
          'Die Hovercard ist ein <code>tooltip</code> und das <code>aria-describedby</code> ihres Triggers, daher wird ihr Text mit dem Trigger vorgelesen. Lass Bedienelemente draußen; dafür gibt es das Popover.',
          'Die Hovercard erfüllt WCAG 1.4.13: Esc blendet sie aus, ohne den Fokus zu verschieben, der Mauszeiger kann auf sie wechseln, und sie bleibt sichtbar, solange der Mauszeiger darauf liegt oder sie den Fokus hat.',
        ],
      },
      select: {
        name: 'Select',
        title: 'Select-Komponente für Angular',
        summary: 'Wähle eine oder mehrere Optionen, aus einer kurzen oder riesigen Liste.',
        description:
          'Barrierefreies Angular-Select: Einfach- oder Mehrfachauswahl, Gruppen, Bäume, Typeahead, Alle auswählen und virtuelles Scrollen für beliebig lange Listen.',
        apiDescription:
          'API-Referenz des Selects von Needless UI: nui-select mit value, values, multiple, selectAll und virtual, die Struktur von NuiOption und eigene Zeilen.',
        a11yDescription:
          'Tastatur und Barrierefreiheit des Selects von Needless UI: Combobox ohne Texteingabe, Listbox oder Baum, aria-activedescendant, Typeahead und Baumnavigation.',
        overview: [
          'Das Select ist ein Button, der eine Liste von Optionen öffnet. Übergib <code>options</code>, ein Array aus <code>NuiOption</code>, und binde <code>[(value)]</code> oder, mit <code>multiple</code>, <code>[(values)]</code>. Es funktioniert auch mit Signal Forms, Reactive Forms und <code>ngModel</code>.',
          'Optionen können eine <code>group</code>, eine <code>description</code> und <code>keywords</code> haben, und <code>children</code> macht die Liste zu einem Baum. Bei mehr als 200 Zeilen werden nur die sichtbaren gerendert, sodass sich 100.000 Optionen so schnell öffnen wie zehn.',
          'Wenn du stattdessen tippen und filtern willst, nimm die <a href="/components/combobox">Combobox</a>.',
        ],
        examples: {
          countries: {
            title: 'Gruppen',
            text: 'Optionen mit einer <code>group</code> stehen unter deren Überschrift. Ein getippter Buchstabe springt zur nächsten Option, die damit beginnt.',
          },
          toppings: {
            title: 'Mehrere auf einmal',
            text: '<code>multiple</code> hält die Liste offen und bindet <code>[(values)]</code>. <code>selectAll</code> ergänzt einen Button, der alle Optionen auswählt oder abwählt. Deaktivierte Optionen lassen sich nicht wählen.',
          },
          folders: {
            title: 'Baum',
            text: 'Optionen mit <code>children</code> bilden einen Baum. Die Liste öffnet sich mit aufgeklappten Ordnern bis zur gewählten Option.',
          },
          zones: {
            title: 'Lange Listen',
            text: 'Alle Zeitzonen, nach Region. Bei mehr als 200 Zeilen werden nur die sichtbaren gerendert, und die aktive Option bleibt für Screenreader gerendert.',
          },
        },
        api: {
          NuiSelect: {
            summary: 'Ein Button, der eine Liste von Optionen öffnet.',
            members: {
              options: 'Die Optionen als <code>NuiOption</code>-Objekte.',
              value: 'Der gewählte Wert oder <code>null</code>. Funktioniert auch mit Formularen.',
              values: 'Die gewählten Werte, mit <code>multiple</code>.',
              multiple:
                'Erlaubt die Wahl mehrerer Optionen. Die Liste bleibt beim Auswählen offen.',
              selectAll:
                'Ergänzt mit <code>multiple</code> einen Button, der alle Optionen auswählt oder abwählt.',
              placeholder: 'Text, der angezeigt wird, solange nichts gewählt ist.',
              label: 'Zugänglicher Name, wenn kein <code>&lt;label&gt;</code> den Button benennt.',
              triggerId: 'ID des Buttons, für <code>&lt;label for&gt;</code>.',
              disabled: 'Deaktiviert das Select.',
              compareWith:
                'Prüft, ob zwei Werte dieselbe Option sind, für Werte, die Objekte sind.',
              virtual:
                'Rendert nur die sichtbaren Zeilen: immer, nie oder <code>auto</code> bei mehr als 200 Zeilen.',
              openChange: 'Emittiert, wenn sich die Liste öffnet oder schließt.',
              show: 'Öffnet die Liste.',
              hide: 'Schließt die Liste.',
              focus: 'Fokussiert den Button.',
            },
          },
          NuiOption: {
            summary: 'Eine Option. Select, Combobox und Befehlspalette nehmen sie alle entgegen.',
            members: {
              value: 'Der Wert, den die Auswahl setzt. Beliebiger Typ.',
              label: 'Der angezeigte und durchsuchte Text.',
              description: 'Zusätzlicher Text unter der Beschriftung.',
              group:
                'Optionen mit derselben Gruppe stehen der Reihe nach unter dieser Überschrift.',
              keywords: 'Weitere Wörter, die die Suche findet, etwa Synonyme oder Codes.',
              disabled: 'Wird angezeigt, kann aber nicht gewählt werden.',
              children: 'Optionen eine Ebene tiefer, die die Liste zu einem Baum machen.',
            },
          },
          NuiOptionTemplate: {
            summary:
              'Setze es auf ein <code>ng-template</code> in der Komponente, um jede Zeile selbst zu zeichnen. Der Kontext enthält die Option und ihre Zeile.',
            members: {},
          },
          NuiOptionText: {
            summary:
              'Zeichnet die Beschriftung einer Option mit markierten Treffern, ihre Beschreibung und ihren Pfad, für eigene Zeilen.',
            members: { nuiOptionText: 'Die Zeile, aus dem Template-Kontext.' },
          },
        },
        keyboard: [
          [
            'Pfeil nach unten und oben',
            'Öffnet die Liste und bewegt sich dann durch die Optionen.',
          ],
          ['Pos1 und Ende', 'Springt zur ersten oder letzten Option.'],
          ['Bild ab und Bild auf', 'Springt zehn Optionen weiter.'],
          ['Enter oder Leertaste', 'Öffnet die Liste oder wählt die aktive Option.'],
          ['Buchstaben', 'Springt zur nächsten Option, die mit ihnen beginnt.'],
          [
            'Pfeil nach rechts und links',
            'Klappt im Baum eine Option auf oder springt zu ihrem ersten Kind; klappt sie zu oder springt zum Elternelement. Bei Text von rechts nach links sind die Pfeile vertauscht.',
          ],
          ['Alt + Pfeil nach oben', 'Wählt die aktive Option und schließt die Liste.'],
          ['Tab', 'Wählt bei Einfachauswahl die aktive Option und springt weiter.'],
          ['Esc', 'Schließt die Liste, ohne zu wählen.'],
        ],
        notes: [
          'Der Button ist eine <code>combobox</code> ohne Texteingabe, mit <code>aria-expanded</code> und <code>aria-controls</code>. Der Fokus bleibt auf ihm, und <code>aria-activedescendant</code> zeigt auf die aktive Option.',
          'Die Liste ist eine <code>listbox</code> oder ein <code>tree</code> mit <code>aria-level</code> und <code>aria-expanded</code>. <code>aria-setsize</code> und <code>aria-posinset</code> bleiben korrekt, auch wenn nur einige Zeilen gerendert sind.',
          'Die aktive Option hat eine volle Füllung und im Forced-Colors-Modus eine Kontur.',
          'Benenne das Select mit einem <code>&lt;label for&gt;</code>, das auf <code>triggerId</code> zeigt, oder mit <code>label</code>.',
        ],
      },
      grid: {
        name: 'Data Grid',
        title: 'Data-Grid-Komponente für Angular',
        summary:
          'Beliebig viele Zeilen sortieren, filtern, auswählen, bearbeiten und durchscrollen.',
        description:
          'Barrierefreies Angular-Data-Grid auf nativer Tabelle: Mehrfachsortierung, Filter, Seiten oder virtuelles Scrollen, Auswahl, Bearbeitung, verschiebbare Spalten.',
        apiDescription:
          'API-Referenz des Data Grids von Needless UI: Inputs und Models von nui-grid, die Definition von NuiGridColumn und Templates für eigene Zellen.',
        a11yDescription:
          'Tastaturbedienung und Barrierefreiheit des Data Grids von Needless UI: native Tabelle mit Grid-Rollen, ein Tab-Stopp, Pfeiltasten und Ansagen.',
        overview: [
          'Das Data Grid ist eine native Tabelle mit Sortierung, Filtern, Paginierung und Bearbeitung. Beschreibe die <code>columns</code>, übergib die <code>rows</code>, und jede Zelle wird nach ihrem Typ passend zur Locale formatiert: Zahlen, Währungen, Datumsangaben, Ja und Nein sowie Beschriftungen für <code>enum</code>-Werte.',
          'Sein Zustand steckt in Models, die du binden, speichern und an einen Server schicken kannst: <code>sort</code>, <code>filters</code>, <code>search</code>, <code>page</code>, <code>selected</code> und <code>columnState</code> für Breiten, Reihenfolge, Fixierung und ausgeblendete Spalten, wie Nutzer sie festlegen. Ohne Paginierung werden nur die sichtbaren Zeilen gerendert, sodass 100.000 Zeilen so flüssig scrollen wie zehn.',
          'Jede Zelle ist per Tastatur erreichbar, und im Panel jeder Spalte lässt sie sich sortieren, filtern, fixieren, verschieben, an den Inhalt anpassen und ausblenden.',
        ],
        examples: {
          orders: {
            title: 'Suche, Sortierung und Paginierung',
            text: 'Tippe, um alle Spalten zu durchsuchen. Klicke auf einen Spaltenkopf, um zu sortieren, und mit Umschalt + Klick fügst du eine zweite Spalte hinzu. <code>nuiGridCell</code> zeichnet den Status, und <code>exportCsv()</code> liefert, was angezeigt wird.',
          },
          selection: {
            title: 'Auswahl',
            text: '<code>selection="multiple"</code> ergänzt Checkboxen und bindet die Schlüssel der ausgewählten Zeilen. Umschalt + Klick wählt einen Bereich aus; die Checkbox im Tabellenkopf wählt alle passenden Zeilen aus.',
          },
          editing: {
            title: 'Bearbeitung',
            text: 'Doppelklicke auf eine Zelle, drücke Enter oder tippe einfach los. <code>validate</code> hält den Editor mit einer Meldung offen; eine übernommene Änderung aktualisiert <code>rows</code> und emittiert <code>cellEdit</code>.',
          },
          big: {
            title: '100.000 Zeilen',
            text: 'Ohne Paginierung werden nur die sichtbaren Zeilen gerendert. Fixierte Spalten bleiben am Rand, und <code>columnState</code> behält das Layout, das Nutzer einrichten.',
          },
          server: {
            title: 'Serverdaten',
            text: 'Im Modus <code>server</code> zeigt das Grid die Zeilen, wie sie ankommen, und meldet jede Änderung über <code>queryChange</code>. Setze <code>loading</code>, während du Daten abrufst.',
          },
        },
        api: {
          NuiGrid: {
            summary: 'Ein Data Grid auf einer nativen Tabelle.',
            members: {
              rows: 'Die Daten. Änderungen ersetzen Zeilen, also binde mit <code>[(rows)]</code>.',
              columns: 'Die Spalten als <code>NuiGridColumn</code>-Objekte.',
              rowId: 'Der Schlüssel einer Zeile, für Auswahl und Tracking.',
              label: 'Zugänglicher Name des Grids.',
              selection: 'Ob sich Zeilen auswählen lassen, und wie viele.',
              selected: 'Die Schlüssel der ausgewählten Zeilen.',
              sort: 'Die Sortierung als <code>{ column, direction }</code>-Objekte; das erste sortiert zuerst.',
              filters: 'Ein Filter pro Spalten-ID: ein Operator und ein Wert.',
              search: 'Wörter, die alle in einer Zeile vorkommen müssen.',
              pageSize: 'Zeilen pro Seite oder 0 für eine durchgehende Liste.',
              page: 'Die angezeigte Seite, ab 0.',
              pageSizes: 'Die Optionen der Seitennavigation.',
              virtual:
                'Rendert nur die sichtbaren Zeilen: immer, nie oder <code>auto</code> bei mehr als 100 Zeilen ohne Paginierung.',
              height: 'Eine CSS-Länge, die das Grid begrenzt; der Inhalt scrollt darin.',
              columnState:
                'Breite, Reihenfolge, Fixierung und Sichtbarkeit jeder Spalte, zum Speichern und Wiederherstellen.',
              mode: '<code>server</code> zeigt die Zeilen, wie sie ankommen, und überlässt dir Sortieren, Filtern und Paginieren.',
              total: 'Die Anzahl der Zeilen auf dem Server.',
              loading:
                'Zeigt einen Fortschrittsbalken und, solange Zeilen fehlen, Platzhalterzeilen.',
              locale: 'Formatiert Zahlen und Datumsangaben und liest eingegebene Zahlen ein.',
              labels: 'Alle Texte, die das Grid anzeigt oder ansagt, zum Übersetzen.',
              rowActivate: 'Emittiert eine per Enter oder Doppelklick geöffnete Zeile.',
              cellEdit: 'Emittiert jede übernommene Änderung.',
              queryChange: 'Emittiert Sortierung, Filter, Suche und Seite, sobald sie sich ändern.',
              exportCsv: 'Die gefilterten, sortierten Zeilen der sichtbaren Spalten als CSV.',
              focusCell: 'Fokussiert eine Zelle; Zeile <code>-1</code> ist die Kopfzeile.',
              clearFilters: 'Setzt alle Filter und die Suche zurück.',
            },
          },
          NuiGridColumn: {
            summary: 'Eine Spalte. Nur <code>id</code> und <code>header</code> sind Pflicht.',
            members: {
              id: 'Eindeutig; der Schlüssel in Sortierung, Filtern und Spaltenzustand.',
              header: 'Der Text des Spaltenkopfs.',
              value:
                'Ein Schlüssel der Zeile oder eine Funktion der Zeile. Standardmäßig <code>row[id]</code>.',
              type: 'Bestimmt Ausrichtung, Sortierung, Filter und Editor.',
              format:
                '<code>Intl</code>-Optionen für Zahlen und Datumsangaben oder eine Funktion, die den Text erzeugt.',
              options:
                'Die Optionen einer <code>enum</code>-Spalte als <code>NuiOption</code>-Objekte.',
              'width, minWidth, maxWidth': 'In Pixeln.',
              flex: 'Teilt den restlichen Platz mit den anderen <code>flex</code>-Spalten.',
              align: 'Standardmäßig nach Typ: Zahlen und Datumsangaben am Ende.',
              'pinned, hidden': 'Anfängliche Fixierung und Sichtbarkeit der Spalte.',
              'sortable, filterable, resizable, reorderable, hideable':
                'Einzeln mit <code>false</code> abschaltbar.',
              compare: 'Eine eigene Sortierung.',
              'editable, validate':
                'Ob Zellen bearbeitbar sind, und eine Meldung, wenn ein Wert ungültig ist.',
              set: 'Erzeugt die bearbeitete Zeile. Standardmäßig eine Kopie mit dem neuen Wert.',
            },
          },
          NuiGridCell: {
            summary:
              'Zeichnet die Zellen einer Spalte. Der Kontext enthält die Zeile, den Wert und den Text.',
            members: { nuiGridCell: 'Die ID der Spalte.' },
          },
          NuiGridHeader: {
            summary: 'Zeichnet den Kopf einer Spalte.',
            members: { nuiGridHeader: 'Die ID der Spalte.' },
          },
          NuiGridEmpty: {
            summary:
              'Was erscheint, wenn es keine Zeilen gibt. Der Kontext verrät, ob Filter sie ausgeblendet haben.',
            members: {},
          },
        },
        keyboard: [
          [
            'Pfeiltasten',
            'Springen eine Zelle weiter. Links und rechts sind bei Text von rechts nach links vertauscht.',
          ],
          [
            'Pos1 und Ende',
            'Springt zur ersten oder letzten Zelle der Zeile; mit Ctrl im ganzen Grid.',
          ],
          ['Bild ab und Bild auf', 'Springt eine Bildschirmseite nach unten oder oben.'],
          [
            'Enter oder Leertaste auf einem Spaltenkopf',
            'Sortiert nach der Spalte; mit Umschalt kommt sie zur Sortierung hinzu.',
          ],
          ['Alt + Pfeil nach unten auf einem Spaltenkopf', 'Öffnet das Spalten-Panel.'],
          [
            'Alt + Pfeil nach links oder rechts auf einem Spaltenkopf',
            'Macht die Spalte schmaler oder breiter; mit Umschalt wird sie verschoben.',
          ],
          [
            'Enter auf einer Zelle',
            'Bearbeitet die Zelle oder öffnet die Zeile, falls sie nicht bearbeitbar ist.',
          ],
          ['F2 oder Tippen', 'Bearbeitet die Zelle.'],
          [
            'Enter, Esc und Tab beim Bearbeiten',
            'Übernimmt, bricht ab oder übernimmt und springt weiter.',
          ],
          [
            'Leertaste',
            'Wählt die Zeile aus; mit Umschalt alle Zeilen seit der zuletzt gewählten.',
          ],
          ['Ctrl + A', 'Wählt alle Zeilen aus.'],
        ],
        notes: [
          'Ein natives <code>&lt;table&gt;</code> mit <code>role="grid"</code>, benannt über <code>label</code>. Spaltenköpfe tragen <code>aria-sort</code> und auswählbare Zeilen <code>aria-selected</code>.',
          'Das Grid ist ein einziger Tab-Stopp. Der Fokus springt mit einem wandernden <code>tabindex</code> von Zelle zu Zelle, sodass Screenreader jede Zelle mit ihren Zeilen- und Spaltenköpfen vorlesen.',
          '<code>aria-rowcount</code>, <code>aria-rowindex</code> und <code>aria-colindex</code> bleiben korrekt, auch wenn Zeilen paginiert oder virtualisiert sind.',
          'Sortierung, Filter, Seitenwechsel und Bearbeitungsfehler werden höflich über eine Statusregion angesagt.',
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
      customization: {
        title: 'Anpassung',
        description:
          'Federphysik, Druckeffekte, Eingangsanimationen, Eckenformen, Radius und Dichte: Bestimme, wie sich Needless UI bewegt und anfühlt – global oder pro Komponente.',
        blocks: [
          {
            kind: 'p',
            html: 'Jede Komponente hat eine Persönlichkeit, die du ändern kannst: die Feder, mit der sie sich bewegt, was ein Button unter deinem Finger macht, wie Dialoge und Menüs erscheinen, Form und Größe ihrer Ecken und wie viel Platz sie einnimmt. Jede dieser Eigenschaften ist ein Attribut für alles innerhalb eines Elements oder ein Input für eine einzelne Komponente.',
          },
          { kind: 'demo', demo: 'playground' },
          { kind: 'h2', id: 'attributes', text: 'Ein Attribut, ein ganzer Teilbaum' },
          {
            kind: 'p',
            html: 'Setze die <code>data-nui-*</code>-Attribute für die ganze App auf <code>&lt;body&gt;</code> oder für einen Teil davon auf ein beliebiges Element. Es gilt jeweils das nächstgelegene, deshalb lassen sie sich verschachteln. Sie setzen nur CSS Custom Properties und funktionieren daher mit jedem Framework gleich – oder ganz ohne.',
          },
          { kind: 'code', file: 'snippets/customize.html' },
          { kind: 'h2', id: 'inputs', text: 'Eine einzelne Komponente' },
          {
            kind: 'p',
            html: 'In Angular nehmen <code>nuiButton</code>, <code>nuiDialog</code> und <code>nuiMenu</code> dieselben Werte als Inputs entgegen. Inputs, die du nicht setzt, richten sich nach den Attributen der umgebenden Elemente.',
          },
          { kind: 'code', file: 'snippets/customize-inputs.html' },
          { kind: 'h2', id: 'springs', text: 'Federn, zu CSS kompiliert' },
          {
            kind: 'p',
            html: 'Bewegung ist Federphysik: Steifigkeit, Dämpfung und Masse statt einer Dauer und einer Kurve. Der Token-Compiler berechnet jede Feder und schreibt sie als Dauer bis zum Stillstand und <code>linear()</code>-Easing ins CSS, sodass sie ohne JavaScript auf dem Compositor läuft. Sechs Federn werden als Tokens mitgeliefert, von <code>--nui-spring-snappy</code> bis <code>--nui-spring-mechanical</code>, und <code>--nui-motion</code> enthält die jeweils verwendete.',
          },
          {
            kind: 'p',
            html: 'Jede andere Feder ist nur einen Input entfernt. Angular kompiliert sie zur Laufzeit mit demselben Solver, und <code>springTransition()</code> liefert dir das CSS für deine eigenen Elemente.',
          },
          { kind: 'code', file: 'snippets/customize-spring.ts' },
          { kind: 'h2', id: 'css', text: 'Alles dazwischen' },
          {
            kind: 'p',
            html: 'Die Presets sind nur Abkürzungen. Für alles andere setzt du die Custom Properties selbst: beliebige Transformationen für <code>--nui-press</code> und <code>--nui-enter</code>, beliebige Zahlen für <code>--nui-radius-scale</code> und <code>--nui-density</code>.',
          },
          { kind: 'code', file: 'snippets/customize.css' },
          { kind: 'h2', id: 'accessibility', text: 'Barrierefreiheit' },
          {
            kind: 'p',
            html: 'Wünscht das System reduzierte Bewegung, schrumpfen Federn auf einen Augenblick zusammen, und Druckeffekte und Eingangsanimationen bewegen sich nicht mehr. Die Dichte drückt kein Bedienelement unter die Mindestzielgröße der WCAG 2.2 von 24 px, und kein Preset verändert Farben, sodass jede Kontrastprüfung weiterhin gilt. Browser ohne <code>corner-shape</code> zeichnen alle Ecken rund.',
          },
        ],
      },
    },
    playground: {
      label: 'Spielwiese für Anpassungen',
      motion: 'Bewegung',
      custom: 'benutzerdefiniert',
      stiffness: 'Steifigkeit',
      damping: 'Dämpfung',
      mass: 'Masse',
      press: 'Drücken',
      enter: 'Erscheinen',
      corners: 'Ecken',
      radius: 'Radius',
      density: 'Dichte',
      surprise: 'Überrasch mich',
      reset: 'Zurück zum Standard',
      hint: 'Halte einen Button gedrückt und lass dann los. Öffne den Dialog und das Menü, um zu sehen, wie sie erscheinen.',
      save: 'Speichern',
      cancel: 'Abbrechen',
      delete: 'Löschen',
      openDialog: 'Dialog öffnen',
      openMenu: 'Menü öffnen',
      menu: ['Umbenennen', 'Duplizieren', 'Löschen'],
      dialogTitle: 'Unnötig animiert',
      dialogText: 'Dieser Dialog ist genau so aufgetaucht, wie du es ihm gesagt hast.',
      close: 'Schließen',
      curve:
        'Die Position der Feder im Zeitverlauf. Sie startet unten und kommt auf der gestrichelten Linie zur Ruhe.',
      settles: (ms, overshoot) => `Kommt nach ${ms} ms zur Ruhe · überschwingt um ${overshoot} %`,
      instant: 'Keine Bewegung: Alles springt sofort dorthin, wo es hinsoll.',
      stuck:
        'Diese Feder kommt nicht innerhalb von 10 Sekunden zur Ruhe. Erhöhe Dämpfung oder Steifigkeit; bis dahin behalten die Komponenten die letzte Feder, die zur Ruhe kam.',
      reducedMotion:
        'Dein System wünscht weniger Bewegung, deshalb bewegt sich hier nichts. Federn, Druckeffekte und Eingangsanimationen kommen zurück, sobald es das nicht mehr wünscht.',
      noCornerShape:
        'Dieser Browser kann noch keine Eckenformen zeichnen, deshalb bleiben alle Ecken rund.',
      everywhere: 'Auf einem beliebigen Element, für alles darin:',
      oneComponent: 'Auf einer einzelnen Komponente, in Angular:',
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
