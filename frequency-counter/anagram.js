const anagramOrNot = (str1, str2) => {
    if (str1.length !== str2.length) return false;
    let object = {};
    for (const item of str1) {
        object[item] = (object[item] || 0) + 1
    }
    for (const item of str2) {
        if (!object[item]) {
            return false;
        } else {
            --object[item];
        }
    }
    return true;
};


console.log(anagramOrNot("anagrams", "nagramsl"));