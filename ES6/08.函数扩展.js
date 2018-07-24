{
	// 1.	参数默认值
	function test(x,y='world'){
		console.log('默认值',x,y);
	}

	test('hello');//默认值 hello world
	test('hello','kill');//默认值 hello kill
}

{
	// 作用域
	let x='text';
	function test(x,y=x){
		console.log('作用域',x,y);
	}
	test("kill");//作用域 kill kill
	test();//作用域 undefined undefined
	let c='text';
	function test2(c,y=x){
		console.log('作用域',c,y);
	}
	test2("kill");//作用域 kill text
}
{
	// rest参数
	// 把离散的值变成数组
	function test3(...arg){
		for(let v of arg){
			console.log('rest',v);
		}
	}
	test3(1,2,3,4,5);//rest 1 rest 2 rest 3 rest 4
}
{
	// 把数组变成离散的值
	console.log(...[1,2,3]);//1 2 3
	console.log('a',...[1,2,3]);//a 1 2 3
}
{
	// 箭头函数
	let arrow = v => v*2;
	let arrow2 = ()=>5;
	console.log('arrow',arrow(3));//arrow 6
	console.log('arrow2',arrow2());//arrow2 5
}
{
	// 6.	尾调用：存在于函数式编程，关键函数的最后一句话是不是一个函数
	function tail(x){
		console.log('tail',x);
	}
	function fx(x){
		return tail(x);
	}
	fx(123);//tail 123
}