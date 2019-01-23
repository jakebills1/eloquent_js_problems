function isEven(n) {
	if (n == 0) {
		return true;
	} else if (n == 1 ) {
		return false
	} else {
		while (n >= 1) {
			n -= 2
		}
		isEven(n);
	}
}

function reduce(n) {
	while (n != 0 || n != 1) {
		n -= 2;
	}
	return n;
}

