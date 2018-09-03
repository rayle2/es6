{
	console.log('a', `\u0061`);
	console.log('s', `\u20bb7`);
	console.log('s', `\u{20bb7}`);
	
	let s = '𠮷';
}

{
	let s = '𠮷';
	console.log('length', s.length);
	console.log('0', s.charAt(0)); //取第一个位子的字符
	console.log('1', s.charAt(1));
	console.log('at0', s.charCodeAt(0)); //取第一个字符的码值
	console.log('at1', s.charCodeAt(1));
}

{
	//es6的方法
	let s1 = '𠮷a';
	console.log('length', s1.length);
	console.log('code0', s1.codePointAt(0));
	console.log('code0', s1.codePointAt(0).toString(16));
	console.log('code1', s1.codePointAt(1));
}

{
	console.log(String.fromCharCode('0x20bb7'));
	console.log(String.fromCodePoint('0x20bb7'));
}

{
	let str = '\u{20bb7}abc';
	for (let i = 0; i < str.length; i++) {
		console.log('es5', str[i]);
	}
	for (let code of str) {
		console.log('es6', code)
	}
}

//字符串是否已某些字符起始或截止
{
	let str = 'string';
	console.log('包含', str.includes('r')) // 是否包含
	console.log('起始', str.startsWith('s')) // 是否起始
	console.log('结束', str.endsWith('ng')) // 是否起始
}

//重复
{
	let str = 'abc';
	console.log(str.repeat(2));
}

//模板(字符串拼接)
{
	let name = 'list';
	let info = 'hello world';
	let m = `i am ${name},${info}`;
	console.log(m);
}

//补白，第一个参数长度，如果不够，补第二个参数
{
	console.log('1'.padStart(2, '0'));
	console.log('a'.padEnd(3, 'b'))
}

//标签模板
{
	let user = {
		name: '侯磊',
		info: 'hello world'
	};
	console.log(abc`i am ${user.name},${user.info}`);
	
	function abc(s, v1, v2) {
		console.log(s, v1, v2);
		return s + v1 + v2;
	}
}

{
	console.log(String.raw`hi\n${1+2}`);
	console.log(`hi\n${1+2}`);
}