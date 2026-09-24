import type { Messages } from './types';

export const messages: Messages = {
  site: {
    name: 'Needless UI',
    tagline: 'The Needlessly Engineered Styling Toolkit',
    description:
      'Composants Angular accessibles et personnalisables : éléments natifs, design tokens W3C et une feuille de style pour tout framework. Open source, licence MIT.',
    skipToContent: 'Aller au contenu principal',
    nav: {
      label: 'Menu principal',
      home: 'Accueil de Needless UI',
      components: 'Composants',
      guides: 'Guides',
      github: 'GitHub',
      language: 'Langue',
      theme: 'Thème',
      themes: { system: 'Système', light: 'Clair', dark: 'Sombre' },
    },
    footer: {
      license: 'Publié sous licence MIT.',
      source: 'Code source',
      built: 'Inutilement sophistiqué, soigneusement construit.',
      legal: 'Mentions légales',
      privacy: 'Politique de confidentialité',
    },
    emergency: {
      label: 'NE PAS APPUYER',
      cover: 'Soulever le capot de sécurité',
      button: 'Ne pas appuyer',
      armed: 'Le capot est levé. Réfléchissez bien.',
      falling: 'Protocole d’urgence enclenché…',
      fallen:
        'La gravité est désormais permanente. Actualisez la page pour reconstruire l’univers.',
      reduced:
        'Votre système demande moins d’animations, la gravité reste donc coupée. Quelle chance.',
    },
  },

  home: {
    title: 'Needless UI · Composants Angular accessibles, inutilement bien conçus',
    description:
      'Needless UI est une bibliothèque de composants Angular open source : éléments natifs, CSS indépendant du framework, design tokens W3C et WCAG 2.2 AA intégrés.',
    eyebrow: 'Open source · Angular 22 · MIT',
    heading: 'Des composants d’interface, inutilement bien conçus.',
    lead: 'Needless UI met en forme les <strong>éléments natifs</strong> avec une seule feuille de style indépendante du framework et des design tokens du W3C. Ses directives Angular y ajoutent le comportement d’Angular Aria : chaque composant est accessible dès le premier rendu.',
    getStarted: 'Commencer',
    browse: 'Parcourir les composants',
    featuresTitle: 'Sa raison d’être',
    features: [
      {
        title: 'Les éléments natifs d’abord',
        text: '<code>&lt;button nuiButton&gt;</code> est un vrai bouton. Formulaires, clavier et lecteurs d’écran fonctionnent, puisque rien ne vient l’envelopper.',
      },
      {
        title: 'Une feuille de style pour tous les frameworks',
        text: 'Les composants sont du CSS pur, rangé dans des couches de cascade : Angular aujourd’hui, React ensuite et HTML simple, toujours.',
      },
      {
        title: 'Votre CSS a toujours le dernier mot',
        text: 'Tout est livré dans <code>@layer nui</code> : vos propres styles l’emportent sans <code>!important</code> ni bataille de spécificité.',
      },
      {
        title: 'Accessible par construction',
        text: 'Chaque paire de couleurs est vérifiée selon les WCAG 2.2 AA lors de la génération de la palette. Focus, couleurs forcées et réduction des animations sont gérés pour vous.',
      },
      {
        title: 'Des design tokens standard',
        text: 'Les fichiers de tokens au format W3C DTCG sont compilés en propriétés personnalisées CSS, avec des thèmes clair, sombre et imbriqués.',
      },
      {
        title: 'Un Angular moderne',
        text: 'Signal inputs, zoneless, rendu côté serveur et un point d’entrée par composant : les applications n’embarquent que ce qu’elles importent.',
      },
    ],
    codeTitle: 'Deux imports et le tour est joué',
    codeText:
      'Ajoutez le paquet, importez la feuille de style une fois, puis utilisez les composants dans n’importe quel composant standalone.',
  },

  components: {
    title: 'Composants',
    description:
      'Parcourez les composants Needless UI pour Angular : boutons, boîtes de dialogue et menus accessibles, avec exemples interactifs, API et navigation au clavier.',
    intro:
      'Chaque composant repose sur des éléments natifs et est documenté avec des exemples interactifs, son API et son comportement au clavier.',
    tabsLabel: 'Sections de la documentation',
    tabs: { overview: 'Présentation', api: 'API', accessibility: 'Accessibilité' },
    sidenavLabel: 'Composants',
    onThisPage: 'Sur cette page',
    example: {
      showCode: 'Afficher le code',
      hideCode: 'Masquer le code',
      copy: 'Copier',
      copied: 'Copié',
      files: 'Fichiers source',
    },
    api: {
      import: 'Import',
      selector: 'Sélecteur',
      exportAs: 'Exporté sous',
      members: 'Propriétés',
      name: 'Nom',
      type: 'Type',
      default: 'Par défaut',
      description: 'Description',
      kinds: { input: 'Input', model: 'Bidirectionnel', output: 'Output', method: 'Méthode' },
    },
    a11y: {
      keyboard: 'Interaction au clavier',
      key: 'Touche',
      action: 'Action',
      notes: 'Notes d’accessibilité',
    },
    titles: {
      api: (name) => `API du composant ${name}`,
      accessibility: (name) => `Accessibilité du composant ${name}`,
    },
    items: {
      button: {
        name: 'Button',
        title: 'Composant bouton pour Angular',
        summary: 'Actions et liens, mis en forme directement sur les boutons et liens natifs.',
        description:
          'Directive Angular accessible pour les boutons et ancres natifs, avec quatre variantes, trois tons, trois tailles et la prise en charge des liens.',
        apiDescription:
          'Référence de l’API du bouton Needless UI : la directive nuiButton, son sélecteur et ses inputs variant, tone, size et disabled.',
        a11yDescription:
          'Comportement au clavier et accessibilité du bouton Needless UI : sémantique native, indicateur de focus, contraste, taille de cible et liens désactivés.',
        overview: [
          'La directive <code>nuiButton</code> met en forme un <code>&lt;button&gt;</code> ou un <code>&lt;a&gt;</code> natif. L’élément conserve sa sémantique, son comportement au clavier et sa participation aux formulaires ; la directive se contente de reporter ses inputs sur les attributs data que cible la feuille de style.',
          'Utilisez un <code>&lt;button&gt;</code> pour les actions et un <code>&lt;a&gt;</code> pour la navigation. Les deux ont le même aspect, et tous deux prennent en charge <code>disabled</code>.',
        ],
        examples: {
          variants: {
            title: 'Variantes',
            text: 'Quatre styles de remplissage, du plus visible au plus discret. Utilisez un seul bouton plein par vue, pour l’action principale.',
          },
          tones: {
            title: 'Tons',
            text: 'Les tons changent la palette : accent pour le parcours principal, neutral pour les actions secondaires, danger pour les actions destructrices.',
          },
          sizes: {
            title: 'Tailles',
            text: 'Trois hauteurs : 28, 36 et 44 pixels. Même la plus petite dépasse la taille de cible minimale des WCAG 2.2.',
          },
          links: {
            title: 'Liens et boutons désactivés',
            text: 'Une ancre ne peut pas être désactivée nativement : un lien désactivé reçoit donc <code>aria-disabled="true"</code> et ses clics sont bloqués, même avec <code>routerLink</code>.',
          },
        },
        api: {
          NuiButton: {
            summary:
              'Donne l’apparence d’un bouton à un <code>&lt;button&gt;</code> ou à un <code>&lt;a&gt;</code> natif.',
            members: {
              variant:
                'Style de remplissage : <code>solid</code>, <code>soft</code>, <code>outline</code> ou <code>ghost</code>.',
              tone: 'Palette de couleurs : <code>accent</code>, <code>neutral</code> ou <code>danger</code>.',
              size: 'Hauteur, padding et taille de police : <code>sm</code>, <code>md</code> ou <code>lg</code>.',
              disabled:
                'Désactive le bouton. Sur une ancre, définit <code>aria-disabled</code> et bloque l’activation.',
            },
          },
        },
        keyboard: [
          ['Tab', 'Place le focus sur le bouton ou le lien.'],
          ['Entrée', 'Active le bouton ou suit le lien.'],
          ['Espace', 'Active le bouton. Sur un lien, fait défiler la page (comportement natif).'],
        ],
        notes: [
          'Le nom accessible est le texte de l’élément. Un bouton qui ne contient qu’une icône a besoin d’un <code>aria-label</code>.',
          'Le texte atteint un rapport de contraste de 4,5:1 pour chaque variante, ton et thème ; le générateur de palette le garantit.',
          'L’indicateur de focus est un contour de 2 px, avec un contraste d’au moins 3:1 par rapport à la page dans les deux thèmes.',
          'Un <code>&lt;button&gt;</code> désactivé sort de l’ordre de tabulation. Un lien désactivé reste focalisable, pour que les utilisateurs de lecteurs d’écran puissent le trouver, et il est annoncé comme désactivé.',
          'En mode couleurs forcées, la bordure transparente devient un contour visible aux couleurs du système.',
        ],
      },

      dialog: {
        name: 'Dialog',
        title: 'Composant boîte de dialogue pour Angular',
        summary:
          'Une fenêtre modale basée sur l’élément dialog natif, dont le focus est géré par le navigateur.',
        description:
          'Boîte de dialogue Angular accessible, basée sur l’élément dialog natif : focus modal, fermeture par Échap ou clic sur le fond, valeurs de retour.',
        apiDescription:
          'Référence de l’API de la boîte de dialogue Needless UI : nuiDialog avec open bidirectionnel, tailles, valeurs de retour, titre, description et fermeture.',
        a11yDescription:
          'Comportement au clavier et accessibilité de la boîte de dialogue Needless UI : focus modal, Échap, restauration du focus et contenu étiqueté.',
        overview: [
          'La directive <code>nuiDialog</code> transforme un <code>&lt;dialog&gt;</code> natif en boîte de dialogue Needless UI. Le navigateur assure le comportement modal : la page en arrière-plan devient inerte, le focus reste à l’intérieur, Échap ferme la boîte de dialogue et le focus revient à l’élément qui l’a ouverte.',
          'Liez <code>[(open)]</code> à un signal et donnez une valeur aux boutons de fermeture avec <code>nuiDialogClose="…"</code> pour savoir comment la boîte de dialogue a été fermée.',
        ],
        examples: {
          confirm: {
            title: 'Confirmation',
            text: 'Une confirmation d’action destructrice. Le choix sans risque porte <code>autofocus</code>, et la valeur choisie arrive par <code>(closed)</code>.',
          },
          form: {
            title: 'Formulaire dans une boîte de dialogue',
            text: 'Une boîte de dialogue peut contenir n’importe quel contenu. Ici, le premier champ reçoit le focus à l’ouverture.',
          },
          dismissible: {
            title: 'Choix obligatoire',
            text: 'Avec <code>[dismissible]="false"</code>, Échap et les clics sur le fond sont ignorés : l’utilisateur doit choisir une option.',
          },
        },
        api: {
          NuiDialog: {
            summary:
              'Transforme un <code>&lt;dialog&gt;</code> natif en boîte de dialogue Needless UI.',
            members: {
              open: 'Indique si la boîte de dialogue est ouverte. À lier avec <code>[(open)]</code>.',
              modal: 'L’ouvre en mode modal : un fond recouvre la page, qui devient inerte.',
              dismissible:
                'Indique si Échap et les clics sur le fond ferment la boîte de dialogue.',
              size: 'Largeur maximale : <code>sm</code> (24rem), <code>md</code> (32rem) ou <code>lg</code> (44rem).',
              closed:
                'Émet la valeur de retour à chaque fermeture. Elle est vide si la boîte de dialogue a été fermée sans choix.',
              close: 'Ferme la boîte de dialogue avec une valeur de retour facultative.',
            },
          },
          NuiDialogTitle: {
            summary:
              'Le titre de la boîte de dialogue. Il reçoit un id et devient son <code>aria-labelledby</code>.',
            members: {},
          },
          NuiDialogDescription: {
            summary:
              'Une courte description, référencée par l’<code>aria-describedby</code> de la boîte de dialogue.',
            members: {},
          },
          NuiDialogActions: {
            summary: 'Une rangée de boutons en bas de la boîte de dialogue, alignée à la fin.',
            members: {},
          },
          NuiDialogClose: {
            summary: 'Ferme la boîte de dialogue qui le contient lors d’un clic.',
            members: {
              nuiDialogClose:
                'La valeur avec laquelle la boîte de dialogue se ferme, émise par <code>(closed)</code>.',
            },
          },
        },
        keyboard: [
          ['Tab', 'Déplace le focus vers l’élément suivant de la boîte de dialogue.'],
          ['Maj + Tab', 'Déplace le focus vers l’élément précédent de la boîte de dialogue.'],
          ['Échap', 'Ferme la boîte de dialogue, sauf si elle impose un choix.'],
        ],
        notes: [
          'L’ouverture avec <code>showModal()</code> donne à la boîte de dialogue <code>role="dialog"</code> et une sémantique modale, et rend le reste de la page inerte.',
          'Le titre et la description sont reliés par des id générés : les lecteurs d’écran annoncent les deux à l’ouverture.',
          'Le focus initial va à l’élément qui porte <code>autofocus</code>, sinon au premier élément focalisable. Pour une confirmation d’action destructrice, placez <code>autofocus</code> sur le choix sans risque.',
          'À la fermeture, le focus revient à l’élément qui a ouvert la boîte de dialogue.',
          'Un navigateur peut tout de même fermer une boîte de dialogue qui impose un choix après plusieurs appuis sur Échap sans autre interaction : proposez toujours une sortie explicite.',
        ],
      },

      menu: {
        name: 'Menu',
        title: 'Composant menu pour Angular',
        summary:
          'Une liste déroulante d’actions, avec sous-menus, éléments cochables et navigation complète au clavier.',
        description:
          'Menu Angular accessible basé sur Angular Aria : navigation au clavier, recherche par saisie, sous-menus, cases à cocher et radios, positionnement adaptatif.',
        apiDescription:
          'Référence de l’API du menu Needless UI : nuiMenuTrigger, nuiMenu et nuiMenuItem, avec valeurs, tons, sous-menus et état coché.',
        a11yDescription:
          'Interaction au clavier et accessibilité du menu Needless UI : touches fléchées, recherche par saisie, sous-menus, Échap et retour du focus.',
        overview: [
          'Un menu affiche une liste d’actions lorsqu’on active son déclencheur. Le comportement provient du modèle de menu d’Angular Aria ; Needless UI ajoute les styles, affiche le menu dans un popover au-dessus de la page et le maintient dans le viewport.',
          'Passez la référence <code>ngMenu</code> du menu à <code>[nuiMenuTrigger]</code>, donnez à chaque élément une <code>value</code> unique, et réagissez à <code>(selected)</code> sur chaque élément ou à <code>(itemSelected)</code> sur le menu.',
        ],
        examples: {
          actions: {
            title: 'Actions',
            text: 'Un menu d’actions avec des raccourcis indiqués, un séparateur et une action destructrice.',
          },
          submenu: {
            title: 'Sous-menus',
            text: 'Reliez un élément à un <code>nuiMenu</code> imbriqué avec <code>[submenu]</code>. Il s’ouvre au survol ou avec la flèche droite.',
          },
          checkable: {
            title: 'Cases à cocher et boutons radio',
            text: 'Définissez <code>role</code> et liez <code>[checked]</code>. Le menu affiche l’indicateur et annonce l’état.',
          },
        },
        api: {
          NuiMenuTrigger: {
            summary: 'Ouvre un menu. S’applique généralement à un <code>nuiButton</code>.',
            members: {
              nuiMenuTrigger:
                'Le menu à ouvrir : la référence <code>ngMenu</code> d’un <code>nuiMenu</code>.',
            },
          },
          NuiMenu: {
            summary:
              'Un menu d’éléments, affiché dans un popover à côté de son déclencheur. Son export <code>ngMenu</code> est le menu Angular Aria qu’attendent les déclencheurs et les sous-menus.',
            members: {
              wrap: 'Indique si les flèches reviennent du dernier élément au premier.',
              typeaheadDelay:
                'Délai en millisecondes avant la réinitialisation de la recherche par saisie.',
              disabled: 'Désactive tout le menu.',
              itemSelected:
                'Émet la valeur de l’élément choisi. Sur le menu racine, il se déclenche aussi pour les éléments des sous-menus.',
            },
          },
          NuiMenuItem: {
            summary: 'Un élément d’un <code>nuiMenu</code>.',
            members: {
              value: 'Identifie l’élément. Doit être unique dans tout le menu, sous-menus compris.',
              disabled:
                'Désactive l’élément. Il reste atteignable avec les flèches, mais ne peut pas être choisi.',
              submenu: 'Un <code>nuiMenu</code> imbriqué que cet élément ouvre.',
              role: '<code>menuitem</code>, <code>menuitemcheckbox</code> ou <code>menuitemradio</code>.',
              checked: 'État coché d’un élément case à cocher ou radio.',
              tone: '<code>danger</code> pour les actions destructrices.',
              searchTerm:
                'Texte utilisé par la recherche par saisie. Par défaut, le libellé de l’élément.',
              selected:
                'Émet la valeur de l’élément lorsqu’il est choisi à la souris ou au clavier.',
            },
          },
          NuiMenuSeparator: { summary: 'Une ligne entre des groupes d’éléments.', members: {} },
          NuiMenuShortcut: {
            summary: 'Une indication de raccourci clavier, alignée à la fin d’un élément.',
            members: {},
          },
        },
        keyboard: [
          [
            'Entrée ou Espace',
            'Sur le déclencheur : ouvre le menu sur son premier élément. Sur un élément : le choisit ou ouvre son sous-menu.',
          ],
          [
            'Flèche bas',
            'Sur le déclencheur : ouvre le menu sur son premier élément. Dans le menu : passe à l’élément suivant.',
          ],
          [
            'Flèche haut',
            'Sur le déclencheur : ouvre le menu sur son dernier élément. Dans le menu : passe à l’élément précédent.',
          ],
          ['Début et Fin', 'Passe au premier ou au dernier élément.'],
          [
            'Flèche droite',
            'Ouvre un sous-menu et passe à son premier élément (flèche gauche dans un texte de droite à gauche).',
          ],
          [
            'Flèche gauche',
            'Ferme un sous-menu et revient à l’élément parent (flèche droite dans un texte de droite à gauche).',
          ],
          ['Échap', 'Ferme le menu et rend le focus au déclencheur.'],
          ['Lettres', 'Passe à l’élément suivant dont le libellé commence par le texte saisi.'],
        ],
        notes: [
          'Le déclencheur reçoit <code>aria-haspopup</code>, <code>aria-expanded</code> et <code>aria-controls</code> ; le menu et ses éléments reçoivent leurs rôles ARIA d’Angular Aria.',
          'L’élément en surbrillance a un remplissage plein avec un contraste de texte d’au moins 4,5:1, et sert aussi d’indicateur de focus. En mode couleurs forcées, il reçoit un contour de surbrillance système.',
          'Les éléments cochables annoncent leur état via <code>aria-checked</code>.',
          'Choisir un élément ferme le menu et rend le focus au déclencheur. Déplacer le focus hors du déclencheur et du menu le ferme également.',
          'Les éléments mesurent au moins 28 pixels de haut, au-delà de la taille de cible minimale des WCAG 2.2.',
        ],
      },
    },
  },

  guides: {
    title: 'Guides',
    items: {
      'getting-started': {
        title: 'Premiers pas',
        description:
          'Installez Needless UI dans une application Angular 22 : ajoutez les paquets, importez la feuille de style, puis utilisez votre premier composant accessible.',
        blocks: [
          {
            kind: 'p',
            html: 'Needless UI fonctionne avec Angular 22. Les composants sont des directives standalone : il n’y a aucun module à importer.',
          },
          { kind: 'h2', id: 'install', text: 'Installation' },
          {
            kind: 'p',
            html: 'Ajoutez le paquet Angular avec Angular Aria et le CDK, qui fournissent le comportement au clavier et l’accessibilité. La feuille de style est incluse.',
          },
          { kind: 'code', file: 'snippets/install.sh' },
          { kind: 'h2', id: 'styles', text: 'Importer les styles' },
          {
            kind: 'p',
            html: 'Importez la feuille de style une seule fois dans <code>src/styles.css</code>. Elle contient les design tokens et tous les composants.',
          },
          { kind: 'code', file: 'snippets/styles.css' },
          {
            kind: 'p',
            html: 'Tout est livré dans <code>@layer nui</code>. Si votre application a des resets globaux comme <code>a { color: inherit }</code>, placez-les dans une couche déclarée avant <code>nui</code> pour qu’ils ne surchargent pas les composants.',
          },
          { kind: 'h2', id: 'use', text: 'Utiliser un composant' },
          {
            kind: 'p',
            html: 'Importez les directives dont vous avez besoin depuis leurs points d’entrée et ajoutez-les aux <code>imports</code> de votre composant.',
          },
          { kind: 'code', file: 'snippets/usage.ts' },
          { kind: 'h2', id: 'next', text: 'Pour aller plus loin' },
          {
            kind: 'p',
            html: 'Parcourez les <a href="/components">composants</a> pour voir des exemples interactifs, ou lisez le <a href="/guides/theming">guide des thèmes</a> pour les accorder à votre charte graphique.',
          },
        ],
      },
      theming: {
        title: 'Thèmes',
        description:
          'Adaptez Needless UI via les propriétés personnalisées CSS : modes clair et sombre, thèmes imbriqués, tokens surchargés, palette de marque au contraste vérifié.',
        blocks: [
          {
            kind: 'p',
            html: 'Chaque choix visuel est une propriété personnalisée CSS générée à partir des design tokens du W3C. Les composants n’utilisent que des tokens sémantiques comme <code>--nui-color-accent-solid</code> : modifier un token change le style de tous les composants qui l’utilisent.',
          },
          { kind: 'h2', id: 'modes', text: 'Clair et sombre' },
          {
            kind: 'p',
            html: 'Par défaut, la préférence du système d’exploitation détermine le mode. Fixez un mode sur n’importe quel élément avec <code>data-nui-theme</code>, et imbriquez les thèmes à volonté.',
          },
          { kind: 'code', file: 'snippets/theme-attribute.html' },
          { kind: 'demo', demo: 'nested-themes' },
          { kind: 'h2', id: 'tokens', text: 'Surcharger les tokens' },
          {
            kind: 'p',
            html: 'Les tokens se trouvent dans <code>@layer nui</code> : le CSS ordinaire de votre application les surcharge. Définissez-les sur <code>:root</code> pour toute l’application, ou sur n’importe quel élément pour une partie seulement.',
          },
          { kind: 'code', file: 'snippets/override.css' },
          { kind: 'h2', id: 'palette', text: 'Une palette à vos couleurs' },
          {
            kind: 'p',
            html: 'Les échelles de couleurs sont générées. Modifiez une teinte dans <code>packages/tokens/scripts/palette.ts</code> et relancez la génération : le script réajuste chaque couleur dans l’espace sRGB et revérifie le contraste de chaque paire texte-fond.',
          },
          { kind: 'code', file: 'snippets/palette.sh' },
        ],
      },
    },
  },

  notFound: {
    title: 'Page introuvable',
    description:
      'Cette page n’existe pas. Parcourez les composants Needless UI ou repartez de la page d’accueil.',
    text: 'Cette page n’existe pas ou a été déplacée.',
    home: 'Retour à l’accueil',
    components: 'Parcourir les composants',
  },

  legal: {
    translationNote:
      'Cette traduction est fournie à titre indicatif ; en cas de divergence, le texte anglais fait foi.',
    labels: { name: 'Nom', address: 'Adresse', email: 'E-mail', uid: 'IDE', vat: 'Numéro de TVA' },
    notice: {
      title: 'Mentions légales',
      description:
        'Qui exploite needlessui.com : nom, adresse postale et e-mail de l’exploitant, avec les informations du registre du commerce et de la TVA.',
      operator: 'Exploitant',
      legalForm: 'entreprise individuelle',
      country: 'Suisse',
      register: 'Registre du commerce',
      registerEntry: 'Inscrite au registre du commerce du canton de Zoug.',
      vatSuffix: 'TVA',
      blocks: [
        { kind: 'h2', id: 'liability', text: 'Responsabilité' },
        {
          kind: 'p',
          html: 'Le contenu de ce site est rédigé avec soin, mais sans aucune garantie d’exactitude, d’exhaustivité ou d’actualité. Les sites liés échappent à notre contrôle ; leurs exploitants sont responsables de leur contenu.',
        },
        { kind: 'h2', id: 'license', text: 'Licence' },
        {
          kind: 'p',
          html: 'Needless UI, y compris ce site, est open source sous <a href="https://github.com/needless-ui/needless-ui/blob/main/LICENSE">licence MIT</a>.',
        },
      ],
    },
    privacy: {
      title: 'Politique de confidentialité',
      description:
        'Comment needlessui.com traite vos données : ni cookies, ni mesure d’audience, ni pistage. Ce que l’hébergeur traite lors de votre visite, et vos droits.',
      updated: 'Dernière mise à jour : 24 septembre 2026',
      blocks: [
        {
          kind: 'p',
          html: 'Cette politique explique quelles données personnelles sont traitées lorsque vous consultez www.needlessui.com, et quels sont vos droits. En bref : le site n’utilise ni cookies, ni outils d’analyse, ni pistage, et ne vous demande jamais de données personnelles.',
        },
        { kind: 'h2', id: 'controller', text: 'Responsable du traitement' },
        {
          kind: 'p',
          html: 'L’exploitant indiqué dans les <a href="/legal">mentions légales</a>, Angelo Lamonaca. Contact : {email}.',
        },
        { kind: 'h2', id: 'hosting', text: 'Hébergement' },
        {
          kind: 'p',
          html: 'Le site est hébergé par Vercel Inc., 440 N Barranca Avenue #4133, Covina, CA 91723, USA. Lorsque vous ouvrez une page, votre navigateur envoie les données techniques que reçoit tout site web : votre adresse IP, la date et l’heure, la page demandée, la page d’où vous venez et le user agent de votre navigateur. Vercel traite ces données pour notre compte afin de fournir le site et d’en assurer la sécurité, et ne les conserve que le temps nécessaire à ces fins. Ce traitement peut avoir lieu aux États-Unis ; Vercel est certifiée au titre de l’EU-U.S. Data Privacy Framework, de son extension au Royaume-Uni et du Swiss-U.S. Data Privacy Framework. Consultez la <a href="https://vercel.com/legal/privacy-policy">politique de confidentialité de Vercel</a>.',
        },
        {
          kind: 'p',
          html: 'Lorsque le RGPD s’applique, la base juridique est notre intérêt légitime à exploiter un site web sécurisé (article 6.1.f du RGPD).',
        },
        { kind: 'h2', id: 'storage', text: 'Cookies et stockage local' },
        {
          kind: 'p',
          html: 'Le site ne dépose aucun cookie. Si vous choisissez le thème clair ou sombre, le stockage local de votre navigateur mémorise ce choix pour votre prochaine visite. Il ne quitte jamais votre appareil ; pour le supprimer, revenez à « Système » ou effacez les données du site.',
        },
        { kind: 'h2', id: 'tracking', text: 'Aucun pistage' },
        {
          kind: 'p',
          html: 'Il n’y a ni outils d’analyse, ni publicité, ni plugins de réseaux sociaux, ni contenus tiers intégrés, ni polices externes. Les liens vers GitHub et npm mènent à des sites qui ont leur propre politique de confidentialité.',
        },
        { kind: 'h2', id: 'rights', text: 'Vos droits' },
        {
          kind: 'p',
          html: 'Vous pouvez demander quelles données personnelles vous concernant sont traitées, et les faire rectifier ou effacer. Lorsque le RGPD s’applique, vous pouvez aussi vous opposer au traitement, en demander la limitation et recevoir vos données dans un format portable. Écrivez à {email}. Vous pouvez également introduire une réclamation auprès d’une autorité de contrôle : en Suisse, le Préposé fédéral à la protection des données et à la transparence (PFPDT) ; dans l’UE, l’autorité de votre pays.',
        },
        { kind: 'h2', id: 'changes', text: 'Modifications' },
        {
          kind: 'p',
          html: 'Cette politique évolue avec le site, par exemple lors d’un changement d’hébergeur. La date ci-dessous indique la version en vigueur.',
        },
      ],
    },
  },
};
