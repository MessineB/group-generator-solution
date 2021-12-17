function triB (tab) { 
    let A;
    let B;
    let TEMPO;

    if ( Array.isArray(tab) === true ) { // On verifie que l'on rentre dans la fonction un tableau 
        if (tab.length == 0 || tab.length == 1 )  // On teste la taille du tableau si il est nul on fait rien, si on a la taille de 1 alors on a pas besoin de trier 
        {
            return;
        }
        for (A = tab.length - 1 ; A != 0 ; A--) {
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



function addParticipant ()
{
    event.preventDefault();
    //Je recupere l'input texte
    const nameinputElt = document.getElementById('nameInput');

//je créé mon prénom
const participantName= nameinputElt.value.trim();

//Test si c'est vide 
if ( participantName === '') {
    alert ("QUOI ?!?")
    return
}
//je créé un element li qui contient mon prenom
const participantElt= `
<li class="participant">${participantName} <i class="fas fa-trash delete"></i></li>
`
;
//je récupère l' element ul qui contient la list des participants
const participantListElt=document.getElementById("participantList");
//j'ajoute mon element li à l'element ul
participantListElt.innerHTML=participantListElt.innerHTML + participantElt;
// !!!!!!   Pour vider l'input sur l'HTML une fois que la saisie est faite  !!!!!
nameinputElt.value = "";
}
const addNameFormeElt = document.getElementById("addNameForm");
addNameFormeElt.addEventListener("submit" , addParticipant) ;

const participants = ["Julien", "Nicolas", "Paul" ,"Tom" , "Marie" , "Thomas", "Vincent","Agnes" ]
const numberGroups = document.getElementById('groupnumber').value;

const generateForm = document.getElementById('generateGroup')
generateForm.addEventListener('submit', function(event) {
    event.preventDefault();
    const numberGroups = parseInt ( document.getElementById('groupnumber').value)
    const participants = [];
    const participantsElt = document.querySelectorAll('.participant');
    participantsElt.forEach(element => participants.push(element.textContent))
    if ( numberGroups > participants.length) {
        alert ( "Mettre un nombre de participants superieur ou egal aux nombre de groupes")
        return
    }
    if ( participants.length == 0 ) {
        alert ( "Pas de participants")
    }
    if ( numberGroups <= 0 ) {
        alert ("Nombre de groupes negatif ou nul")
    }
    if ( Number.isNaN(numberGroups)) {
        alert ("Le nombre de groupe doit etre un nombre")
    }
    else {
    GenerateGroups(participants , numberGroups)
}
})
// Recuperer le nombre de groupes.

/**
* @param {array} participants
* @param {int} numberGroups
* 
*/
function GenerateGroups (participants , numberGroups) {

//Apllique une fonction sur chaque elements du tableau 
const sorted = participants
/*
    .map((participant) => ({ name : participant, sort: Math.random() }))
    .sort((a, b) => a.sort - b.sort)
    .map((participant) => participant.name)
*/
triB(participants)


    console.log(sorted)
//Je veux trier un tableau de nom aleatoirement 

const groupsArr = [] ;
/*for ( let i = 0 ; i< numberGroups ; i++) {
    groupsArr.push([]);
}
var groups = groupsArrIndex = 0;
while (sorted.length > 0) {
    groupsArr(groupsArrIndex].push(sorted.pop());
}
console.log(groupsArr ) ; 
*/


for(let i = 0; i < numberGroups; i++){
    groupsArr.push([]);
}

var groups = groupsArrIndex = 0;
while(sorted.length > 0){
    //je prends le dernier élément du tableau sorted
    //et je l'ajoute dans le groupe correspondant à groupsArrIndex
    groupsArr[groupsArrIndex].push(sorted.pop());
    groupsArrIndex++ ;
    if (groupsArrIndex >= groupsArr.length) {
        groupsArrIndex = 0;
    }
}
const groupsListElt = document.getElementById("groupList");
for ( let groupIndex = 0; groupIndex < groupsArr.length ; groupIndex++){
    let groupElt = `
    <div class="card bg-light mb-3" style="max-width: 20rem;">
       <div class="card-header">Groupe ${groupIndex + 1}</div>
       <div class="card-body">
       <ul> `
       ;
    for (var participantIndex = 0 ; participantIndex < groupsArr[groupIndex].length; participantIndex++  ) {
        groupElt += `<li>${groupsArr[groupIndex] [participantIndex] } </li>` }
       groupElt += `
                    </ul>
                </div>
            </div>`            
    ;
    groupsListElt.innerHTML += groupElt;
}
}

let deleteElt = document.getElementById("participantList")

deleteElt.addEventListener("click", e =>  {
    if (e.target.classList.contains("delete")){
        e.target.parentNode.remove();
    }
}
     

)
