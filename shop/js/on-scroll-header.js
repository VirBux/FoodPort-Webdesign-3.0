var root = document.documentElement; // Root preset for manipulation css root

var headerLogo = document.getElementById("logo");
var headerTitle = document.getElementsByClassName("nav-title");
var pageNav = document.getElementById('page-main-nav');
var vendorHeaderBackground = document.getElementsByClassName('additional-head-background');

// Get start settings
var midHeaderHeight = getComputedStyle(root).getPropertyValue('--mid-header-margin-top');
var headerHeight = document.getElementById("page-header").offsetHeight;
var headerLogoWidth = headerLogo.offsetWidth;


// When the user scrolls down 50px from the top of the document, resize the header's font size
window.onscroll = function() {scrollFunction()}

function scrollFunction() {
  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {

    // Header height
    root.style.setProperty('--header-height', 85 + "px");
    // Logo Width
    headerLogo.style.width = "192.5px";

    // Total Vendor part
    vendorHeaderBackground[0].style.backgroundColor = "var(--main-col)"
    root.style.setProperty('--mid-header-margin-top', 0 + "px");

    for(var i = 0; i < headerTitle.length; i++){
      pageNav.className = "push-main-nav";
    }

  } else {

    // Header height
    root.style.setProperty('--header-height', headerHeight + "px");
    // Logo width
    headerLogo.style.width = headerLogoWidth + "px";

    // Total Vendor part
    vendorHeaderBackground[0].style.backgroundColor = "transparent"
    root.style.setProperty('--mid-header-margin-top', midHeaderHeight);

    for(var i = 0; i < headerTitle.length; i++){
      pageNav.classList.remove("push-main-nav")
    }

  }
  
}