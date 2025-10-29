# Principes de base

Le terminal scan les fichiers et si un fichier est lié au CSS de sortie, ici `style.css`, dès qu'une classe de tailwind est ajoutée a ce fichier, il compile le CSS nécessaire et l'ajoute au fichier de sortie CSS.

## Configurer son IDE

Pour VS Code, il est recommandé d'utiliser le pluggin ***Tailwind CSS intelliSense**, qui ajoutera :
* Autocomplétion
* Affichage des erreurs d'utilisation
* affichage du css créé au survol
* coloration syntaxique

Il est aussi recommendé d'utiliser le pluggin **Prettier**, il va trier les classes dans les éléments dans l'[ordre recommandé](https://tailwindcss.com/blog/automatic-class-sorting-with-prettier#how-classes-are-sorted) par le framework.

Les IDE de la suite **Jetbrains** et **Zed** supportent aussi tailwind.

## Hello World

Dans l'exemple donné [précédement](./01-installation.md), on peut voir que la balise `h1` possède les classes suivantes : `text-3xl font-bold underline`

ces classes apparaissent dans le fichier de sortie : 
```css
@layer utilities {
  .text-3xl {
    font-size: var(--text-3xl);
    line-height: var(--tw-leading, var(--text-3xl--line-height));
  }
  .font-bold {
    --tw-font-weight: var(--font-weight-bold);
    font-weight: var(--font-weight-bold);
  }
  .underline {
    text-decoration-line: underline;
  }
}
```

## Les classes utilitaires

IL existe donc dans Tailwind ce qu'on appelle des *classes utilitaires*, une suite de classe qui permettent de mettre en forme directement dans les éléments HTML.

## Utiliser du CSS "customisé"

IL est possible d'ajouter sont propre CSS, il faut pour cela l'ajouter à la suite de l'import de Tailwind dans le fichier d'entrée ``ìnput.css``` selon la syntaxe Tailwind, en utilisant les variables de thème pour que le design reste consistant.

## !important

Il est possible, comme en CSS, d'utiliser le modificateur `!important` dans les classe, en les suffixant avec **!**, par exemple `bg-teal-50 bg-red-50!`

il est possible, quand on ajoute Tailwind à un projet possedant déjà un CSS complexe avec des règles strict, de marquer en une fois tous ses utilitaires lors de l'import dans le fichier `input.css` de cette manière : 
```css
@import "tailwindcss" important;
```

cela ajoutera, par exemple : 

```css
@layer utilities{  
    .flex {
        display: flex !important;
    }
    .gap-4 {
        gap: 1rem !important;
    }
    .underline {
        text-decoration-line: underline !important;
    }
}
```

## Lutte des classes

Si des classes du CSS initial, avant l'ajout de Tailwind, peuvent entrer en conflit car portant le même nom, il est possible de suffixer les classes Tailwind qui seront compilées dans le fichier de sortie, de cette manière : 

```css
@import "tailwindcss" prefix(cs);
```

Et le résultat compilé : 

```css
@layer theme {
    :root {
        --tw-color-red-500: oklch(0.637 0.237 25.331);
    }
}

@layer utilities {
    .tw\:text-red-500 {
        color: var(--tw-color-red-500);
    }
}
```

## Pseudo classes

### :hover, :focus, and :active 

Ils peuvent être ajoutés devant les classes de la manière suivante :
`bg-violet-500 hover:bg-violet-600 focus:outline-2 focus:outline-offset-2 focus:outline-violet-500 active:bg-violet-700`

Les variantes sont aussi implémentées (visited, focus-within, etc.).

### :first, :last, :odd, and :even

Ils sont intégrés de la même façon, mais leur utilisation sera optimisée si on utilise un moteur de template

Si on ajoute ces classes `flex py-4 first:pt-0 last:pb-0` un élément contenant une suite d'élements similaires empilés, il appliqueront tous une marge intérieure en haut et en bas sauf le premier qui n'en aura pas en haut `first-pt-0` et le dernier qui n'en aura pas en bas `last:pb-0`.

[Voir la documentation complète des pseudo-classes](https://tailwindcss.com/docs/hover-focus-and-other-states#pseudo-class-reference).

## Pseudo éléments

### ::before et ::after
ils s'utilisent de la même façon que les pseudo-éléments :

`text-gray-700 after:ml-0.5 after:text-red-500 after:content-['*']`

Cela ajoute par exemple à un span, dans le after, une marge extéireur gauche, et en contenu dans le after un astérisque rouge.

## media-queries

### Points de rupture adaptatifs

IL est possible, pour l'adaptatif, de choisir entre `grid` et `flex`, et les classes qui permettent ensuite de bloquer un élément à une certaine largeur seront préfixées du point de rupture souhaité.

Une grille avec trois colonnes en mobile, 4 pour les écrans médium et 6 pour les écrans large : 
`grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6`



## Sélecteur d'attribut

## Selcteurs d'enfants