{
	//原始对象存储真时数据   供应商
	let obj={
		time:'2017-03-11',
		name:'net',
		_r:123
	};
	//代理商
	let monitor = new Proxy(obj,{
		//(代理)拦截对象属性的读取
		get(target,key){
			return target[key].replace('2017','2018');
		},
		//(代理)拦截对象设置属性
		set(target,key,value){
			if(key==='name'){
				return target[key]=value;
			}else{
				return target[key];
			}
		},
		//拦截key in object操作
		has(target,key){
			if(key==='name'){
				return target[key]
			}else{
				return false;
			}
		},
		// 拦截delete
		deleteProperty(target,key){
			if(key.indexOf('_')>-1){
				delete target[key];
				return true;
			}else{
				return target[key]
			}
		},
		// 拦截Object.keys,Object.getOwnPropertySymbols,Object.getOwnPropertyNames
		ownKeys(target){
			return Object.keys(target).filter(item=>item!='time')
		}
	});
	console.log('get',monitor.time);//get 2018-03-11
	monitor.time='2018';
	monitor.name='mukewang';
	console.log('set',monitor.time,monitor);//set 2018-03-11 Proxy {time: "2017-03-11", name: "mukewang", _r: 123}
	console.log('has','name' in monitor,'time' in monitor);//has true false

	// delete monitor.time;
	// console.log('delete',monitor);//delete Proxy {time: "2017-03-11", name: "mukewang", _r: 123}
	// delete monitor._r;
	// console.log('delete',monitor);//delete Proxy {time: "2017-03-11", name: "mukewang"}
	console.log('OwnKeys',Object.keys(monitor));//OwnKeys (2) ["name", "_r"]
}
{
	let obj ={
		time: '2017-03-11',
		name: 'net',
		_r:123
	};
	console.log('Reflect get',Reflect.get(obj,'name'));//Reflect get net
	Reflect.set(obj,'name','mukewang');
	console.log(obj);//{time: "2017-03-11", name: "mukewang", _r: 123}

}

{
	// 3.	Proxy和Reflect的适用场景 校验
	function validator(target,validator){
		return new Proxy(target,{
			_validator:validator,
			set(target,key,value,proxy){
				if(target.hasOwnProperty(key)){
					let va = this._validator[key];//拿出条件
					if(!!va(value)){//如果存在满足条件，返回代理
						return Reflect.set(target,key,value,proxy);
					}else{
						throw Error(`不能设置${key}到${value}`);
					}
				}else{
					throw Error(`${key} 不存在`);
				}
			}
		})
	}
	// 设置一个过滤选项，条件
	const personValitors={
		name(val){
			return typeof val ==='string'
		},
		age(val){
			return typeof val==='number'&&val>18
		}
	}
	class Person{
		constructor(name,age){
			this.name =name;
			this.age =age;
			return validator(this,personValitors);//返回代理 Proxy对象拦截（代理）了person对象
			// this是person的实例
		}
	}
	const person=new Person('lilei',30);
	console.info(person);//Proxy {name: "lilei", age: 30}
	// 为什么下面这个设置错误，因为我们返回的不是this而是this的代理
	//person.name = 48;//VM186:11 Uncaught Error: 不能设置name
	person.name='han mei mei';
	console.info(person);//Proxy {name: "han mei mei", age: 30}
	// 通过代理将对象本身和业务逻辑分开 后期代码利于维护
}
