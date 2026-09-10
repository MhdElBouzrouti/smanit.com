import { Translations } from '../types';

export const translations: Record<'fr' | 'en', Translations> = {
  fr: {
    tag: "CONFIDENTIEL // STEALTH MODE",
    tagline: "L'innovation se forge dans le silence.",
    subtext: "SMANIT conçoit la nouvelle génération de technologies. Actuellement en cours de développement sous les radars.",
    notifyTitle: "Être informé lors du dévoilement",
    placeholder: "Votre adresse email",
    button: "M'avertir",
    submitting: "Enregistrement...",
    successMessage: "Votre email a bien été pris en compte. Vous serez prévenu au moment opportun.",
    contactPrompt: "Pour toute demande confidentielle ou partenariat :",
    contactEmail: "contact@smanit.com",
    footerRights: "Tous droits réservés.",
    status: "DÉVELOPPEMENT EN COURS"
  },
  en: {
    tag: "CONFIDENTIAL // STEALTH MODE",
    tagline: "Great things are forged in silence.",
    subtext: "SMANIT is engineering the next generation of technology. Currently building under the radar.",
    notifyTitle: "Get notified at launch",
    placeholder: "Your email address",
    button: "Notify me",
    submitting: "Submitting...",
    successMessage: "Thank you. You will be quietly notified when the time comes.",
    contactPrompt: "For confidential inquiries and partnerships:",
    contactEmail: "contact@smanit.com",
    footerRights: "All rights reserved.",
    status: "BUILDING IN STEALTH"
  }
};
