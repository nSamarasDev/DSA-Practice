// Linear Search Algorithm
// Brute-Force Version
// Time Complexcity = O(n)

const indexOf = (isMatch, elements) => {
 // Algorithm goes through the array of elements
 // Passes in the element, index and array
 // Variable index keeps track of where it is in the array.
 if (Array.isArray(elements)) {
  for (let index = 0, length = elements.length; index < length; index++) {
   // If isMatch returns true it will return the current value for index
   if (isMatch(elements[index], index, elements)) {
    return index;
   }
  }
 }
 // If isMatch false it returns -1
 return -1;
}

// Data to search 
const people = [
  {
    id: 1,
    first_name: "Monah",
    last_name: "Yarnall",
    age: 17,
  },
  {
    id: 2,
    first_name: "Daphne",
    last_name: "McGaugey",
    age: 81,
  },
  {
    id: 3,
    first_name: "Walker",
    last_name: "Bucknell",
    age: 81,
  },
];

// Use case senerio 1
const personIs81 = (people) => {
 return people.age === 81;
}

console.log(indexOf(personIs81, people)); // Answer: index = 1

// Use case senerio 2
const numberIs5 = (value) => {
 return value === 5;
}

console.log(indexOf(numberIs5, [1, 3, 5, 7, 9])); // Answer index = 2