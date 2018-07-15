/*
* @Author: Jessica Wang
* @Date:   2018-07-11 23:50:47
* @Last Modified by:   Jessica Wang
* @Last Modified time: 2018-07-12 21:54:38
*/
function test(){
	// let a=1;
	// console.log(a);//1
	// 
	// for(var i=1;i<3;i++){
	// 	console.log(i);//1  2
	// }
	// console.log(i);//3
	 
	// for(let i=1;i<3;i++){
	// 	console.log(i);//1  2
	// }
	// console.log(i);//VM40:13 Uncaught ReferenceError: i is not defined

	// let a=1;
	// let a=2;
	// 1.使用let定义变量，不能重复定义
}
 test();
// 1.let生命的变量只在自己的块作用域内有效
// 2.es6强制开启严格模式  （严格模式，es5中如果强调使用严格模式，‘use strict’；es6未写这句话，默认是严格模式；严格模式未声明，就会报引用错误）
// 
// 
function test1(){
	//常量：不能修改
	const PI=3.1415926;//必须 在声明的时候 赋值
	// const PI=8;
	const k={
		a:1
	}

	//console.log(PI,k);//Identifier 'PI' has already been declared
	//3.1415926 {a: 1}
	//
	 k.b=3;
	 console.log(PI,k);
}
test1();