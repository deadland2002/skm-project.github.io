var prevScrollpos = window.pageYOffset;
var animat =document.getElementById("navbar");
window.onscroll = function() {
  var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("navbar").style.top = "0";
    document.getElementById("navbar").style.opacity = 1;
    if(currentScrollPos>650)
    {
      document.getElementById("navbar").style.backgroundColor = "#000";
    }
    else
    {
      document.getElementById("navbar").style.backgroundColor = "transparent";
    }
  } 
  else if(currentScrollPos>115)
  {
    var abc=(115-currentScrollPos);

    var opa=Math.abs(abc);
    opa=1/(opa);
    document.getElementById("navbar").style.opacity = opa;
  }  
  prevScrollpos = currentScrollPos;
}