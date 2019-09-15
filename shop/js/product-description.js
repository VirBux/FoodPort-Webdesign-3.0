// var productContainer = document.getElementsByClassName('product-container')


// for (var i = 0; i < productContainer.length; i++) {
//     productContainer[i].addEventListener('click', console.log("Test"));
// }



$(function() {
    console.log( "ready!" );

    var productContainer = $('.product-container')

    productContainer.on( "click", function() {
        // console.log( $( this ).text() );
        $(this).next('.product-description').addClass('.active')
      });

    console.log(productContainer)
});