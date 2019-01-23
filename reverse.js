function reverseArray(arr) {
	let revArr = [];
	for (let i = arr.length - 1; i >= 0; i--) {
		revArr.push(arr[i]);
	}
	return revArr;
}
function reverseArrayInPlace(arr) {
	//loop should run x times, where x is half the length of the array, rounded down to an integer
	let xTimes = Math.floor(arr.length / 2);
	//initialize counter variables
	let i = 0;
	let j = 1;
	while (i < xTimes) {
		//remove last element from array, store it, and add first element to last elements place
		let deleted = arr.splice(arr.length - j, 1, arr[i]);
		arr.splice(i, 1, deleted[0]);
		i++;
		j++;
	}
	return arr;
}


