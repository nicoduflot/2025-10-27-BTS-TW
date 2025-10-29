# Exercice : Thème personnalisé Bootstrap et Sass

Carte portfolio personnalisé en utilisant la méthode custom-01 et en surchargeant avec ses variables et un scss partials

## A faire

* Importer et surcharger au moins 5 variables de bootstrap (couleurs, spacers, border-radius)
* créer un composant card avec les classes de bootstrap avec :
    * Une image en haut
    * Titre et description
    * Créer une classe personnalisée de badge (s'inspirer de la clesse badge existante) .tech-badge
    * Bonus : Un bouton d'action qui ouvre une modale
    -> utiliser les classes bootstrap existantes + création de classes custom pour les variantes
* Créer une variante .card-portfolio
    * effet hover personnalisé
    * ombre personnalisée
    * Bonus : une animation
    * Utiliser si possible les mixins bootstrap exemple : media-breakpoint-up

**Compiler et tester avec --watch**

### Pour les warriors

* Ajouter un bouton de changement de thème ( clair /sombre ) (a faire en JS)
* Ne pas utiliser row > col mais une grille 1, 2 (md) puis 3 (lg)

### Défis :

* **Animation au chargement** : avec `@keyframes`, apparition progressive des cards (type fade)
* **Étendre le mode dark à la modal**


## Mockup
![Mockup de l'exercice](./scss/portfolio/mockup.png "mockup écran, tablette et smartphone" )