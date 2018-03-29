
function sum(fromN, toN) {

  if (toN > fromN) {
    return fromN + sum(fromN + 1, toN);
  } else {
  return fromN;
  }
 }

module.exports = sum;
