// Call stack error avoided
// Time Compexity = O(n)

const factorialRecursionWithPenultimate = (number) => {
  //Base Case
  if (number <= 1) {
    return 1;
  }

  //Penultimate means second to the last in a series
  let penultimate = 1;
  let total = 0;

  // Calculate the factorial from 1 to 'number'
  for (let ultimate = 1; ultimate <= number; ultimate++) {
    console.log(ultimate, '*', penultimate);
    total = ultimate * penultimate;
    penultimate = total;
  }
  return total;
};

console.log(factorialRecursionWithPenultimate(5));

/*
Answer:
1 * 1
2 * 1
3 * 2
4 * 6
5 * 24
120
*/
