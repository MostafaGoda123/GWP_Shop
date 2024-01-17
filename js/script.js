let changeLogIn = document.getElementById("change_log_in");
changeLogIn.addEventListener("click",function(){
   document.querySelector(".sign_In").classList.add("hide");
   document.querySelector(".sign_Up").classList.remove("hide");
})
let changeSignUp = document.getElementById("change_sign_up");
changeSignUp.addEventListener("click",function(){
   document.querySelector(".sign_In").classList.remove("hide");
   document.querySelector(".sign_Up").classList.add("hide");
})
/*-------------------------------------------------*/
let clickChanges = document.querySelectorAll(".clickChange")
let allArticles = document.querySelectorAll("article")
clickChanges.forEach((el)=>{
   el.addEventListener("click",function(){
      clickChanges.forEach(e => e.classList.remove("active") )
      allArticles.forEach(e => e.classList.remove("active") )
      el.classList.add("active")
      allArticles.forEach(e => {
         if ( e.classList.contains(el.getAttribute("data-type")) ) {
            e.classList.add("active")
         }
      })
   })
})
/*-------------------------------------------------*/
