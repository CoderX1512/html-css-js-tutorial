class Person{
    constructor(name,age){
        this.name = name;
        this.age = age;
    }
    displayInfo(){
        console.log(`${this.name} is the name of the person and ${this.age} is the age of the peron.`)
    }
}

let p1 = new Person("Alice","22");
let p2 = new Person("Bob","30");

p1.displayInfo();
p2.displayInfo();