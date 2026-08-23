export type Language = 'fr' | 'en';

export interface Translations {
  meta: {
    statusBadge: string;
    buildPhase: string;
  };
  nav: {
    stealthNotice: string;
    requestAccess: string;
  };
  hero: {
    preTitle: string;
    titleMain: string;
    titleHighlight: string;
    description: string;
    metrics: {
      label: string;
      value: string;
      sub: string;
    }[];
  };
  waitlist: {
    title: string;
    subtitle: string;
    placeholder: string;
    button: string;
    submitting: string;
    successTitle: string;
    successMessage: string;
    queuePrefix: string;
    guarantee: string;
  };
  terminal: {
    headerTitle: string;
    commandHint: string;
    placeholder: string;
    initialLogs: string[];
    helpText: string[];
    missionText: string[];
    decryptSuccess: string[];
  };
  pillars: {
    title: string;
    subtitle: string;
    items: {
      id: string;
      tag: string;
      title: string;
      description: string;
      code: string;
    }[];
  };
  investorModal: {
    title: string;
    subtitle: string;
    accessKeyLabel: string;
    accessKeyPlaceholder: string;
    orInquiry: string;
    namePlaceholder: string;
    emailPlaceholder: string;
    entityPlaceholder: string;
    messagePlaceholder: string;
    submitInquiry: string;
    unlockButton: string;
    close: string;
    successMessage: string;
    invalidKey: string;
  };
  footer: {
    rights: string;
    stealthNotice: string;
    location: string;
    securityNote: string;
  };
}
