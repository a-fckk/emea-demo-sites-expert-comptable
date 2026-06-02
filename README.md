# Emea Demo Sites - Expert Comptable

Ce projet sert a generer rapidement des maquettes privees pour la prospection de cabinets d'expertise comptable.

## Idee

Tu gardes quelques templates metiers dans `src/templates`.
Pour chaque prospect, tu ajoutes une fiche dans `src/data/prospects.json`.
Astro genere ensuite une URL du type :

```txt
https://demo.emea.website/demo/cabinet-expert-comptable-rennes
```

Toutes les pages sont configurees en `noindex,nofollow`.

## Installation locale

Depuis le dossier `emea-demo-sites-expert-comptable` :

```bash
npm install
npm run dev
```

Le site local sera generalement disponible sur :

```txt
http://localhost:4321
```

## Ajouter un prospect

1. Ouvre `src/data/prospects.json`.
2. Copie un bloc existant.
3. Change les champs principaux :

```json
{
  "slug": "nom-entreprise-ville-code",
  "template": "expert-comptable",
  "name": "Nom Entreprise",
  "sector": "Expertise comptable",
  "city": "Rennes",
  "phone": "02 ...",
  "email": "contact@...",
  "address": "Adresse complete",
  "hours": "Lun-Ven 8h-18h",
  "logo": "/logos/logo-client.png",
  "heroImage": "",
  "primaryColor": "#182032",
  "accentColor": "#e24b2d",
  "tagline": "Phrase principale de la maquette.",
  "proof": "Phrase business orientee conversion.",
  "services": ["Service 1", "Service 2", "Service 3", "Service 4"],
  "zones": ["Rennes", "Cesson-Sevigne", "Saint-Gregoire"],
  "review": "Exemple d'avis client.",
  "ctaLabel": "Demander un rendez-vous"
}
```

4. Mets le logo dans `public/logos`.
5. Relance ou redeploie.

## Templates disponibles

- `expert-comptable`

Ce projet est separe du template fiduciaire suisse. Les images par defaut sont volontairement neutres: documents, accompagnement, tableaux de bord et travail de cabinet, sans reference visuelle a une ville precise.

## Prompt a donner a ChatGPT pour ajouter un prospect

```txt
Ajoute ce prospect au fichier src/data/prospects.json sans toucher au reste du projet.
Utilise le template expert-comptable.
Genere un slug discret avec le nom, la ville et 4 caracteres aleatoires.
Adapte tagline, proof, services, zones, review et ctaLabel pour que la page soit credible commercialement.

Infos prospect :
Nom :
Activite :
Ville :
Telephone :
Email :
Adresse :
Horaires :
Site actuel :
Notes :
```

## Prompt court pour modifier un prospect existant

```txt
Modifie uniquement la fiche du prospect dont le slug est [slug] dans src/data/prospects.json.
Remplace nom, telephone, email, adresse, horaires, services, zones, tagline, proof, review et ctaLabel avec les infos ci-dessous.
Ne change pas les autres prospects et ne modifie pas les templates.

Infos :
Nom :
Activite exacte :
Ville :
Telephone :
Email :
Adresse :
Horaires :
Services :
Zones :
Notes :
```

## Prompt a donner a ChatGPT pour creer un nouveau template

```txt
Dans ce projet Astro, cree un nouveau template metier dans src/templates.
Inspire-toi de la structure des templates existants, mais cree une direction visuelle originale.
Le template doit lire les memes champs que les autres prospects.
Ajoute ensuite ce template dans src/pages/p/[slug].astro.
Ne modifie pas prospects.json sauf pour ajouter un exemple de prospect si necessaire.
Le design doit etre premium, responsive, et oriente conversion : appel visible, avis, services, zones, CTA.
```

## Mise en ligne Netlify

1. Cree un repository GitHub prive.
2. Envoie ce dossier sur GitHub.
3. Dans Netlify, clique sur `Add new site`.
4. Choisis `Import an existing project`.
5. Connecte GitHub.
6. Selectionne le repository.
7. Netlify detectera :

```txt
Build command: npm run build
Publish directory: dist
```

8. Ajoute ton sous-domaine :

```txt
demo.emea.website
```

Ensuite, chaque modification envoyee sur GitHub redeploie automatiquement les demos.
