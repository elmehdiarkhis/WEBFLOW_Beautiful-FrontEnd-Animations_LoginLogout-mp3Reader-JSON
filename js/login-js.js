
var btnLogin = document.querySelector("#btnLogin");
var wrapperLogin = document.querySelector(".wrapperLogin");
var created=document.querySelector(".created");

var objPeople = [
	{ // Object @ 0 index
		email: "elmehdi.arkhis@gmail.com",
		password: "mehdi"
	},

    { // Object @ 1 index
		email: "adam.jlil@gmail.com",
		password: "adam"
	}
]


btnLogin.addEventListener("click", function(event){
    event.preventDefault()
    getInfo()
  });



function getInfo() {
	var email = document.getElementById('email').value
	var password = document.getElementById('password').value
    var wrapper = document.querySelector(".wrapper");
    var incorrectText = document.querySelector("#incorrect");


	for(var i = 0; i < objPeople.length; i++) {
		// check is user input matches email and password of a current index of the objPeople array
		if(email == objPeople[i].email && password == objPeople[i].password) {
			console.log(email + " is logged in!!!")
            location.href = 'loggedin.html';
            wrapper.classList.add("hide");
            wrapperLogin.classList.add("show");
			// stop the function if this is found to be true
			return
		}
	}

	console.log("incorrect email or password")
    wrapper.style.animation="shake 0.4s ease";
    wrapper.style.border="5px solid red";
    setTimeout(() => {
        wrapper.style.animation="";
        wrapper.style.border="none";
    }, 300);

    incorrectText.innerHTML="incorrect email or password";
    setTimeout(() => {
        incorrectText.innerHTML="";
    }, 1000);
}


var btnSignup = document.querySelector("#btnSignup");




const addUser = (ev)=>{
    console.log("mehdi");
    console.log(objPeople);

    let newUser = {
       email: document.querySelector("#email-s").value,
	    password:document.querySelector("#pass-s").value
    }

    created.style.opacity="1";
    setTimeout(() => {
        created.style.opacity="0";
    }, 1500);

    objPeople.push(newUser);
    console.log(objPeople);

}

var passS=document.querySelector("#pass-s").value;
var passSTwo=document.querySelector("#passSTwo").value;

if (passS==passSTwo){
    btnSignup.addEventListener("click", function(event){
        event.preventDefault()
        addUser();
    });
}else{
    created.innerHTML="wrong passowrd";
}
