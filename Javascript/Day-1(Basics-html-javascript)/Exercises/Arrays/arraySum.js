function arrSum(num){
    let sum =0;
    for(i=0; i<num.length; i++){
        sum+=num[i];
    }
    return sum;
}

const num = [1,2,3,4,5];
const x = arrSum(num);
console.log(x);

//Reduce method
/*
function arrSum(num) {
    return num.reduce((sum, current) => sum + current, 0);
}

const num = [1, 2, 3, 4, 5];
const x = arrSum(num);
console.log(x);
*/


//Using a for...of loop:   (Same as my method above)
/*
function arrSum(num) {
    let sum = 0;
    for (const element of num) {
        sum += element;
    }
    return sum;
}

const num = [1, 2, 3, 4, 5];
const x = arrSum(num);
console.log(x);

*/



//Using the reduceRight method (calculates the sum from right to left):
/*
function arrSum(num) {
    return num.reduceRight((sum, current) => sum + current, 0);
}

const num = [1, 2, 3, 4, 5];
const x = arrSum(num);
console.log(x);
*/