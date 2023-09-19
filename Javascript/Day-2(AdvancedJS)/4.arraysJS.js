// There are two syntaxes for creating an empty array
let arr = new Array();
let arr1 =[];

// Almost all the time second syntax is used. We can supply initial elements in the brackets.
let fruits = ["pine","banana","cherry"]; 
console.log(fruits);

// We can access elements by their indexes in the array
console.log( fruits[0] );
console.log( fruits[1] );
console.log( fruits[2] );

// we can rerplace an element
fruits[2] = 'Pear';
fruits[3] = 'Lemon';
console.log(fruits);

// length of the array
console.log(fruits.length);




//loops
let arr2 = ["pine","banana","cherry"]; 
for( let i=0; i<=arr2.length; i++ ){
    console.log(arr[i]);
}

//Another form of loop, for ..of
let fruits2 = ["pine","banana","cherry"]; 

for(let fruit of fruits){
    console.log(fruit)
}

