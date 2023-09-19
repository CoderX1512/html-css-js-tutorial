// var car = {
//     registrationNumber:'FT1234',
//     brand:'Benz',
//     displayDetails: function(){
//         console.log(this.registrationNumber + " "+ this.brand);
//     }
// }

//car.displayDetails();

//But what if we want to borrow a method?
// var myCarDetails = car.displayDetails; <-- this wont work as expected we have to use bind method for that
// myCarDetails();

//Well this wont'n work as the 'this' will be assigned to the global context which doesn't have neither

// var myCarDetails = car.displayDetails.bind(car);
// myCarDetails();  //FT1234 Benz

// giving parameters
var car = {
    registrationNumber:'FT1234',
    brand:'Benz',
    displayDetails: function(ownerName){
        console.log(ownerName+ ',this is your car:',this.registrationNumber + " "+ this.brand);
    }
}

var myCarDetails = car.displayDetails.bind(car,"Ahesh");
myCarDetails();

//We can use two methods apply() and call()
// apply()
displayDetails.apply(car,["Ahesh"]);

// OR
// call()
displayDetails.call(car,"Ahesh");

// we will get same output in both the cases