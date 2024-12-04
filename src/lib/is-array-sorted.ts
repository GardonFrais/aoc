export const isArraySortedAsc = (array: number[]): boolean => {
  return array.reduce((acc, curr, i) => i >= (array.length - 1) ? acc : acc && curr <= array[i + 1], true);
}

export const isArraySortedDesc = (array: number[]): boolean => {
  return array.reduce((acc, curr, i) => i >= (array.length - 1) ? acc : acc && curr >= array[i + 1], true);
}