var data;
function ajax_get(url) {
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function() {
        if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
            console.log('responseText:' + xmlhttp.responseText);
            try {
                data = JSON.parse(xmlhttp.responseText);
				displayData(data);
            } catch(err) {
                console.log(err.message + " in " + xmlhttp.responseText);
                return;
            }
        }
    };
 
    xmlhttp.open("GET", url, true);
    xmlhttp.send();
}

var offset = 0;
var loadedProducts = 0;
var jsonrow = 2500;

function displayData(data){

	offset = 8;
	jsonrow = jsonrow + loadedProducts

	
	//Gets the wrapper of all products
	var divWrapper = document.getElementById("product-wrapper");

	for(var i = jsonrow; i < jsonrow+offset; i++){
		
		
		//Create div for Product
		var divProduct = document.createElement("div");
		//Assign Classname and content
		divProduct.setAttribute("class", "product-container");

		//Create div for Image
		var divImage = document.createElement("div");
		//Assign Classname and content
		divImage.setAttribute("class", "product-img");
		
		//Create img for Products within product-img element
		var productImage = document.createElement("img");
		productImage.setAttribute("src", data.Tabelle1[i].ImageUrl);
		productImage.setAttribute("alt", "");
		
		//Create article for product
		var articleProduct = document.createElement("article");
		//Assign Classname and content
		articleProduct.setAttribute("class", "product-description");
		
		//Create header for product description
		var headerProduct = document.createElement("header");
		//Assign Classname and content
		headerProduct.setAttribute("class", "product-description-header");
		
		//Create div for Product Vendor
		var divProductVendor = document.createElement("div");
		//Assign Classname and content
		divProductVendor.setAttribute("class", "product-description-vendor");
		
		//Create div for Product Vendor Image
		var divProductVendorIconImage = document.createElement("div");
		//Assign Classname and content
		divProductVendorIconImage.setAttribute("class", "vendor-icon-img");
		
		//Create img for Product's Vendor
		var vendorIconImage = document.createElement("img");
		vendorIconImage.setAttribute("src", "https://foodport.ch/wp-content/uploads/2019/02/vendor_shanghai_logo.png");
		vendorIconImage.setAttribute("alt", "Shanghai Logo");
		
		//Create div for Product Vendor Image
		var divProductVendorImage = document.createElement("div");
		//Assign Classname and content
		divProductVendorImage.setAttribute("class", "vendor-img");
		
		//Create img for Product's Vendor
		var vendorImage = document.createElement("img");
		vendorImage.setAttribute("src", "https://foodport.ch/wp-content/uploads/2019/02/vendor_shanghai_logo.png");
		vendorImage.setAttribute("alt", "Shanghai Logo");
		
		//Create div for Product's Country Flag
		var divProductFlag = document.createElement("div");
		//Assign Classname and content
		divProductFlag.setAttribute("class", "product-description-flag");
		
		//Create img for Product's Vendor
		var vendorImage = document.createElement("img");
		vendorImage.setAttribute("src", "https://cdn.countryflags.com/thumbs/malaysia/flag-400.png");
		vendorImage.setAttribute("alt", "Country Logo");
		
		//Create div for Description Closing Button
		var divProductDescriptionCloseButton = document.createElement("div");
		//Assign Classname and content
		divProductDescriptionCloseButton.setAttribute("class", "product-description-close-btn");
		
		//Create div for Product's main Description
		var divProductDescriptionMain = document.createElement("div");
		divProductDescriptionMain.setAttribute("class", "product-description-main");

		//Create div for Product's Title
		var headerProductTitle = document.createElement("h2");
		headerProductTitle.setAttribute("class", "product-title");
		headerProductTitle.innerHTML = data.Tabelle1[i].ProductTitleGerman;
		
		//Create div for Product-Title within divProduct
		var sectionProductProperties = document.createElement("section");
		sectionProductProperties.setAttribute("class", "product-properties");
		
		//Create div for Net weight within divProduct
		var divNetweight = document.createElement("div");
		divNetweight.setAttribute("class", "netto-container");
		
		//Create div for net weight image
		var divNetImg = document.createElement("div");
		divNetImg.setAttribute("class", "netto-img");
		
		//Create img for Net Weight icon
		var netWeightImg = document.createElement("img");
		netWeightImg.setAttribute("src", "https://cdn1.iconfinder.com/data/icons/delivery-logistics-1/512/Logistics-11-512.png");
		netWeightImg.setAttribute("alt", "");
		
		
		//Create header for Product's Net quantity
		var headerNetProductqty = document.createElement("h3");
		headerNetProductqty.setAttribute("class", "netto-qty");
		headerNetProductqty.innerHTML = data.Tabelle1[i].NetWeight;
		
		//Create span for Product's liquid Unit
		var spanProductliquidUnit = document.createElement("span");
		spanProductliquidUnit.setAttribute("class", "unit");
		spanProductliquidUnit.innerHTML = "ml";
		
		//Create div for Gross weight within divProduct
		var divGrossWeight = document.createElement("div");
		divGrossWeight.setAttribute("class", "brutto-container");
		
		//Create div for Gross weight image
		var divGrossImg = document.createElement("div");
		divGrossImg.setAttribute("class", "brutto-img");
		
		//Create img for Gross Weight icon
		var grossWeightImg = document.createElement("img");
		grossWeightImg.setAttribute("src", "https://cdn1.iconfinder.com/data/icons/delivery-logistics-1/512/Logistics-11-512.png");
		grossWeightImg.setAttribute("alt", "");
		
		//Create header for Product's Gross quantity
		var headerGrossProductqty = document.createElement("h3");
		headerGrossProductqty.setAttribute("class", "brutto-qty");
		//headerGrossProductqty.innerHTML = data.Tabelle1[i].Sku;

		//Create span for Product's Gross Unit
		var spanProductweightUnit = document.createElement("span");
		spanProductweightUnit.setAttribute("class", "unit");
		spanProductweightUnit.innerHTML = "kg";
		
		//Create div for price of Product
		var divProductPrice = document.createElement("div");
		divProductPrice.setAttribute("class", "price-container");
		
		//Create div for price of Product Image
		var divProductPriceImg = document.createElement("div");
		divProductPriceImg.setAttribute("class", "price-img");
		
		//Create img for Product's Price as Icon
		var productPriceImage = document.createElement("img");
		productPriceImage.setAttribute("src", "https://cdn.countryflags.com/thumbs/malaysia/flag-400.png");
		productPriceImage.setAttribute("alt", "Price Logo");
		
		//Create header for Product's Price
		var headerProductPrice = document.createElement("h3");
		headerProductPrice.setAttribute("class", "brutto-qty");
		headerProductPrice.innerHTML = data.Tabelle1[i].GrossWeight;
		
		
		//Create span for Product's Price Unit
		var spanProductPriceUnit = document.createElement("span");
		spanProductPriceUnit.setAttribute("class", "unit");
		spanProductPriceUnit.innerHTML = "CHF";
		
		//Create article for Product Description
		var articleProductDescription = document.createElement("article");
		articleProductDescription.setAttribute("class", "product-short-description");
		
		//Create article for Product's Short Description
		var pProductDescription = document.createElement("p");
		pProductDescription.innerHTML = data.Tabelle1[i].ShortProductDescriptionGerman;
		
		//Create button for Product
		var buttonReadMore = document.createElement("button");
		buttonReadMore.setAttribute("class", "read-more");
		buttonReadMore.innerHTML = "...Mehr lesen";
		
		//Create Section for Product links
		var sectionProductLinks = document.createElement("section");
		sectionProductLinks.setAttribute("class", "product-links");
		
		//Create div for Product links Column 1
		var divProductLinksCol1 = document.createElement("div");
		divProductLinksCol1.setAttribute("class", "product-links-col1");
		
		//Create div for Product Nutrition Container
		var divNutritionContainer = document.createElement("div");
		divNutritionContainer.setAttribute("class", "nährwerte-container");
		
		//Create div for Product Nutrition Container Img
		var divNutritionContainerImg = document.createElement("div");
		divNutritionContainerImg.setAttribute("class", "nährwerte-img");
		
		
		//Create img for Nutrition Image
		var NutritionImg = document.createElement("img");
		NutritionImg.setAttribute("src", "https://cdn.countryflags.com/thumbs/malaysia/flag-400.png");
		NutritionImg.setAttribute("alt", "Nutrition Logo");
		
		//Create h3 for Nutrition title
		var headerNutrition = document.createElement("h3");
		headerNutrition.setAttribute("class", "nährwerte");
		
		//Create div for Wikipedia Container
		var divWikipediaContainer = document.createElement("div");
		divWikipediaContainer.setAttribute("class", "wikipedia-container");
		
		//Create h3 for Wikipedia
		var headerWikipedia = document.createElement("h3");
		headerWikipedia.setAttribute("class", "wikipedia");
		headerWikipedia.innerHTML = "Wikipedia";
		
		//Create div for Product Wikipedia Image Container
		var divWikipediaImageContainer = document.createElement("div");
		divWikipediaImageContainer.setAttribute("class", "wikipedia-img");
		
		//Create img for Wikipedia
		var wikipediaImage = document.createElement("img");
		wikipediaImage.setAttribute("src", "https://cdn.countryflags.com/thumbs/malaysia/flag-400.png");
		wikipediaImage.setAttribute("alt", "Wikipedia Logo");
		
		//Create div for Product links Column 2
		var divProductLinksCol2 = document.createElement("div");
		sectionProductLinks.setAttribute("class", "product-links-col2");
		
		//Create h3 for Product Links Info
		var headerProductLinks = document.createElement("h3");
		headerProductLinks.setAttribute("class", "product-links-more");
		headerProductLinks.innerHTML = "Mehr Infos";
		
		//Create section for Product Add Cart Container
		var sectionProductAddCartContainer = document.createElement("section");
		sectionProductAddCartContainer.setAttribute("class", "product-add-cart-container");
		sectionProductAddCartContainer.innerHTML = "Mehr Infos";
		
		//Create div for add cart navigor
		var divProductAddCartNavigator = document.createElement("div");
		divProductAddCartNavigator.setAttribute("class", "add-cart-nav-container");
		
		//Create nav for add cart navigor
		var navAddCart = document.createElement("nav");
		navAddCart.setAttribute("class", "add-cart-nav");
		
		//Create button for minus action
		var buttonMinus = document.createElement("button");
		buttonMinus.setAttribute("class", "minus-btn");
		var minusFunction = "this.parentNode.querySelector('input[type=number]').stepUp()";
		buttonMinus.setAttribute("onclick", minusFunction);
		buttonMinus.innerHTML = "-";
		
		//Create input field for cart
		var inputAddqty = document.createElement("input");
		inputAddqty.setAttribute("class", "add-qty");
		inputAddqty.setAttribute("min", "0");
		inputAddqty.setAttribute("name", "quantity");
		inputAddqty.setAttribute("value", "1");
		inputAddqty.setAttribute("number", "number");
		
		//Create button for plus action
		var buttonPlus = document.createElement("button");
		buttonPlus.setAttribute("class", "plus-btn");
		var PlusFunction = "this.parentNode.querySelector('input[type=number]').stepUp()";
		buttonPlus.setAttribute("onclick", "this.parentNode.querySelector('input[type=number]').stepUp()");
		buttonPlus.innerHTML = "+";
		
		//Create div for Product Cart Image
		var divProductCartImage = document.createElement("div");
		divProductCartImage.setAttribute("class", "product-cart-img");
		
		//Create img for Product Cart Image
		var productCartImage = document.createElement("img");
		productCartImage.setAttribute("src", "https://cdn.countryflags.com/thumbs/malaysia/flag-400.png");
		productCartImage.setAttribute("alt", "Cart Logo");
		
		//Create button to add to cart
		var buttonAddToCart = document.createElement("button");
		buttonAddToCart.setAttribute("class", "product-add-cart-btn");
		buttonAddToCart.innerHTML = "Hinzufügen";
		
		console.log("loading elements");
		
		
		//Appending elements
		divWrapper.appendChild(divProduct);
		divProduct.appendChild(divImage);
		divImage.appendChild(productImage);
		divImage.appendChild(articleProduct);
		
		articleProduct.appendChild(headerProduct);
		headerProduct.appendChild(divProductVendor);
		divProductVendor.appendChild(divProductVendorIconImage);
		divProductVendorIconImage.appendChild(vendorIconImage);
		divProductVendor.appendChild(divProductVendorImage);
		headerProduct.appendChild(divProductFlag);
		divProductFlag.appendChild(vendorImage);
		headerProduct.appendChild(divProductDescriptionCloseButton);
		
		articleProduct.appendChild(divProductDescriptionMain);
		divProductDescriptionMain.appendChild(headerProductTitle);
		divProductDescriptionMain.appendChild(sectionProductProperties);
		
		sectionProductProperties.appendChild(divNetweight);
		divNetweight.appendChild(divNetImg);
		divNetImg.appendChild(netWeightImg);
		divNetweight.appendChild(headerNetProductqty);
		headerNetProductqty.appendChild(spanProductliquidUnit);
		
		sectionProductProperties.appendChild(divGrossWeight);
		divGrossWeight.appendChild(divGrossImg);
		divGrossImg.appendChild(grossWeightImg);
		divGrossWeight.appendChild(headerGrossProductqty);
		headerGrossProductqty.appendChild(spanProductweightUnit);
		
		sectionProductProperties.appendChild(divProductPrice);
		divProductPrice.appendChild(divProductPriceImg);
		divProductPriceImg.appendChild(productPriceImage);
		divProductPrice.appendChild(headerProductPrice);
		headerProductPrice.appendChild(spanProductPriceUnit);
		
		divProductDescriptionMain.appendChild(articleProductDescription);
		articleProductDescription.appendChild(pProductDescription);
		divProductDescriptionMain.appendChild(buttonReadMore);
		
		divProductDescriptionMain.appendChild(sectionProductLinks);
		sectionProductLinks.appendChild(divProductLinksCol1);
		divProductLinksCol1.appendChild(divNutritionContainer);
		divNutritionContainer.appendChild(divNutritionContainerImg);
		divNutritionContainerImg.appendChild(NutritionImg)
		divNutritionContainerImg.appendChild(headerNutrition);
		divProductLinksCol1.appendChild(divWikipediaContainer);
		divWikipediaContainer.appendChild(headerWikipedia);
		divWikipediaContainer.appendChild(divWikipediaImageContainer);
		divWikipediaImageContainer.appendChild(wikipediaImage);
		sectionProductLinks.appendChild(divProductLinksCol2);
		divProductLinksCol2.appendChild(headerProductLinks);
		
		divProductDescriptionMain.appendChild(sectionProductAddCartContainer);
		sectionProductAddCartContainer.appendChild(divProductAddCartNavigator);
		divProductAddCartNavigator.appendChild(navAddCart);
		navAddCart.appendChild(buttonMinus);
		navAddCart.appendChild(inputAddqty);
		navAddCart.appendChild(buttonPlus);
		divProductAddCartNavigator.appendChild(divProductCartImage);
		divProductCartImage.appendChild(productCartImage);
		divProductAddCartNavigator.appendChild(buttonAddToCart);
		
		
		
		
		
		/*
		
		//Images
		if(data.Tabelle1[i].ImageUrl == null){
		document.write("");
		}else{
		document.write(data.Tabelle1[i].ImageUrl);		
		}
		*/
		
	}

}

//console.log(data);

