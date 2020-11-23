// les fonctions de calcul
function addition(nb1,nb2) {
    return nb1 + nb2 ;
}

function multipli(nb1,nb2){
    return nb1 * nb2 ;
}

function soustration(nb1, nb2){
    return nb1 - nb2 ;
}

function division(nb1, nb2){
    if (nb2 == 0){
        throw new Error ('Impossible de diviser par zéro!');
    }
    return nb1/nb2 ;
}

//
let doitagain = false ;

do {

// Choix de l'utilisateur
    do {
        var userchoice = Number(prompt ('What do you want to do? \n\n 1-Addition' + 
            '\n 2-Multiplication\n 3-Soustraction \n 4-Division \n'));
        } while (userchoice !=1 && userchoice !=2 && userchoice !=3 && userchoice !=4 )


// if (isNaN(userchoice)) { // renvoie true si la variable n'est pas un nombre
//     alert('Rentrer un nombre!');
// } else {
//     nb1 = Number(prompt('Entrez un premier nombre'));
//     nb2 = Number(prompt('Entrez un second nombre'));
// }

// Récupérez les deux nombres choisis
    do {
        var nb1 = Number(prompt('Entrez un premier nombre:'));
        var nb2 = Number(prompt('Entrez un second nombre:'));
    } while (isNaN(nb1) || isNaN(nb2));



// choix de la fonction
        try {
            switch (userchoice) {
                case 1:
                    var res = addition(nb1,nb2);
                    break;
                case 2:
                    var res = multipli(nb1,nb2);
                    break;
                case 3:
                    var res = soustration(nb1, nb2);
                    break;
                case 4:
                    var res = division(nb1, nb2);
                    break;
                default:
                    alert('y a un soucis pantoute'); // throw new Error ("Une erreur est survenue")
                    break; 
            }

            alert('Le résultat est de: ' + res);
            
            }
        

        catch(error) {
            alert(error);
            }

        reput = confirm('Voulez-vous faire un autre calcul?');

} while (reput == true);

