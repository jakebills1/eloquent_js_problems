// prints an n x n chessboard of alternating spaces and hashes. only works with even inputs
function chessboard(n) {
  if ( n % 2 == 0) {
    let size = n;
    let row = 1;
    let oddRowTemplate = " #";
    let evenRowTemplate = "# ";
    let oddRow = oddRowTemplate.repeat(n / 2);
    let evenRow = evenRowTemplate.repeat(n / 2);

    for (var i = 0; i < size; i++) {
      if (row % 2 == 0) {
        console.log(evenRow);
        row +=1;
      } else {
        console.log(oddRow);
        row +=1;
      }
    }
  } else {
    return "n must be even";
  }
}
