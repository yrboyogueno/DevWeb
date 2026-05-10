//Identifiants de test
const valideEmail = "test@csf.bc.ca";
const validePassword = "Test@123";


// Récupération des boutons
const BtnLogin = document.getElementById("btnLogin");
const BtnRegister = document.getElementById("btnRegister");

//  Récupération des conteneurs de formulaires
const LoginContainer = document.getElementById("loginFormContainer");
const RegisterContainer = document.getElementById("registerFormContainer");


//  Récupération des données
const LoginForm = document.getElementById("loginForm");
const RegisterForm = document.getElementById("registerForm");

//  Récupération des erreurs
const LoginError = document.getElementById("loginError");
const RegisterError = document.getElementById("registerError")


//Champs formulaire de connexion
const LoginEmail = document.getElementById("loginEmail");
const LoginPassword = document.getElementById("loginPassword");



//Champs du formulaire d'inscription
const RegisterEmail = document.getElementById("registerEmail");
const RegisterPassword = document.getElementById("registerPassword");


//  Quand on clique sur "Se connecter", on fait apparître le formulaire
BtnLogin.addEventListener("click", () => {
    LoginContainer.classList.remove("hidden");
    RegisterContainer.classList.add("hidden");
    LoginError.textContent = "";
});


//  Quand on clique sur "S'inscrire", on fait apparaître le formulaire
BtnRegister.addEventListener("click", () => {
    RegisterContainer.classList.remove("hidden");
    LoginContainer.classList.add("hidden");
    LoginError.textContent = "";
});



//  Fonction de validation de l'email
function validateEmail(email) {
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return emailRegex.test(email.trim());
}


// Fonction de validation du mot de passe
function validatePassword (password) {
    const miniLength = /.{6,}/;
    const lowercase = /[a-z]/;
    const uppercase = /[A-Z]/;
    const number = /[0-9]/;
    const specialChar = /[!@#$%?&*(),.?":{}|<>]/;


    return (
        miniLength.test(password) &&
        lowercase.test(password) &&
        uppercase.test(password) &&
        number.test(password) &&
        specialChar.test(password)
    );
}



//Contrôle des données du formulaire d'inscription
RegisterForm.addEventListener("submit", (event) => {
    event.preventDefault();     //Empêche l'envoi automatique du formulaire

    //  Récupération des valeurs des formulaires
    const email = document.getElementById("registerEmail").value;
    const password = document.getElementById("registerPassword").value;
    
    //  Vérification de l'email
    if (!validateEmail(email)) {
        RegisterError.textContent = "Adresse email invalide.";
        return;
    }

    //Vérification mot de passe
    if (!validatePassword(password)) {
        registerError.textContent = "Le mot de passe doit contenir au moins 6 caractères, une minuscule, une majuscule, un chiffre et un caractère spécial.";
        return;
    }

    //Si tout est ok!!!
    RegisterError.textContent = "";
    alert("Le formulaire d'inscription est valide et prêt à l'envoi");
}

)




//  Contrôle des données du formulaire de connexion
LoginForm.addEventListener("submit", (event) => {
    event.preventDefault();
    //  Récupération des valeurs des formulaires
    const email = document.getElementById("loginEmail").value;
    const password = document.getElementById("loginPassword").value;

        //  Vérification de l'email
    if (!validateEmail(email)) {
        LoginError.textContent = "Adresse email invalide.";
        return;
    }

    //Vérification mot de passe
    if (!validatePassword(password)) {
        LoginError.textContent = "Le mot de passe doit contenir au moins 6 caractères, une minuscule, une majuscule, un chiffre et un caractère spécial.";
        return;
    }


    if (email == valideEmail && password == validePassword) {
        LoginError.textContent = "";
        window.location.href = "HTML/profil.html";
    }else {
        LoginError.textContent = "Identifiants incorrects" ;
    }

}
)






