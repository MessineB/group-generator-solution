
function addParticipant ()
{

//je créé mon prénom
const participantName= "Prénom";
//je créé un element li qui contient mon prenom
const participantElt= `
<li>${participantName}</li>
`
;
//je récupère l' element ul qui contient la list des participants
const participantListElt=document.getElementById("participantList");
//j'ajoute mon element li à l'element ul
participantListElt.innerHTML=participantListElt.innerHTML + participantElt;

}

addParticipant();