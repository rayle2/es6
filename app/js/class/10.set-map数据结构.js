{
	let list = new Set();
	//向set增加元素，要用add方法
	list.add(5);
	list.add(7);
	console.log('size', list.size); //2
}

{
	let arr = [1, 2, 3, 4, 5];
	let list = new Set(arr);
	console.log('size', list.size);
}

{
	let list = new Set();
	list.add(1);
	list.add(2);
	list.add(1); //没有添加进去
	console.log('size', list.size); //2
	
	let arr = [1, 2, 3, 1, 2];
	let list2 = new Set(arr);
	console.log('去重', list2);
}

{
	let arr = ['add', 'delete', 'clear', 'has'];
	let list = new Set(arr);
	console.log('has', list.has('add')); // set类型里有没有add true
	console.log('delete', list.delete('delete'), list);
	list.clear();
	console.log('list', list);
}

//set遍历
{
	let arr = ['add', 'delete', 'clear', 'has'];
	let list = new Set(arr);
	for (let key of list.keys()) {
		console.log('keys', key);
	}
	for (let value of list.values()) { //values可以去掉 默认values
		console.log('values', value);
	}
	for (let [key, value] of list.entries()) {
		console.log('entries', key, value);
	}
	console.log('list', list);
	list.forEach(item => console.log(item));
}

//支持数据类型不一样weakSet只能是对象 weakset都是弱引用，不会检测在其他地方有没有引用过(垃圾回收)  没有clear方法 size属性 不能遍历
{
	let weakList = new WeakSet();
	let arg = {};
	weakList.add(arg);
	// weakList.add(2);
	console.log('weakList', weakList);
}

{
	let map = new Map();
	let arr = ['123']; //map的key可以是任何数据类型
	map.set(arr, 456);
	console.log('map', map, map.get(arr));
}

{
	let map = new Map([['a', 123], ['b', 456]]);
	console.log('map args', map);
	console.log('size', map.size);
	console.log('delete', map.delete('a'), map);
	console.log('clear', map.clear(), map);
}

//支持数据类型不一样WeakMap只能是对象 没有clear方法 size属性 不能遍历
{
	let weakmap = new WeakMap();
	let o = {};
	weakmap.set(o, 123);
	console.log('weakmap', weakmap, weakmap.get(o));
}

//数据结构横向对比 增删改查
//map和array的对比
{
	let map = new Map();
	let array = [];
	//增
	map.set('t', 1);
	array.push({t: 1});
	console.info('map-array', map, array);
	//查
	let map_exist = map.has('t');
	let array_exist = array.find(item => item.t);
	console.info('map-array', map_exist, array_exist);
	//改
	map.set('t', 2);
	array.forEach(item => item.t ? item.t = 2 : '');
	console.info('map-array-modify', map, array);
	//删
	map.delete('t');
	let index = array.findIndex(item => item.t);
	array.splice(index, 1);
	console.log('map-array-empty', map, array);
}

//set和array的对比
{
	let set = new Set();
	let array = [];
	//增
	set.add({t: 1});
	array.push({t: 1});
	console.log('set-array', set, array);
	//查
	let set_exist = set.has({t: 1});
	let array_exist = array.find(item => item.t);
	console.info('set-array', set_exist, array_exist);
	//改
	set.forEach(item => item.t ? item.t = 2 : '');
	array.forEach(item => item.t ? item.t = 2 : '');
	console.info('set-array-modify', set, array);
	//删
	set.forEach(item => item.t ? set.delete(item) : '');
	let index = array.findIndex(item => item.t);
	array.splice(index, 1);
	console.log('set-array-empty', set, array);
}

//map set object 对比
{
	let item = {t: 1};
	let map = new Map();
	let set = new Set();
	let obj = {};
	//增
	map.set('t', 1);
	set.add(item);
	obj['t'] = 1;
	console.log('map-set-obj', map, set, obj);
	//查
	console.info({
		map_exites: map.has('t'),
		set_exites: set.has(item),
		obj_exites: 't' in obj
	});
	//改
	map.set('t', 2);
	item.t = 2;
	obj['t'] = 2;
	console.info('map-set-obj-modify', map, set, obj);
	//删
	map.delete('t');
	set.delete(item);
	delete obj['t'];
	console.log('map-set-obj-empty', map, set, obj);
}