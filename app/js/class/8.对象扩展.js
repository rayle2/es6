{
	//简洁表达法
	let o = 1;
	let k = 2;
	let es5 = {
		o: o,
		k: k
	};
	let es6 = {
		o, k
	};
	console.log(es5, es6);
	let es5_mehod = {
		hello: function () {
			console.log('hello')
		}
	};
	let es6_method = {
		hello() {
			console.log('hello');
		}
	};
	es5_mehod.hello();
	es6_method.hello();
}

//属性表达式
{
	let a = 'b';
	let es5_obj = {
		a: 'c',
		b: 'c'
	};
	let es6_obj = {
		[a]: 'c'
	};
	console.log(es5_obj, es6_obj);
}

//新增API
{
	console.log('字符串', Object.is('acc', 'abc'), 'abc' === 'abc'); //true true
	console.log('数组', Object.is([], []), [] === []); //false false  数组引用类型，引用了两个不同的内存地址，所以不能三等
	
	//拷贝 要拷贝到的对象,要拷贝什么  浅拷贝，因为是引用类型，只拷贝引用地址，不是把所有的值拷贝过去
	//只拷贝自身对象的属性，有继承不会拷贝，不可枚举
	console.log('拷贝', Object.assign({a: 'a'}, {b: 'b'}));
	
	let test = {
		k: 123,
		o: 456
	};
	for (let [key, value] of Object.entries(test)) {
		console.log([key, value]);
	}
}

//扩展运算符
{
	// let {a, b, ...c} = {a: 'test', b: 'hl', c: 'ddd', d: 'ccc'};
	// c = {
	// 	c: 'ddd',
	// 	d: 'ccc'
	// }
}