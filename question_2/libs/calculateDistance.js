module.export = function distance(point1,point2){
	let absoluteDifferenceOfLongitudes=Math.abs(point2.longitude-point1.longitude);
	let centralAngle=Math.acos(
		Math.sin(point1.latitude)
		*Math.sin(point2.latitude)
		+Math.cos(point1.longitude)
		*Math.cos(point2.longitude)
		*Math.cos(absoluteDifferenceOfLongitudes)
	);
	let r=6371; //radius of the earth in kilometers
	let distance=r*centralAngle;
	return distance;
}
