var firstUniqChar = function (s) {
    let obj = {};
    for (let i = 0; i < s.length; i++) {
        obj[s[i]] = (obj[s[i]] + 1 || 0);
    }
    for (const item in obj) {
        if (obj[item] === 0) return s.indexOf(item);
    }
    return -1;
};



console.log(firstUniqChar('loveleetcode'));