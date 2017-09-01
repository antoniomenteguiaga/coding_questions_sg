const convertCoordinates = require("./libs/convertCoordinates");
const calculateDistance = require("./libs/calculateDistance");
let partners = require("./data/partners");

let _centralLondonOfficeCoordinates=convertCoordinates("51.515419, -0.141099");

let _mailingList=partners.reduce(function(_list,partner){
	let _officesWithinDistance=partner.offices.map(function(office){
		office.coordinates = convertCoordinates(office.coordinates);
		return office;
	}).filter(function(office){
		return calculateDistance(office.coordinates,_centralLondonOfficeCoordinates) <= 100;
	}).map(function(office){
		return {
			"organization":partner.organization,
			"address":office.address
		};
	});
	
	return _list.concat(_officesWithinDistance);
},[]);

console.log(_mailingList);
