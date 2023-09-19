// Sample data : an array of person objects
const people = [
    { name:'Alice', age:30 } ,
    { name:'Bob', age:25 } ,
    { name:'Charlie', age:35 } ,
    { name:'David', age:28 } ,
 ]
 
 // Example 1: Filtering people having age above 30 using arrow function
 // const olderThan30 = people.filter(person => person.age >30 );
 // console.log('People older than 30:', olderThan30);
 
 // Example 2: Mapping names to uppercase using arrow function
//  const uppercaseNames = people.map(person => person.name.toUpperCase());
//  console.log('Uppercase names', uppercaseNames)
 
 
// Example 3: Calculating the average age using arrow function and reduce
const totalAge = people.reduce((sum, person) => sum + person.age, 0);
const averageAge = totalAge / people.length;
console.log('Average age is :', averageAge);

// Example 4: Using an arrow function in a forEach loop 
console.log('People and their ages:');
people.forEach(person => {
    console.log(`${person.name}: ${person.age} years old`);
});

//Example 5: Arrow function in an object method
const personDetails = {
    name:'Eve',
    age:'22',
    introduce: function(){
        console.log(`Hi I'm ${this.name} and I'm ${this.age} years old`);
    },
};

personDetails.introduce();

// const personDetails = {
//     name:'Eve',
//     age:'22',
//     introduce: () => {
//         console.log(`Hi I'm ${this.name} and I'm ${this.age} years old`);
//     },
// };

// personDetails.introduce(); // This will not work as expected