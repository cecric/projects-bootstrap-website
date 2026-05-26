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
    versionBadge: string;
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
    identity: {
      eyebrow: string;
      title: string;
      description: string;
      beforeLabel: string;
      afterLabel: string;
      typography: string;
      typographyDescription: string;
      iconsLabel: string;
      iconsDescription: string;
      motionLabel: string;
      motionDescription: string;
      semantics: {
        title: string;
        description: string;
        items: {
          name: string;
          hint: string;
        }[];
      };
    };
    onboarding: {
      eyebrow: string;
      title: string;
      description: string;
      steps: {
        title: string;
        description: string;
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
