/*
  Given the array nums consisting of 2n elements in the form [x1,x2,...,xn,y1,y2,...,yn].

  Return the array in the form [x1,y1,x2,y2,...,xn,yn].
*/

// The real trick is to understand that the second argument is the index of the first
// element of the 'second' array. Therefore I renamed the param to `middle`
var shuffle = function(array, middle) {
  let returnArray = [];

  for(let i = 0; i < middle; i++){
    returnArray.push(array[i], array[middle + i]);
  }

  return returnArray;
};

/*
  There's no huge trick to this other than understanding how the params/arguments
  are actually used.
*/