/* Only Vanilla JS - by Denny Ovcar */

var root = document.documentElement; // Root preset for manipulation css root

var headerLogo = document.getElementById("logo");
var searchContainer = document.getElementById('search-product-container');

//Nav
var headerTitle = document.getElementsByClassName("nav-title");
var pageNav = document.getElementById('page-main-nav');
var filter = document.getElementById('filter');
var navFilter = document.getElementById('nav-filter');
var selectEsskultur = document.getElementById('select-esskultur');
var navEsskultur = document.getElementById('nav-esskultur');

// Additional Header
var additionalMainHeader = document.getElementById('additional-main-header');
  var additionalMainHeaderLeft = document.getElementById('additional-main-header-left');
  var additionalMainHeaderMiddle = document.getElementById('additional-main-header-middle');
    var vendorProperties = document.getElementsByClassName('vendor-properties-container');
    var vendorPrice = document.getElementsByClassName('vendor-price');
    var vendorError = document.getElementsByClassName('vendor-prop-error');
    var vendorHeaderBackground = document.getElementsByClassName('additional-head-background');
  var additionalMainHeaderRight = document.getElementById('additional-main-header-right');


//Filter
var vendorFilter = document.getElementById('vendor-filter');
var dropdownT = document.querySelector('.dropdown-title');





// Get start settings
var midHeaderHeight = getComputedStyle(root).getPropertyValue('--mid-header-margin-top');
var headerHeight = document.getElementById("page-header").offsetHeight;
var vendorPropertiesHeight = vendorProperties[0].offsetHeight;


/* ======================================== */
/* ========== Scroll fucntion ============= */

// When the user scrolls down 50px from the top of the document, resize the header
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

    for(let i = 0; i < headerTitle.length; i++){
      pageNav.className = "push-main-nav";
    }
    
    /* Vendorproperties hide */
    for(let i = 0; i < vendorProperties.length; i++){
      slideUp(vendorProperties[i])
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

    for(let i = 0; i < headerTitle.length; i++){
      pageNav.classList.remove("push-main-nav")
    }

    /* Vendorproperties show */
    for(let i = 0; i < vendorProperties.length; i++){
      slideDown(vendorProperties[i], vendorPropertiesHeight)
    }

  }
  
}

/* ======================================== */
/* ============ Vendor Error ============== */
for(let i = 0; i < vendorPrice.length; i++){
  if (parseInt(vendorPrice[i].innerHTML) < vendorPrice[i].getAttribute("data-min-val")) {
    vendorPrice[i].parentElement.classList.add("active")
    vendorError[i].classList.add("active")
  }
}


/* ======================================== */
/* ======================================== */

// Searchbar function at display widht 1200px
function openSearch() {
  searchContainer.classList.toggle("push-product-search")
}

function closeSearch() {
  searchContainer.classList.remove("push-product-search")
}

// Filter funcions
function openFilter(){
  navFilter.classList.toggle("selected")
  filter.classList.toggle("selected")
}

function closeFilter() {
  navFilter.classList.toggle("selected")
  filter.classList.toggle("selected")
}

function openEsskultur() {
  navEsskultur.classList.toggle("selected")
  selectEsskultur.classList.toggle("selected")
  additionalMainHeader.classList.toggle("kill-z-index")
}

function openVendorFilter() {
  vendorFilter.classList.toggle("selected")
}

/* --------- Some jQuery replacements --------- */

/* Siblings catcher */
var getSiblings = function(e) {
  	// Setup siblings array and get the first sibling
	var siblings = [];
	var sibling = e.parentNode.firstChild;

	// Loop through each sibling and push to the array
	while (sibling) {
		if (sibling.nodeType === 1 && sibling !== e) {
			siblings.push(sibling);
		}
		sibling = sibling.nextSibling
	}

	return siblings;
}

/* Classchecker */
function hasClass(element, cls) {
  return (' ' + element.className + ' ').indexOf(' ' + cls + ' ') > -1;
}


/* Slide Functions */
function slideUp(el) {
  el.style.transition = "all 0.2s ease-in-out";
  el.style.height = "0px";
  el.style.opacity = "0";
}

function slideDown(el, height) {
  el.style.transition = "all 0.2s ease-in-out";
  el.style.height = height + "px";
  el.style.opacity = "1";
}