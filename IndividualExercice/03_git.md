# 1. Énoncé 📝

Git est certainement l'outil que tu utiliseras le plus après ton éditeur de code quand tu travailleras sur un projet. Il permet de garder un historique de ton travail, partager le code sur internet et collaborer sur un projet avec d'autres personnes.

 Tu peux trouver la liste des commandes git [ici](https://git-scm.com/docs). Pas de panique ! Maitriser Git prend du temps, même des années, donc tu apprendras tout ça au fur et à mesure.

> ⚠️ Ça ne sert à rien de chercher à tout apprendre d'un coup !
> 

## Objectifs 🎯

- Te donner une bonne introduction de Git et Github
- Te permettre de configurer Git et commencer à l’utiliser concrètement
- Te donner les premières clés pour commencer à utiliser Git et Github dans tes projets Ada et projets persos

## Explications : Git vs Github

Au début, on confond souvent Git et Github. Ce qu’il faut retenir c'est que Git c'est l'outil, et Github c'est un service qui permet de mettre sur internet nos *repositories* (dépôts de projets) Git. Cela nous permet (entre autres) de facilement les partager avec d'autres personnes mais aussi de pouvoir les récupérer sur n’importe quel ordinateur.
![Explications Git et Github](images/03_Explications_Git.png)

## **Étape 1 : Ton premier "repository"**

📖 Repositoquoi ? Un *repository* ou *repo* c'est tout simplement comme ça qu'on appelle un projet qui utilise git 😉

1. Si ce n'est pas déjà fait, commence par créer ton compte sur Github et configure ta *clé SSH* pour pouvoir utiliser git facilement sur ton ordi en utilisant [ce lien](https://docs.github.com/en/authentication/connecting-to-github-with-ssh/generating-a-new-ssh-key-and-adding-it-to-the-ssh-agent).
    
    > 🆘 Si tu rencontres des difficultés à cette étape, n'hésite pas à demander l'aide d’autres apprenant·es ou de l’encadrant·e, ça arrive tout le temps ! La configuration de ton ordinateur peut te compliquer la tâche…
    > 

1. Tu as réussi ? On va pouvoir créer ton premier repo Git ensemble. Clique [ici](https://github.new) ou utilise le bouton vert sur le site de Github, choisi un nom et valide la création de ton premier repo 🎉.
    
    > 💡 Si tu n'as pas d'idée, je t’encourage plutôt à le nommer de la manière suivante : ton pseudo Github suivi de `github.io` (par ex : mon pseudo est `jeremt` , mon nom de repository sera : `jeremt.github.io`), tu comprendras pourquoi un peu plus bas 😊
    > 
    
    Sur la page suivante, on a plein de commandes à faire pour finir la création du repository. Mais ne t'inquiète pas, on va les analyser ensemble une par une.
    

1. Avant de commencer, il faut ouvrir le dossier d'un projet qui n'est pas encore sur Git et ajoutes-y au moins un fichier (un `index.html` par exemple).
    
    > Rappelle-toi ce qu’on a vu ensemble au premier exercice (bonjour JavaScript) : l’importance de l’organisation des dossiers. Avec Git, c’est encore plus important d’y prêter attention. Si tu ne te situes pas à la racine de ton dossier projet dans le terminal, tu risques de ne pas utiliser Git sur le bon projet !
    Tu peux aussi passer par VSCode, comme ça le terminal sera directement dans le bon dossier.
    >

    <details>
    <summary>Tu retrouveras ici un Gif explicatif pour t’aider si besoin 👾</summary>
  
    ![Démo premier repo](images/03_Init_Repo.gif)
  
    </details>

1. Maintenant voyons chaque ligne de commande avant de les écrire dans le terminal :
    1.  `git init` transforme le dossier courant en repository git (comme tu peux le voir les fichiers s'affichent maintenant en vert dans VSCode)
    2.  `git add README.md` ajoute le fichier `README.md` pour qu'il soit pris en compte au prochain commit, si tu as ajouté un `index.html` tu peux faire `git add index.html` à la place
    3. `git commit -m "first commit"` effectue un *commit* avec les fichiers ajoutés en utilisant le message `first commit`. Tu peux changer le message si tu le souhaites. Lorsqu'on fait un "commit" on fait une sauvegarde de notre code à un instant T. Cela permet de facilement revenir en arrière si jamais on a des *bugs* 🐛
    4. `git branch -M main` renomme la branche par défaut (master) en main car c’est la convention utilisée par Github (si tu veux savoir pourquoi ce changement, [clique ici](https://www.theserverside.com/feature/Why-GitHub-renamed-its-master-branch-to-main)). À part ici, je te conseille de ne pas trop t'intéresser aux branches pour l'instant, attends d'être un peu peu à l'aise avec Git pour ça.
    5. `git remote add origin git@github.com:jeremt/mon-magnifique-portfolio.git` créé le lien entre ton projet git sur ton ordi et celui que tu as créé sur Github
    6. `git push -u origin main` envoie les changements que tu as commit sur ton ordi sur Github !

1. Une fois que tu as exécuté les 6 commandes ci-dessus, ton repo est initialisé. Si tu rafraichis la page sur Github, cela devrait maintenant ressembler à ça :
   ![Image premier repo](images/03_Init_Repo.png)
   Si tu as appelé ton repo `<ton_pseudo>.github.io` comme suggéré au point 2), tu devrais pouvoir accéder à l'url `https://<ton_pseudo>.github.io` qui affichera ton premier site web 🎉 Il s’agit d’une *fonctionnalité* de github qui permet très facilement de transformer un repo github en site web, tu peux trouver plus d’infos sur le sujet ici.

## **Étape 2 : Faire des changements**

Maintenant que ton repo est sur Github, on va voir ensemble quelles commandes utiliser pour faire de nouvelles modifications. Commence par faire des changements dans le fichier `index.html` par exemple.

Si tu vas dans l'onglet **Source Control** de ton VSCode tu peux visualiser les changements entre les différentes versions d'un fichier sur Git :
![Image changement](images/03_Faire_Changements.png)
💡 Tu peux aussi utiliser la commande `git status` qui permet d’afficher les changements dans le terminal et la commande `git diff index.html` pour afficher les changements liés à un fichier en particulier. 

### Comment ferais-tu pour ajouter ces changements sur Git, sauvegarder ces changements et les synchroniser sur ton repository Github ?
<details>
    <summary>Indice</summary>
    Tu peux reprendre certaines commandes de l’étape 1 -> point 4) …  
</details>
<details>
    <summary>Solution</summary>
    Pour ajouter les changements effectués dans Git, tu peux utiliser les commandes suivantes dans ton terminal :

1. `git add index.html` ajoute les changements du fichier index.html
2. `git commit -m “add more texts to index.html”` fait un commit des changements
3. `git push` synchronise les nouveaux changements sur Github

Si tu préfères, tu peux aussi utiliser l'interface de VSCode pour faire ça plus simplement.

Si tu retournes sur l'interface de Github, tu devrais maintenant voir 2 commits s'afficher ! 
</details>

## Étape 3 : Toi + moi + git

C'est là que ça se complique !

Git c'est cool tout seul, mais là où ça devient vraiment intéressant, c'est quand on travaille à plusieurs sur un même projet. Dans cette partie, on va voir comment gérer les problèmes !! 😁

1. Pour commencer, modifie directement le fichier `index.html` depuis Github (l'idée c'est de faire comme si un changement était fait par une autre personne sur le projet).
   <details>
    <summary>Tu retrouveras ici un Gif explicatif pour t’aider si besoin 👾</summary>
  
    ![Toi Moi Git](images/03_Toi_Moi_Git.gif)
  
    </details>
1. Maintenant, on va également changer le titre du portfolio mais depuis le *repository local* cette fois. Change le `h1` puis `git add`, `commit`, `push`, comme à l’étape précédente !

1. Normalement si tu as bien suivi toutes les étapes tu devrais avoir le message suivant au moment du `git push` :
    
    ```
    To github.com:jeremt/mon-magnifique-portfolio.git
     ! [rejected]        main -> main (fetch first)
    error: failed to push some refs to 'github.com:jeremt/mon-magnifique-portfolio.git'
    hint: Updates were rejected because the remote contains work that you do
    hint: not have locally. This is usually caused by another repository pushing
    hint: to the same ref. You may want to first integrate the remote changes
    hint: (e.g., 'git pull ...') before pushing again.
    hint: See the 'Note about fast-forwards' in 'git push --help' for details.
    ```
    
    ### Traduis avec tes mots ce message d’erreur. Quelle commande dois-tu exécuter pour résoudre cette erreur ?

   <details>
    <summary>Indice</summary>
    Cette phrase là est particulièrement intéressante :
    
    `You may want to first integrate the remote changes hint: (e.g., 'git pull ...') before pushing again.`...
   </details>
   <details>
        <summary>Solution</summary>

      C'est totalement normal, vu que des changements ont été fait depuis Github, il faut les récupérer avant de pouvoir push. Pour cela, on peut utiliser la commande `git pull` pour “merger” tes changements (c’est à dire les combiner avec ceux déjà sur ton ordinateur) avec ceux faits sur Github.
   </details>

1. Si tu as trouvé la bonne commande, tu devrais te retrouver avec le message suivant :
    
    ```
    Auto-merging index.html
    CONFLICT (content): Merge conflict in index.html
    Automatic merge failed; fix conflicts and then commit the result.
    ```
    
    ### Traduis avec tes mots ce message d’erreur. Quelles prochaines actions dois-tu faire ?

   <details>
    <summary>Indice 1</summary>
    
    Il semblerait que tu aies besoin de résoudre toi-même un problème de merge dans le fichier `index.html` puisque Git n’a pas réussi à le faire automatiquement …
   </details>
   <details>
    <summary>Indice 2</summary>
    Tu as réglé le conflit toi-même ? Comment est-ce que tu peux faire pour synchroniser sur Github la résolution de ce conflit ? 🤔 J’ai l’impression qu’on a déjà vu les commandes dont tu as besoin plus tôt dans l’exercice…
   </details>
   <details>
    <summary>Solution</summary>
     Vu que tu as modifié la même ligne en local et sur Github, git ne sait pas quelle modification prendre en compte. C'est ce qu'on appelle un conflit. Généralement Git est assez intelligent pour "merger" automatiquement les fichiers modifiés par 2 personnes, sauf si la même ligne a été modifiée des 2 côtés (en local et en remote). Dans ce cas il faut régler le conflit en choisissant manuellement ce qu'il faut garder :
  
    ![Toi Moi Git Solution](images/03_Toi_Moi_Git_Solution.png)
    
    - en vert, on a les changements effectués en local (sur ton ordi)
    - en bleu, on a les changements effectués sur Github (ou par quelqu’un d’autre)
  
    Pense à bien supprimer de ton fichier les lignes 1 et 5 de la photo ci-dessus, elles sont temporaires pour t’aider à repérer le conflit et les différentes versions qui co-existent pour le moment !
  
    Une fois les conflits réglés en modifiant le fichier, on fait comme d'hab : `git add` les fichiers, `git commit` puis `git push` !
  
    Si tu retournes sur Github, ton historique de commits devrait ressembler à peu près à ça :
     
    ![Toi Moi Git Solution](images/03_commit.png)
  
    💡 Dans ton terminal, tu peux utiliser la commande git log pour voir les commits en local. Tu peux aussi installer l’extension Git lense sur VSCode.
      
  </details>

## Récap des commandes

- `git init (…) git push -u origin main` c’est les commandes pour créer un repo, pas besoin de les retenir par cœur car on te les redonnera à chaque repo créé !
- `git add`  permet d’ajouter les changements de un ou plusieurs fichiers
- `git commit -m “message”` permet de sauvegarder les changements en donnant un message décrivant les changements effectués
- `git pull` récupère les changements depuis github
- `git push` envoie tes commits sur github

## La suite 🚀

- Mettre en ligne un autre repo (le précédent exercice individuel par exemple ? 🤭)
- L’utiliser à plusieurs (sur le prochain projet 💃)

## La suite de la suite (mais pour plus tard stp 🥲)

- Les branches (https://git-scm.com/book/fr/v2/Les-branches-avec-Git-Les-branches-en-bref)
- git rebase, pour un historique plus propre (https://www.atlassian.com/git/tutorials/rewriting-history/git-rebase)
- Le reste des commandes ⇒ https://git-scm.com/doc
- Cheatsheet ⇒ https://education.github.com/git-cheat-sheet-education.pdf



**Tu as aimé faire cet exercice ou tu as des retours à nous faire ? [Clique ici !](https://airtable.com/appXbfdqY0iZhnZgd/shrbWiQDMsH63nsj4)**

