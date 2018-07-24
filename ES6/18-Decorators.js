{
	// 修饰器的定义和使用
	// 比如：修饰器限制某个功能是只读的
	let readonly = function(target,name,descriptor){
		descriptor.writable =false;
		return descriptor;
	}
	class Test{
		@readOnly
		time(){
			return '2017-03-11'
		}
	}
	let test = new Test();
	/*test.time=function(){
		console.log('rest time');
	}*/
	console.log(test.time());
}
{
	let typename = function(target,name,descriptor){
		target.myname ='hello';//target类本身
	}
	@typename
	class Test{

	}
	console.log('类修饰符',Test.name);
}
// 第三方库写了很多修饰库的方法
// 把常规的修饰器已经包含进去了
// 第三方修饰器库js库：core-decorators;npm install decorators
{
	// 日志系统
	// 页面中广告
	let log=(type)=>{
		return function(target,name,descriptor){
			let src_method=descriptor.value;
			descriptor.value=(...arg)=>{
				src_method.apply(target,arg);
				console.inf(`log${type}`);
			}
		}
	}
	class AD{
		@log('show')
		show(){
			console.info(`ad is show`)
		}
		@log('click')
		click(){
			console.info(`ad is click`)
		}
		ad.show();
		ad.click();
	}
}