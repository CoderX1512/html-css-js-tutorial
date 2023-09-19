/*
function printThis(){
    console.log(this);
}

printThis(); //this refers to the window, or global object

//Generally, it is safer to use strict mode to reduce the probability of this having an unexpected scope.
//Rarely will someone want to refer to the window object

'use strict'

function printThis(){
    console.log(this);
}


//Note- this keyword refers to the current context

const india = {
    name: 'The country India',
    indepedenceOn: 1947,

    describe() {
        console.log(`${this.name} got its independence on ${this.indepedenceOn}`);
    },
}

india.describe();
*/






// In a nested object, this refers to the current object scope of the method.In the following example,
// this.symbol within the details object refers to details.symbol
// const india = {
//     name: 'The country India',
//     indepedenceOn: 1947,

//     details: {
//         flag:'Tricoloured',
//         currency:'INR'
//         printDetails() {
//             console.log(`The flag is ${this.flag} and the currency is ${this.currency}.`)
//         },
//     },
// }  

// india.details.printDetails()



//In this context, this is now bound to the instance of, country which is contained in the India constant

// function Country(name, independenceOn){
//     this.name = name
//     this.independenceOn = independenceOn

//     this.describe = function() {
//         console.log(`${this.name} got its independence on ${this.indepedenceOn}`)
//     }
// }

// const india = new Country('The country India',1947)
// india.describe();

// this in the describe method refers to the instance of Country, which is india.

// class Country {
//     constructor(name,independence){
//         this.name = name
//         this.independenceOn = independenceOn
//     }
//     describe(){
//         console.log(`${this.name} got its independence on ${this.indepedenceOn}`) 
//     }
// }

// const india = new Country('The Country India',1947)
// india.describe()


//Traditional function expression
// const add = function(a,b){
//     return a+b;
// };

// //function add(a,b){}

// //Arrow function equivalent
// const addArrow = (a, b) => a + b;

// //Usage
// console.log(add(2,3));      // output - 5
// console.log(addArrow(2,3));  // output - 5


// //Arrow function
// const myNameIs = {
//     name: 'Ahesh Behera',

//     regularFunction: function(){   //'function()' keyword refers to the parent 'myNameIs'
//         console.log(this.name)
//     },
//     arrowFunction: () => {
//         console.log(this.name)     //current context of 'this' is from line 108 to 110
//     },
// }

// myNameIs.regularFunction() // Ahesh Behera
// myNameIs.arrowFunction()  //undefined



