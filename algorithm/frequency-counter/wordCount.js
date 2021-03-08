/**
 *
 * You will be provided with a passage (no special characters, no punctuations).
 * Your task is to find the frequency of the words occurring in the text,
 * in other words find the number of times a word occurs in the given passage.
 *
 * @sample input : My name is Xyz He is Abc Is he allright
 * @sample output : MY 1 NAME 1 IS 3 XYZ 1 HE 2 ABC 1 ALLRIGHT 1
 *
*/


const findWordCount = (sentence) => {
    let wordCount = new Object();
    for (const item of sentence.split(' ')) {
        let word = item.toString().toUpperCase()
        wordCount[word] = wordCount[word] ? wordCount[word] + 1 : 1;
    }
    for (const word in wordCount) {
        console.log(word, wordCount[word]);
    }
};

console.log(findWordCount('In the world of technology the human life will be incomplete without the role of information technology Information Technology at BIT is interdisciplinary It was inaugurated in the year 1999 Here we empower you with the tools and ideas that can be applied anywhere both in college and beyond We aim at molding the students into high qualified technocrats and to make them good citizens of our nation to serve the industry and society The BTech Information Technology programme has been accredited by NBA The department has a heartfelt team of dedicated faculty members with a sound knowledge in various areas and it has the state-of-art facilities for various laboratories and supports smart class learning'));

