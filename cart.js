if(document.readyState == 'loading'){
	document.addEventListener('DOMContentLoaded',ready)
} else{
	ready()
}

function ready(){

	var addToCartButtons = document.getElementsByClassName('addcart');

	for(var i=0; i < addToCartButtons.length; i++){

		var button = addToCartButtons[i];
		button.addEventListener('click',addToCartClicked);
	}

	var removeCartitemButtons = document.getElementsByClassName('btn-danger');

	for(var i=0; i < removeCartitemButtons.length; i++){

		var button = removeCartitemButtons[i];

	button.addEventListener('click',removeCartItem);
	}

	var quantityinputs = document.getElementsByClassName('cart-quantity-input');

	for(var i=0; i < quantityinputs.length; i++ ){

		var input = quantityinputs[i];
		input.addEventListener('change',quantityChanged);

	}

	document.getElementsByClassName('btn-purchase')[0].addEventListener('click',purchaseClicked);
}


//  Add to Cart Item //

function addToCartClicked(event){

	var button = event.target;
	var productbox = button.parentElement.parentElement;
	var title = productbox.getElementsByClassName('product-title')[0].innerText;
	var price = productbox.getElementsByClassName('product-price')[0].innerText;
	var imageSrc = productbox.getElementsByClassName('product-img')[0].src;
	addItemToCart(title,price,imageSrc);
	alert("Your Item is Added");
	
	updateCartTotal();
}

function addItemToCart(title,price,imageSrc){
	var cartRow = document.createElement('div');
	cartRow.classList.add('cart-row');
	var cartItems = document.getElementsByClassName('cart-items')[0];
	var cartItemsNames = cartItems.getElementsByClassName('product-title');

	
	for(var i=0; i < cartItemsNames.length; i++){
		if(cartItemsNames[i].innerText == title){
			alert("This Products already added");
			return;
		}
	}
	var cartRowContents = `<table class="table table-bordered cart-table">
							
							<div class="cart-products">
								<div class="container">
									<div class="row">
										<div class="col-3">
											<img class ="cart-item-image mx-auto d-block" src= "${imageSrc}" height="100" width="100">
										</div>
										<div class="col-3">
											<h5 class="cart-item-title cart-title text-center">${title}</h5>
										</div>
										<div class="col-2">
											<h5 class="cart-price cart-title text-center">${price}</h5>
										</div>
										<div class="col-2">
											<input class="cart-quantity-input text-center" type = "number" value="1">
										</div>
										<div class="col-2">
											<button class="btn btn-danger btn-sm mx-auto d-block" type="button">Remove</button>
										</div>
									</div>
								</div>
							</div>
							
						</table>`
			cartRow.innerHTML = cartRowContents;
			cartItems.append(cartRow);
			cartRow.getElementsByClassName('btn-danger')[0].addEventListener('click',removeCartItem);
			cartRow.getElementsByClassName('cart-quantity-input')[0].addEventListener('change',quantityChanged);
			cartCount();
		
}


// Remove To Cart Item

function removeCartItem(event){

	var buttonClicked = event.target;

	buttonClicked.parentElement.parentElement.remove();
	updateCartTotal()
}

// Update Cart
function updateCartTotal(){

	var cartItemContainer = document.getElementsByClassName('cart-items')[0];
	console.log(cartItemContainer);
	var cartRows = cartItemContainer.getElementsByClassName('cart-row');
	var total = 0;

	for(var i=0; i < cartRows.length; i++){
		var cartRow = cartRows[i];
		var priceElement = cartRow.getElementsByClassName('cart-price')[0];
		var quantityElement = cartRow.getElementsByClassName('cart-quantity-input')[0];
		var price = parseFloat(priceElement.innerText.replace('$',' '));
		var quantity = quantityElement.value;
		total = total + (price * quantity);
	}

	total = Math.round(total * 100) / 100;
	document.getElementsByClassName('cart-total-price')[0].innerText = '$' + total;
}


// Quantity Changed

function quantityChanged(event){

	var input = event.target;
	if(isNaN(input.value) || input.value <= 0){
		input.value = 1;
	}
	updateCartTotal();
}


// Purchase Clicked

function purchaseClicked(){
	alert("Thank You For Your Purchase");

	var cartItems = document.getElementsByClassName('cart-items')[0];
	while(cartItems.hasChildNodes()){
		cartItems.removeChild(cartItems.firstChild);
	}

	updateCartTotal();
}

// Cart Count

function cartCount(){

	var cartcount = document.getElementsByClassName('cart-table');
	var cartItemscount = cartcount.length;
	document.getElementById('cart-count').innerHTML = cartItemscount;	
}

// Preloader
	
		
	function timeSet(){

		var load = setTimeout(showpage, 2000);
	}

	function showpage(){

		document.getElementById("loader").style.display = "none";
		document.getElementById("body").style.display = "block";
	}


//Reveal scrolling

	var about = $('#about');
	var products = $('#products');
	var shop = $('#shop');
	var farmer_info = $('#farmer-info');
	var offer = $('#offer');
	var organic = $('#organic');
	var blogs = $('#blogs');
	var footer = $('#footer');

	$('#about').hide();
	$('#products').hide();
	$('#shop').hide();
	$('#farmer-info').hide();
	$('#offer').hide();
	$('#organic').hide();
	$('#blogs').hide();
	$('#footer').hide();

	$(window).scroll(function(){
		if($(window).scrollTop() >= 30)
		{	
			$('#about').show();
			about.addClass('fadeInUp');
		}
	});

	$(window).scroll(function(){
		if($(window).scrollTop() >= 150)
		{	
			$('#products').show();
			products.addClass('fadeInUp');
		}
	});

	$(window).scroll(function(){
		if($(window).scrollTop() >= 550)
		{	
			$('#shop').show();
			shop.addClass('fadeInUp');
		}
	});

	$(window).scroll(function(){
		if($(window).scrollTop() >= 1800)
		{	
			$('#farmer-info').show();
			farmer_info.addClass('fadeInUp');
		}
	});

	$(window).scroll(function(){
		if($(window).scrollTop() >= 2450)
		{	
			$('#offer').show();
			offer.addClass('fadeInUp');
		}
	});

	$(window).scroll(function(){
		if($(window).scrollTop() >= 4000)
		{	
			$('#organic').show();
			organic.addClass('fadeInUp');
		}
	});

	$(window).scroll(function(){
		if($(window).scrollTop() >= 4700)
		{	
			$('#blogs').show();
			blogs.addClass('fadeInUp');
		}
	});

	$(window).scroll(function(){
		if($(window).scrollTop() >= 5200)
		{	
			$('#footer').show();
			footer.addClass('fadeIn');
		}
	});
