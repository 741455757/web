/*
* @Author: Jessica Wang
* @Date:   2018-07-10 23:25:00
* @Last Modified by:   Jessica Wang
* @Last Modified time: 2018-07-10 23:48:09
*/


define(function(require, exports,module){
	// console.log("module1----start");
	// // require必须执行完成后(./03-module2.js加载完成)才能拿到返回值
	// var module2 = require('./03-module2.js');//阻塞代码执行
	// // js中阻塞会有卡顿的情况出现
	// console.log("module1----end");



	console.log("module1----start");
	// require必须执行完成后(./03-module2.js加载完成)才能拿到返回值
	require.async('./03-module2.js',function(){

	});//此处不会阻塞代码的执行
	
	console.log("module1----end");

})