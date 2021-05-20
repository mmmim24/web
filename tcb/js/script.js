$(window).scroll(function () {
   if($(window).scrollTop()) {
       $("#header").addClass("openMenu");
       $("#header").removeClass("top");
       $("#AA").addClass("container_drop");
      }
      else{
         $("#header").addClass("top");
         $("#header").removeClass("openMenu");
         $("#AA").removeClass("container_drop");
   }
});

var myVar = document.getElementById("drop");
var Var = document.getElementById("navbar");

flag = true;
function f(){
   if(flag){
      myVar.classList.remove("fa-caret-down");
      myVar.classList.add("fa-caret-up");
      Var.classList.remove("navbars");
      Var.classList.add("navbar");
      flag = false;
   }
   else{
      myVar.classList.remove("fa-caret-up");
      myVar.classList.add("fa-caret-down");
      Var.classList.remove("navbar");
      Var.classList.add("navbars");
      flag = true;
   }
   console.log(myVar.classList);
};