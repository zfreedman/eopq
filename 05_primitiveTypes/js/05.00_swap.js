// Given a tuple of numbers [a, b] swap them without
// a temp variable
var swap = function (arr) {
  // Continue for only valid arrays
  if (Array.isArray(arr) &&
    arr.length === 2 &&
    typeof arr[0] === 'number' &&
    typeof arr[1] === 'number') {
    // Swap
    arr[0] ^= arr[1];
    arr[1] ^= arr[0];
    arr[0] ^= arr[1];
  }
};

// a = 1 0 1 1
// b = 0 1 1 0
// a ^ b = 1 1 0 1
// b ^ (a ^ b) = 1 0 1 1
// (a ^ b) ^ (b ^ (a ^ b)) = 0 1 1 0