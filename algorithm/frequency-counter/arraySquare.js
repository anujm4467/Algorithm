/**
 * Question given two array one containing n number of elements and second array contain corresponding square
 * we have to find the array 1 should have all square in array 2 
 *  example : a1 [1,2,3],  a2 [1,4,9]
*/

const arraySquare = (arr1, arr2) => {
    if (arr1.length !== arr2.length) return false;
    let arr1Count = {}, arr2Count = {};
    for (const item of arr1) {
        arr1Count[item] = arr1Count[item] ? arr1Count[item] + 1 : 1;
    }
    for (const item of arr2) {
        arr2Count[item] = arr2Count[item] ? arr2Count[item] + 1 : 1;
    }
    for (const item in arr1Count) {
        if (item * item in arr2Count) {
            arr1Count[item] = arr1Count[item] - 1;
        } else {
            return false;
        }
    }
    return true;
};

console.log(arraySquare([0, 2, 3], [0, 4, 9]));