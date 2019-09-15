$(function() {
        /* Selectors */
        var overlay = $('.overlay-products')
        var productDescription = $('.product-description')
        var productImg = $('.product-img')
        var closeProductContainer = $('.product-description-close-btn')

        /* Clickevents */

        /* Klick auf das Produktbild */
        productImg.on( "click", function() {
            if(jQuery(this).siblings(".product-description").is(":visible")){
                jQuery(this).removeClass('img-selected')
            }else{
                jQuery(this).addClass('img-selected')
            }
            jQuery(this).siblings(".product-description").toggle("fast")
            overlay.toggle()
        });

        /* Klick auf das Schliessen Icon */
        closeProductContainer.on( "click", function() {
            productImg.removeClass("img-selected")
            jQuery(this).parent().parent(".product-description").toggle("fast")
            overlay.toggle("fast")
        });

        /* Dunkle Überlagerung */
        overlay.on("click", function(){
            overlay.toggle("fast")
            productImg.removeClass("img-selected")
            $('.product-description:visible').toggle("fast")
    });
});