import type { i18nMessages } from './lang';

export const fr: i18nMessages = {
  nav: {
    features: 'Fonctionnalités',
    whatsNew: 'Nouveautés',
    identity: 'Identité',
    download: 'Télécharger',
    support: 'Support',
  },
  footer: {
    description:
      'Jeannot est votre compagnon de jardinage au quotidien : calendrier lunaire, conseils biodynamiques, météo intelligente, encyclopédie des plantes et assistant IA — réunis dans une application calme et inspirée par la nature.',
    features: 'Fonctionnalités',
    howItWorks: 'Comment ça marche',
    testimonials: 'Témoignages',
    download: 'Télécharger',
    support: 'Support',
    privacyPolicies: 'Politique de confidentialité',
    supportFr: 'Support (fr)',
    contact: 'Contact',
    allRightsReserved: 'Tous droits réservés',
    quickLinks: 'Liens rapides',
    legal: 'Mentions légales',
    termsOfService: 'Conditions d\'utilisation',
    cookiePolicy: 'Politique des cookies',
  },
  home: {
    versionBadge: 'Nouveau · Jeannot 2.0',
    title: 'Jardinez au rythme de la lune.',
    description:
      'Un design plus doux et inspiré par la nature, un espace Mon Jardin pour suivre chaque plante, et un assistant IA toujours à portée de main.',
    download: 'Télécharger',
    learnMore: 'Découvrir les nouveautés',
    heroPills: [
      'Mon Jardin',
      'Assistant IA',
      'Calendrier lunaire',
      'Météo intelligente',
      'Encyclopédie',
      'FR / EN',
    ],
    whatsNew: {
      eyebrow: 'Nouveautés 2.0',
      title: 'Un Jeannot plus calme, plus utile.',
      description:
        'La version 2.0 marque un virage vers une identité plus naturelle, calme et cohérente — pensée pour le quotidien au jardin. Les versions 2.0.1 → 2.0.4 apportent rapidement des améliorations sur la météo, l’onboarding et Mon Jardin.',
      items: [
        {
          title: 'Écran d’accueil « Aujourd’hui »',
          description:
            'Un carrousel des tâches et activités du jour, et des alertes gel, vent et pluie intégrées à votre météo quotidienne.',
        },
        {
          title: 'Onboarding guidé en 5 étapes',
          description:
            'Créez votre jardin, découvrez la phase lunaire actuelle, choisissez une première plante et recevez un mot de bienvenue de Jeannot.',
        },
        {
          title: 'Ajouter des plantes en un flux',
          description:
            'Un formulaire multi-étapes : choix de la variété, stade actuel et notes. L’encyclopédie vous indique ce qui est déjà dans votre jardin.',
        },
        {
          title: 'Planification d’activités',
          description:
            'Recherche d’activités en scroll infini, planification depuis les jours recommandés du calendrier lunaire, et suivi de progression.',
        },
        {
          title: 'Mon Jardin, peaufiné',
          description:
            'Pagination, recherche avec focus auto, filtres et tris avec icônes, édition & suppression avec confirmation, info-bulles sur les fins de stade.',
        },
        {
          title: 'Assistant IA plus fluide',
          description:
            'De meilleurs états de chargement quand Jeannot réfléchit, et des questions suggérées traduites en EN et FR.',
        },
      ],
    },
    features: {
      title: 'Tout ce qu’il faut au jardin, dans une seule app.',
      description:
        'Suivez chaque plante, planifiez avec la lune et recevez des conseils personnalisés — sans jamais quitter l’app.',
      list: [
        {
          eyebrow: 'Mon Jardin',
          title: 'Votre jardin, joliment suivi',
          description:
            'Un espace dédié à chaque plante : fiches variété avec barre de progression du cycle (semis → récolte), journal du jardin, tâches liées par plante et alertes regroupées.',
        },
        {
          eyebrow: 'Assistant IA',
          title: 'Un jardinier IA dans la poche',
          description:
            'Ouvrez le tiroir Jeannot depuis n’importe quel écran. Un chat contextuel lié à votre jardin, l’identification de plantes et maladies par photo, et l’historique complet des conversations.',
        },
        {
          eyebrow: 'Calendrier lunaire',
          title: 'Planifier avec la lune',
          description:
            'Connaissez les meilleurs jours pour semer, planter, tailler et récolter. Planifiez vos activités directement depuis les jours recommandés du calendrier lunaire / biodynamique.',
        },
        {
          eyebrow: 'Météo',
          title: 'Une météo que vos plantes comprennent',
          description:
            'Alertes gel, vent et pluie intégrées à votre météo du jour et horaire — et un radar de tolérance par espèce (gel, chaleur, soleil, ombre, vent).',
        },
        {
          eyebrow: 'Encyclopédie',
          title: 'Une encyclopédie riche',
          description:
            'Fiches espèces détaillées avec conseils permaculture et semis, calendrier de plantation, et indicateur clair lorsqu’une variété est déjà dans votre jardin.',
        },
        {
          eyebrow: 'Tâches',
          title: 'Des tâches au rythme de votre semaine',
          description:
            'Vue calendrier avec alertes de retard, actions rapides et finalisation enrichie (notes, quantité, date personnalisée). Alertes groupées et étiquetées par jour.',
        },
      ],
    },
    identity: {
      eyebrow: 'Identité visuelle',
      title: 'Des pastels à la palette « terre & plantes ».',
      description:
        'Jeannot 2.0 quitte une palette « bonbon » pour une palette plus mature et organique — avec une signification claire pour les couleurs des cycles lunaires et biodynamiques.',
      beforeLabel: 'Avant · v1.x',
      afterLabel: 'Après · v2.0+',
      typography: 'Satoshi',
      typographyDescription: 'Confirmée comme police d’affichage dans toute l’app.',
      iconsLabel: 'Phosphor Icons',
      iconsDescription:
        'Adoptées partout — navigation, alertes, onboarding, météo.',
      motionLabel: 'Mouvement naturel',
      motionDescription:
        'Courbes « ease-fluid » et « ease-snappy » pour des transitions plus vivantes.',
      semantics: {
        title: 'Couleurs sémantiques des plantes',
        description:
          'Les couleurs des cycles veulent désormais dire quelque chose — feuille, racine, fleur, fruit.',
        items: [
          { name: 'Feuille', hint: 'Légumes-feuilles' },
          { name: 'Racine', hint: 'Légumes-racines' },
          { name: 'Fleur', hint: 'Fleurs & aromatiques' },
          { name: 'Fruit', hint: 'Fruits & récoltes' },
        ],
      },
    },
    onboarding: {
      eyebrow: 'Onboarding',
      title: 'Prêt à jardiner en cinq étapes douces.',
      description:
        'Un parcours guidé repensé qui prépare votre jardin — et se termine par un message personnalisé de Jeannot.',
      steps: [
        {
          title: 'Créez votre jardin',
          description: 'Un nom et une localisation pour caler tout le reste sur votre climat.',
        },
        {
          title: 'Découvrez la lune',
          description: 'La phase actuelle et son influence sur votre jardin, expliquées.',
        },
        {
          title: 'Choisissez une première plante',
          description: 'Parcourez toute l’encyclopédie avec une recherche infinie.',
        },
        {
          title: 'Un mot personnalisé',
          description: 'Jeannot vous accueille avec un résumé basé sur votre première plante.',
        },
        {
          title: 'Abonnez-vous & lancez la saison',
          description: 'Activez Jeannot et démarrez votre première saison au rythme de la lune.',
        },
      ],
    },
    bilingual: {
      eyebrow: 'Bilingue',
      title: 'Disponible en français et en anglais.',
      description:
        'Toute l’app — y compris les questions suggérées de Jeannot et l’encyclopédie — est traduite en FR et EN.',
    },
    seeJeannotInAction: {
      title: 'Jeannot en action',
      description: 'Un aperçu des écrans que vous utiliserez chaque jour.',
      list: [
        { title: 'Parler avec Jeannot' },
        { title: 'Infos du jardin du jour' },
        { title: 'Planifier les tâches' },
      ],
    },
    downloadSection: {
      title: 'Lancez votre première saison avec Jeannot.',
      description:
        'Planifiez avec la lune, suivez vos récoltes et recevez des conseils personnalisés — le tout dans une seule app.',
      store: {
        ios: 'Télécharger sur l’App Store',
        android: 'Disponible sur Google Play',
      },
    },
  },
};
