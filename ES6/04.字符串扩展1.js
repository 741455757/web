// 字符unicode的表示方法
{
	console.log('a',`\u0061`); //a a
	// 字符大于0xffff
	console.log('s',`\u20BB7`);//s ₻7当2个字符处理，前四个没有找到对应字符，后面的就显示7
	console.log('s',`\u{20BB7}`);//s 𠮷
}
{
	let s = '𠮷';
	console.log('length',s.length);//length 2    计算长度每2个字节是一个长度
	console.log('0', s.charAt(0));//0 �
	console.log('1', s.charAt(1));//1 �
	console.log('at0', s.charCodeAt(0));//at0 55362
	console.log('at1', s.charCodeAt(1));//at1 57271

	let s1 = '𠮷a';
	console.log('length',s1.length);//length 3
	console.log('code0', s1.codePointAt(0));//code0 134071
	console.log('code0', s1.codePointAt(0).toString(16));//code0 20bb7
	console.log('code1', s1.codePointAt(1));//code1 57271  后两个字节
	console.log('code2', s1.codePointAt(2));//code2 97
}

{
	console.log(String.fromCharCode('0x20bb7'));//ES5方法 ஷ
	console.log(String.fromCodePoint('0x20bb7'));//ES6方法 𠮷
}
// 字符串遍历器接口
{
	let str = '\u{20bb7}abc';
	for (var i = 0; i < str.length; i++) {
		console.log('es5',str[i]); //es5 �	es5 �	es5 a	es5 b    es5 c
	}

	for (let code of str) {
		console.log('es6',code);//es6 𠮷    es6 a	es6 b    es6 c
	}
}
{
	let str = "string";
	console.log('includes', str.includes('r'));//includes true
	console.log('start', str.startsWith('str'));//start true
	console.log('end', str.endsWith('ng'));//end true
}
{
	let str = 'abc';
	console.log('repeat',str.repeat(2));//repeat abcabc
}
// 模板字符串 把数据和模板拼成带结果的字符串
{
	let	name = "list";
	let info = "hello world";
	let m=`i am ${name} ${info}`;//注意：1.`2.数据项${变量}
	console.log(m);//i am list hello world
}
// ES7起草的，必须引入babel-plolly es6才能用
{//补白
	console.log('1'.padStart(2,'0'));//01
	console.log('1'.padEnd(2,'0'));//10
}
// 标签模板 目标：1.怎么用 ，2. 在哪里用
// 作用：1.防止xss攻击时用这个处理特别好2.处理多语言处理，不同 的return返回
{
	let user = {
		name: 'list',
		info: "hello world"
	};
	console.log(abc`i am ${user.name} ${user.info}`);//i am , ,listhello world
	function abc(s,v1,v2){
		console.log(s,v1,v2);//["i am ", " ", "", raw: Array(3)]0: "i am "1: " "2: ""length: 3raw: (3) ["i am ", " ", ""]0: "i am "1: " "2: ""length: 3__proto__: Array(0)__proto__: Array(0) "list" "hello world"
		return s+v1+v2;
	}
}
{
	console.log(String.raw`Hi\n${1+2}`);//Hi\n3  转义了下\\n  使用频率不高
	console.log(`Hi\n${1+2}`);//Hi
								//3
}