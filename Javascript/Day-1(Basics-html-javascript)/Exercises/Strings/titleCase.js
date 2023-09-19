// ex- this is an example 
//output - This Is An Example

function toTitleCase(inputString) {
    // Split the input string into an array of words
    const words = inputString.split(' ');

    // Iterate through each word and capitalize the first letter while converting the rest to lowercase
    const titleCaseWords = words.map(word => {
        if (word.length === 0) {
            return ''; // Skip empty words
        }
        const firstLetter = word[0].toUpperCase();
        const restOfWord = word.slice(1).toLowerCase();
        return firstLetter + restOfWord;
    });

    // Join the title-cased words back into a single string
    const titleCaseString = titleCaseWords.join(' ');

    return titleCaseString;
}

// Example usage:
const inputString = "hello world";
const titleCaseResult = toTitleCase(inputString);
console.log(titleCaseResult); // Outputs: "Hello World"








/*
//Using regex

function toTitleCase(inputString) {
    return inputString.replace(/\b\w/g, char => char.toUpperCase());
}

// Example usage:
const inputString = "hello world";
const titleCaseResult = toTitleCase(inputString);
console.log(titleCaseResult); // Outputs: "Hello World"
*/