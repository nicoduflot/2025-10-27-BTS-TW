# Installation

Il est possible d'installer tailwind sur différents frameworks.

Dans ce projet, nous allons l'installer sur un projet sans framework, en utilisant Tailwint CLI

## Installation

1. Il faut utiliser un terminal et se rendre à la racine du projet.

2. Une fois à cet endroit, il faut utiliser npm pour laner la commande suivante : ```npm install tailwindcss @tailwindcss/cli```

3. Dans le projet, prévoir un fichier css d'entrée, par exemple à cet endroit : ```./src/tailwind/intput.css```, sur lequel on inscrit la ligne suivante : 
```css
@import "tailwindcss";
``` 

4. A nouveau dans le terminal, on va lui demander de "surveiller" le fichier input, et d'écrire le css compilé par tailwind sur un autre fichier css, ici il sera dans ```./src/css/style.css```, en utilisant la commande suivante : ```npx @tailwindcss/cli -i ./src/tailwind/input.css -o ./src/css/style.css --watch```

5. Une fois lancé, le terminal va recompiler le css à chaque fois que les fichiers dans lesquels sont lié le fichier ```style.css``` seront sauvegardés. Il ajoutera le CSS final dans ce fichier, selon les classes écrite dans le fichier HTML.

```html
<!doctype html>
    <html lang="fr">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <link href="./src/css/style.css" rel="stylesheet">
        </head>
    <body>
        <h1 class="text-3xl font-bold underline">Hello world!  </h1>
    </body>
</html>
```