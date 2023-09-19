//Write a function that divides the array into smaller arrays of a specified size.
function chunkArray(arr, chunkSize) {
    if (chunkSize <= 0) {
      throw new Error("Chunk size should be greater than 0.");
    }
  
    const chunkedArray = [];
    for (let i = 0; i < arr.length; i += chunkSize) {
      chunkedArray.push(arr.slice(i, i + chunkSize));
    }
    return chunkedArray;
  }
  
  // Example usage:
  const originalArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  const chunkSize = 3;
  const result = chunkArray(originalArray, chunkSize);
  console.log(result);
  // Output: [ [ 1, 2, 3 ], [ 4, 5, 6 ], [ 7, 8, 9 ], [ 10 ] ]
  