const main = (string) => {
    if (string.length < 2) return string.length;
    let left = 0, right = 0, largest = 0, map = {};
    while (right < string.length) {
        if (map[string[right]] !== undefined) {
            left = Math.max(left, map[string[right]] + 1);
        }
        map[string[right]] = right;
        largest = Math.max(largest, right - left + 1);
        right++;
    }
};

console.log(main("tmmzuxt"));