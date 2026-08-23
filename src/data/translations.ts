import { Translations } from '../types';

export const translations: Record<'fr' | 'en', Translations> = {
  fr: {
    meta: {
      statusBadge: "STEALTH MODE // PROTOCOLE CONFIDENTIEL",
      buildPhase: "INGÉNIERIE EN COURS — PHASE V0.3"
    },
    nav: {
      stealthNotice: "DÉVELOPPEMENT SOUS LES RADARS",
      requestAccess: "Accès Privilégié"
    },
    hero: {
      preTitle: "NOUVELLE GÉNÉRATION D'INFRASTRUCTURE",
      titleMain: "Quelque chose de puissant",
      titleHighlight: "s'édifie dans le silence.",
      description: "SMANIT forge une couche d'intelligence et d'automatisation système sans précédent. Nous opérons actuellement en mode furtif pour concevoir les fondations de demain.",
      metrics: [
        { label: "MOTEUR CENTRAL", value: "CORE-X9", sub: "Architecture distribuée" },
        { label: "LATENCE VISÉE", value: "< 0.4 ms", sub: "Exécution sub-milliseconde" },
        { label: "STATUT", value: "STEALTH", sub: "Accès restreint par invitation" },
        { label: "DÉPLOIEMENT", value: "Q4 2026", sub: "Phase de révélation" }
      ]
    },
    waitlist: {
      title: "Rejoignez le cercle restreint d'avant-première",
      subtitle: "Soyez parmi les premiers à être notifiés dès l'ouverture des accès anticipés et recevez votre clé cryptographique.",
      placeholder: "votre.email@entreprise.com",
      button: "Demander une Clé d'Accès",
      submitting: "Chiffrement de la requête...",
      successTitle: "Demande Enregistrée avec Succès",
      successMessage: "Votre requête a été ajoutée à notre registre prioritaire. Une invitation chiffrée vous sera envoyée dès le déblocage du prochain groupe.",
      queuePrefix: "Rang Prioritaire",
      guarantee: "Strictement confidentiel. Zéro spam. Chiffrement de bout en bout."
    },
    terminal: {
      headerTitle: "SMANIT-CORE // TELEMETRY & BUILD STREAM",
      commandHint: "Tapez 'help', 'status', 'mission', ou 'decrypt' pour interagir",
      placeholder: "Entrez une commande système...",
      initialLogs: [
        "[SYS-BOOT] Initialisation du noyau quantique SMANIT v0.3.1-alpha...",
        "[AUTH] Protocole de discrétion opérationnelle : ACTIF",
        "[MESH] Connexion aux nœuds d'orchestration distribuée... 100% OK",
        "[BUILD] Compilation du moteur d'inférence autonome en cours...",
        "[SECURITY] Zero-Trust Enclave vérifiée et scellée.",
        "[INFO] Prêt pour instructions. Entrez 'help' pour les commandes disponibles."
      ],
      helpText: [
        "COMMANDES DISPONIBLES :",
        "  • status   : Affiche l'état en temps réel des sous-systèmes SMANIT",
        "  • mission  : Dévoile un fragment de la vision technologique",
        "  • decrypt  : Tente le déchiffrement du manifeste fondateur",
        "  • ping     : Mesure la latence du cluster",
        "  • clear    : Réinitialise l'écran de la console"
      ],
      missionText: [
        "[MISSION] Briser les goulots d'étranglement entre raisonnement complexe et exécution ultra-rapide.",
        "[VISION] Créer une infrastructure invisible, résiliente et fondamentalement autonome pour les entreprises de rupture."
      ],
      decryptSuccess: [
        "[DECRYPT] Clé publique acceptée. Déchiffrement du manifeste...",
        ">>> SMANIT : LE FUTUR S'ÉCRIT LOIN DU BRUIT <<<",
        "Les plus grandes révolutions ne s'annoncent pas à l'avance. Elles se construisent ligne par ligne.",
        "[HASH] sha256: 8f9b7c61d3a05e4b2... [VERIFIED]"
      ]
    },
    pillars: {
      title: "Les Piliers de l'Architecture",
      subtitle: "Une convergence d'ingénierie avancée, de performance extrême et de sécurité inviolable.",
      items: [
        {
          id: "core",
          tag: "PILIER 01 // SYSTÈME",
          title: "Noyau Autonome Réactif",
          description: "Une pile d'orchestration auto-optimisée capable d'adapter ses ressources en temps réel face à des charges massives et imprévisibles.",
          code: "MODULE: AUTO_SCALING_ENGINE_V3"
        },
        {
          id: "speed",
          tag: "PILIER 02 // VITESSE",
          title: "Exécution Sub-Milliseconde",
          description: "Pipeline de calcul haute fréquence conçu pour éliminer toute friction et délivrer une réactivité instantanée à l'échelle globale.",
          code: "LATENCY: LOW_OVERHEAD_PIPELINE"
        },
        {
          id: "security",
          tag: "PILIER 03 // INTÉGRITÉ",
          title: "Forteresse Zero-Knowledge",
          description: "Chiffrement résistant aux menaces modernes garantissant la confidentialité absolue de chaque donnée et flux de calcul.",
          code: "CIPHER: POST_QUANTUM_SHIELD"
        }
      ]
    },
    investorModal: {
      title: "Accès Investisseurs & Partenaires Privés",
      subtitle: "Accédez à la documentation confidentielle sous accord de non-divulgation (NDA).",
      accessKeyLabel: "Clé d'accès confidentielle :",
      accessKeyPlaceholder: "Entrez le token à 8 caractères...",
      orInquiry: "Ou demandez une clé privée :",
      namePlaceholder: "Nom complet",
      emailPlaceholder: "Email professionnel / Fonds",
      entityPlaceholder: "Structure / Organisation",
      messagePlaceholder: "Brève note sur votre intérêt stratégique...",
      submitInquiry: "Transmettre la Demande Confidentielle",
      unlockButton: "Déverrouiller l'accès",
      close: "Fermer",
      successMessage: "Votre demande de clé d'accès a été transmise à la direction de SMANIT. Nous vous répondrons sous 24-48h.",
      invalidKey: "Clé d'accès non reconnue ou expirée. Veuillez formuler une demande ci-dessous."
    },
    footer: {
      rights: "Tous droits réservés.",
      stealthNotice: "Projet confidentiel en cours de développement.",
      location: "PARIS // MONDIAL",
      securityNote: "ENCRYPTED SSL // SECURE TUNNEL"
    }
  },
  en: {
    meta: {
      statusBadge: "STEALTH MODE // CONFIDENTIAL PROTOCOL",
      buildPhase: "ACTIVE ENGINEERING — PHASE V0.3"
    },
    nav: {
      stealthNotice: "BUILDING UNDER THE RADAR",
      requestAccess: "Request VIP Access"
    },
    hero: {
      preTitle: "NEXT-GEN SYSTEMS INFRASTRUCTURE",
      titleMain: "Something powerful",
      titleHighlight: "is being forged in silence.",
      description: "SMANIT is engineering an unprecedented layer of autonomous intelligence and high-performance infrastructure. We are currently operating in stealth to build the foundations of tomorrow.",
      metrics: [
        { label: "CORE ENGINE", value: "CORE-X9", sub: "Distributed architecture" },
        { label: "TARGET LATENCY", value: "< 0.4 ms", sub: "Sub-millisecond compute" },
        { label: "STATUS", value: "STEALTH", sub: "Restricted invite-only access" },
        { label: "DISCLOSURE", value: "Q4 2026", sub: "Public release window" }
      ]
    },
    waitlist: {
      title: "Join the Private Early Access Cohort",
      subtitle: "Be among the selected innovators notified the moment our private alpha opens and secure your cryptographic key.",
      placeholder: "your.email@enterprise.com",
      button: "Request Priority Access",
      submitting: "Encrypting credentials...",
      successTitle: "Access Request Confirmed",
      successMessage: "Your profile has been queued in our high-priority registry. An encrypted invitation token will be dispatched upon cohort clearance.",
      queuePrefix: "Priority Rank",
      guarantee: "Strictly confidential. Zero spam. End-to-end encrypted."
    },
    terminal: {
      headerTitle: "SMANIT-CORE // TELEMETRY & BUILD STREAM",
      commandHint: "Type 'help', 'status', 'mission', or 'decrypt' to interact",
      placeholder: "Enter system command...",
      initialLogs: [
        "[SYS-BOOT] Initializing SMANIT quantum kernel v0.3.1-alpha...",
        "[AUTH] Operational stealth protocol : ACTIVE",
        "[MESH] Connecting to distributed orchestration nodes... 100% OK",
        "[BUILD] Autonomous inference engine compiling...",
        "[SECURITY] Zero-Trust Enclave verified and sealed.",
        "[INFO] Ready for stream input. Type 'help' for available commands."
      ],
      helpText: [
        "AVAILABLE SYSTEM DIRECTIVES :",
        "  • status   : Query real-time subsystem state",
        "  • mission  : Reveal engineering mission excerpt",
        "  • decrypt  : Attempt cryptographic manifesto extraction",
        "  • ping     : Check node round-trip latency",
        "  • clear    : Reset console viewport"
      ],
      missionText: [
        "[MISSION] Eliminating the friction between high-order reasoning and sub-millisecond execution.",
        "[VISION] Engineering the invisible, highly resilient backbone for category-defining platforms."
      ],
      decryptSuccess: [
        "[DECRYPT] Public token validated. Decrypting manifesto...",
        ">>> SMANIT : THE FUTURE IS BUILT IN SILENCE <<<",
        "True technological shifts don't announce themselves loudly. They are forged line by line.",
        "[HASH] sha256: 8f9b7c61d3a05e4b2... [VERIFIED]"
      ]
    },
    pillars: {
      title: "Architectural Pillars",
      subtitle: "A convergence of deep engineering, extreme performance, and hardened security.",
      items: [
        {
          id: "core",
          tag: "PILLAR 01 // SYSTEM",
          title: "Autonomous Reactive Kernel",
          description: "A self-optimizing orchestration stack dynamically adjusting computing resources under massive and unpredictable workloads.",
          code: "MODULE: AUTO_SCALING_ENGINE_V3"
        },
        {
          id: "speed",
          tag: "PILLAR 02 // VELOCITY",
          title: "Sub-Millisecond Execution",
          description: "High-frequency computational pipeline engineered to eliminate latency and provide instantaneous global feedback.",
          code: "LATENCY: LOW_OVERHEAD_PIPELINE"
        },
        {
          id: "security",
          tag: "PILLAR 03 // INTEGRITY",
          title: "Zero-Knowledge Fortress",
          description: "Post-quantum resilient encryption shielding every data packet and proprietary computational stream.",
          code: "CIPHER: POST_QUANTUM_SHIELD"
        }
      ]
    },
    investorModal: {
      title: "Investor & Strategic Partner Portal",
      subtitle: "Access confidential technical documentation and milestone roadmaps under NDA.",
      accessKeyLabel: "Confidential Access Token:",
      accessKeyPlaceholder: "Enter 8-digit access key...",
      orInquiry: "Or request private credentials:",
      namePlaceholder: "Full Name",
      emailPlaceholder: "Work / Fund Email",
      entityPlaceholder: "Firm / Entity",
      messagePlaceholder: "Brief note on strategic alignment...",
      submitInquiry: "Submit Confidential Request",
      unlockButton: "Verify & Unlock",
      close: "Close",
      successMessage: "Your access request has been transmitted to SMANIT leadership. We will respond within 24-48 hours.",
      invalidKey: "Access token invalid or expired. Please submit an official inquiry below."
    },
    footer: {
      rights: "All rights reserved.",
      stealthNotice: "Confidential deep-tech project under active development.",
      location: "PARIS // GLOBAL",
      securityNote: "ENCRYPTED SSL // SECURE TUNNEL"
    }
  }
};
