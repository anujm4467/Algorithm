/**
 *  find maximum sum of arrays of given size.
 */

const maxSumOfArray = (array, num) => {
    let largestSum = 0;
    for (let i = 0; i < num; i++) {
        largestSum += array[i]
    }
    tempSum = largestSum;
    for (let j = num; j < array.length; j++) {
        tempSum = tempSum - array[j - num] + array[j];
        largestSum = Math.max(tempSum, largestSum);
    }
    return largestSum;
};

console.log(maxSumOfArray([1, 2, 3, 4, 55, 23, 22, 0], 3));



