
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
<li>${participantName}</li>
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


const participants = ["Julien", "Nicolas", "Paul" ,"Tom" , "Marie" , "Thomas" ]
const numberGroups = 3;


//Apllique une fonction sur chaque elements du tableau 
const sorted = participants
    .map((participant) => ({ name : participant, sort: Math.random() }))
    .sort((a, b) => a.sort - b.sort)
    .map((participant) => participant.name)

    console.log(sorted)
//Je veux trier un tableau de nom aleatoirement 

/*const groupsArr = [] ;
for ( let i = 0 ; i< numberGroups ; i++) {
    groupsArr.push([]);
}
var groups = groupsArrIndex = 0;
while (sorted.length > 0) {
    groupsArr(groupsArrIndex].push(sorted.pop());
}
console.log(groupsArr ) ; 
*/

const groupsArr = [];
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
console.log(groupsArr)
// Je veux générer des groupes de nom