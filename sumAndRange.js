function sum(arr) {
	let sum = 0;
	for (let n of arr) {
		sum += n;
	}
	return sum;
}
function range(start, end, step) {
	let array = [];
	for (let i = start; i <= end; i += step) {
		array.push(i)
	}
	return array;
}