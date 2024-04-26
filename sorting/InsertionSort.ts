function insertionSort(nums: number[]): number[] {        // [1, 4, 5, 7]

  function swap(arr: number[], i1: number, i2: number): void {
    [arr[i1], arr[i2]] = [arr[i2], arr[i1]];
  }

  for (let i = 1; i < nums.length; i++) {       // i = 3 (stop: i < 4)
    let val = nums[i];                          // val = 7
    let index = i;                              // index = 2
    for (let j = i - 1; j >= 0; j--) {          // j = 1  (stop j >= 0)
      if (val < nums[j]) {
        swap(nums, j, index);
        index = j;
      }
      else {
        break;
      }
    }
  }

  return nums;
}