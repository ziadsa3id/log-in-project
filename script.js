var signName = document.getElementById("signName")
var signEmail = document.getElementById("signEmail")
var signPassword = document.getElementById("signPassword")
var logEmail = document.getElementById("logEmail")
var logPassword = document.getElementById("logPassword")
var logIn = document.getElementById("logIn")
var signUpBtn = document.getElementById("signUpBtn")
var signInBtn = document.getElementById("signInBtn")
var boxLogIn = document.getElementById("boxLogin")
var boxSignUp = document.getElementById("boxSignUp")
var signUp = document.getElementById("signUp")
var arr = []


if (localStorage.getItem('storData') != null) {
    arr = JSON.parse(localStorage.getItem('storData'))
}

signUp.addEventListener("click" , function(){

    var storData = 
    {
        name:signName.value,
        email:signEmail.value,
        password:signPassword.value
    }
    arr.push(storData)
    localStorage.setItem('storData', JSON.stringify(arr))
    clearData()
    
})
function clearData(){
    signName.value=``
    signEmail.value=``
    signPassword.value=``
}

var storedData = JSON.parse(localStorage.getItem('storData'))



signUpBtn.addEventListener("click" , function(){
    boxLogIn.style.transition = 1 + "s"
    boxSignUp.style.transition =1 + "s"
    boxLogIn.style.opacity=0
    boxSignUp.style.opacity=1
    boxSignUp.classList.toggle("action")
})

signInBtn.addEventListener("click" , function(){
    boxLogIn.style.transition = 1 + "s"
    boxSignUp.style.transition =1 + "s"
    boxSignUp.style.opacity=0
    boxLogIn.style.opacity=1
    boxSignUp.classList.toggle("action")
    
})
var whenLogIn = document.getElementById("whenLogIn")
var wrongPassword= document.getElementById("wrongPassword")
logIn.addEventListener("click" , function(){
    var whenLog = document.getElementById("whenLog")
    var logEmailValue = logEmail.value 
    var logPasswordValue = logPassword.value

    for(var i =0 ; i<storedData.length ; i++){
        if((logEmailValue==storedData[i].email) && (logPasswordValue==storedData[i].password)){
            console.log("hello");
            boxSignUp.style.opacity=0
            boxLogIn.style.opacity=0
            whenLogIn.innerHTML = "Welcome Back  " + storedData[i].name;
            // whenLogOut.innerHTML = "Log Out "
            // whenLogOut.style.opacity= 1
            wrongPassword.style.opacity=0
            whenLog.innerHTML ="Add Product " + `<a href="index-product.html" 
            style="padding: 20px;
            background-color: #1ad559;
            color: white;
            border: none;
            text-decoration:none;
            border-radius:14px;">Add</a>`
            
        }else if((logEmailValue != storedData[i].email) && (logPasswordValue != storedData[i].password)){
            wrongPassword.innerHTML = "wrong Email or Password";
            console.log("sorry");
        }else if (logEmailValue != storedData[i].email){
            wrongPassword.innerHTML = "wrong Email or Password";
            console.log("sorry"); 
        }else if (logPasswordValue != storedData[i].password){
            console.log("sorry"); 
            
        }
    }

})
// whenLogOut.addEventListener("click" ,function(){
//     boxLogIn.style.opacity=1
//     whenLogIn.innerHTML=``
//     whenLogOut.innerHTML=``
//     whenLogOut.style.opacity= 0

// })

