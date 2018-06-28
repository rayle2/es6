//数组解构赋值
{
	let a, b, rest;
	[a, b] = [1, 2];
	console.log(a, b) //1 2
}

{
	let a, b, rest;
	[a, b, ...rest] = [1, 2, 3, 4, 5, 6]
	console.log(a, b, rest) //1 2 [3, 4, 5, 6]
}

{
	let a, b, c, rest;
	[a, b, c = 3] = [1, 2]
	console.log(a, b, c); //1 2 3
}

{
	let a, b, c, rest;
	[a, b, c] = [1, 2]
	console.log(a, b, c); //1 2 undefined
}

//对象解构赋值
{
	let a, b;
	({a, b} = {a: 1, b: 2})
	console.log(a, b); //1 2
}

{
	let a, b, c, rest;
	({a, b, c = 3} = {a: 1, b: 2})
	console.log(a, b, c); //1 2 3
}

{
	let o = {e: 22, f: true};
	let {e, f} = o;
	console.log(e, f); //22 true
}

{
	let {a = 10, b = 5} = {a: 3};
	console.log(a, b); //3 5
}

{
	let metaData = {
		title: 'abc',
		test: [{
			title: 'test',
			desc: 'description'
		}]
	}
	let {title: esTitle, test: [{title: cnTitle}]} = metaData;
	console.log(esTitle, cnTitle)
}

/**
 *使用场景
 */

//交换变量
{
	let a = 1;
	let b = 2;
	[a, b] = [b, a]
	console.log(a, b) //2 1
}

//取函数运行结果
{
	function f() {
		return [1, 2];
	}
	
	let a, b;
	[a, b] = f();
	console.log(a, b); //1 2
}

//函数返回多个值，选择性接收某几个变量
{
	function f() {
		return [1, 2, 3, 4, 5];
	}
	
	let a, b, c;
	[a, , , b] = f()
	console.log(a, b); //1 4
}

//不确定返回数组长度，只关心第一个
{
	function f() {
		return [1, 2, 3, 4, 5];
	}
	
	let a, b, c;
	[a, ...b] = f()
	console.log(a, b,); //1 [2, 3, 4, 5]
}

