// Given an integer, swap the bits and indices i and j
// f(11, 2, 0) = 14 (1011 -> 1110)
var swapBits = function (n, i, j) {
  // Get bit values
  var bit_i = n & (1 << i);
  var bit_j = n & (1 << j);
  // 0-fy indices in n
  n = n & ~(1 << i);
  n = n & ~(1 << j);
  // Set bits
  n = n | (bit_i << j);
  n = n | (bit_j << i);
  return n;
};