
var singinName = document.getElementById("singinName");
var singinPassword = document.getElementById("singinPassword");
var singEmail = document.getElementById("singEmail");
var myBtnS = document.querySelector(".btn-sign");
var alerts = document.getElementById("alert-2");
var usersInfo ;


//   localStorage   >>>>>>>>>>>>>>>

if(localStorage.getItem('users') == null){
  usersInfo = [];
}else{
  usersInfo =  JSON.parse(localStorage.getItem('users'));
}

//     ADD    >>>>>>>>>>>>>>>>>>

function signup(){

userInputsValidation();
isExist();

if(userInputsValidation()== true && isExist()== false){
  var user = {
    name:singinName.value,
    email:singEmail.value,
    password:singinPassword.value,
  }
  usersInfo.push(user );
  localStorage.setItem('users', JSON.stringify(usersInfo));

  var confirMsg = document.getElementById('confirMsg');
  confirMsg.classList.replace('d-none' ,'d-block');

  var signIn = document.getElementById('signIn');
  signIn.classList.replace('d-none' ,'d-block');

}else{
var tryAginMsg =document.getElementById('tryAginMsg');
tryAginMsg.classList.replace('d-none' ,'d-block')
}
}

//   <<<<<<<<<<<<<  NameValidation   >>>>>>>>>>>>>>>>>>>....

function userNameValidation(){
var alertName = document.getElementById('alertName');
alertName.classList

var regex=/^[A-Za-z]{3,10}(\s?[A-Za-z]{3,10})?$/ ;
if(regex.test(singinName.value)== true && singinName.value !='')
  {
  singinName.classList.add('is-valid');
  singinName.classList.remove('is-invalid');
  alertName.classList.replace('d-block','d-none');
  return true

}else{
 singinName.classList.add('is-invalid');
  singinName.classList.remove('is-valid');
  alertName.classList.replace('d-none','d-block');
  return false
}

}

///    PasswordValidation  >>>>>>>>>>>>>>>

function userPasswordValidation(){
  var alertPassword = document.getElementById('alertPassword');
var regex = /^.{5,15}$/ ;
if(regex.test(singinPassword.value == true && singinPassword.value != ''))
  {
    singinPassword.classList.add('is-valid');
    singinPassword.classList.remove('is-invalid');
    alertPassword.classList.replace('d-block','d-none');
    return true
}else{
  singinPassword.classList.add('is-invalid');
  singinPassword.classList.remove('is-valid');
  alertPassword.classList.replace('d-none','d-block');
  return false
}
}

//           >>>>>>>>>>>>>>>>>>>>>>>>>

function userEmailValidation(){
var alertEmail = document.getElementById('alertEmail');
var regex = /@[a-z]{5,10}(\.com)$/ ;
if(regex.test(singEmail.value) == true && singEmail.value !='' )
  {

    singEmail.classList.add('is-valid');
    singEmail.classList.remove('is-invalid');
    alertEmail.classList.replace('d-block','d-none');
    return true
}else{
  singEmail.classList.add('is-invalid');
  singEmail.classList.remove('is-valid');
  alertEmail.classList.replace('d-none','d-block');
  return false
}

}


//   Validation   >>>>>>>>>>>>>>>>>>

function userInputsValidation(){
  userNameValidation();
  userPasswordValidation();
  userEmailValidation();
if(
  userNameValidation() == true &&
  userPasswordValidation() == true &&
  userEmailValidation() == true){
    return true;
  }else{
    return false ;
  }
}



function isExist(){
var accountExisMsg = document.getElementById('accountExisMsg');
for(var i=0 ; i<usersInfo.length ;i++ ){

  if(usersInfo[i].name == singinName.value||
     usersInfo[i].email == singEmail.value)
{
  singinName.classList.remove('is-valid');
  singEmail.classList.remove('is-valid');
  accountExisMsg.classList.replace('d-none','d-block');
  return true ;
}else{
  return false ;
}
}
}

///<<<<<<<<<<<<<<<<<<<<<<<<<         >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
//               <<<<<<<<<    LOGIN    >>>>>.


var loginEmail = document.getElementById('loginEmail');
var loginPassword = document.getElementById('loginPassword');
// var loginBtn = document.getElementById('loginBtn');
var emailMas = document.getElementById('emailMas');

var userName = localStorage.getItem('sessionUserName');

if (document.getElementById('loginBtn')) {
  document.getElementById('loginBtn').addEventListener("click" ,function (){

  if(loginEmail.value =="" || loginPassword.value == ""){
  var fillMas = document.getElementById('fillMas');
  fillMas.classList.replace('d-none', 'd-block');
  return false ;
  }


  for(var i=0 ;i< usersInfo.length ; i++){
    if(loginEmail.value ==  usersInfo[i].email &&
      loginPassword.value ==  usersInfo[i].password ){
        
      var y = usersInfo[i].name ;
    localStorage.setItem('sessionUserName',y );
    // loginBtn.setAttribute('href','welcome.html');
    location.href = "welcome.html";
    return;
  } else if (loginEmail.value !=  usersInfo[i].email &&
    loginPassword.value !=  usersInfo[i].password && i === usersInfo.length - 1){
      console.log('error');
      
      emailMas.classList.replace('d-none','d-block');
    }
  }
  })
}



///<<<<<<<<<<<<<<<<<<<<<<<<<         >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
//               <<<<<<<<<    WELCOME    >>>>>.


function displayWelcomeUser(){

  document.getElementById("user_welcome").innerHTML = "Welcome"  +  userName ;

}


function logout(){
  localStorage.removeItem('sessionUserName');
}



