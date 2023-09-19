class BankAccount {
    constructor(balance){
        this.balance = balance;
    }
    deposit(amount){
       this.balance += amount;
      console.log(`Balance after a deposit of Rs.${amount} is Rs.${this.balance}`);
    }

    withdrawal(amount){
        if(amount <= this.balance){
            this.balance -= amount;
            console.log(`Balance after a withdrawal of Rs.${amount} is Rs.${this.balance}`);
        }
        else {
            console.log('Insufficient funds for withdrawal.');
        }       
        
    }
    showBalance(){
        console.log(`The balance is ${this.balance}`);
    }
}
/*
let acc = new BankAccount(100); 
acc.showBalance(); // Output: The balance is Rs.100
acc.deposit(50); // Output: Balance after a deposit of Rs.50 is Rs.150
acc.withdrawal(30); // Output: Balance after a withdrawal of Rs.30 is Rs.120
acc.showBalance(); // Output: The balance is Rs.120
*/

class SavingsAccount extends BankAccount {
    constructor(balance,interestRate){
        super(balance);
        this.interestRate = interestRate;
    }

    calculateInterest() {
        const interest = (this.balance * this.interestRate) / 100;
        this.balance += interest;
        console.log(`Interest earned: Rs.${interest}`);
    }
}

let savingsAcc = new SavingsAccount(1000, 5); // Initial balance of Rs.1000 and 5% interest rate
savingsAcc.showBalance(); // Output: The balance is Rs.1000
savingsAcc.deposit(500); // Output: Balance after a deposit of Rs.500 is Rs.1500
savingsAcc.calculateInterest(); // Output: Interest earned: Rs.75
savingsAcc.showBalance(); // Output: The balance is Rs.1575
savingsAcc.withdrawal(200); // Output: Balance after a withdrawal of Rs.200 is Rs.1375
savingsAcc.showBalance(); // Output: The balance is Rs.1375