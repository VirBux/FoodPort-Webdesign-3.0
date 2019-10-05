$(function() {
    /* Selectors */
    var body = $('body')
    var overlay = $('.overlay-products')
    var productImg = $('.product-img')

    const screenwidth = (document).querySelector('html').offsetWidth;

    /* Clickevents */

    /* Klick auf das Produktbild */
    body.on( "click",'.product-img', function() {

        jQuery(this).toggleClass('img-selected')
        jQuery(this).siblings(".product-description").toggle("fast")

        /* Position ermitteln */
        var prodDescLeftBorderPos = jQuery(this).offset().left;  // Position vom linkem Border der Produktbeschreibung


        if (jQuery(this).hasClass("img-selected-right")) {
            jQuery(this).removeClass('img-selected-right')
        }else{
            if ( ((screenwidth / 2) - 150) < prodDescLeftBorderPos) {
                /* Anzeige für links */
                jQuery(this).siblings(".product-description").addClass("desc-links")
                jQuery(this).addClass('img-selected-right')
            }
        }

        overlay.toggle()

        /* Overlay höhe an Produktwrapper anpassen */
        var overlayHeight = overlay.height() + 150;
        overlay.height(overlayHeight)
    });

    /* Klick auf das Schliessen Icon */
    body.on( "click", '.product-description-close-btn', function() {
        productImg = $('.product-img')
        productImg.removeClass("img-selected")
        productImg.removeClass("img-selected-right")
        jQuery(this).parent().parent(".product-description").toggle("fast")
        overlay.toggle("fast")
    });

    /* Dunkle Überlagerung */
    body.on("click", '.overlay-products', function(){
        overlay.toggle("fast")
        productImg.removeClass("img-selected")
        productImg.removeClass("img-selected-right")
        $('.product-description:visible').toggle("fast")
    });

    /* Hover event */   
    $('.product-container').mousemove(function(e){
        renderevents(e)
        // console.log(e)
    })

    function renderevents(e){
        $('#infoblock').html(e.currentTarget.children[1].children[1].children[0].innerText)
    }

    /* Filter - Preise / Herkunft / Händler */
    var fastFilterPriceBox = $('#price-checkbox');
    var fastFilterOriginBox = $('#origin-checkbox');
    var fastFilterVendorBox = $('#vendor-checkbox');

    var productVendorImg = $('.product-vendor');
    var productFlag = $('.product-flag-img')
    var productPrice = $('.product-price-container')

    
    if (!fastFilterPriceBox.is(':checked')) {
        productPrice.toggle()
    }

    if (!fastFilterOriginBox.is(':checked')) {
        productFlag.toggle()
    }

    if (!fastFilterVendorBox.is(':checked')) {
        productVendorImg.toggle()
    }

    fastFilterVendorBox.change(function(){
        productVendorImg.toggle()
    });

    fastFilterOriginBox.change(function(){
        productFlag.toggle()
    });

    fastFilterPriceBox.change(function(){
        productPrice.toggle()
    });

});