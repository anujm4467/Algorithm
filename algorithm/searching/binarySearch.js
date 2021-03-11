const binarySearch = (array, num) => {
    let start = 0, end = array.length - 1;
    let mid = Math.floor((start + end) / 2);
    while (array[mid] !== num && start <= end) {
        if (array[mid] < num) {
            start = mid + 1;
        } else {
            end = mid - 1;
        }
        mid = Math.floor((start + end) / 2);
    }
    if (array[mid] === num) {
        return mid;
    } else {
        return -1;
    }
}


console.log(binarySearch([1, 2, 3, 4, 32, 56], 0));
