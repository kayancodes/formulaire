

/*==================== DEBUT VERIFICATION DES SAISIES==========================================*/

var b_prenom=false; 
var b_nom=false; 
var b_email=false;
var b_number=false;

function envoyer(){
    if(b_prenom==true && b_nom==true && b_email==true && b_number==true){
        document.getElementById("submit__message").innerText = "Envoi serveur";
        // document.getElementById("monFormulaire").submit();
    } else {
        document.getElementById("submit__message").innerText = "Le formulaire n'est pas complet";
    }
}



/*==================== FIN VERIFICATION DES SAISIES==========================================*/










/*==================== DEBUT FORMULAIRE BOUTON ==========================================*/
const btn = document.querySelector('button');
const content = document.querySelector('.formulaire__inner');
const img = document.querySelector('.formulaire__arrow');

btn.addEventListener('click', () => {
    content.classList.toggle('is-visible');
    img.classList.toggle('rotated')
})
/*==================== FIN FORMULAIRE BOUTON ==========================================*/









// /*==================== DEBUT VERIFICATION ADRESS MAIL ==========================================*/
let form = document.querySelector('#monFormulaire');

form.mail.addEventListener('change', function() {
    validEmail(this);
});


// //------- validation email-----------------------------------------------------//
const validEmail=function(inputEmail){
    //creation de la regExp pour validation email 
    let emailRegExp = new RegExp('^[a-zA-Z0-9.-_]+[@]{1}[a-zA-Z0-9.-_]+[.]{1}[a-z]{2,10}$', 'g');

    //on test l'expression reguliere 
    let testEmail = emailRegExp.test(inputEmail.value);

    //recuperation de la balise small
    let small = inputEmail.nextElementSibling;


    if (testEmail == true){
        small.innerHTML = "L'adresse mail est valide.";
        small.style.color="green";
        return true;
    } else {
        small.innerHTML = "L'adresse mail n'est pas valide.";
        small.style.color="red";
        return false;
    }
};


//ecouter la soumission du formlaire 
form.addEventListener('submit', function(e) {

    if( validEmail(form.mail) == true){
        console.log('email valide');
    }else {
        e.preventDefault();
    }
});



/*==================== FIN VERIFICATION ADRESS MAIL ==========================================*/





/*==================== DEBUT SCROLL REVEAL ANIMATION ====================*/ 
const sr = ScrollReveal({
    distance: '60px',
    duration: 2500,
    // reset:true
})

sr.reveal(`.acheter__vente-texte`,{
    origin:'bottom',
    interval:100,
})
/*==================== FIN SCROLL REVEAL ANIMATION ====================*/ 
