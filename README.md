# SMANIT.COM — Vitrine Stealth Mode & Deep Tech

Une page vitrine moderne, ultra-rapide et immersive pour **SMANIT** (`smanit.com`), conçue pour une startup opérant en mode discret (*Stealth mode*) développant sa prochaine génération d'infrastructure et d'intelligence autonome.

---

## 🌟 Fonctionnalités

- **Design Cyber-Minimaliste** : Thème sombre profond, particules interactives 60 FPS en Canvas, glassmorphism et accents néon.
- **Atmosphère Furtive & Énigmatique** : Statut système live, horloge UTC temps réel, métriques de télémétrie.
- **Terminal Système Interactif** : Console intégrée avec flux de compilation et commandes exécutables (`help`, `status`, `mission`, `decrypt`, `ping`, `clear`).
- **Piliers Technologiques** : 3 cartes architecturales (Noyau réactif, performance sub-milliseconde, sécurité post-quantique).
- **Liste d'Attente VIP / Clé d'Accès** : Formulaire d'inscription prioritaire avec token cryptographique généré et persistance locale.
- **Portail Investisseurs & Partenaires** : Modale d'authentification par clé d'accès et demande confidentielle sous NDA.
- **Bilingue Intégral** : Français (FR) et Anglais (EN) commutables instantanément.

---

## 🚀 Développement Local

1. **Installer les dépendances** :
   ```bash
   npm install
   ```

2. **Lancer le serveur de développement** :
   ```bash
   npm run dev
   ```

3. **Compiler le build de production** :
   ```bash
   npm run build
   ```

---

## 🌐 Déploiement sur GitHub Pages

### Option 1 : Déploiement Automatique via GitHub Actions (Recommandé)

Le fichier de workflow `.github/workflows/deploy.yml` est déjà configuré.

1. Poussez le code sur votre dépôt GitHub :
   ```bash
   git init
   git add .
   git commit -m "Initial commit - SMANIT Stealth Landing"
   git branch -M main
   git remote add origin https://github.com/VOTRE_USER/NOM_DU_REPO.git
   git push -u origin main
   ```
2. Dans votre dépôt GitHub :
   - Allez dans **Settings** > **Pages**.
   - Sous **Build and deployment** > **Source**, sélectionnez **GitHub Actions**.
3. Le workflow se déclenchera automatiquement à chaque push et publiera le site sur votre domaine `smanit.com` (grâce au fichier `public/CNAME`).

---

### Option 2 : Déploiement Direct de la branche `gh-pages`

1. Exécutez le build :
   ```bash
   npm run build
   ```
2. Les fichiers statiques optimisés sont générés dans le dossier `dist/`.
