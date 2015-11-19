// Compute the parity for a number
// The parity of a sequence of bits is 1 if the number of 1s is odd,
// and 0 otherwise
var computeParity = function (n) {
  // Continue only for valid inputs
  if (n !== undefined && typeof n === 'number') {
    var str = n.toString(2);
    var oneCount = 0;
    // Loop
    for (var i = 0; i < str.length; ++i) {
      if (str[i] === '1') {
        ++oneCount;
      }
    }
    // Return parity
    return oneCount % 2;
  }
};