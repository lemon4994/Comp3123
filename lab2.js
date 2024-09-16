//Full Stack Development Lab 1
//By Nicholas Chiarello 101275986

//Exercise 1
/*
function greeter(myArray, counter) {
    var greetText = 'Hello ';

    for (var index = 0; index < myArray.length; index++) {
        console.log(greetText + myArray[index]);
    }
}
greeter(["Randy Savage", "Ric Flair", "Hulk Hogan"], 3);
*/
//Rewrite the following code block using ES6 syntax, ie. const, let, arrow function, template literals, for..of

let greeter = (myArray) => {
    const greetText = "Hello "
    for (const i of myArray) {
        console.log(greetText + i)
    }
}
greeter(["Randy Savage", "Ric Flair", "Hulk Hogan"], 3)

//Exercise 2
//Using destructuring assignment syntax and the spread operator, write a function will capitalize the  first letter of a string

function capitalize(string){
    const [first, ...rest] = string
    return [...first.toUpperCase(), ...rest].join('')
}

console.log(capitalize('fooBar'))
console.log(capitalize('nodeJS'))

//Exercise 3
//Using array.proto.map create function to use the capitalize method in Exercise 2 to upper case the first character of each Color in the following array.
const colors = ['red', 'green', 'blue']
function capitalizedColors(colorArray){
    return colorArray.map(color => capitalize(color))
}
console.log(capitalizedColors(colors))

//Exercise 4
//Using array.proto.filter create a function that will filter out all the values of the array that are less than twenty
var values = [1, 60, 34, 30, 20, 5]
function filterLessThan20(array){
    return array.filter(value => value >= 20)
}
console.log(filterLessThan20(values))

//exercise 5
//Using array.proto.reduce create calculate the sum and product of a given array.
var array = [1,2,3,4]
function calculateSum(array) {
    return array.reduce((sum, value) => sum + value, 0);
}

function calculateProduct(array) {
    return array.reduce((product, value) => product * value, 1);
}

console.log(calculateSum(array))
console.log(calculateProduct(array))

//Exercise 6
//Using ES6 syntax for class and subclass using extends to create a Sedan subclass which derives 
//from Car Class. The parameters for the Car class is the model and year. The parameters for the 
//subclass is the model, year and balance.
class Car {
    constructor(model, year) {
        this.model = model;
        this.year = year;
    }

    details() {
        return `Model: ${this.model}, Year: ${this.year}`;
    }
}
class Sedan extends Car {
    constructor(model, year, balance) {
        super(model, year);
        this.balance = balance;
    }

    info() {
        //Use the super key word in the Sedan subclass to set the model and name in base Car constructor
        return `${super.details()}, Balance: $${this.balance}`;
    }
}

const car2 = new Car('Pontiac Firebird', 1976);
console.log(car2.details())
const sedan = new Sedan('Volvo SD', 2018, 30000)
console.log(sedan.info())