export const zipArrays = (firstArray: any[], secondArray: any[]): any[][] => {
  return firstArray.map((firstValue, index) => [firstValue, secondArray[index]]);
}