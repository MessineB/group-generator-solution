//Je fais une fonction qui va effectuer le tri sur un tableau

function triB (tab) { 
    let A;          // Je defini une valeur A qui servira plus tard pour classé le tableau
    let B;           // Je defini une valeur B qui servira plus tard pour classé le tableau
    let TEMPO;          // Je defini une valeur TEMPO qui servira plus tard pour classé le tableau

    if ( Array.isArray(tab) === true ) { // On verifie que l'on rentre dans la fonction, un tableau 
        if (tab.length == 0 || tab.length == 1 )  // On teste la taille du tableau si il est nul on fait rien, si on a la taille de 1 alors on a pas besoin de trier 
        {
            return;  //On arrete le tri si le tableau est vide ou d'un nombre.
        }
        for (A = tab.length - 1 ; A != 0 ; A--) {  // On lance la boucle FOR qui va effectuer 
            B = Math.floor(Math.random() * tab.length );
            TEMPO = tab[B];
            tab[B] = tab[A];
            tab[A] = TEMPO ;
        }
        
    }
    else {
        return 
    }
    return tab
}

console.log(tab);
triB(tab);
console.log(tab);