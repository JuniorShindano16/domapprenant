let newname= document.getElementById("newname")
let newlastname= document.getElementById("newlastname")
let newfirstname= document.getElementById("newfirstname")
let newcountry= document.getElementById("newcountry")
let newgender= document.getElementById("newgender")
let newgit=document.getElementById("newgit")
let formulaire = document.getElementById("form")
let tableBody = document.querySelector('table tbody')
let submitBtn = document.getElementById('btnsubmit')

let learnerDeletednom= null
let learnerDeletedpost= null
let learnerDeletedpre= null
let learnerDeletedpays= null
let learnerDeletedgenre= null
let learnerDeletedgit= null

let editionLearner = null
let editMode = false

editModeEnabled(editMode)



let learners = []

function loadLearnerInTable(){
        tableBody.innerHTML=''

        for (const apprennant of learners){
            let model= `<tr>
            <td>${apprennant.nom}</td>
            <td>${apprennant.postnom}</td>
            <td>${apprennant.prenom}</td>
            <td>${apprennant.pays}</td>
            <td>${apprennant.genre}</td>
            <td>${apprennant.github}</td>
            <td>
                <button onclick="deleteLearner(this)" data-nom="${apprennant.nom}" data-postnom="${apprennant.postnom}" data-prenom="${apprennant.prenom}" data-pays="${apprennant.pays}" data-genre="${apprennant.genre}" data-githube="${apprennant.github}">Supprimmer</button>
                <button data-nom="${apprennant.nom}" data-postnom="${apprennant.postnom}" data-prenom="${apprennant.prenom}" data-pays="${apprennant.pays}" data-genre="${apprennant.genre}" data-githube="${apprennant.github}" onclick="editLearner(this)">Modifier</button>
            </td>
        </tr>`

        tableBody.innerHTML+= model
        }

}

loadLearnerInTable()
 

form.addEventListener('submit', function(e){
    e.preventDefault();

    let newnameValue = newname.value
    let newfirstnameValue= newfirstname.value
    let newlastnameValue = newlastname.value
    let newcountryValue=newcountry.value
    let newgenderValue= newgender.value
    let newgitValue=newgit.value 

    if (editMode){
        updateLeaner(newnameValue,newfirstnameValue,newlastnameValue,newcountryValue,newgenderValue,newgitValue)
    } else {

        addLearner(newnameValue,newfirstnameValue,newlastnameValue,newcountryValue,newgenderValue,newgitValue)
    }
})

function addLearner (){
    

    let newleaner = {
        'nom': newname.value,
    'postnom': newlastname.value,
    'prenom': newfirstname.value,
    'pays':newcountry.value,
    'genre':newgender.value,
    'github':newgit.value 

    };

    learners.push(newleaner);
    loadLearnerInTable()
    newname.value=''
        newlastname.value=''
        newfirstname.value=''
        newcountry.value=''
        newgender.value=''
        newgit.value =''
}

function updateLeaner (){
    learners.find((t) => t.nom == editionLearner.nom).nom = newname.value
    learners.find((t) => t.nom == editionLearner.nom).postnom =  newlastname.value
    learners.find((t) => t.nom == editionLearner.nom).prenom=  newfirstname.value
    learners.find((t) => t.nom == editionLearner.nom).pays =  newcountry.value
    learners.find((t) => t.nom == editionLearner.nom).genre =  newgender.value
    learners.find((t) => t.nom == editionLearner.nom).github =  newgit.value

    loadLearnerInTable()

    editModeEnabled(false)
}

function deleteLearner(e){
    e.parentNode.parentNode.remove()

    newname.value=e.dataset.nom
    newlastname.value=e.dataset.postnom
    newfirstname.value=e.dataset.prenom
    newcountry.value=e.dataset.pays
    newgender.value=e.dataset.genre
    newgit.value =e.dataset.github
    learnerDeletednom=learners.find((t) => t.nom == e.dataset.nom).nom
    learnerDeletedpost= learners.find((t) => t.nom == e.dataset.nom).postnom
    learnerDeletedpre= learners.find((t) => t.nom == e.dataset.nom).prenom
    learnerDeletedpays= learners.find((t) => t.nom == e.dataset.nom).pays
    learnerDeletedgenre= learners.find((t) => t.nom == e.dataset.nom).genre
    learnerDeletedgit= learners.find((t) => t.nom == e.dataset.nom).github

    //learners.splice (learners.indexOf(learnerDeleted),1)
    let learnertodelete = {
        'nom': learnerDeletednom,
    'postnom': learnerDeletedpost,
    'prenom': learnerDeletedpre,
    'pays':learnerDeletedpays,
    'genre':learnerDeletedgenre,
    'github':learnerDeletedgit 
    };

   for (const lrnr of learners) {
        if (learnertodelete.nom==lrnr.nom){
            learners.splice(learners.indexOf(lrnr),1)
        }

        newname.value=''
        newlastname.value=''
        newfirstname.value=''
        newcountry.value=''
        newgender.value=''
        newgit.value =''
    
   }


    newname.value=''
    newlastname.value=''
    newfirstname.value=''
    newcountry.value=''
    newgender.value=''
    newgit.value =''
     learnerDeletednom= null
    learnerDeletedpost= null
    learnerDeletedpre= null
    learnerDeletedpays= null
   learnerDeletedgenre= null
    learnerDeletedgit= null

   
   
}



function editLearner(e) {
    editModeEnabled(true)
        newname.value=e.dataset.nom
        newlastname.value=e.dataset.postnom
        newfirstname.value=e.dataset.prenom
        newcountry.value=e.dataset.pays
        newgender.value=e.dataset.genre
        newgit.value =e.dataset.github
    editionLearner = learners.find((t) => t.nom == e.dataset.nom)
console.log (editionLearner)

}

function editModeEnabled(enabled) {
    if(enabled) {
        editMode = true
        submitBtn.innerText = "Modifier"
    } else {
        editMode = false
        submitBtn.innerText = "Ajouter"
        editionLearner = null
        newname.value=''
        newlastname.value=''
        newfirstname.value=''
        newcountry.value=''
        newgender.value=''
        newgit.value =''
    }
}

