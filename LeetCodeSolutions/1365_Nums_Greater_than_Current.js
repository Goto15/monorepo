/*
  Given the array nums, for each nums[i] find out how many numbers in the array are smaller
  than it. That is, for each nums[i] you have to count the number of valid j's such that
  j != i and nums[j] < nums[i].

  Return the answer in an array.
*/

// Very slow O(n^2) solution that checks each element against every other element
var smallerNumbersThanCurrent = function(nums) {
  // Don't forget your micro optimizations
  let length = nums.length;
  let greaterThans = Array(length).fill(0);

  for(let i = 0; i < length; i += 1){
    let count = 0;
    for(let j = 0; j < length; j += 1){
      if(nums[i] > nums[j]) count += 1;
    }
    greaterThans[i] = count;
  }

  return greaterThans;
};

// Using some sorting and look ups we can make it 'faster'
var smallerNumbersThanCurrent = function(nums) {
  // Use our friend the spread operator to create a sorted copy of nums without modifying
  // the nums array. Sort modifies the original array and we need that for a lookup later
  let sortedNums = [...nums].sort((a, b) => a - b);

  // Now we can just find each element in nums in the sorted array and set that element
  // equal to the sorted index
  nums = nums.map(num => sortedNums.indexOf(num));

  return nums;
};