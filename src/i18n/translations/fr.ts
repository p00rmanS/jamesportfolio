import type { Translations } from '@/i18n/types'

export const fr: Translations = {
  nav: {
    work: 'Travaux',
    services: 'Services',
    about: 'À propos',
    process: 'Processus',
    resume: 'CV',
    bookCall: 'Réserver un appel',
  },
  hero: {
    eyebrow: 'Systèmes créatifs pour les entreprises modernes',
    headline: ['Un contenu qui connecte.', 'Des systèmes qui suivent le rythme.'],
    subcopy: 'Vidéo, contenu et systèmes pour rendre votre entreprise plus percutante et plus efficace.',
    primaryCta: 'Voir nos réalisations',
    secondaryCta: 'Réserver une consultation',
  },
  sections: {
    work: {
      label: 'Réalisations',
      title: 'Un aperçu de ce que crée J Sync.',
      description: 'Une sélection de projets récents en vidéo, web et automatisation.',
    },
    videos: {
      label: 'Portfolio Vidéo',
      title: 'La vidéo, bien présentée.',
      description: 'Un aperçu détaillé des vidéos récentes.',
    },
    content: {
      label: 'Contenus',
      title: 'Réseaux sociaux et campagnes, en un coup d’œil.',
      description: 'Réseaux sociaux, campagnes et design de marque réunis.',
    },
    automation: {
      label: 'Automatisation',
      title: 'Les systèmes qui travaillent en coulisses.',
      description: 'Comment J Sync automatise les tâches répétitives : le déclencheur, les étapes et les outils utilisés.',
    },
    services: {
      label: 'Services',
      title: 'Quatre façons de collaborer.',
      description: 'Chaque service fonctionne seul, ou s’intègre à un système complet.',
    },
    process: {
      label: 'Processus',
      title: 'Comment un projet avance vraiment.',
      description: 'Quatre étapes. Des repères clairs, aucune zone d’ombre.',
    },
    about: {
      label: 'À propos',
      title: 'Derrière {brand}.',
    },
    faq: {
      label: 'FAQ',
      title: 'Avant de réserver.',
      description: 'Les questions qui reviennent le plus souvent avant un premier appel.',
    },
    booking: {
      label: 'Réservation',
      title: 'Construisons quelque chose d’utile.',
    },
  },
  services: {
    ideaFor: 'Idéal pour',
    deliverables: 'Livrables courants',
    seeRelatedWork: 'Voir un projet similaire',
    askAboutService: 'Poser une question sur ce service',
    items: {
      'video-production': {
        title: 'Production Vidéo',
        description: 'Une vidéo pensée avec intention — des formats courts aux films de marque.',
        idealFor: 'Les entreprises qui ont besoin de vidéo sans équipe interne.',
      },
      'content-creation': {
        title: 'Création de Contenu',
        description: 'Contenus sociaux et visuels de marque, conçus comme un système reproductible.',
        idealFor: 'Les équipes qui veulent un contenu régulier sans tout réinventer chaque semaine.',
      },
      'website-development': {
        title: 'Développement Web',
        description: 'Des sites rapides et responsives, pensés pour convertir — réservations, demandes, ou simplement une meilleure première impression.',
        idealFor: 'Les entreprises avec un site lent, daté ou peu performant.',
      },
      'workflow-automation': {
        title: 'Automatisation des Processus',
        description: 'De l’automatisation pour les tâches répétitives d’une entreprise — prospects, planification, intégration, rapports.',
        idealFor: 'Les équipes qui passent des heures chaque semaine sur des tâches manuelles.',
      },
    },
  },
  process: {
    discover: { title: 'Découvrir', description: 'Une conversation sur ce qui fonctionne, ce qui ne fonctionne pas, et à quoi ressemble la réussite.' },
    plan: { title: 'Planifier', description: 'Des livrables, un calendrier et des outils clairs — aucune surprise au démarrage.' },
    create: { title: 'Créer', description: 'Filmer, concevoir, construire ou automatiser — avec des points réguliers.' },
    launch: { title: 'Lancer et Améliorer', description: 'On observe ce qui fonctionne après le lancement, et on continue d’améliorer.' },
  },
  about: {
    introQuote: 'J Sync allie production créative et technologie pratique — pensé pour être réellement utile, pas seulement beau.',
    toolsLabel: 'Outils et Technologies',
    downloadResume: 'Télécharger',
  },
  footer: {
    brandStatement: 'Vidéo, contenu, sites web et automatisation — pour les entreprises qui veulent fonctionner plus efficacement.',
    navigate: 'Navigation',
    connect: 'Connectons-nous.',
    backToTop: 'Retour en haut',
    privacy: 'Confidentialité',
    accessibility: 'Accessibilité',
  },
  booking: {
    description: 'Un court appel pour définir ce dont vous avez vraiment besoin — vidéo, web, contenu ou automatisation.',
    bookNow: 'Réserver maintenant',
    form: {
      name: 'Nom',
      email: 'E-mail',
      service: 'Service requis',
      selectService: 'Choisissez un service',
      notSure: 'Pas encore sûr(e)',
      message: 'Autre chose ? (facultatif)',
      continue: 'Continuer pour réserver',
      errors: {
        name: 'Veuillez entrer votre nom.',
        email: 'Veuillez entrer votre e-mail.',
        emailInvalid: 'Veuillez entrer une adresse e-mail valide.',
        service: 'Veuillez sélectionner un service.',
      },
    },
  },
  language: {
    label: 'Langue',
  },
  dashboard: {
    getInTouch: 'Entrer en contact',
    dailyDrivers: 'Outils du quotidien',
    toolsIWorkWith: 'Outils que j’utilise',
    fullSite: 'Voir le site complet',
    altViewLabel: 'Vue tableau de bord',
  },
  faq: {
    items: [
      {
        question: 'Combien de temps dure un projet type ?',
        answer:
          'Cela dépend de l’ampleur, mais la plupart des projets vidéo et web durent une à trois semaines, du lancement à la livraison. Les automatisations sont généralement plus rapides, souvent en ligne en une semaine.',
      },
      {
        question: 'Comment fonctionnent les tarifs ?',
        answer:
          'Chaque projet reçoit un devis basé sur son périmètre après l’appel découverte — rien n’est chiffré à l’aveugle. Les missions ponctuelles sont souvent au forfait ; les systèmes de contenu ou d’automatisation continus sont généralement un abonnement mensuel.',
      },
      {
        question: 'Que se passe-t-il si j’ai besoin de modifications après la livraison ?',
        answer:
          'Un tour de révisions est inclus avant la livraison finale de chaque projet. Le support ou les mises à jour ultérieures sont disponibles sur demande.',
      },
      {
        question: 'Dois-je savoir exactement ce que je veux avant de réserver un appel ?',
        answer:
          'Non — l’appel découverte sert justement à le déterminer ensemble. Venez avec le problème à résoudre, pas forcément la solution.',
      },
      {
        question: 'Ces services peuvent-ils être combinés ?',
        answer:
          'Oui — vidéo, contenu, web et automatisation sont pensés pour se compléter. Beaucoup de clients commencent par un service puis en ajoutent un autre une fois le premier en place.',
      },
    ],
  },
  commandPalette: {
    placeholder: 'Rechercher des sections et des actions…',
    noResults: 'Aucun résultat trouvé.',
    sectionsGroup: 'Sections',
    actionsGroup: 'Actions',
  },
}
