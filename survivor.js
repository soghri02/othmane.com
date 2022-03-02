function setFormMessage(elementInput,message){
   const elementMessage=elementInput.querySelector(".type-error");
   elementMessage.textContent=message
}
function setInputError(){
        
}


document.addEventListener("DOMContentLoaded",()=>{
    const loginForm=document.getElementById("login");
    const inscreptionForm=document.getElementById("Inscreption");
    const button=document.querySelector(".form-button");


    const login=document.querySelector("#linkCreateAccount");
    const Inscreption=document.querySelector("#linkLogin")
    
    login.addEventListener("click",function(){
        loginForm.classList.add("form-hidden");
        inscreptionForm.classList.remove('form-hidden')
        console.log(login)
    })
    Inscreption.addEventListener("click",function(){
        inscreptionForm.classList.add("form-hidden");
        loginForm.classList.remove("form-hidden");
        console.log(login)
    })
   button.addEventListener("click",function(e){
       const inputAdd=loginForm.querySelector(".input input");
       const inputPass=loginForm.querySelector("#password");
       if(inputAdd.value=" " || (inputPass.value="")){
        setFormMessage(loginForm,"you should right the email and password")
       }else{
        loginForm.classList.add("form-hidden");
        inscreptionForm.classList.remove("form-hidden");
        console.log("othmane")
       }
   })
   
let othmane="othmane";


console.log("oo ${}")
// button.addEventListener("click",(e)=>{
    //     e.preventDefault();
    //     const input=document.querySelectorAll(".input input");
    //     console.log(input)
    //     // const password=document.querySelector(".password"
    //     if(input.value===" "){
    //         document.querySelector(".type-error").textContent="error";
    //         console.log("eror")
    //     }
    // })
})