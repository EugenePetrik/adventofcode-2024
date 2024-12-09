import { input } from "./test-data";

type Position = { x: number; y: number };

function parseMap(input: string[]): Map<string, Position[]> {
  const antennaMap: Map<string, Position[]> = new Map<string, Position[]>();

  for (let y = 0; y < input.length; y++) {
    for (let x = 0; x < input[y].length; x++) {
      const char: string = input[y][x];

      if (char !== '.') {
        if (!antennaMap.has(char)) antennaMap.set(char, []);
        antennaMap.get(char)!.push({ x, y });
      }
    }
  }

  return antennaMap;
}

function calculateAntinodes(p1: Position, p2: Position): Position[] {
  const antinodes: Position[] = [];
  const dx: number = p2.x - p1.x;
  const dy: number = p2.y - p1.y;

  // Calculate distance between antennas
  const distance: number = Math.hypot(dx, dy);

  if (distance === 0) return antinodes;

  // Check if one antenna is twice as far from the antinode as the other
  // Calculate potential antinode positions
  const a1: { x: number; y: number } = { x: p1.x - dx, y: p1.y - dy };
  const a2: { x: number; y: number } = { x: p2.x + dx, y: p2.y + dy };

  antinodes.push(a1, a2);

  return antinodes;
}

function isWithinBounds(pos: Position, width: number, height: number): boolean {
  const result: boolean = pos.x >= 0 && pos.x < width && pos.y >= 0 && pos.y < height;

  if (!result) console.log('Out of bounds:', pos);

  return result;
}

function countUniqueAntinodes(input: string[]): number {
  const antennaMap: Map<string, Position[]> = parseMap(input);
  const width: number = input[0].length;
  const height: number = input.length;
  const uniqueAntinodes: Set<string> = new Set<string>();

  console.log('Parsed Antenna Map:', antennaMap);

  antennaMap.forEach((positions, freq) => {
    console.log(`Processing frequency: ${freq}, Positions:`, positions);

    for (let i = 0; i < positions.length; i++) {
      for (let j = i + 1; j < positions.length; j++) {
        const antinodes: Position[] = calculateAntinodes(positions[i], positions[j]);

        antinodes.forEach(antinode => {
          if (isWithinBounds(antinode, width, height)) {
            uniqueAntinodes.add(`${antinode.x},${antinode.y}`);
          }
        });
      }
    }
  });

  console.log('Unique Antinodes:', uniqueAntinodes);

  return uniqueAntinodes.size;
}

console.log(countUniqueAntinodes(input));
