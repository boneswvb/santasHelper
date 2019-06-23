const fs = require('fs');

fs.readFile('./riddle.txt', (err, data) => {
	console.time('timer')
	const riddle = [];
	const answerTotal = [];
	if (err) {
		console.log('eeerrroooooorrr');
	}
	riddle.push(data.toString().split(""));
const answer = riddle[0].map((output) => {
	if(output === '(') {
		answerTotal.push(1)		
	}else{
		answerTotal.push(-1)	
	}
});
console.log('answerTotal', answerTotal.reduce((a, b) => a + b, 0));
console.timeEnd('timer')
})
