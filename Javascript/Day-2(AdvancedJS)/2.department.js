class Department {
    constructor(dept){
        this.dept = dept;
    }
    deptInfo(){
        console.log(`${this.dept} is the name of your department.`)
    }
}

class Employee extends Department {
    constructor(dept,name){
        super(dept);
        this.name = name;
    }
    empInfo(){
        console.log(`${this.name} works in the department ${this.dept}`);
    }
}

let emp1 = new Employee('HR','Alice');
let emp2 = new Employee('IT','Bob');
emp1.empInfo();
emp1.deptInfo()
//emp2.empInfo();