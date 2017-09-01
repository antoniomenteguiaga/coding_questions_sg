/**
 * Converts from degrees to radians.
 *
 * @param {Float} Degrees - The decimal degrees to be converted to radian
 * @returns {Float} Radians - The degrees in the form of radians
 **/

Math.radians = function(degrees) {
	return degrees * Math.PI / 180.0;
};

/**
 * Converts from radians to degrees.
 *
 * @param {Float} Radians - The degrees in the form of radians
 * @returns {Float} Degrees - The degrees in the form of decimal degrees
 **/

Math.degrees = function(radians) {
	return radians * 180 / Math.PI;
};
