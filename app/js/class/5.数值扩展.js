{
	console.log(0b111110111);
	console.log(0o767);
}


//判断值是不是有尽
{
	console.log('15', Number.isFinite(15));
	console.log('NaN', Number.isFinite(NaN));
	console.log('1/0', Number.isFinite(1/0));
	console.log('NaN', Number.isNaN(NaN));
	console.log('0', Number.isNaN(0));
}

//判断是不是整数
{
	console.log(Number.isInteger(25.333));
	console.log(Number.isInteger('25'));
}

{
	console.log(Number.MAX_SAFE_INTEGER);
	console.log(Number.MIN_SAFE_INTEGER);
	console.log(Number.isSafeInteger(-9007199254740991));
}

{
	console.log(5.5,Math.trunc(5.5));
	console.log(4.9,Math.trunc(4.9));
}

{
	console.log('-5',Math.sign(-5));
	console.log('0',Math.sign(0));
	console.log('5',Math.sign(5));
	console.log('50',Math.sign('50')); //这个会转成数字
	console.log('foo',Math.sign('foo')); //NaN
}

{
	console.log(-1,Math.cbrt(-1));  //立方根
	console.log(8,Math.cbrt(8));
}