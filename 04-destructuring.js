/*
// Destructuring = PULLING THINGS APART

// Destructuring An Object 
var person = { name: 'Aaron', age: 34 };

//The Old Way

var name = person.name,
    age = person.age;

//The New Way

let {name, age} = person;














//*/
/*
//Destructuring An Array
var array = [1, 100];

//The Old Way
var a = array[0],
    b = array[1];

//The New Way
let [a, b] = array;










//*/
/*
//Deeper into an Object

var person = { 
    name: 'Aaron',
    age: 34,
    address: {
        street: '123 Main Street',
        city: 'Salt Lake City',
        state: 'UT',
        zip: '84115'
    }
};
let {name, age, address: {zip}} = person;
console.log(name, age, zip);










//*/
/*
//Alias the var names

var person = { 
    name: 'Aaron',
    age: 34,
    address: {
        street: '123 Main Street',
        city: 'Salt Lake City',
        state: 'UT',
        zip: '84115'
    }
};
let {name, age, address: {zip: wizbang}} = person;
console.log(name, age, wizbang);










//*/
/*
//Deeper into an Array
var array = [1, 2, 3, 4, [-1, -2, -3]];

//
let [first, second, , , [ , , nth]] = array;
console.log(first, second, nth);










//*/
/*
//Destructuring Pattern Matching
let person = { name: 'Aaron', age: 34};

//Missing Target Properties
let {name, age, address: {zip}} = person;

//Should throw an error for address and zip? 
//Since they don't exist?

//Proposed Solution
let {name, age, ?address: {zip}} = person;
let {name, age, address = undefined: {zip=undefined}} = person;

//NOT FINALIZED, as of a few months ago









//*/
/*
//COOL THINGS TO DO WITH DESTRUCTURING

//Swap Variables
var [b, a] = [a, b];

//Destructure in the function signature
function displayPerson({name, age, address}){
    print(name);
    print(age);
    print(address);
}
displayPerson(person);


//Destructure a String
var [a, b, c, d] = 'HELLO RWX 2013!';


//*/



















