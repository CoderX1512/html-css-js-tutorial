// Using loops
function printFibonacciWithLoop(n) {
    let fibArray = [0, 1];
  
    for (let i = 2; i < n; i++) {
      const nextFib = fibArray[i - 1] + fibArray[i - 2];
      fibArray.push(nextFib);
    }
  
    console.log(fibArray.join(', '));
  }
  
  // Usage:
  //const n = 10; // Change 'n' to the desired number of Fibonacci numbers to print
  printFibonacciWithLoop(10);

  




//Using recursion
  function fibonacci(n) {
    if (n <= 0) {
      return [];
    } else if (n === 1) {
      return [0];
    } else if (n === 2) {
      return [0, 1];
    } else {
      const fibArray = fibonacci(n - 1);
      fibArray.push(fibArray[n - 2] + fibArray[n - 3]);
      return fibArray;
    }
  }
  

  // Using recursion
  function printFibonacciWithRecursion(n) {
    const fibArray = fibonacci(n);
    console.log(fibArray.join(', '));
  }
  
  // Usage:
  const n = 10; // Change 'n' to the desired number of Fibonacci numbers to print
  printFibonacciWithRecursion(n);


  

