/*
* @Author: Jessica Wang
* @Date:   2018-07-11 21:50:52
* @Last Modified by:   Jessica Wang
* @Last Modified time: 2018-07-11 22:38:20
*/
define(function(require,exports,module){

	var Pagination = require('./modules/pagination.js');
	var pager = new Pagination(1,20,7);
	pager.render('.pagination');
})