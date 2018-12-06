//Symbol就是提供独一无二的值

{
	let a1 = Symbol();
	let a2 = Symbol();
	console.log(a1 === a2); //false
	let a3 = Symbol.for('a3'); //传一个key值，先检查是否注册，注册过就返回这个值，没有就跟上面一样，生成一个
	let a4 = Symbol.for('a3');
	console.log(a3 === a4); //true
}

{
	let a1 = Symbol.for('abc');
	let obj = {
		[a1]: '123',
		'abc': 345,
		'c': 456
	};
	console.log('obj', obj);
	for (let [key, value] of Object.entries(obj)) {
		console.log('let of', [key, value]); //取不到Symbol
	}
	
	Object.getOwnPropertySymbols(obj).forEach(item => console.log(obj[item])) //123;
	
	Reflect.ownKeys(obj).forEach(item => console.log('ownkeys', item, obj[item]));  //abc 345i    c 456    Symbol(abc) 123
}
//更改