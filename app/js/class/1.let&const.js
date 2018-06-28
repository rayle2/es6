function test() {
	for (let i = 1; i < 3; i++) { //用大括号包起来的，就是一个块作用域
		console.log(i); //在这个作用域里用let声明的变量，在作用域外就不存在
	}
	console.log(i); // ReferenceError: i is not defined (es6默认开启严格模式，变量未声明，不能引用，所以报引用错误)
}

function test2() {
	let a = 1;
	// let a = 2; //使用let 不能重复定义变量
}

function last() {
	const PI = 3.1415926; //用const创建的是常量，只读属性，不能修改
	// PI = 8; // "PI" is read-only
	// const WIDTH; //const必须声明完整
	// WIDTH = 100;
	const k = { //对象是引用类型，最后返回的是对象存储到内存中的指针，声明的k是指向存储到内存中的指针，指针是不变的，所以对象本身可以改变（增加属性等）。
		a: 1
	}
	k.b=3;
	console.log(PI,k);
	// console.log(WIDTH);
}

// test();
// test2();

last();