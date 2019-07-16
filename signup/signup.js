console.log("ok");

var email = document.getElementById('email');

if(sessionStorage.email)
	email.value = sessionStorage.email;