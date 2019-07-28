// const fs = require('fs');

var login = document.getElementById('li');
var signup = document.getElementById('su');
var logininput = document.getElementById('email');
var passwordinput = document.getElementById('pass');

logininput.focus();
console.log('OK');

// var addloginid = function(){
// 	var idobj = {
// 		id: logininput.value,
// 		password: passwordinput.value,
// 	}
// 	idobj = JSON.stringify(idobj);
// 	fs.writeFileSync('logininids.json',idobj);
// 	console.log('Data input done');
// }

document.addEventListener('keypress',function(event){
	if(event.keyCode === 13)
		// addloginid();
		alert('Backend not done');
});

login.addEventListener('click',function(){
	// addloginid();
	alert('Backend Not done')
});

signup.addEventListener('click',function(){
	sessionStorage.email = logininput.value;
	window.open('../signup/signup.html');
});

