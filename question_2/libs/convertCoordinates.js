require ("./radiansMath");

/**
 * Converts a proprietary string into a latitude and longitude radial coordinates object
 *
 * @params {String} _coordinateString - A string in the style of "[latitude], [longitude]" that contains the latitude and longitude in the form of decimal degrees
 * @return {Object} coordinates - An object containing the latitude and longitude in the form of radials degrees as floats
 **/

module.exports = function convertCoordinatesIntoRadians(_coordinateString){
	let _coordinates=_coordinateString
		.split(",")
		.map(Number.parseFloat)
		.map(Math.radians);

	return {
		latitude:_coordinates[0],
		longitude:_coordinates[1]
	}
}
