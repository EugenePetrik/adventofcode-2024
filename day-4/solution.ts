import { grid } from "./test_data";

function countOccurrences(grid: string[][], word: string): number {
  const directions: { dx: number, dy: number }[] = [
    { dx: 0, dy: 1 }, // Horizontal (left-to-right)
    { dx: 0, dy: -1 }, // Horizontal (right-to-left)
    { dx: 1, dy: 0 }, // Vertical (top-to-bottom)
    { dx: -1, dy: 0 }, // Vertical (bottom-to-top)
    { dx: 1, dy: 1 }, // Diagonal (top-left to bottom-right)
    { dx: -1, dy: -1 }, // Diagonal (bottom-right to top-left)
    { dx: 1, dy: -1 }, // Diagonal (top-right to bottom-left)
    { dx: -1, dy: 1 }, // Diagonal (bottom-left to top-right)
  ];

  const rows: number = grid.length;
  const cols: number = grid[0].length;
  const wordLength: number = word.length;
  let count: number = 0;

  const isValidPosition = (x: number, y: number): boolean => x >= 0 && x < rows && y >= 0 && y < cols;

  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      if (grid[i][j] === word[0]) { // Only start search if the first letter matches
        for (const { dx, dy } of directions) {
          let k;
          let x = i, y = j;
          for (k = 0; k < wordLength; k++) {
            if (!isValidPosition(x, y) || grid[x][y] !== word[k]) break;
            x += dx;
            y += dy;
          }
          if (k === wordLength) count++;
        }
      }
    }
  }

  return count;
}

const word = "XMAS";
console.log(countOccurrences(grid.map(row => row.split('')), word));
