/*
  Given the array candies and the integer extraCandies, where candies[i] represents the
  number of candies that the ith kid has.

  For each kid check if there is a way to distribute extraCandies among the kids such
  that he or she can have the greatest number of candies among them. Notice that multiple
  kids can have the greatest number of candies.
*/

// This is the code golf solution
function kidsWithCandies(candies, extraCandies) {
  // Use the spread operator to pass in the array to Math.max()
  let maxCandy = Math.max(...candies);
  // Check if the child's candies + extraCandies is greater than or equal to the max
  return candies.map(child => (child + extraCandies) >= maxCandy);
};

// This is the easier to read to my eye, but is essentially the same thing as the above
function kidsWithCandies(candies, extraCandies){
  // Use the spread operator to pass in the array to Math.max()
  let maxCandy = Math.max(...candies);

  // Don't forget your micro optimizations
  let length = candies.length;

  for(let i = 0; i < length; i += 1){
    candies[i] = ((candies[i] + extraCandies) >= maxCandy);
  }

  return candies;
}

/*
  Really the trick to this one is finding the max of the array in a single line
  so you're code looks all pretty
*/