require('./libs/compare');
const deep_clone=require('../libs/deep_clone');

/**
 * Compares a control to the output of the "deep_clone" function.
 *
 * @return {Boolean} - A Boolean representing the comparison of the output of "deepClone" and a JSON Object representing the expected output.
 **/

function deep_clone_returns_clone(){
	let input={name: "Paddy", address: {town: "Lerum", country: "Sweden"}};
	let control={name: "Paddy", address: {town: "Lerum", country: "Sweden"}};
	let test=deep_clone(input);
	return Object.compare(control,test);
}

/**
 * A simple container function to run all the tests.
 **/

function run_tests(){
	console.log("deep_clone returns clone? ",(deep_clone_returns_clone()?"Yes":"No"));
}

//Application starts here

run_tests();
