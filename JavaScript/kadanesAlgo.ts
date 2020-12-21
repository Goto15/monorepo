/* Kadane's Algorithm is used to find the maximum sum of a subarry within an array */
function kadanes(array: Array<number>){
  /* Guardian Clauses */
  if(!array.length) return 0;

  /* Setting the initial sum values to the first element allows us to account for all
     negative numbers */
  let rollingSum: number = array[0];
  let greatestSum: number = array[0];

  for(let i = 1; i < array.length; i += 1){
    /* Check that the rollingSum is in fact increasing as it moves along the array */
    rollingSum = Math.max(array[i], rollingSum + array[i]);
    /* Check the current sum against the greatest seen so far */
    greatestSum = Math.max(greatestSum, rollingSum);
  }

  return greatestSum;
}