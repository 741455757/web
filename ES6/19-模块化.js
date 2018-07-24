// 对外提供变量，函数，类
// export let A=123;
// export function test(){
// 	console.log('test');
// }
// export class Hello{
// 	test(){
// 		console.log('class');
// 	}
// }

let A=123;
let test=function(){
	console.log('test');
}
class Hello{
	test(){
		console.log('class');
	}
}
export default{
	A,
	test,
	Hello
}