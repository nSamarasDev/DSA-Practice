// Top Down Recursion
// Time Complexity = O(1)
const factorialRecursionTopDown = (number, total = 1) => {
  console.log('Forward Phase', number, '*', total);

  //Base Case stays the same
  if (number <= 1) {
    console.log('Base Case', number);
    return total;
  }

  total = factorialRecursionTopDown(number - 1, total * number);

  console.log('Backward Phase', number, total);
  return total;
};

console.log(factorialRecursionTopDown(5));
/*
Answer:
Forward Phase 5 * 1
Forward Phase 4 * 5
Forward Phase 3 * 20
Forward Phase 2 * 60
Forward Phase 1 * 120
Base Case 1
Backward Phase 2 120
Backward Phase 3 120
Backward Phase 4 120
Backward Phase 5 120
120
*/
