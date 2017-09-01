/**
 * This function uses the Great-Circle Distance formula. It assumes that we're only dealing with earth. It returns the distance in kilometers.
 * https://en.wikipedia.org/wiki/Great-circle_distance
 *
 * @param {Object} point1 - The first point, an object containing a longitude and latitude in radians.
 * @param {Object} point2 - The second point, an object containing a longitude and latitude in radians.
 * @returns {float} distance - The distance between point1 and point2 in kilometers
 **/

module.exports = function distance(point1,point2){
	let absoluteDifferenceOfLongitudes=Math.abs(point2.longitude-point1.longitude);
	let centralAngle=Math.acos(
		(
			(
				Math.sin(point1.latitude)
				*Math.sin(point2.latitude)
			)
			+
			(
				Math.cos(point1.latitude)
				*Math.cos(point2.latitude)
				*Math.cos(absoluteDifferenceOfLongitudes)
			)
		)
	);
	let r=6371.00; //radius of the earth in kilometers
	let distance=r*centralAngle;
	return distance;
}
