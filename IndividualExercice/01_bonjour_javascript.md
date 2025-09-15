## Introduction 📝

Bienvenue dans ton premier exercice individuel : Bonjour JavaScript 👋 !

Les exercices sont souvent découpés en plusieurs étapes. Dans cet exercice, ne saute pas les étapes car elles sont progressives au niveau de la difficulté. 
Par contre, si l’étape est indiquée comme optionnelle, tu peux la sauter ! 🐑

## Objectifs 🎯

L’objectif de cet exercice est de :

- t’exercer dans la manipulation de variable
- créer et manipuler des fonctions
- comprendre les paramètres de fonction
- (optionnel) savoir mettre en place une condition
- (bonus) créer une page HTML relié à un script JavaScript
- (bonus) apprendre à manipuler les valeurs de retour d’une fonction

> [!NOTE]
> Tous ces termes sont nouveaux et donc pas toujours compréhensibles quand on découvre le développement. 🤔
> Pour t’aider à repérer les termes qui te seront utiles dans ton apprentissage et plus tard dans ta vie de dev, nous les avons mis en *italique* dans cet exercice.
> La pratique va te permettre de donner du sens à ces termes mais si tu as le moindre doute sur leur compréhension, profite-en pour en parler avec d’autres apprenant·es ou l’encadrant·e qui sont là pour t’aider. 🙋
> N’oublie pas que lorsqu’on pose une question souvent on aide l’autre en retour car iel pourra te donner des explications - ce qui lui permet de s’assurer qu’iel a bien compris - ou alors se rendre compte qu’iel n’a pas vraiment compris non plus et vous chercherez ensemble comment y voir plus clair.

## Étape 1 : organisation de dossiers
<details>
  <summary>Clique ici</summary>

  1. Crée un dossier `exercices_individuels/` dans le dossier ADA que tu as déjà dû créer lors de la rentrée. <br />
  Si ce n’est pas le cas, n’hésite pas à solliciter un·e encadrante pour te guider ou un·e camarade de promotion 😊
  2. Dans ce dossier `exercices_individuels/`, crée un dossier `bonjour_javascript/`
  3. Dans ce dossier `bonjour_javascript/`, crée un fichier **`script.js`**

</details>

## Étape 2 : premier code
<details>
  <summary>Clique ici</summary>

  Ouvrir le fichier `script.js` avec ton éditeur de code (VS Code) et commençons à coder !
  1. Crée une variable `message` dans lequel on va stocker le message : `Bonjour !`
  2. Affiche le message dans ta console. Tu devrais avoir le message “Bonjour !” qui apparaît.
  3. Crée une seconde variable firstname dans lequel on va stocker un prénom. Exemple : Beyonce
  4. Utilise la variable `firstname` dans `message` pour obtenir l’affichage du message : `Bonjour Beyonce !` <br /> Attention, ici il s’agit bien de modifier la variable `message`et non le `console.log()`

</details>



## Étape 3 : dans une fonction
<details>
  <summary>Clique ici</summary>

  1. *Encapsule* ton code précédent dans une fonction nommée `sayHello()`
  2. Appelle la fonction `sayHello()` dans ton code pour t’assurer que tout continue de fonctionner. <br /> Tu devrais toujours avoir le message `Bonjour Beyonce !` qui s’affiche dans la console.
  3. Déplace la variable `firstname` pour qu’elle devienne un *paramètre* de la fonction `sayHello()`
  4. Exécute ton code. Tu devrais obtenir dans ta console `Bonjour undefined !` 🤔
  5. Corrige l’*appel de fonction* pour retrouver de nouveau le message `Bonjour Beyonce !`

</details>

## (optionnel) Étape 4 : un second paramètre
<details>
  <summary>Clique ici</summary>

  1. Ajoute un second paramètre `hour` à la fonction `sayHello()`
  2. Ajoute une condition dans ta fonction pour que lorsque `hour` est supérieur ou égal à 18H, on dise `Bonsoir` plutôt que `Bonjour` dans le message
  
  Voici quelques tests que tu peux faire :

  ```jsx
  sayHello(`Beyonce`, 11);
  sayHello(`Beyonce`, 18);
  sayHello(`Beyonce`, 17);
  ```

  Tu devrais voir afficher :
  
  ```jsx
  Bonjour Beyonce !
  Bonsoir Beyonce !
  Bonjour Beyonce !
  ```

