function countVowel(text) {
    var count = 0;
    for (var i = 0; i < text.length; i++) {
        var char = text[i].toLowerCase(); // Convert the character to lowercase for case insensitivity
        if (char === 'a' || char === 'e' || char === 'i' || char === 'o' || char === 'u') {
            count += 1;
        }
    }
    return count;
}

var x = countVowel("Crazy fox jumped over the lazy dog");
console.log(x);


//Method-1(Using regular expression)
/*
function countVowels(text) {
    const vowelRegex = /[aeiouAEIOU]/g;
    const vowelMatches = text.match(vowelRegex);
    return vowelMatches ? vowelMatches.length : 0;
}
*/



//Method-2(Using a loop)
/*
function countVowels(text) {
    const vowels = 'aeiouAEIOU';
    let count = 0;
    for (let i = 0; i < text.length; i++) {
        if (vowels.includes(text[i])) {
            count++;
        }
    }
    return count;
}
*/



//Method-3
/*
function countVowels(text) {
    const vowels = 'aeiouAEIOU';
    return [...text].reduce((count, char) => vowels.includes(char) ? count + 1 : count, 0);
}
*/
//Method-4
/*
function countVowels(text) {
    const vowelRegex = /[aeiouAEIOU]/g;
    return (text.match(vowelRegex) || []).length;
}
*/