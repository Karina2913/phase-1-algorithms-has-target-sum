function hasTargetSum(array, target) {
  for (let i = 0; i < array.length; i++) {
    for (let j = i + 1; j < array.length; j++) {
      let sum = array[i] + array[j];
      if (sum === target) {
        return true;
      }
    }
  }
  return false;
}

/* 
  Write the Big O time complexity of your function here
  O(n^2)
*/

/*
  Add your pseudocode here
  function name(array, target)
    for(iterate through array, testing each number)
      if the numbers add up to the target,
        return true
      if don't add up
        repeat

Steps: take two numners as input, 
add the two numbers, 
compare sum with target sum
return true if they equal, otherwise, false
*/

/*
  Add written explanation of your solution here
  The function takes an array and a target as arguments. Since it tests
  two numbers, it's going to be a nested loop, comparing the two numbers.
  It enters the first loop, going through each possibility. If no two 
  numbers match the first loop, it moves on to the next number on the 
  outer loop. If nothing is found, it returns false after the outer loop.
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 10));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([22, 19, 4, 6, 30], 25));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 2, 5], 4));
}

module.exports = hasTargetSum;
