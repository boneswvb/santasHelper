const fs = require('fs');

// *****function to calculate the value of '(' & ')'*****

// const riddle = [ '(', ')', '(' ];

// const answerTotal = [];

// const answer = riddle.map((output) => {
// 	if(output === '(') {
// 		answerTotal.push(1)		
// 	}else{
// 		answerTotal.push(-1)	
// 	}
// });
// console.log(answerTotal.reduce((a, b) => a + b, 0));


// *****function read the .txt file and adding it to []*****

const riddle = [];

fs.readFile('./riddle.txt', (err, data) => {
	// console.time('timer')
	if (err) {
		console.log('eeerrroooooorrr');
	}
	console.log(data.toString());
	// console.timeEnd('timer')
})

console.log(riddle);