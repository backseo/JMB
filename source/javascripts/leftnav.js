$(document).ready(function() {
  (function() {
    // on cible l'objet left-nav
    var objNav = document.querySelector("#left-nav");
    // on mémorise la position de nav
    var memoPositionNav = objNav.offsetTop;
    function sticky(){
      // position du curseur au scroll
      var posCurseur = this.pageYOffset;
      // je teste la différence de distance entre le scroll et nav
      if(memoPositionNav-posCurseur<1){
        objNav.style.position = "fixed";
        objNav.style.top = 90;
        objNav.style.zIndex = 999;
      }
      if(posCurseur<101){
        objNav.style.position = "absolute";
      }
    }
    // evenement
    window.addEventListener("scroll", sticky);
  })()
});
