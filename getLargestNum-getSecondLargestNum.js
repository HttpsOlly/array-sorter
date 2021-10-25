const arr = [90, 100, 749, 10, 20, 30, 40, 50];

function getLargestNumber() {
  let largestNumber = arr[0];
  
  for (let i = 0; i < arr.length; i++)
    if (arr[i] > largestNumber) {
      largestNumber = arr[i]
    } 
  
  return largestNumber;
}

function getSecondLargestNumber() {
  let largestNumber = arr[0];
  let secondLargestNumber = arr[0];
  
  for (let i = 0; i < arr.length; i++)
    if (arr[i] > largestNumber) {
      secondLargestNumber = largestNumber;
      largestNumber = arr[i];
    } else if (arr[i] > secondLargestNumber) {
      secondLargestNumber = arr[i];
    }
  return secondLargestNumber;
}

console.log(`The largest number is ${getLargestNumber(arr)}`);
console.log(`The second largest number is ${getSecondLargestNumber(arr)}`);