// Given an integer array nums, rotate the array to the right by k steps, where k is non-negative.


// Example 1:

// Input: nums = [1,2,3,4,5,6,7], k = 3
// Output: [5,6,7,1,2,3,4]
// Explanation:
// rotate 1 steps to the right: [7,1,2,3,4,5,6]
// rotate 2 steps to the right: [6,7,1,2,3,4,5]
// rotate 3 steps to the right: [5,6,7,1,2,3,4]
// Example 2:

// Input: nums = [-1,-100,3,99], k = 2
// Output: [3,99,-1,-100]
// Explanation: 
// rotate 1 steps to the right: [99,-1,-100,3]
// rotate 2 steps to the right: [3,99,-1,-100]

///////// first attempt ///////////////
function rotateIt(arr, k) {
  while (k > 0) {
  let moved = arr.pop();
    arr.unshift(moved);               
    k--;                                                      /////this solves every case but leetcode wants a different answer for some reason
  }                                                           /////will try without built-in methods
  return arr;
}

// console.log(rotateIt([1,2,3,4,5,6,7], k = 3))

//////// "second attempt" //////////////
function recursiveRotateIt(arr, k) {
  let mover = arr[arr.length - 1];
  if (k > 0) {
  for (let i = arr.length - 1; i > 0; i--) {                /////// this attempt also outputs the exact right answer every time but leet code is rejecting it
    arr[i] = arr[i -1];                                     /////// not sure why exactly but will build a third solve i suppose
  }
  arr[0] = mover;
  k--;
  recursiveRotateIt(arr, k);
} return arr;  
}



//////// *"THIRD ATTEMPT"* ///////////  
function rotateFTL(arr, k) {
  for (let i = k; i > 0; i--) {
    let mover = arr[arr.length - 1];
    arr.splice(-1,  1);                                   ///////// for a third time it's rejecting my answer that passes all tests not really sure where to go from here
    arr.splice(0, 0, mover);
  }
  return arr;
}

//////// ....four times //////////////
function fugginRotate(arr, k) {
  if (k > arr.length) {
    k = k - arr.length;
  };
    while (k > 0) {
  arr.reverse();
  let moveIt = arr.shift();
  arr.reverse();
  arr.unshift(moveIt);
  k--;
  }return arr;
}

/////////// THE GLORIOUS FIFTH ATTEMPT ///////////////
function rotateArray(arr, k) {
  if (k > arr.length) {
    k = k - arr.length;
  }
  let keepers = arr.splice(arr.length - k);                               //// The time complexity on this one finally satisfied the evil leet code team
  arr.splice(0, 0, ...keepers)                                            //// this was much tougher than expected and I blame the instructions lol
  return arr;
}

console.log(rotateArray([1,2,3,4,5,6,7], k = 2));


