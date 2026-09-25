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
    toaster: { label: 'Notifications (Alt + T)', close: 'Fermer' },
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
        title: 'Inutilement personnalisable',
        text: 'Ressorts, effets d’appui, animations d’entrée, formes des coins, rayon et densité : <a href="/guides/customization">un attribut</a> pour toute l’application, ou un input par composant, sur des design tokens W3C standard.',
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
      kinds: {
        input: 'Input',
        model: 'Bidirectionnel',
        output: 'Output',
        method: 'Méthode',
        property: 'Propriété',
      },
      texts: 'Chaque texte qu’il affiche ou annonce est aussi un input, que vous pouvez traduire :',
      customization: {
        note: 'Les inputs de personnalisation que vous ne définissez pas suivent l’attribut <code>data-nui-*</code> le plus proche. Consultez le <a href="/guides/customization">guide de personnalisation</a>.',
        members: {
          motion:
            'Le ressort qui l’anime : <code>snappy</code>, <code>bouncy</code>, <code>jelly</code>, <code>elastic</code>, <code>lazy</code>, <code>mechanical</code> ou <code>none</code>.',
          spring:
            'N’importe quel ressort, sous la forme <code>{ stiffness, damping, mass }</code>, compilé en CSS à l’exécution. Il a priorité sur <code>motion</code>.',
          press:
            'Ce qu’il fait tant qu’on le maintient enfoncé : <code>sink</code>, <code>squish</code>, <code>pop</code>, <code>wobble</code>, <code>rubber</code>, <code>tilt</code> ou <code>none</code>.',
          enter:
            'Son entrée en scène : <code>zoom</code>, <code>fade</code>, <code>drop</code>, <code>rise</code>, <code>unfold</code>, <code>flip</code>, <code>swing</code>, <code>slide</code> ou <code>none</code>.',
          corners:
            'La forme de ses coins : <code>round</code>, <code>squircle</code>, <code>bevel</code>, <code>scoop</code>, <code>notch</code> ou <code>square</code>.',
          radius:
            'La taille de ses coins : <code>none</code>, <code>small</code>, <code>medium</code>, <code>large</code> ou <code>full</code>.',
          density:
            'La place qu’il occupe : <code>compact</code>, <code>regular</code> ou <code>roomy</code>.',
        },
      },
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
          presses: {
            title: 'Effets d’appui',
            text: 'Appuyez longuement sur chaque bouton. <code>press</code> définit ce que fait un bouton tant qu’il est enfoncé, et <code>motion</code>, le ressort qui le ramène en place. Sur n’importe quel élément, <code>data-nui-press</code> applique l’effet à tout son contenu.',
          },
          shapes: {
            title: 'Coins, rayon et densité',
            text: '<code>corners</code> change la forme des coins, <code>radius</code> leur taille et <code>density</code> la place qu’occupe un bouton, sans jamais descendre sous la taille de cible minimale de 24 px. Les navigateurs qui ne prennent pas en charge <code>corner-shape</code> dessinent des coins arrondis.',
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
          entrances: {
            title: 'Animations d’entrée',
            text: 'Chaque bouton ouvre la même boîte de dialogue avec un autre préréglage <code>enter</code> et le ressort <code>bouncy</code>. Quelle que soit son entrée en scène, elle disparaît dans un fondu rapide.',
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
          entrances: {
            title: 'Animations d’entrée et ressorts',
            text: 'Chaque menu associe un préréglage <code>enter</code> à un ressort <code>motion</code> et se déploie depuis le côté où il s’ouvre. Les sous-menus héritent des deux.',
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

      avatar: {
        name: 'Avatar',
        title: 'Composant avatar pour Angular',
        summary:
          'La photo d’une personne, ou ses initiales sur une couleur qui n’appartient qu’à elle.',
        description:
          'Avatar Angular avec des initiales en l’absence de photo, une couleur stable par nom, des pastilles de statut et des groupes, lisibles dans tous les thèmes.',
        apiDescription:
          'Référence de l’API de l’avatar Needless UI : nuiAvatar avec nom, photo, taille, forme et statut, ainsi que nuiAvatarGroup.',
        a11yDescription:
          'Accessibilité de l’avatar Needless UI : rôle d’image et nom, avatars décoratifs et initiales qui gardent un contraste de 4,5:1.',
        overview: [
          'Le composant <code>nuiAvatar</code> affiche une photo, ou les initiales de la personne s’il n’y en a pas ou si elle ne se charge pas. Les initiales reposent sur une couleur calculée à partir du nom : une même personne garde la même couleur partout.',
          'Chaque teinte est limitée à une luminosité et une chroma qui maintiennent les initiales blanches au-dessus d’un rapport de contraste de 4,5:1, quels que soient le nom et le thème.',
        ],
        examples: {
          people: {
            title: 'Initiales, photos et statut',
            text: 'Sans <code>src</code>, les initiales et la couleur viennent de <code>name</code>. <code>status</code> ajoute une pastille de présence.',
          },
          group: {
            title: 'Groupes, tailles et formes',
            text: '<code>nuiAvatarGroup</code> fait se chevaucher une rangée d’avatars. <code>size</code> accepte <code>sm</code>, <code>md</code> ou <code>lg</code>, et <code>shape="square"</code> convient aux équipes et aux applications.',
          },
        },
        api: {
          NuiAvatar: {
            summary: 'Une photo ou des initiales, qui porte le nom de la personne.',
            members: {
              name: 'Le nom de la personne. Le nom accessible, les initiales et la couleur en découlent.',
              src: 'URL de la photo. Si elle ne se charge pas, les initiales s’affichent à la place.',
              size: 'Taille : <code>sm</code>, <code>md</code> ou <code>lg</code>.',
              shape: '<code>circle</code> ou <code>square</code>.',
              status:
                'Une pastille de présence : <code>online</code>, <code>away</code>, <code>busy</code> ou <code>offline</code>.',
              label:
                'Un nom accessible plus parlant que le nom seul, comme « Ada Lovelace, en ligne ».',
              decorative:
                'Masque l’avatar aux technologies d’assistance, pour les avatars placés à côté du nom visible.',
            },
          },
          NuiAvatarGroup: {
            summary:
              'Une rangée d’avatars qui se chevauchent. Nommez-la avec <code>aria-label</code>.',
            members: {},
          },
        },
        keyboard: [],
        notes: [
          'Un avatar est une image (<code>role="img"</code>) qui porte le nom de la personne. À côté de son nom visible, définissez <code>decorative</code> pour que les lecteurs d’écran ne l’annoncent pas deux fois.',
          'La pastille de statut est purement visuelle. Si le statut compte, indiquez-le dans <code>label</code>.',
          'Les initiales gardent un rapport de contraste d’au moins 4,5:1 sur chaque couleur générée.',
        ],
      },

      breadcrumbs: {
        name: 'Fil d’Ariane',
        title: 'Composant fil d’Ariane pour Angular',
        summary: 'Le chemin des pages qui mène à la page actuelle.',
        description:
          'Fil d’Ariane Angular accessible sur nav et liste natifs : séparateurs CSS inversés en écriture de droite à gauche et défilement des chemins trop longs.',
        apiDescription:
          'Référence de l’API du fil d’Ariane Needless UI : la directive nuiBreadcrumbs et le libellé de sa région de navigation.',
        a11yDescription:
          'Accessibilité du fil d’Ariane Needless UI : région de navigation, sémantique de liste, page actuelle et tailles de cible.',
        overview: [
          'Un fil d’Ariane indique où se situe une page dans le site. La directive <code>nuiBreadcrumbs</code> met en forme un <code>&lt;nav&gt;</code> natif et sa liste ; le dernier élément est la page actuelle, marquée par <code>aria-current="page"</code>.',
          'Un chemin plus long que son conteneur défile horizontalement au lieu de passer à la ligne. Il s’affiche d’abord défilé jusqu’au bout, et ses extrémités s’estompent là où il reste du contenu à voir.',
        ],
        examples: {
          trail: {
            title: 'Un chemin',
            text: 'Des liens vers les pages parentes, puis la page actuelle en texte simple avec <code>aria-current="page"</code>.',
          },
          long: {
            title: 'Chemins longs',
            text: 'Dans un conteneur étroit, le chemin défile, en commençant avec la page actuelle visible.',
          },
        },
        api: {
          NuiBreadcrumbs: {
            summary: 'Met en forme un <code>&lt;nav&gt;</code> et sa liste comme fil d’Ariane.',
            members: { label: 'Nom accessible de la région de navigation.' },
          },
        },
        keyboard: [['Tab', 'Passe au lien suivant du chemin.']],
        notes: [
          'C’est une région de navigation avec une liste simple : les lecteurs d’écran annoncent le nombre de pages du chemin.',
          'Les séparateurs sont dessinés en CSS : ils ne sont pas lus à voix haute et s’inversent dans un texte de droite à gauche.',
          'Chaque lien mesure au moins 24 px de haut.',
        ],
      },

      empty: {
        name: 'État vide',
        title: 'Composant état vide pour Angular',
        summary: 'Ce qu’il faut afficher quand il n’y a rien à afficher, et comment en sortir.',
        description:
          'État vide Angular avec une image, un titre, une courte explication et des actions, plus quatre illustrations intégrées qui flottent doucement.',
        apiDescription:
          'Référence de l’API de l’état vide Needless UI : nuiEmpty et ses parties image, titre, description et actions.',
        a11yDescription:
          'Accessibilité de l’état vide Needless UI : images décoratives, titres pertinents et réduction des animations.',
        overview: [
          'Un état vide remplace une liste, un tableau ou une page qui ne contient encore rien. Il explique pourquoi et propose l’étape suivante.',
          'La partie média accueille votre propre image, ou en dessine une intégrée : <code>search</code>, <code>inbox</code>, <code>files</code> ou <code>error</code>.',
        ],
        examples: {
          search: {
            title: 'Aucun résultat',
            text: 'Un titre qui dit ce qui s’est passé, une ligne d’aide et des actions pour s’en sortir.',
          },
          pictures: {
            title: 'Images intégrées',
            text: 'Définissez <code>illustration</code> sur <code>nuiEmptyMedia</code>. Les images suivent le thème et flottent, sauf si les animations sont réduites.',
          },
        },
        api: {
          NuiEmpty: { summary: 'Le conteneur : une colonne centrée.', members: {} },
          NuiEmptyMedia: {
            summary: 'L’image, masquée aux technologies d’assistance.',
            members: {
              illustration:
                'Une image intégrée : <code>search</code>, <code>inbox</code>, <code>files</code> ou <code>error</code>.',
            },
          },
          NuiEmptyTitle: {
            summary: 'Le titre. Utilisez le niveau de titre adapté à la page.',
            members: {},
          },
          NuiEmptyDescription: { summary: 'Une ligne d’explication.', members: {} },
          NuiEmptyActions: { summary: 'Une rangée de boutons.', members: {} },
        },
        keyboard: [],
        notes: [
          'L’image est décorative (<code>aria-hidden</code>) : le titre et la description portent le message.',
          'Balisez le titre avec un élément de titre, au niveau adapté à la structure de la page.',
          'Les images intégrées cessent de flotter quand l’utilisateur demande moins d’animations.',
        ],
      },

      'number-field': {
        name: 'Champ numérique',
        title: 'Composant champ numérique pour Angular',
        summary:
          'Un champ de saisie de nombres avec boutons d’incrément, formaté selon la langue et la région.',
        description:
          'Champ numérique Angular accessible : spinbutton avec boutons d’incrément, pas au clavier, min et max, et formats régionaux pour devises, pourcentages et unités.',
        apiDescription:
          'Référence de l’API du champ numérique Needless UI : nuiNumberField, nuiNumberInput avec min, max, step et format, et nuiNumberStep.',
        a11yDescription:
          'Interaction au clavier et accessibilité du champ numérique Needless UI : rôle spinbutton, flèches, touches de page et boutons d’incrément.',
        overview: [
          'Le champ numérique est un champ de texte qui contient un nombre. Il affiche le nombre formaté selon les paramètres régionaux, relit le texte saisi dans ce même format et, à la perte du focus, l’aligne sur <code>step</code> entre <code>min</code> et <code>max</code>.',
          'Il lit aussi les chiffres et séparateurs natifs : chiffres arabo-indiens, persans et devanagari, espaces et points comme séparateurs de milliers, et tous les signes moins. Maintenir un bouton d’incrément enfoncé répète l’action, de plus en plus vite.',
        ],
        examples: {
          guests: {
            title: 'Boutons d’incrément',
            text: 'Des boutons de chaque côté, désactivés à <code>min</code> et <code>max</code>. Les flèches du clavier changent aussi la valeur pas à pas.',
          },
          formats: {
            title: 'Devise et pourcentage',
            text: 'Passez des options <code>Intl.NumberFormat</code> à <code>format</code>, ainsi qu’une <code>locale</code>. La valeur reste un simple nombre.',
          },
        },
        api: {
          NuiNumberField: {
            summary: 'Regroupe le champ et ses boutons d’incrément.',
            members: {},
          },
          NuiNumberInput: {
            summary: 'Un champ de texte qui contient un nombre, sous forme de spinbutton ARIA.',
            members: {
              value:
                'Le nombre, ou <code>null</code> si le champ est vide. Fonctionne aussi avec les formulaires.',
              min: 'Valeur minimale autorisée.',
              max: 'Valeur maximale autorisée.',
              step: 'De combien un pas modifie la valeur. À la perte du focus, la valeur s’aligne dessus.',
              format:
                "Options <code>Intl.NumberFormat</code>, par exemple <code>{ style: 'currency', currency: 'EUR' }</code>.",
              locale: 'Paramètres régionaux utilisés pour formater et lire les nombres.',
              disabled: 'Désactive le champ et ses boutons.',
              stepBy: 'Avance (positif) ou recule (négatif) d’un certain nombre de pas.',
            },
          },
          NuiNumberStep: {
            summary: 'Un bouton d’incrément. Le maintenir enfoncé répète l’action.',
            members: {
              nuiNumberStep:
                '<code>1</code> augmente d’un pas et <code>-1</code> diminue d’un pas.',
              label: 'Nom accessible. Par défaut, « Increase » ou « Decrease ».',
            },
          },
        },
        keyboard: [
          ['Flèches haut et bas', 'Augmente ou diminue la valeur d’un pas.'],
          ['Page précédente et Page suivante', 'Avance ou recule de dix pas.'],
          ['Début et Fin', 'Va au minimum ou au maximum.'],
          ['Entrée', 'Valide la saisie.'],
        ],
        notes: [
          'Le champ est un <code>spinbutton</code> avec <code>aria-valuenow</code>, <code>aria-valuemin</code>, <code>aria-valuemax</code>, et la valeur formatée comme <code>aria-valuetext</code>.',
          'Les boutons d’incrément restent hors de l’ordre de tabulation, puisque les touches font la même chose, mais ils sont nommés et reliés au champ par <code>aria-controls</code>.',
          'Donnez un libellé au champ avec <code>aria-label</code> ou un <code>&lt;label&gt;</code>.',
        ],
      },

      otp: {
        name: 'Champ OTP',
        title: 'Champ OTP et code de vérification pour Angular',
        summary: 'Des codes de vérification dans des cases séparées, sur un seul vrai champ.',
        description:
          'Champ OTP Angular accessible : un champ natif sous les cases, remplissage par SMS, WebOTP, collage nettoyé, groupes, masquage et secousse en cas d’erreur.',
        apiDescription:
          'Référence de l’API du champ OTP Needless UI : nuiOtp avec longueur, motif, groupes et masquage, et nuiOtpInput avec WebOTP.',
        a11yDescription:
          'Clavier et accessibilité du champ OTP Needless UI : un seul champ de texte étiqueté, un indicateur de focus visible et la saisie automatique.',
        overview: [
          'Le champ OTP ressemble à une rangée de cases, mais c’est en réalité un seul <code>&lt;input&gt;</code> natif. La saisie automatique par SMS (<code>autocomplete="one-time-code"</code>), le collage, les gestionnaires de mots de passe, les formulaires et les lecteurs d’écran y voient tous un champ de texte ordinaire.',
          'Les codes collés sont nettoyés : « 123-456 » et « 123 456 » fonctionnent tous deux, et les caractères que le motif n’autorise pas sont refusés. Sur Android, <code>webOtp</code> remplit le code depuis le SMS dès qu’il arrive.',
        ],
        examples: {
          verify: {
            title: 'Vérification',
            text: '<code>(completed)</code> se déclenche quand la dernière case est remplie. Définissez <code>aria-invalid</code> sur le champ pour refuser un code : les cases deviennent rouges et tremblent.',
          },
          letters: {
            title: 'Lettres, groupes et masquage',
            text: '<code>pattern="alphanumeric"</code> accepte aussi les lettres, <code>[groups]</code> ajoute des séparateurs et <code>masked</code> affiche des points.',
          },
        },
        api: {
          NuiOtp: {
            summary: 'Dessine les cases et englobe le champ.',
            members: {
              length: 'Nombre de caractères.',
              pattern:
                '<code>digits</code>, ou <code>alphanumeric</code> pour les lettres et les chiffres.',
              groups:
                'Tailles des groupes, dessinés avec un séparateur entre eux, par exemple <code>[3, 3]</code>.',
              masked: 'Affiche des points au lieu des caractères.',
              completed: 'Émet le code chaque fois que la dernière case est remplie.',
            },
          },
          NuiOtpInput: {
            summary: 'Le vrai champ. Il reçoit les attributs dont un code à usage unique a besoin.',
            members: {
              webOtp:
                'Remplit le code à partir d’un SMS entrant grâce à l’API WebOTP, là où elle est prise en charge.',
            },
          },
        },
        keyboard: [
          ['Chiffres ou lettres', 'Remplissent la case actuelle et passent à la suivante.'],
          ['Retour arrière', 'Supprime le caractère avant le curseur.'],
          [
            'Flèches gauche et droite',
            'Déplacent d’une case ; une case remplie est sélectionnée, et la saisie la remplace donc.',
          ],
          ['Coller', 'Remplit les cases à partir d’un code copié.'],
        ],
        notes: [
          'Les lecteurs d’écran rencontrent un seul champ de texte. Donnez-lui un libellé avec <code>aria-label</code> ou un <code>&lt;label&gt;</code>.',
          'Les cases sont masquées aux technologies d’assistance ; la case en cours de saisie affiche l’indicateur de focus.',
          'Quand les animations sont réduites, le curseur ne clignote pas et les cases ne sautillent ni ne tremblent.',
        ],
      },

      rating: {
        name: 'Notation',
        title: 'Composant de notation par étoiles pour Angular',
        summary: 'Des étoiles pour noter, sur de vrais boutons radio.',
        description:
          'Notation par étoiles Angular accessible, sur des boutons radio natifs : clavier et formulaires, aperçu au survol, effacement et fractions en lecture seule.',
        apiDescription:
          'Référence de l’API de la notation Needless UI : nuiRating avec valeur, maximum, modes lecture seule et effaçable, et libellés traduisibles.',
        a11yDescription:
          'Interaction au clavier et accessibilité de la notation Needless UI : groupe radio nommé, étoiles étiquetées et image en lecture seule.',
        overview: [
          'La notation est un groupe de boutons radio natifs dessinés comme des étoiles. Les flèches, les formulaires et les lecteurs d’écran fonctionnent comme pour tout groupe radio ; le CSS remplit les étoiles et prévisualise une nouvelle note sous le pointeur.',
          'En lecture seule, elle affiche n’importe quelle fraction, comme une moyenne de 4,3.',
        ],
        examples: {
          pick: {
            title: 'Noter quelque chose',
            text: 'Liez <code>[(value)]</code> ou un formulaire. Avec <code>clearable</code>, choisir à nouveau la même étoile efface la note.',
          },
          average: {
            title: 'Afficher une moyenne',
            text: '<code>readonly</code> remplit les étoiles jusqu’à n’importe quelle fraction et nomme l’image « Rated 4.3 out of 5 ».',
          },
        },
        api: {
          NuiRating: {
            summary: 'Un groupe radio d’étoiles, ou l’image en lecture seule d’une note.',
            members: {
              value: 'La note, ou <code>null</code>. Fonctionne aussi avec les formulaires.',
              max: 'Nombre d’étoiles.',
              readonly:
                'Affiche la valeur, à n’importe quelle fraction près, au lieu d’en demander une.',
              disabled: 'Désactive toutes les étoiles.',
              clearable: 'Choisir à nouveau l’étoile actuelle efface la note.',
              name: 'Nom partagé par les boutons radio. Généré par défaut.',
              starLabel: 'Nom accessible de chaque étoile, en fonction de sa valeur.',
              readonlyLabel: 'Nom accessible en mode lecture seule.',
            },
          },
        },
        keyboard: [
          ['Tab', 'Entre dans le groupe, sur l’étoile cochée.'],
          ['Touches fléchées', 'Changent la note.'],
          ['Espace', 'Coche l’étoile qui a le focus.'],
        ],
        notes: [
          'Chaque étoile est un bouton radio natif nommé « 3 stars ». Nommez le groupe avec <code>aria-label</code>.',
          'En lecture seule, la notation est une image (<code>role="img"</code>) nommée « Rated 4.3 out of 5 ».',
          'Les étoiles sont dessinées avec des masques CSS : elles suivent donc les couleurs forcées.',
        ],
      },

      skeleton: {
        name: 'Skeleton',
        title: 'Composant skeleton de chargement pour Angular',
        summary:
          'Des espaces réservés qui maintiennent la mise en page pendant le chargement du contenu.',
        description:
          'Skeletons de chargement Angular pour du texte, des cercles et des blocs, avec un seul reflet qui balaie toute la page, et aucun si les animations sont réduites.',
        apiDescription:
          'Référence de l’API du skeleton Needless UI : la directive nuiSkeleton et ses formes text, circle et block.',
        a11yDescription:
          'Accessibilité du skeleton Needless UI : espaces réservés masqués, régions aria-busy, réduction des animations et couleurs forcées.',
        overview: [
          'Les skeletons gardent la forme d’un contenu encore en cours de chargement, pour que la page ne saute pas à son arrivée. Dimensionnez-les en CSS.',
          'Le reflet est fixé au viewport : un seul éclat balaie en même temps tous les skeletons de la page, quelles que soient leur taille et leur position.',
        ],
        examples: {
          card: {
            title: 'Chargement d’une carte',
            text: 'Des lignes, un cercle et un bloc tiennent la place d’un profil. La carte porte <code>aria-busy</code> pendant son chargement.',
          },
        },
        api: {
          NuiSkeleton: {
            summary: 'Un espace réservé, masqué aux technologies d’assistance.',
            members: {
              shape: '<code>text</code> (une ligne), <code>circle</code> ou <code>block</code>.',
            },
          },
        },
        keyboard: [],
        notes: [
          'Les skeletons sont masqués aux lecteurs d’écran. Définissez <code>aria-busy="true"</code> sur la région en cours de chargement, et retirez-le quand le contenu arrive.',
          'Aucun reflet n’est affiché quand l’utilisateur demande moins d’animations.',
          'En mode couleurs forcées, chaque skeleton reçoit un contour.',
        ],
      },

      toast: {
        name: 'Toast',
        title: 'Notifications toast pour Angular',
        summary:
          'De courts messages qui s’empilent, s’écartent d’un geste et ne volent jamais le focus.',
        description:
          'Toasts Angular accessibles : pile dans la couche supérieure, toasts de promesse, actions d’annulation, fermeture par balayage, pause au survol et au focus.',
        apiDescription:
          'Référence de l’API des toasts Needless UI : le service NuiToaster, ses options et les toasts de promesse, et la région nui-toaster.',
        a11yDescription:
          'Interaction au clavier et accessibilité des toasts Needless UI : annonces, raccourci Alt + T, Échap et minuteurs mis en pause.',
        overview: [
          'Les toasts confirment ce qui vient de se passer, ou proposent une action comme « Annuler », sans interrompre. Placez un <code>&lt;nui-toaster&gt;</code> dans le shell de l’application, puis appelez <code>NuiToaster</code> depuis n’importe où.',
          'Ils s’empilent derrière le plus récent et se déploient en éventail au survol ou au focus, le tout animé par le ressort choisi. Un balayage latéral en écarte un. Les minuteurs se mettent en pause tant que la pile est survolée ou a le focus, et tant que la page est en arrière-plan.',
        ],
        examples: {
          tones: {
            title: 'Tons',
            text: '<code>show()</code>, <code>success()</code>, <code>warning()</code> et <code>danger()</code>. Les toasts danger restent plus longtemps et sont annoncés de façon prioritaire.',
          },
          actions: {
            title: 'Actions et promesses',
            text: 'Une <code>action</code> ajoute un bouton comme « Annuler ». <code>promise()</code> affiche un indicateur de chargement, puis se transforme en résultat.',
          },
        },
        api: {
          NuiToaster: {
            summary: 'Le service qui affiche les toasts. Injectez-le n’importe où.',
            members: {
              toasts: 'Tous les toasts à l’écran, du plus récent au plus ancien.',
              show: 'Affiche un toast. Passez un titre, ou des options avec une description, un ton, une durée, une action ou un id.',
              success: 'Affiche un toast de succès.',
              warning: 'Affiche un toast d’avertissement.',
              danger:
                'Affiche un toast danger. Il reste 8 secondes et est annoncé de façon prioritaire.',
              promise:
                'Affiche un toast de chargement jusqu’à ce que la promesse soit résolue ou rejetée, puis son message de succès ou d’erreur.',
              dismiss: 'Ferme un toast, ou tous.',
            },
          },
          NuiToasterRegion: {
            summary:
              'La région où apparaissent les toasts. Placez-la une seule fois, dans le shell de l’application.',
            members: {
              position: 'Coin ou bord du viewport. Le début et la fin suivent le sens du texte.',
              expanded: 'Garde la pile déployée en éventail.',
              label: 'Nom accessible de la région. Indiquez comment l’atteindre.',
              closeLabel: 'Nom accessible des boutons de fermeture.',
              hotkey:
                'La touche, sous forme de <code>KeyboardEvent.code</code>, qui, avec Alt, place le focus sur le toast le plus récent.',
            },
          },
        },
        keyboard: [
          ['Alt + T', 'Place le focus sur le toast le plus récent.'],
          ['Tab', 'Parcourt les toasts, leurs actions et leurs boutons de fermeture.'],
          ['Échap', 'Ferme le toast qui a le focus.'],
        ],
        notes: [
          'Chaque toast est annoncé à son apparition : poliment, ou de façon prioritaire pour danger. Les toasts ne prennent jamais le focus.',
          'Les minuteurs se mettent en pause tant que la pile est survolée ou a le focus et tant que la page est masquée, et les toasts qui attendent une promesse n’expirent jamais.',
          'Tout ce sur quoi l’utilisateur doit agir doit aussi exister en dehors du toast.',
          'Quand les animations sont réduites, les toasts ne sont ni animés ni balayables, et la ligne du minuteur est masquée.',
        ],
      },
      combobox: {
        name: 'Combobox',
        title: 'Combobox et autocomplétion pour Angular',
        summary: 'Un champ de texte qui suggère des options pendant la saisie.',
        description:
          'Combobox Angular accessible : recherche floue avec surlignage, valeurs multiples en chips, nouvelles valeurs saisies et résultats d’un serveur.',
        apiDescription:
          'Référence de l’API de la combobox Needless UI : nui-combobox avec value, values, multiple, create, filtering, loading et clearable, et lignes personnalisées.',
        a11yDescription:
          'Clavier et accessibilité de la combobox Needless UI : combobox éditable avec autocomplétion en liste, descendant actif, chips et saisie IME.',
        overview: [
          'La combobox est un champ de texte avec une liste de suggestions. La recherche est floue et ignore les accents : les meilleures correspondances arrivent en premier et les lettres trouvées sont surlignées. Elle accepte les mêmes objets <a href="/components/select/api#NuiOption"><code>NuiOption</code></a> que le select.',
          'Avec <code>multiple</code>, les options choisies deviennent des chips avant le texte, et <code>create</code> transforme le texte saisi en nouvelle valeur. Pour des résultats d’un serveur, désactivez <code>filtering</code>, cherchez sur <code>(queryChange)</code> et activez <code>loading</code> pendant l’attente.',
        ],
        examples: {
          country: {
            title: 'Recherche',
            text: 'Les lettres trouvées n’ont pas besoin de se suivre, et les <code>keywords</code> comptent aussi. <code>clearable</code> ajoute un bouton d’effacement, et Échap efface aussi la valeur.',
          },
          tags: {
            title: 'Chips et nouvelles valeurs',
            text: '<code>multiple</code> affiche des chips et lie <code>[(values)]</code>. Quand le texte ne correspond encore à aucune option, <code>create</code> propose de l’ajouter.',
          },
          people: {
            title: 'Résultats du serveur',
            text: 'La liste affiche ce que le serveur a envoyé, sans filtrage, avec une ligne de chargement pendant l’attente. Les libellés choisis restent quand de nouveaux résultats arrivent.',
          },
        },
        api: {
          NuiCombobox: {
            summary: 'Un champ de texte qui suggère des options pendant la saisie.',
            members: {
              options:
                'Les options, sous forme d’objets <a href="/components/select/api#NuiOption"><code>NuiOption</code></a>.',
              value:
                'La valeur choisie, ou <code>null</code>. Fonctionne aussi avec les formulaires.',
              values: 'Les valeurs choisies, avec <code>multiple</code>.',
              multiple: 'Permet de choisir plusieurs options, affichées en chips.',
              create:
                'Crée une valeur à partir du texte saisi. La liste propose alors d’ajouter un texte qui n’est pas une option.',
              filtering:
                'Filtre les options pendant la saisie. Désactivez-le quand un serveur les filtre.',
              loading: 'Affiche une ligne de chargement en attendant les résultats.',
              clearable:
                'Ajoute un bouton qui efface la valeur, et permet de l’effacer avec Échap.',
              placeholder: 'Texte affiché tant que le champ est vide.',
              label: 'Nom accessible, quand aucun <code>&lt;label&gt;</code> ne nomme le champ.',
              inputId: 'Id du champ de texte, pour <code>&lt;label for&gt;</code>.',
              disabled: 'Désactive le champ.',
              compareWith:
                'Indique si deux valeurs correspondent à la même option, pour les valeurs qui sont des objets.',
              displayWith:
                'Texte d’une valeur absente des options, par exemple définie avant leur chargement.',
              virtual:
                'Ne rend que les lignes visibles : toujours, jamais, ou <code>auto</code> au-delà de 200 lignes.',
              queryChange: 'Émet le texte au fil de la saisie, pour une recherche côté serveur.',
              openChange: 'Émet quand la liste s’ouvre ou se ferme.',
              show: 'Ouvre la liste.',
              hide: 'Ferme la liste.',
              clear: 'Efface la valeur et le texte.',
              focus: 'Place le focus sur le champ de texte.',
            },
          },
          NuiOptionTemplate: {
            summary:
              'Placez-le sur un <code>ng-template</code> dans le composant pour dessiner vous-même chaque ligne. Le contexte contient l’option et sa ligne.',
            members: {},
          },
          NuiOptionText: {
            summary:
              'Dessine le libellé d’une option avec les lettres trouvées surlignées, sa description et son chemin, pour vos propres lignes.',
            members: { nuiOptionText: 'La ligne, issue du contexte du template.' },
          },
        },
        keyboard: [
          ['Flèches bas et haut', 'Ouvre la liste, puis parcourt les options.'],
          ['Page suivante et Page précédente', 'Avance ou recule de dix options.'],
          ['Entrée', 'Choisit l’option active.'],
          ['Alt + flèche bas ou haut', 'Ouvre ou ferme la liste.'],
          ['Échap', 'Ferme la liste ; puis efface le texte, ou la valeur si elle est effaçable.'],
          ['Retour arrière', 'Dans un champ vide, supprime le dernier chip.'],
          [
            'Flèche gauche',
            'Depuis le début du texte (flèche droite dans un texte de droite à gauche), passe aux chips. Là, Retour arrière ou Suppr retire un chip.',
          ],
        ],
        notes: [
          'Le champ de texte est une <code>combobox</code> avec <code>aria-autocomplete="list"</code>, <code>aria-expanded</code> et <code>aria-controls</code>. Le focus y reste, et <code>aria-activedescendant</code> désigne l’option active.',
          'Les chips forment une liste nommée, et chaque bouton de suppression porte le nom de son chip, par exemple « Remove Italy ».',
          '« No matches » et la ligne de chargement sont des messages d’état : les lecteurs d’écran les annoncent.',
          'Les touches qui valident une composition de l’IME, pour le chinois ou le japonais par exemple, lui sont laissées.',
        ],
      },
      command: {
        name: 'Palette de commandes',
        title: 'Composant palette de commandes pour Angular',
        summary: 'Toutes les commandes de votre application, à portée de clavier.',
        description:
          'Palette de commandes Angular accessible : ⌘K de partout, recherche floue dans les pages imbriquées, groupes et raccourcis adaptés à chaque plateforme.',
        apiDescription:
          'Référence de l’API de la palette de commandes Needless UI : nui-command-palette avec commands, hotkey, bindShortcuts et loop, et la structure NuiCommand.',
        a11yDescription:
          'Accessibilité de la palette de commandes Needless UI : boîte de dialogue modale avec combobox de recherche, descendant actif et navigation entre pages.',
        overview: [
          'La palette de commandes est un champ de recherche parmi les commandes de votre application, dans une boîte de dialogue modale. ⌘K l’ouvre depuis n’importe où (Ctrl+K sous Windows et Linux). Choisissez une commande : la palette se ferme, puis l’exécute.',
          'Les commandes peuvent avoir un groupe, une description, des mots-clés et un raccourci, affiché avec les symboles de chaque plateforme. Une commande avec <code>children</code> ouvre une page d’autres commandes, et depuis le premier niveau, la recherche parcourt aussi les pages.',
        ],
        examples: {
          palette: {
            title: 'Commandes et pages',
            text: 'Groupes, raccourcis, une commande désactivée et deux pages. <code>(run)</code> indique ce qui s’est exécuté ; le <code>run</code> de chaque commande fonctionne aussi.',
          },
          people: {
            title: 'Lignes personnalisées',
            text: 'Un <code>nuiOptionTemplate</code> dessine chaque ligne, et <code>nuiOptionText</code> conserve le surlignage des correspondances. <code>[hotkey]="null"</code> laisse ⌘K à la palette ci-dessus.',
          },
        },
        api: {
          NuiCommandPalette: {
            summary: 'Une boîte de dialogue modale avec un champ de recherche parmi vos commandes.',
            members: {
              commands: 'Les commandes, sous forme d’objets <code>NuiCommand</code>.',
              open: 'Indique si la palette est ouverte.',
              hotkey:
                'Le raccourci qui l’ouvre et la ferme depuis n’importe où, ou <code>null</code> pour aucun. <code>mod</code> vaut ⌘ sur les appareils Apple et Ctrl ailleurs.',
              bindShortcuts:
                'Exécute aussi les commandes par leurs propres raccourcis, partout sur la page.',
              loop: 'Descendre depuis la dernière commande mène à la première, et monter depuis la première, à la dernière.',
              filtering:
                'Filtre pendant la saisie. Désactivez-le quand un serveur filtre les commandes.',
              loading: 'Affiche une ligne de chargement en attendant les résultats.',
              hints: 'Affiche en bas les touches à utiliser.',
              virtual:
                'Ne rend que les lignes visibles : toujours, jamais, ou <code>auto</code> au-delà de 200 lignes.',
              label: 'Nom accessible de la boîte de dialogue et de son champ de recherche.',
              placeholder: 'Texte affiché dans le champ de recherche vide.',
              run: 'Émet chaque commande exécutée.',
              queryChange: 'Émet le texte au fil de la saisie, pour une recherche côté serveur.',
              show: 'Ouvre la palette.',
              hide: 'Ferme la palette.',
              toggle: 'Ouvre la palette, ou la ferme.',
              back: 'Revient à la page précédente.',
            },
          },
          NuiCommand: {
            summary: 'Une commande, ou une page de commandes.',
            members: {
              label: 'Le texte affiché et recherché.',
              description: 'Texte secondaire sous le libellé.',
              group: 'Les commandes du même groupe sont listées sous ce titre.',
              keywords: 'D’autres mots trouvés par la recherche, comme des synonymes.',
              shortcut: 'Les touches affichées avec elle, par exemple <code>mod+shift+p</code>.',
              disabled: 'Affichée, mais ne peut pas s’exécuter.',
              children:
                'Les commandes du niveau inférieur : choisir celle-ci les ouvre sous forme de page.',
              run: 'S’exécute quand on la choisit, une fois la palette fermée.',
              id: 'Pour votre propre usage, par exemple distinguer les commandes dans <code>(run)</code>.',
            },
          },
        },
        keyboard: [
          ['⌘K ou Ctrl+K', 'Ouvre ou ferme la palette.'],
          ['Flèches bas et haut', 'Parcourt les commandes, en boucle.'],
          ['Page suivante et Page précédente', 'Avance ou recule de dix commandes.'],
          ['Entrée', 'Exécute la commande active, ou ouvre sa page.'],
          ['Échap', 'Revient à la page précédente ; au premier niveau, ferme la palette.'],
          ['Retour arrière', 'Dans un champ vide, sur une page, revient en arrière.'],
        ],
        notes: [
          'C’est un <code>&lt;dialog&gt;</code> modal natif : la page en arrière-plan est inerte, le focus reste à l’intérieur et la fermeture rend le focus là où il était.',
          'Le champ de recherche est une <code>combobox</code> qui désigne la commande active avec <code>aria-activedescendant</code>. Sur une page, il prend le nom de la page.',
          'Les touches de raccourci sont du texte dans chaque option : les lecteurs d’écran les lisent. Les indications de touches en bas sont masquées aux technologies d’assistance.',
          'Les raccourcis sans Ctrl, Alt ou ⌘ ne s’exécutent pas pendant la saisie dans un champ.',
        ],
      },
      popover: {
        name: 'Popover',
        title: 'Composants popover et hovercard pour Angular',
        summary: 'Des panneaux flottants à côté d’un bouton, et des infobulles riches au survol.',
        description:
          'Popover et hovercard Angular accessibles, sur l’API popover native : placement qui bascule et suit, flèches, fermeture au clic extérieur et délais de survol.',
        apiDescription:
          'Référence de l’API du popover Needless UI : nuiPopover et nuiHovercard avec side, align, offset et arrow, et leurs directives de déclenchement.',
        a11yDescription:
          'Clavier et accessibilité du popover et de la hovercard Needless UI : rôles dialog et tooltip, retour du focus, Échap et WCAG 1.4.13.',
        overview: [
          'Un popover est un petit panneau qui s’ouvre à côté d’un bouton, pour du contenu interactif : des filtres, un court formulaire, un sélecteur de couleur. C’est un <code>popover="auto"</code> natif : le navigateur le ferme avec Échap ou un clic à l’extérieur, rend le focus et le place juste après son déclencheur dans l’ordre de tabulation.',
          'Une hovercard est une infobulle riche. Elle s’ouvre après un court survol, ou immédiatement au focus clavier, et décrit son déclencheur. Elle reste ouverte quand le pointeur passe dessus, pour que son texte puisse être lu et sélectionné.',
          'Les deux basculent de l’autre côté quand la place manque, restent à l’écran et suivent leur déclencheur quand la page défile.',
        ],
        examples: {
          filters: {
            title: 'Filtres',
            text: 'Un popover contenant un formulaire. <code>arrow</code> le fait pointer vers son déclencheur, et <code>hide()</code> le ferme depuis le code.',
          },
          profile: {
            title: 'Hovercard',
            text: 'Survolez un nom, ou atteignez-le avec Tab. La carte décrit le lien : les lecteurs d’écran la lisent après le nom.',
          },
          sides: {
            title: 'Côtés et animations d’entrée',
            text: '<code>side</code> et <code>align</code> définissent où il s’ouvre ; <code>start</code> et <code>end</code> suivent le sens d’écriture. <code>enter</code> et <code>motion</code> définissent son entrée en scène.',
          },
        },
        api: {
          NuiPopover: {
            summary: 'Un popover natif placé à côté de l’élément qui l’a ouvert.',
            members: {
              side: 'Le côté du déclencheur où il s’ouvre. Il bascule quand la place manque.',
              align: 'Son alignement sur le déclencheur, le long de ce côté.',
              offset: 'Écart entre le déclencheur et le panneau, en pixels.',
              arrow: 'Affiche une flèche qui pointe vers le déclencheur.',
              openChange: 'Émet à l’ouverture et à la fermeture.',
              show: 'L’ouvre à côté de n’importe quel élément.',
              hide: 'Le ferme.',
            },
          },
          NuiPopoverTrigger: {
            summary:
              'Un bouton qui ouvre et ferme un popover, avec le <code>popovertarget</code> natif.',
            members: { nuiPopoverTrigger: 'Le popover à ouvrir.' },
          },
          NuiHovercard: {
            summary: 'Une infobulle riche qui décrit son déclencheur.',
            members: {
              side: 'Le côté du déclencheur où elle s’ouvre. Elle bascule quand la place manque.',
              align: 'Son alignement sur le déclencheur, le long de ce côté.',
              offset: 'Écart entre le déclencheur et la carte, en pixels.',
              arrow: 'Affiche une flèche qui pointe vers le déclencheur.',
              openDelay:
                'Millisecondes de survol avant l’ouverture. Le focus clavier l’ouvre immédiatement.',
              closeDelay: 'Millisecondes avant la fermeture, une fois que le pointeur est parti.',
              openChange: 'Émet à l’ouverture et à la fermeture.',
              show: 'L’ouvre à côté de n’importe quel élément.',
              hide: 'La ferme.',
            },
          },
          NuiHovercardTrigger: {
            summary:
              'Affiche une hovercard au survol et au focus clavier, et en fait la description de cet élément.',
            members: { nuiHovercardTrigger: 'La hovercard à afficher.' },
          },
        },
        keyboard: [
          ['Entrée ou Espace sur le déclencheur', 'Ouvre ou ferme le popover.'],
          ['Tab', 'Entre dans un popover ouvert, qui suit directement son déclencheur.'],
          ['Échap', 'Ferme le popover et rend le focus à son déclencheur, ou masque la hovercard.'],
        ],
        notes: [
          'Le popover est un <code>dialog</code> non modal : nommez-le avec <code>aria-label</code> ou <code>aria-labelledby</code>. Son déclencheur reçoit <code>aria-haspopup</code> et l’<code>aria-expanded</code> du navigateur.',
          'La hovercard est un <code>tooltip</code> et l’<code>aria-describedby</code> de son déclencheur : son texte est donc lu avec le déclencheur. N’y mettez pas de contrôles ; utilisez un popover pour cela.',
          'La hovercard respecte le critère WCAG 1.4.13 : Échap la masque sans déplacer le focus, le pointeur peut passer dessus, et elle reste affichée tant qu’elle est survolée ou a le focus.',
        ],
      },
      select: {
        name: 'Select',
        title: 'Composant select pour Angular',
        summary: 'Choisissez une ou plusieurs options, dans une liste courte ou immense.',
        description:
          'Select Angular accessible : simple ou multiple, groupes, arbres, recherche par saisie, tout sélectionner et défilement virtuel pour listes de toute taille.',
        apiDescription:
          'Référence de l’API du select Needless UI : nui-select avec value, values, multiple, selectAll et virtual, la structure NuiOption et les lignes personnalisées.',
        a11yDescription:
          'Clavier et accessibilité du select Needless UI : combobox à sélection seule avec listbox ou arbre, descendant actif, recherche par saisie et touches d’arbre.',
        overview: [
          'Le select est un bouton qui ouvre une liste d’options. Passez-lui <code>options</code>, un tableau de <code>NuiOption</code>, et liez <code>[(value)]</code>, ou <code>[(values)]</code> avec <code>multiple</code>. Il fonctionne aussi avec Signal Forms, les formulaires réactifs et <code>ngModel</code>.',
          'Les options peuvent avoir un <code>group</code>, une <code>description</code> et des <code>keywords</code>, et <code>children</code> transforme la liste en arborescence. Au-delà de 200 lignes, seules les lignes visibles sont rendues : 100 000 options s’ouvrent aussi vite que dix.',
          'Pour saisir et filtrer, utilisez plutôt la <a href="/components/combobox">combobox</a>.',
        ],
        examples: {
          countries: {
            title: 'Groupes',
            text: 'Les options qui ont un <code>group</code> sont listées sous son titre. Taper une lettre mène à l’option suivante qui commence par celle-ci.',
          },
          toppings: {
            title: 'Plusieurs à la fois',
            text: '<code>multiple</code> garde la liste ouverte et lie <code>[(values)]</code>. <code>selectAll</code> ajoute un bouton qui coche ou décoche toutes les options. Les options désactivées ne peuvent pas être choisies.',
          },
          folders: {
            title: 'Arborescence',
            text: 'Les options avec <code>children</code> forment une arborescence. La liste s’ouvre avec les dossiers de l’option choisie dépliés.',
          },
          zones: {
            title: 'Longues listes',
            text: 'Tous les fuseaux horaires, par région. Au-delà de 200 lignes, seules les lignes visibles sont rendues, et l’option active reste rendue pour les lecteurs d’écran.',
          },
        },
        api: {
          NuiSelect: {
            summary: 'Un bouton qui ouvre une liste d’options.',
            members: {
              options: 'Les options, sous forme d’objets <code>NuiOption</code>.',
              value:
                'La valeur choisie, ou <code>null</code>. Fonctionne aussi avec les formulaires.',
              values: 'Les valeurs choisies, avec <code>multiple</code>.',
              multiple:
                'Permet de choisir plusieurs options. La liste reste ouverte pendant la sélection.',
              selectAll:
                'Avec <code>multiple</code>, ajoute un bouton qui coche ou décoche toutes les options.',
              placeholder: 'Texte affiché tant que rien n’est choisi.',
              label: 'Nom accessible, quand aucun <code>&lt;label&gt;</code> ne nomme le bouton.',
              triggerId: 'Id du bouton, pour <code>&lt;label for&gt;</code>.',
              disabled: 'Désactive le select.',
              compareWith:
                'Indique si deux valeurs correspondent à la même option, pour les valeurs qui sont des objets.',
              virtual:
                'Ne rend que les lignes visibles : toujours, jamais, ou <code>auto</code> au-delà de 200 lignes.',
              openChange: 'Émet quand la liste s’ouvre ou se ferme.',
              show: 'Ouvre la liste.',
              hide: 'Ferme la liste.',
              focus: 'Place le focus sur le bouton.',
            },
          },
          NuiOption: {
            summary:
              'Une option. Le select, la combobox et la palette de commandes les acceptent tous.',
            members: {
              value: 'La valeur définie par son choix. De n’importe quel type.',
              label: 'Le texte affiché et recherché.',
              description: 'Texte secondaire sous le libellé.',
              group: 'Les options du même groupe sont listées sous ce titre, dans l’ordre.',
              keywords: 'D’autres mots trouvés par la recherche, comme des synonymes ou des codes.',
              disabled: 'Affichée, mais ne peut pas être choisie.',
              children:
                'Les options du niveau inférieur, qui transforment la liste en arborescence.',
            },
          },
          NuiOptionTemplate: {
            summary:
              'Placez-le sur un <code>ng-template</code> dans le composant pour dessiner vous-même chaque ligne. Le contexte contient l’option et sa ligne.',
            members: {},
          },
          NuiOptionText: {
            summary:
              'Dessine le libellé d’une option avec les lettres trouvées surlignées, sa description et son chemin, pour vos propres lignes.',
            members: { nuiOptionText: 'La ligne, issue du contexte du template.' },
          },
        },
        keyboard: [
          ['Flèches bas et haut', 'Ouvre la liste, puis parcourt les options.'],
          ['Début et Fin', 'Va à la première ou à la dernière option.'],
          ['Page suivante et Page précédente', 'Avance ou recule de dix options.'],
          ['Entrée ou Espace', 'Ouvre la liste, ou choisit l’option active.'],
          ['Lettres', 'Passe à l’option suivante qui commence par ces lettres.'],
          [
            'Flèches droite et gauche',
            'Dans une arborescence, déplie une option ou va à son premier enfant ; la replie ou va à son parent. Les flèches s’inversent dans un texte de droite à gauche.',
          ],
          ['Alt + flèche haut', 'Choisit l’option active et ferme la liste.'],
          ['Tab', 'En choix simple, choisit l’option active et passe à la suite.'],
          ['Échap', 'Ferme la liste sans choisir.'],
        ],
        notes: [
          'Le bouton est une <code>combobox</code> à sélection seule avec <code>aria-expanded</code> et <code>aria-controls</code>. Le focus y reste, et <code>aria-activedescendant</code> désigne l’option active.',
          'La liste est une <code>listbox</code>, ou un <code>tree</code> avec <code>aria-level</code> et <code>aria-expanded</code>. <code>aria-setsize</code> et <code>aria-posinset</code> restent justes même quand seules quelques lignes sont rendues.',
          'L’option active a un remplissage plein et, en mode couleurs forcées, un contour.',
          'Nommez-le avec un <code>&lt;label for&gt;</code> qui pointe vers <code>triggerId</code>, ou avec <code>label</code>.',
        ],
      },
      grid: {
        name: 'Grille de données',
        title: 'Composant grille de données pour Angular',
        summary:
          'Triez, filtrez, sélectionnez, modifiez et faites défiler un nombre illimité de lignes.',
        description:
          'Grille de données Angular accessible sur un tableau natif : tri multicolonne, filtres, pagination ou virtualisation, sélection, édition et colonnes déplaçables.',
        apiDescription:
          'Référence de l’API de la grille de données Needless UI : inputs et modèles de nui-grid, la définition NuiGridColumn et les templates de cellules sur mesure.',
        a11yDescription:
          'Clavier et accessibilité de la grille de données Needless UI : tableau natif avec rôles grid, un seul arrêt de tabulation, flèches et annonces.',
        overview: [
          'La grille de données est un tableau natif avec tri, filtres, pagination et édition. Décrivez les <code>columns</code>, passez les <code>rows</code>, et chaque cellule est formatée selon son type et les paramètres régionaux : nombres, devises, dates, oui et non, et libellés des valeurs <code>enum</code>.',
          'Son état réside dans des modèles que vous pouvez lier, enregistrer et envoyer à un serveur : <code>sort</code>, <code>filters</code>, <code>search</code>, <code>page</code>, <code>selected</code>, et <code>columnState</code> pour les largeurs, l’ordre, les colonnes épinglées et masquées que choisissent les utilisateurs. Sans pagination, seules les lignes visibles sont rendues : 100 000 lignes défilent comme dix.',
          'Chaque cellule est accessible au clavier, et le panneau de chaque colonne permet de la trier, la filtrer, l’épingler, la déplacer, l’ajuster au contenu et la masquer.',
          'Les lignes peuvent aussi s’imbriquer. <code>groupBy</code> les regroupe par colonnes, avec l’<code>aggregate</code> de chaque colonne sur les lignes de groupe et dans une ligne <code>totals</code> ; <code>children</code> affiche des données arborescentes ; et un template <code>nuiGridDetail</code> s’ouvre sous une ligne. Groupé ou imbriqué, le tableau est un <code>treegrid</code>.',
        ],
        examples: {
          orders: {
            title: 'Recherche, tri et pagination',
            text: 'Saisissez du texte pour chercher dans toutes les colonnes. Cliquez sur un en-tête pour trier ; Maj + clic ajoute une deuxième colonne. <code>nuiGridCell</code> dessine le statut, et <code>exportCsv()</code> fournit ce qui est affiché.',
          },
          selection: {
            title: 'Sélection',
            text: '<code>selection="multiple"</code> ajoute des cases à cocher et lie les clés des lignes sélectionnées. Maj + clic sélectionne une plage ; la case de l’en-tête sélectionne toutes les lignes correspondantes.',
          },
          editing: {
            title: 'Édition',
            text: 'Double-cliquez sur une cellule, appuyez sur Entrée ou tapez directement. <code>validate</code> garde l’éditeur ouvert avec un message ; une modification validée met à jour <code>rows</code> et émet <code>cellEdit</code>.',
          },
          big: {
            title: '100 000 lignes',
            text: 'Sans pagination, seules les lignes visibles sont rendues. Les colonnes épinglées restent sur les bords, et <code>columnState</code> conserve la disposition choisie par l’utilisateur.',
          },
          server: {
            title: 'Données du serveur',
            text: 'En mode <code>server</code>, la grille affiche les lignes telles qu’elles arrivent et signale chaque changement dans <code>queryChange</code>. Activez <code>loading</code> pendant le chargement.',
          },
          groups: {
            title: 'Groupes et totaux',
            text: 'Groupez par une ou deux colonnes. Les lignes de groupe comptent leurs commandes et donnent la somme et la moyenne de leurs montants, et <code>totals</code> fait de même pour toutes les lignes. La flèche gauche ferme un groupe.',
          },
          tree: {
            title: 'Données arborescentes',
            text: '<code>children</code> donne à chaque dossier ses fichiers. Les lignes s’ouvrent avec la flèche droite ou leur bouton bascule, et <code>[(expanded)]</code> garde la trace de celles qui sont ouvertes. Une recherche garde ouverts les dossiers au-dessus d’un résultat.',
          },
          details: {
            title: 'Détails de ligne',
            text: 'Un template <code>nuiGridDetail</code> affiche les articles d’une commande sous celle-ci, depuis une colonne de boutons bascules, et <code>[(details)]</code> garde la trace de celles qui sont ouvertes.',
          },
          live: {
            title: 'Données en direct, export et impression',
            text: 'Les prix changent toutes les deux secondes, et <code>flash</code> montre quelles cellules ont changé. <code>exportXlsx()</code> télécharge une vraie feuille de calcul, <code>print()</code> imprime toutes les lignes, et <code>layout="auto"</code> affiche des cartes sur les écrans étroits.',
          },
        },
        api: {
          NuiGrid: {
            summary: 'Une grille de données sur un tableau natif.',
            members: {
              rows: 'Les données. Les modifications remplacent des lignes : liez-les avec <code>[(rows)]</code>.',
              columns: 'Les colonnes, sous forme d’objets <code>NuiGridColumn</code>.',
              rowId: 'La clé d’une ligne, pour la sélection et le suivi.',
              label: 'Nom accessible de la grille.',
              selection: 'Si les lignes sont sélectionnables, et combien.',
              selected: 'Les clés des lignes sélectionnées.',
              sort: 'Le tri, sous forme d’objets <code>{ column, direction }</code> ; le premier trie en premier.',
              filters: 'Un filtre par id de colonne : un opérateur et une valeur.',
              search: 'Des mots qui doivent tous figurer dans une ligne.',
              pageSize: 'Lignes par page, ou 0 pour une seule liste défilante.',
              page: 'La page affichée, à partir de 0.',
              pageSizes: 'Les choix de la pagination.',
              virtual:
                'Ne rend que les lignes visibles : toujours, jamais, ou <code>auto</code> au-delà de 100 lignes sans pagination.',
              height: 'Une longueur CSS qui limite la grille ; elle défile à l’intérieur.',
              columnState:
                'La largeur, l’ordre, l’épinglage et la visibilité de chaque colonne, à enregistrer et restaurer.',
              mode: '<code>server</code> affiche les lignes telles qu’elles arrivent et vous laisse le tri, le filtrage et la pagination.',
              total: 'Le nombre de lignes sur le serveur.',
              loading:
                'Affiche une barre de progression, et des lignes provisoires tant qu’il n’y en a aucune.',
              locale: 'Formate les nombres et les dates, et lit les nombres saisis.',
              labels: 'Tous les textes que la grille affiche ou annonce, à traduire.',
              rowActivate: 'Émet une ligne ouverte avec Entrée ou un double clic.',
              cellEdit: 'Émet chaque modification validée.',
              queryChange: 'Émet le tri, les filtres, la recherche et la page à chaque changement.',
              exportCsv: 'Les lignes filtrées et triées des colonnes visibles, en CSV.',
              focusCell: 'Place le focus sur une cellule ; la ligne <code>-1</code> est l’en-tête.',
              clearFilters: 'Efface tous les filtres et la recherche.',
              'groupBy, collapsed':
                'Les colonnes selon lesquelles regrouper les lignes, la plus externe d’abord, et les clés des groupes fermés.',
              children: 'Les enfants d’une ligne : la grille affiche des données arborescentes.',
              'expanded, details':
                'Les clés des lignes ouvertes dans les données arborescentes, et celles des lignes dont les détails sont ouverts.',
              'totals, flash':
                'Une ligne d’agrégats sur toutes les lignes filtrées ; des cellules qui clignotent quand leur texte change, dans les lignes dotées d’un <code>rowId</code> stable.',
              layout:
                '<code>list</code> affiche les lignes sous forme de cartes, et <code>auto</code> le fait sur les écrans étroits.',
              'exportXlsx, print':
                'Les lignes filtrées et triées sous forme de feuille de calcul ; imprime toutes les lignes.',
            },
          },
          NuiGridColumn: {
            summary: 'Une colonne. Seuls <code>id</code> et <code>header</code> sont obligatoires.',
            members: {
              id: 'Unique ; la clé dans le tri, les filtres et l’état des colonnes.',
              header: 'Le texte de l’en-tête.',
              value:
                'Une clé de la ligne, ou une fonction de la ligne. Par défaut, <code>row[id]</code>.',
              type: 'Détermine l’alignement, le tri, le filtre et l’éditeur.',
              format:
                'Options <code>Intl</code> pour les nombres et les dates, ou une fonction qui produit le texte.',
              options:
                'Les options d’une colonne <code>enum</code>, sous forme d’objets <code>NuiOption</code>.',
              'width, minWidth, maxWidth': 'En pixels.',
              flex: 'Partage l’espace restant avec les autres colonnes <code>flex</code>.',
              align: 'Par défaut, selon le type : nombres et dates à la fin.',
              'pinned, hidden': 'L’épinglage et la visibilité initiaux de la colonne.',
              'sortable, filterable, resizable, reorderable, hideable':
                'Chacun se désactive avec <code>false</code>.',
              compare: 'Un tri personnalisé.',
              'editable, validate':
                'Si les cellules sont modifiables, et un message quand une valeur n’est pas valide.',
              set: 'Produit la ligne modifiée. Par défaut, une copie avec la nouvelle valeur.',
              aggregate:
                'Ce qu’affichent les lignes de groupe et la ligne de totaux : une somme, une moyenne, un minimum, un maximum, un décompte ou une fonction.',
            },
          },
          NuiGridCell: {
            summary:
              'Dessine les cellules d’une colonne. Le contexte contient la ligne, la valeur et le texte.',
            members: { nuiGridCell: 'L’id de la colonne.' },
          },
          NuiGridHeader: {
            summary: 'Dessine l’en-tête d’une colonne.',
            members: { nuiGridHeader: 'L’id de la colonne.' },
          },
          NuiGridEmpty: {
            summary:
              'Ce qui s’affiche quand il n’y a aucune ligne. Le contexte indique si des filtres les ont masquées.',
            members: {},
          },
          NuiGridDetail: {
            summary:
              'Les détails d’une ligne, affichés dessous quand elle est ouverte. Le contexte contient la ligne.',
            members: {},
          },
        },
        keyboard: [
          [
            'Touches fléchées',
            'Déplacent d’une cellule. Gauche et droite s’inversent dans un texte de droite à gauche.',
          ],
          [
            'Début et Fin',
            'Va à la première ou à la dernière cellule de la ligne ; avec Ctrl, de la grille.',
          ],
          ['Page suivante et Page précédente', 'Avance ou recule d’un écran de lignes.'],
          ['Entrée ou Espace sur un en-tête', 'Trie selon la colonne ; avec Maj, l’ajoute au tri.'],
          ['Alt + flèche bas sur un en-tête', 'Ouvre le panneau de la colonne.'],
          [
            'Alt + flèche gauche ou droite sur un en-tête',
            'Rétrécit ou élargit la colonne ; avec Maj, la déplace.',
          ],
          [
            'Entrée sur une cellule',
            'Modifie la cellule, ou ouvre la ligne si elle n’est pas modifiable.',
          ],
          ['F2, ou saisie', 'Modifie la cellule.'],
          [
            'Entrée, Échap et Tab pendant l’édition',
            'Valide, annule, ou valide et passe à la suite.',
          ],
          [
            'Espace',
            'Sélectionne la ligne ; avec Maj, les lignes depuis la dernière sélectionnée.',
          ],
          ['Ctrl + A', 'Sélectionne toutes les lignes.'],
          [
            'Flèches droite et gauche sur un groupe',
            'L’ouvrent ou le ferment ; de même sur la première cellule d’une ligne qui a des enfants.',
          ],
          ['Entrée sur un groupe', 'L’ouvre ou le ferme ; Espace sélectionne ses lignes.'],
          ['Entrée sur un bouton de détails', 'Affiche ou masque les détails de la ligne.'],
        ],
        notes: [
          'Un <code>&lt;table&gt;</code> natif avec <code>role="grid"</code>, nommé par <code>label</code>. Les en-têtes portent <code>aria-sort</code>, et les lignes sélectionnables <code>aria-selected</code>.',
          'La grille ne compte qu’un seul arrêt de tabulation. Le focus passe de cellule en cellule grâce à un <code>tabindex</code> itinérant : les lecteurs d’écran lisent chaque cellule avec ses en-têtes de ligne et de colonne.',
          '<code>aria-rowcount</code>, <code>aria-rowindex</code> et <code>aria-colindex</code> restent justes quand les lignes sont paginées ou virtualisées.',
          'Le tri, le filtrage, la pagination et les erreurs d’édition sont annoncés poliment dans une région d’état.',
          'Des lignes groupées ou imbriquées font du tableau un <code>treegrid</code> : les lignes portent <code>aria-level</code>, <code>aria-setsize</code> et <code>aria-posinset</code>, et <code>aria-expanded</code> quand elles peuvent s’ouvrir. Les agrégats sont lus avec leur type, par exemple « Sum: 475 ».',
        ],
      },
      chat: {
        name: 'Chat',
        title: 'Composant de chat IA pour Angular',
        summary: 'Discutez avec un modèle : réponses en streaming, outils, versions et fichiers.',
        description:
          'Chat Angular accessible pour assistants IA : réponses Markdown en streaming, raisonnement, appels d’outils, sources, fichiers et relances gardées en versions.',
        apiDescription:
          'Référence de l’API du chat Needless UI : inputs de nui-chat, la NuiChatSession qui diffuse les réponses, messages, templates d’outils et lecteurs de flux.',
        a11yDescription:
          'Clavier et accessibilité du chat Needless UI : un flux de messages nommés, Page précédente et Page suivante, et des réponses annoncées une fois complètes.',
        overview: [
          'Le chat, c’est tout ce qui se trouve entre vos utilisateurs et un modèle. Créez une <code>NuiChatSession</code> avec une fonction <code>respond</code>, et <code>&lt;nui-chat&gt;</code> fait le reste : il affiche la réponse en Markdown au fil du streaming, la suit vers le bas jusqu’à ce que l’utilisateur remonte, et transforme le bouton d’envoi en bouton d’arrêt pendant qu’elle arrive.',
          '<code>respond</code> renvoie du texte, une promesse, une <code>async function*</code> ou un Observable : toute API convient. Au-delà du texte, une réponse peut porter le raisonnement du modèle, ses appels d’outils (dessinés par vos templates) et les sources utilisées. <code>nuiEventStream</code> lit les server-sent events que diffusent la plupart des API de modèles.',
          'Rien ne se perd : une réponse relancée ou une question modifiée devient une nouvelle version à côté de l’ancienne, et la conversation garde chaque branche. Les lecteurs d’écran annoncent chaque réponse une fois complète, pas mot à mot.',
        ],
        examples: {
          assistant: {
            title: 'Un assistant',
            text: 'Des suggestions lancent la conversation. Les réponses arrivent en Markdown au fil du streaming ; arrêtez-les, relancez-les, notez-les ou modifiez votre question. <code>attach</code> accepte les fichiers choisis, collés ou déposés.',
          },
          tools: {
            title: 'Raisonnement, outils et sources',
            text: 'Des deltas ajoutent à la réponse le raisonnement du modèle, les appels d’outils et les sources. <code>nuiChatTool</code> dessine l’outil météo sous forme de carte ; les autres outils se replient avec leur entrée et leur sortie.',
          },
          server: {
            title: 'Streaming depuis un serveur',
            text: '<code>nuiEventStream</code> lit un flux d’événements façon OpenAI, et une <code>NuiChatError</code> affiche son message. <code>all()</code> enregistre la conversation, versions comprises.',
          },
        },
        api: {
          NuiChat: {
            summary: 'La conversation et la zone de saisie, réunies.',
            members: {
              session: 'La conversation à afficher.',
              assistant:
                'Le nom de l’assistant, dans les titres qu’annoncent les lecteurs d’écran.',
              headingLevel:
                'Le niveau du titre de chaque message, que seuls les lecteurs d’écran perçoivent. Les titres des réponses descendent d’un niveau.',
              announce:
                'Ce qu’annoncent les lecteurs d’écran quand une réponse est complète : tout, un court avis, ou rien.',
              images: 'Affiche les images des réponses. Sinon, leur texte renvoie vers elles.',
              value: 'Le texte en cours de saisie.',
              placeholder: 'L’indication dans le champ vide.',
              suggestions: 'Des prompts à envoyer d’un clic, jusqu’au premier message.',
              sendOn:
                'Si l’envoi se fait avec Entrée, ou avec Ctrl ou ⌘ + Entrée. <code>auto</code> envoie avec Entrée quand il y a un clavier ; sur les écrans tactiles, Entrée passe à la ligne et c’est le bouton qui envoie.',
              disabled: 'Empêche l’envoi depuis la zone de saisie.',
              attach: 'Accepte des fichiers : choisis, collés ou déposés.',
              accept:
                'Les types de fichiers acceptés, comme pour <code>&lt;input type="file"&gt;</code>.',
              maxFiles: 'Le nombre de fichiers qu’un message peut contenir.',
              maxSize: 'La taille maximale d’un fichier, en octets.',
              labels: 'Tous les textes que le chat affiche ou annonce, à traduire.',
              rated:
                'Émet une réponse évaluée par l’utilisateur, avec son avis, ou <code>null</code> s’il le retire.',
              focus: 'Place le focus sur le champ de texte.',
              scrollToEnd: 'Fait défiler jusqu’au dernier message, et le suit.',
            },
          },
          NuiChatSession: {
            summary:
              'La conversation, sans aucun DOM. Créez-la dans un composant, avec les options <code>respond</code>, <code>messages</code> et <code>id</code>.',
            members: {
              respond:
                'Votre fonction : écrit la réponse à <code>request.messages</code> et s’arrête quand <code>request.signal</code> est interrompu.',
              messages: 'La conversation à l’écran.',
              all: 'Tous les messages de toutes les versions, à enregistrer puis à repasser en <code>messages</code>.',
              busy: 'Indique si une réponse est en route.',
              send: 'Envoie un message et demande une réponse.',
              stop: 'Arrête la réponse en gardant ce qu’elle a écrit.',
              retry: 'Redemande. La nouvelle réponse est une version à côté de l’ancienne.',
              edit: 'Envoie une nouvelle version d’un des messages de l’utilisateur.',
              versions: 'Toutes les versions d’un message, de la plus ancienne à la plus récente.',
              show: 'Bascule la conversation sur cette version.',
              rate: 'Enregistre l’avis de l’utilisateur sur une réponse.',
              'remove, load, clear':
                'Supprime un message et ce qui le suit, remplace la conversation, ou repart de zéro.',
            },
          },
          NuiChatMessage: {
            summary:
              'Un message. Les messages de même <code>parent</code> sont des versions les uns des autres.',
            members: {
              'id, parent': 'La clé du message, et celle du message qu’il suit.',
              role: 'Qui l’a écrit.',
              text: 'Du Markdown pour l’assistant, du texte brut pour l’utilisateur.',
              status: 'Où en est une réponse, de l’attente à la fin.',
              reasoning: 'Ce que le modèle a pensé avant de répondre.',
              tools: 'Les outils appelés, avec leur état, leur entrée et leur sortie.',
              sources: 'Les pages utilisées.',
              attachments: 'Les fichiers envoyés avec lui.',
              rating: 'L’avis de l’utilisateur.',
              data: 'Tout ce qu’il faut garder avec lui, comme le nom du modèle.',
            },
          },
          NuiChatToolTemplate: {
            summary:
              'Dessine un appel d’outil, par exemple une carte météo. Le contexte contient l’appel et son message.',
            members: {
              nuiChatTool:
                'Le nom de l’outil. Sans nom, il dessine chaque appel qu’aucun autre template ne nomme.',
            },
          },
          NuiChatThread: {
            summary:
              'La conversation seule, pour votre propre mise en page. Elle accepte les inputs de <code>nui-chat</code> qui concernent la conversation.',
            members: {},
          },
          NuiChatComposer: {
            summary:
              'La zone de saisie seule. Elle accepte les inputs de <code>nui-chat</code> qui concernent la saisie.',
            members: {},
          },
          NuiServerEvent: {
            summary:
              'Ce que <code>nuiEventStream</code> produit pour chaque événement. <code>nuiTextStream</code> lit du texte brut et <code>nuiJsonStream</code> des lignes JSON ; les trois prennent une réponse <code>fetch</code>.',
            members: {
              event: 'Le nom de l’événement.',
              data: 'Ses lignes de données, jointes.',
              id: 'Le dernier id envoyé par le flux.',
            },
          },
          NuiChatError: {
            summary:
              'Levez-la depuis <code>respond</code> pour afficher son message. Toute autre erreur affiche un message générique, pour que rien d’interne ne fuite.',
            members: {},
          },
        },
        keyboard: [
          ['Page suivante et Page précédente', 'Passe au message suivant ou précédent.'],
          ['Ctrl + Fin et Ctrl + Début', 'Quitte la conversation, vers l’avant ou vers l’arrière.'],
          ['Entrée', 'Envoie. Avec Maj, passe à la ligne.'],
          ['Échap', 'Quitte la modification d’un message.'],
        ],
        notes: [
          'La conversation est un <code>feed</code> d’éléments <code>article</code>. Chacun est nommé par un titre que seuls les lecteurs d’écran perçoivent, comme « You said », et porte <code>aria-posinset</code> et <code>aria-setsize</code>.',
          'Une réponse en cours d’écriture est <code>aria-busy</code>. Une fois complète, elle est annoncée en entier ; un échec est annoncé aussitôt.',
          'Chaque bouton icône a un nom et une infobulle. Les évaluations sont des boutons bascules, et le sélecteur de version est un groupe nommé par exemple « Version 2 of 3 ».',
          'Le raisonnement et les appels d’outils sont des éléments dépliables natifs. Retirer un fichier rend le focus au champ de texte.',
        ],
      },
      markdown: {
        name: 'Markdown',
        title: 'Composant de rendu Markdown pour Angular',
        summary: 'Affichez du Markdown en toute sécurité, même en plein streaming.',
        description:
          'Moteur de rendu Markdown sûr pour Angular et les réponses d’IA : tableaux GitHub, listes de tâches et blocs de code en vrais éléments, fluide en streaming.',
        apiDescription:
          'Référence de l’API du moteur de rendu Markdown Needless UI : inputs de nui-markdown, le template des blocs de code et le parseur sous-jacent.',
        a11yDescription:
          'Accessibilité du moteur de rendu Markdown Needless UI : vrais titres, listes et tableaux, zones de défilement nommées et un bouton de copie qui parle.',
        overview: [
          'Le moteur de rendu Markdown transforme un texte comme celui qu’écrit un modèle en vrais éléments : titres, listes et listes de tâches, citations, tableaux, blocs de code avec bouton de copie, et liens. Il analyse le texte en arbre et le dessine avec des templates : le HTML brut reste du texte, et rien n’est jamais inséré en HTML.',
          'Avec <code>streaming</code>, un texte à moitié écrit se lit comme il le sera une fois complet : un délimiteur de code ouvert donne déjà un bloc de code, un <code>**</code> isolé attend son partenaire, et un curseur suit le dernier mot. Les blocs inchangés gardent leur DOM.',
          'Les liens ne fonctionnent que vers des adresses web ou e-mail et des numéros de téléphone, et les images restent des liens tant que vous n’activez pas <code>images</code>.',
        ],
        examples: {
          document: {
            title: 'Un document',
            text: 'Les titres commencent à <code>headingLevel</code>, pour se placer sous ceux de la page. Les tableaux larges et le code défilent dans leur propre région.',
          },
          streaming: {
            title: 'Streaming',
            text: 'Le même texte, quelques caractères à la fois. Aucun symbole n’apparaît, même un instant, et seul le dernier bloc est rendu à nouveau.',
          },
          highlight: {
            title: 'Coloration du code',
            text: '<code>nuiMarkdownCode</code> dessine les blocs de code avec votre propre template, ici avec un minuscule colorateur. Il reçoit le code et son langage.',
          },
        },
        api: {
          NuiMarkdown: {
            summary: 'Rend le Markdown sous forme d’éléments.',
            members: {
              text: 'Le Markdown.',
              streaming: 'Le texte arrive encore.',
              headingLevel:
                'Le niveau d’un titre <code>#</code>. Les niveaux inférieurs suivent, jusqu’à 6.',
              images:
                'Affiche les images. Sinon, leur texte renvoie vers elles, car une image peut servir au pistage.',
              labels: 'Les textes du bouton de copie, entre autres, à traduire.',
              codeTemplate:
                'Un template de bloc de code venu d’ailleurs, par exemple d’un chat qui contient ce composant.',
            },
          },
          NuiMarkdownCode: {
            summary:
              'Dessine les blocs de code. Le contexte contient le code, <code>lang</code>, et <code>open</code> tant que le bloc arrive encore.',
            members: {},
          },
          nuiParseMarkdown: {
            summary: 'Le parseur et ses utilitaires, à utiliser sans le composant.',
            members: {
              nuiParseMarkdown: 'L’arbre de blocs et d’éléments en ligne que dessine le composant.',
              nuiMarkdownToText:
                'Le texte brut, une ligne par bloc, à annoncer ou à prévisualiser.',
              nuiSafeUrl:
                'Si un lien mène à une adresse web ou e-mail, ou à un numéro de téléphone.',
            },
          },
        },
        keyboard: [
          [
            'Tab',
            'Atteint les liens, les boutons de copie, et les tableaux et le code larges pour les faire défiler.',
          ],
        ],
        notes: [
          'Titres, listes, citations, tableaux avec en-têtes <code>th</code> et <code>scope</code>, et code sont de vrais éléments.',
          'Les tableaux larges et les blocs de code défilent dans une région focalisable ; la région d’un tableau est nommée d’après ses en-têtes.',
          'Les cases des listes de tâches indiquent si chaque tâche est faite. Le bouton de copie s’appelle « Copy code » et annonce « Copied » par un message d’état.',
          'Le curseur de streaming est masqué aux lecteurs d’écran, et reste immobile quand les animations sont réduites.',
        ],
      },
      calendar: {
        name: 'Calendrier',
        title: 'Composant calendrier pour Angular',
        summary: 'Choisissez un jour, une plage ou plusieurs jours, y compris au clavier.',
        description:
          'Calendrier Angular accessible : un jour, une plage ou plusieurs jours, avec min et max, jours indisponibles, mois côte à côte et numéros de semaine.',
        apiDescription:
          'Référence de l’API du calendrier Needless UI : modèles de sélection de nui-calendar, min, max et jours indisponibles, mois côte à côte et libellés.',
        a11yDescription:
          'Clavier et accessibilité du calendrier Needless UI : une grille de jours nommés, flèches par jour et par semaine, Page précédente et Page suivante par mois.',
        overview: [
          'Le calendrier permet de choisir un jour, une plage de jours ou plusieurs jours. Les valeurs sont de simples dates ISO, comme <code>2026-09-25</code>, sans fuseau horaire pour les décaler : elles vont donc directement à un serveur ou à un <code>&lt;input type="date"&gt;</code>.',
          'Les semaines commencent au premier jour prévu par les paramètres régionaux, et les noms et les chiffres suivent leur langue. <code>min</code>, <code>max</code> et <code>unavailable</code> excluent des jours, <code>months</code> affiche plusieurs mois côte à côte, et le titre passe aux mois et aux années pour atteindre les dates lointaines.',
          'Chaque jour est accessible au clavier, comme dans le sélecteur de date de WAI-ARIA, et chacun est nommé par sa date complète.',
        ],
        examples: {
          delivery: {
            title: 'Un jour de livraison',
            text: 'Les jours avant aujourd’hui, après <code>max</code> ou exclus par <code>unavailable</code> ne peuvent pas être choisis, mais le clavier les parcourt quand même.',
          },
          stay: {
            title: 'Une plage',
            text: 'Avec <code>selection="range"</code>, le premier choix fixe le début de la plage, et la surbrillance suit le pointeur jusqu’au second. <code>months="2"</code> et <code>weekNumbers</code> en montrent davantage à la fois.',
          },
          'days-off': {
            title: 'Plusieurs jours',
            text: 'Avec <code>selection="multiple"</code>, chaque choix ajoute ou retire un jour. <code>firstDay</code> fait commencer la semaine un autre jour que celui des paramètres régionaux.',
          },
        },
        api: {
          NuiCalendar: {
            summary: 'Un calendrier pour choisir des jours.',
            members: {
              selection: 'Le nombre de jours qui peuvent être choisis.',
              value: 'Le jour choisi.',
              values: 'Les jours choisis, dans l’ordre.',
              range: 'La plage choisie, bornes incluses.',
              month: 'Le mois affiché, le premier s’il y en a plusieurs.',
              view: 'Jours, mois ou années.',
              'min, max': 'Le premier et le dernier jour qui peuvent être choisis.',
              unavailable: 'Exclut d’autres jours, comme les jours fériés.',
              months: 'Mois côte à côte.',
              weekNumbers: 'Affiche les numéros de semaine ISO.',
              firstDay:
                'Le premier jour de la semaine, 1 pour lundi. Par défaut, celui des paramètres régionaux.',
              locale: 'Formate les noms et les chiffres, et choisit le premier jour de la semaine.',
              labels: 'Tous les textes que le calendrier affiche ou annonce, à traduire.',
              picked: 'Émet chaque choix : un jour, ou une plage une fois complète.',
              focusDate: 'Place le focus clavier sur un jour et affiche son mois.',
            },
          },
          NuiDateRange: {
            summary: 'Une plage de jours.',
            members: { 'start, end': 'Le premier et le dernier jour, tous deux inclus.' },
          },
        },
        keyboard: [
          [
            'Flèches gauche et droite',
            'Jour précédent ou suivant. Les flèches s’inversent dans un texte de droite à gauche.',
          ],
          ['Flèches haut et bas', 'Semaine précédente ou suivante.'],
          ['Début et Fin', 'Premier ou dernier jour de la semaine.'],
          ['Page précédente et Page suivante', 'Mois précédent ou suivant ; avec Maj, année.'],
          ['Entrée ou Espace', 'Choisit le jour, ou zoome sur un mois ou une année.'],
          ['Échap', 'Abandonne la première borne d’une plage, ou revient à la vue plus détaillée.'],
        ],
        notes: [
          'Chaque mois est une <code>grid</code> nommée par son titre, avec les noms complets des jours de la semaine dans <code>abbr</code>.',
          'Chaque jour est nommé par sa date complète, à laquelle s’ajoutent « Today », « unavailable » et les bornes d’une plage. <code>aria-selected</code> marque ce qui est choisi, et <code>aria-disabled</code> ce qui ne peut pas l’être.',
          'La grille ne compte qu’un seul arrêt de tabulation, avec un <code>tabindex</code> itinérant. Les boutons précédent et suivant annoncent le nouveau mois.',
        ],
      },
      'date-picker': {
        name: 'Sélecteur de date',
        title: 'Composants sélecteurs de date et d’heure pour Angular',
        summary:
          'Saisissez une date ou une heure par segments, ou choisissez-la dans un calendrier.',
        description:
          'Sélecteurs de date, d’heure et de plage Angular accessibles : segments dans l’ordre régional, calendrier dans un popover, préréglages et formulaires.',
        apiDescription:
          'Référence de l’API des sélecteurs de date Needless UI : nui-date-field, nui-time-field, nui-date-picker et nui-date-range-picker, avec préréglages.',
        a11yDescription:
          'Clavier et accessibilité des sélecteurs de date Needless UI : un spinbutton pour chaque partie de la date, et un calendrier dans une boîte de dialogue.',
        overview: [
          'Les champs de date et d’heure se saisissent par segments : jour, mois et année dans l’ordre des paramètres régionaux, puis heures et minutes selon leur horloge de 12 ou 24 heures. Chaque segment est un spinbutton : tapez des chiffres et il passe tout seul au suivant, ou faites-le varier avec les flèches. Collez une date entière, et tous les segments se remplissent.',
          'Les sélecteurs ajoutent un calendrier dans un popover, pour une date ou pour une plage avec préréglages. Les valeurs sont de simples chaînes ISO, comme <code>2026-09-25</code> ou <code>2026-09-25T09:30</code>, et chaque champ fonctionne avec Signal Forms, les formulaires réactifs et <code>ngModel</code>.',
          'Sur ce site, les exemples suivent la langue de la page : changez-la pour voir évoluer l’ordre, les séparateurs et les chiffres.',
        ],
        examples: {
          fields: {
            title: 'Champs de date et d’heure',
            text: 'Tapez les chiffres, ou utilisez les flèches. Un second appui sur Retour arrière revient au segment précédent. <code>minuteStep</code> définit de combien les flèches déplacent les minutes.',
          },
          pickers: {
            title: 'Sélecteurs de date',
            text: 'Le bouton ouvre un calendrier sur le jour choisi, et un choix le referme. Avec <code>granularity="minute"</code>, le sélecteur prend aussi une heure, et le calendrier ne change que la date.',
          },
          range: {
            title: 'Une plage de dates',
            text: 'Deux champs et un calendrier sur deux mois. <code>nuiDateRangePresets()</code> ajoute des plages courantes ; la valeur reste null tant que les deux bornes ne sont pas définies, dans l’ordre.',
          },
        },
        api: {
          NuiDateField: {
            summary: 'Une date, ou une date et une heure, saisie par segments.',
            members: {
              value: 'La valeur, ou null tant que tous les segments ne sont pas remplis.',
              granularity: 'S’arrête au jour, ou va jusqu’à l’heure, la minute ou la seconde.',
              'min, max':
                'La première et la dernière valeur autorisées. En dehors de ces bornes, le champ est invalide.',
              placeholder: 'Le point de départ des segments vides avec les flèches.',
              hourCycle:
                'Une horloge de 12 ou 24 heures. Par défaut, celle des paramètres régionaux.',
              minuteStep: 'De combien les flèches déplacent les minutes.',
              'disabled, readonly': 'Empêchent les modifications.',
              locale: 'Définit l’ordre, les séparateurs, les chiffres et l’horloge.',
              labels: 'Tous les textes que le champ annonce, à traduire.',
              invalid:
                'Indique si la valeur est en dehors de <code>min</code> et <code>max</code>.',
              focus: 'Place le focus sur le premier segment vide.',
            },
          },
          NuiTimeField: {
            summary:
              'Une heure de la journée saisie par segments. Il accepte les mêmes inputs que le champ de date.',
            members: { granularity: 'S’arrête à l’heure, à la minute ou à la seconde.' },
          },
          NuiDatePicker: {
            summary:
              'Un champ de date avec un calendrier dans un popover. Il accepte les inputs du champ de date, et ceux-ci.',
            members: {
              unavailable: 'Les jours que le calendrier ne laisse pas choisir.',
              'firstDay, weekNumbers': 'Transmis au calendrier.',
              labels: 'Les textes du champ, du bouton et du calendrier.',
              show: 'Ouvre le calendrier.',
            },
          },
          NuiDateRangePicker: {
            summary:
              'Deux champs de date avec un calendrier de plage. Il accepte les inputs du sélecteur de date, et ceux-ci.',
            members: {
              value:
                'La plage, ou null tant que les deux bornes ne sont pas définies, dans l’ordre.',
              presets: 'Des plages nommées, à choisir en un clic.',
              months: 'Mois côte à côte dans le calendrier ; un seul sur un écran étroit.',
            },
          },
          NuiDateRangePreset: {
            summary: 'Une plage nommée, fixe ou calculée au moment du choix.',
            members: {
              label: 'Son nom.',
              range: 'La plage, ou une fonction qui la crée.',
            },
          },
        },
        keyboard: [
          [
            'Chiffres',
            'Remplissent le segment. Il passe au suivant dès qu’aucun autre chiffre ne peut suivre.',
          ],
          [
            'Flèches haut et bas',
            'Font varier le segment ; Page précédente et Page suivante, par pas plus grands.',
          ],
          ['Flèches gauche et droite, Tab', 'Segment précédent ou suivant.'],
          ['Retour arrière', 'Efface le segment, puis revient au précédent.'],
          ['A et P', 'Choisit AM ou PM.'],
        ],
        notes: [
          'Un champ est un <code>group</code> : nommez-le avec <code>aria-label</code> ou <code>aria-labelledby</code>. Chaque segment est un <code>spinbutton</code> nommé d’après sa partie, qui lit les mois par leur nom et les segments vides comme « Empty ».',
          'Les segments sont du texte modifiable : les claviers virtuels affichent donc directement les chiffres.',
          'Le bouton du sélecteur s’appelle « Choose a date », et son popover est un <code>dialog</code>. Choisir une date rend le focus au bouton.',
          'Le calendrier intégré fonctionne comme le <a href="/components/calendar">calendrier</a>.',
        ],
      },
      scheduler: {
        name: 'Planificateur',
        title: 'Composant planificateur pour Angular',
        summary:
          'Des événements sur un mois, une semaine, un jour ou en agenda, glissés à leur place.',
        description:
          'Planificateur Angular accessible : mois, semaine, jour et agenda, événements superposés côte à côte, glisser pour déplacer et redimensionner, tout au clavier.',
        apiDescription:
          'Référence de l’API du planificateur Needless UI : vues, événements, édition et sélection de nui-scheduler, ses outputs et le template des événements.',
        a11yDescription:
          'Clavier et accessibilité du planificateur Needless UI : grilles de jours et d’heures, événements nommés et un équivalent clavier pour chaque glisser-déposer.',
        overview: [
          'Le planificateur affiche des événements sur un mois, une semaine, un jour ou en agenda. Les événements sont de simples données, avec des heures au format ISO ; ceux qui se chevauchent se partagent la largeur, ceux qui passent minuit apparaissent sur les deux jours, et ceux qui durent toute la journée s’étendent en haut sous forme de barres.',
          'Il ne modifie jamais vos événements de lui-même. Faites glisser un événement, ou son bord inférieur, et <code>eventChange</code> signale les nouveaux horaires ; choisissez une plage horaire sur la grille, et <code>slotSelect</code> la signale. <code>rangeChange</code> vous indique quels jours sont affichés, pour que vous puissiez charger leurs événements.',
          'Tout ce que fait un pointeur, le clavier le fait aussi : la grille ne compte qu’un seul arrêt de tabulation, les flèches parcourent les jours et les heures, et Alt avec les flèches déplace un événement.',
        ],
        examples: {
          planner: {
            title: 'Une semaine à planifier',
            text: 'Avec <code>editable</code> et <code>selectable</code>, faites glisser les événements pour les déplacer, leur bord inférieur pour les redimensionner, et sur une plage libre pour en ajouter un. L’exemple met à jour ses événements à partir des outputs.',
          },
          month: {
            title: 'Un mois et un agenda',
            text: 'Les événements sur plusieurs jours s’affichent en barres ; un jour chargé indique combien d’autres événements il contient. <code>views</code> ne propose que le mois et l’agenda des <code>agendaDays</code> prochains jours.',
          },
          rooms: {
            title: 'Une journée de réservations de salles',
            text: '<code>nuiSchedulerEvent</code> dessine chaque réservation avec sa salle et son organisateur. <code>slotMinutes="15"</code> affine les lignes.',
          },
        },
        api: {
          NuiScheduler: {
            summary: 'Des événements sur un mois, une semaine, un jour ou en agenda.',
            members: {
              events: 'Les événements à afficher.',
              view: 'La vue affichée.',
              views: 'Les vues entre lesquelles on peut basculer.',
              date: 'Le jour affiché, où se trouve aussi le focus clavier.',
              slotMinutes:
                'Les minutes par ligne de la grille horaire, et le pas de déplacement des événements.',
              scrollHour: 'L’heure à laquelle s’ouvre la grille horaire.',
              agendaDays: 'Le nombre de jours à venir que couvre l’agenda.',
              editable:
                'Les événements peuvent être déplacés et redimensionnés, au pointeur comme au clavier.',
              selectable:
                'Une plage horaire peut être choisie sur la grille, pour créer des événements.',
              firstDay:
                'Le premier jour de la semaine, 1 pour lundi. Par défaut, celui des paramètres régionaux.',
              headingLevel: 'Le niveau du titre ; les jours de l’agenda descendent d’un niveau.',
              locale: 'Formate les jours et les heures.',
              labels: 'Tous les textes que le planificateur affiche ou annonce, à traduire.',
              eventClick: 'Émet l’événement cliqué, ou ouvert avec Entrée.',
              eventChange:
                'Émet les nouveaux horaires d’un événement après un déplacement ou un redimensionnement.',
              slotSelect: 'Émet la plage horaire choisie sur la grille.',
              rangeChange: 'Émet le premier et le dernier jour affichés quand ils changent.',
            },
          },
          NuiSchedulerEvent: {
            summary:
              'Un événement. La fin d’un événement avec horaire est exclue ; celle d’un événement sur toute la journée est son dernier jour.',
            members: {
              'id, title': 'Sa clé, et ce qu’il affiche.',
              'start, end':
                'Des dates et heures, ou des dates seules pour les événements sur toute la journée.',
              allDay: 'Par défaut, vrai quand <code>start</code> n’a pas d’heure.',
              tone: 'Sa couleur.',
              editable: 'S’il peut être déplacé, quoi qu’en dise le planificateur.',
              data: 'Tout ce que vous voulez garder avec lui.',
            },
          },
          NuiSchedulerEventTemplate: {
            summary:
              'Dessine les événements. Le contexte contient l’événement et son horaire sous forme de texte.',
            members: {},
          },
        },
        keyboard: [
          [
            'Touches fléchées',
            'Déplacent d’un jour ou d’un créneau. Les flèches s’inversent dans un texte de droite à gauche.',
          ],
          ['Page précédente et Page suivante', 'Mois, semaine ou jour précédent ou suivant.'],
          ['Maj + touches fléchées', 'Étendent la plage choisie.'],
          [
            'Entrée ou Espace sur une cellule',
            'Entre dans ses événements, ou choisit son créneau.',
          ],
          [
            'Flèches haut et bas sur un événement',
            'Événement précédent ou suivant dans la cellule.',
          ],
          ['Alt + touches fléchées sur un événement', 'Le déplacent d’un créneau ou d’un jour.'],
          ['Alt + Maj + flèche haut ou bas', 'Raccourcit ou allonge l’événement.'],
          [
            'Échap',
            'Revient à la cellule, abandonne la plage choisie ou annule un glisser-déposer.',
          ],
        ],
        notes: [
          'Le mois, la semaine et le jour sont des <code>grid</code> nommées chacune par son titre. Les jours sont en tête des colonnes et les heures en tête des lignes : chaque cellule se lit donc avec son jour et son heure.',
          'Chaque événement est un bouton nommé par son titre, son jour et son horaire, comme « Standup, Friday, September 25, 9:00 – 9:30 AM ». Un déplacement ou un redimensionnement annonce le nouvel horaire.',
          'Chaque glisser-déposer a son équivalent au clavier : personne n’a besoin d’un pointeur.',
          'Les vues sont des boutons bascules dans un groupe, et passer à une autre semaine ou à un autre mois en annonce le titre.',
        ],
      },
      splitter: {
        name: 'Splitter',
        title: 'Splitter et panneaux redimensionnables pour Angular',
        summary: 'Des panneaux côte à côte ou empilés, avec des poignées pour les redimensionner.',
        description:
          'Splitter Angular accessible : panneaux redimensionnables côte à côte ou empilés, avec limites, panneaux repliables, tailles enregistrées et tout au clavier.',
        apiDescription:
          'Référence de l’API du splitter Needless UI : orientation et tailles de nuiSplitter, limites et repli des panneaux, et les poignées qui les séparent.',
        a11yDescription:
          'Clavier et accessibilité du splitter Needless UI : poignées focalisables avec une valeur, selon le modèle Window Splitter, flèches, Début, Fin et Entrée.',
        overview: [
          'Un splitter partage son espace entre des panneaux, avec une poignée entre deux panneaux voisins. Faites glisser une poignée, ou donnez-lui le focus et utilisez les flèches. Les tailles sont des pourcentages dont la somme fait 100, et elles se lient avec <code>[(sizes)]</code>.',
          'Chaque panneau accepte une taille initiale, un minimum et un maximum en pixels, en rem ou en pourcentage. Un panneau <code>collapsible</code> se replie quand on le fait glisser sous la moitié de son minimum, ou avec Entrée sur sa poignée, et revient à la taille qu’il avait.',
          'Avec <code>storageKey</code>, les tailles sont conservées dans <code>localStorage</code> : à la visite suivante, chacun retrouve la disposition telle qu’il l’avait laissée.',
        ],
        examples: {
          editor: {
            title: 'Un éditeur',
            text: 'Des fichiers, du code et un aperçu. Les fichiers et l’aperçu se replient, le code garde au moins 30 % de la largeur, et les tailles sont enregistrées.',
          },
          stacked: {
            title: 'Panneaux empilés',
            text: '<code>orientation="vertical"</code> empile les panneaux, et <code>[(sizes)]</code> lit leurs tailles à mesure qu’elles changent.',
          },
        },
        api: {
          NuiSplitter: {
            summary: 'Des panneaux séparés par des poignées.',
            members: {
              orientation: 'Côte à côte, ou empilés.',
              sizes: 'La part de chaque panneau, en pourcentage, dans l’ordre.',
              storageKey: 'Conserve les tailles dans <code>localStorage</code> sous cette clé.',
              step: 'De combien les flèches déplacent une poignée, en pourcentage. Deux fois plus avec Maj.',
              move: 'Déplace d’un pourcentage la frontière qui suit un panneau.',
            },
          },
          NuiSplitterPane: {
            summary: 'Un panneau. Ses tailles acceptent des pixels, des rem ou des pourcentages.',
            members: {
              defaultSize: 'Sa taille de départ, quand il n’y a pas de tailles à restaurer.',
              min: 'Sa taille minimale.',
              max: 'Sa taille maximale.',
              collapsible: 'Il se replie : glissé sous la moitié de son minimum, ou avec Entrée.',
              collapsedSize: 'Sa taille une fois replié, par exemple une barre d’icônes.',
              label: 'Nomme la poignée qui le redimensionne.',
            },
          },
          NuiSplitterHandle: {
            summary: 'La poignée entre deux panneaux.',
            members: {
              label: 'La nomme, quand le libellé du panneau ne le fait pas.',
              disabled: 'Elle ne bouge pas.',
              toggle: 'Replie le panneau voisin, ou le déplie.',
            },
          },
        },
        keyboard: [
          [
            'Flèches gauche et droite',
            'Déplacent la poignée entre des panneaux côte à côte. Les flèches s’inversent dans un texte de droite à gauche.',
          ],
          ['Flèches haut et bas', 'Déplacent la poignée entre des panneaux empilés.'],
          ['Maj + touches fléchées', 'La déplacent deux fois plus loin.'],
          [
            'Début et Fin',
            'Amène le panneau situé avant la poignée à sa taille minimale ou maximale.',
          ],
          ['Entrée', 'Replie le panneau repliable, ou le déplie.'],
        ],
        notes: [
          'Chaque poignée est un <code>separator</code> focalisable, comme dans le modèle Window Splitter de WAI-ARIA : sa valeur est la taille du panneau qui la précède, entre les limites de ce panneau, et <code>aria-controls</code> pointe vers ce panneau.',
          'Nommez les poignées via le <code>label</code> des panneaux : « Files » indique à un lecteur d’écran ce que redimensionne une poignée.',
          'Un double clic sur une poignée replie aussi son panneau, et un glissement capture le pointeur : les mouvements rapides ne perdent pas la poignée.',
        ],
      },
      tour: {
        name: 'Visite guidée',
        title: 'Composant de visite guidée pour Angular',
        summary:
          'Une carte par étape, à côté de ce qu’elle présente, avec la page assombrie autour.',
        description:
          'Visite guidée Angular accessible : une carte par étape à côté de sa cible mise en évidence, des étapes interactives et un focus qui revient à sa place.',
        apiDescription:
          'Référence de l’API de la visite guidée Needless UI : étapes de nui-tour, open et step bidirectionnels, outputs, et cible, placement et hooks de chaque étape.',
        a11yDescription:
          'Clavier et accessibilité de la visite guidée Needless UI : des boîtes de dialogue nommées par leur titre, un focus retenu puis rendu, et Échap pour quitter.',
        overview: [
          'Une visite guidée fait découvrir une page, une étape à la fois. Chaque étape désigne un élément avec une carte à côté et assombrit le reste de la page autour ; une étape sans cible s’affiche au centre.',
          'Les étapes sont de simples données : une cible (un sélecteur, un élément ou une fonction qui en trouve un), un titre, et un contenu sous forme de texte ou de template. <code>beforeShow</code> s’exécute d’abord, pour qu’une étape puisse ouvrir le panneau où se trouve sa cible, et la page défile jusqu’à une cible hors de vue.',
          'Chaque carte est une boîte de dialogue. Elle est modale, sauf si l’étape est <code>interactive</code> : on peut alors utiliser ce qu’elle désigne. Échap met fin à la visite, et le focus revient là où il était.',
        ],
        examples: {
          basics: {
            title: 'Un premier coup d’œil',
            text: 'Quatre étapes, la première sans cible. <code>finished</code> et <code>dismissed</code> distinguent les deux fins possibles.',
          },
          interactive: {
            title: 'Des étapes à essayer',
            text: '<code>beforeShow</code> ouvre les réglages avant que la deuxième étape ne pointe à l’intérieur, et <code>interactive</code> permet d’utiliser l’interrupteur pendant que la carte est affichée.',
          },
        },
        api: {
          NuiTour: {
            summary: 'Une visite guidée.',
            members: {
              steps: 'Les étapes, dans l’ordre.',
              open: 'Indique si la visite est en cours.',
              step: 'L’étape affichée, à partir de 0.',
              labels: 'Tous les textes qu’elle affiche, à traduire.',
              finished: 'Émet quand la dernière étape est terminée.',
              dismissed:
                'Émet l’étape sur laquelle la visite s’est arrêtée, quand elle s’arrête avant la fin.',
              start: 'Démarre la visite, à la première étape ou à celle indiquée.',
              end: 'Met fin à la visite, comme terminée ou abandonnée.',
            },
          },
          NuiTourStep: {
            summary: 'Une étape de la visite.',
            members: {
              target: 'Ce qu’elle désigne. Sans cible, la carte s’affiche au centre.',
              title: 'Le titre de la carte.',
              content: 'Son texte, ou un template.',
              side: 'Le côté de la cible où se place la carte.',
              align: 'L’alignement de la carte par rapport à la cible.',
              padding: 'Marge autour de la cible mise en évidence, en pixels.',
              interactive: 'La cible reste utilisable pendant que la carte est affichée.',
              beforeShow:
                'S’exécute avant l’affichage de l’étape. Si elle renvoie une promesse, la visite l’attend.',
            },
          },
        },
        keyboard: [
          [
            'Tab',
            'Parcourt les boutons de la carte. Lors des étapes modales, le focus reste dans la carte.',
          ],
          [
            'Entrée ou Espace',
            'Active le bouton qui a le focus : « Suivant », « Précédent » ou « Terminer ».',
          ],
          ['Échap', 'Met fin à la visite.'],
        ],
        notes: [
          'Chaque carte est un <code>dialog</code> nommé par son titre et décrit par son contenu. Le focus passe sur son bouton principal à chaque étape, et revient là où il était à la fin de la visite.',
          'Les étapes modales rendent le reste de la page inerte. Les étapes interactives ne sont pas modales : leur cible est accessible au clavier comme au pointeur.',
          'La progression est du texte, comme « 2 of 4 » ; les points ne font que la représenter.',
        ],
      },
      dropzone: {
        name: 'Zone de dépôt',
        title: 'Zone de dépôt et envoi de fichiers pour Angular',
        summary:
          'Déposez des fichiers ou choisissez-les, avec contrôles, aperçus et envois avec progression.',
        description:
          'Zone de dépôt Angular accessible : glisser-déposer, dossiers et collage, contrôle de type et de taille, aperçus d’images, envois avec progression et relance.',
        apiDescription:
          'Référence de l’API de la zone de dépôt Needless UI : fichiers et contrôles de nui-dropzone, la fonction d’envoi et sa file d’attente, ses outputs et ses textes.',
        a11yDescription:
          'Clavier et accessibilité de la zone de dépôt Needless UI : une zone qui est un bouton, des résultats annoncés, des barres de progression et actions nommées.',
        overview: [
          'Une zone de dépôt accepte les fichiers déposés dessus, choisis avec le sélecteur de fichiers ou collés. Les dossiers déposés sont parcourus en entier, et chaque fichier garde son chemin.',
          'Chaque fichier est contrôlé selon <code>accept</code>, <code>maxSize</code>, <code>minSize</code>, <code>maxFiles</code> et votre fonction <code>validate</code>, et les fichiers refusés sont listés avec la raison. Les images ont un aperçu.',
          'Sans fonction <code>upload</code>, la zone garde les fichiers pour un formulaire, dans <code>[(files)]</code>. Avec une fonction, elle les envoie quelques-uns à la fois, avec progression, annulation et relance. Passez le <code>signal</code> de l’envoi à <code>fetch</code>, pour que l’annulation l’interrompe vraiment.',
        ],
        examples: {
          upload: {
            title: 'Envois',
            text: 'Un envoi simulé signale sa progression par paliers. Les fichiers dont le nom contient « fail » échouent, pour montrer la relance, et <code>directory</code> ajoute un bouton pour choisir un dossier.',
          },
          attach: {
            title: 'Pièces jointes d’un formulaire',
            text: 'Pas d’<code>upload</code> : la zone garde jusqu’à trois documents dans <code>[(files)]</code>, et le texte placé à l’intérieur remplace celui par défaut.',
          },
        },
        api: {
          NuiDropzone: {
            summary: 'Un endroit où déposer des fichiers, ou les choisir.',
            members: {
              files: 'Les fichiers qu’elle contient, dans l’ordre.',
              accept:
                'Les types de fichiers acceptés, comme pour <code>&lt;input type="file"&gt;</code>.',
              multiple: 'Plusieurs fichiers à la fois.',
              directory: 'Propose un bouton pour choisir un dossier.',
              maxFiles: 'Le nombre de fichiers qu’elle peut contenir.',
              'maxSize, minSize': 'La taille maximale et minimale d’un fichier, en octets.',
              validate: 'Contrôle chaque fichier. S’il renvoie un message, le fichier est refusé.',
              upload:
                'Envoie un fichier. Sans cette fonction, les fichiers sont seulement conservés.',
              concurrency: 'Le nombre de fichiers envoyés en même temps.',
              hint: 'Une ligne sous le texte de la zone, par exemple ce qu’elle accepte.',
              disabled: 'Elle n’accepte aucun fichier.',
              labels: 'Tous les textes qu’elle affiche ou annonce, à traduire.',
              uploaded: 'Émet un fichier envoyé, avec ce qu’a renvoyé <code>upload</code>.',
              rejected: 'Émet les fichiers refusés, avec les raisons.',
              queue:
                'La file d’attente des envois, pour annuler, relancer et lire la progression depuis le code.',
              take: 'Ajoute des fichiers depuis le code, en contrôlant chacun.',
            },
          },
          NuiUploader: {
            summary:
              'Envoie un fichier : signale la progression de 0 à 1, et s’arrête quand le signal est annulé.',
            members: {
              '(file, context)': 'Renvoie une promesse de ce que répond votre serveur.',
            },
          },
        },
        keyboard: [
          ['Entrée ou Espace', 'Sur la zone, ouvre le sélecteur de fichiers.'],
          ['Ctrl + V (⌘ + V sur Mac)', 'Sur la zone, ajoute les fichiers collés.'],
          ['Tab', 'Parcourt la zone et les actions de chaque fichier.'],
        ],
        notes: [
          'La zone est un bouton : elle fonctionne donc sans pointeur, et l’indication la décrit.',
          'Les fichiers ajoutés et les fichiers refusés sont annoncés. Chaque barre de progression est une <code>progressbar</code> nommée d’après son fichier, et chaque action est nommée d’après ce qu’elle fait, comme « Remove beach.jpg ».',
          'Les aperçus sont décoratifs : c’est le nom du fichier qui indique de quel fichier il s’agit.',
        ],
      },
      mask: {
        name: 'Masque de saisie',
        title: 'Directive de masque de saisie pour Angular',
        summary:
          'Des champs de texte qui se formatent pendant la saisie : dates, cartes, IBAN, codes.',
        description:
          'Masque de saisie Angular : formatage pendant la frappe, un curseur qui garde sa place, des utilitaires pour cartes et IBAN, et la validation des formulaires.',
        apiDescription:
          'Référence de l’API du masque de saisie Needless UI : la directive nuiMask, ses tokens et sa valeur, et des utilitaires pour numéros de carte et IBAN.',
        a11yDescription:
          'Accessibilité du masque de saisie Needless UI : champs natifs avec leurs libellés, clavier numérique sur mobile et effacement qui saute les littéraux.',
        overview: [
          'Un masque formate un champ de texte pendant la saisie : <code>00/00/0000</code> insère les barres obliques, <code>AA 000 AA</code> prend tour à tour des lettres et des chiffres. Les caractères qui ne conviennent pas sont refusés, et le curseur garde sa place quand on tape au milieu.',
          'Un masque se compose de tokens et de littéraux : <code>0</code> est un chiffre, <code>a</code> une lettre, <code>*</code> l’un ou l’autre, et <code>A</code> et <code>X</code> font de même pour les codes, en majuscules. Ajoutez les vôtres avec <code>tokens</code>, ou passez une fonction qui choisit le masque selon la saisie, comme le fait <code>nuiCardMask</code> selon la marque de la carte.',
          'La valeur est ce qui est affiché, ou seulement les données avec <code>unmask</code>. Le masque fonctionne avec Signal Forms, les formulaires réactifs et <code>ngModel</code>, et une valeur incomplète est une erreur.',
        ],
        examples: {
          formats: {
            title: 'Formats',
            text: 'Une date, une heure, une plaque d’immatriculation et une couleur avec son propre token pour les chiffres hexadécimaux.',
          },
          payment: {
            title: 'Informations de paiement',
            text: 'Des champs Signal Forms. Le masque de carte suit la marque, le code de sécurité a quatre chiffres pour American Express, et <code>nuiCardValid</code> et <code>nuiIbanValid</code> vérifient les numéros.',
          },
        },
        api: {
          NuiMask: {
            summary: 'Un masque sur un champ de texte natif.',
            members: {
              nuiMask: 'Le masque, ou une fonction qui en choisit un selon les données saisies.',
              tokens: 'Des caractères de masque à ajouter ou à remplacer.',
              unmask: 'La valeur ne contient que les données, sans les littéraux.',
              value: 'La valeur : ce qui est affiché, ou les données avec <code>unmask</code>.',
              raw: 'Les données saisies, sans les littéraux.',
              complete: 'Toutes les positions du masque sont remplies.',
            },
          },
          Helpers: {
            summary: 'Des fonctions pour formater, vérifier et construire des masques.',
            members: {
              'nuiMaskFormat, nuiUnmask':
                'Formatent une valeur avec un masque, ou en extraient les données.',
              nuiCardMask:
                'Un masque pour les numéros de carte, groupés comme les imprime leur marque.',
              nuiCardBrand: 'La marque d’un numéro de carte, d’après ses premiers chiffres.',
              'nuiCardValid, nuiLuhn':
                'Indique si un numéro de carte a la longueur prévue par sa marque et passe le contrôle de Luhn.',
              nuiIbanMask: 'Un masque pour les IBAN, de la longueur de l’IBAN du pays.',
              nuiIbanValid:
                'Indique si un IBAN a la longueur prévue par son pays et la bonne clé de contrôle.',
            },
          },
        },
        keyboard: [
          ['Retour arrière', 'Supprime le caractère avant le curseur, en sautant les littéraux.'],
          ['Suppr', 'Supprime le caractère après le curseur, en sautant les littéraux.'],
        ],
        notes: [
          'Le masque s’applique à votre propre <code>&lt;input&gt;</code>, dont le libellé et le texte d’aide restent tels que vous les avez écrits. Indiquez-y ce qui est attendu : un masque n’est pas une consigne.',
          'Les masques de chiffres définissent <code>inputmode="numeric"</code>, pour que les téléphones affichent un pavé numérique, sauf si le champ définit le sien.',
          'Les chiffres de toutes les écritures sont acceptés, et écrits de 0 à 9.',
        ],
      },
      'phone-field': {
        name: 'Champ téléphone',
        title: 'Champ de numéro de téléphone pour Angular',
        summary: 'Un sélecteur de pays et un numéro, groupé comme l’écrit le pays.',
        description:
          'Champ téléphone Angular accessible : sélecteur de pays, numéros groupés comme chaque pays les écrit, indicatifs saisis ou collés, et valeurs au format E.164.',
        apiDescription:
          'Référence de l’API du champ téléphone Needless UI : valeur et pays de nui-phone-field, pays proposés, et utilitaires pour lire et écrire les numéros.',
        a11yDescription:
          'Accessibilité du champ téléphone Needless UI : sélecteur de pays nommé, pays annoncé quand un indicatif le choisit, et saisie automatique du navigateur.',
        overview: [
          'Un champ téléphone réunit un sélecteur de pays et un numéro. Le numéro est groupé pendant la saisie, comme son pays écrit les numéros, et la valeur est le numéro au format E.164, par exemple <code>+393331234567</code>.',
          'Chacun tape les numéros comme il les connaît. Un 0 initial (ou le 1 devant un numéro nord-américain) est reconnu comme préfixe national et exclu de la valeur. Un indicatif pays saisi ou collé, comme <code>+44</code> ou <code>0044</code>, choisit son pays, tout comme un indicatif régional là où plusieurs pays partagent le même indicatif.',
          'Le premier pays est celui des paramètres régionaux, et <code>countries</code> limite la liste. Avec les formulaires, un numéro trop court ou trop long pour son pays est une erreur. Pour une validation complète, vérifiez aussi les numéros côté serveur.',
        ],
        examples: {
          basic: {
            title: 'Un numéro',
            text: 'Commencez par <code>+</code> et un indicatif pays pour changer de pays pendant la saisie.',
          },
          countries: {
            title: 'Les pays de votre choix',
            text: '<code>countries</code> en propose onze, le champ fonctionne avec un <code>FormControl</code> réactif, et <code>nuiFormatPhone</code> réécrit la valeur sous une forme lisible.',
          },
        },
        api: {
          NuiPhoneField: {
            summary: 'Un champ de numéro de téléphone.',
            members: {
              value: 'Le numéro au format E.164, ou vide.',
              country: 'Le pays, sous forme de code de région.',
              countries: 'Les pays proposés, sous forme de codes de région.',
              locale: 'La langue des noms de pays.',
              label: 'Nomme le numéro, quand aucun <code>&lt;label for&gt;</code> ne le fait.',
              inputId: 'L’id du numéro, pour <code>&lt;label for&gt;</code>.',
              placeholder: 'Texte affiché tant que le numéro est vide.',
              invalid: 'Marque le numéro comme invalide.',
              disabled: 'Il ne peut pas être modifié.',
              labels: 'Tous les textes qu’il annonce, à traduire.',
            },
          },
          Helpers: {
            summary: 'Des fonctions pour les numéros de téléphone.',
            members: {
              nuiParsePhone:
                'Décompose un numéro écrit de n’importe quelle façon en région, indicatif pays et numéro national.',
              nuiFormatPhone: 'Écrit un numéro groupé comme le fait son pays, ou au format E.164.',
              nuiPhoneValid:
                'Indique si un numéro a un indicatif pays connu et la longueur prévue par son pays.',
            },
          },
        },
        keyboard: [
          ['Lettres sur le sélecteur de pays', 'Passent aux pays qui commencent par ces lettres.'],
          ['Entrée ou Espace', 'Ouvre la liste des pays, ou en choisit un.'],
          [
            'Retour arrière',
            'Dans le numéro, supprime un chiffre en sautant les espaces et les parenthèses.',
          ],
        ],
        notes: [
          'Le sélecteur de pays s’appelle « Country code » et lit son drapeau et son indicatif. Quand un indicatif pays ou régional choisit un pays, le nouveau pays est annoncé.',
          'Nommez le numéro avec <code>&lt;label for&gt;</code> et <code>inputId</code>, ou avec <code>label</code>.',
          'Le numéro a <code>autocomplete="tel"</code> : les navigateurs peuvent le remplir, indicatif compris, et les téléphones affichent un pavé téléphonique.',
        ],
      },
      'color-picker': {
        name: 'Sélecteur de couleur',
        title: 'Sélecteur de couleur OKLCH pour Angular',
        summary:
          'Une couleur en OKLCH, avec curseurs, échantillons, pipette et contrôle du contraste.',
        description:
          'Sélecteur de couleur Angular accessible en OKLCH : couleurs P3 à gamut étendu, toute syntaxe CSS, échantillons, pipette et contrôle du contraste WCAG.',
        apiDescription:
          'Référence de l’API du sélecteur de couleur Needless UI : valeur, format et gamut de nui-color-picker, échantillons et contraste, et utilitaires de couleur.',
        a11yDescription:
          'Clavier et accessibilité du sélecteur de couleur Needless UI : curseur à deux valeurs pour la zone, curseurs natifs et niveaux de contraste en toutes lettres.',
        overview: [
          'Le sélecteur de couleur travaille en OKLCH, l’espace colorimétrique perceptuel du CSS moderne. Sur la largeur de la zone, le chroma va du gris au maximum que l’écran peut afficher à cette luminosité : chaque point est donc une couleur utilisable, et la poignée reste en place quand la teinte tourne.',
          'Le champ accepte toute couleur CSS, noms compris, et le bouton de format écrit la valeur en hexadécimal, <code>rgb()</code>, <code>hsl()</code>, <code>oklch()</code> ou <code>color(display-p3)</code>. Une couleur hors du gamut d’un format y est ramenée à la manière de CSS, en gardant sa luminosité et sa teinte.',
          'Ajoutez <code>swatches</code> pour choisir parmi des échantillons, et <code>contrastWith</code> pour vérifier le contraste de la couleur sur un fond, tel que WCAG 2 le mesure. Si le navigateur dispose d’une pipette, un bouton prélève une couleur à l’écran.',
        ],
        examples: {
          brand: {
            title: 'Une couleur de marque',
            text: 'Des échantillons nommés et le contraste d’un texte blanc sur la couleur : choisissez-en une claire, et AA échoue.',
          },
          wide: {
            title: 'Gamut étendu',
            text: '<code>gamut="p3"</code> remplit la zone de couleurs Display P3, et une ligne pointillée marque la limite de sRGB. La valeur reste en <code>oklch()</code>.',
          },
          popover: {
            title: 'Dans un popover',
            text: 'Un bouton qui affiche la couleur ouvre le sélecteur dans un <a href="/components/popover">popover</a>.',
          },
        },
        api: {
          NuiColorPicker: {
            summary: 'Un sélecteur de couleur en OKLCH.',
            members: {
              value: 'La couleur, écrite dans le format. Vide tant qu’aucune n’est choisie.',
              format: 'La façon dont la valeur est écrite.',
              formats: 'Les formats que parcourt le bouton de format.',
              gamut: 'Les couleurs que contient la zone : sRGB ou Display P3.',
              alpha: 'Affiche le curseur d’opacité.',
              swatches: 'Des couleurs à choisir, avec leur nom.',
              contrastWith: 'Un fond sur lequel vérifier le contraste.',
              eyeDropper: 'Affiche la pipette, si le navigateur en a une.',
              disabled: 'Il ne peut pas être modifié.',
              labels: 'Tous les textes qu’il annonce, à traduire.',
              color: 'La couleur choisie, en OKLCH.',
            },
          },
          Helpers: {
            summary: 'Des fonctions pour les couleurs.',
            members: {
              nuiParseColor: 'Lit une couleur dans n’importe quelle syntaxe CSS.',
              nuiFormatColor: 'Écrit une couleur dans un format.',
              nuiToGamut: 'Ramène une couleur dans sRGB ou Display P3, comme le fait CSS.',
              nuiContrast: 'Le rapport de contraste WCAG 2 d’une couleur sur un fond.',
            },
          },
        },
        keyboard: [
          ['Flèches gauche et droite', 'Sur la zone, moins ou plus de chroma.'],
          ['Flèches haut et bas', 'Sur la zone, plus clair ou plus foncé.'],
          ['Maj + touches fléchées', 'Déplacent la poignée dix fois plus loin.'],
          ['Début et Fin', 'Sur la zone, chroma nul ou maximal.'],
          ['Page précédente et Page suivante', 'Sur la zone, beaucoup plus clair ou plus foncé.'],
        ],
        notes: [
          'La poignée de la zone est un <code>slider</code> nommé « Color » qui annonce ses deux valeurs, par exemple « Lightness 62%, chroma 75% ». La teinte et l’opacité sont des champs range natifs.',
          'Les échantillons sont des boutons nommés par leur libellé, et s’affichent enfoncés quand ils correspondent à la couleur.',
          'AA et AAA indiquent « passes » ou « fails » en toutes lettres, pas seulement par la couleur, et en mode couleurs forcées, les couleurs elles-mêmes restent.',
        ],
      },
      carousel: {
        name: 'Carrousel',
        title: 'Composant carrousel et slider pour Angular',
        summary:
          'Des diapositives alignées qui défilent et s’aimantent, avec boutons, points et rotation.',
        description:
          'Carrousel Angular accessible : défilement aimanté natif, plusieurs diapositives par vue, points, boucle et rotation qui se met en pause et s’arrête selon WCAG.',
        apiDescription:
          'Référence de l’API du carrousel Needless UI : diapositives par vue, index, boucle et rotation de nui-carousel, ses méthodes et la directive nuiCarouselSlide.',
        a11yDescription:
          'Clavier et accessibilité du carrousel Needless UI : le modèle Carousel de WAI-ARIA, un contrôle de rotation, des diapositives nommées, des mouvements annoncés.',
        overview: [
          'Un carrousel affiche des diapositives sur une rangée qui défile et s’aimante : le balayage, les pavés tactiles et les touches fléchées le font défiler nativement, tout comme ses boutons précédent et suivant et ses points. Marquez chaque diapositive avec <code>nuiCarouselSlide</code>, nommée par son titre.',
          'Affichez une diapositive à la fois ou plusieurs avec <code>perView</code>, ou laissez chacune garder sa propre largeur avec <code>perView="auto"</code>. <code>[(index)]</code> lie la première diapositive visible, et <code>loop</code> revient au début.',
          'Avec <code>autoplay</code>, il tourne tout seul, précédé d’un contrôle de rotation. La rotation se met en pause sous le pointeur et s’arrête pour de bon quand le focus clavier y entre, comme le demande le modèle WAI-ARIA.',
        ],
        examples: {
          featured: {
            title: 'Voyages à la une',
            text: 'Une nouvelle diapositive toutes les six secondes, avec l’anneau du contrôle de rotation qui se remplit jusqu’à la suivante. Survolez le carrousel pour mettre la rotation en pause, ou entrez-y avec Tab pour l’arrêter.',
          },
          shelf: {
            title: 'Une étagère de cartes',
            text: '<code>perView="auto"</code> garde la largeur de chaque carte et en affiche autant qu’il en tient. Les points suivent le balayage, et <code>[(index)]</code> indique où il en est.',
          },
        },
        api: {
          NuiCarousel: {
            summary: 'Un carrousel de diapositives.',
            members: {
              label: 'Nomme le carrousel.',
              index: 'La première diapositive visible, à partir de 0.',
              perView:
                'Les diapositives visibles à la fois, ou <code>auto</code> pour des diapositives qui fixent leur propre largeur.',
              gap: 'L’espace entre les diapositives, dans n’importe quelle longueur CSS.',
              loop: 'Aller au-delà de la dernière diapositive ramène à la première, et inversement.',
              autoplay:
                'Les millisecondes entre deux diapositives quand il tourne tout seul ; 0 le désactive.',
              'controls, indicators': 'Les boutons précédent et suivant, et les points.',
              labels: 'Tous ses textes, à traduire.',
              'next, previous': 'Avance ou recule d’une diapositive.',
              goTo: 'Fait défiler jusqu’à une diapositive.',
            },
          },
          NuiCarouselSlide: {
            summary: 'Une diapositive.',
            members: { nuiCarouselSlide: 'Son titre, lu à la place de sa position.' },
          },
        },
        keyboard: [
          [
            'Tab',
            'Parcourt le contrôle de rotation, les boutons, les diapositives, puis les points.',
          ],
          [
            'Flèches gauche et droite sur les diapositives',
            'Font défiler jusqu’à la diapositive précédente ou suivante.',
          ],
          ['Entrée ou Espace', 'Active le bouton ou le point qui a le focus.'],
        ],
        notes: [
          'Le carrousel est une <code>region</code> avec <code>aria-roledescription="carousel"</code>, et chaque diapositive un <code>group</code> avec <code>aria-roledescription="slide"</code>, nommé par exemple « Lake Como, 2 of 4 ».',
          'Le contrôle de rotation vient en premier et dit ce qu’il va faire. La rotation se met en pause sous le pointeur et s’arrête quand le focus clavier y entre : elle ne déplace jamais ce que quelqu’un est en train de lire.',
          'L’endroit où le carrousel s’arrête après un balayage, un bouton ou un point est annoncé ; la rotation reste silencieuse.',
        ],
      },
      editor: {
        name: 'Éditeur de texte enrichi',
        title: 'Composant éditeur de texte enrichi pour Angular',
        summary:
          'Titres, listes, liens et mises en forme, avec une barre d’outils et du Markdown à la frappe.',
        description:
          'Éditeur de texte enrichi Angular accessible : barre d’outils, raccourcis, Markdown à la frappe, collage propre, liens et annulation, en HTML ou en Markdown.',
        apiDescription:
          'Référence de l’API de l’éditeur de texte enrichi Needless UI : valeur et format de nui-editor, outils, textes, commandes et convertisseurs HTML et Markdown.',
        a11yDescription:
          'Clavier et accessibilité de l’éditeur de texte enrichi Needless UI : zone de texte multiligne, barre d’outils WAI-ARIA, raccourcis et boîte de dialogue de lien.',
        overview: [
          'L’éditeur écrit des paragraphes, des titres, des citations, des listes, des blocs de code et des séparateurs, avec gras, italique, souligné, barré, code et liens. Sa valeur est du HTML, ou du Markdown avec <code>format="markdown"</code>, et il fonctionne avec les formulaires.',
          'Il tient son propre document et gère chaque modification : ce qui est collé ou déposé n’atteint la page que sous la forme de ce document. La structure et la mise en forme restent, y compris depuis Google Docs et Word, tandis que les scripts, les styles et les liens dangereux disparaissent.',
          'Tapez du Markdown et il devient mise en forme : <code># </code> commence un titre, <code>- </code> une liste, et <code>**bold**</code> et <code>`code`</code> se mettent en forme dès que vous les fermez. Chaque format a son raccourci et son bouton dans la barre d’outils.',
        ],
        examples: {
          comment: {
            title: 'Un commentaire',
            text: '<code>tools</code> choisit les boutons de la barre d’outils. Tapez du Markdown, collez depuis n’importe où et voyez le HTML que l’éditeur conserve.',
          },
          markdown: {
            title: 'Markdown en entrée et en sortie',
            text: 'Avec <code>format="markdown"</code>, la valeur est du Markdown : lue avec ses listes imbriquées, citations et code, et réécrite au fil de vos modifications.',
          },
          lists: {
            title: 'Listes imbriquées',
            text: 'Les boutons « Augmenter le retrait » et « Diminuer le retrait » imbriquent les éléments de liste, comme le font Tab et Maj + Tab. La barre d’outils par défaut ne les affiche que sur les écrans tactiles, qui n’ont pas de touche Tab ; ajoutez-les à <code>tools</code> pour les afficher partout.',
          },
        },
        api: {
          NuiEditor: {
            summary: 'Un éditeur de texte enrichi.',
            members: {
              value: 'Le contenu, en HTML ou en Markdown ; vide quand il n’y a pas de texte.',
              format: 'La façon dont la valeur est écrite.',
              tools:
                'Les boutons de la barre d’outils dans l’ordre, avec <code>|</code> entre les groupes.',
              'label, labelledBy, describedBy': 'Nomment et décrivent le contenu.',
              placeholder: 'Texte affiché tant que l’éditeur est vide.',
              'readonly, disabled, invalid':
                'Affiche le contenu sans permettre de le modifier ; le désactive ; le marque comme invalide.',
              labels: 'Tous ses textes, à traduire.',
              run: 'Exécute une commande de la barre d’outils.',
              'undo, redo, focus': 'Annule, rétablit, et place le focus dans le texte.',
            },
          },
          Helpers: {
            summary: 'Des fonctions pour convertir des documents.',
            members: {
              'nuiEditorToHtml, nuiEditorToMarkdown':
                'Écrivent un document en HTML ou en Markdown.',
              'nuiEditorFromHtml, nuiEditorFromMarkdown':
                'Lisent du HTML ou du Markdown dans un document, en gardant ce que l’éditeur sait afficher.',
            },
          },
        },
        keyboard: [
          [
            'Ctrl + B, I ou U',
            'Gras, italique ou souligné. Sur les appareils Apple, ⌘ au lieu de Ctrl.',
          ],
          ['Ctrl + K', 'Ajoute ou modifie un lien.'],
          ['Ctrl + Alt + 1, 2 ou 3', 'Un titre ; Ctrl + Alt + 0 le retransforme en paragraphe.'],
          ['Ctrl + Maj + 7 ou 8', 'Une liste numérotée ou à puces.'],
          [
            'Tab et Maj + Tab dans une liste',
            'Augmentent ou diminuent le retrait ; Maj + Tab transforme un élément de premier niveau en paragraphe. Ailleurs, Tab quitte l’éditeur.',
          ],
          ['Ctrl + Z, Ctrl + Maj + Z', 'Annuler et rétablir.'],
          ['Flèches gauche et droite dans la barre d’outils', 'Passent d’un bouton à l’autre.'],
        ],
        notes: [
          'Le contenu est une <code>textbox</code> avec <code>aria-multiline</code>, nommée par <code>label</code>, et son texte indicatif figure dans <code>aria-placeholder</code>.',
          'La barre d’outils suit le modèle toolbar de WAI-ARIA, avec un seul arrêt de tabulation : les formats sont des boutons bascules avec <code>aria-pressed</code>, et chaque bouton indique son raccourci dans <code>aria-keyshortcuts</code> et dans son infobulle.',
          'Une commande de la barre d’outils rend le focus au texte, et la boîte de dialogue de lien l’y ramène avec Échap. Tab ne reste jamais bloqué : hors des listes, il quitte l’éditeur.',
          'Les écrans tactiles n’ont pas de touche Tab : la barre d’outils par défaut y propose les boutons « Augmenter le retrait » et « Diminuer le retrait », actifs dans les listes. Un appui sur un bouton de la barre d’outils laisse le focus dans le texte, si bien que le clavier virtuel reste ouvert.',
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
      customization: {
        title: 'Personnalisation',
        description:
          'Physique des ressorts, effets d’appui, animations d’entrée, formes des coins, rayon et densité : réglez Needless UI pour toute l’application ou par composant.',
        blocks: [
          {
            kind: 'p',
            html: 'Chaque composant a une personnalité que vous pouvez changer : le ressort qui l’anime, ce que fait un bouton sous votre doigt, la façon dont les boîtes de dialogue et les menus entrent en scène, la forme et la taille de leurs coins, et la place qu’ils occupent. Chaque trait se règle avec un attribut pour tout ce que contient un élément, ou avec un input pour un seul composant.',
          },
          { kind: 'demo', demo: 'playground' },
          { kind: 'h2', id: 'attributes', text: 'Un attribut, tout un sous-arbre' },
          {
            kind: 'p',
            html: 'Placez les attributs <code>data-nui-*</code> sur <code>&lt;body&gt;</code> pour toute l’application, ou sur n’importe quel élément pour une partie seulement. Le plus proche l’emporte, ils peuvent donc s’imbriquer. Comme ils ne font que définir des propriétés personnalisées CSS, ils fonctionnent de la même façon avec n’importe quel framework, et même sans.',
          },
          { kind: 'code', file: 'snippets/customize.html' },
          { kind: 'h2', id: 'inputs', text: 'Un seul composant' },
          {
            kind: 'p',
            html: 'En Angular, <code>nuiButton</code>, <code>nuiDialog</code> et <code>nuiMenu</code> acceptent les mêmes valeurs sous forme d’inputs. Les inputs que vous ne définissez pas suivent les attributs qui entourent le composant.',
          },
          { kind: 'code', file: 'snippets/customize-inputs.html' },
          { kind: 'h2', id: 'springs', text: 'Des ressorts compilés en CSS' },
          {
            kind: 'p',
            html: 'Le mouvement repose sur la physique des ressorts : raideur, amortissement et masse, au lieu d’une durée et d’une courbe. Le compilateur de tokens résout chaque ressort et l’écrit en CSS sous la forme d’un temps de stabilisation et d’une fonction d’easing <code>linear()</code> : l’animation tourne ainsi sur le compositeur, sans JavaScript. Six ressorts sont fournis sous forme de tokens, de <code>--nui-spring-snappy</code> à <code>--nui-spring-mechanical</code>, et <code>--nui-motion</code> contient celui qui est actif.',
          },
          {
            kind: 'p',
            html: 'Tout autre ressort n’est qu’à un input de distance. Angular le compile à l’exécution avec le même solveur, et <code>springTransition()</code> vous fournit le CSS pour vos propres éléments.',
          },
          { kind: 'code', file: 'snippets/customize-spring.ts' },
          { kind: 'h2', id: 'css', text: 'Tout ce qu’il y a entre les deux' },
          {
            kind: 'p',
            html: 'Les préréglages sont des raccourcis. Pour tout le reste, définissez vous-même les propriétés personnalisées : n’importe quelle transformation pour <code>--nui-press</code> et <code>--nui-enter</code>, n’importe quel nombre pour <code>--nui-radius-scale</code> et <code>--nui-density</code>.',
          },
          { kind: 'code', file: 'snippets/customize.css' },
          { kind: 'h2', id: 'accessibility', text: 'Accessibilité' },
          {
            kind: 'p',
            html: 'Quand le système demande moins d’animations, les ressorts deviennent instantanés, et les effets d’appui et les animations d’entrée ne bougent plus. La densité ne fait jamais passer un élément interactif sous la taille de cible minimale de 24 px des WCAG 2.2, et aucun préréglage ne touche aux couleurs : toutes les vérifications de contraste restent valables. Les navigateurs qui ne prennent pas en charge <code>corner-shape</code> dessinent tous les coins arrondis.',
          },
        ],
      },
      'browser-support': {
        title: 'Prise en charge des navigateurs',
        description:
          'Les navigateurs que Needless UI prend en charge et teste : versions de Chrome, Edge, Firefox et Safari, mobiles, écrans tactiles, et ce qui manque aux anciens.',
        blocks: [
          {
            kind: 'p',
            html: 'Needless UI s’appuie sur des éléments natifs et sur des fonctionnalités récentes de la plateforme web, comme l’API Popover. Les navigateurs ci-dessous sont pris en charge à partir de la version indiquée. Dans les versions plus anciennes, les menus, les selects et les popovers ne s’ouvrent pas.',
          },
          { kind: 'h2', id: 'supported', text: 'Navigateurs pris en charge' },
          {
            kind: 'table',
            caption: 'Plus anciennes versions prises en charge',
            head: ['Navigateur', 'Version minimale', 'Nécessaire pour'],
            rows: [
              [
                'Chrome et Edge, sur ordinateur et Android',
                '120',
                'Les icônes dessinées avec des masques CSS et <code>:dir()</code> pour le texte de droite à gauche',
              ],
              ['Firefox, sur ordinateur et Android', '125', 'L’API Popover'],
              ['Safari sur Mac', '17', 'L’API Popover'],
              ['Tous les navigateurs sur iPhone et iPad', 'iOS 17', 'L’API Popover'],
              ['Samsung Internet sur Android', '25', 'Comme pour Chrome'],
            ],
          },
          {
            kind: 'p',
            html: 'Les autres navigateurs basés sur Chromium, comme Opera et Brave, suivent les versions de Chrome. Angular 22 exige lui-même Chrome, Edge et Firefox 119, ainsi que Safari 17. Internet Explorer et l’ancien Edge, antérieur à Chromium, ne sont pas pris en charge.',
          },
          { kind: 'h2', id: 'tested', text: 'Navigateurs testés' },
          {
            kind: 'p',
            html: 'À chaque modification, les tests de tous les composants s’exécutent dans les moteurs de Chrome, Firefox et Safari. Avant chaque publication, toutes les pages de cette documentation sont vérifiées dans chaque moteur, sur un ordinateur et sur un téléphone en mode tactile : chacune doit se charger, ouvrir chaque menu et chaque pop-up, tenir dans l’écran et réussir les contrôles d’accessibilité.',
          },
          {
            kind: 'table',
            caption: 'Navigateurs testés',
            head: ['Moteur', 'Version', 'Testé sur'],
            rows: [
              [
                'Chromium (dans Chrome et Edge)',
                '153',
                'Un ordinateur et un téléphone Android en mode tactile',
              ],
              ['Firefox', '155', 'Un ordinateur et un écran tactile de la taille d’un téléphone'],
              ['WebKit (dans Safari)', '26.6', 'Un ordinateur et un iPhone en mode tactile'],
              ['Safari sur iPhone', 'iOS 17.5 et 18.6', 'Le simulateur d’iPhone'],
            ],
          },
          {
            kind: 'p',
            html: 'Les versions intermédiaires, entre la plus ancienne prise en charge et celles qui sont testées, ne sont pas vérifiées une à une : elles sont prises en charge parce qu’elles ont toutes les fonctionnalités dont les composants ont besoin.',
          },
          { kind: 'h2', id: 'newer', text: 'Les extras des navigateurs récents' },
          {
            kind: 'p',
            html: 'Quelques détails utilisent des fonctionnalités que seuls les navigateurs récents proposent. Les autres navigateurs s’en passent, sans que rien ne casse :',
          },
          {
            kind: 'table',
            caption: 'Détails qui demandent un navigateur récent',
            head: ['Détail', 'Navigateurs', 'Ailleurs'],
            rows: [
              [
                'Les popovers, menus et boîtes de dialogue s’animent à l’ouverture et à la fermeture',
                'Chrome et Edge, Firefox 129, Safari 17.5',
                'Ils apparaissent et disparaissent instantanément',
              ],
              [
                'Coins en squircle (<code>corner-shape</code>)',
                'Chrome et Edge 139',
                'Coins arrondis',
              ],
              [
                'Prélever une couleur n’importe où sur l’écran',
                'Chrome et Edge sur ordinateur',
                'Pas de bouton pipette',
              ],
              [
                'Choisir un dossier entier dans la zone de dépôt',
                'Navigateurs sur ordinateur',
                'Fichiers uniquement',
              ],
              [
                'L’anneau du contrôle de rotation du carrousel se remplit en douceur',
                'Chrome et Edge, Firefox 128, Safari',
                'Il se remplit d’un coup',
              ],
              [
                'Le geste Retour d’Android ferme les menus, les listes des combobox et les hovercards, et met fin aux visites guidées',
                'Chrome et Edge 126, Firefox 149',
                'Le geste Retour ramène à la page précédente',
              ],
            ],
          },
          { kind: 'h2', id: 'touch', text: 'Téléphones et écrans tactiles' },
          {
            kind: 'p',
            html: 'Tous les composants fonctionnent en tactile. Les poignées du splitter, la zone de couleur, les bords de colonne et les toasts suivent le doigt sans faire défiler la page, le carrousel suit le balayage grâce au défilement natif du navigateur, et un appui long saisit un événement du planificateur. Sur les écrans tactiles, le texte des champs fait au moins 16 px, pour que les iPhone ne zooment pas dessus, et les mots que certains claviers composent, comme ceux d’Android, arrivent entiers.',
          },
          {
            kind: 'p',
            html: 'Les écrans tactiles ne connaissent pas le survol, donc une hovercard ne fait que compléter le contenu de la page : n’y mettez rien d’essentiel. Sur un téléphone, la touche Entrée du chat passe à la ligne, et c’est le bouton qui envoie.',
          },
          { kind: 'h2', id: 'keyboard', text: 'Le clavier dans Safari' },
          {
            kind: 'p',
            html: 'Par défaut, dans Safari, la touche Tab ne passe que d’un champ de texte ou d’un menu déroulant à l’autre. Pour atteindre chaque bouton et chaque lien, activez « Appuyer sur Tab pour mettre en évidence chaque élément d’une page web » (« Press Tab to highlight each item on a webpage ») dans l’onglet Avancées des réglages de Safari, ou appuyez sur Option + Tab. Safari ne donne pas non plus le focus à un bouton quand on clique dessus ; les composants y remédient, pour que la navigation au clavier reprenne après un clic comme dans les autres navigateurs.',
          },
        ],
      },
    },
    playground: {
      label: 'Bac à sable de personnalisation',
      motion: 'Mouvement',
      custom: 'personnalisé',
      stiffness: 'Raideur',
      damping: 'Amortissement',
      mass: 'Masse',
      press: 'Appui',
      enter: 'Entrée',
      corners: 'Coins',
      radius: 'Rayon',
      density: 'Densité',
      surprise: 'Surprenez-moi',
      reset: 'Réinitialiser',
      hint: 'Maintenez un bouton enfoncé, puis relâchez-le. Ouvrez la boîte de dialogue et le menu pour les voir entrer en scène.',
      save: 'Enregistrer',
      cancel: 'Annuler',
      delete: 'Supprimer',
      openDialog: 'Ouvrir la boîte de dialogue',
      openMenu: 'Ouvrir le menu',
      menu: ['Renommer', 'Dupliquer', 'Supprimer'],
      dialogTitle: 'Inutilement animée',
      dialogText: 'Cette boîte de dialogue est arrivée exactement comme vous le lui avez demandé.',
      close: 'Fermer',
      curve:
        'La position du ressort au fil du temps. Il part du bas et s’immobilise sur la ligne en pointillés.',
      settles: (ms, overshoot) => `Se stabilise en ${ms} ms · dépassement de ${overshoot} %`,
      instant: 'Aucun mouvement : tout saute directement à destination.',
      stuck:
        'Ce ressort ne se stabilise pas en moins de 10 secondes. Augmentez l’amortissement ou la raideur ; en attendant, les composants conservent le dernier ressort qui se stabilisait.',
      reducedMotion:
        'Votre système demande moins d’animations : rien ne bouge ici. Les ressorts, les effets d’appui et les animations d’entrée reviendront dès qu’il ne le demandera plus.',
      noCornerShape:
        'Ce navigateur ne sait pas encore dessiner de formes de coins : tous les coins restent arrondis.',
      everywhere: 'Sur n’importe quel élément, pour tout ce qu’il contient :',
      oneComponent: 'Sur un seul composant, en Angular :',
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
