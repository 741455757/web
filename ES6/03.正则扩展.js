// 构造函数的变化 
{

	var regex = new RegExp("xyz", "i"); //ES5写法
	var regex2 = new RegExp(/xyz/i);
	console.log(regex.test("xyz123"), regex2.test("xyz123"));//true true


	var regex3 = new RegExp(/xyz/ig, "i");
	console.log(regex3.flags);//i  regex3.flags获取修饰符的函数es6新增的
}
//  y修饰符
{
	var s="bbb_bb_b";
	let a1 =/b+/g;
	let a2 = /b+/y;
	console.log('one',a1.exec(s),a2.exec(s)); //one ["bbb", index: 0, input: "bbb_bb_b", groups: undefined]0: "bbb"groups: undefinedindex: 0input: "bbb_bb_b"length: 1__proto__: Array(0) ["bbb", index: 0, input: "bbb_bb_b", groups: undefined]
	console.log('two',a1.exec(s),a2.exec(s)); //two ["bb", index: 4, input: "bbb_bb_b", groups: undefined] null
	console.log(a1.sticky,a2.sticky);//false true
}
{
	//四个字节当成两个字母 两个字符
	console.log('u-1',/^\uD830/.test('\uD83D\uDC2A'));//u-1 true
	//当成一个字母 一个字符
	console.log('u-2',/^\uD830/u.test('\uD83D\uDC2A'));//u-2 false
	console.log(/\u{61}/.test('a'));//false
	console.log(/\u{61}/u.test('a'));//true   unicode编码，加u才能被识别
	console.log(`\u20BB7`);

	let s='₻7';
	console.log('u', /^.$/.test(s));//u false
	console.log('u-2', /^.$/u.test(s));//u true

	console.log('test',/₻7{2}/.test(s));//test false
	console.log('test',/₻7{2}/u.test(s));//test true
}
}