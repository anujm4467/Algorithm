const countUniqueValues1 = (array) => {
    let set = new Set();
    for (const ele of array) {
        set.add(ele);
    }
    return set.size;
};

const countUniqueValues2 = (array) => {
    let i = 0;
    for (let j = 1; j < array.length; j++) {
        if (array[i] !== array[j]) {
            i++;
            array[i] = array[j];
        }
    }
    return (i + 1);
}

console.log(countUniqueValues2([1, 2, 3, 4, 4, 4, 4, 5]));