import { input } from "./test-data";

function parseInput(input: string): { target: number, numbers: number[] }[] {
  return input.split('\n').map(line => {
    const [targetStr, numbersStr] = line.split(':');

    return {
      target: parseInt(targetStr.trim(), 10),
      numbers: numbersStr.trim().split(' ').map(Number)
    };
  });
}

function generateOperatorCombinations(length: number): string[][] {
  if (length === 1) return [['+'], ['*']];

  const shorterCombos = generateOperatorCombinations(length - 1);

  return shorterCombos.flatMap(combo =>
    [['+'], ['*']].map(op => [...combo, op[0]]) // Ensure op is correctly flattened
  );
}

function evaluateExpression(numbers: number[], operators: string[]): number {
  let result = numbers[0];

  for (let i = 0; i < operators.length; i++) {
    if (operators[i] === '+') {
      result += numbers[i + 1];
    } else if (operators[i] === '*') {
      result *= numbers[i + 1];
    }
  }

  return result;
}

function isEquationValid(target: number, numbers: number[]): boolean {
  if (numbers.length < 2) return false;

  const operatorCombinations = generateOperatorCombinations(numbers.length - 1);

  for (const operators of operatorCombinations) {
    if (evaluateExpression(numbers, operators) === target) {
      return true;
    }
  }

  return false;
}

function calculateCalibrationResult(input: string): number {
  const equations = parseInput(input);

  return equations
    .filter(({ target, numbers }) => isEquationValid(target, numbers))
    .reduce((sum, { target }) => sum + target, 0);
}

console.log(calculateCalibrationResult(input));
