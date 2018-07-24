{
	// 什么是Iterator接口
	// Iterator的基本用法
	// for..of
	let arr=['hello','world'];
	let map =arr[Symbol.iterator]();
	console.log(map.next());//{value: "hello", done: false}
	console.log(map.next());//{value: "world", done: false}
	console.log(map.next());//{value: undefined, done: true}
}
{
	// Object没有内置的Iteraor接口接口
	// 自定义Iteraor接口让for...of可以循环
	let obj ={
		start:[1,3,2],
		end:[7,9,8],
		[Symbol.iterator](){//[变量]es6新增的方式
			let self =this;
			let index =0;
			let arr=self.start.concat(self.end);
			let len=arr.length;
			return {
				next(){
					if(index<len){
						return{
							value:arr[index++],
							done:false
						}
					}else{
						return{
							value:arr[index++],
							done:true
						}
					}
				}
			}
		}
	}
	for(let key of obj){
		console.log(key);
	}//1,3,2,7,9,8
}
{
	let arr=['hello','world'];
	for(let value of arr){
		console.log('value',value);
	}//value hello value world
}
