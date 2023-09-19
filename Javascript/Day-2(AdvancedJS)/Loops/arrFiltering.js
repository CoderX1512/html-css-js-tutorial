function filterEvenNumbers(arr) {
    const evenNumbers = [];
  
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] % 2 === 0) {
        evenNumbers.push(arr[i]);
      }
    }
  
    return evenNumbers;
  }
  
  function filterOddNumbers(arr) {
    const oddNumbers = [];
  
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] % 2 !== 0) {
        oddNumbers.push(arr[i]);
      }
    }
  
    return oddNumbers;
  }
  
  const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  
  const evenResult = filterEvenNumbers(numbers);
  console.log('Even numbers:', evenResult); // Output: Even numbers: [2, 4, 6, 8, 10]
  
  const oddResult = filterOddNumbers(numbers);
  console.log('Odd numbers:', oddResult); // Output: Odd numbers: [1, 3, 5, 7, 9]
  