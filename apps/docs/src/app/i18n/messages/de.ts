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
          'Zeilen lassen sich auch verschachteln. <code>groupBy</code> gruppiert sie nach Spalten, mit dem <code>aggregate</code> jeder Spalte in den Gruppenzeilen und in einer <code>totals</code>-Zeile; <code>children</code> zeigt Baumdaten; und ein <code>nuiGridDetail</code>-Template klappt unter einer Zeile auf. Gruppiert oder verschachtelt ist die Tabelle ein <code>treegrid</code>.',
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
          groups: {
            title: 'Gruppen und Summen',
            text: 'Gruppiere nach einer oder zwei Spalten. Gruppenzeilen zählen ihre Bestellungen und bilden Summe und Durchschnitt ihrer Beträge, und <code>totals</code> ergänzt dasselbe für alle Zeilen. Der Pfeil nach links schließt eine Gruppe.',
          },
          tree: {
            title: 'Baumdaten',
            text: '<code>children</code> gibt jedem Ordner seine Dateien. Zeilen öffnen sich mit dem Pfeil nach rechts oder ihrem Toggle-Button, und <code>[(expanded)]</code> merkt sich, welche offen sind. Eine Suche hält die Ordner über einem Treffer offen.',
          },
          details: {
            title: 'Zeilendetails',
            text: 'Ein <code>nuiGridDetail</code>-Template zeigt die Positionen einer Bestellung darunter, geöffnet über eine Spalte mit Toggle-Buttons, und <code>[(details)]</code> merkt sich, welche offen sind.',
          },
          live: {
            title: 'Live-Daten, Export und Druck',
            text: 'Die Preise ändern sich alle zwei Sekunden, und <code>flash</code> zeigt, welche Zellen sich geändert haben. <code>exportXlsx()</code> lädt eine echte Tabellenkalkulationsdatei herunter, <code>print()</code> druckt alle Zeilen, und <code>layout="auto"</code> zeigt auf schmalen Bildschirmen Karten.',
          },
          cards: {
            title: 'Karten auf Smartphones',
            text: '<code>layout="list"</code> zeigt Zeilen als Karten, <code>auto</code> unter 36rem. Karten haben keine Kopfzeile, deshalb sortiert sie eine Toolbar, und ihr Button „Filter“ öffnet das Spalten-Panel für die Spalte, die du wählst. <code>toolbar</code> kann sie auch über einer Tabelle zeigen oder weglassen.',
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
              'groupBy, collapsed':
                'Spalten, nach denen Zeilen gruppiert werden, die äußerste zuerst, und die Schlüssel der geschlossenen Gruppen.',
              children: 'Die Kindzeilen einer Zeile: Das Grid zeigt Baumdaten.',
              'expanded, details':
                'Schlüssel der Zeilen, die in Baumdaten offen sind, und der Zeilen, deren Details offen sind.',
              'totals, flash':
                'Eine Zeile mit Aggregaten über alle gefilterten Zeilen; Zellen, die kurz aufleuchten, wenn sich ihr Text ändert, in Zeilen mit einer stabilen <code>rowId</code>.',
              layout:
                '<code>list</code> zeigt Zeilen als Karten, <code>auto</code> nur auf schmalen Bildschirmen.',
              toolbar:
                'Eine Leiste, die die Zeilen sortiert und das Spalten-Panel öffnet: immer, nie oder <code>auto</code> bei Karten.',
              'exportXlsx, print':
                'Die gefilterten, sortierten Zeilen als Tabellenkalkulationsdatei; druckt alle Zeilen.',
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
              aggregate:
                'Was Gruppenzeilen und die Summenzeile zeigen: eine Summe, einen Durchschnitt, ein Minimum, ein Maximum, eine Anzahl oder eine Funktion.',
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
          NuiGridDetail: {
            summary:
              'Die Details einer Zeile, die beim Öffnen darunter erscheinen. Der Kontext enthält die Zeile.',
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
          [
            'Pfeil nach rechts und links auf einer Gruppe',
            'Öffnen oder schließen sie; ebenso auf der ersten Zelle einer Zeile mit Kindzeilen.',
          ],
          [
            'Enter auf einer Gruppe',
            'Öffnet oder schließt sie; die Leertaste wählt ihre Zeilen aus.',
          ],
          [
            'Enter auf einem Toggle-Button für Details',
            'Zeigt oder verbirgt die Details der Zeile.',
          ],
        ],
        notes: [
          'Ein natives <code>&lt;table&gt;</code> mit <code>role="grid"</code>, benannt über <code>label</code>. Spaltenköpfe tragen <code>aria-sort</code> und auswählbare Zeilen <code>aria-selected</code>.',
          'Das Grid ist ein einziger Tab-Stopp. Der Fokus springt mit einem wandernden <code>tabindex</code> von Zelle zu Zelle, sodass Screenreader jede Zelle mit ihren Zeilen- und Spaltenköpfen vorlesen.',
          '<code>aria-rowcount</code>, <code>aria-rowindex</code> und <code>aria-colindex</code> bleiben korrekt, auch wenn Zeilen paginiert oder virtualisiert sind.',
          'Sortierung, Filter, Seitenwechsel und Bearbeitungsfehler werden höflich über eine Statusregion angesagt.',
          'Gruppierte oder verschachtelte Zeilen machen die Tabelle zu einem <code>treegrid</code>: Zeilen tragen <code>aria-level</code>, <code>aria-setsize</code> und <code>aria-posinset</code> sowie <code>aria-expanded</code>, wenn sie sich aufklappen lassen. Aggregate werden mit ihrer Art vorgelesen, etwa „Sum: 475“.',
          'Karten haben keine Kopfzeile, daher kommt zuerst eine Toolbar: eine Gruppe namens „Sort and filter“ mit einem beschrifteten Select für die Spalte, nach der sortiert wird, Toggle-Buttons für die Richtung und einem Button „Filter“, der das Spalten-Panel öffnet, in dem ein Select die Spalte wählt. Der Tab-Stopp des Grids wandert zur ersten Karte.',
        ],
      },
      chat: {
        name: 'Chat',
        title: 'KI-Chat-Komponente für Angular',
        summary: 'Sprich mit einem Modell: gestreamte Antworten, Tools, Versionen und Dateien.',
        description:
          'Barrierefreier Angular-Chat für KI-Assistenten: gestreamte Markdown-Antworten, Reasoning, Tool-Aufrufe, Quellen, Dateien und Wiederholungen als Versionen.',
        apiDescription:
          'API-Referenz des Chats von Needless UI: Inputs von nui-chat, die streamende NuiChatSession, Nachrichten, Tool-Templates und Stream-Reader.',
        a11yDescription:
          'Tastatur und Barrierefreiheit des Chats von Needless UI: ein Feed benannter Nachrichten, Bild auf und Bild ab, Ansagen erst bei vollständiger Antwort.',
        overview: [
          'Der Chat ist alles zwischen deinen Nutzern und einem Modell. Erstelle eine <code>NuiChatSession</code> mit einer <code>respond</code>-Funktion, und <code>&lt;nui-chat&gt;</code> erledigt den Rest: Es streamt die Antwort als Markdown, folgt ihr nach unten, bis man nach oben scrollt, und macht aus dem Senden-Button einen Stopp-Button, solange sie eintrifft.',
          '<code>respond</code> gibt Text, ein Promise, eine <code>async function*</code> oder ein Observable zurück, also passt jede API. Neben Text kann eine Antwort das Reasoning des Modells, seine Tool-Aufrufe (gezeichnet von deinen Templates) und die genutzten Quellen enthalten. <code>nuiEventStream</code> liest die Server-Sent Events, die die meisten Modell-APIs streamen.',
          'Nichts geht verloren: Eine wiederholte Antwort oder eine bearbeitete Frage wird zu einer neuen Version neben der alten, und die Unterhaltung behält jeden Zweig. Screenreader sagen jede Antwort erst an, wenn sie vollständig ist, nicht Wort für Wort.',
        ],
        examples: {
          assistant: {
            title: 'Ein Assistent',
            text: 'Vorschläge eröffnen die Unterhaltung. Antworten werden als Markdown gestreamt; du kannst sie stoppen, wiederholen, bewerten oder deine Frage bearbeiten. <code>attach</code> nimmt ausgewählte, eingefügte oder hineingezogene Dateien an.',
          },
          tools: {
            title: 'Reasoning, Tools und Quellen',
            text: 'Deltas ergänzen die Antwort um Reasoning, Tool-Aufrufe und Quellen des Modells. <code>nuiChatTool</code> zeichnet das Wetter-Tool als Karte; andere Tools werden mit Ein- und Ausgabe eingeklappt.',
          },
          server: {
            title: 'Streaming vom Server',
            text: '<code>nuiEventStream</code> liest einen Event-Stream im OpenAI-Stil, und ein <code>NuiChatError</code> zeigt seine Meldung an. <code>all()</code> speichert die Unterhaltung samt aller Versionen.',
          },
        },
        api: {
          NuiChat: {
            summary: 'Die Unterhaltung und das Eingabefeld in einem.',
            members: {
              session: 'Die anzuzeigende Unterhaltung.',
              assistant: 'Der Name des Assistenten in den Überschriften, die Screenreader ansagen.',
              headingLevel:
                'Die Ebene der Überschrift jeder Nachricht, die nur Screenreader wahrnehmen. Überschriften in Antworten liegen eine Ebene tiefer.',
              announce:
                'Was Screenreader ansagen, wenn eine Antwort vollständig ist: alles, einen kurzen Hinweis oder nichts.',
              images: 'Zeigt Bilder in Antworten. Sonst verlinkt ihr Text auf das Bild.',
              value: 'Der Text, der gerade geschrieben wird.',
              placeholder: 'Der Hinweis im leeren Feld.',
              suggestions: 'Prompts, die per Klick gesendet werden, bis zur ersten Nachricht.',
              sendOn:
                'Ob Enter sendet oder Ctrl bzw. ⌘ + Enter. <code>auto</code> sendet mit Enter, wo eine Tastatur vorhanden ist; auf Touchscreens fügt Enter einen Zeilenumbruch ein, und der Button sendet.',
              disabled: 'Verhindert das Senden aus dem Eingabefeld.',
              attach: 'Nimmt Dateien an: ausgewählt, eingefügt oder hineingezogen.',
              accept: 'Die erlaubten Dateitypen, wie bei <code>&lt;input type="file"&gt;</code>.',
              maxFiles: 'Wie viele Dateien eine Nachricht enthalten kann.',
              maxSize: 'Die maximale Dateigröße in Byte.',
              labels: 'Alle Texte, die der Chat anzeigt oder ansagt, zum Übersetzen.',
              rated:
                'Emittiert eine vom Nutzer bewertete Antwort samt Bewertung oder <code>null</code>, wenn er sie zurücknimmt.',
              focus: 'Fokussiert das Textfeld.',
              scrollToEnd: 'Scrollt zur neuesten Nachricht und folgt ihr.',
            },
          },
          NuiChatSession: {
            summary:
              'Die Unterhaltung, ganz ohne DOM. Erstelle sie in einer Komponente mit den Optionen <code>respond</code>, <code>messages</code> und <code>id</code>.',
            members: {
              respond:
                'Deine Funktion: schreibt die Antwort auf <code>request.messages</code> und stoppt, sobald <code>request.signal</code> abbricht.',
              messages: 'Die angezeigte Unterhaltung.',
              all: 'Alle Nachrichten aller Versionen, zum Speichern und späteren Übergeben als <code>messages</code>.',
              busy: 'Ob gerade eine Antwort unterwegs ist.',
              send: 'Sendet eine Nachricht und fordert eine Antwort an.',
              stop: 'Stoppt die Antwort und behält, was sie schon geschrieben hat.',
              retry: 'Fragt erneut. Die neue Antwort ist eine Version neben der alten.',
              edit: 'Sendet eine neue Version einer Nachricht des Nutzers.',
              versions: 'Alle Versionen einer Nachricht, die älteste zuerst.',
              show: 'Schaltet die Unterhaltung auf diese Version um.',
              rate: 'Speichert die Bewertung einer Antwort durch den Nutzer.',
              'remove, load, clear':
                'Entfernt eine Nachricht samt allem danach, ersetzt die Unterhaltung oder beginnt von vorn.',
            },
          },
          NuiChatMessage: {
            summary:
              'Eine Nachricht. Nachrichten mit demselben <code>parent</code> sind Versionen voneinander.',
            members: {
              'id, parent': 'Der Schlüssel der Nachricht und der Nachricht, auf die sie folgt.',
              role: 'Wer sie geschrieben hat.',
              text: 'Markdown vom Assistenten, reiner Text vom Nutzer.',
              status: 'Wo eine Antwort steht, von wartend bis fertig.',
              reasoning: 'Was das Modell vor der Antwort überlegt hat.',
              tools: 'Die aufgerufenen Tools mit Status, Ein- und Ausgabe.',
              sources: 'Die genutzten Seiten.',
              attachments: 'Die mitgesendeten Dateien.',
              rating: 'Die Bewertung des Nutzers.',
              data: 'Alles Weitere, das dazugehört, etwa der Name des Modells.',
            },
          },
          NuiChatToolTemplate: {
            summary:
              'Zeichnet einen Tool-Aufruf, etwa eine Karte fürs Wetter. Der Kontext enthält den Aufruf und seine Nachricht.',
            members: {
              nuiChatTool:
                'Der Name des Tools. Ohne Namen zeichnet es jeden Aufruf, den kein anderes Template benennt.',
            },
          },
          NuiChatThread: {
            summary:
              'Die Unterhaltung für sich, für dein eigenes Layout. Sie nimmt die Inputs von <code>nui-chat</code> an, die die Unterhaltung betreffen.',
            members: {},
          },
          NuiChatComposer: {
            summary:
              'Das Eingabefeld für sich. Es nimmt die Inputs von <code>nui-chat</code> an, die das Schreiben betreffen.',
            members: {},
          },
          NuiServerEvent: {
            summary:
              'Was <code>nuiEventStream</code> für jedes Event liefert. <code>nuiTextStream</code> liest reinen Text und <code>nuiJsonStream</code> JSON-Zeilen; alle drei nehmen eine <code>fetch</code>-Response entgegen.',
            members: {
              event: 'Der Name des Events.',
              data: 'Seine Datenzeilen, zusammengefügt.',
              id: 'Die letzte ID, die der Stream gesendet hat.',
            },
          },
          NuiChatError: {
            summary:
              'Wirf ihn in <code>respond</code>, um seine Meldung anzuzeigen. Jeder andere Fehler zeigt eine allgemeine Meldung, damit nichts Internes nach außen dringt.',
            members: {},
          },
        },
        keyboard: [
          ['Bild ab und Bild auf', 'Springt zur nächsten oder vorherigen Nachricht.'],
          ['Ctrl + Ende und Ctrl + Pos1', 'Verlässt die Unterhaltung nach vorn oder zurück.'],
          ['Enter', 'Sendet. Mit Umschalt beginnt eine neue Zeile.'],
          ['Esc', 'Beendet das Bearbeiten einer Nachricht.'],
        ],
        notes: [
          'Die Unterhaltung ist ein <code>feed</code> aus <code>article</code>-Elementen. Jedes ist nach einer Überschrift benannt, die nur Screenreader wahrnehmen, etwa „You said“, und trägt <code>aria-posinset</code> und <code>aria-setsize</code>.',
          'Eine Antwort, die noch entsteht, ist <code>aria-busy</code>. Ist sie vollständig, wird sie als Ganzes angesagt; ein Fehler wird sofort angesagt.',
          'Jeder Icon-Button hat einen Namen und einen Tooltip. Bewertungen sind Toggle-Buttons, und die Versionsauswahl ist eine Gruppe mit einem Namen wie „Version 2 of 3“.',
          'Reasoning und Tool-Aufrufe sind native Aufklappelemente. Wird eine Datei entfernt, kehrt der Fokus zum Textfeld zurück.',
        ],
      },
      markdown: {
        name: 'Markdown',
        title: 'Markdown-Renderer-Komponente für Angular',
        summary: 'Markdown sicher rendern, auch während es noch gestreamt wird.',
        description:
          'Sicherer Angular-Markdown-Renderer für KI-Antworten: GitHub-Tabellen, Aufgabenlisten und Codeblöcke als echte Elemente, flüssig auch beim Streaming.',
        apiDescription:
          'API-Referenz des Markdown-Renderers von Needless UI: Inputs von nui-markdown, das Template für Codeblöcke und der Parser dahinter.',
        a11yDescription:
          'Barrierefreiheit des Markdown-Renderers von Needless UI: echte Überschriften, Listen und Tabellen, benannte Scrollbereiche und ein Kopieren-Button mit Ansage.',
        overview: [
          'Der Markdown-Renderer macht aus Text, wie ihn ein Modell schreibt, echte Elemente: Überschriften, Listen und Aufgabenlisten, Zitate, Tabellen, Codeblöcke mit Kopieren-Button und Links. Er parst den Text in einen Baum und zeichnet ihn mit Templates, sodass rohes HTML Text bleibt und nie etwas als HTML eingefügt wird.',
          'Mit <code>streaming</code> liest sich halb geschriebener Text schon wie der fertige: Ein offener Code-Fence ist bereits ein Codeblock, ein einzelnes <code>**</code> wartet auf sein Gegenstück, und ein Cursor folgt dem letzten Wort. Unveränderte Blöcke behalten ihr DOM.',
          'Links funktionieren nur für Web- und E-Mail-Adressen sowie Telefonnummern, und Bilder bleiben Links, bis du <code>images</code> einschaltest.',
        ],
        examples: {
          document: {
            title: 'Ein Dokument',
            text: 'Überschriften beginnen bei <code>headingLevel</code> und passen so unter die der Seite. Breite Tabellen und Code scrollen in eigenen Bereichen.',
          },
          streaming: {
            title: 'Streaming',
            text: 'Derselbe Text, ein paar Zeichen auf einmal. Kein Symbol blitzt kurz auf, und nur der letzte Block wird neu gerendert.',
          },
          highlight: {
            title: 'Syntax-Highlighting',
            text: '<code>nuiMarkdownCode</code> zeichnet Codeblöcke mit deinem eigenen Template, hier mit einem winzigen Highlighter. Es erhält den Code und seine Sprache.',
          },
        },
        api: {
          NuiMarkdown: {
            summary: 'Rendert Markdown als Elemente.',
            members: {
              text: 'Das Markdown.',
              streaming: 'Der Text trifft noch ein.',
              headingLevel:
                'Die Ebene einer <code>#</code>-Überschrift. Tiefere folgen darauf, bis 6.',
              images:
                'Zeigt Bilder. Sonst verlinkt ihr Text auf das Bild, denn Bilder können tracken.',
              labels: 'Die Texte des Kopieren-Buttons und Ähnliches, zum Übersetzen.',
              codeTemplate:
                'Ein Codeblock-Template von außerhalb, etwa aus einem Chat, der diesen Renderer enthält.',
            },
          },
          NuiMarkdownCode: {
            summary:
              'Zeichnet Codeblöcke. Der Kontext enthält den Code, <code>lang</code> und <code>open</code>, solange der Block noch eintrifft.',
            members: {},
          },
          nuiParseMarkdown: {
            summary: 'Der Parser und seine Hilfsfunktionen, zur Nutzung ohne die Komponente.',
            members: {
              nuiParseMarkdown:
                'Der Baum aus Block- und Inline-Elementen, den die Komponente zeichnet.',
              nuiMarkdownToText:
                'Der reine Text, eine Zeile pro Block, zum Ansagen oder als Vorschau.',
              nuiSafeUrl:
                'Ob ein Link zu einer Web- oder E-Mail-Adresse oder einer Telefonnummer führt.',
            },
          },
        },
        keyboard: [
          [
            'Tab',
            'Erreicht Links, die Kopieren-Buttons sowie breite Tabellen und Code, um sie zu scrollen.',
          ],
        ],
        notes: [
          'Überschriften, Listen, Zitate, Tabellen mit <code>th</code>-Kopfzellen und <code>scope</code> sowie Code sind echte Elemente.',
          'Breite Tabellen und Codeblöcke scrollen in einem fokussierbaren Bereich; der Bereich einer Tabelle ist nach ihren Kopfzellen benannt.',
          'Kästchen in Aufgabenlisten zeigen an, ob die Aufgabe erledigt ist. Der Kopieren-Button heißt „Copy code“ und meldet „Copied“ über eine Statusmeldung.',
          'Der Streaming-Cursor ist vor Screenreadern verborgen und steht bei reduzierter Bewegung still.',
        ],
      },
      calendar: {
        name: 'Kalender',
        title: 'Kalender-Komponente für Angular',
        summary: 'Wähle einen Tag, einen Zeitraum oder mehrere Tage, auch per Tastatur.',
        description:
          'Barrierefreier Angular-Kalender: ein Tag, ein Zeitraum oder mehrere Tage, mit min und max, nicht verfügbaren Tagen, Monaten nebeneinander und Kalenderwochen.',
        apiDescription:
          'API-Referenz des Kalenders von Needless UI: Auswahl-Models von nui-calendar, min, max und nicht verfügbare Tage, Monate nebeneinander und Beschriftungen.',
        a11yDescription:
          'Tastatur und Barrierefreiheit des Kalenders von Needless UI: ein Grid benannter Tage, Pfeiltasten für Tag und Woche, Bild auf und Bild ab für den Monat.',
        overview: [
          'Mit dem Kalender wählst du einen Tag, einen Zeitraum oder mehrere Tage. Die Werte sind einfache ISO-Datumsangaben wie <code>2026-09-25</code>, ohne Zeitzone, die sie verschieben könnte, und lassen sich daher direkt an einen Server oder ein <code>&lt;input type="date"&gt;</code> übergeben.',
          'Die Woche beginnt am ersten Wochentag der Locale, und Namen und Ziffern folgen ihrer Sprache. <code>min</code>, <code>max</code> und <code>unavailable</code> schließen Tage aus, <code>months</code> zeigt mehrere Monate nebeneinander, und der Titel zoomt für weit entfernte Tage auf Monate und Jahre heraus.',
          'Jeder Tag ist per Tastatur erreichbar, wie im Date-Picker-Muster von WAI-ARIA, und trägt sein vollständiges Datum als Namen.',
        ],
        examples: {
          delivery: {
            title: 'Ein Liefertag',
            text: 'Tage vor heute, nach <code>max</code> oder durch <code>unavailable</code> ausgeschlossen: Sie lassen sich nicht wählen, aber die Tastatur bewegt sich trotzdem über sie hinweg.',
          },
          stay: {
            title: 'Ein Zeitraum',
            text: 'Mit <code>selection="range"</code> beginnt die erste Auswahl den Zeitraum, und die Markierung folgt dem Zeiger bis zur zweiten. <code>months="2"</code> und <code>weekNumbers</code> zeigen mehr auf einmal.',
          },
          'days-off': {
            title: 'Mehrere Tage',
            text: 'Mit <code>selection="multiple"</code> fügt jede Auswahl einen Tag hinzu oder entfernt ihn. <code>firstDay</code> lässt die Woche an einem anderen Tag beginnen als die Locale.',
          },
        },
        api: {
          NuiCalendar: {
            summary: 'Ein Kalender zur Auswahl von Tagen.',
            members: {
              selection: 'Wie viele Tage sich wählen lassen.',
              value: 'Der gewählte Tag.',
              values: 'Die gewählten Tage, chronologisch sortiert.',
              range: 'Der gewählte Zeitraum, beide Enden eingeschlossen.',
              month: 'Der angezeigte Monat; bei mehreren der erste.',
              view: 'Tage, Monate oder Jahre.',
              'min, max': 'Der erste und der letzte wählbare Tag.',
              unavailable: 'Schließt weitere Tage aus, etwa Feiertage.',
              months: 'Monate nebeneinander.',
              weekNumbers: 'Zeigt ISO-Kalenderwochen an.',
              firstDay: 'Der erste Tag der Woche, 1 für Montag. Standardmäßig der aus der Locale.',
              locale: 'Formatiert Namen und Ziffern und bestimmt den ersten Tag der Woche.',
              labels: 'Alle Texte, die der Kalender anzeigt oder ansagt, zum Übersetzen.',
              picked: 'Emittiert jede Auswahl: einen Tag oder, sobald vollständig, einen Zeitraum.',
              focusDate: 'Setzt den Tastaturfokus auf einen Tag und zeigt seinen Monat.',
            },
          },
          NuiDateRange: {
            summary: 'Ein Zeitraum aus ganzen Tagen.',
            members: { 'start, end': 'Der erste und der letzte Tag, beide eingeschlossen.' },
          },
        },
        keyboard: [
          [
            'Pfeil nach links und rechts',
            'Vorheriger oder nächster Tag. Bei Text von rechts nach links sind die Pfeile vertauscht.',
          ],
          ['Pfeil nach oben und unten', 'Vorherige oder nächste Woche.'],
          ['Pos1 und Ende', 'Erster oder letzter Tag der Woche.'],
          ['Bild auf und Bild ab', 'Vorheriger oder nächster Monat; mit Umschalt das Jahr.'],
          ['Enter oder Leertaste', 'Wählt den Tag oder zoomt in einen Monat oder ein Jahr hinein.'],
          ['Esc', 'Verwirft den angefangenen Zeitraum oder zoomt wieder hinein.'],
        ],
        notes: [
          'Jeder Monat ist ein <code>grid</code>, benannt nach seinem Titel, mit den vollen Namen der Wochentage in <code>abbr</code>.',
          'Jeder Tag ist nach seinem vollständigen Datum benannt, ergänzt um „Today“, „unavailable“ und die Enden eines Zeitraums. <code>aria-selected</code> markiert, was gewählt ist, und <code>aria-disabled</code>, was sich nicht wählen lässt.',
          'Das Grid ist ein einziger Tab-Stopp, mit einem wandernden <code>tabindex</code>. Die Buttons für den vorherigen und nächsten Monat sagen den neuen Monat an.',
        ],
      },
      'date-picker': {
        name: 'Datumsauswahl',
        title: 'Datums- und Zeitauswahl-Komponenten für Angular',
        summary: 'Datum oder Uhrzeit in Segmenten eintippen oder im Kalender wählen.',
        description:
          'Barrierefreie Datums-, Zeit- und Zeitraumauswahl für Angular: Segmente in der Reihenfolge der Locale, Kalender im Popover, Presets und Formularanbindung.',
        apiDescription:
          'API-Referenz der Datumsauswahl von Needless UI: nui-date-field, nui-time-field, nui-date-picker und nui-date-range-picker, mit Presets.',
        a11yDescription:
          'Tastatur und Barrierefreiheit der Datumsauswahl von Needless UI: ein Spinbutton für jeden Teil eines Datums und ein Kalender in einem Dialog.',
        overview: [
          'Datums- und Zeitfelder werden in Segmenten eingetippt: Tag, Monat und Jahr in der Reihenfolge der Locale, dann Stunden und Minuten in ihrem 12- oder 24-Stunden-Format. Jedes Segment ist ein Spinbutton: Tippe Ziffern, und es springt von selbst weiter, oder ändere es schrittweise mit den Pfeiltasten. Füge ein ganzes Datum ein, und alle Segmente füllen sich.',
          'Datums- und Zeitraumauswahl ergänzen einen Kalender im Popover, für Zeiträume auch mit Presets. Die Werte sind einfache ISO-Strings wie <code>2026-09-25</code> oder <code>2026-09-25T09:30</code>, und jedes Feld funktioniert mit Signal Forms, Reactive Forms und <code>ngModel</code>.',
          'Auf dieser Website folgen die Beispiele der Sprache der Seite: Wechsle sie, um zu sehen, wie sich Reihenfolge, Trennzeichen und Ziffern ändern.',
        ],
        examples: {
          fields: {
            title: 'Datums- und Zeitfelder',
            text: 'Tippe die Ziffern oder nutze die Pfeiltasten. Ein zweites Drücken der Rücktaste springt ein Segment zurück. <code>minuteStep</code> legt fest, wie weit die Pfeiltasten die Minuten verstellen.',
          },
          pickers: {
            title: 'Datumsauswahl',
            text: 'Der Button öffnet einen Kalender mit dem gewählten Tag im Fokus, und die Auswahl eines Tages schließt ihn. Mit <code>granularity="minute"</code> nimmt die Datumsauswahl auch eine Uhrzeit auf, und der Kalender ändert nur das Datum.',
          },
          range: {
            title: 'Ein Zeitraum',
            text: 'Zwei Felder und ein Kalender mit zwei Monaten. <code>nuiDateRangePresets()</code> ergänzt gängige Zeiträume; der Wert bleibt null, bis beide Enden in der richtigen Reihenfolge gesetzt sind.',
          },
        },
        api: {
          NuiDateField: {
            summary: 'Ein Datum oder Datum mit Uhrzeit, in Segmenten eingetippt.',
            members: {
              value: 'Der Wert oder null, bis alle Segmente ausgefüllt sind.',
              granularity: 'Endet beim Tag oder reicht bis zur Stunde, Minute oder Sekunde.',
              'min, max':
                'Der früheste und der späteste Wert. Außerhalb davon ist das Feld ungültig.',
              placeholder: 'Der Ausgangswert leerer Segmente für die Pfeiltasten.',
              hourCycle: 'Eine 12- oder 24-Stunden-Uhr. Standardmäßig die der Locale.',
              minuteStep: 'Wie weit die Pfeiltasten die Minuten verstellen.',
              'disabled, readonly': 'Verhindern Änderungen.',
              locale: 'Bestimmt Reihenfolge, Trennzeichen, Ziffern und Uhrformat.',
              labels: 'Alle Texte, die das Feld ansagt, zum Übersetzen.',
              invalid: 'Ob der Wert außerhalb von <code>min</code> und <code>max</code> liegt.',
              focus: 'Fokussiert das erste leere Segment.',
            },
          },
          NuiTimeField: {
            summary:
              'Eine Uhrzeit, in Segmenten eingetippt. Nimmt dieselben Inputs wie das Datumsfeld.',
            members: { granularity: 'Endet bei der Stunde, Minute oder Sekunde.' },
          },
          NuiDatePicker: {
            summary:
              'Ein Datumsfeld mit einem Kalender im Popover. Nimmt die Inputs des Datumsfelds und zusätzlich diese.',
            members: {
              unavailable: 'Tage, die sich im Kalender nicht wählen lassen.',
              'firstDay, weekNumbers': 'Werden an den Kalender weitergegeben.',
              labels: 'Die Texte von Feld, Button und Kalender.',
              show: 'Öffnet den Kalender.',
            },
          },
          NuiDateRangePicker: {
            summary:
              'Zwei Datumsfelder mit einem Kalender für Zeiträume. Nimmt die Inputs der Datumsauswahl und zusätzlich diese.',
            members: {
              value:
                'Der Zeitraum oder null, bis beide Enden in der richtigen Reihenfolge gesetzt sind.',
              presets: 'Benannte Zeiträume, mit einem Klick wählbar.',
              months: 'Monate nebeneinander im Kalender; auf schmalen Bildschirmen nur einer.',
            },
          },
          NuiDateRangePreset: {
            summary: 'Ein benannter Zeitraum, fest oder erst bei der Auswahl berechnet.',
            members: {
              label: 'Sein Name.',
              range: 'Der Zeitraum oder eine Funktion, die ihn erzeugt.',
            },
          },
        },
        keyboard: [
          [
            'Ziffern',
            'Schreiben ins Segment. Es springt weiter, sobald keine weitere Ziffer folgen kann.',
          ],
          [
            'Pfeil nach oben und unten',
            'Ändern das Segment schrittweise; Bild auf und Bild ab in größeren Schritten.',
          ],
          ['Pfeil nach links und rechts, Tab', 'Vorheriges oder nächstes Segment.'],
          ['Rücktaste', 'Leert das Segment und springt dann eins zurück.'],
          ['A und P', 'Setzt AM oder PM.'],
        ],
        notes: [
          'Ein Feld ist eine <code>group</code>: Benenne es mit <code>aria-label</code> oder <code>aria-labelledby</code>. Jedes Segment ist ein <code>spinbutton</code> mit dem Namen seines Teils; Monate werden mit ihrem Namen vorgelesen, leere Segmente als „Empty“.',
          'Segmente sind bearbeitbarer Text, daher zeigen Bildschirmtastaturen direkt Ziffern an.',
          'Der Button der Datumsauswahl heißt „Choose a date“, und sein Popover ist ein <code>dialog</code>. Wählst du ein Datum, kehrt der Fokus zum Button zurück.',
          'Der Kalender darin funktioniert wie der <a href="/components/calendar">Kalender</a>.',
        ],
      },
      scheduler: {
        name: 'Terminplaner',
        title: 'Terminplaner-Komponente für Angular',
        summary: 'Termine in Monats-, Wochen-, Tages- oder Agendaansicht, an ihren Platz gezogen.',
        description:
          'Barrierefreier Angular-Terminplaner: Monat, Woche, Tag und Agenda, überlappende Termine nebeneinander, Verschieben und Dauer ändern per Ziehen oder Tastatur.',
        apiDescription:
          'API-Referenz des Terminplaners von Needless UI: Ansichten, Termine, Bearbeitung und Auswahl von nui-scheduler, seine Outputs und das Template für Termine.',
        a11yDescription:
          'Tastatur und Barrierefreiheit des Terminplaners von Needless UI: Grids aus Tagen und Uhrzeiten, benannte Termine und eine Tastaturalternative für jedes Ziehen.',
        overview: [
          'Der Terminplaner zeigt Termine in der Monats-, Wochen-, Tages- oder Agendaansicht. Termine sind einfache Daten mit ISO-Zeiten; überlappende teilen sich die Breite, Termine über Mitternacht erscheinen an beiden Tagen, und ganztägige Termine ziehen sich oben als Balken über die Tage.',
          'Deine Termine ändert er nie selbst. Ziehst du einen Termin oder seine Unterkante, meldet <code>eventChange</code> die neuen Zeiten; markierst du eine Zeitspanne im Grid, meldet <code>slotSelect</code> sie. <code>rangeChange</code> sagt dir, welche Tage angezeigt werden, damit du ihre Termine laden kannst.',
          'Alles, was ein Zeiger kann, geht auch per Tastatur: Das Grid ist ein einziger Tab-Stopp, mit den Pfeiltasten bewegst du dich durch Tage und Uhrzeiten, und Alt plus Pfeiltaste verschiebt einen Termin.',
        ],
        examples: {
          planner: {
            title: 'Eine Woche planen',
            text: 'Mit <code>editable</code> und <code>selectable</code> verschiebst du Termine per Ziehen, ziehst an ihrer Unterkante, um die Dauer zu ändern, und ziehst über freie Zeit, um einen neuen anzulegen. Das Beispiel aktualisiert seine Termine anhand der Outputs.',
          },
          month: {
            title: 'Ein Monat und eine Agenda',
            text: 'Mehrtägige Termine erscheinen als Balken; ein voller Tag zeigt, wie viele weitere es gibt. <code>views</code> bietet nur den Monat und die Agenda der nächsten <code>agendaDays</code> Tage an.',
          },
          rooms: {
            title: 'Ein Tag mit Raumbuchungen',
            text: '<code>nuiSchedulerEvent</code> zeichnet jede Buchung mit Raum und Organisator. <code>slotMinutes="15"</code> sorgt für feinere Zeilen.',
          },
        },
        api: {
          NuiScheduler: {
            summary: 'Termine in der Monats-, Wochen-, Tages- oder Agendaansicht.',
            members: {
              events: 'Die anzuzeigenden Termine.',
              view: 'Die angezeigte Ansicht.',
              views: 'Die Ansichten, zwischen denen man wechseln kann.',
              date: 'Der angezeigte Tag, auf dem auch der Tastaturfokus steht.',
              slotMinutes:
                'Minuten pro Zeile des Zeitrasters und die Schrittweite, in der sich Termine verschieben.',
              scrollHour: 'Die Stunde, die das Zeitraster beim Öffnen zeigt.',
              agendaDays: 'Wie viele Tage die Agenda vorausschaut.',
              editable:
                'Termine lassen sich verschieben und in der Dauer ändern, per Zeiger und per Tastatur.',
              selectable: 'Im Grid lässt sich Zeit markieren, um Termine anzulegen.',
              firstDay: 'Der erste Tag der Woche, 1 für Montag. Standardmäßig der aus der Locale.',
              headingLevel:
                'Die Überschriftenebene des Titels; die Tage der Agenda liegen eine Ebene tiefer.',
              locale: 'Formatiert Tage und Uhrzeiten.',
              labels: 'Alle Texte, die der Terminplaner anzeigt oder ansagt, zum Übersetzen.',
              eventClick: 'Emittiert einen angeklickten oder mit Enter geöffneten Termin.',
              eventChange:
                'Emittiert die neuen Zeiten eines Termins nach dem Verschieben oder Ändern der Dauer.',
              slotSelect: 'Emittiert die im Grid markierte Zeit.',
              rangeChange:
                'Emittiert den ersten und letzten angezeigten Tag, wenn sie sich ändern.',
            },
          },
          NuiSchedulerEvent: {
            summary:
              'Ein Termin. Das Ende eines Termins mit Uhrzeit ist nicht eingeschlossen; bei einem ganztägigen Termin ist das Ende sein letzter Tag.',
            members: {
              'id, title': 'Sein Schlüssel und was er anzeigt.',
              'start, end': 'Datum mit Uhrzeit oder, bei ganztägigen Terminen, nur das Datum.',
              allDay: 'Standardmäßig gesetzt, wenn <code>start</code> keine Uhrzeit hat.',
              tone: 'Seine Farbe.',
              editable:
                'Ob er sich verschieben lässt, unabhängig davon, was der Terminplaner vorgibt.',
              data: 'Alles Weitere, das du mit ihm aufbewahren willst.',
            },
          },
          NuiSchedulerEventTemplate: {
            summary: 'Zeichnet Termine. Der Kontext enthält den Termin und seine Zeit als Text.',
            members: {},
          },
        },
        keyboard: [
          [
            'Pfeiltasten',
            'Springen um einen Tag oder ein Zeitfenster. Bei Text von rechts nach links sind die Pfeile vertauscht.',
          ],
          [
            'Bild auf und Bild ab',
            'Blättert einen Monat, eine Woche oder einen Tag zurück oder vor.',
          ],
          ['Umschalt + Pfeiltasten', 'Erweitern die markierte Zeit.'],
          [
            'Enter oder Leertaste auf einer Zelle',
            'Springt in ihre Termine oder markiert ihre Zeit.',
          ],
          [
            'Pfeil nach oben und unten auf einem Termin',
            'Vorheriger oder nächster Termin in der Zelle.',
          ],
          [
            'Alt + Pfeiltasten auf einem Termin',
            'Verschieben ihn um ein Zeitfenster oder einen Tag.',
          ],
          ['Alt + Umschalt + Pfeil nach oben oder unten', 'Verkürzt oder verlängert den Termin.'],
          ['Esc', 'Kehrt zur Zelle zurück, verwirft die markierte Zeit oder bricht das Ziehen ab.'],
        ],
        notes: [
          'Monat, Woche und Tag sind jeweils ein <code>grid</code>, benannt nach ihrem Titel. Die Tage bilden die Spaltenköpfe und die Uhrzeiten die Zeilenköpfe, sodass jede Zelle mit ihrem Tag und ihrer Uhrzeit vorgelesen wird.',
          'Jeder Termin ist ein Button, benannt nach Titel, Tag und Uhrzeit, etwa „Standup, Friday, September 25, 9:00 – 9:30 AM“. Nach dem Verschieben oder Ändern der Dauer wird die neue Zeit angesagt.',
          'Für jedes Ziehen gibt es eine Tastaturalternative, sodass niemand einen Zeiger braucht.',
          'Die Ansichten sind Toggle-Buttons in einer Gruppe, und beim Wechsel zu einer anderen Woche oder einem anderen Monat wird der neue Titel angesagt.',
        ],
      },
      splitter: {
        name: 'Splitter',
        title: 'Splitter und größenveränderbare Bereiche für Angular',
        summary: 'Bereiche nebeneinander oder übereinander, mit Griffen zum Ändern ihrer Größe.',
        description:
          'Barrierefreier Angular-Splitter: größenveränderbare Bereiche neben- oder übereinander, mit Grenzwerten, Einklappen, gespeicherten Größen und Tastatursteuerung.',
        apiDescription:
          'API-Referenz des Splitters von Needless UI: Ausrichtung und Größen von nuiSplitter, Grenzwerte und Einklappen der Bereiche sowie die Griffe dazwischen.',
        a11yDescription:
          'Tastatur und Barrierefreiheit des Splitters von Needless UI: fokussierbare Griffe mit Wert nach dem Window-Splitter-Pattern, Pfeiltasten, Pos1, Ende und Enter.',
        overview: [
          'Ein Splitter teilt seinen Platz auf Bereiche auf, mit einem Griff zwischen je zwei davon. Zieh einen Griff oder fokussiere ihn und nutze die Pfeiltasten. Die Größen sind Prozentwerte, die zusammen 100 ergeben und sich über <code>[(sizes)]</code> binden lassen.',
          'Für jeden Bereich lassen sich Startgröße, Minimum und Maximum in Pixeln, rem oder Prozent angeben. Ein Bereich mit <code>collapsible</code> klappt ein, wenn du ihn unter die Hälfte seines Minimums ziehst oder auf seinem Griff Enter drückst, und klappt in seiner vorherigen Größe wieder auf.',
          'Mit <code>storageKey</code> bleiben die Größen in <code>localStorage</code> erhalten, sodass man das Layout beim nächsten Besuch so vorfindet, wie man es verlassen hat.',
        ],
        examples: {
          editor: {
            title: 'Ein Editor',
            text: 'Dateien, Code und eine Vorschau. Dateien und Vorschau lassen sich einklappen, der Code behält mindestens 30 % der Breite, und die Größen werden gespeichert.',
          },
          stacked: {
            title: 'Bereiche übereinander',
            text: '<code>orientation="vertical"</code> stapelt die Bereiche übereinander, und <code>[(sizes)]</code> liest ihre Größen, während sie sich ändern.',
          },
        },
        api: {
          NuiSplitter: {
            summary: 'Bereiche mit Griffen dazwischen.',
            members: {
              orientation: 'Nebeneinander oder übereinander.',
              sizes: 'Der Anteil jedes Bereichs in Prozent, der Reihe nach.',
              storageKey:
                'Speichert die Größen unter diesem Schlüssel in <code>localStorage</code>.',
              step: 'Wie weit die Pfeiltasten einen Griff verschieben, in Prozent. Mit Umschalt doppelt so weit.',
              move: 'Verschiebt die Grenze hinter einem Bereich um einen Prozentwert.',
            },
          },
          NuiSplitterPane: {
            summary: 'Ein Bereich. Seine Größen nehmen Pixel, rem oder Prozent an.',
            members: {
              defaultSize: 'Seine Anfangsgröße, wenn keine Größen wiederherzustellen sind.',
              min: 'Seine Mindestgröße.',
              max: 'Seine Maximalgröße.',
              collapsible:
                'Er klappt ein: unter die Hälfte seines Minimums gezogen oder mit Enter.',
              collapsedSize: 'Seine Größe im eingeklappten Zustand, etwa eine Leiste mit Icons.',
              label: 'Benennt den Griff, der seine Größe ändert.',
            },
          },
          NuiSplitterHandle: {
            summary: 'Der Griff zwischen zwei Bereichen.',
            members: {
              label: 'Benennt ihn, wenn das Label des Bereichs es nicht tut.',
              disabled: 'Er lässt sich nicht bewegen.',
              toggle: 'Klappt den Bereich daneben ein oder wieder auf.',
            },
          },
        },
        keyboard: [
          [
            'Pfeil nach links und rechts',
            'Verschieben den Griff zwischen nebeneinanderliegenden Bereichen. Bei Text von rechts nach links sind die Pfeile vertauscht.',
          ],
          [
            'Pfeil nach oben und unten',
            'Verschieben den Griff zwischen übereinanderliegenden Bereichen.',
          ],
          ['Umschalt + Pfeiltasten', 'Verschieben ihn doppelt so weit.'],
          [
            'Pos1 und Ende',
            'Setzt den Bereich vor dem Griff auf seine Mindest- oder Maximalgröße.',
          ],
          ['Enter', 'Klappt den einklappbaren Bereich ein oder wieder auf.'],
        ],
        notes: [
          'Jeder Griff ist ein fokussierbarer <code>separator</code> wie im Window-Splitter-Pattern von WAI-ARIA: Sein Wert ist die Größe des Bereichs davor, zwischen dessen Mindest- und Maximalgröße, und <code>aria-controls</code> verweist auf diesen Bereich.',
          'Benenne die Griffe über das <code>label</code> der Bereiche: „Files“ sagt einem Screenreader, was ein Griff in der Größe ändert.',
          'Ein Doppelklick auf einen Griff klappt seinen Bereich ebenfalls ein, und beim Ziehen wird der Zeiger festgehalten, sodass der Griff auch bei schnellen Bewegungen nicht verloren geht.',
        ],
      },
      tour: {
        name: 'Tour',
        title: 'Komponente für geführte Touren in Angular',
        summary:
          'Eine Karte pro Schritt, neben dem, worum es geht, und die Seite drumherum abgedunkelt.',
        description:
          'Barrierefreie Produkttour für Angular: eine Karte pro Schritt neben ihrem Ziel, ein Spotlight darauf, interaktive Schritte und ein Fokus, der zurückkehrt.',
        apiDescription:
          'API-Referenz der Tour von Needless UI: Schritte von nui-tour, die Bindings open und step, ihre Outputs sowie Ziel, Platzierung und Hooks jedes Schritts.',
        a11yDescription:
          'Tastatur und Barrierefreiheit der Tour von Needless UI: jede Karte ein nach ihrem Titel benannter Dialog, gehaltener und zurückgegebener Fokus, Esc zum Beenden.',
        overview: [
          'Eine Tour führt Nutzer Schritt für Schritt durch eine Seite. Jeder Schritt zeigt mit einer Karte daneben auf ein Element und dunkelt den Rest der Seite drumherum ab; ein Schritt ohne Ziel erscheint in der Mitte.',
          'Schritte sind einfache Daten: ein Ziel (ein Selektor, ein Element oder eine Funktion, die eines findet), ein Titel und Inhalt als Text oder Template. <code>beforeShow</code> läuft zuerst, sodass ein Schritt das Panel öffnen kann, in dem sein Ziel liegt, und zu einem Ziel außerhalb des sichtbaren Bereichs wird gescrollt.',
          'Jede Karte ist ein Dialog. Sie ist modal, außer der Schritt ist <code>interactive</code>: Dann lässt sich benutzen, worauf sie zeigt. Esc beendet die Tour, und der Fokus kehrt dorthin zurück, wo er war.',
        ],
        examples: {
          basics: {
            title: 'Ein erster Blick',
            text: 'Vier Schritte, der erste ohne Ziel. <code>finished</code> und <code>dismissed</code> unterscheiden die beiden möglichen Enden der Tour.',
          },
          interactive: {
            title: 'Schritte zum Ausprobieren',
            text: '<code>beforeShow</code> öffnet die Einstellungen, bevor der zweite Schritt hineinzeigt, und <code>interactive</code> macht den Schalter bedienbar, während die Karte offen ist.',
          },
        },
        api: {
          NuiTour: {
            summary: 'Eine geführte Tour.',
            members: {
              steps: 'Die Schritte, der Reihe nach.',
              open: 'Ob die Tour läuft.',
              step: 'Der angezeigte Schritt, ab 0 gezählt.',
              labels: 'Alle Texte, die sie anzeigt, zum Übersetzen.',
              finished: 'Emittiert, wenn der letzte Schritt erledigt ist.',
              dismissed: 'Emittiert den Schritt, bei dem die Tour vorzeitig endete.',
              start: 'Startet die Tour, ab dem ersten oder dem angegebenen Schritt.',
              end: 'Beendet die Tour, als abgeschlossen oder abgebrochen.',
            },
          },
          NuiTourStep: {
            summary: 'Ein Schritt der Tour.',
            members: {
              target: 'Worauf er zeigt. Ohne Ziel erscheint die Karte in der Mitte.',
              title: 'Der Titel der Karte.',
              content: 'Der Text der Karte oder ein Template.',
              side: 'Auf welcher Seite des Ziels die Karte erscheint.',
              align: 'Wie die Karte am Ziel ausgerichtet ist.',
              padding: 'Abstand um das Ziel im Spotlight, in Pixeln.',
              interactive: 'Das Ziel lässt sich benutzen, während die Karte offen ist.',
              beforeShow:
                'Läuft, bevor der Schritt erscheint. Auf ein zurückgegebenes Promise wartet die Tour.',
            },
          },
        },
        keyboard: [
          [
            'Tab',
            'Wechselt zwischen den Buttons der Karte. Bei modalen Schritten bleibt der Fokus in der Karte.',
          ],
          [
            'Enter oder Leertaste',
            'Aktiviert den fokussierten Button: „Weiter“, „Zurück“ oder „Fertig“.',
          ],
          ['Esc', 'Beendet die Tour.'],
        ],
        notes: [
          'Jede Karte ist ein <code>dialog</code>, benannt nach ihrem Titel und beschrieben durch ihren Inhalt. Bei jedem Schritt springt der Fokus auf ihren Haupt-Button und kehrt am Ende der Tour dorthin zurück, wo er war.',
          'Modale Schritte machen den Rest der Seite inert. Interaktive Schritte sind nicht modal, sodass ihr Ziel per Tastatur ebenso erreichbar ist wie per Zeiger.',
          'Der Fortschritt ist Text, etwa „2 of 4“; die Punkte stellen ihn nur dar.',
        ],
      },
      dropzone: {
        name: 'Dropzone',
        title: 'Dropzone und Datei-Uploads für Angular',
        summary:
          'Dateien ablegen oder auswählen, mit Prüfungen, Vorschauen und Uploads samt Fortschritt.',
        description:
          'Barrierefreie Angular-Dropzone: Drag-and-drop, Ordner und Einfügen, Typ- und Größenprüfung, Bildvorschauen sowie Uploads mit Fortschritt und Wiederholung.',
        apiDescription:
          'API-Referenz der Dropzone von Needless UI: Dateien und Prüfungen von nui-dropzone, die Upload-Funktion und ihre Warteschlange, Outputs und Texte.',
        a11yDescription:
          'Tastatur und Barrierefreiheit der Dropzone von Needless UI: eine Zone, die ein Button ist, angesagte Ergebnisse sowie benannte Fortschrittsbalken und Aktionen.',
        overview: [
          'Eine Dropzone nimmt Dateien an, die auf ihr abgelegt, über die Dateiauswahl gewählt oder eingefügt werden. Abgelegte Ordner werden komplett durchlaufen, und jede Datei behält ihren Pfad.',
          'Jede Datei wird gegen <code>accept</code>, <code>maxSize</code>, <code>minSize</code>, <code>maxFiles</code> und deine <code>validate</code>-Funktion geprüft, und abgelehnte Dateien werden mit Grund aufgelistet. Bilder bekommen eine Vorschau.',
          'Ohne <code>upload</code>-Funktion hält die Dropzone die Dateien für ein Formular bereit, in <code>[(files)]</code>. Mit einer solchen Funktion lädt sie die Dateien hoch, jeweils ein paar gleichzeitig, mit Fortschritt, Abbrechen und erneutem Versuch. Gib das <code>signal</code> des Uploads an <code>fetch</code> weiter, damit Abbrechen ihn wirklich stoppt.',
        ],
        examples: {
          upload: {
            title: 'Uploads',
            text: 'Ein simulierter Upload meldet seinen Fortschritt in Schritten. Dateien mit „fail“ im Namen schlagen fehl, um den erneuten Versuch zu zeigen, und <code>directory</code> fügt einen Button zur Ordnerauswahl hinzu.',
          },
          attach: {
            title: 'Anhänge für ein Formular',
            text: 'Kein <code>upload</code>: Die Dropzone hält bis zu drei Dokumente in <code>[(files)]</code>, und der Text darin ersetzt den Standardtext.',
          },
        },
        api: {
          NuiDropzone: {
            summary: 'Ein Ort, um Dateien abzulegen oder auszuwählen.',
            members: {
              files: 'Die Dateien, die sie hält, der Reihe nach.',
              accept: 'Die erlaubten Dateitypen, wie bei <code>&lt;input type="file"&gt;</code>.',
              multiple: 'Mehr als eine Datei auf einmal.',
              directory: 'Bietet einen Button zur Auswahl eines Ordners.',
              maxFiles: 'Wie viele Dateien sie hält.',
              'maxSize, minSize': 'Die maximale und minimale Dateigröße in Byte.',
              validate: 'Prüft jede Datei. Gibt sie eine Meldung zurück, wird die Datei abgelehnt.',
              upload: 'Sendet eine Datei. Ohne diese Funktion werden Dateien nur gehalten.',
              concurrency: 'Wie viele Dateien gleichzeitig hochgeladen werden.',
              hint: 'Eine Zeile unter dem Text der Zone, etwa welche Dateien sie annimmt.',
              disabled: 'Sie nimmt keine Dateien an.',
              labels: 'Alle Texte, die sie anzeigt oder ansagt, zum Übersetzen.',
              uploaded:
                'Emittiert eine hochgeladene Datei mit dem, was <code>upload</code> zurückgegeben hat.',
              rejected: 'Emittiert die abgelehnten Dateien mit den Gründen.',
              queue:
                'Die Upload-Warteschlange, um per Code abzubrechen, zu wiederholen und den Fortschritt zu lesen.',
              take: 'Fügt per Code Dateien hinzu und prüft jede einzelne.',
            },
          },
          NuiUploader: {
            summary:
              'Sendet eine Datei: meldet den Fortschritt von 0 bis 1 und stoppt, sobald das Signal einen Abbruch meldet.',
            members: {
              '(file, context)': 'Gibt ein Promise mit dem zurück, was dein Server antwortet.',
            },
          },
        },
        keyboard: [
          ['Enter oder Leertaste', 'Öffnet auf der Zone die Dateiauswahl.'],
          [
            'Ctrl + V (⌘ + V auf dem Mac)',
            'Fügt auf der Zone Dateien aus der Zwischenablage hinzu.',
          ],
          ['Tab', 'Wechselt zwischen der Zone und den Aktionen jeder Datei.'],
        ],
        notes: [
          'Die Zone ist ein Button und funktioniert deshalb auch ohne Zeiger; der Hinweis beschreibt sie.',
          'Hinzugefügte und abgelehnte Dateien werden angesagt. Jeder Fortschrittsbalken ist eine <code>progressbar</code>, benannt nach seiner Datei, und jede Aktion ist nach dem benannt, was sie tut, etwa „Remove beach.jpg“.',
          'Vorschauen sind dekorativ: Welche Datei es ist, sagt der Dateiname.',
        ],
      },
      mask: {
        name: 'Eingabemaske',
        title: 'Eingabemasken-Direktive für Angular',
        summary:
          'Textfelder, die sich beim Tippen formatieren: Datumsangaben, Kartennummern, IBANs, Codes.',
        description:
          'Eingabemaske für Angular: formatiert Textfelder beim Tippen, ohne den Cursor zu versetzen, mit Hilfsfunktionen für Karten und IBANs sowie Formularvalidierung.',
        apiDescription:
          'API-Referenz der Eingabemaske von Needless UI: die Direktive nuiMask, ihre Tokens und ihr Wert sowie Hilfsfunktionen für Kartennummern und IBANs.',
        a11yDescription:
          'Barrierefreiheit der Eingabemaske von Needless UI: native Felder mit eigener Beschriftung, Zifferntastaturen auf Smartphones und Löschen über Literale hinweg.',
        overview: [
          'Eine Maske formatiert ein Textfeld schon beim Tippen: <code>00/00/0000</code> setzt die Schrägstriche, <code>AA 000 AA</code> nimmt abwechselnd Buchstaben und Ziffern an. Zeichen, die nicht passen, werden nicht übernommen, und tippt man mitten im Text, bleibt der Cursor an seiner Stelle.',
          'Masken bestehen aus Tokens und Literalen: <code>0</code> ist eine Ziffer, <code>a</code> ein Buchstabe, <code>*</code> beides; <code>A</code> und <code>X</code> tun dasselbe für Codes, in Großbuchstaben. Eigene Tokens ergänzt du mit <code>tokens</code>, oder du übergibst eine Funktion, die die Maske passend zur Eingabe wählt, so wie <code>nuiCardMask</code> je nach Kartenmarke.',
          'Der Wert ist das Angezeigte oder, mit <code>unmask</code>, nur die Daten. Die Maske funktioniert mit Signal Forms, Reactive Forms und <code>ngModel</code>, und ein unvollständiger Wert gilt als Fehler.',
        ],
        examples: {
          formats: {
            title: 'Formate',
            text: 'Ein Datum, eine Uhrzeit, ein Kfz-Kennzeichen und eine Farbe mit eigenem Token für Hexadezimalziffern.',
          },
          payment: {
            title: 'Zahlungsdaten',
            text: 'Felder mit Signal Forms. Die Kartenmaske folgt der Kartenmarke, der Sicherheitscode hat bei American Express vier Ziffern, und <code>nuiCardValid</code> und <code>nuiIbanValid</code> prüfen die Nummern.',
          },
        },
        api: {
          NuiMask: {
            summary: 'Eine Maske auf einem nativen Textfeld.',
            members: {
              nuiMask:
                'Die Maske oder eine Funktion, die passend zu den eingegebenen Daten eine wählt.',
              tokens: 'Maskenzeichen, die hinzukommen oder ersetzt werden.',
              unmask: 'Der Wert enthält nur die Daten, ohne die Literale.',
              value: 'Der Wert: das Angezeigte oder, mit <code>unmask</code>, die Daten.',
              raw: 'Die eingegebenen Daten, ohne die Literale.',
              complete: 'Jede Stelle der Maske ist ausgefüllt.',
            },
          },
          Helpers: {
            summary: 'Funktionen zum Formatieren, Prüfen und Erstellen von Masken.',
            members: {
              'nuiMaskFormat, nuiUnmask':
                'Formatieren einen Wert mit einer Maske oder lesen die Daten wieder heraus.',
              nuiCardMask:
                'Eine Maske für Kartennummern, gruppiert, wie ihre Kartenmarke sie druckt.',
              nuiCardBrand: 'Die Kartenmarke einer Kartennummer, erkannt an den ersten Ziffern.',
              'nuiCardValid, nuiLuhn':
                'Ob eine Kartennummer die Länge ihrer Kartenmarke hat und die Luhn-Prüfung besteht.',
              nuiIbanMask: 'Eine Maske für IBANs, so lang wie die IBAN des jeweiligen Landes.',
              nuiIbanValid:
                'Ob eine IBAN die Länge ihres Landes und die richtigen Prüfziffern hat.',
            },
          },
        },
        keyboard: [
          ['Rücktaste', 'Löscht das Zeichen vor dem Cursor und überspringt dabei Literale.'],
          ['Entf', 'Löscht das Zeichen nach dem Cursor und überspringt dabei Literale.'],
        ],
        notes: [
          'Die Maske arbeitet auf deinem eigenen <code>&lt;input&gt;</code>, daher bleiben Beschriftung und Hinweistext so, wie du sie geschrieben hast. Schreib dort, was erwartet wird: Eine Maske ist keine Anleitung.',
          'Masken aus Ziffern setzen <code>inputmode="numeric"</code>, damit Smartphones eine Zifferntastatur zeigen, es sei denn, das Feld legt den Modus selbst fest.',
          'Ziffern aller Schriften werden angenommen und als 0 bis 9 geschrieben.',
        ],
      },
      'phone-field': {
        name: 'Telefonfeld',
        title: 'Telefonnummern-Eingabe für Angular',
        summary: 'Eine Länderauswahl und eine Nummer, gruppiert, wie das Land sie schreibt.',
        description:
          'Barrierefreie Telefonnummern-Eingabe für Angular: Länderauswahl, nach Landesformat gruppierte Nummern, getippte oder eingefügte Vorwahlen und Werte in E.164.',
        apiDescription:
          'API-Referenz des Telefonfelds von Needless UI: Wert und Land von nui-phone-field, angebotene Länder und Hilfsfunktionen zum Lesen und Schreiben von Nummern.',
        a11yDescription:
          'Barrierefreiheit des Telefonfelds von Needless UI: eine benannte Länderauswahl, die Ansage des Landes, das eine Vorwahl wählt, und Autofill im Browser.',
        overview: [
          'Ein Telefonfeld besteht aus einer Länderauswahl und einer Nummer. Die Nummer wird schon beim Tippen so gruppiert, wie ihr Land Nummern schreibt, und der Wert ist die Nummer in E.164, etwa <code>+393331234567</code>.',
          'Nummern werden so eingetippt, wie man sie kennt. Eine führende 0 (oder die 1 vor einer nordamerikanischen Nummer) gilt als Präfix für Inlandsgespräche (die Verkehrsausscheidungsziffer) und fließt nicht in den Wert ein. Eine getippte oder eingefügte Ländervorwahl wie <code>+44</code> oder <code>0044</code> wählt ihr Land, und wo sich mehrere Länder eine Ländervorwahl teilen, tut das auch die Ortsvorwahl.',
          'Das erste Land ist das der Locale, und <code>countries</code> schränkt die Liste ein. In Formularen ist eine Nummer, die für ihr Land zu kurz oder zu lang ist, ein Fehler. Für eine vollständige Validierung prüfe Nummern zusätzlich auf dem Server.',
        ],
        examples: {
          basic: {
            title: 'Eine Nummer',
            text: 'Beginne mit <code>+</code> und einer Ländervorwahl, um beim Tippen das Land zu wechseln.',
          },
          countries: {
            title: 'Länder deiner Wahl',
            text: '<code>countries</code> bietet elf an, das Feld funktioniert mit einem reaktiven <code>FormControl</code>, und <code>nuiFormatPhone</code> gibt den Wert wieder lesbar formatiert aus.',
          },
        },
        api: {
          NuiPhoneField: {
            summary: 'Ein Feld für Telefonnummern.',
            members: {
              value: 'Die Nummer in E.164 oder leer.',
              country: 'Das Land, als Regionscode.',
              countries: 'Die angebotenen Länder, als Regionscodes.',
              locale: 'Die Sprache der Ländernamen.',
              label: 'Benennt die Nummer, wenn kein <code>&lt;label for&gt;</code> das tut.',
              inputId: 'Die ID der Nummer, für <code>&lt;label for&gt;</code>.',
              placeholder: 'Text, der angezeigt wird, solange die Nummer leer ist.',
              invalid: 'Markiert die Nummer als ungültig.',
              disabled: 'Lässt sich nicht ändern.',
              labels: 'Alle Texte, die das Feld ansagt, zum Übersetzen.',
            },
          },
          Helpers: {
            summary: 'Funktionen für Telefonnummern.',
            members: {
              nuiParsePhone:
                'Zerlegt eine beliebig geschriebene Nummer in Region, Ländervorwahl und nationale Nummer.',
              nuiFormatPhone:
                'Schreibt eine Nummer so gruppiert, wie ihr Land es tut, oder in E.164.',
              nuiPhoneValid:
                'Ob eine Nummer eine bekannte Ländervorwahl und die Länge ihres Landes hat.',
            },
          },
        },
        keyboard: [
          ['Buchstaben auf der Länderauswahl', 'Springt zu den Ländern, die mit ihnen beginnen.'],
          ['Enter oder Leertaste', 'Öffnet die Länderliste oder wählt ein Land.'],
          [
            'Rücktaste',
            'Löscht in der Nummer eine Ziffer und überspringt dabei Leerzeichen und Klammern.',
          ],
        ],
        notes: [
          'Die Länderauswahl heißt „Country code“ und liest ihre Flagge und Vorwahl vor. Wählt eine Länder- oder Ortsvorwahl ein Land, wird das neue Land angesagt.',
          'Benenne die Nummer mit <code>&lt;label for&gt;</code> und <code>inputId</code> oder mit <code>label</code>.',
          'Die Nummer hat <code>autocomplete="tel"</code>, sodass Browser sie samt Ländervorwahl ausfüllen können, und Smartphones zeigen eine Telefontastatur.',
        ],
      },
      'color-picker': {
        name: 'Farbwähler',
        title: 'OKLCH-Farbwähler für Angular',
        summary:
          'Eine Farbe in OKLCH, mit Schiebereglern, Farbfeldern, Pipette und Kontrastprüfung.',
        description:
          'Barrierefreier Angular-Farbwähler in OKLCH: P3-Farben mit großem Farbumfang, jede CSS-Farbsyntax, Farbfelder, Pipette und eine Kontrastprüfung nach WCAG.',
        apiDescription:
          'API-Referenz des Farbwählers von Needless UI: Wert, Format und Farbumfang von nui-color-picker, Farbfelder und Kontrast sowie Hilfsfunktionen für Farben.',
        a11yDescription:
          'Tastatur und Barrierefreiheit des Farbwählers von Needless UI: die Fläche als Schieberegler mit zwei Werten, native Schieberegler und Kontraststufen in Worten.',
        overview: [
          'Der Farbwähler arbeitet in OKLCH, dem wahrnehmungsbasierten Farbraum des modernen CSS. Quer über die Fläche reicht das Chroma von Grau bis zum Höchstwert, den der Bildschirm bei dieser Helligkeit zeigen kann. So ist jeder Punkt eine nutzbare Farbe, und der Griff bleibt an seiner Stelle, während sich der Farbton dreht.',
          'Das Feld nimmt jede CSS-Farbe an, auch Farbnamen, und der Format-Button schreibt den Wert als Hex, <code>rgb()</code>, <code>hsl()</code>, <code>oklch()</code> oder <code>color(display-p3)</code>. Eine Farbe außerhalb des Farbumfangs eines Formats wird wie in CSS in diesen abgebildet, Helligkeit und Farbton bleiben dabei erhalten.',
          'Füge <code>swatches</code> hinzu, um aus Farbfeldern zu wählen, und <code>contrastWith</code>, um den Kontrast der Farbe zu einem Hintergrund so zu prüfen, wie WCAG 2 ihn misst. Wo der Browser eine Pipette hat, nimmt ein Button eine Farbe vom Bildschirm auf.',
        ],
        examples: {
          brand: {
            title: 'Eine Markenfarbe',
            text: 'Benannte Farbfelder und der Kontrast von weißem Text auf der Farbe: Wähle eine helle, und AA fällt durch.',
          },
          wide: {
            title: 'Großer Farbumfang',
            text: '<code>gamut="p3"</code> füllt die Fläche mit Farben aus Display P3, und eine gestrichelte Linie zeigt, wo sRGB endet. Der Wert bleibt in <code>oklch()</code>.',
          },
          popover: {
            title: 'In einem Popover',
            text: 'Ein Button, der die Farbe zeigt, öffnet den Farbwähler in einem <a href="/components/popover">Popover</a>.',
          },
        },
        api: {
          NuiColorPicker: {
            summary: 'Ein Farbwähler in OKLCH.',
            members: {
              value: 'Die Farbe, im gewählten Format geschrieben. Leer, bis eine gewählt ist.',
              format: 'Wie der Wert geschrieben wird.',
              formats: 'Die Formate, die der Format-Button durchläuft.',
              gamut: 'Die Farben, die die Fläche enthält: sRGB oder Display P3.',
              alpha: 'Zeigt den Schieberegler für die Deckkraft.',
              swatches: 'Farben zur Auswahl, mit Namen.',
              contrastWith: 'Ein Hintergrund, gegen den der Kontrast geprüft wird.',
              eyeDropper: 'Zeigt die Pipette, wo der Browser eine hat.',
              disabled: 'Lässt sich nicht ändern.',
              labels: 'Alle Texte, die der Farbwähler ansagt, zum Übersetzen.',
              color: 'Die gewählte Farbe, in OKLCH.',
            },
          },
          Helpers: {
            summary: 'Funktionen für Farben.',
            members: {
              nuiParseColor: 'Liest eine Farbe in jeder CSS-Syntax.',
              nuiFormatColor: 'Schreibt eine Farbe in einem Format.',
              nuiToGamut: 'Bildet eine Farbe wie CSS in sRGB oder Display P3 ab.',
              nuiContrast: 'Das Kontrastverhältnis einer Farbe auf einem Hintergrund, nach WCAG 2.',
            },
          },
        },
        keyboard: [
          ['Pfeil nach links und rechts', 'Auf der Fläche weniger oder mehr Chroma.'],
          ['Pfeil nach oben und unten', 'Auf der Fläche heller oder dunkler.'],
          ['Umschalt + Pfeiltasten', 'Bewegen den Griff zehnmal so weit.'],
          ['Pos1 und Ende', 'Auf der Fläche kein oder maximales Chroma.'],
          ['Bild auf und Bild ab', 'Auf der Fläche deutlich heller oder dunkler.'],
        ],
        notes: [
          'Der Griff der Fläche ist ein <code>slider</code> namens „Color“, der beide Werte ansagt, etwa „Lightness 62%, chroma 75%“. Farbton und Deckkraft sind native Range-Eingabefelder.',
          'Farbfelder sind Buttons, die nach ihrer Beschriftung benannt sind und als gedrückt gelten, wenn sie der Farbe entsprechen.',
          'AA und AAA sagen „passes“ oder „fails“ in Worten, nicht nur per Farbe, und im Forced-Colors-Modus bleiben die Farben selbst erhalten.',
        ],
      },
      carousel: {
        name: 'Karussell',
        title: 'Karussell- und Slider-Komponente für Angular',
        summary:
          'Folien in einer Reihe, die scrollt und einrastet, mit Buttons, Punkten und Rotation.',
        description:
          'Barrierefreies Angular-Karussell: natives Scroll-Snapping und Wischen, mehrere Folien pro Ansicht, Punkte, Loop und Rotation, die nach WCAG pausiert und stoppt.',
        apiDescription:
          'API-Referenz des Karussells von Needless UI: Folien pro Ansicht, Index, Loop und Rotation von nui-carousel, seine Methoden und die Direktive nuiCarouselSlide.',
        a11yDescription:
          'Tastatur und Barrierefreiheit des Karussells von Needless UI: das Carousel-Pattern von WAI-ARIA, eine Rotationssteuerung, benannte Folien und angesagte Wechsel.',
        overview: [
          'Ein Karussell zeigt Folien in einer Reihe, die scrollt und einrastet: Wischen, Trackpads und die Pfeiltasten bewegen es nativ, ebenso seine Zurück- und Weiter-Buttons und seine Punkte. Markiere jede Folie mit <code>nuiCarouselSlide</code>, benannt nach ihrem Titel.',
          'Zeige eine Folie auf einmal oder mit <code>perView</code> mehrere, oder lass Folien mit <code>perView="auto"</code> ihre eigene Breite behalten. <code>[(index)]</code> bindet die erste sichtbare Folie, und mit <code>loop</code> geht es am Ende wieder von vorn los.',
          'Mit <code>autoplay</code> dreht es sich von selbst weiter; eine Rotationssteuerung steht davor. Die Rotation pausiert unter dem Mauszeiger und stoppt endgültig, sobald der Tastaturfokus hineinkommt, wie es das WAI-ARIA-Pattern verlangt.',
        ],
        examples: {
          featured: {
            title: 'Empfohlene Reisen',
            text: 'Alle sechs Sekunden eine neue Folie, und der Ring an der Rotationssteuerung füllt sich bis dahin. Fahre mit der Maus darüber, um die Rotation zu pausieren, oder wechsle mit Tab hinein, um sie zu stoppen.',
          },
          shelf: {
            title: 'Ein Regal voller Karten',
            text: '<code>perView="auto"</code> behält die Breite jeder Karte bei und zeigt so viele, wie hineinpassen. Die Punkte folgen dem Wischen, und <code>[(index)]</code> verrät, wo es gerade steht.',
          },
        },
        api: {
          NuiCarousel: {
            summary: 'Ein Karussell aus Folien.',
            members: {
              label: 'Benennt das Karussell.',
              index: 'Die erste sichtbare Folie, ab 0.',
              perView:
                'Gleichzeitig sichtbare Folien oder <code>auto</code> für Folien, die ihre Breite selbst bestimmen.',
              gap: 'Abstand zwischen den Folien, als beliebige CSS-Länge.',
              loop: 'Nach der letzten Folie geht es mit der ersten weiter, und umgekehrt.',
              autoplay:
                'Millisekunden zwischen den Folien, wenn es sich von selbst dreht; bei 0 dreht es sich nicht.',
              'controls, indicators': 'Die Zurück- und Weiter-Buttons sowie die Punkte.',
              labels: 'Alle Texte des Karussells, zum Übersetzen.',
              'next, previous': 'Geht eine Folie weiter oder zurück.',
              goTo: 'Scrollt zu einer Folie.',
            },
          },
          NuiCarouselSlide: {
            summary: 'Eine Folie.',
            members: { nuiCarouselSlide: 'Ihr Titel, der statt ihrer Position vorgelesen wird.' },
          },
        },
        keyboard: [
          [
            'Tab',
            'Wechselt zur Rotationssteuerung, zu den Buttons, den Folien und dann den Punkten.',
          ],
          [
            'Pfeil nach links und rechts auf den Folien',
            'Scrollen zur vorigen oder nächsten Folie.',
          ],
          ['Enter oder Leertaste', 'Aktiviert den fokussierten Button oder Punkt.'],
        ],
        notes: [
          'Das Karussell ist eine <code>region</code> mit <code>aria-roledescription="carousel"</code> und jede Folie eine <code>group</code> mit <code>aria-roledescription="slide"</code>, benannt etwa „Lake Como, 2 of 4“.',
          'Die Rotationssteuerung steht an erster Stelle und sagt, was sie tun wird. Die Rotation pausiert unter dem Mauszeiger und stoppt, sobald der Tastaturfokus hineinkommt, sodass sie nie verschiebt, was jemand gerade liest.',
          'Wo das Karussell nach einem Wischen, einem Button oder einem Punkt landet, wird angesagt; die Rotation bleibt stumm.',
        ],
      },
      editor: {
        name: 'Rich-Text-Editor',
        title: 'Rich-Text-Editor-Komponente für Angular',
        summary: 'Überschriften, Listen, Links und Formate, mit Toolbar und Markdown beim Tippen.',
        description:
          'Barrierefreier Angular-Rich-Text-Editor: Toolbar, Tastenkürzel, Markdown beim Tippen, sauberes Einfügen, Links und Undo, mit HTML oder Markdown als Wert.',
        apiDescription:
          'API-Referenz des Rich-Text-Editors von Needless UI: Wert und Format von nui-editor, Toolbar-Buttons, Texte, Befehle und die HTML- und Markdown-Konverter.',
        a11yDescription:
          'Tastatur und Barrierefreiheit des Rich-Text-Editors von Needless UI: ein mehrzeiliges Textfeld, eine WAI-ARIA-Toolbar, Tastenkürzel und ein Link-Dialog.',
        overview: [
          'Der Editor schreibt Absätze, Überschriften, Zitate, Listen, Codeblöcke und Trennlinien, formatiert fett, kursiv, unterstrichen, durchgestrichen und als Code und setzt Links. Sein Wert ist HTML oder, mit <code>format="markdown"</code>, Markdown, und er funktioniert mit Formularen.',
          'Er führt ein eigenes Dokument und verarbeitet jede Änderung selbst, sodass Eingefügtes oder Hineingezogenes die Seite nur als dieses Dokument erreicht: Struktur und Formate bleiben erhalten, auch aus Google Docs und Word, während Skripte, Styles und unsichere Links verschwinden.',
          'Tippe Markdown, und daraus wird Formatierung: <code># </code> beginnt eine Überschrift, <code>- </code> eine Liste, und <code>**bold**</code> und <code>`code`</code> werden formatiert, sobald du sie schließt. Jedes Format hat sein Tastenkürzel und seinen Button in der Toolbar.',
        ],
        examples: {
          comment: {
            title: 'Ein Kommentar',
            text: '<code>tools</code> legt die Buttons der Toolbar fest. Tippe Markdown, füge Text von überall ein und sieh dir das HTML an, das der Editor speichert.',
          },
          markdown: {
            title: 'Markdown lesen und schreiben',
            text: 'Mit <code>format="markdown"</code> ist der Wert Markdown: eingelesen mit verschachtelten Listen, Zitaten und Code und beim Bearbeiten laufend zurückgeschrieben.',
          },
        },
        api: {
          NuiEditor: {
            summary: 'Ein Rich-Text-Editor.',
            members: {
              value: 'Der Inhalt als HTML oder Markdown; leer, wenn es keinen Text gibt.',
              format: 'Wie der Wert geschrieben wird.',
              tools:
                'Die Buttons der Toolbar in ihrer Reihenfolge, <code>|</code> zwischen Gruppen.',
              'label, labelledBy, describedBy': 'Benennen und beschreiben den Inhalt.',
              placeholder: 'Wird angezeigt, solange der Editor leer ist.',
              'readonly, disabled, invalid':
                'Zeigt den Inhalt ohne Bearbeitung; schaltet den Editor ab; markiert den Inhalt als ungültig.',
              labels: 'Alle Texte des Editors, zum Übersetzen.',
              run: 'Führt einen Befehl der Toolbar aus.',
              'undo, redo, focus':
                'Macht rückgängig, stellt wieder her und setzt den Fokus in den Text.',
            },
          },
          Helpers: {
            summary: 'Funktionen zum Umwandeln von Dokumenten.',
            members: {
              'nuiEditorToHtml, nuiEditorToMarkdown':
                'Schreiben ein Dokument als HTML oder Markdown.',
              'nuiEditorFromHtml, nuiEditorFromMarkdown':
                'Lesen HTML oder Markdown in ein Dokument ein und behalten, was der Editor darstellen kann.',
            },
          },
        },
        keyboard: [
          [
            'Ctrl + B, I oder U',
            'Fett, kursiv oder unterstrichen. Auf Apple-Geräten ⌘ statt Ctrl.',
          ],
          ['Ctrl + K', 'Fügt einen Link ein oder bearbeitet ihn.'],
          [
            'Ctrl + Alt + 1, 2 oder 3',
            'Eine Überschrift; Ctrl + Alt + 0 macht wieder einen Absatz daraus.',
          ],
          ['Ctrl + Umschalt + 7 oder 8', 'Eine nummerierte Liste oder eine Aufzählung.'],
          [
            'Tab und Umschalt + Tab in einer Liste',
            'Rücken ein oder aus; anderswo verlässt Tab den Editor.',
          ],
          ['Ctrl + Z, Ctrl + Umschalt + Z', 'Rückgängig machen und wiederholen.'],
          ['Pfeil nach links und rechts in der Toolbar', 'Wechseln zwischen ihren Buttons.'],
        ],
        notes: [
          'Der Inhalt ist eine <code>textbox</code> mit <code>aria-multiline</code>, benannt über <code>label</code>, mit seinem Platzhalter in <code>aria-placeholder</code>.',
          'Die Toolbar ist eine WAI-ARIA-Toolbar mit einem einzigen Tab-Stopp: Formate sind Toggle-Buttons mit <code>aria-pressed</code>, und jeder Button nennt sein Tastenkürzel in <code>aria-keyshortcuts</code> und in seinem Tooltip.',
          'Ein Befehl aus der Toolbar schickt den Fokus zurück in den Text, und der Link-Dialog gibt ihn mit Esc dorthin zurück. Tab bleibt nie hängen: Außerhalb von Listen verlässt es den Editor.',
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
      'browser-support': {
        title: 'Browserunterstützung',
        description:
          'Welche Browser Needless UI unterstützt und testet: Chrome-, Edge-, Firefox- und Safari-Versionen, Smartphones, Touchscreens und was ältere Browser weglassen.',
        blocks: [
          {
            kind: 'p',
            html: 'Needless UI baut auf nativen Elementen und neueren Funktionen der Webplattform auf, etwa der Popover-API. Unterstützt werden die unten aufgeführten Browser ab der jeweils angegebenen Version. In älteren Versionen öffnen sich Menüs, Selects und Popover nicht.',
          },
          { kind: 'h2', id: 'supported', text: 'Unterstützte Browser' },
          {
            kind: 'table',
            caption: 'Älteste unterstützte Versionen',
            head: ['Browser', 'Ab Version', 'Nötig für'],
            rows: [
              [
                'Chrome und Edge, auf dem Computer und unter Android',
                '120',
                'Mit CSS-Masken gezeichnete Icons und <code>:dir()</code> für Text von rechts nach links',
              ],
              ['Firefox, auf dem Computer und unter Android', '125', 'Die Popover-API'],
              ['Safari auf dem Mac', '17', 'Die Popover-API'],
              ['Alle Browser auf iPhone und iPad', 'iOS 17', 'Die Popover-API'],
              ['Samsung Internet unter Android', '25', 'Wie bei Chrome'],
            ],
          },
          {
            kind: 'p',
            html: 'Andere Browser auf Chromium-Basis wie Opera und Brave richten sich nach den Versionen von Chrome. Angular 22 selbst braucht Chrome, Edge und Firefox 119 sowie Safari 17. Internet Explorer und der alte Edge aus der Zeit vor Chromium werden nicht unterstützt.',
          },
          { kind: 'h2', id: 'tested', text: 'Getestete Browser' },
          {
            kind: 'p',
            html: 'Bei jeder Änderung laufen die Tests jeder Komponente in den Engines von Chrome, Firefox und Safari. Vor einem Release wird jede Seite dieser Dokumentation in jeder Engine geprüft, auf einem Computer und auf einem Smartphone mit Touch-Eingabe: Sie muss laden, jedes Menü und jedes Pop-up öffnen, auf den Bildschirm passen und die Barrierefreiheitsprüfungen bestehen.',
          },
          {
            kind: 'table',
            caption: 'Getestete Browser',
            head: ['Engine', 'Version', 'Getestet auf'],
            rows: [
              [
                'Chromium (in Chrome und Edge)',
                '153',
                'Computer und Android-Smartphone mit Touch-Eingabe',
              ],
              ['Firefox', '155', 'Computer und Touchscreen in Smartphone-Größe'],
              ['WebKit (in Safari)', '26.6', 'Computer und iPhone mit Touch-Eingabe'],
              ['Safari auf dem iPhone', 'iOS 17.5 und 18.6', 'iPhone-Simulator'],
            ],
          },
          {
            kind: 'p',
            html: 'Die Versionen zwischen der ältesten unterstützten und den getesteten werden nicht einzeln geprüft: Sie werden unterstützt, weil sie alle Funktionen haben, die die Komponenten brauchen.',
          },
          { kind: 'h2', id: 'newer', text: 'Extras in neueren Browsern' },
          {
            kind: 'p',
            html: 'Ein paar Details nutzen Funktionen, die nur neuere Browser haben. Andere Browser lassen sie weg, und nichts geht kaputt:',
          },
          {
            kind: 'table',
            caption: 'Details, die neuere Browser brauchen',
            head: ['Detail', 'Browser', 'In anderen Browsern'],
            rows: [
              [
                'Popover, Menüs und Dialoge werden beim Ein- und Ausblenden animiert',
                'Chrome und Edge, Firefox 129, Safari 17.5',
                'Sie erscheinen und verschwinden sofort',
              ],
              ['Squircle-Ecken (<code>corner-shape</code>)', 'Chrome und Edge 139', 'Runde Ecken'],
              [
                'Eine Farbe irgendwo auf dem Bildschirm aufnehmen',
                'Chrome und Edge auf dem Computer',
                'Kein Pipetten-Button',
              ],
              [
                'Einen ganzen Ordner in der Dropzone auswählen',
                'Browser auf dem Computer',
                'Nur Dateien',
              ],
              [
                'Der Ring an der Rotationssteuerung des Karussells füllt sich fließend',
                'Chrome und Edge, Firefox 128, Safari',
                'Er füllt sich auf einen Schlag',
              ],
            ],
          },
          { kind: 'h2', id: 'touch', text: 'Smartphones und Touchscreens' },
          {
            kind: 'p',
            html: 'Jede Komponente lässt sich per Touch bedienen. Die Griffe des Splitters, die Farbfläche, Spaltenränder und Toasts folgen dem Finger, ohne dass die Seite scrollt; das Karussell nutzt zum Wischen das native Scrollen des Browsers, und ein langes Drücken hebt einen Termin im Terminplaner an. Auf Touchscreens haben Felder mindestens 16 px große Schrift, damit iPhones nicht hineinzoomen, und Wörter, die die Tastatur erst zusammensetzt, wie es Android-Tastaturen tun, kommen vollständig an.',
          },
          {
            kind: 'p',
            html: 'Touchscreens kennen kein Hovern, deshalb ergänzt eine Hovercard nur, was ohnehin auf der Seite steht: Leg nichts Wesentliches hinein. Auf dem Smartphone fügt die Enter-Taste im Chat einen Zeilenumbruch ein, und gesendet wird mit dem Button.',
          },
          { kind: 'h2', id: 'keyboard', text: 'Die Tastatur in Safari' },
          {
            kind: 'p',
            html: 'Standardmäßig springt die Tab-Taste in Safari nur zwischen Textfeldern und Einblendmenüs. Um jeden Button und jeden Link zu erreichen, aktiviere in den Safari-Einstellungen unter „Erweitert“ die Option „Tab drücken, um jedes Objekt auf einer Webseite hervorzuheben“ („Press Tab to highlight each item on a webpage“) oder drücke Wahltaste + Tab. Außerdem fokussiert Safari einen Button nicht, wenn man ihn anklickt; die Komponenten gleichen das aus, sodass die Tastaturbedienung nach einem Klick wie in anderen Browsern weitergeht.',
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
