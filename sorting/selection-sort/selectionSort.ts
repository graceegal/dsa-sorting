/** Sort in-place and return sorted array. */

function selectionSort(nums: number[]): number[] {

  for (let i = 0; i < nums.length; i++){
    let minimum = nums[i];
    let minIndex = i;
    for (let j = i + 1; j < nums.length; j++){
      if (nums[j] < minimum){
        minimum = nums[j];
        minIndex = j;
      }
    }
    nums[minIndex] = nums[i];
    nums[i] = minimum;
  }

  return nums;
}

[5, 2, 4, 6, 1, 3]
export { selectionSort };