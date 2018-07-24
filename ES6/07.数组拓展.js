
{
	//Array.of 将数组变量转换成数组
	let arr=Array.of(3,4,7,9,11);
	console.log('arr=',arr);//arr=  [3, 4, 7, 9, 11]
	let empty =Array.of();
	console.log("empty",empty);//empty []
}
{
	//Array.from 把一些伪数组或者集合转换成真正的数组
	// 如doument.querySelectAll 查到p标签是集合  用数组的方法 用Array。from

	let p =document.querySelectorAll('p');
	let pArr = Array.from(p);
	pArr.forEach(function(item){
		console.log(item.textContent); //111 222 3333
	})
	// Array.from除了有转换的功能，还有个map的用法  数据遍历了一遍
	console.log(Array.from([1,2,3],function(item){return item*2}));//[2, 4, 6]
}
{
	console.log("fill-7",[1,'a',undefined].fill(7));//fill-7 [7, 7, 7]
	console.log("fill,pos",['a','b','c','d','e'].fill(7,1,3));//1,3是起始位置和结束位置;fill,pos  ["a", 7, 7, "d", "e"]
}
{//常用
	for (let index of ['1','c','ks'].keys()) {
		//获取数组所有下标的集合
		console.log('keys',index);//keys 0 keys 1 keys 2
	}

	for (let value of ['1','c','ks'].values()) {//存在
		console.log('values',value);//values 1 values c values ks
	}
	for (let [index,value] of ['1','c','ks'].entries()) {
		console.log('values',index,value);//values 0 1 values 1 c values 2 ks
	}
}
{//使用频率不高
	// .copywithin(0,3,4)
	// 1.从哪个位置开始替换
	// 2.从哪个位置开始读取数据
	// 3.从哪个位置截止
	console.log([1,2,3,4,5].copyWithin(0,3,4));//[4, 2, 3, 4, 5]
}
{
	// find 只找出第一个符合要求的成员
	// findIndex 只找出第一个符合要求的成员的下表
	console.log([1,2,3,4,5,6].find(function(item){return item>3}));//4
	console.log([1,2,3,4,5,6].findIndex(function(item){return item>3}));//4
}
{
	console.log('number',[1,2,NaN].includes(1));//number true
	console.log('number',[1,2,NaN].includes(NaN));//number true
}
