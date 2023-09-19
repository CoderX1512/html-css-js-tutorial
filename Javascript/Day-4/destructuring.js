// Before ES6:
// assigning object attributes to variables
// const person = {
//     name:'Sara',
//     age:25,
//     gender:'female'
// }

// let name = person.name;
// let age = person.age;
// let gender = person.gender;

// console.log(name); // Sara
// console.log(age);  //25
// console.log(gender);  //female




//From ES6 
// assigning object attributes to variables
const person = {
    name:'Sara',
    age:25,
    gender:'female'
}

// destructuring assignment
let{name,age,gender} = person;

console.log(name); // Sara
console.log(age);  //25
console.log(gender);  //female


// Array Destructuring

const arrValue = ['one','two','three'];

// destructuring assignment in arrays
const [x,y,z] = arrValue;

console.log(x); // one
console.log(y);  //two
console.log(z);  //three

