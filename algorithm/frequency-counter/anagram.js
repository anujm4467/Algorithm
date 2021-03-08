/**
 * Question given two string s1 and s2
 * we have to find all the characters of s1 is in s2
 */

const anagram = (s1, s2) => {
    if (s1.length !== s2.length) return false;
    let wordCount = {};
    for (const item of s1) {
        wordCount[item] = (wordCount[item] || 0) + 1;
    }
    for (const item of s2) {
        if (!wordCount[item]) {
            return false;
        }
        --wordCount[item];
    }
    return true;
};

console.log(anagram('abcdaf', 'dbcaaa'));
