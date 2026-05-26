import type { i18nMessages } from './lang';

export const en: i18nMessages = {
  nav: {
    features: 'Features',
    whatsNew: "What's new",
    identity: 'Identity',
    download: 'Download',
    support: 'Support',
  },
  footer: {
    description:
      'Jeannot is your everyday gardening companion: lunar calendar, biodynamic guidance, smart weather, plant encyclopedia and an AI assistant — all in one calm, nature-inspired app.',
    features: 'Features',
    howItWorks: 'How It Works',
    testimonials: 'Testimonials',
    download: 'Download',
    support: 'Support',
    privacyPolicies: 'Privacy Policies',
    supportFr: 'Support (fr)',
    contact: 'Contact',
    allRightsReserved: 'All rights reserved',
    quickLinks: 'Quick Links',
    legal: 'Legal',
    termsOfService: 'Terms of Service',
    cookiePolicy: 'Cookie Policy',
  },
  home: {
    versionBadge: 'New · Jeannot 2.0',
    title: 'Grow in rhythm with the moon.',
    description:
      'A softer, nature-inspired design, a dedicated My Garden hub to track every plant, and an AI assistant always within reach.',
    download: 'Download Now',
    learnMore: 'Explore what’s new',
    heroPills: [
      'My Garden hub',
      'Jeannot AI',
      'Lunar calendar',
      'Smart weather',
      'Plant encyclopedia',
      'FR / EN',
    ],
    whatsNew: {
      eyebrow: "What's new in 2.0",
      title: 'A calmer, more useful Jeannot.',
      description:
        'Version 2.0 marks a shift toward a more natural, calm and cohesive identity — designed for daily use in the garden. Patch versions 2.0.1 → 2.0.4 bring fast-follow improvements to weather, onboarding and My Garden.',
      items: [
        {
          title: 'Today home screen',
          description:
            'A carousel of today’s tasks and activities — plus integrated frost, wind and rain alerts on your daily forecast.',
        },
        {
          title: 'Guided 5-step onboarding',
          description:
            'Create your garden, see the current moon phase, pick a first plant and get a personal welcome from Jeannot.',
        },
        {
          title: 'Add plants in a flow',
          description:
            'Multi-step form to pick a variety, set its current stage and add notes. The encyclopedia tells you what’s already in your garden.',
        },
        {
          title: 'Activity planning',
          description:
            'Search activities with infinite scroll, schedule them from the recommended days of the lunar calendar, and track progress.',
        },
        {
          title: 'My Garden, polished',
          description:
            'Pagination, search with auto-focus, filters and sorting with icons, edit & remove with confirmation, and tooltips for stage end dates.',
        },
        {
          title: 'Polished AI assistant',
          description:
            'Better loading states while Jeannot is thinking, and translated suggested questions in EN and FR.',
        },
      ],
    },
    features: {
      title: 'Everything your garden needs, one calm app.',
      description:
        'Track every plant, plan by the moon and get personalised advice — all without leaving the app.',
      list: [
        {
          eyebrow: 'My Garden',
          title: 'Your garden, beautifully tracked',
          description:
            'A dedicated hub for every plant: variety cards with a lifecycle progress bar (sowing → harvest), a garden journal, linked tasks per plant and grouped alerts.',
        },
        {
          eyebrow: 'Jeannot AI',
          title: 'An AI gardener in your pocket',
          description:
            'Open the Jeannot drawer from any screen. Context-aware chat tied to your garden, plant and disease identification from photos, and full conversation history.',
        },
        {
          eyebrow: 'Lunar calendar',
          title: 'Plan with the moon',
          description:
            'Know the best days to sow, plant, prune and harvest. Schedule activities straight from the recommended days of the lunar / biodynamic calendar.',
        },
        {
          eyebrow: 'Smart weather',
          title: 'Weather your plants understand',
          description:
            'Frost, wind and rain alerts built into your daily and hourly forecast — plus a tolerance radar chart per species (frost, heat, sun, shade, wind).',
        },
        {
          eyebrow: 'Encyclopedia',
          title: 'A rich plant encyclopedia',
          description:
            'Detailed species pages with permaculture and sowing tips, a planting calendar, and a clear indicator when a variety is already in your garden.',
        },
        {
          eyebrow: 'Tasks',
          title: 'Tasks that fit your week',
          description:
            'A calendar view with overdue alerts, quick actions, and rich completion (notes, quantity, custom date). Alerts grouped and labelled by day.',
        },
      ],
    },
    identity: {
      eyebrow: 'Visual identity',
      title: 'From pastel to earth & plant.',
      description:
        'Jeannot 2.0 moves from a candy palette to a mature, organic one — with clearer semantic meaning for lunar and biodynamic cycle colours.',
      beforeLabel: 'Before · v1.x',
      afterLabel: 'After · v2.0+',
      typography: 'Satoshi',
      typographyDescription: 'Confirmed as the display font across the app.',
      iconsLabel: 'Phosphor Icons',
      iconsDescription:
        'Adopted app-wide — navigation, alerts, onboarding, weather, everywhere.',
      motionLabel: 'Natural motion',
      motionDescription:
        '“Ease-fluid” and “ease-snappy” curves for transitions that feel alive.',
      semantics: {
        title: 'Semantic plant colours',
        description:
          'Cycle colours now mean something at a glance — leaf, root, flower, fruit.',
        items: [
          { name: 'Leaf', hint: 'Leaf vegetables' },
          { name: 'Root', hint: 'Root vegetables' },
          { name: 'Flower', hint: 'Flowering & aromatics' },
          { name: 'Fruit', hint: 'Fruits & harvests' },
        ],
      },
    },
    onboarding: {
      eyebrow: 'Onboarding',
      title: 'Up and running in five gentle steps.',
      description:
        'A redesigned guided flow that gets your garden ready — with a personal welcome from Jeannot at the end.',
      steps: [
        {
          title: 'Create your garden',
          description: 'Pick a name and a location to anchor everything to your climate.',
        },
        {
          title: 'See the moon',
          description: 'The current phase and the lunar influence on your garden, explained.',
        },
        {
          title: 'Pick a first plant',
          description: 'Browse the full encyclopedia with infinite search.',
        },
        {
          title: 'A personal welcome',
          description: 'Jeannot greets you with a summary based on your first plant.',
        },
        {
          title: 'Subscribe & grow',
          description: 'Activate Jeannot and start your first season in rhythm with the moon.',
        },
      ],
    },
    bilingual: {
      eyebrow: 'Bilingual',
      title: 'Fully available in French and English.',
      description:
        'The entire app — including Jeannot’s suggested questions and the encyclopedia — is translated in EN and FR.',
    },
    seeJeannotInAction: {
      title: 'See Jeannot in action',
      description: 'A quick tour of the screens you’ll use every day.',
      list: [
        { title: 'Talk with Jeannot' },
        { title: 'Daily garden info' },
        { title: 'Schedule garden tasks' },
      ],
    },
    downloadSection: {
      title: 'Start your first season with Jeannot.',
      description:
        'Plan by the moon, track your harvests, and get personalised advice — all in one app.',
      store: {
        ios: 'Download on App Store',
        android: 'Get it on Google Play',
      },
    },
  },
};
