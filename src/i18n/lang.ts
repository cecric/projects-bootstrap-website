export type i18nMessages = {
  nav: {
    features: string;
    whatsNew: string;
    identity: string;
    download: string;
    support: string;
  };
  footer: {
    description: string;
    features: string;
    howItWorks: string;
    testimonials: string;
    download: string;
    support: string;
    privacyPolicies: string;
    supportFr: string;
    contact: string;
    allRightsReserved: string;
    quickLinks: string;
    legal: string;
    termsOfService: string;
    cookiePolicy: string;
  };
  home: {
    tagline: string;
    title: string;
    description: string;
    download: string;
    learnMore: string;
    heroPills: string[];
    whatsNew: {
      eyebrow: string;
      title: string;
      description: string;
      items: {
        title: string;
        description: string;
      }[];
    };
    features: {
      title: string;
      description: string;
      list: {
        title: string;
        description: string;
        eyebrow: string;
      }[];
    };
    bilingual: {
      eyebrow: string;
      title: string;
      description: string;
    };
    seeJeannotInAction: {
      title: string;
      description: string;
      list: {
        title: string;
      }[];
    };
    downloadSection: {
      title: string;
      description: string;
      store: {
        ios: string;
        android: string;
      };
    };
  };
};
