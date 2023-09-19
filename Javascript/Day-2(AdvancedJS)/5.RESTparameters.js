// the third argument, manyMoreArgs, will be an array that contains the 3rd,4th,5th...nth- as many arguments the user includes 

function MyFunc(a,b,c, ...manyMoreArgs){
    console.log("a",a);
    console.log("b",b);
    console.log("c",c);
    console.log("manyMoreArgs",manyMoreArgs);
}
MyFunc("one", "two", "three", "four", "five", "six")


function multiply(multiplier, ...manyMoreArgs){
    return theArgs.map(element => {
        return multiplier * element
    })
}

let arr = multiply(2,1,2,3);
console.log(arr); //[2,4,6]


