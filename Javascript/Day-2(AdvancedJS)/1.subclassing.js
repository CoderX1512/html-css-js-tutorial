class Animal {
    constructor(name){
        this.name = name;
    }
    speak(){
        console.log(`${this.name} makes noise`);
    }
}

//var ani = new Animal("Elephant");
//ani.speak();


//Inheritance in javascript
class Dog extends Animal {
    constructor(name){
        super(name);  // call the superclass constructor and pass the name parameter 
    }

    barks(){
        console.log(`${this.name} barks.`);
    }
}
let d = new Dog("Pug");
d.speak();
d.barks();
