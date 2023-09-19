var x =1;   // acts as global scope
let y = 1;  // acts as local scope

if(true){
    var x =2;
    let y =2; // value of y will be 2 in this block of code only.
}

console.log(x);
// expected output : 2
console.log(y);
// expected output : 1