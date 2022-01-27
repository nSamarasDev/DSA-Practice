// Bottom Up Recursion

const factorialRecursion = (number) => {
  console.log('Forward Phase', number);
  // Base Case
  if (number <= 1) {
    console.log('Base Case', number);
    return 1;
  }

  // Recursive Case
  const numberMinusOneFactorial = factorialRecursion(number - 1);
  console.log('Backward Phase', number, '*', numberMinusOneFactorial);
  return number * numberMinusOneFactorial;
};

console.log(factorialRecursion(5));

/*
Answer: 
Forward Phase 5
Forward Phase 4
Forward Phase 3
Forward Phase 2
Forward Phase 1
Base Case 1
Backward Phase 2 * 1
Backward Phase 3 * 2
Backward Phase 4 * 6
Backward Phase 5 * 24
120
*/
