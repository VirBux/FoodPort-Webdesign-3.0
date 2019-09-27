var root = document.documentElement;
var headerLogo = document.getElementById("logo");
var headerHeight = document.getElementById("page-header").offsetWidth;
var headerLogoWidth = headerLogo.offsetWidth;
var headerTitle = document.getElementsByClassName("nav-title");

console.log(headerHeight)


// When the user scrolls down 50px from the top of the document, resize the header's font size
window.onscroll = function() {scrollFunction()}

function scrollFunction() {
  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {

    root.style.setProperty('--header-height', 85 + "px");

    headerLogo.style.width = "192.5px";

    for(var i = 0; i < headerTitle.length; i++){
        headerTitle[i].style.display = "none"; 
    }

  } else {
    root.style.setProperty('--header-height', 160 + "px");

    headerLogo.style.width = headerLogoWidth + "px";

    for(var i = 0; i < headerTitle.length; i++){
        headerTitle[i].style.display = "block"; 
    }

  }
  
}