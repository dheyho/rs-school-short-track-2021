/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */
function sortByHeight(arr) {
  const newArr = [];
  const result = [];
  const array = arr;

  let count = 0;
  for (let i = 0; i < array.length; i++) {
    if (array[i] === -1) {
      newArr.push(i);
    }
  }
  for (let j = array.length - 1; j > 0; j--) {
    for (let i = 0; i < j; i++) {
      if (array[i] > array[i + 1]) {
        const temp = array[i];
        array[i] = array[i + 1];
        array[i + 1] = temp;
      }
    }
  }

  array.splice(0, newArr.length);

  for (let i = 0; i < array.length + newArr.length; i++) {
    for (let j = 0; j < newArr.length; j++) {
      if (newArr[j] === i) {
        result.push(-1);
        count++;
        break;
      }
    }
    if (result[i] !== -1) {
      result.push(array[i - count]);
    }
  }
  return result;
}
module.exports = sortByHeight;
