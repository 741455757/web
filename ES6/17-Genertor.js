{
	// generator基本定义
	let tell=function*(){//
		yield 'a';
		yield 'b';
		return 'c'
	};
	let k=tell();
	console.log(k.next());
	console.log(k.next());
	console.log(k.next());
	console.log(k.next());
}
// generator函数和Iterator接口的关系
// 因为任何一个对象的Iterator接口都部署在Symbol.iterator这个属性上
// generator函数就是一个遍历器生成函数  
// 所有可以把它赋值给Symbol.iterator
// 从而使对象具备了Iterator接口
// 之前讲的是自定义的Iterator接口
// 今天讲使用generator也可以作为遍历器的返回值
// object对象是没有for...of的，除非你给它部署了Iterator接口
{
	// 通过创建generator函数方式，给object部署Iterator接口
	let obj={};
	obj[Symbol.iterator] = function*(){
		yield 1;
		yield 2;
		yield 3;
	}
	for(let value of obj){
		console.log('value',value);//value 1 value 2 value 3
	}
}
{
	// 什么时候generator函数有一个自己最大的优势呢   ----状态机  ABC三种状态
	// 通过不断循环，拿到当前状态机的状态
	let state = function*(){
		while(1){
			yield 'A';
			yield 'B';
			yield 'C';
		}
	}
	let status = state();
	console.log(status.next());
	console.log(status.next());
	console.log(status.next());
	console.log(status.next());
	console.log(status.next());
}
{
	// 什么时候generator函数有一个自己最大的优势呢   ----状态机  ABC三种状态
	// 通过不断循环，拿到当前状态机的状态
	let state =async function(){
		while(1){
			await 'A';
			await 'B';
			await 'C';
		}
	}
	let status = state();
	console.log(status.next());
	console.log(status.next());
	console.log(status.next());
	console.log(status.next());
	console.log(status.next());
}
// 什么时候generator能发挥他的作用，讲两个实例案件

{
	// 抽奖次数的限制
	let draw = function(count){
		// 具体抽奖逻辑
		console.log(`剩余${count}次`)
	}
	let residue = function*(count){
		while(count>0){
			count--;
			yield draw(count);
		}
	}
	let star = residue(5);
	let btn=document.createElement('button');
	btn.id='start';
	btn.textContent='抽奖';
	document.body.appendChild(btn);
	document.getElementById('start').addEventListener('click', function(){
		star.next();
	},false);
}
// 服务端的某个状态定期的去变化
// 前端定时的去服务端取这个状态
// http是无状态的连接
// 怎么实时去取这个状态
// 2种方式，webSocket（浏览器兼容性不好）、长轮询（以前是定时器定期去请求一个接口）
// 通过generator的方式使长轮询代码更加优雅
{
	// 通过generator的方式使长轮询代码更加优雅
	// 长轮询
	let ajax= function*(){
		yield new Promise(function(){
			resolve({code:0});
		},200);
	}
	let pull = function(){
		let generator = ajax();
		let step=generator.next();
		step.value.then(function(d){
			if(d.code!=0){
				setTimeout(function(){
					console.log('wait');
					pull();
				},1000);
				
			}else{
				console.log(d);
			}
		})
	}
	pull();
	
}