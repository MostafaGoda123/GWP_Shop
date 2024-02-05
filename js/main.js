document.getElementById("reg1").onclick = function () {
   document.querySelector(".logIn").classList.toggle("hide") ;
   document.querySelector(".signIn").classList.toggle("hide") ;
}
document.getElementById("reg2").onclick = function () {
   document.querySelector(".logIn").classList.toggle("hide") ;
   document.querySelector(".signIn").classList.toggle("hide") ;
}
/*----------------------------*/
let allLinks = document.querySelectorAll(".link")
let allSections = document.querySelectorAll("section")

console.log(allLinks);
console.log(allSections);

allLinks.forEach(link => {
   link.addEventListener("click" , function () {
      allLinks.forEach(link => {
         link.classList.remove("active")
      })
      link.classList.add("active")
      allSections.forEach(sec => {
         sec.classList.remove("active")
      })
      allSections.forEach(sec => {
         console.log();
         if (sec.getAttribute("data-type") == link.getAttribute("data-type")) {
            sec.classList.add("active")
         }
      })
   })
})
