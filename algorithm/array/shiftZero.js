/**
 * Given an array of random numbers, Push all the zero’s of a given array to the end of the array.
 * For example, if the given arrays is {1, 9, 8, 4, 0, 0, 2, 7, 0, 6, 0},
 * it should be changed to {1, 9, 8, 4, 2, 7, 6, 0, 0, 0, 0}.
 * The order of all other elements should be same.
 * Expected time complexity is O(n) and extra space is O(1)
 *
*/


const pushZerosToEnd = (arr, n) => {
    let count = 0;  // Count of non-zero elements 
    // Traverse the array. If element encountered is non- 
    // zero, then replace the element at index 'count'  
    // with this element 
    for (let i = 0; i < arr.length - 1; i++) {
        if (arr[i] != 0) {
            arr[count++] = arr[i];
        }
    }
    // here count is  
    // incremented 

    // Now all non-zero elements have been shifted to  
    // front and  'count' is set as index of first 0.  
    // Make all elements 0 from count to end. 
    while (count < n) {
        arr[count++] = 0;
    }
    return arr;
}


console.log(pushZerosToEnd([1, 9, 8, 4, 0, 0, 2, 7, 0, 6, 0]))