// 使用数值api必须保证传进去的是个数
{
	console.log('B',0b111110111);//B 503   二进制表示 大小写都可以
	console.log(0o767);//503 八进制表示 大小写都可以
}
{
	console.log('15',Number.isFinite(15));//15 true
	console.log('NaN',Number.isFinite(NaN));//NaN false
	console.log('1/0',Number.isFinite(1/0));//1/0 false
	console.log('NaN',Number.isNaN(NaN));//NaN true
	console.log('0',Number.isNaN(0));//0 false
	// 这两个使用频率不是很高，了解
}
{
	console.log('25',Number.isInteger(25));//25 true 
	console.log('25.0',Number.isInteger(25.0));//25.0 true
	console.log('25.1',Number.isInteger(25.1)); //25.1 false
	console.log('25.1',Number.isInteger('25.1'));//25.1 false
	console.log('25',Number.isInteger('25'));//25 false

	// 判断一个数值范围 -2^53~2^53 不包含这两个端点 超过这个区间存储就不准了
}
{//常用
	console.log(Number.MAX_SAFE_INTEGER);//9007199254740991 数最大的上限
	console.log(Number.MIN_SAFE_INTEGER);//-9007199254740991 数最小的上限
	console.log('10',Number.isSafeInteger(10));//10 true
	console.log('a',Number.isSafeInteger('a'));//a false
}
{//常用
	// 取整数部分
	console.log('4.1',Math.trunc(4.1));//4.1 4
	console.log('4.9',Math.trunc(4.9));//4.9 4
}
{//常用
	// 判断一个数，正数，负数，零
	console.log('-5',Math.sign(-5));//-5 -1
	console.log('0',Math.sign(0));//0 0
	console.log('5',Math.sign(5));//5 1
	console.log('50',Math.sign('50'));//5 1
	console.log('foo',Math.sign('foo'));//foo NaN
}
{
	// 立方根的计算
	console.log('-1',Math.cbrt(-1));//-1 -1
	console.log('8',Math.cbrt(8));//8 2
}


