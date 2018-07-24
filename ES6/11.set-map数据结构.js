{
	let list = new Set();
	list.add(5);
	list.add(7);
	console.log('size',list.size);//size 2
}
{
	let arr =[1,2,3,4,5];
	let list = new Set(arr);
	console.log('size',list.size);//size 5
}
{
	let list = new Set();
	list.add(1);
	list.add(2);
	list.add(1);//没有添加进去
	console.log('list',list);//list Set(2) {1, 2}
// 去重
	let arr =[1,2,3,1,2];
	let list2 =new Set(arr);
	console.log('unique',list2);//unique Set(3) {1, 2, 3}
}
{
	let arr =['add','delete','clear','has'];
	let list = new Set(arr);
	console.log('has',list.has('add'));//has true
	console.log('delete',list.delete('add'),list);//delete true Set(3) {"delete", "clear", "has"}
	list.clear();
	console.log('list',list);//Set(0) {}
}
{
	//遍历
	let arr =['add','delete','clear','has'];
	let list = new Set(arr);
	for(let key of list.keys()){
		console.log('keys',key);
	}//keys add keys delete keys clear keys has
	for(let value of list.values()){
		console.log('value',value);
	}//value add value delete value clear value  has
	for(let value of list){
		console.log('value',value);
	}//value add value delete value clear value  has
	for(let [key,value] of list.entries()){
		console.log('entries',key,value);
	}//entries add add  entries delete delete  entries clear clear entries has has
	lsit.forEach(function(item){
		console.log(item);//add delete clear has
	})
}
{
	// WeakSet和set支持的数据类型不一样
	// WeakSet支持的类型只能是对象，不支持其他类型
	// WeakSet里面添加了一个对象，对象不是整个值拷贝过来，是一个地址的引用，不会检测地址会不会回收
	//没有clear方法，没有set属性，不能遍历
	//add，delete，has和set用法一样
	let weakList = new WeakSet();
	let arg ={};
	weakList.add(arg);
	console.log('weakList',weakList);//weakList WeakSet {{…}}
}
{
	// map第一种定义方式
	let map =new Map();
	let arr=['123'];
	map.set(arr,456);
	console.log('map',map,map.get(arr));//map {Array(1) => 456} 456
}
{
	// map的第二种定义方式
	// 遍历 let of  forEach entries
	let map =new Map([['a','123'],['b',456]]);
	console.log('map args',map);//map args Map(2) {"a" => "123", "b" => 456}
	console.log('size',map.size);//map args 2
	console.log('delete',map.delete('a'),map);//delete true Map(1) {"b" => 456}
	console.log('clear',map.clear(),map);//clear undefined Map(0) {}
}
{
	// WeakMap 	支持的类型只能是对象
	//没有clear方法，没有size属性，不能遍历

	let weakmap = new WeakMap();
	let o={};
	weakmap.set(o,123);
	console.log(weakmap.get(o));//123
}
{
	//  数据结构横向对比，增，删，改，查
	let map = new Map();
	let array=[];
	// 增
	map.set('t',1);
	array.push({t:1});
	console.info('map-array',map,array);
	// map-array Map(1) {"t" => 1} [{…}]
	// 							0: {t: 1}
	// 查
	let map_exist =map.has('t');
	let array_exist =array.find(item=>item.t);
	console.info('map-array',map_exist,array_exist);//map-array true {t: 1}
	// 改
	map.set('t',2);
	array.forEach(item=>item.t?item.t=2:'');
	console.info('map-array-modify',map,array);//map-array  {"t" => 2} [{t: 2}]
	// 删除
	map.delete('t');
	let index = array.findIndex(item=>item.t);//es5提供的方法
	array.splice(index,1);
	console.info('map-array-empty',map,array);//map-array-empty Map(0) {} []
}
{
	// set和array的对比
	let set = new Set();
	let array=[];
	// 增
	set.add({t:1});
	array.push({t:1});
	console.log('set-array',set,array);//set-array Set(1) {{t:1}} [{t:1}]
	// 查
	let set_exist = set.has({t:1});//新生成的对象所以是false  如果想返回true这个对象必须保存过
	let array_exist =array.find(item=>item.t);
	console.info('set-array',set_exist,array_exist);//set-array false {t: 1}
	// 改
	set.forEach(item=>item.t?item.t=2:'');
	array.forEach(item=>item.t?item.t=2:'');
	console.info('set-array-modify',set,array);//set-array-empty Set(0) {} []
	// 删
	set.forEach(item=>item.t?set.delete(item):'');
	let index = array.findIndex(item=>item.t);//es5提供的方法
	array.splice(index,1);
	console.info('set-array-empty',set,array);//map-array-empty Map(0) {} []
}
{
	// Map和Object的对比
	// Set和Object的对比

	let item={t:1};
	let map = new Map();
	let set = new Set();
	let obj={};
	// 增
	map.set('t',1);
	set.add(item);
	obj['t']=1;
	console.info('map-set-obj',obj,map,set);//map-set-obj {t: 1} Map(1) {"t" => 1} Set(1) {{t: 1}}
	// 查
	console.info({
		map_exist: map.has('t'),
		set_exist: set.has(item),
		obj_exist: 't' in obj
	});//{map_exist: true, set_exist: true, obj_exist: true}
	// 改
	map.set('t',2);
	item.t=2;  //set如果对象存储了，直接修改，如果没有存储用forEach遍历修改
	obj['t']=2;
	console.info('map-set-obj-modify',obj,map,set);//map-set-obj-modify {t: 2} Map(1) {"t" => 2} Set(1) {{t: 2}}
	// 删
	// 使用上map和set的语义化更好，使用成本上map更低
	map.delete('t');
	set.delete(item);//如果没对item引用，就要用forEach删除
	delete obj['t'];
	console.info('map-set-obj-empty',obj,map,set);//map-set-obj-empty {} Map(0) {} Set(0) {}


}
// 总结
// 数据结构优先使用map，放弃数组，set
// 如果要求对数据存储的唯一性使用set，放弃Object和数组