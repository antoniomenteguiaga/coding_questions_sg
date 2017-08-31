/**
 * Take an object and create a copy of it. Then return the cloned object.
 *
 * @param {Object} source - The Object to be cloned.
 * @return {Object} clone - The clone of the source Object.
 **/

module.exports = function deepClone(source){
	return Object.assign({},source);
}
