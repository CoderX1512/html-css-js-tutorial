class User {
    //_name = ""; Note-No need to declare this local variable, the compiler will auto declare it
    constructor(name){
        this._name = name;
    }

    sayHi(){
        console.log(this._name);
    }
}

var user = new User("Ahesh");
user.sayHi();