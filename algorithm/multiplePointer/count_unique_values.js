

const countUniqueValues2 = (array) => {
    let j = 0;
    for (let i = 0; i < array.length; i++) {
        if (array[i] !== array[j]) {
            j++
        }
    }
    return j + 1;
}

console.log(countUniqueValues2([1, 2, 3, 4, 4, 4, 4, 5]));