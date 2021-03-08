/**
 * find first pair of sum of 0
 */

const sumZeroRefactor = (array) => {
    let left = 0;
    let right = array.length - 1;
    while (left < right) {
        let sum = array[left] + array[right];
        if (sum === 0) {
            return [array[left], array[right]];
        }
        if (sum > 0) {
            right--;
        } else {
            left++;
        }
    }
};

console.log(sumZeroRefactor([-4, -3, -2, -1, 0, 1, 2, 3, 4, 10]));;
