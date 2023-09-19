function findMaxMin(arr) {
    if (arr.length === 0) {
        return { max: undefined, min: undefined };
    }

    let max = arr[0];
    let min = arr[0];

    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > max) {
            max = arr[i];
        }
        if (arr[i] < min) {
            min = arr[i];
        }
    }

    return { max, min };
}

const numbers = [4, 2, 9, 1, 5, -3];
const result = findMaxMin(numbers);
console.log("Maximum:", result.max);
console.log("Minimum:", result.min);




//Using Built-in Functions (Math.max and Math.min):
/*
function findMaxMin(arr) {
    if (arr.length === 0) {
        return { max: undefined, min: undefined };
    }

    const max = Math.max(...arr);
    const min = Math.min(...arr);

    return { max, min };
}

const numbers = [4, 2, 9, 1, 5, -3];
const result = findMaxMin(numbers);
console.log("Maximum:", result.max);
console.log("Minimum:", result.min);
*/