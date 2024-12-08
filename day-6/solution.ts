import { input } from "./test-data";

type Direction = '^' | 'v' | '<' | '>';
type Position = { x: number; y: number };

const parseMap = (input: string): { map: string[][]; startPos: Position; direction: Direction } => {
  const rows: string[][] = input.trim().split('\n').map((row) => row.split(''));
  let startPos: Position = { x: 0, y: 0 };
  let direction: Direction = '^';

  rows.forEach((row, y) => {
    row.forEach((cell, x) => {
      if ('^v<>'.includes(cell)) {
        startPos = { x, y };
        direction = cell as Direction;
      }
    });
  });

  return { map: rows, startPos, direction };
};

const guardPath = (mapInput: string): number => {
  const { map, startPos, direction } = parseMap(mapInput);

  const visited = new Set<string>();

  const directions: { [key in Direction]: { dx: number; dy: number } } = {
    '^': { dx: 0, dy: -1 },
    'v': { dx: 0, dy: 1 },
    '<': { dx: -1, dy: 0 },
    '>': { dx: 1, dy: 0 },
  };

  const rightTurn: { [key in Direction]: Direction } = {
    '^': '>',
    '>': 'v',
    'v': '<',
    '<': '^',
  };

  let pos = { ...startPos };
  let dir = direction;

  while (true) {
    visited.add(`${pos.x},${pos.y}`);

    const nextPos = {
      x: pos.x + directions[dir].dx,
      y: pos.y + directions[dir].dy,
    };

    if (
      nextPos.y < 0 ||
      nextPos.y >= map.length ||
      nextPos.x < 0 ||
      nextPos.x >= map[0].length
    ) {
      break; // Guard leaves the map
    }

    if (map[nextPos.y][nextPos.x] === '#') {
      // Turn right if there's an obstacle
      dir = rightTurn[dir];
    } else {
      // Move forward
      pos = nextPos;
    }
  }

  return visited.size;
};

console.log(guardPath(input));
