# JavaScript Snippets

## Kadane's Algorithm

Kadane's algrithm is an algorithm to find the maximum subarray sum of an array.

## Radian and Degree Conversions
While working on some tree drawing code I needed to be able to convert from radians to degrees and back. These are the results of that research/remembering basic geometry.

## Range Operator

Very often I've wanted to write something like `min <= inputNum <= max` and JavaScript has no nice way to do that (that I know of, please, please correct me). So I created insideRange and outsideRange to temporarily cool the rage I feel every time I have to type out `min <= inputNum && inputNum <= max`.

## Sieve of Eratosthenese/Euler's Sieve

Sieves to find primary numbers by elimination of composite numbers. Eratosthenes' sieve eliminates all multiples of numbers found within the range given to it. Euler's sieve only eliminates those numbers once allowing for some performance gains versus Eratosthenes.
