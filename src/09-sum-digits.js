/**
 * Given a number, replace this number with
 * the sum of its digits until we get to a one digit number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For 100, the result should be 1 (1 + 0 + 0 = 1)
 * For 91, the result should be 1 (9 + 1 = 10, 1 + 0 = 1)
 *
 */
function getSumOfDigits(n) {
  const arr = n.toString().split('');
  let newNum = 0;
  for (let i = 0; i < arr.length; i++) {
    newNum += +arr[i];
  }
  const arr1 = newNum.toString().split('');
  let lastNum = 0;

  for (let i = 0; i < arr1.length; i++) {
    lastNum += +arr1[i];
  }
  return +lastNum;
}

module.exports = getSumOfDigits;
