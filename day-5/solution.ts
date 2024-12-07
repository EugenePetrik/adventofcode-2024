import { input } from "./test-data";

type Rule = [number, number]; // A single ordering rule as [X, Y] where X must be before Y.
type Update = number[]; // A single update as an array of page numbers.

function parseInput(input: string): { rules: Rule[]; updates: Update[] } {
  const [rulesPart, updatesPart] = input.split('\n\n');

  const rules = rulesPart.split('\n').map(rule => {
    const [x, y] = rule.split('|').map(Number);
    return [x, y] as Rule;
  });

  const updates = updatesPart.split('\n').map(update =>
    update.split(',').map(Number)
  );

  return { rules, updates };
}

function buildDependencyMap(rules: Rule[]): Map<number, Set<number>> {
  const map = new Map<number, Set<number>>();

  for (const [x, y] of rules) {
    if (!map.has(x)) map.set(x, new Set());
    map.get(x)?.add(y);
  }

  return map;
}

function isUpdateValid(update: Update, dependencyMap: Map<number, Set<number>>): boolean {
  const positionMap = new Map<number, number>();

  update.forEach((page, index) => positionMap.set(page, index));

  for (const [x, dependents] of dependencyMap.entries()) {
    if (!positionMap.has(x)) continue; // Skip if x is not in the update.

    for (const y of dependents) {
      if (!positionMap.has(y)) continue; // Skip if y is not in the update.
      if (positionMap.get(x)! >= positionMap.get(y)!) return false;
    }
  }

  return true;
}

function findMiddle(update: Update): number {
  const middleIndex = Math.floor(update.length / 2);
  return update[middleIndex];
}

function solve(input: string): number {
  const { rules, updates } = parseInput(input);
  const dependencyMap = buildDependencyMap(rules);

  let totalMiddleSum = 0;

  for (const update of updates) {
    if (isUpdateValid(update, dependencyMap)) {
      totalMiddleSum += findMiddle(update);
    }
  }

  return totalMiddleSum;
}

console.log(solve(input));
