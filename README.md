# LobsterAPI


## But du projet

**Statut** : développement en cours depuis mai 2022.


### Description des fonctionnalités / pages
LOBSTER est un site internet avec 2 pages internets composé de 2 dashboards :
 * Le premier dashboard contient :
    * les mots tendances de la transition énergétique/transition écologique,
    * un histogramme d’évolution des sentiments sur la transition énergétique/écologique et,
    * un radar interactif des mots négatifs/positifs
 * Le deuxième dashboard affiche :
    * affiche le nombre de tweets en rapport avec la transition écologique et énergétique rédigé depuis ce dernier mois
    * ainsi que les personnes les plus influentes de twitter sur ces thématiques.
    * Il affiche également en fonction de la date les indicateurs suivants :
      * les cinq tweets les plus controversés/aimés sur la thèmatique,
      * les thématiques abordées chaque jour.
 * Les deux dashboards sont liés par un hyperlien via la barre de navigation.


### ACHITECTURE DU PROJET LOBSTER

```mermaid
graph TD;
subgraph Scraping
A[LobsterTwitterScraping]-->|Get-data| B(Nitter)-->|Integration| T(Twitter)
end
subgraph Database
A ---> |CRUD| C{MongoDB}
end
subgraph Back
D[LobsterAPI] --> |Read-sauf-data-user=CRUD| C
end
subgraph Front
D --> |Send-data| E[Lobsterfrontend]
E --> |Send-data| D
end
subgraph DatabaseV2
A ---> |CRUD| F{MongoDB}
end
subgraph BackV2
G[LobsterAPI] --> |Read-sauf-data-user=CRUD| F
end
subgraph FrontV2
G --> |Send-data| H[Lobsterfrontend]
H --> |Send-data| G
end
```

### Technologies
**Backend**
* Node.js
* MongoDB

**Frontend**
* React.js
* Simga.js
* Chart.js

**Scrapping**
* Nitter.py


### Evolutions possibles
1. Intégration des 2 pages
1. Passage vers un autre réseau social comme LinkedIn
1. Payer l'API Officielle Twitter (ou trouver un autre moyen de récupérer en masse les Tweets)

****

## Equipe & rôles

Notre équipe est composée de :


**FORMATION EN ALTERNANCE**

1. **FELLAH Mohamed-Fouad** - M2 MIAGE FA
1. **BAN Régis** - M2 MIAGE FA
1. **DJEBBARA Kahina** - M2 MIAGE FA
1. **MARECAR Sarah** - M2 MIAGE FA
1. **RAKOTONIRINA Onitiana** - M2 MIAGE FA
1. **TANG François** - M2 MIAGE FA


## Documentation

L'ensemble de la documentation listée ci-dessous se trouve ici notamment la documentation pour installer le projet.


## Communication au sein de notre équipe

