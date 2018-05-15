/**
 * Module dependencies.
 */
 /*jshint esversion: 6 */
let wrapper = {
	wrapThis: (req, res, controllerFunction) => {
		return controllerFunction(req,res);
	}
};
module.exports = wrapper;