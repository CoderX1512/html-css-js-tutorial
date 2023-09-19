//Method-1(My method )
function checkPallindrome(text) {
    let reversed = '';
    for (let i = text.length - 1; i >= 0; i--) {
        reversed += text[i];
    }
    const reversedText = reversed;
    if(text === reversedText){
        return true;
    }
    else{
        return false;
    }
}

const text = "racecar";
const isPallindrome = checkPallindrome(text);
console.log(isPallindrome);


//method-2 (Using array)
/*
function isPalindrome(text) {
    const reversedText = text.split('').reverse().join('');
    return text === reversedText;
}
*/

//method-3 (Using Recursion)
/*
function isPalindrome(text) {
    text = text.toLowerCase().replace(/[^a-z0-9]/g, ''); // Remove non-alphanumeric characters and make lowercase
    if (text.length <= 1) {
        return true;
    }
    if (text[0] === text[text.length - 1]) {
        return isPalindrome(text.slice(1, -1));  //.slice(1, -1) method removes the first and last characters from the text. 
    }
    return false;
}
*/


//method-4 (Using while loop)
/*
function isPalindrome(text) {
    text = text.toLowerCase().replace(/[^a-z0-9]/g, ''); // Remove non-alphanumeric characters and make lowercase
    let left = 0;
    let right = text.length - 1;
    while (left < right) {
        if (text[left] !== text[right]) {
            return false;
        }
        left++;
        right--;
    }
    return true;
}
*/
