
// ************************************************* FOCUS
const containerName=document.getElementById("con-name");
const focusName = document.getElementById("name");
focusName.addEventListener('focus', function(event) {
  containerName.classList.add("focus");
});
focusName.addEventListener('blur', function(event) {
  containerName.classList.remove("focus");
});
// ************
const containerMail=document.getElementById("con-mail");
const focusMail = document.getElementById("email");
focusMail.addEventListener('focus', function(event) {
  containerMail.classList.add("focus");
  
});
focusMail.addEventListener('blur', function(event) {
  containerMail.classList.remove("focus");
  
});
// ***********
const containerPassword=document.getElementById("con-password");
const focusPassword = document.getElementById("password");
focusPassword.addEventListener('focus', function(event) {
  containerPassword.classList.add("focus");
  
});
focusPassword.addEventListener('blur', function(event) {
  containerPassword.classList.remove("focus");
  
});
// ******************************************************

const form = document.getElementById("myForm");
form.addEventListener("submit", function(event) {
  event.preventDefault();
  let hasError = false;
  // Validation
  const name = document.getElementById("name").value;
  const nameError = document.getElementById("nameError");
  const conName=document.getElementById('con-name');

    // Test de la longueur du nom
    if (name.length < 4 || name.length > 21) {
      nameError.textContent = "Name must be between 4 and 20 characters long.";
      nameError.style.display = "block";
      conName.classList.add('border-error');
      hasError = true; 
    }

    // Test si le nom commence par une lettre
    else if (!/^[A-Za-z]/.test(name)) {
      nameError.textContent = "Name must start with an alphabet character.";
      conName.classList.add('border-error');
      nameError.style.display = "block";
      hasError = true;
    }
    // Test si le nom ne contient que des lettres, chiffres et espaces
    else if (!/^[A-Za-z0-9\s]+$/.test(name)) {
      nameError.textContent = "Name must contain only letters, numbers, and spaces.";
      conName.classList.add('border-error');
      nameError.style.display = "block";
      hasError = true;
    }
    else{
      nameError.textContent = "";
      nameError.style.display = "none";
      conName.classList.remove('border-error');
    }
// **************************************************************mail test***********************************************************************

 // Validation
 const email = document.getElementById("email").value;
 const emailError = document.getElementById("emailError");
 const conMail=document.getElementById('con-mail');
 
 // Séparation du nom d'utilisateur et du domaine
 const [username, domain] = email.split("@");

 // Test si l'email commence par un chiffre ou une lettre
 if (!/^[A-Za-z0-9]/.test(email)) {
   emailError.textContent = "Email must start with a number or alphabet character.";
   conMail.classList.add('border-error');
   emailError.style.display = "block";
   hasError = true;
 }

 // Test si l'email ne contient pas d'espace
 else if (/\s/.test(email)) {
   emailError.textContent = "Email cannot contain spaces.";
   conMail.classList.add('border-error');
   emailError.style.display = "block";
   hasError = true;
 }
 // Test si le nom d'utilisateur avant @ a une longueur >= 4
 else if (username.length < 4) {
   emailError.textContent = "Username part of the email must be at least 4 characters long.";
   conMail.classList.add('border-error');
   emailError.style.display = "block";
   hasError = true;
 }

 // Test si le nom d'utilisateur et le domaine contiennent uniquement des caractères valides
 else if (!/^[A-Za-z0-9_.-]+$/.test(username) || !/^[A-Za-z0-9-.]+$/.test(domain)) {
   emailError.textContent = "Email contains invalid characters.";
   conMail.classList.add('border-error');
   emailError.style.display = "block";
   hasError = true;
 }
 else{
  emailError.textContent = "";
  emailError.style.display = "none";
  conMail.classList.remove('border-error');
 }
// ****************************************************************************** password validation *********************************************
const password = document.getElementById("password").value;
const passwordError = document.getElementById("passwordError");
const conPassword=document.getElementById('con-password');
if (password.trim() === "") {
  passwordError.textContent = "Password is required.";
  passwordError.style.display = "block";
  conPassword.classList.add('border-error');
  hasError = true;
} else if (password.length < 8) {
  passwordError.textContent = "Password must be at least 8 characters long.";
  passwordError.style.display = "block";
  conPassword.classList.add('border-error');
  hasError = true;
} else if (!/(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]/.test(password)) {
  passwordError.textContent = "Password must contain at least one lowercase letter, one uppercase letter, one number, and one special character.";
  passwordError.style.display = "block";
  conPassword.classList.add('border-error');
  hasError = true;
} else {
  passwordError.textContent = "";
  passwordError.style.display = "none";
  conPassword.classList.remove('border-error');
}

// ************************************************************************************************************************************************
  if(!hasError){
    form.submit();
  }
  });




// *****************************************************************     reset    ***********************************************************************************
form.addEventListener("reset", function(event){
  const name = document.getElementById("name").value;
  const nameError = document.getElementById("nameError");
  const conName=document.getElementById('con-name');
  // *******
  nameError.textContent = "";
  nameError.style.display = "none";
  conName.classList.remove('border-error');
  // ***********************************************
  const email = document.getElementById("email").value;
  const emailError = document.getElementById("emailError");
  const conMail=document.getElementById('con-mail');
  // *******
  emailError.textContent = "";
  emailError.style.display = "none";
  conMail.classList.remove('border-error');
  // ***************************************************
  const password = document.getElementById("password").value;
  const passwordError = document.getElementById("passwordError");
  const conPassword=document.getElementById('con-password');
  // **********
  passwordError.textContent = "";
  passwordError.style.display = "none";
  conPassword.classList.remove('border-error');
  // ************************************************
  form.reset();

});