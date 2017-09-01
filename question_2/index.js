/**
 * This program prints a list of partner offices within 100km of the Central London Office.
 **/

const convert_coordinates = require("./libs/convert_coordinates");
const calculate_distance = require("./libs/calculate_distance");
let partners = require("./data/partners");

let _central_london_office_coordinates=convert_coordinates("51.515419, -0.141099");

let _mailing_list=partners.reduce(function(_list,partner){
	let _offices_within_distance=partner.offices.map(function(office){
		office.coordinates = convert_coordinates(office.coordinates);
		return office;
	}).filter(function(office){
		return calculate_distance(office.coordinates,_central_london_office_coordinates) <= 100;
	}).map(function(office){
		return {
			"organization":partner.organization,
			"address":office.address
		};
	});
	
	return _list.concat(_offices_within_distance);
},[]);

console.log(_mailing_list);
