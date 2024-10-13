
// *******************************************************  FOCUS ON INPUT 
// ************ MAIL 
const containerMail=document.getElementById("con-mail");
const focusMail = document.getElementById("email");
focusMail.addEventListener('focus', function(event) {
  containerMail.classList.add("focus");
  
});
focusMail.addEventListener('blur', function(event) {
  containerMail.classList.remove("focus");
  
});
// *********** PASSWORD 
const containerPassword=document.getElementById("con-password");
const focusPassword = document.getElementById("password");
focusPassword.addEventListener('focus', function(event) {
  containerPassword.classList.add("focus");
  
});
focusPassword.addEventListener('blur', function(event) {
  containerPassword.classList.remove("focus");
  
});


// **************** TESTE OF VALIDATION  ****************


const form = document.getElementById("myForm");
form.addEventListener("submit", function(event) {
  event.preventDefault();
  let hasError = false;
  // Validation
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