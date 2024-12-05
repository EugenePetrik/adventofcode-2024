import { reports } from "./test-data";

function parseReports(): number[][] {
  return reports
    .trim()
    .split('\n')
    .map(line => line.trim().split(/\s+/).map(Number));
};

function countSafeReports(): number {
  const parsedReports: number[][] = parseReports();

  let safeCount = 0;

  for (const report of parsedReports) {
    let isValid: boolean = true;
    let isIncreasing: boolean | null = null;

    for (let i = 1; i < report.length; i++) {
      const diff = report[i] - report[i - 1];

      if (Math.abs(diff) < 1 || Math.abs(diff) > 3) {
        isValid = false;
        break;
      }

      if (isIncreasing === null) {
        isIncreasing = diff > 0;
      } else if ((isIncreasing && diff < 0) || (!isIncreasing && diff > 0)) {
        isValid = false;
        break;
      }
    }

    if (isValid) safeCount++;
  }

  return safeCount;
}

console.log(`Number of safe reports: ${countSafeReports()}`);