Utilisation du [serveur Discord PPD - M1 MIAGE](https://discord.gg/69Wfxqfgmh).

****

## Documentation

### Versions des modules

**Backend :**
```
{
  "name": "lobsterapi",
  "version": "0.0.0",
  "description": "API",
  "main": "app.js",
  "private": true,
  "homepage": "https://github.com/LobsterOrganization/LobsterAPI.git",
  "scripts": {
    "start": "nodemon ./bin/www",
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "dependencies": {
    "all": "^0.0.0",
    "bcrypt": "^5.0.1",
    "body-parser": "^1.20.2",
    "chalk": "^4.1.2",
    "config": "^3.3.7",
    "cookie-parser": "~1.4.4",
    "cors": "^2.8.5",
    "debug": "~2.6.9",
    "dotenv": "^16.0.1",
    "ejs": "^3.1.8",
    "express": "~4.16.1",
    "helmet": "^5.1.0",
    "helmet-csp": "^3.4.0",
    "http-errors": "~1.6.3",
    "jsonwebtoken": "^8.5.1",
    "moment": "^2.29.4",
    "moment-timezone": "^0.5.43",
    "mongoose": "^6.3.5",
    "morgan": "~1.9.1",
    "nodemon": "^2.0.16",
    "ora": "^5.4.1",
    "passport": "^0.6.0",
    "passport-jwt": "^4.0.0",
    "validator": "^13.7.0"
  }
}
```

**Backend V2 :**
```
{
  "name": "lobsterapi",
  "version": "0.0.0",
  "description": "API",
  "main": "app.js",
  "private": true,
  "homepage": "https://github.com/LobsterOrganization/LobsterAPI.git",
  "scripts": {
    "start": "nodemon ./bin/www",
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "dependencies": {
    "all": "^0.0.0",
    "bcrypt": "^5.0.1",
    "body-parser": "^1.20.2",
    "chalk": "^4.1.2",
    "config": "^3.3.7",
    "cookie-parser": "~1.4.4",
    "cors": "^2.8.5",
    "debug": "~2.6.9",
    "dotenv": "^16.0.1",
    "ejs": "^3.1.8",
    "express": "~4.16.1",
    "helmet": "^5.1.0",
    "helmet-csp": "^3.4.0",
    "http-errors": "~1.6.3",
    "jsonwebtoken": "^8.5.1",
    "moment": "^2.29.4",
    "moment-timezone": "^0.5.43",
    "mongoose": "^6.3.5",
    "morgan": "~1.9.1",
    "nodemon": "^2.0.16",
    "ora": "^5.4.1",
    "passport": "^0.6.0",
    "passport-jwt": "^4.0.0",
    "validator": "^13.7.0"
  }
}
```


**Frontend :**
```
{
  "name": "lobsterfrontend",
  "version": "0.1.0",
  "private": true,
  "dependencies": {
    "@material-ui/core": "^4.12.4",
    "@react-sigma/core": "^2.0.2",
    "@testing-library/jest-dom": "^5.11.4",
    "@testing-library/react": "^11.1.0",
    "@testing-library/user-event": "^12.1.10",
    "axios": "^0.27.2",
    "chart.js": "^3.8.0",
    "d3": "^7.8.4",
    "d3-cloud": "^1.2.5",
    "dotenv": "^16.0.1",
    "faker": "^5.5.3",
    "graphology": "^0.24.1",
    "graphology-layout-forceatlas2": "^0.9.1",
    "lodash": "^4.17.21",
    "moment": "^2.29.3",
    "react": "^17.0.2",
    "react-chartjs-2": "^4.2.0",
    "react-dom": "^17.0.2",
    "react-redux": "^7.2.2",
    "react-router-dom": "^5.2.0",
    "react-scripts": "4.0.3",
    "react-sigma-v2": "^1.3.0",
    "redux": "^4.2.0",
    "redux-devtools-extension": "^2.13.8",
    "redux-logger": "^3.0.6",
    "redux-thunk": "^2.4.1",
    "sigma": "^2.3.1",
    "web-vitals": "^1.0.1"
  },
  "scripts": {
    "start": "react-scripts --openssl-legacy-provider start",
    "build": "react-scripts build",
    "test": "react-scripts test",
    "eject": "react-scripts eject"
  },
  "eslintConfig": {
    "extends": [
      "react-app",
      "react-app/jest"
    ]
  },
  "browserslist": {
    "production": [
      ">0.2%",
      "not dead",
      "not op_mini all"
    ],
    "development": [
      "last 1 chrome version",
      "last 1 firefox version",
      "last 1 safari version"
    ]
  }
}
```

**Frontend V2 :**
```
{
  "name": "lobsterfrontend",
  "version": "0.1.0",
  "private": true,
  "dependencies": {
    "@material-ui/core": "^4.12.4",
    "@ramonak/react-progress-bar": "^5.0.3",
    "@react-sigma/core": "^2.0.2",
    "@reduxjs/toolkit": "^1.9.5",
    "@testing-library/jest-dom": "^5.11.4",
    "@testing-library/react": "^11.1.0",
    "@testing-library/user-event": "^12.1.10",
    "axios": "^0.27.2",
    "chart.js": "^3.8.0",
    "cross-env": "^7.0.3",
    "d3": "^7.8.4",
    "d3-cloud": "^1.2.5",
    "dotenv": "^16.0.1",
    "faker": "^5.5.3",
    "graphology": "^0.24.1",
    "graphology-layout-forceatlas2": "^0.9.1",
    "lodash": "^4.17.21",
    "moment": "^2.29.4",
    "moment-timezone": "^0.5.43",
    "react": "^17.0.2",
    "react-chartjs-2": "^4.2.0",
    "react-date-picker": "^10.1.0",
    "react-dom": "^17.0.2",
    "react-redux": "^7.2.2",
    "react-router-dom": "^5.2.0",
    "react-scripts": "4.0.3",
    "react-sigma-v2": "^1.3.0",
    "react-wordcloud": "^1.2.7",
    "recharts": "^2.6.2",
    "redux": "^4.2.0",
    "redux-devtools-extension": "^2.13.8",
    "redux-logger": "^3.0.6",
    "redux-thunk": "^2.4.1",
    "sigma": "^2.3.1",
    "web-vitals": "^1.0.1"
  },
  "scripts": {
    "start": "cross-env PORT=3001 react-scripts --openssl-legacy-provider start",
    "build": "react-scripts build",
    "test": "react-scripts test",
    "eject": "react-scripts eject"
  },
  "eslintConfig": {
    "extends": [
      "react-app",
      "react-app/jest"
    ]
  },
  "browserslist": {
    "production": [
      ">0.2%",
      "not dead",
      "not op_mini all"
    ],
    "development": [
      "last 1 chrome version",
      "last 1 firefox version",
      "last 1 safari version"
    ]
  }
}
```

### Prérequis

1. [Installer Git](https://git-scm.com/downloads)
1. [Installer NodeJS](https://nodejs.org/en/download/)
1. [Visual Studio Code](https://code.visualstudio.com/Download)
1. [Installer MongoDB](https://www.mongodb.com/try/download/community)
1. [Installer Docker](https://docs.docker.com/engine/install/)


Par la suite, il y a 2 méthodes pour installer le projet, via le DockerFile (_à suivre_) ou via la récupération de notre projet classiquement.


### Lancement classique
* Il faut tout d'abord récupérer l'ensemble de notre code via un git clone de nos 3 projets [depuis notre organisation GitHub](https://github.com/LobsterOrganization) :

**LOBSTER API**
* **HTTPS** : https://github.com/LobsterOrganization/LobsterAPI.git
* **SSH** : git@github.com:LobsterOrganization/LobsterAPI.git 

**LOBSTER API 2**
* **HTTPS** : https://github.com/LobsterOrganization/backendV2.git
* **SSH** : git@github.com:LobsterOrganization/backendV2.git

**LOBSTER FRONTEND**
* **HTTPS** : https://github.com/LobsterOrganization/lobsterfrontend.git 
* **SSH** : git@github.com:LobsterOrganization/lobsterfrontend.git 

**LOBSTER FRONTEND V2**
* **HTTPS** : https://github.com/LobsterOrganization/frontendV2.git
* **SSH** : git@github.com:LobsterOrganization/frontendV2.git

**LOBSTER TWITTER SCRAPPING**
* **HTTPS** : https://github.com/LobsterOrganization/LobsterTwitterScrapping.git 
* **SSH** : git@github.com:LobsterOrganization/LobsterTwitterScrapping.git 

__Note :__ La liste des opérations suivantes sont à répéter autant de fois qu'il y a de projets, c'est-à-dire le faire 3 fois à la racine des 3 projets.

* Ensuite, il faut installer les packages. Pour cela, il faut lancer cette commande qui installera tous les packages requis depuis le fichier *package.json* :
```
npm i
```
* Maintenant que c'est fait, il manque un dernier fichier *default.json*. Il contient toutes les informations de configuration du projet dont le mot de passe de la base MongoDB. C'est pour cela qu'il ne se trouve pas sur le git. Il faudra donc le recréer.

Il faut donc créer un répertoire *config* qui contient un seul fichier *default.json*. Il faudra ensuite copier ce code dans ce fichier en replaçant tous les *xxxx* par le nom, mot de passe et adresse du serveur MongoDB personnel :
```
{
    "Lobster-Project": {
      "server": {
        "host": "localhost",
        "port": "443"
      },
      "dbConfig": {
        "dbName": "mongodb+srv://[L'ADRESSE DU SERVEUR].mongodb.net/?retryWrites=true&w=majority"
      },
      "jwt": {
        "privateKey" : "-----BEGIN RSA PRIVATE KEY-----[LA CLE DU SERVEUR]-----END RSA RIVATE KEY-----"
    }
  }
}
```

```
{
    "Lobster-Project": {
      "server": {
        "host": "localhost",
        "port": "444"
      },
      "dbConfig": {
        "dbName": "mongodb+srv://admin:[L'ADRESSE DU SERVEUR].mongodb.net/TweeterDB"
      },
      "jwt": {
        "privateKey" : "-----BEGIN RSA PRIVATE KEY-----[LA CLE DU SERVEUR]-----END RSA RIVATE KEY-----"
    }
  }
}
```

* Voilà, vous êtes prêt à lancer le server en tapant
```
npm start
```
* Puis à se rendre sur **https://localhost:3000** (V1) ou **https://localhost:3001** (V2) depuis un navigateur.


### DockerFile

#### Lancement du projet
...

#### Quelques commandes utiles sur Docker

Par rapport aux images :
```
# Images
docker images
docker image rm [ID images]
docker image prune (supprime toutes les images non utilisées)
```

Par rapport aux conteneurs :
```
# Containers
docker ps
docker ps -a (all)
docker stop [ID Container]
docker rm [ID Container]
```
