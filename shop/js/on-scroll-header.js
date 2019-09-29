var root = document.documentElement; // Root preset for manipulation css root

var headerLogo = document.getElementById("logo");
var headerTitle = document.getElementsByClassName("nav-title");
var pageNav = document.getElementById('page-main-nav');
var vendorHeaderBackground = document.getElementsByClassName('additional-head-background');
var additionalMainHeaderLeft = document.getElementById('additional-main-header-left');
var additionalMainHeaderMiddle = document.getElementById('additional-main-header-middle');
var additionalMainHeaderRight = document.getElementById('additional-main-header-right');



// Get start settings
var midHeaderHeight = getComputedStyle(root).getPropertyValue('--mid-header-margin-top');
var headerHeight = document.getElementById("page-header").offsetHeight;


// When the user scrolls down 50px from the top of the document, resize the header's font size
window.onscroll = function() {scrollFunction()}

function scrollFunction() {
  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {

    // Header height
    root.style.setProperty('--header-height', 85 + "px");
    root.style.setProperty('--header-height-mob', 130 + "px")
    // Logo Width
    headerLogo.className = "push-logo";

    // Total Vendor part
    vendorHeaderBackground[0].style.backgroundColor = "var(--main-col)";
    root.style.setProperty('--mid-header-margin-top', 0 + "px");
    additionalMainHeaderLeft.className = "push-additional-header-left";
    additionalMainHeaderMiddle.className = "push-additional-header-middle";
    additionalMainHeaderRight.className = "push-additional-header-right";

    for(var i = 0; i < headerTitle.length; i++){
      pageNav.className = "push-main-nav";
    }

  } else {

    // Header height
    root.style.setProperty('--header-height', headerHeight + "px");
    root.style.setProperty('--header-height-mob', headerHeight + "px");
    // Logo width
    headerLogo.classList.remove("push-logo")

    // Total Vendor part
    vendorHeaderBackground[0].style.backgroundColor = "transparent";
    root.style.setProperty('--mid-header-margin-top', midHeaderHeight);
    additionalMainHeaderLeft.classList.remove("push-additional-header-left");
    additionalMainHeaderMiddle.classList.remove("push-additional-header-middle");
    additionalMainHeaderRight.classList.remove("push-additional-header-right");

    for(var i = 0; i < headerTitle.length; i++){
      pageNav.classList.remove("push-main-nav")
    }

  }
  
}

// Searchbar function at display widht 1200px

var searchContainer = document.getElementById('search-product-container');


function openSearch() {
  if (!searchContainer.classList.contains("push-product-search")) {
    searchContainer.className = "push-product-search";
  }else{
    searchContainer.classList.remove("push-product-search")
  }
}

function closeSearch() {
  searchContainer.classList.remove("push-product-search")
}
