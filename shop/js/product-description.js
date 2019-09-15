$(function() {
    /* Selectors */
    var body = $('body')
    var overlay = $('.overlay-products')
    var productDescription = $('.product-description')
    var productImg = $('.product-img')
    var closeProductContainer = $('.product-description-close-btn')

    /* Clickevents */

    /* Klick auf das Produktbild */

    body.on( "click",'.product-img', function() {
        if(jQuery(this).siblings(".product-description").is(":visible")){
            jQuery(this).removeClass('img-selected')
        }else{
            jQuery(this).addClass('img-selected')
        }
        jQuery(this).siblings(".product-description").toggle("fast")
        overlay.toggle()
    });

    /* Klick auf das Schliessen Icon */
    body.on( "click", '.product-description-close-btn', function() {
        productImg.removeClass("img-selected")
        jQuery(this).parent().parent(".product-description").toggle("fast")
        overlay.toggle("fast")
    });

    /* Dunkle Überlagerung */
    body.on("click", '.overlay-products', function(){
        overlay.toggle("fast")
        productImg.removeClass("img-selected")
        $('.product-description:visible').toggle("fast")
    });
});