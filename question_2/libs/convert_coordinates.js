require ("./radians_math");

/**
 * Converts a proprietary string into a latitude and longitude radial coordinates object
 *
 * @params {String} _coordinateString - A string in the style of "[latitude], [longitude]" that contains the latitude and longitude in the form of decimal degrees
 * @return {Object} coordinates - An object containing the latitude and longitude in the form of radials degrees as floats
 **/

module.exports = function convertCoordinatesIntoRadians(_coordinate_string){
	let _coordinates=_coordinate_string
		.split(",")
		.map(Number.parseFloat)
		.map(Math.radians);

	return {
		latitude:_coordinates[0],
		longitude:_coordinates[1]
	}
}
