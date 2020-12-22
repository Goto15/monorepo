/*
  You're given strings jewels representing the types of stones that are jewels,
  and stones representing the stones you have. Each character in stones is a
  type of stone you have. You want to know how many of the stones you have are
  also jewels.

  Letters are case sensitive, so "a" is considered a different type of stone
  from "A".
*/

// OK this one is kinda ugly, but it's JS's fault as it doesn't let me
// .forEach() over a string
var numJewelsInStones = function(jewels, stones) {
    let count = 0;

    Array.from(stones).forEach(stone => {
        if(jewels.includes(stone)) count += 1;
    })

    return count;
};

// The more traditional approach I think
var numJewelsInStones = function(jewels, stones) {
    let count = 0;

    // Don't forget your micro optimizations
    let length = stones.length
    for( let i = 0; i < length; i += 1){
        if(jewels.includes(stones[i])) count += 1;
    }

    return count;
};