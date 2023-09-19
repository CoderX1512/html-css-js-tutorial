function func1(){
    console.log(arguments);
}

func1(4,5,6,7,8,2);

// 'arguments' is actually an array containing the parameters. 
//Using 'arguments' keyword we can catch these parameters and do operations on them.

//In JavaScript, you can create a function that finds the longest string from a list of strings 
// without passing any arguments explicitly by using the 'arguments' object

function findLongestString() {
    if (arguments.length === 0) {
      return undefined; // Handle the case when no arguments are provided.
    }
  
    let longest = '';
  
    for (let i = 0; i < arguments.length; i++) {
      if (typeof arguments[i] === 'string' && arguments[i].length > longest.length) {
        longest = arguments[i];
      }
    }
  
    return longest;
  }
  
  // Example usage:
  const result = findLongestString('apple', 'banana', 'cherry', 'date', 'elderberry');
  console.log(result); // Output: 'elderberry'
  
console.log(findLongestString("asdsad", "asdas","23323432546","fds"));