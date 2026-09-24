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
      kinds: { input: 'Input', model: 'Bidirectionnel', output: 'Output', method: 'Méthode' },
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
