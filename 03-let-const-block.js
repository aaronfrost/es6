// AFAFAFAFAFAFAFAFAFAFAFAFAFAFAFAFAFAFAFAFAFAFAFAFAFAFAFAFAFAFAFAF
// 
// SCOPING
// 		1. LET and CONST
// 		2. Block Statements
// 
// AFAFAFAFAFAFAFAFAFAFAFAFAFAFAFAFAFAFAFAFAFAFAFAFAFAFAFAFAFAFAFAF

/*
// First we need to talk about VARIABLE HOISTING


// WHAT WILL GET LOGGED HERE? 
// OR WILL AN ERROR THROW BECAUSE A IS OUT OF SCOPE AT TIME OF LOG?
if(true){
    var a = 1;
}
console.log(a);







// The above code gets re-written as such
var a2 = undefined;
if(true){
    a2 = 1;
}
console.log(a2);
// The variable declaration is 'hoisted' to the top of he scope, so inside
// the if statement, a2 is merely set, rather than being declared all together


//*/
/*


// NOW WITH LET
// Let's try the same thing with LET
if(true){
    let b = 2;
}
console.log(b);
//fails, can't find b

// HERE IT FAILS, AS YOU WOULD EXPECT

//*/
/*



// VARIABLE HOISING INSIDE A FUNCTION
var c = 1; 
function run(){
    console.log(c);
    var c = 0; 
    console.log(c);
}
run();
// any guesses













// The JIT Compiler re-writes the above code to:
var c2 = 1; 
function run2(){
    var c2 = undefined;
    console.log(c2); 	//logs 'undefined'
    c2 = 10; 
    console.log(c2);	//logs 10
}
run2();		











//*/
/*

// NOW LET'S USE LET
var c3 = 1; 
function run3(){
    console.log(c3); //logs or throws error?
    let c3 = 100; 
    console.log(c3);
}
run3();

//TEMPORAL DEAD ZONE







//*/
/*
// FUNCTION HOISTING
// There is two ways to write a function, but they will behave differently
console.log(test1());
console.log(test2());
function test1(){ //function definition
    return "test1";
}
var test2 = function(){ //function expression
    return "test2";
};






// GET REWRITTEN AS 
//Gets turned into 
function test1(){
    return "test1";
}
var test2 = undefined;
console.log(test1()); 
console.log(test2());

test2 = function(){ 
    return "test2";
};

// Notice that on our Function Expression, only the variable name was hoisted.
// test2 didn't get a value until it was assigned one. test1 was hoisted to the top
// with it's intial value. 


// LET will affect function expressions
// function expressions will have a temporal dead zone as well










//*/
/*


// LET EXPRESSIONS
// A one line let scope
let a = 1;
let(a = a+10)
    console.log(a);
console.log(a);
//*/
/*
// LET STATEMENTS
// Same as LET EXPRESSIONS, but you wrap the body with braces, and it can for on for
// however long you want. 
var x = 10;
var y = 20;
let (x = x+1, y = y*2){ 
    console.log(x+y);
    x+=1, y/=2;    
    console.log(x+y);
    //more code
}
console.log(x+y);













//*/
/*
// LET WITH LOOPING
// We have need this for a long time

// How does a for loop work NOW?
for(var i = 0; i < 10; i++){
    console.log(i);
}
console.log(i); //instead of erroring, logs 10
// 'i' get's hoisted, so it sticks around for us

// Now, same thing with let
for(let j = 0; j < 10; j++){
    console.log(j);
}
console.log(j); //ERROR, because j is lexically trapped inside our for loop

// NO MORE SPILLING OUR COUNTERS!!!! SO COOL!














//*/
///*

// BLOCKED SCOPES
// Just create a lexical scope in the middle of no where. 
let a = 1;
let b = 10;
{
    let a = 100, b = 1000;
    console.log(a,b);
}
console.log(a, b);

// Above we created a block statement, which held two new vars, 'a' and 'b'
//*/



























