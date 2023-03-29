/*
    Exercise 1: Write a function called toCelcius that takes in a number representing 
    temperature in Fahrenheit and converts the number into Celcius.

    Ex 1. toCelcius(32) // 0
    Ex 2. toCelcius(212) // 100
    Ex 3. toCelcius(50) // 10
*/
console.log('This is the homework!');

toCelcius = (fahrenheit) => ((fahrenheit - 32) * 5/9).toFixed(2);

console.log(toCelcius(78))

// homework.js:13 25.56

/*
    Exercise 2: Create a class for a User that sets username and password property
    on creation. Add a method to change the user's password. The method should take in 
    the old password and new password. If the old password is wrong do not reset the password.
    Create an instance of the new user and then change their password using the method.
*/
// so... old pw = cur pw and cur pw = new pw?

class User{ //make the class
    constructor(username, password) {
        this.username = username;
        this.password = password;
    } // method for password reset (only if old password is Valid)
    changePassword(oldPassword, newPassword) {
        if (this.password === oldPassword) {
            this.password = newPassword;
        } else {
        
        }
    }
}

let user1 = new User('brians', 'abc123');
user1.changePassword('abc123', '123abc'); // Sets the user's password to 123abc
console.log(user1);

// homework.js:39 User {username: 'brians', password: '123abc'}

/*
    Exercise 3: Write a function that takes in an array of integers and returns
    an array of the negative integers squared using Array methods

    Ex 1. squareNegatives([-10, -3, 4, -2, 8, 9, -3]) // [100, 9, 4, 9]
    Ex 2. squareNegatives([-5, -4, -3, -2, -1, 1, 2, 3, 4, 5]) // [25, 16, 9, 4, 1]
    Ex 3. squareNegatives([2, 4, 6, 8, 10]) // []
*/
squareNegatives  = (arr) =>  {
    negativeNumbers = arr.filter(x => x < 0); // find and define the negative numbers
    squaredNegatives = negativeNumbers.map(num => Math.pow(num, 2)); //square each number found to be negative 
    return squaredNegatives 
}

console.log(squareNegatives([-10, -3, 4, -2, 8, 9, -3]) )
console.log(squareNegatives([-5, -4, -3, -2, -1, 1, 2, 3, 4, 5]))
console.log(squareNegatives([2, 4, 6, 8, 10]))

// homework.js:59 (4) [100, 9, 4, 9]
// homework.js:60 (5) [25, 16, 9, 4, 1]
// homework.js:61 []

function squareNegatives(arr){
    const negativeNumbers = arr.filter(function(num){
    return num < 0;
    });
    let squaredNegatives = negativeNumbers.map(function(num){
        return num * num;
    });
    return squaredNegatives
}
console.log(squareNegatives([-10, -3, 4, -2, 8, 9, -3]) )
console.log(squareNegatives([-5, -4, -3, -2, -1, 1, 2, 3, 4, 5]))
console.log(squareNegatives([2, 4, 6, 8, 10]))

// homework.js:73 (4) [100, 9, 4, 9]
// homework.js:74 (5) [25, 16, 9, 4, 1]
// homework.js:75 []





