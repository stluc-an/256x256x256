

console.log("HELLO WORLD");

/*-----------------------------------------*\
    BESOIN : 
    répartir 256 valeurs entre 26 personnes
\*-----------------------------------------*/

var valeurs = [];
var personnes = [];
// creation des valeurs
for(var i = 0 ; i < 256 ; i ++){
    valeurs.push(i);
}
valeurs.push(Math.floor(Math.random() * 256));
valeurs.push(Math.floor(Math.random() * 256));
valeurs.push(Math.floor(Math.random() * 256));
valeurs.push(Math.floor(Math.random() * 256));


// creation des personnes
for(var i = 0 ; i < 26 ; i ++){
    personnes.push([]);
}

var idPersonne = 0;
while(valeurs.length > 0){
    // extraction d'une valeur dans le tableau de valeurs
    var debut = Math.floor(Math.random() * valeurs.length); 
    var valeur = valeurs.splice(debut, 1);
    // splice retourne un tableau
    // du coup je recupère l'élément 0 de ce tableau 
    // et je le stock dans la même variable
    // en somme j'écrase le contenu de la variable par une partie 
    // de l'ancien contenu de la variable
    valeur = valeur[0];

    // attribution de la valeur extrete à une personne aléatoire
    personnes[idPersonne].push("0x" + valeur.toString(16));

    if(personnes[idPersonne].length == 10){
       idPersonne ++
    }
}

console.log(valeurs);
console.log(personnes);









