function isEven(n) {
  if (n == 0) {
    return true;
  } else if (n == 1) {
    return false;
  } else {
    while (n >= 0) {
      n = n - 2;
      isEven(n);
    }
  }
}
