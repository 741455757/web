{
	// 简洁表达
	let o =1;
	let k =2;
	let es5={//es5写法
			o:o,
			k:k
	};
	let es6={
		o,
		k
	};
	console.log(es5,es6);//{o: 1, k: 2} {o: 1, k: 2}
	let es5_method={
		hello:function(){
			console.log('hello');
		}
	};
	let es6_method={
		hello(){
			console.log('hello');
		}
	};
	console.log(es5_method.hello(),es6_method.hello());//hello hello
}
{
	// 属性表达式
	let a='b';
	let es5_obj = {
		a:'c',
		b:'b'
	};
	let es6_obj = {
		[a]:'c'
	};
	console.log(es5_obj,es6_obj);//{a: "c", b: "b"} {b: "c"}
}
{
	// object新增API
	// 判断字符串是否相等
	console.log('字符串',Object.is('abc','abc'),'abc'==='abc');//字符串 true true
	console.log('数组',Object.is([],[]),[]===[]);//数组 false false
	console.log('拷贝',Object.assign({a:'a'},{b:'b'}));//拷贝 {a: "a", b: "b"}

	let test={k:123,o:456}
	for(let [key,value]  of Object.entries(test)){
		console.log([key,value]);// ["k", 123] ["o", 456]
	}
}
{
	// 扩展运算符  ...变量
	// babel对它的支持不是很友好  用的不多
	let {a,b,...c} = {a:'aaa',b:'bbb',c:'ccc',d:'ddd'};
	console.log(c);//{c: "ccc", d: "ddd"}
}