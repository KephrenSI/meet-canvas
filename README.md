# Meet Canvas

> Base exercise to discover canvas.

* * *

**meet-canvas** is an educational project.

**Note:** the school where the course is given, the [HEPL](http://www.provincedeliege.be/hauteecole) from Liège, Belgium, is a french-speaking school. From this point, the instructions will be in french. Sorry.

* * *

Ces fichiers servent de base d'exercice pour le cours de découverte de la balise `<canvas>`.

Le cours est réparti en 7 exercices distincts, dans leurs dossiers propres. Le dossier `_shared` contient les éléments communs à chaque exercices (feuilles de styles, images…). Un workflow Grunt basique est inclus, pour vérifier les fichiers javascript avec **eslint**.

## Branche `completed-es2015`

Afin de vous permettre d'avoir une série de références de script en **ES2015**, j'ai créé une branche supplémentaire, nommée `completed-es2015`, qui contient les versions corrigées, mais écrites en suivant la nouvelle norme JavaScript ES2015.  
Comme expliqué au cours de [RIA](https://github.com/hepl-ria), ces scripts ont besoin d'être convertis (_transpilés_) vers une plus vieille version de javascript pour fonctionner dans un navigateur. J'ai modifié le workflow **grunt** pour y inclure une tâche de compilation _via_ [babeljs](https://babeljs.io). Pour chaque exercice, vous aurez donc un fichier `script.js`, qui est la version _compilée_ et utilisée par le navigateur, et un fichier `script.es2015.js`, utilisant la nouvelle norme.  
J'en ai aussi profiter pour ajouter quelques règles propres à **ES2015** dans le fichier `.eslintrc.json`.

## Détail des exercices

### `exo-one`

Premier exercice : sur base d'une balise `canvas` carrée de 500px de côté, nous allons d'abord dessiner 4 carrés de couleur, écrire un petit titre, rajouter une image au centre de la zone de travail, et enfin rajouter un petit contour interne.

### `exo-two`

Second exercice : nous allons dessiner le drapeau Suisse. Nous en profiterons pour externaliser notre fonction de vérification de la prise en charge de canvas au sein d'un fichier dédié.  
**Note :** nous utiliserons [les proportions officielles](https://commons.wikimedia.org/wiki/File:Flag_of_Switzerland_at_Sea.png), de manière à ce que, en ne changeant que la variable `iFlagHeight`, le reste du drapeau soit entièrement correct.

### `exo-three`

Troisième exercice : nous allons manipuler nos premiers chemins (`path`), en dessinant trois triangles. Le second triangle aura une petit particularité : nous ne fermerons pas notre `path`.

### `exo-four`

Quatrième exercice : on découvre quelques fonctions de `path` supplémentaires pour dessiner une petite scénette de plage. Nous en profiterons pour créer une classe utilitaire pour manipuler notre canvas, et éviter de répéter sans cesse les mêmes bouts de code dans nos scripts.

### `exo-five`

Cinquième exercice : découvrons les rotations en créant un motif _à la_ spirographe.

### `exo-six`

Sixième exercice : on copie les données d'un canvas source vers un canvas plus petit, le tout _via_ un écouteur d'événement sur la souris pour adapter la portion de canvas à afficher.

**Note :** pour éviter les avertissements de sécurité concernant le cross-site scripting dans certains navigateurs, il vaut mieux faire tourner cet exercice sur un serveur local, comme WAMP/MAMP, ou, plus simple, [teseve](http://teseve.github.io) ou [seve](https://www.npmjs.com/package/seve).

### `exo-seven`

Septième exercice : on va appliquer des filtres à une image chargée dans le canvas, en manipulant directement les données du canvas.
