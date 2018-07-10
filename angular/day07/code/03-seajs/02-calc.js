/*
* @Author: Jessica Wang
* @Date:   2018-07-10 22:01:17
* @Last Modified by:   Jessica Wang
* @Last Modified time: 2018-07-10 22:18:36
*/
/*
* @Author: Jessica Wang
* @Date:   2018-07-10 19:55:25
* @Last Modified by:   Jessica Wang
* @Last Modified time: 2018-07-10 21:43:59
*/


// 定义一个模块，遵循Seajs的写法
define(function(require,exports,module){
	// 此处是模块的私有空间
	// 载入convert模块
	// var convertor = require('./01-convertor.js');
	// console.log(convertor);
	// function add(a,b){
	// 	return convertor.convertToNumber(a)+convertor.convertToNumber(b);
	// }
	// function subtract(a,b){
	// 	return convertor.convertToNumber(a)-convertor.convertToNumber(b);
	// }
	// function multiply(a,b){
	// 	return convertor.convertToNumber(a)*convertor.convertToNumber(b);
	// }
	// function divide(a,b){
	// 	return convertor.convertToNumber(a)/convertor.convertToNumber(b);
	// }

	// 暴露模块的公共成员
	// exports.add = add;
	// exports.subtract = subtract;
	// exports.multiply = multiply;
	// exports.divide = divide;
	console.log(module.exports === exports);

	function Person(name, age, gender){
		this.name = name;
		this.age = age;
		this.gender = gender;
	}

	Person.prototype.sayHi = function(){
		console.log('name is '+this.name+' ;age is '+this.age);
	}

	module.exports = Person;
})