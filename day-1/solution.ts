import { leftList, rightList } from "./test-data";

function calculateTotalDistance(leftList: number[], rightList: number[]): number {
  const sortedLeftList = leftList.sort((a, b) => a - b);
  const sortedRightList = rightList.sort((a, b) => a - b);

  let totalDistance = 0;

  for (let i = 0; i < sortedLeftList.length; i++) {
    totalDistance += Math.abs(sortedLeftList[i] - sortedRightList[i]);
  }

  return totalDistance;
}

const totalDistance = calculateTotalDistance(leftList, rightList);
console.log(`Total Distance: ${totalDistance}`);
