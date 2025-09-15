# Enoncé

Une apprenante chez Ada a sur son ordinateur un dossier Ada qui contient tous ses projets. Elle les a organisé de la manière suivante 👇🏼

![Système de fichiers](images/05_systeme_fichiers.png)

Ces dossiers sont représentés dans la variable Javascript `dossierPrincipal` ci-dessous 👇🏼

```jsx
const dossierPrincipal = {
  nom: 'Ada',
  contenu: [{
      nom: 'Projets collectifs Ada',
      contenu: [{
          nom: 'Pico8',
          contenu: [{
            nom: 'mariokart.p8'
          }]
        },
        {
          nom: 'Dataviz',
          contenu: [{
              nom: 'index.html'
            },
            {
              nom: 'script.js'
            }
          ]
        }
      ]
    },
    {nom: 'CV.pdf'},
    {
      nom: 'Projets persos',
      contenu: [{
        nom: 'Portfolio',
        contenu: [{
            nom: 'index.html'
          },
          {
            nom: 'script.js'
          }
        ]
      }]
    },
  ],
}
```

Votre objectif sera d’afficher sur la console tous ces dossiers et ces fichiers de la manière suivante : 

```bash
# Exécution du script depuis le terminal
afficherDossier(dossierPrincipal)
> 🗂️ Ada
  🗂️ Projets collectifs
  🗂️ Pico 8
  📑 mariokart.p8
  🗂️ Dataviz
  📑 index.html
  📑 script.js
  📑 CV.pdf
  🗂️ Projets persos
  🗂️ Portfolio
  📑 index.html
  📑 script.js
```

  <details>
    <summary>Affichage</summary>
    
  💡 Pour visualiser le JSON contenu dans la variable `dossierPrincipal`, tu peux l’afficher sur ta console en utilisant l’instruction `console.log(dossierPrincipal)` 
  
  </details>


ℹ️ Nous avons découpé le problème en étapes mais sens toi libre d’inverser l’ordre si tu ne te sens pas à l’aise avec l’ordre suggéré. 

> 🚨 Utilise bien la variable `dossierPrincipal` déclarée ci-dessus ! 
> Pas besoin de lire un de tes propres dossiers pour l’instant.

## Etape 1

Crée une fonction `afficherDossier`  qui va afficher le nom du dossier principal  en utilisant la variable `dossierPrincipal` 

**Résultat attendu**

```bash
afficherDossier(dossierPrincipal)
> 🗂️ Ada 
```

## Etape 2

Tu vas créer deux fonctions : 

- `afficherDossierIteratif` (l’utilisation des instructions for… est autorisée)
- `afficherDossierRecursif` (il faut que cette fonction s’appelle elle-même!)

Ces deux fonctions afficheront les dossiers et le fichier que contient le dossier Ada. 

**Résultat attendu**

```bash
afficherDossierIteratif(dossierPrincipal)
> 🗂️ Ada
  🗂️ Projets collectifs 
  📑 CV.pdf
  🗂️ Projets persos
  
afficherDossierRecursif(dossierPrincipal)
> 🗂️ Ada
  🗂️ Projets collectifs 
  📑 CV.pdf
  🗂️ Projets persos
```

<details>
  <summary> Indice 🤫 </summary>
    Dans l’objet, un objet de type “dossier” a une propriété “contenu” alors qu’un fichier n’en a pas …   
</details>    
    

### Etape 3

Complète la fonction pour afficher les dossiers de troisième niveau (ex: les dossiers “Pico 8” et “Dataviz” sont des dossiers de troisième niveau car ils se trouvent dans un dossier “Projets collectifs, lui-même dans le dossier “Ada”).

**Résultat attendu**

```bash
afficherDossierIteratif(dossierPrincipal)
> 🗂️ Ada
  🗂️ Projets collectifs
  🗂️ Pico 8
  📑 mariokart.p8
  🗂️ Dataviz
  📑 index.html
  📑 script.js
  📑 CV.pdf
  🗂️ Projets persos
  🗂️ Portfolio
  📑 index.html
  📑 script.js
  
afficherDossierRecursif(dossierPincipal)
> 🗂️ Ada
  🗂️ Projets collectifs
  🗂️ Pico 8
  📑 mariokart.p8
  🗂️ Dataviz
  📑 index.html
  📑 script.js
  📑 CV.pdf
  🗂️ Projets persos
  🗂️ Portfolio
  📑 index.html
  📑 script.js
```

## Etape 4

Compare tes deux fonctions `afficherDossierIteratif` et `afficherDossierRecursif`. 

Qu’en penses-tu ? Quels sont les avantages et inconvénients de chaque manière d’écrire ?

## 🛣️ Pour aller plus loin

> Si tu as encore du temps et de l’énergie à consacrer à cet exercice, voici quelques idées de fonctionnalités à ajouter.

- Teste ta fonction mais cette fois-ci avec la variable suivante qui a *un peu* plus de contenu. Constates-tu une différence ?

