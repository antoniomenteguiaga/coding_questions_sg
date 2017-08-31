module.export = function convertCoordinatesIntoRadians(_coordinateString){
	let _coordinates=_coordinateString
		.trim()
		.split(",")
		.map(Number.parseFloat)
		.map(Math.radians);

	return {
		latitude:_coordinates[0],
		longitude:_coordinates[1]
	}
}
