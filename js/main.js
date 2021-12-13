


const form = document.querySelector('#create-account-form');
const usernameInput = document.querySelector('#username')
const emailInput = document.querySelector('#email');
const passwordInput = document.querySelector('#password');
const confirmPasswordInput = document.querySelector('#confirm-password');

form.addEventListener('submit', (event)=>{
    //prevent submit form
    // event.preventDefault();

    validateForm();


//Conditions d'envoi (SUBMIT) du formulaire //si toutes les INPUTS sont TRUE le formulair est Envoyé, sinon Non
    if(isFormValid()==true){
        form.submit();
    }else {
        event.preventDefault();
    }


});


//condition de validation de chaque INPUT
function isFormValid(){
    const inputContainers = form.querySelectorAll('.input-group');
    let result=true;
    
    inputContainers.forEach((container)=>{
        if(container.classList.contains('error')){
            result = false;
        }
    });

    return result;
}


function validateForm(){
    //USERNAME
    //Alerte input vide
    if(usernameInput.value.trim()==''){
        setError(usernameInput, 'Name can not be empty');

    //Alerte input <5 ou >15 characteres
    } else if(usernameInput.value.trim().length <5 || usernameInput.value.trim().length >15){
        setError(usernameInput, 'Name must be min 5 and max 15 characters');
    } else {
        setSuccess(usernameInput);
    }

    //EMAIL
    if(emailInput.value.trim()==''){
        setError(emailInput, 'Provide email address');
    } else if(isEmailValid(emailInput.value)){
        setSuccess(emailInput);
    } else {
        setError(emailInput, 'Provide valid email address');
    }

    //PASSWORD
    if(passwordInput.value.trim()==''){
        setError(passwordInput, 'Password can not be empty');
    } else if (passwordInput.value.trim().length <6 || passwordInput.value.trim().length >20){
        setError(passwordInput, 'Password min 6 and max 20 characters');
    } else {
        setSuccess(passwordInput);
    }
    

    //CONFIRM PASSWORD
    if(confirmPasswordInput.value.trim()==''){
        setError(confirmPasswordInput, 'Password can not be empty')
    } else if(confirmPasswordInput.value !== passwordInput.value){
        setError(confirmPasswordInput, 'Password does not match');
    } else{
        setSuccess(confirmPasswordInput);
    }
}

//affichage message d'erreur 
function setError(element, errorMessage){
    const parent = element.parentElement;
    if(parent.classList.contains('success')){
        parent.classList.remove('success');
    }
    parent.classList.add('error');
    
    const paragraph = parent.querySelector('p');
    paragraph.textContent = errorMessage;
}

//affichage message de succes 
function setSuccess(element){
    const parent = element.parentElement;
    if(parent.classList.contains('error')){
        parent.classList.remove('error')
    }
    parent.classList.add('success')
}


//conditions de reuissite pour EMAIL
function isEmailValid(email){
    const reg = /^[a-zA-Z0-9.-_]+[@]{1}[a-zA-Z0-9.-_]+[.]{1}[a-z]{2,10}$/;
    return reg.test(email);
}



















// /*==================== DEBUT VERIFICATION ADRESS MAIL ==========================================*/
// let form = document.querySelector('#monFormulaire');

// form.mail.addEventListener('change', function() {
//     validEmail(this);
// });


// // //------- validation email-----------------------------------------------------//
// const validEmail=function(inputEmail){
//     //creation de la regExp pour validation email 
//     let emailRegExp = new RegExp('^[a-zA-Z0-9.-_]+[@]{1}[a-zA-Z0-9.-_]+[.]{1}[a-z]{2,10}$', 'g');

//     //on test l'expression reguliere 
//     let testEmail = emailRegExp.test(inputEmail.value);

//     //recuperation de la balise small
//     let small = inputEmail.nextElementSibling;


//     if (testEmail == true){
//         small.innerHTML = "L'adresse mail est valide.";
//         small.style.color="green";
//         return true;
//     } else {
//         small.innerHTML = "L'adresse mail n'est pas valide.";
//         small.style.color="red";
//         return false;
//     }
// };


// //ecouter la soumission du formlaire 
// form.addEventListener('submit', function(e) {

//     if( validEmail(form.mail) == true){
//         console.log('email valide');
//     }else {
//         e.preventDefault();
//     }
// });
/*==================== FIN VERIFICATION ADRESS MAIL ==========================================*/



