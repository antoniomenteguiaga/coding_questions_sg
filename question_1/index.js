/**
 * Take an object and create a copy of it. Then return the cloned object.
 *
 * @param {Object} source - The Object to be cloned.
 * @return {Object} clone - The clone of the source Object.
 **/

function deepClone(source){
	return Object.assign({},source);
}

module.export={
	deepClone:deepClone
};
