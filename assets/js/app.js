
function addParticipant ()
{
    event.preventDefault();
    //Je recupere l'input texte
    const nameinputElt = document.getElementById('nameInput');

//je créé mon prénom
const participantName= nameinputElt.value;
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

