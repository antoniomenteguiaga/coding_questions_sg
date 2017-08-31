require('./libs/compare');
const deepClone=require('../libs/deepClone');

/**
 * Compares a control to the output of the "deepClone" function.
 *
 * @return {Boolean} - A Boolean representing the comparison of the output of "deepClone" and a JSON Object representing the expected output.
 **/

function deepCloneReturnsClone(){
	let input={name: "Paddy", address: {town: "Lerum", country: "Sweden"}};
	let control={name: "Paddy", address: {town: "Lerum", country: "Sweden"}};
	let test=deepClone(input);
	return Object.compare(control,test);
}

/**
 * A simple container function to run all the tests.
 **/

function runTests(){
	console.log("deepCloneReturnsClone? ",(deepCloneReturnsClone()?"Yes":"No"));
}

//Application starts here

runTests();
