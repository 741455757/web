{
	// 声明9
	// a1和a2永远不可能相等
	let a1 = Symbol();
	let a2 = Symbol();
	console.log(a1===a2);//false
	// 声明了这种变量，还得把它取回来
	//  Symbol.for('key')会检查这个key值是否在全局注册过，
	//  如果注册过就返回那个值，如果没注册过，就调用symbol()生成一个独一无二的值
	let a3 = Symbol.for('a3');
	let a4 = Symbol.for('a3');
	console.log(a3===a4);//true
}
{
	// 避免冲突，不同的key含义是不一样的
	let a1= Symbol.for('abc');
	let obj ={
		[a1]: 'abc',
		'abc':'234',
		'c':'567'
	};
	console.log('obj',obj);//{abc: "234", c: "567", Symbol(abc): "abc"}
	// 数组中如果key是Symbol属性的，通过for in和let of是拿不到这个属性值得
	for(let [key,value] of Object.entries(obj)){
		console.log('let of',key,value);
	}//let of abc 234 let of c 567

	Object.getOwnPropertySymbols(obj).forEach(function(item){
		console.log(obj[item]);//abc
	});
	Reflect.ownKeys(obj).forEach(function(item){
		console.log('ownKeys',item,obj[item]);
	});//ownKeys abc 234 ownKeys c 567  ownKeys Symbol(abc) abc
}
