/*
* @Author: Jessica Wang
* @Date:   2018-07-10 21:28:36
* @Last Modified by:   Jessica Wang
* @Last Modified time: 2018-07-10 21:35:31
*/
'use strict';
/**
 * 转换模块 导出成员 convertToNumber
 * @param  {[type]} require                            [description]
 * @param  {[type]} exports                            [description]
 * @param  {[type]} modules){	exports.convertToNumber [description]
 * @return {[type]}                                    [description]
 */
define(function(require,exports,modules){
	exports.convertToNumber = function(input){
		return parseInt(input);
	}

});