<details>
  <summary>Variable Javascript au contenu volumineux à récupérer</summary>

  
  ```jsx
            const dossierPrincipal = {
              nom: 'Ada',
              contenu: [{
                  nom: 'Projets collectifs Ada',
                  contenu: [{
                      nom: 'Pico8',
                      contenu: [{
                        nom: 'mariokart.p8'
                      }]
                    },
                    {
                      nom: 'Dataviz',
                      contenu: [{
                          nom: 'index.html'
                        },
                        {
                          nom: 'script.js'
                        }
                      ]
                    }
                  ]
                },
                {
                  nom: 'CV.pdf'
                },
                {
                  "nom": "sit.txt"
                },
                {
                  "nom": "proident.pdf"
                },
                {
                  "nom": "est.pdf"
                },
                {
                  "nom": "esse.pdf"
                },
                {
                  "nom": "ullamco.txt"
                },
                {
                  "nom": "dolor.txt"
                },
                {
                  "nom": "irure.pdf"
                },
                {
                  "nom": "cupidatat.pdf"
                },
                {
                  "nom": "officia.pdf"
                },
                {
                  "nom": "consectetur.pdf"
                },
                {
                  "nom": "deserunt.pdf"
                },
                {
                  "nom": "laborum.pdf"
                },
                {
                  "nom": "dolore.txt"
                },
                {
                  "nom": "non.txt"
                },
                {
                  "nom": "excepteur.pdf"
                },
                {
                  "nom": "tempor.pdf"
                },
                {
                  "nom": "amet.txt"
                },
                {
                  "nom": "nulla.txt"
                },
                {
                  "nom": "nostrud.pdf"
                },
                {
                  "nom": "non.pdf"
                },
                {
                  "nom": "enim.txt"
                },
                {
                  "nom": "aliquip.txt"
                },
                {
                  "nom": "officia.pdf"
                },
                {
                  "nom": "mollit.pdf"
                },
                {
                  "nom": "Lorem.pdf"
                },
                {
                  "nom": "aliquip.txt"
                },
                {
                  "nom": "ipsum.pdf"
                },
                {
                  "nom": "culpa.pdf"
                },
                {
                  "nom": "dolore.pdf"
                },
                {
                  "nom": "reprehenderit.pdf"
                },
                {
                  "nom": "ad.txt"
                },
                {
                  "nom": "reprehenderit.txt"
                },
                {
                  "nom": "enim.pdf"
                },
                {
                  "nom": "incididunt.txt"
                },
                {
                  "nom": "mollit.txt"
                },
                {
                  "nom": "nulla.txt"
                },
                {
                  "nom": "et.txt"
                },
                {
                  "nom": "occaecat.txt"
                },
                {
                  "nom": "deserunt.txt"
                },
                {
                  "nom": "Lorem.txt"
                },
                {
                  "nom": "ex.txt"
                },
                {
                  "nom": "magna.txt"
                },
                {
                  "nom": "proident.txt"
                },
                {
                  "nom": "consectetur.txt"
                },
                {
                  "nom": "ad.txt"
                },
                {
                  "nom": "officia.txt"
                },
                {
                  "nom": "qui.pdf"
                },
                {
                  "nom": "duis.pdf"
                },
                {
                  "nom": "esse.txt"
                },
                {
                  "nom": "in.txt"
                },
                {
                  "nom": "nostrud.pdf"
                },
                {
                  "nom": "ad.txt"
                },
                {
                  "nom": "aute.txt"
                },
                {
                  "nom": "ullamco.txt"
                },
                {
                  "nom": "est.pdf"
                },
                {
                  "nom": "in.txt"
                },
                {
                  "nom": "non.pdf"
                },
                {
                  "nom": "elit.pdf"
                },
                {
                  "nom": "duis.pdf"
                },
                {
                  "nom": "ea.pdf"
                },
                {
                  "nom": "non.txt"
                },
                {
                  "nom": "eiusmod.txt"
                },
                {
                  "nom": "ad.pdf"
                },
                {
                  "nom": "Lorem.pdf"
                },
                {
                  "nom": "nisi.pdf"
                },
                {
                  "nom": "culpa.txt"
                },
                {
                  "nom": "tempor.txt"
                },
                {
                  "nom": "consequat.pdf"
                },
                {
                  "nom": "in.txt"
                },
                {
                  "nom": "irure.txt"
                },
                {
                  "nom": "aliqua.txt"
                },
                {
                  "nom": "reprehenderit.txt"
                },
                {
                  "nom": "laboris.pdf"
                },
                {
                  "nom": "exercitation.txt"
                },
                {
                  "nom": "amet.pdf"
                },
                {
                  "nom": "anim.pdf"
                },
                {
                  "nom": "ullamco.txt"
                },
                {
                  "nom": "voluptate.txt"
                },
                {
                  "nom": "deserunt.txt"
                },
                {
                  "nom": "do.txt"
                },
                {
                  "nom": "ex.txt"
                },
                {
                  "nom": "tempor.txt"
                },
                {
                  "nom": "nostrud.pdf"
                },
                {
                  "nom": "officia.txt"
                },
                {
                  "nom": "anim.pdf"
                },
                {
                  "nom": "anim.txt"
                },
                {
                  "nom": "dolore.txt"
                },
                {
                  "nom": "veniam.pdf"
                },
                {
                  "nom": "amet.pdf"
                },
                {
                  "nom": "commodo.pdf"
                },
                {
                  "nom": "officia.pdf"
                },
                {
                  "nom": "nisi.pdf"
                },
                {
                  "nom": "sit.txt"
                },
                {
                  "nom": "excepteur.txt"
                },
                {
                  "nom": "nulla.pdf"
                },
                {
                  "nom": "reprehenderit.pdf"
                },
                {
                  "nom": "enim.txt"
                },
                {
                  "nom": "veniam.pdf"
                },
                {
                  "nom": "commodo.txt"
                },
                {
                  "nom": "ad.pdf"
                },
                {
                  "nom": "ex.pdf"
                },
                {
                  "nom": "velit.txt"
                },
                {
                  "nom": "officia.pdf"
                },
                {
                  "nom": "eiusmod.pdf"
                },
                {
                  "nom": "dolore.pdf"
                },
                {
                  "nom": "occaecat.txt"
                },
                {
                  "nom": "exercitation.pdf"
                },
                {
                  "nom": "labore.pdf"
                },
                {
                  "nom": "adipisicing.pdf"
                },
                {
                  "nom": "dolor.txt"
                },
                {
                  "nom": "dolor.pdf"
                },
                {
                  "nom": "dolore.txt"
                },
                {
                  "nom": "esse.txt"
                },
                {
                  "nom": "est.txt"
                },
                {
                  "nom": "ex.pdf"
                },
                {
                  "nom": "adipisicing.txt"
                },
                {
                  "nom": "eu.txt"
                },
                {
                  "nom": "adipisicing.txt"
                },
                {
                  "nom": "excepteur.txt"
                },
                {
                  "nom": "sit.txt"
                },
                {
                  "nom": "magna.pdf"
                },
                {
                  "nom": "dolor.txt"
                },
                {
                  "nom": "aliquip.txt"
                },
                {
                  "nom": "officia.txt"
                },
                {
                  "nom": "est.txt"
                },
                {
                  "nom": "enim.pdf"
                },
                {
                  "nom": "commodo.txt"
                },
                {
                  "nom": "irure.txt"
                },
                {
                  "nom": "ea.txt"
                },
                {
                  "nom": "dolor.pdf"
                },
                {
                  "nom": "cupidatat.pdf"
                },
                {
                  "nom": "aliqua.pdf"
                },
                {
                  "nom": "non.pdf"
                },
                {
                  "nom": "proident.pdf"
                },
                {
                  "nom": "incididunt.txt"
                },
                {
                  "nom": "adipisicing.txt"
                },
                {
                  "nom": "nulla.pdf"
                },
                {
                  "nom": "mollit.txt"
                },
                {
                  "nom": "nisi.txt"
                },
                {
                  "nom": "veniam.pdf"
                },
                {
                  "nom": "consectetur.txt"
                },
                {
                  "nom": "deserunt.txt"
                },
                {
                  "nom": "est.pdf"
                },
                {
                  "nom": "ipsum.txt"
                },
                {
                  "nom": "Lorem.pdf"
                },
                {
                  "nom": "cupidatat.txt"
                },
                {
                  "nom": "aliquip.txt"
                },
                {
                  "nom": "in.pdf"
                },
                {
                  "nom": "aute.txt"
                },
                {
                  "nom": "ullamco.txt"
                },
                {
                  "nom": "irure.txt"
                },
                {
                  "nom": "veniam.txt"
                },
                {
                  "nom": "tempor.pdf"
                },
                {
                  "nom": "commodo.txt"
                },
                {
                  "nom": "aliquip.txt"
                },
                {
                  "nom": "consectetur.pdf"
                },
                {
                  "nom": "nostrud.pdf"
                },
                {
                  "nom": "tempor.pdf"
                },
                {
                  "nom": "commodo.pdf"
                },
                {
                  "nom": "anim.txt"
                },
                {
                  "nom": "eu.pdf"
                },
                {
                  "nom": "excepteur",
                  "contenu": [{
                      "nom": "non.txt"
                    },
                    {
                      "nom": "cillum.txt"
                    },
                    {
                      "nom": "et.txt"
                    },
                    {
                      "nom": "proident.pdf"
                    },
                    {
                      "nom": "fugiat.pdf"
                    },
                    {
                      "nom": "laboris.txt"
                    },
                    {
                      "nom": "magna.txt"
                    }
                  ]
                },
                {
                  "nom": "dolor",
                  "contenu": [{
                      "nom": "adipisicing.pdf"
                    },
                    {
                      "nom": "commodo.txt"
                    },
                    {
                      "nom": "aute.txt"
                    },
                    {
                      "nom": "ex.pdf"
                    },
                    {
                      "nom": "elit.pdf"
                    },
                    {
                      "nom": "deserunt.pdf"
                    },
                    {
                      "nom": "esse.pdf"
                    }
                  ]
                },
                {
                  "nom": "et",
                  "contenu": [{
                      "nom": "eu.pdf"
                    },
                    {
                      "nom": "ad.pdf"
                    },
                    {
                      "nom": "cillum.pdf"
                    },
                    {
                      "nom": "minim.pdf"
                    },
                    {
                      "nom": "ipsum.pdf"
                    },
                    {
                      "nom": "et.txt"
                    },
                    {
                      "nom": "ipsum.txt"
                    }
                  ]
                },
                {
                  "nom": "dolore",
                  "contenu": [{
                      "nom": "reprehenderit.pdf"
                    },
                    {
                      "nom": "cupidatat.txt"
                    },
                    {
                      "nom": "enim.txt"
                    },
                    {
                      "nom": "labore.txt"
                    },
                    {
                      "nom": "minim.txt"
                    },
                    {
                      "nom": "voluptate.txt"
                    },
                    {
                      "nom": "minim.txt"
                    }
                  ]
                },
                {
                  "nom": "laborum",
                  "contenu": [{
                      "nom": "voluptate.pdf"
                    },
                    {
                      "nom": "ea.txt"
                    },
                    {
                      "nom": "laborum.txt"
                    },
                    {
                      "nom": "pariatur.txt"
                    },
                    {
                      "nom": "aliquip.pdf"
                    },
                    {
                      "nom": "commodo.txt"
                    },
                    {
                      "nom": "eiusmod.pdf"
                    }
                  ]
                },
                {
                  "nom": "duis",
                  "contenu": [{
                      "nom": "laborum.pdf"
                    },
                    {
                      "nom": "anim.txt"
                    },
                    {
                      "nom": "laboris.pdf"
                    },
                    {
                      "nom": "ut.pdf"
                    },
                    {
                      "nom": "incididunt.txt"
                    },
                    {
                      "nom": "pariatur.pdf"
                    },
                    {
                      "nom": "est.pdf"
                    }
                  ]
                },
                {
                  "nom": "do",
                  "contenu": [{
                      "nom": "aute.txt"
                    },
                    {
                      "nom": "eiusmod.pdf"
                    },
                    {
                      "nom": "occaecat.txt"
                    },
                    {
                      "nom": "enim.pdf"
                    },
                    {
                      "nom": "aute.pdf"
                    },
                    {
                      "nom": "Lorem.pdf"
                    },
                    {
                      "nom": "aliquip.txt"
                    }
                  ]
                },
                {
                  "nom": "qui",
                  "contenu": [{
                      "nom": "fugiat.txt"
                    },
                    {
                      "nom": "cupidatat.txt"
                    },
                    {
                      "nom": "fugiat.pdf"
                    },
                    {
                      "nom": "quis.pdf"
                    },
                    {
                      "nom": "non.txt"
                    },
                    {
                      "nom": "anim.pdf"
                    },
                    {
                      "nom": "sit.txt"
                    }
                  ]
                },
                {
                  "nom": "consectetur",
                  "contenu": [{
                      "nom": "deserunt.txt"
                    },
                    {
                      "nom": "adipisicing.txt"
                    },
                    {
                      "nom": "eiusmod.pdf"
                    },
                    {
                      "nom": "non.txt"
                    },
                    {
                      "nom": "ut.txt"
                    },
                    {
                      "nom": "do.txt"
                    },
                    {
                      "nom": "excepteur.txt"
                    }
                  ]
                },
                {
                  "nom": "adipisicing",
                  "contenu": [{
                      "nom": "do.txt"
                    },
                    {
                      "nom": "elit.pdf"
                    },
                    {
                      "nom": "magna.txt"
                    },
                    {
                      "nom": "excepteur.pdf"
                    },
                    {
                      "nom": "proident.txt"
                    },
                    {
                      "nom": "ut.pdf"
                    },
                    {
                      "nom": "consequat.pdf"
                    }
                  ]
                },
                {
                  "nom": "velit",
                  "contenu": [{
                      "nom": "tempor.txt"
                    },
                    {
                      "nom": "cupidatat.pdf"
                    },
                    {
                      "nom": "ea.txt"
                    },
                    {
                      "nom": "aute.txt"
                    },
                    {
                      "nom": "eiusmod.txt"
                    },
                    {
                      "nom": "elit.txt"
                    },
                    {
                      "nom": "quis.txt"
                    }
                  ]
                },
                {
                  "nom": "enim",
                  "contenu": [{
                      "nom": "id.txt"
                    },
                    {
                      "nom": "elit.pdf"
                    },
                    {
                      "nom": "velit.txt"
                    },
                    {
                      "nom": "aliqua.txt"
                    },
                    {
                      "nom": "pariatur.pdf"
                    },
                    {
                      "nom": "incididunt.txt"
                    },
                    {
                      "nom": "non.txt"
                    }
                  ]
                },
                {
                  "nom": "magna",
                  "contenu": [{
                      "nom": "aute.txt"
                    },
                    {
                      "nom": "velit.pdf"
                    },
                    {
                      "nom": "veniam.txt"
                    },
                    {
                      "nom": "non.pdf"
                    },
                    {
                      "nom": "non.txt"
                    },
                    {
                      "nom": "non.txt"
                    },
                    {
                      "nom": "aliquip.pdf"
                    }
                  ]
                },
                {
                  "nom": "minim",
                  "contenu": [{
                      "nom": "adipisicing.pdf"
                    },
                    {
                      "nom": "nostrud.txt"
                    },
                    {
                      "nom": "fugiat.txt"
                    },
                    {
                      "nom": "exercitation.pdf"
                    },
                    {
                      "nom": "sint.txt"
                    },
                    {
                      "nom": "pariatur.txt"
                    },
                    {
                      "nom": "pariatur.pdf"
                    }
                  ]
                },
                {
                  "nom": "incididunt",
                  "contenu": [{
                      "nom": "fugiat.pdf"
                    },
                    {
                      "nom": "adipisicing.pdf"
                    },
                    {
                      "nom": "ut.pdf"
                    },
                    {
                      "nom": "labore.pdf"
                    },
                    {
                      "nom": "irure.pdf"
                    },
                    {
                      "nom": "sit.pdf"
                    },
                    {
                      "nom": "dolore.pdf"
                    }
                  ]
                },
                {
                  "nom": "irure",
                  "contenu": [{
                      "nom": "sit.pdf"
                    },
                    {
                      "nom": "qui.pdf"
                    },
                    {
                      "nom": "id.pdf"
                    },
                    {
                      "nom": "ullamco.txt"
                    },
                    {
                      "nom": "ea.pdf"
                    },
                    {
                      "nom": "elit.pdf"
                    },
                    {
                      "nom": "quis.pdf"
                    }
                  ]
                },
                {
                  "nom": "in",
                  "contenu": [{
                      "nom": "magna.txt"
                    },
                    {
                      "nom": "veniam.pdf"
                    },
                    {
                      "nom": "tempor.txt"
                    },
                    {
                      "nom": "labore.pdf"
                    },
                    {
                      "nom": "consequat.txt"
                    },
                    {
                      "nom": "veniam.pdf"
                    },
                    {
                      "nom": "irure.txt"
                    }
                  ]
                },
                {
                  "nom": "officia",
                  "contenu": [{
                      "nom": "nostrud.pdf"
                    },
                    {
                      "nom": "irure.pdf"
                    },
                    {
                      "nom": "duis.txt"
                    },
                    {
                      "nom": "id.txt"
                    },
                    {
                      "nom": "velit.pdf"
                    },
                    {
                      "nom": "incididunt.txt"
                    },
                    {
                      "nom": "ex.pdf"
                    }
                  ]
                },
                {
                  "nom": "adipisicing",
                  "contenu": [{
                      "nom": "ullamco.txt"
                    },
                    {
                      "nom": "dolor.txt"
                    },
                    {
                      "nom": "aute.pdf"
                    },
                    {
                      "nom": "ut.pdf"
                    },
                    {
                      "nom": "ipsum.pdf"
                    },
                    {
                      "nom": "non.pdf"
                    },
                    {
                      "nom": "Lorem.txt"
                    }
                  ]
                },
                {
                  "nom": "qui",
                  "contenu": [{
                      "nom": "aute.pdf"
                    },
                    {
                      "nom": "eu.pdf"
                    },
                    {
                      "nom": "nostrud.pdf"
                    },
                    {
                      "nom": "qui.txt"
                    },
                    {
                      "nom": "velit.pdf"
                    },
                    {
                      "nom": "nulla.txt"
                    },
                    {
                      "nom": "nisi.txt"
                    }
                  ]
                },
                {
                  "nom": "cillum",
                  "contenu": [{
                      "nom": "dolore.pdf"
                    },
                    {
                      "nom": "cupidatat.txt"
                    },
                    {
                      "nom": "elit.txt"
                    },
                    {
                      "nom": "sint.pdf"
                    },
                    {
                      "nom": "ipsum.txt"
                    },
                    {
                      "nom": "eiusmod.txt"
                    },
                    {
                      "nom": "ad.txt"
                    }
                  ]
                },
                {
                  "nom": "duis",
                  "contenu": [{
                      "nom": "eu.txt"
                    },
                    {
                      "nom": "sit.txt"
                    },
                    {
                      "nom": "duis.txt"
                    },
                    {
                      "nom": "fugiat.txt"
                    },
                    {
                      "nom": "nulla.txt"
                    },
                    {
                      "nom": "cillum.pdf"
                    },
                    {
                      "nom": "cillum.txt"
                    }
                  ]
                },
                {
                  "nom": "in",
                  "contenu": [{
                      "nom": "aliqua.txt"
                    },
                    {
                      "nom": "tempor.pdf"
                    },
                    {
                      "nom": "nulla.txt"
                    },
                    {
                      "nom": "anim.pdf"
                    },
                    {
                      "nom": "ut.txt"
                    },
                    {
                      "nom": "tempor.pdf"
                    },
                    {
                      "nom": "nulla.txt"
                    }
                  ]
                },
                {
                  "nom": "laborum",
                  "contenu": [{
                      "nom": "officia.pdf"
                    },
                    {
                      "nom": "sunt.txt"
                    },
                    {
                      "nom": "irure.pdf"
                    },
                    {
                      "nom": "culpa.txt"
                    },
                    {
                      "nom": "proident.pdf"
                    },
                    {
                      "nom": "mollit.pdf"
                    },
                    {
                      "nom": "nulla.pdf"
                    }
                  ]
                },
                {
                  "nom": "laboris",
                  "contenu": [{
                      "nom": "ut.txt"
                    },
                    {
                      "nom": "consequat.pdf"
                    },
                    {
                      "nom": "incididunt.pdf"
                    },
                    {
                      "nom": "irure.pdf"
                    },
                    {
                      "nom": "nisi.txt"
                    },
                    {
                      "nom": "dolore.pdf"
                    },
                    {
                      "nom": "reprehenderit.txt"
                    }
                  ]
                },
                {
                  "nom": "elit",
                  "contenu": [{
                      "nom": "laborum.pdf"
                    },
                    {
                      "nom": "ut.txt"
                    },
                    {
                      "nom": "non.txt"
                    },
                    {
                      "nom": "ea.pdf"
                    },
                    {
                      "nom": "incididunt.pdf"
                    },
                    {
                      "nom": "excepteur.txt"
                    },
                    {
                      "nom": "irure.pdf"
                    }
                  ]
                },
                {
                  "nom": "Lorem",
                  "contenu": [{
                      "nom": "cupidatat.txt"
                    },
                    {
                      "nom": "nisi.pdf"
                    },
                    {
                      "nom": "dolor.pdf"
                    },
                    {
                      "nom": "ullamco.pdf"
                    },
                    {
                      "nom": "occaecat.pdf"
                    },
                    {
                      "nom": "dolor.txt"
                    },
                    {
                      "nom": "et.pdf"
                    }
                  ]
                },
                {
                  "nom": "sit",
                  "contenu": [{
                      "nom": "ea.pdf"
                    },
                    {
                      "nom": "quis.txt"
                    },
                    {
                      "nom": "elit.txt"
                    },
                    {
                      "nom": "Lorem.txt"
                    },
                    {
                      "nom": "ad.pdf"
                    },
                    {
                      "nom": "ea.pdf"
                    },
                    {
                      "nom": "nostrud.pdf"
                    }
                  ]
                },
                {
                  "nom": "consectetur",
                  "contenu": [{
                      "nom": "quis.pdf"
                    },
                    {
                      "nom": "cupidatat.txt"
                    },
                    {
                      "nom": "amet.pdf"
                    },
                    {
                      "nom": "quis.txt"
                    },
                    {
                      "nom": "nulla.txt"
                    },
                    {
                      "nom": "deserunt.txt"
                    },
                    {
                      "nom": "mollit.txt"
                    }
                  ]
                },
                {
                  "nom": "dolor",
                  "contenu": [{
                      "nom": "deserunt.pdf"
                    },
                    {
                      "nom": "incididunt.txt"
                    },
                    {
                      "nom": "anim.pdf"
                    },
                    {
                      "nom": "amet.txt"
                    },
                    {
                      "nom": "tempor.pdf"
                    },
                    {
                      "nom": "elit.txt"
                    },
                    {
                      "nom": "veniam.txt"
                    }
                  ]
                },
                {
                  "nom": "amet",
                  "contenu": [{
                      "nom": "ea.txt"
                    },
                    {
                      "nom": "aliqua.txt"
                    },
                    {
                      "nom": "dolor.txt"
                    },
                    {
                      "nom": "esse.pdf"
                    },
                    {
                      "nom": "sint.txt"
                    },
                    {
                      "nom": "proident.pdf"
                    },
                    {
                      "nom": "exercitation.pdf"
                    }
                  ]
                },
                {
                  "nom": "aliquip",
                  "contenu": [{
                      "nom": "est.txt"
                    },
                    {
                      "nom": "eiusmod.txt"
                    },
                    {
                      "nom": "duis.txt"
                    },
                    {
                      "nom": "eiusmod.pdf"
                    },
                    {
                      "nom": "et.pdf"
                    },
                    {
                      "nom": "amet.pdf"
                    },
                    {
                      "nom": "ad.txt"
                    }
                  ]
                },
                {
                  "nom": "in",
                  "contenu": [{
                      "nom": "culpa.txt"
                    },
                    {
                      "nom": "occaecat.txt"
                    },
                    {
                      "nom": "fugiat.pdf"
                    },
                    {
                      "nom": "consectetur.pdf"
                    },
                    {
                      "nom": "consequat.txt"
                    },
                    {
                      "nom": "adipisicing.txt"
                    },
                    {
                      "nom": "fugiat.txt"
                    }
                  ]
                },
                {
                  "nom": "veniam",
                  "contenu": [{
                      "nom": "cupidatat.txt"
                    },
                    {
                      "nom": "amet.pdf"
                    },
                    {
                      "nom": "reprehenderit.pdf"
                    },
                    {
                      "nom": "deserunt.txt"
                    },
                    {
                      "nom": "est.txt"
                    },
                    {
                      "nom": "adipisicing.txt"
                    },
                    {
                      "nom": "et.txt"
                    }
                  ]
                },
                {
                  "nom": "tempor",
                  "contenu": [{
                      "nom": "pariatur.txt"
                    },
                    {
                      "nom": "deserunt.txt"
                    },
                    {
                      "nom": "aute.txt"
                    },
                    {
                      "nom": "et.txt"
                    },
                    {
                      "nom": "consequat.pdf"
                    },
                    {
                      "nom": "reprehenderit.txt"
                    },
                    {
                      "nom": "voluptate.pdf"
                    }
                  ]
                },
                {
                  "nom": "consectetur",
                  "contenu": [{
                      "nom": "veniam.txt"
                    },
                    {
                      "nom": "anim.pdf"
                    },
                    {
                      "nom": "aliquip.txt"
                    },
                    {
                      "nom": "nisi.txt"
                    },
                    {
                      "nom": "eu.pdf"
                    },
                    {
                      "nom": "ea.txt"
                    },
                    {
                      "nom": "occaecat.pdf"
                    }
                  ]
                },
                {
                  "nom": "ea",
                  "contenu": [{
                      "nom": "est.pdf"
                    },
                    {
                      "nom": "occaecat.pdf"
                    },
                    {
                      "nom": "nisi.txt"
                    },
                    {
                      "nom": "laboris.txt"
                    },
                    {
                      "nom": "do.txt"
                    },
                    {
                      "nom": "fugiat.txt"
                    },
                    {
                      "nom": "pariatur.pdf"
                    }
                  ]
                },
                {
                  "nom": "ex",
                  "contenu": [{
                      "nom": "reprehenderit.txt"
                    },
                    {
                      "nom": "velit.pdf"
                    },
                    {
                      "nom": "ex.pdf"
                    },
                    {
                      "nom": "eiusmod.pdf"
                    },
                    {
                      "nom": "magna.txt"
                    },
                    {
                      "nom": "est.pdf"
                    },
                    {
                      "nom": "esse.txt"
                    }
                  ]
                },
                {
                  "nom": "exercitation",
                  "contenu": [{
                      "nom": "amet.txt"
                    },
                    {
                      "nom": "tempor.pdf"
                    },
                    {
                      "nom": "proident.txt"
                    },
                    {
                      "nom": "quis.txt"
                    },
                    {
                      "nom": "occaecat.pdf"
                    },
                    {
                      "nom": "eiusmod.txt"
                    },
                    {
                      "nom": "irure.pdf"
                    }
                  ]
                },
                {
                  "nom": "occaecat",
                  "contenu": [{
                      "nom": "Lorem.pdf"
                    },
                    {
                      "nom": "labore.txt"
                    },
                    {
                      "nom": "dolore.pdf"
                    },
                    {
                      "nom": "laborum.pdf"
                    },
                    {
                      "nom": "ex.pdf"
                    },
                    {
                      "nom": "dolor.txt"
                    },
                    {
                      "nom": "veniam.pdf"
                    }
                  ]
                },
                {
                  "nom": "eiusmod",
                  "contenu": [{
                      "nom": "veniam.pdf"
                    },
                    {
                      "nom": "enim.txt"
                    },
                    {
                      "nom": "eiusmod.pdf"
                    },
                    {
                      "nom": "incididunt.pdf"
                    },
                    {
                      "nom": "excepteur.pdf"
                    },
                    {
                      "nom": "occaecat.pdf"
                    },
                    {
                      "nom": "commodo.pdf"
                    }
                  ]
                },
                {
                  "nom": "nisi",
                  "contenu": [{
                      "nom": "sunt.pdf"
                    },
                    {
                      "nom": "consectetur.pdf"
                    },
                    {
                      "nom": "sit.pdf"
                    },
                    {
                      "nom": "mollit.txt"
                    },
                    {
                      "nom": "elit.txt"
                    },
                    {
                      "nom": "quis.txt"
                    },
                    {
                      "nom": "qui.pdf"
                    }
                  ]
                },
                {
                  "nom": "veniam",
                  "contenu": [{
                      "nom": "mollit.pdf"
                    },
                    {
                      "nom": "adipisicing.txt"
                    },
                    {
                      "nom": "aliqua.txt"
                    },
                    {
                      "nom": "ex.txt"
                    },
                    {
                      "nom": "laboris.pdf"
                    },
                    {
                      "nom": "excepteur.pdf"
                    },
                    {
                      "nom": "sit.pdf"
                    }
                  ]
                },
                {
                  "nom": "id",
                  "contenu": [{
                      "nom": "eu.txt"
                    },
                    {
                      "nom": "do.txt"
                    },
                    {
                      "nom": "cupidatat.txt"
                    },
                    {
                      "nom": "voluptate.pdf"
                    },
                    {
                      "nom": "irure.txt"
                    },
                    {
                      "nom": "voluptate.txt"
                    },
                    {
                      "nom": "ea.pdf"
                    }
                  ]
                },
                {
                  "nom": "cillum",
                  "contenu": [{
                      "nom": "consectetur.txt"
                    },
                    {
                      "nom": "laboris.pdf"
                    },
                    {
                      "nom": "esse.pdf"
                    },
                    {
                      "nom": "adipisicing.pdf"
                    },
                    {
                      "nom": "commodo.pdf"
                    },
                    {
                      "nom": "et.txt"
                    },
                    {
                      "nom": "ad.txt"
                    }
                  ]
                },
                {
                  "nom": "aute",
                  "contenu": [{
                      "nom": "voluptate.txt"
                    },
                    {
                      "nom": "aliqua.pdf"
                    },
                    {
                      "nom": "ullamco.pdf"
                    },
                    {
                      "nom": "exercitation.txt"
                    },
                    {
                      "nom": "ullamco.pdf"
                    },
                    {
                      "nom": "consequat.txt"
                    },
                    {
                      "nom": "ipsum.pdf"
                    }
                  ]
                },
                {
                  "nom": "mollit",
                  "contenu": [{
                      "nom": "ea.pdf"
                    },
                    {
                      "nom": "ipsum.pdf"
                    },
                    {
                      "nom": "irure.txt"
                    },
                    {
                      "nom": "occaecat.txt"
                    },
                    {
                      "nom": "pariatur.txt"
                    },
                    {
                      "nom": "laboris.txt"
                    },
                    {
                      "nom": "reprehenderit.txt"
                    }
                  ]
                },
                {
                  "nom": "Lorem",
                  "contenu": [{
                      "nom": "ipsum.txt"
                    },
                    {
                      "nom": "quis.pdf"
                    },
                    {
                      "nom": "pariatur.pdf"
                    },
                    {
                      "nom": "mollit.pdf"
                    },
                    {
                      "nom": "ea.txt"
                    },
                    {
                      "nom": "sint.txt"
                    },
                    {
                      "nom": "incididunt.pdf"
                    }
                  ]
                },
                {
                  "nom": "tempor",
                  "contenu": [{
                      "nom": "culpa.txt"
                    },
                    {
                      "nom": "ea.pdf"
                    },
                    {
                      "nom": "cillum.pdf"
                    },
                    {
                      "nom": "anim.txt"
                    },
                    {
                      "nom": "commodo.pdf"
                    },
                    {
                      "nom": "deserunt.txt"
                    },
                    {
                      "nom": "reprehenderit.txt"
                    }
                  ]
                },
                {
                  "nom": "proident",
                  "contenu": [{
                      "nom": "id.txt"
                    },
                    {
                      "nom": "in.txt"
                    },
                    {
                      "nom": "ad.pdf"
                    },
                    {
                      "nom": "cupidatat.txt"
                    },
                    {
                      "nom": "proident.txt"
                    },
                    {
                      "nom": "pariatur.txt"
                    },
                    {
                      "nom": "voluptate.txt"
                    }
                  ]
                },
                {
                  nom: 'Projets persos',
                  contenu: [{
                    nom: 'Portfolio',
                    contenu: [{
                        nom: 'index.html'
                      },
                      {
                        nom: 'script.js'
                      }
                    ]
                  }]
                },
              ]
            };
  ```

</details>    


- Lis directement **ton** système de fichier plutôt que de passer par la variable `dossierPrincipal` fournie en début d’exercice !
<details>
  <summary>🤫 Indice en Node.js</summary>
    
  [Lire des répertoires en Node.js](https://nodejs.org/en/learn/manipulating-files/working-with-folders-in-nodejs)

</details>    

- Tu peux l’afficher dans une page web et avoir une vraie structure qui se déplie quand on clique sur un dossier (comme sur [ce codepen](https://codepen.io/leiluspocus/pen/rNbEYmB))

<br></br>
**Tu as aimé faire cet exercice ou tu as des retours à nous faire ? [Clique ici !](https://airtable.com/appXbfdqY0iZhnZgd/shrbWiQDMsH63nsj4)**
