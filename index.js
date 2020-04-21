/*Création d'une variable nommée "dé" contenant un tableau vide*/
var dice = [];
/*Création d'une variable nommée "listeValeurDé" ayant pour valeur de départ 1*/
var listValueDice = 1;

/*Création d'une fonction nommée "maValeurDé" sans paramètre.*/
function myValueDice() {
        /*Le code de cette fonction renvoie dans un premier temps un entier inférieur aléatoire entre une valeur minimum de 1 et une valeur maximun de 6 (incluses).
        Cet entier est positionné dans le tableau en index 1*/
        dice[listValueDice] =  Math.floor(Math.random() * 6 + 1);
        console.log("Numéro de lancé :" + (listValueDice));
        console.log("Résultat du lancé : " + dice[listValueDice]);
        /*Ensuite le code va récupérer dans le fichier HTML, l'élément qui a l'ID "nb-dice" et le remplacer par l'entier qui vient d'être généré aléatoirement en index 1 du tableau*/
        document.getElementById("nb-dice").innerHTML = dice[listValueDice];
        /*Ensuite le code va récupérer dans le fichier HTML, l'élément qui a l'ID "list-value-dice" et le remplacer par le texte "Vous avez lancé le dé " suivi de la valeur de la variable "listValueDice" qui au départ est égal à 1 puis par le texte "fois." */
        document.getElementById("list-value-dice").innerHTML = "Vous avez lancé le dé " + listValueDice + " fois.";
        /*Le code va ensuite incrémenter la valeur de la variable "listValueDice" de +1. Ainsi, au prochain clique, le code s'exécutera mais en incrémentant le tableau en index 2 permettant ainsi de sauvegarder les résultats de chaque lancé*/
        listValueDice++;
        /*Une condition est insérée dans la fonction : lorsque le nombre de lancés de dé est strictement supérieur à 6, il faut exécuter la fonction "displayResultsF" qui est décrite ci-dessous.*/
        if (listValueDice > 6) {
          displayResultsF();
        }
    }

/*Création d'une fonction nommée "displayResultsF" sans paramètre.*/
function displayResultsF() {
      /*Le code va récupérer dans le fichier HTML, l'élément qui a l'ID "button-appear" et le remplacer par la création d'un nouvel élément HTML qui sera un bouton nommé "Afficher les résultats" et qui exécutera la fonction "displayResults", décrite ci-dessous, sur chaque élément du tableau lorsqu'on cliquera dessus.*/
     document.getElementById("button-appear").innerHTML = '<button class="button" onclick="dice.forEach(displayResults)">Afficher les résultats</button>';
}

/*Création d'une fonction nommée "displayResults" avec 2 paramètres l'item et l'index du tableau "dé".*/
function displayResults(item, index) {
    /*Création d'une nouvelle variable "displayHTML" qui va récupérer dans le fichier HTML, l'élément qui a l'ID "results"*/
    displayHTML = document.getElementById("results");
    /*Le code remplace cette nouvelle variable par le texte Le lancé n°" suivi en gras du numéro d'index du tableau soit le numéro de lancé, suivi du texte " était de : ", suivi en gras du résultat de l'index du tableau concerné soit le résultat du lancé. Puis on revient à la ligne pour passer au résultat suivant.*/
    displayHTML.innerHTML = 
        displayHTML.innerHTML + 
        "Le lancé n°" + 
        "<strong>" + 
        index + 
        "</strong>" + 
        " était de : " + 
        "<strong>" + 
        item + 
        "</strong>" + 
        "<br>"; 
}