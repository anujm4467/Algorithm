const arraySquare = (arr1, arr2) => {
    if (arr1.length !== arr2.length) return false;
    let object1 = {}, object2 = {};
    for (const item of arr1) {
        object1[item] = (object1[item] || 0) + 1;
    }
    for (const item of arr2) {
        object2[item] = (object2[item] || 0) + 1;
    }
    for (const key in object1) {
        if (!(key * key in object2)) {
            return false;
        }
        if (object2[key * key] !== object1[key]) {
            return false;
        }
    }
    return true;
};

console.log(arraySquare([1, 2, 3], [1, 4, 9]));
;