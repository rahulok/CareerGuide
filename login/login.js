console.log('OK');

var login = document.getElementById('li');
var signup = document.getElementById('su');
var logininput = document.getElementById('email');


document.addEventListener('keypress',function(event){
	if(event.keyCode === 13)
		alert('BacnkEnd not yet done!');
});

logininput.focus();


login.addEventListener('click',function(){
	alert('BacnkEnd not yet done!');
});

signup.addEventListener('click',function(){
	sessionStorage.email = logininput.value;
	window.open('../signup/signup.html');
});

