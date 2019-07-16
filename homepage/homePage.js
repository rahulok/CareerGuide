// ------------------------------Getting the ids-----------------------------------------
var questionid = document.getElementById('question');
var btnid = document.getElementById('askbtn');
var contact1 = document.getElementById('contact1');
var contact2 = document.getElementById('contact2');



// ------------------------------Clear the browser storage--------------------------------
localStorage.clear();
sessionStorage.clear();

questionid.focus();                    		//Set the focus to the question

let question;

document.addEventListener('keypress',function(event) {
	if(event.keyCode === 13)
	{
		question = questionid.value;
		if(question.length === 0 )
			alert('Question field is blank');
		else
		{
			console.log('The question is ' + question);
			sessionStorage.q = question;
			window.open('../questionPage/questionPage.html');

		}
	}
})

btnid.addEventListener('click',function(){
	question = questionid.value;
	if(question.length === 0)
		alert('Question field is blank');
	else
	{
		console.log('The question is ' + question );
		sessionStorage.q = question;
		window.open('../questionPage/questionPage.html');
	}
});

contact1.addEventListener('click',function(){

	alert('You can contact us at\nrahul.30213021@gmail.com\nPh: 9610085083');
    // setTimeout(function(){                                  //This is working!!!
    //     window.scrollTo(0, 2000);
    // },0)
    //alert('asdf');
});

contact2.addEventListener('click',function(){	
	alert('You can contact us at\nrahul.30213021@gmail.com\nPh: 9610085083');
});