</details>

## (bonus) Étape 5 : HTML, liaison avec JavaScript
<details>
  <summary>Clique ici</summary>

  1. Ajoute dans le dossier de l’exercice, un fichier **`index.html`**
  2. Avec VS Code, tape la touche `!` (point d’exclamation) dans le fichier `index.html` et valide en appuyant sur la touche `Entrée` <br /> Les balises de base d’une page web devraient s’afficher. Si ce n’est pas le cas, n’hésite pas à te référer auprès d’un·e encadrant·e ou d’un·e autre apprenant·e.
  3.  Fais le lien entre ton fichier JavaScript et HTML en ajoutant une ligne dans la balise `<head></head>` : <br />
  ```html
  <script src="script.js" defer></script>
  ```
  4. Ajoute un titre sur ta page, il doit se situer à l'intérieur des balises `<body></body>` <br />
  ```html
  <h1>Premier exercice individuel</h1>
  ```
  5. Lance et teste ta page en appuyant sur `Go Live` en bas de ton VS Code. <br />
  Si tu n’as pas ce bouton, vérifie que tu as bien installé l’extension `Live Server` sur ton VS Code. <br />
  Tu devrais apercevoir le message `Premier exercice individuel` sur ta page.
  6. Clique droit et inspecte ton site, tu devrais apercevoir ton message `Bonjour Beyonce !` dans la console 😬 <br />
  <details>
  <summary>Clique ici, si tu cherches où se trouve la console</summary>

  ![demo_etape_5](images/01_demo_etape_5.gif)

  </details>
  
</details>

## (bonus) Étape 6 : Première manipulation du DOM 😱
<details>
  <summary>Clique ici</summary>
  
  Cette étape peut te paraître assez challenge. N’hésite pas à aller explorer avec d’autres apprenantes la manipulation du [DOM](https://www.w3schools.com/js/js_htmldom.asp) (Document Object Model) pour t’aider.
  1. Dans ton fichier `script.js`, remplace le `console.log()` par la ligne suivante : <br />
  ```jsx
  document.querySelector('h1').innerText = message;
  ```
  Rafraîchis ta page, tu devrais avoir le message `Bonjour Beyonce !` qui s’affiche à la place du titre `Premier exercice individuel`
  
  2. Dans ton fichier `script.js`, ajoute au tout début du fichier la fonction `prompt()` [(documentation)](https://developer.mozilla.org/fr/docs/Web/API/Window/prompt)<br />
  Cette fonction retourne la valeur saisie dans le formulaire. <br />
  Ici nous souhaitons récupérer le prénom pour personnaliser le titre en fonction du prénom saisi.

  > Attention, n’hésite pas à fermer ta fenêtre et la relancer car avec `prompt()`, la page ne se rafraîchit pas lorsque la pop-up n’est pas fermée.
  
  3. Récupère donc la *valeur retournée* par la fonction `prompt()` dans une variable que tu pourras de nouveau réutiliser dans l’appel de ta fonction `sayHello()`<br />
  Tu devrais dorénavant avoir le titre qui change en fonction du prénom saisi dans le prompt 👀<br />
  <details>
  <summary>Clique ici, pour une petite démo de l'attendu</summary>

  ![demo_etape_6](images/01_demo_etape_6.gif)

  </details>
  
</details>
<br/>

**BRAVO** 🎉 
Tu es allé·e au bout de l’exercice ! N’hésite pas à nous faire tes retours si tu l’as trouvé difficile.

Tu as aimé faire cet exercice ou tu as des retours à nous faire ? [Clique ici !](https://airtable.com/appXbfdqY0iZhnZgd/shrbWiQDMsH63nsj4)
