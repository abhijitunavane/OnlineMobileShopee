
function gototop() {
	window.location.href = "#header";
};

var objPeople = [
	// {
	// 	name	: 'Abhijit Unavane',
	// 	username: 'abhi',
	// 	email	: 'abhi@gmail.com',
	// 	password: 'abhi'
	// }
];

section = document.getElementsByTagName('section')[0];
var loginFlag = 0;
var signupFlag = 0;

// signup
if (section.id == 'signup')
{
	const signupForm = document.getElementById("signup-form");
	const name = document.getElementById("name");
	const username = document.getElementById("username");
	const email = document.getElementById("email");
	const password = document.getElementById("password");
	const password2 = document.getElementById("password2");

	signupForm.addEventListener('submit', (event) => {
		event.preventDefault();
		
		checkInputs();
		signupFlag = 1;
	});

	function checkInputs() {

		const nameValue = name.value.trim();
		const usernameValue = username.value.trim();
		const emailValue = email.value.trim();
		const passwordValue = password.value.trim();
		const password2Value = password2.value.trim();
		if(nameValue === '') {
			setErrorFor(name, 'Username cannot be blank');
		} else {
			setSuccessFor(name);
		}

		if(usernameValue === '') {
			setErrorFor(username, 'Username cannot be blank'); 
		} else {
			setSuccessFor(username); 
		}

		if(emailValue === '') {
			setErrorFor(email, 'Email cannot be blank'); 
		} else if(! isEmail(emailValue)){
			setErrorFor(email, "Email is not valid!"); 
		} else {
			setSuccessFor(email); 
		}

		if(passwordValue === '') {
			setErrorFor(password, 'Password cannot be blank'); 
		} else { 
			setSuccessFor(password);
		}
		
		if(password2Value === '') { 
			setErrorFor(password2, 'Password2 cannot be blank');
		} else if(passwordValue !== password2Value) { 
			setErrorFor(password2, 'Passwords does not match');
		} else{ 
			setSuccessFor(password2);
		}
		if (usernameValue && nameValue && emailValue && passwordValue && password2Value ) {
			setTimeout(()=>{
				window.location.href = 'login.html';
			}, 300 );	
			// let object = {
			// 	name	: nameValue,
			// 	username: usernameValue,
			// 	email	: emailValue,
			// 	password: passwordValue
			// };
			// objPeople.push(object);
			// console.log(objPeople);
				
		}
	};

	function isEmail(email) {
		return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
	}
}
else if( section.id == 'login' ){
	const loginForm = document.getElementById("login-form");
	const username = document.getElementById("username");
	const password = document.getElementById("password");

	loginForm.addEventListener( 'submit', (e)=> {
		e.preventDefault();
		
		getInfo();
		loginFlag = 1;
	});

	function getInfo(){
		const usernameValue = username.value;
		const passwordValue = password.value;
				
		if(usernameValue === '') {
			setErrorFor(username, 'Username cannot be blank');
		} else {
			setSuccessFor(username);
		}
		if(passwordValue === '') {
			setErrorFor(password, 'Password cannot be blank');
		} else {
			setSuccessFor(password);
		}
		if (usernameValue && passwordValue) {
			setTimeout(()=>{
				window.location.href = 'mobiles.html';
			}, 300);	
			

			// for(i=0; i < objPeople.length; i++){
			// 	if ((usernameValue === objPeople[i].username || usernameValue === objPeople[i].email) && passwordValue === objPeople[i].password ){
			// 		console.log(usernameValue + ' is logged in!' + ' with password as ' + passwordValue);
			// 		return;
			// 	}
			// 	console.log('wrong username or password!');
			// }
		}
	};
}
else if ( section.id =="separate-mobiles-section") {
	var productImg = document.getElementById("product-img");
	var smallImg   = document.getElementsByClassName("small-img");
	
	
	for(let i =0;i <smallImg.length; i++){
		smallImg[i].onclick = function() 
		{
			productImg.src = smallImg[i].src;
		}
	}

}
else if ( section.id =="about") {
	var about = document.getElementById('about-heading-downward');

	about.addEventListener('click', ()=> {
		window.location.href = '#about-info';
	});
}
else if (section.id == 'cart') {
	
	var placeOrder = document.getElementsByClassName("place-order-btn");
	var quantityItems = document.getElementById("quantity-items");
	var cartContainer = document.getElementById('cart-container');
	var cartItemContainer = document.getElementById('cart-item-container');
	var cartContainerItem2 = document.getElementById("cart-container-item2");
	var quantity = document.getElementById('quantity');
	var value = parseInt(quantity.value);
	var remove = document.getElementById('remove');
	var placeOrder = document.getElementById('placeOrder');
	var priceItemUpdate = document.getElementById('price-item-update');
	var totalPriceItemUpdate = document.getElementById('toal-price-item-update');
	var noOfItemsItemUpdate = document.getElementById('noOfItems-item-update');
	var priceUpdate = document.getElementById('price-update'); 
	var ifNotLoggedIn = document.getElementById('ifNotLoggedIn');
	const address = document.getElementById('address');

	console.log(loginFlag);

	// if (loginFlag != 1 && signupFlag !=1){
	// 	ifNotLoggedIn.style.display = 'flex';
	// 	cartContainer.style.display = 'none';
	// }
	// else {
	totalPriceItemUpdate.innerText = priceItemUpdate.innerText = priceUpdate.innerText;
	var price = priceItemUpdate.innerText.split(' ')[1];
	price = price.split(',');
	price = price[0] + price[1];
	var total = 0;
	function minusQty() {
		if (value > 1){
			value -= 1;
			quantity.value = noOfItemsItemUpdate.innerText = value;
			noOfItemsItemUpdate.innerText = value;
			total = parseFloat( price * value);
			totalPriceItemUpdate.innerText = '₹ ' + total.toString() +'.00';
		}
	}
	function plusQty() {
		if (value >= 1 && value <=3 ){			
			value += 1;
			quantity.value = noOfItemsItemUpdate.innerText = value;
			noOfItemsItemUpdate.innerText = value;
			total = parseFloat( price * value);
			totalPriceItemUpdate.innerText = '₹ ' + total.toString() +'.00';
		}
	}
	placeOrder.addEventListener( 'click', function placeOrder() {
		if (address.value.trim() == ''){
			alert('Fill the address!');
		}
		else{
			alert('Your order is placed successfully!, Thank you for choosing us, take a look at other products');
			var div = "<div><h1>Cart is empty, you haven't added anything to cart!<br>Check mobiles section to buy something!</h1><br></div>";
			div.style = "div ";
			var button = document.createElement('input');
			button.setAttribute('type', 'button');
			button.setAttribute('value', 'Shop Now');
			button.setAttribute('onclick', 'gotoMobiles()');
			button.style = "width: 100px;height: 40px;color: white;background-color: #002ccc;transition: transform 0.5s;border-radius: 5px;cursor: pointer;";

			cartItemContainer.style.flexDirection = 'column';
			cartItemContainer.style.alignItems = 'center';
			cartItemContainer.innerHTML = div;	
			cartItemContainer.appendChild(button);
			

			quantityItems.style.display = 'none';
			cartContainerItem2.style.display = 'none';
		}
	});
	remove.addEventListener( 'click', function remove() {
		cartItemContainer.style.display = 'flex';
		var div = "<div><h1>Cart is empty, you haven't added anything to cart!<br>Check mobiles section to buy something!</h1><br></div>";
		div.style = "div ";
		var button = document.createElement('input');
		button.setAttribute('type', 'button');
		button.setAttribute('value', 'Shop Now');
		button.setAttribute('onclick', 'gotoMobiles()');
		button.style = "width: 100px;height: 40px;color: white;background-color: #002ccc;transition: transform 0.5s;border-radius: 5px;cursor: pointer;";

		cartItemContainer.style.flexDirection = 'column';
		cartItemContainer.style.alignItems = 'center';
		cartItemContainer.innerHTML = div;	
		cartItemContainer.appendChild(button);
		

		quantityItems.style.display = 'none';
		cartContainerItem2.style.display = 'none';
	});
// }
}
function gotoMobiles() {
	location.href = "mobiles.html";
}

function setErrorFor( input, message ) {
	const formControl = input.parentElement; // .form-control
	const small = formControl.querySelector('small');
	//add error message to small
	small.innerText = message;

	//add error class to formControl 
	formControl.className = "form-control error";
	
};

function setSuccessFor(input) {
	const formControl = input.parentElement; // .form-control

	//add success class to formControl
	formControl.className = 'form-control success';
}
