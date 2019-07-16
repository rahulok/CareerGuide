console.log('started question page');

var btnid = document.getElementById('qgrabbed');
btnid.innerHTML = " ' " + sessionStorage.q + " ' will be responded to soon!" ;

var questionsid = [];
var answersid = [];
var linkid = [];

for(var i = 0 ; i < 9 ; i++)
{
	questionsid.push( document.getElementById('q'+i) );
	answersid.push(document.getElementById('a'+i) );
	linkid.push(document.querySelector('.link'+i) );
}

var qarr = [];
var aarr1 = [];
var aarr2 = [];

qarr.push('Q: ' + 'I have opted for PCME.. what are the career options???');
aarr1.push('A: ' +  'Well very few people are aware about the PCME group i.e Physics,Chemistry,Mathematics and Electronics. Alike of PCME there is also a group' + '  ...');
aarr2.push('A: ' + 'Well very few people are aware about the PCME group i.e Physics,Chemistry,Mathematics and Electronics. Alike of PCME there is also a group of PCMC - Physics, Chemistry, Mathematics and Computer Science; BCME- Biology,Chemistry,Mathematics and Electronics. These are the further education options that are available for the students after 10+');

qarr.push('Q: ' + 'What is better, commerce or science for actuary?');
aarr1.push('A: ' + 'I am sure that you know what actuary science is all about. Actuaries sciences is a combination of mathematical and statistical principles. This helps the companies' + '...');
aarr2.push('A: ' + 'I am sure that you know what actuary science is all about. Actuaries sciences is a combination of mathematical and statistical principles. This helps the companies in reducing risks in investments and reduces the losses of companies.');

qarr.push('Q: ' + 'After M.Com should I go for M.Ed and NET or only NET?');
aarr1.push('A: ' + 'If you want to make your career in the field of lectureship or research then only National Eligibility Test is enough, there is no' + '...');
aarr2.push('A: ' + 'If you want to make your career in the field of lectureship or research then only National Eligibility Test is enough, there is no need to do M.ed. To take the UGC NET exam, you required only Master degree with 55% (for General Category) or 50% (for OBC/SC/ST/PwD/Transgenders).');

qarr.push('Q: ' + 'BBA and bjmc which is better after 12th for high pay salary?');
aarr1.push('A: ' + 'Both BBA and BJMC have good scope in India. What makes you think about only salary at this phase? If you think about only salary and choose' + '...');
aarr2.push('A: ' + 'Both BBA and BJMC have good scope in India. What makes you think about only salary at this phase? If you think about only salary and choose career accordingly, you may not enjoy your job. One must choose the career depending on his skills and interests.');

qarr.push('Q: ' + 'Which among these have more scope and offers better carrer oppurtunity ? BBA or B.com hons.?');
aarr1.push('A: ' + 'I would like to contact CareerGuide.com.com, This is a Best counselling platform in India, you would get perfect answer of your quarries' + '...');
aarr2.push('A: ' + 'I would like to contact CareerGuide.com.com, This is a Best counselling platform in India, you would get perfect answer of your quarries. I read your question, thanks to give detail information so i suggest you detail information. If you think BBA for degree its good for you because this is a foundation course of business administration.');

qarr.push('Q: ' + 'For which course I should opt for....is B pharma better option?');
aarr1.push('A: ' + 'Opting for a course would purely be based on what you are interested in. Depending on your interests can you make a choice. Pharmacy' + '...');
aarr2.push('A: ' + 'Opting for a course would purely be based on what you are interested in. Depending on your interests can you make a choice. Pharmacy is an undergraduate course, 1 4 years course. As a B-Pharma graduate, you would have the knowledge of production, maintenance and manufacturing of medicines. If you are interested into research you would have to get into M.Pharma followed by a PhD in your topic of interests.');

qarr.push('Q: ' + 'I Am In My First Year Of B.Pharm. Kindly Tell Me The The Scope For M.Pharmacy ?');
aarr1.push('A: ' + 'Thank you for choosing CareerGuide.com and writing to us. Pharmacy is an allied medical profession and it is indeed a reputable and highly recognisable ' + '...');
aarr2.push('A: ' + 'Thank you for choosing CareerGuide.com and writing to us. Pharmacy is an allied medical profession and it is indeed a reputable and highly recognisable career both in India and abroad. Especially pharmacy careers are well established in India due to its excellent medical facilities and resources.');

qarr.push('Q: ' + 'Hi..I completed b pharmacy recently. How can we become scientist through this field?');
aarr1.push('A: ' + 'You have mentioned about pharmacy, is it Bachelor in Pharmacy or Masters in Pharmacy. Let me tell something about the subject and its scope.' + '...');
aarr2.push('A: ' + 'You have mentioned about pharmacy, is it Bachelor in Pharmacy or Masters in Pharmacy. Let me tell something about the subject and its scope. Then you will have an idea about the research and other scopes. Pharmacy is a science and technique of preparing as well as dispensing drugs and medicines.');

qarr.push('Q: ' + 'I have completed my 12th and want to join the Indian Army. Which is the best way/choice to follow my dream?');
aarr1.push('A: ' + 'Hello, aspiring to join the army is very great. There are multiple ways to join the forces' + '...');
aarr2.push('A: ' + 'Hello, aspiring to join the army is very great. There are multiple ways to join the forces. You can give the NDA exam which is held twice a year or you could go for the tecnical entry scheme also if you have more than 85% in your twelth board. Hope this helps. via technical entry you become an engineer and with NDA a field officer.');


for(let i=0;i<9;i++)
{
	questionsid[i].insertAdjacentHTML('afterbegin',qarr[i]);
	answersid[i].insertAdjacentHTML('afterbegin',aarr1[i]);
}

for(let i=0;i<9;i++)
{
	linkid[i].addEventListener('mouseover',function(){
		answersid[i].innerHTML =  aarr2[i];
	});
}


