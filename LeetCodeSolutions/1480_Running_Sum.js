/*
Given an array `nums`. We define a running sum of an array as
`runningSum[i] = sum(nums[0]…nums[i])`.

Return the running sum of `nums`.
*/

var runningSum = function(nums) {
  // Don't forget your micro optimizations
  let length = nums.length;
  for(let i = 1; i < length; i += 1) nums[i] += nums[i - 1];

  return nums;
};

// Now with reducer()
var runningSum = function(nums) {
    nums.reduce((accumulator, current, index, source) => source[index] = current + accumulator);

    return nums;
};