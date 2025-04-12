function checkRow(row: string[]): boolean {
  let seen = new Set<string>();
  for (const cell of row) {
    if (cell === ".") continue;
    if (seen.has(cell)) return false;
    seen.add(cell);
  }
  return true;
}

function checkColumn(board: string[][], column: number): boolean {
  let seen = new Set<string>();
  for (let i = 0; i < 9; i++) {
    let cell = board[i][column];
    if (cell === ".") continue;
    if (seen.has(cell)) return false;
    seen.add(cell);
  }
  return true;
}

function checkSquare(board: string[][], x: number, y: number): boolean {
  let seen = new Set<string>();
  for (let i = y * 3; i < y * 3 + 3; i++) {
    for (let j = x * 3; j < x * 3 + 3; j++) {
      let cell = board[i][j];
      if (cell === ".") continue;
      if (seen.has(cell)) return false;
      seen.add(cell);
    }
  }
  return true;
}

function isValidSudoku(board: string[][]): boolean {
  for (let i = 0; i < 9; i++) {
    if (!checkRow(board[i])) return false;
    if (!checkColumn(board, i)) return false;
    if (!checkSquare(board, Math.floor(i / 3), i % 3)) return false;
  }
  return true;
}
