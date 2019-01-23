function countBs(str) {
	var regexp = /B/g;
	var result = str.match(regexp);
	return result.length;
}

function countChar(str, c) {
	var re = new RegExp(c, "g");
	var result = str.match(re);
	return result.length;
}
