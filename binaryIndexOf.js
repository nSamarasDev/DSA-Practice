// time complexcity = O(log n)

const binaryIndexOf = (compare, sortedElements) => {
 if (Array.isArray(sortedElements)) {
  // lowerIndex always starts at 0
  let lowerIndex = 0; 
  // upperIndex always starts at the largest index for the array
  let upperIndex = sortedElements.length - 1;
  // if the array is empy. lowerIndex === 0 and upperIndex === -1. The while loop never executes
  // if lowerIndex <= upperIndex then the while loop will execute. 
  while (lowerIndex <= upperIndex) {
   // First calculate your index with Math.Floor to round to the nearest integer
   const index = Math.floor((upperIndex + lowerIndex) / 2);
   // compare is then called to tell the algorithm what to do next
   const comparison = compare(sortedElements[index], index, sortedElements);
   // if compare returns 0 then the target value is found and returns the index
   // if compare returns a value greater than 0. The target value is then greater then the idex
   // so lowerIndex is moved to index + 1 and ignores the elements left of the index
   // if compare returns a value less than 0 then the target value is less than the value at index
   // so upperIndex is moved to index - 1 and ignores the elements on right of the idex
   if (comparison > 0) {
    lowerIndex = index + 1;
   }
   if (comparison === 0) {
    return index;
   }
   if (comparison < 0) {
    upperIndex = index - 1;
   }
  }
 }
 // if no value is found returns -1
 return -1;
}

// sorted data to be searched
const elements = [1, 2, 4, 7, 13, 24, 44, 81, 149, 274, 504, 927, 1705, 3136];

function forNumber(target) {
  return (element, index) => {
    console.log("compare", target, "to", element, "at index", index);

    if (element === target) {
      return 0;
    }
    if (element < target) {
      return 1;
    }
    if (element > target) {
      return -1;
    }
  };
}

console.log(binaryIndexOf(forNumber(504), elements));
/* 
Answer:
compare 504 to 44 at index 6
compare 504 to 504 at index 10
index = 10
*/