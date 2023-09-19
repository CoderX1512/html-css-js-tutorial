//method-1
/*
function ReverseString(text){
    for(i=text.length -1; i >= 0; i--)
    {
       console.log(text[i]);
      }
}
ReverseString("Ahesh Kumar Behera");
*/






//Method-2



function reverseText(text) {
    // Split the text into an array of characters, reverse it, and then join it back into a string
    return text.split('').reverse().join('');
}

// Example usage:
const originalText = "Hello, World!";
const reversedText = reverseText(originalText);
console.log(reversedText); // Outputs: "!dlroW ,olleH"













//Method-3



/*function reverseTextWithoutMethods(text) {
    let reversed = '';
    for (let i = text.length - 1; i >= 0; i--) {
        reversed += text[i];
    }
    return reversed;
}

// Example usage:
const originalText = "Hello, World!";
const reversedText = reverseTextWithoutMethods(originalText);
console.log(reversedText); // Outputs: "!dlroW ,olleH"



*/ 
