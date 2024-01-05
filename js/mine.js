
var registerName = document.getElementById("registerName") ;
var registerEmail = document.getElementById("registerEmail") ; 
var registerPassword = document.getElementById("registerPassword") ;
var alertRegister = document.getElementById("alertAlreadyExists") ;
var alertSuccess = document.getElementById("alertSuccess") ;
 var users=[] ; 

if (localStorage.getItem("users") != null )
{
  users= JSON.parse(localStorage.getItem("users"))
}

//  sign Up
if (document.getElementById("signUP") != null ) 
{
  
 document.getElementById("signUP").addEventListener("click" , function(){
  if (registerName.value !="" && registerEmail.value !="" &&  registerPassword.value !="" )
  {
    if ( isEmailExists()== false ){
          var user = {
      name : registerName.value,
      email :registerEmail.value ,
      password : registerPassword.value ,
      
    }

    users.push(user) ; 
    localStorage.setItem("users" , JSON.stringify(users)) ; 
    alertRegister.classList.replace("d-block", "d-none") ; 
    alertSuccess.classList.replace("d-none", "d-block") ; 

    }

  }else{
    alertSuccess.classList.replace("d-block", "d-none") ; 
    alertRegister.innerHTML = "All inputs is required" ; 
    document.getElementById("alertAlreadyExists").classList.replace("d-none" , "d-block")
  }
 
 })

 
function isEmailExists(){
  
  for ( var i=0 ; i<users.length ; i++){
   if( users[i].email == registerEmail.value)
   {
     alertRegister.innerHTML="email already exists"
     alertRegister.classList.replace=("d-none","d-block") ;
     alertSuccess.classList.replace("d-block", "d-none") ; 
     return true ; 
     }
   }
   return false ;
  }
  }

// sign in 
var signInEmail = document.getElementById("signInEmail")
var signInPassword = document.getElementById("signInPassword")
var mainName = ""
var alertSignIn = document.getElementById("alertSignIn")


if (document.getElementById("login-btn") != null ) {

  document.getElementById("login-btn").addEventListener("click" ,function(){
    if(signInEmail.value != "" &&  signInPassword.value != "" )
    {
      var allUsers = JSON.parse(localStorage.getItem("users"))
      for ( var i=0 ; i<allUsers.length ; i++){
        if(allUsers[i].email == signInEmail.value && allUsers[i].password == signInPassword.value){
          
          localStorage.setItem("mainName" , allUsers[i].name)
          location.href= "../home.html"
          alertSignIn.classList.replace("d-block" , "d-none")
  
  
          
        }
      }
      alertSignIn.innerHTML= "Incorrect email and password "
      alertSignIn.classList.replace("d-none" , "d-block")
      
  
    }else{
      alertSignIn.innerHTML= "All inputs is required"
      alertSignIn.classList.replace("d-none" , "d-block")
  
    }
  
  
  
  })
  
}

// home 
var welcomeShow = document.getElementById("welcomeShow")
if (welcomeShow != null){
  welcomeShow.innerHTML=`Welcome ${localStorage.getItem("mainName")}`
  
  document.getElementsBy("logoutBtn").addEventListener("click" , function(){
    localStorage.removeItem("mainName")
  })
}

