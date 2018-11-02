//函数参数默认值
{
	function test(x, y = 'world') {
		console.log('默认值', x, y);
	}
	
	test('hello');
	test('hello', 'hl');
}

{
	let x = 'test';
	
	function test2(x, y = x) {
		console.log('作用域', x, y);
	}
	
	test2('hl') // hl hl
}

{
	function test3(...arg) {
		for (let v of arg) {
			console.log('rest', v);
		}
	}
	
	test3(1, 2, 3, 4, 'a');
}

{
	console.log(...[1, 2, 3, 4]);
	console.log('a', ...[1, 2, 4]);
}

//箭头函数
{
	let arrow = v => v * 2;
	let arrrow2 = () => 5;
	console.log('arrow', arrow(3));
	console.log('arrow2', arrrow2());
}

//尾调用
{
	function tail(x) {
		console.log('tail', x);
	}
	function fx(x) {
		return tail(x);
	}
	fx(123);
}