const myImage = document.querySelector("img");

myImage.onclick = function () {
	const mySrc = myImage.getAttribute("src");

	if (mySrc==="images/huzaifa.jpg"){
		myImage.setAttribute("src","images/huzaifa2.jpg");
	}
	else{
		myImage.setAttribute("src","images/huzaifa.jpg");
	}
}

const myButton = document.querySelector("button");
const myHeading = document.querySelector("h1");

function setUserName(){
	const myName = prompt('Please enter your name');
	if(!myName){
		setUserName();
	}
	else{
		localStorage.setItem("name",myName);
		myHeading.textContent = `Hey there ${myName}`;
	}
	
}

if(!localStorage.getItem("name")){
	setUserName();
}
else{
	const storedName = localStorage.getItem("name");
	myHeading.textContent = `Hey there ${storedName}`;
}

myButton.onclick = function() {setUserName();}