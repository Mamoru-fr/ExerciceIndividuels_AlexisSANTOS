# 1. Enoncé

Un mot de passe dit "fort" est un élément essentiel d'un system sécurisé.
Tout au long de cet exercice, il sera question d'écrire une regex avancée pour contrôler la qualité et la sécurité d'un mot de passe. Une étape importante avant de valider et stocker ce mot de passe, pour devancer les attaques de brute-force.

## Etape 1: La taille compte!

Un des premier prérequis pour un mot de passe sécurisé est sa taille. En effet, sur une attaque de type brute force, quelques secondes peuvent suffire à faire deviner à une machine un mot de passe de moins de 7 caractères, ce qui explique les nombreux sites qui exigent une longueur minimum de 8 caractères.

Commençons donc par une regex qui assure une longueur minimum de 8 caractères.

## Étape 2: Alphanumériques

Notre mot de passe a maintenant une longueur suffisante. Mais il est important de varier le type de caractères utilisés. Chiffres, lettre, caractères spéciaux. Next step serait donc de vérifier la présence d'au moins un caractère de chacune de ces catégories.

## Étape 3: Être sensible à la casse

Nous avons maintenant quelque chose d'assez avancé, ajoutons la contrainte de caractère majuscules. Un mot de passe sécurisé doit contenir un panel le plus large possible de caractères.

## Étape 4: On teste tout ça ?

Notre regex est fin prête! Mettez en place une simple page HTML pour la tester.
Bonus: ajoutez un indicateur de "sécurité" qui se baserai sur les différentes contraintes imposés au mot de passe, par exemple avec des couleurs (rouge = pas assez sécurisé, orange = peut mieux faire, vert = parfait).

## Étape 4: Cracking time

Seriez-vous en mesure d'estimer le temps nécessaire à un hackeur pour s'approprier votre mot de passe ?

Tu as aimé faire cet exercice ou tu as des retours à nous faire ? [Clique ici !](https://airtable.com/appXbfdqY0iZhnZgd/shrbWiQDMsH63nsj4)

