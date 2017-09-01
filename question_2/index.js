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
			"partner":partner.organization,
			"office":office.address
		};
	});

	return _list.concat(_offices_within_distance);
},[]);

let _mailing_list_presented=_mailing_list
	.sort(function(a,b){
		return a.partner.charCodeAt(0) - b.partner.charCodeAt(0);
	})
	.map(function(partner){
		return partner.partner+" \t-\t "+partner.office+"\n";
	})
	.join("");

console.log("Partner Offices within 100km to Invite For A Meal");
console.log("=================================================");
console.log("Partner \t-\t Address");
console.log("------- \t-\t -------");
console.log(_mailing_list_presented);
