import { input } from "./test_data";

type MultiplyInstruction = {
  firstOperand: number;
  secondOperand: number;
};

function extractMultiplyInstructions(input: string): MultiplyInstruction[] {
  const regex = /mul\(\s*(\d+)\s*,\s*(\d+)\s*\)/g;

  const instructions: MultiplyInstruction[] = [];

  let match: RegExpExecArray | null;

  while ((match = regex.exec(input)) !== null) {
    const firstOperand = parseInt(match[1], 10);
    const secondOperand = parseInt(match[2], 10);

    if (!isNaN(firstOperand) && !isNaN(secondOperand)) {
      instructions.push({ firstOperand, secondOperand });
    }
  }

  return instructions;
}

function sumOfMultiplications(instructions: MultiplyInstruction[]): number {
  return instructions.reduce(
    (sum, { firstOperand, secondOperand }) => sum + firstOperand * secondOperand,
    0
  );
}

const instructions = extractMultiplyInstructions(input);
const result = sumOfMultiplications(instructions);

console.log(result);
