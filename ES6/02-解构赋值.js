// 数组解构赋值
{
	let a,b,rest;
	[a,b]=[1,2];
	console.log(a,b);//1 2
}
{
	let a,b,rest;
	[a,b,...rest]=[1,2,3,4,5,6];
	console.log(a,b,rest);//1 2 [3, 4, 5, 6]
}
// 对象解构赋值
{
	let a,b;
	({a,b}={a:1,b:2});
	console.log(a,b);//1 2
}

{
	let a,b,c;
	({a,b,c}={a:1,b:2});
	console.log(a,b,c);//1 2 undefined
}

{
	let a,b,c;
	({a,b,c=3}={a:1,b:2});
	console.log(a,b,c);//1 2 3
}

{
	let a=1;
	let b=2;
	[a,b] = [b,a];
	console.log(a,b);//2 1
}

{
	function fn(){
		return [1,2];
	}
	let a,b;
	[a,b] = fn();
	console.log(a,b);//1 2
}
{
	function f(){
		return [1,2,3,4,5];
	}

		let a,b,c;
		[a,,,b] =  f();
		console.log(a,b);//1 4
}
{
	function f(){
		return [1,2,3,4,5];
	}

	let a,b,c;
	[a,...b] =  f();
	console.log(a,b);//1 [2, 3, 4, 5]
}

{
	function f(){
		return [1,2,3,4,5];
	}

	let a,b,c;
	[a,,...b] =  f();
	console.log(a,b);//1 [3, 4, 5]
}

{
	let o = {p:42,q:true};
	let {p,q}=o;
	console.log(p,q);//42 true
}
{
	let {a=10,b=5}={a:3};
	console.log(a,b);//3 5
}
{
	let metaData = {
		title: 'abc',
		test: [{
			title:'test',
			desc:'description'
		}}
	}
	let {title:esTitle,test[{title:cntitle}]} = metaData;
	console.log(esTitle,cntitle);
}

