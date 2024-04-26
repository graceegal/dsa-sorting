function insertionSort(nums: number[]): number[] {

  function swap(arr: number[], i1: number, i2: number): void {
    [arr[i1], arr[i2]] = [arr[i2], arr[i1]];
  }

  for (let i = 1; i < nums.length; i++) {
    let val = nums[i];
    let index = i;
    for (let j = i - 1; j >= 0; j--) {
      if (nums[i] < nums[j]) {
        val = nums[j];
        index = j;
      }
    }
    swap(nums, i, index)
  }

  return nums;
}