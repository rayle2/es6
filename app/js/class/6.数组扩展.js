{
	let arr = Array.of(3, 4, 7, 9, 11);
	console.log('arr=', arr); // [3, 4, 7, 9, 11]
	
	let empty = Array.of();
	console.log('empty=', empty); // []
}

{
	let p = document.querySelectorAll('p');
	let pArr = Array.from(p);
	pArr.forEach(item => {
		console.log(item.textContent);
	});
	console.log(Array.from([1, 3, 5], item => {
		return item * 2;
	}));
}

//数组中所有值替换成一个值
{
	console.log('fill-7', [1, 'a', undefined].fill(7));
	console.log('fill,pos', ['a', 'b', 'c'].fill(7, 1, 3)); //7表示要替换的值，1,3表示起始和结束位置
}

{
	for (let index of ['1', 'c', 'ks'].keys()) {
		console.log('keys', index); //0,1,2
	}
	for (let value of ['1', 'c', 'ks'].values()) {
		console.log('value', value); //1,c,ks
	}
	for (let [index, value] of ['1', 'c', 'ks'].entries()) {
		console.log('index-value', `${index + '-' + value}`); //0-1,2-c,3-ks
	}
}

{
	//从哪个位置开始替换 从哪个位置开始读取 从哪个位置截止
	console.log([1, 2, 3, 4, 5].copyWithin(0, 3, 4)); // [4,2,3,4,5]
}

//查找
{
	let arr = [1, 2, 3, 4, 5, 6, 'a', {title: 1}];
	var curArr = arr.find(item => {
		return item > 3;
	});
	console.log(curArr); //4 只找出第一个就不找了，所以只有4
}
