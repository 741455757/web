{
	let ajax=function(callback){
		console.log('执行');
		setTimeout(function(){
			callback&&callback.call()
		}, 1000);
	};
	ajax(function(){
			console.log('timeout1');
	});
	// 回调函数的方式，代码的执行顺序，阅读不方便
}
{
	// Promise
	// 编写和可读性上有很大的优势
	let ajax=function(callback){
		console.log('执行2');
		return new Promise(function(resolve,reject){
			// resolve  要执行下一步的操作
			// reject 要中断当前的操作
		
			setTimeout(function(){
				resolve();
			}, 1000);
		});	
	};
	ajax().then(function(){
		//ajax执行完会返回一个实例，而这个实例有then方法表示执行下一步
		console.log('promise','timeout2');//执行2 Promise {<pending>} promise timeout2
	});
}
{
	// A=>B=>C a执行完执行b，b执行完执行c
	let ajax=function(callback){
		console.log('执行3');
		return new Promise(function(resolve,reject){
			// resolve  要执行下一步的操作
			// reject 要中断当前的操作
		
			setTimeout(function(){
				resolve();
			}, 1000);
		});	
	};
	ajax()
		.then(function(){
		return new Promise(function(resolve,reject){
			// resolve  要执行下一步的操作
			// reject 要中断当前的操作
		
			setTimeout(function(){
				resolve();
			}, 2000);
		})
		.then(function(){
			console.log('timeout3');
		});	
	});
}
{
	// 串行过程中，中间某一步出错，怎么捕获这个错误
	let ajax=function(num){
		console.log('执行4');
		return new Promise(function(resolve,reject){
			if(num>5){
				resolve();
			}else{
				throw new Error('出错了');
			}
		})
	}
	ajax(6).then(function(){
		console.log('log',6);
	}).catch(function(err){
		console.log('catch',err);
	});//log 6
	ajax(3).then(function(){
		console.log('log',3);
	}).catch(function(err){
		console.log('catch',err);//catch Error: 出错了
	})
}
{
	// 两个场景，Promise的高级用法
	// 所有的图片加载完再添加到页面
	function loadImg(src){
		return new Promise((resolve,reject)=>{
			let img = document.createElement('img');
			img.src = src;
			img.onload=function(){
				resolve(img);
			};
			img.onerror=function(err){
				reject(err);
			}
		})
	}

	function showImgs(imgs){
		imgs.forEach(function(img){
			document.body.appendChild(img);
		})
	}
	// loadImg返回的是一个加载图片的promise实例
	// 三张图片都加载完毕，就触发showImg逻辑
	// 如果有一个图片在加载中就不会显示出来
	Promise.all([//下面的三张图片加载完，才能触发新的promise对象
		loadImg('https://img1.doubanio.com/view/photo/albumcover/public/p2327460628.webp'),
		loadImg('https://img3.doubanio.com/view/photo/albumcover/public/p1530178941.webp'),
		loadImg('https://img3.doubanio.com/view/photo/albumcover/public/p2516893255.webp')
		]).then(showImgs);
}
{
	// 三张图片，哪个加载好就先显示哪个图片
	// 有一个图片加载完，就显示到页面
	function loadImg(src){
		return new Promise((resolve,reject)=>{
			let img = document.createElement('img');
			img.src = src;
			img.onload=function(){
				resolve(img);
			};
			img.onerror=function(err){
				reject(err);
			}
		})
	}

	function showImgs(imgs){
			let p = document.createElement('p');
			p.appendChild(imgs);
			document.body.appendChild(p);
	}
	// Promise.race多个实例中，有一个状态率先改变，最后race实例也会跟着改变
	Promise.race([
		loadImg('https://img1.doubanio.com/view/photo/albumcover/public/p2327460628.webp'),
		loadImg('https://img3.doubanio.com/view/photo/albumcover/public/p1530178941.webp'),
		loadImg('https://img3.doubanio.com/view/photo/albumcover/public/p2516893255.webp')
		]).then(showImgs);
}
