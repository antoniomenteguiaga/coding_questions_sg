const convert_coordinates=require('../libs/convert_coordinates');
const calculate_distance=require('../libs/calculate_distance');
require ('../libs/radians_math');

/**
 * A test for the convert_coordinates function that converts decimal strings for London and New York
 *
 * @returns {Boolean} pass - A boolean determining whether or not the tests have been succesful.
 **/

function decimal_string_for_new_york_and_london_converted_into_radian_coordinate_objects(){
	let london="51.509865, -0.118092";
	let newYork="40.730610, -73.935242";

	let expectedLondonResult={
		latitude: 0.8990167415077889,
		longitude: -0.0020610942202651437
	}

	let expectedNewYorkResult={
		latitude: 0.7108832508457276,
		longitude: -1.2904134061587973
	}

	let actualLondonResult=convert_coordinates(london);
	let actualNewYorkResult=convert_coordinates(newYork);

	let pass=true;

	if(actualLondonResult.latitude !== expectedLondonResult.latitude) pass=false;
	if(actualLondonResult.longitude !== expectedLondonResult.longitude) pass=false;
	if(actualNewYorkResult.latitude !== expectedNewYorkResult.latitude) pass=false;
	if(actualNewYorkResult.longitude !== expectedNewYorkResult.longitude) pass=false;

	return pass;
}


/**
 * A test for the radians math functions.
 *
 * @returns {Boolean} pass - A boolean determining whether or not the tests have been succesful.
 **/

function decimal_converted_into_radian(){
	let tests=[
		[0,0],
		[45,Math.PI/4],
		[90,Math.PI/2],
		[180,Math.PI],
		[360,2*Math.PI]
	];
	let pass=tests.reduce(function(_pass,test){
		if(Math.radians(test[0]) !== test[1]){
			return false;
		}
		return _pass;
	},true);

	return pass;
}

/**
 * A test for the calculate_distance function. It determines if the calculated distance between New York and London is within the expected range.
 *
 * @returns {Boolean} pass - A boolean determining whether or not the tests have been succesful.
 **/

function distance_between_london_and_new_york(){
	let londonCoordinates={
		latitude: 0.8990167415077889,
		longitude: -0.0020610942202651437
	}

	let newYorkCoordinates={
		latitude: 0.7108832508457276,
		longitude: -1.2904134061587973
	}

	let expectedDistanceRange=[5563,5565];
	let actualDistance=calculate_distance(londonCoordinates,newYorkCoordinates);
	let pass=true;
	if(actualDistance<expectedDistanceRange[0] || actualDistance>expectedDistanceRange[1]){
		pass=false;
	}

	return pass;
}

/**
 * A simple container function to run all the tests.
 **/

function run_tests(){
	console.log("Distance between London and New York is accurate? ",(distance_between_london_and_new_york()?"Yes":"No"));

	console.log("Decimal is converted into radian accurately? ",(decimal_converted_into_radian()?"Yes":"No"));

	console.log("Decimal strings for New York and London are converted into Radian Coordinate Objects correctly?",(decimal_string_for_new_york_and_london_converted_into_radian_coordinate_objects()?"Yes":"No"));
}

//Testing starts here

run_tests();
