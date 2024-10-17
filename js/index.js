var emailLogin = document.getElementById("emailLogin");
var passLogin = document.getElementById("passLogin");
var nameSignup = document.getElementById("nameSignup");
var emailSignup = document.getElementById("emailSignup");
var passSignup = document.getElementById("passSignup");
var nameUsed = document.getElementById("nameUsed");
var emailExists = document.getElementById("emailExists");
var notvalidEmail1 = document.getElementById("notvalidEmail1");
var success = document.getElementById("success");
var inputsReq = document.getElementById("inputsReq");
var inputsReq2 = document.getElementById("inputsReq2");
var signIn = document.getElementById("signIn");
var signUp = document.getElementById("signUp");
var mainPage = document.getElementById("mainPage");
var nameMainpage = document.getElementById("h1");
var incorrectE=document.getElementById("incorrectE")
var accountsList = [];

var emailRegex = /^\w{5,15}@(gmail|yahoo)\.com$/i;
if (localStorage.getItem("accounts") != null) {
  accountsList = JSON.parse(localStorage.getItem("accounts"));
}
console.log(accountsList);

function validEmail() {
  if (emailRegex.test(emailSignup.value) == 0) {
    notvalidEmail.classList.remove("d-none");
    return 0;
  } else {
    notvalidEmail.classList.add("d-none");
    return 1;
  }
}
function validEmail2() {
  if (emailRegex.test(emailLogin.value) == 0) {
    notvalidEmail1.classList.remove("d-none");
    return 0;
  } else {
    notvalidEmail1.classList.add("d-none");
    return 1;
  }
}
function validAccount() {
  var f1;
  for (var i = 0; i < accountsList.length; i++) {
    if (nameSignup.value == accountsList[i].name) {
      nameUsed.classList.remove("d-none");
      success.classList.add("d-none");
      emailExists.classList.add("d-none");
      inputsReq.classList.add("d-none");
      return false;
    }
  }
  return true;
}
function validName() {
  var f2;

  for (var i = 0; i < accountsList.length; i++) {
    if (emailSignup.value == accountsList[i].email) {
      nameUsed.classList.add("d-none");
      success.classList.add("d-none");
      emailExists.classList.remove("d-none");
      inputsReq.classList.add("d-none");
      return false;
    }
  }
  return true;
}
function addAccount() {
  var account = {
    name: nameSignup.value,
    email: emailSignup.value,
    pass: passSignup.value,
  };
console.log("hhhhhhhhhhhh");

  if (
    nameSignup.value == 0 ||
    emailSignup.value == 0 ||
    passSignup.value == 0
  ) {
    inputsReq.classList.remove("d-none");
    success.classList.add("d-none");
    nameUsed.classList.add("d-none");
    emailExists.classList.add("d-none");
  } else {
    if (validEmail()) {
      if (validAccount() && validName()) {
        nameUsed.classList.add("d-none");
        emailExists.classList.add("d-none");
        inputsReq.classList.add("d-none");
        accountsList.push(account);
        localStorage.setItem("accounts", JSON.stringify(accountsList));
        success.classList.remove("d-none");
        clearInputs();
        console.log(accountsList);
      }
    }
  }
}

function clearInputs() {
  nameSignup.value = null;
  emailSignup.value = null;
  passSignup.value = null;
  emailLogin.value = null;
  passLogin.value = null;
}
function signInPage() {
  signUp.classList.add("d-none");
  signIn.classList.remove("d-none");
}
function signInfo() {
  if (emailLogin.value == 0 || passLogin.value == 0) {
    inputsReq2.classList.remove("d-none");
  } else {
    if (validEmail2()) {
      if (correctAccount()) {
        incorrectE.classList.add("d-none");
         signIn.classList.add("d-none");
         mainPage.classList.remove("d-none");
         clearInputs()
      }else{
incorrectE.classList.remove("d-none")
      }
    }
  }
}
function correctAccount() {
  for (var i = 0; i < accountsList.length; i++) {
    if (
      emailLogin.value == accountsList[i].email &&
      passLogin.value == accountsList[i].pass
    ) {
      nameMainpage.innerHTML = accountsList[i].name;
     return true
    } 

  }
  return false
}
function signupPage() {
  signUp.classList.remove("d-none");
  signIn.classList.add("d-none");
}
function logout(){
  mainPage.classList.add("d-none")
  signIn.classList.remove("d-none")
}