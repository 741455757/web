/*
* @Author: Jessica Wang
* @Date:   2018-07-10 19:55:25
* @Last Modified by:   Jessica Wang
* @Last Modified time: 2018-07-10 20:12:45
*/


// 定义一个模块，遵循Seajs的写法
define(function(require,exports,module){
	// 此处是模块的私有空间
	function add(a,b){
		return convert(a)+convert(b);
	}
	function subtract(a,b){
		return convert(a)-convert(b);
	}
	function multiply(a,b){
		return convert(a)*convert(b);
	}
	function divide(a,b){
		return convert(a)/convert(b);
	}

	// 暴露模块的公共成员
	exports.add = add;
	exports.subtract = subtract;
	exports.multiply = multiply;
	exports.divide = divide;
})