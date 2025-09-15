# 1. Enoncé

L'objectif de cet exercice est de mettre en place une application type "as a service", ce qui veut dire, un service qui dessert l'application via un serveur accessible.
En l'occurence, c'est un service de tri que nous allons proposer: Algo as a service.
L'idée est donc de proposer un algo que vous auriez écrit au préalable, qui sera exécuté par le serveur. Pour le cas pratique, nous partirons sur l'algo de l'exercice sur le tri. Le cheminement est donc le suivant: mettre en place un serveur qui exécutera les operation de tri pour vous. Il faudra donc lui donner, en entrée (request) une liste d'éléments (on prendra des chiffres pour faire simple) ainsi que l'ordre tri (croissant ou décroissant), et il vous retournera en sortie (response), cette liste triée selon le critère de tri demandé.

## Étape 0: Commençons par le commencement

Avant de se lancer, il serait bon de trouver un langage et une stack qui correspond au besoin. Ici donc, de quoi monter notre serveur. Plein d'options s'offrent à vous: JS avec Express, Go avec net/http ou encore Python avec les package http.server.

## Étape 1: Un endpoint

Il va maintenant s'agir de mettre en place le serveur, lui attribuer un port et créer un premier endpoint.
Ce endpoint sera donc en POST (pour pouvoir lui donner en entrée des paramètres).
Ajouter donc à ce endpoint le parsing des paramètres. Un première qui sera `sort_order` qui prendra la valeur "asc" ou "desc" ainsi que `values` qui sera un tableau de valeurs (non triés).

Pour exécuter nos requêtes, nous pouvons utiliser curl ou Postman. La requête devrait ressembler à ceci:

```
curl -X POST localhost:8888
   -H "Content-Type: application/json"
   -d '{"sort_order": "asc", "values": [3, 2, 4, 1]}'

```

Pour commencer, retournez les valeurs tel quel.

## Étape 2: Tri

Place au tri. Prennez votre algo de tri favorites (bubble ou quick), ajoutez là à votre code base. Appelez-la ensuite dans le traitement de la request.
Il est maintenant possible de retourner la liste ordonnée. Appliquez donc l'ordre demandé par le paramètre sort_order.

Tu as aimé faire cet exercice ou tu as des retours à nous faire ? [Clique ici !](https://airtable.com/appXbfdqY0iZhnZgd/shrbWiQDMsH63nsj4)

