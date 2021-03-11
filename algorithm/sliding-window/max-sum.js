/**
 *  find maximum sum of arrays of given size.
 */

const maxSumOfArray = (array, k) => {
    let largest = []; let temp = 0;
    for (let i = 0; i < k; i++) {
        temp = Math.max(temp, array[i]);
    }
    largest.push(temp);
    for (let i = k; i < array.length; i++) {
        temp = temp - array[i - k] + array[i];
        largest.push(Math.max(largest, temp));
    }
    return largest;
};

console.log(maxSumOfArray([1, 3, -1, -3, 5, 3, 6, 7], 3));