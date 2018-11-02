{
	//创建类似供养商（原始对象）
	let obj = {
		time: '2017-03-11',
		name: 'net',
		_r: 123
	}
	//创建代理商（Proxy）
	let monitor = new Proxy(obj, {
		//拦截对象属性的读取
		// get(target, key) {
		// 	return target[key].replace('2017', '2018');
		// },
		// 拦截对象设置属性
		set(target, key, value) {
			if (key === 'name') {
				return target[key] = value;
			} else {
				return target[key];
			}
		}
	});
	//用户直接操作monitor
	// monitor.time;
	// console.log('get', monitor.time);
	monitor.time = 2018;
	monitor.name = '换车网'
	console.log('set', monitor.time, monitor.name);
}