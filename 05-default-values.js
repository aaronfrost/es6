/*
// Here is a simple example of default parameters
function sayHello(name="World"){
    console.log("Hello "+name+"!");
}

sayHello();        //Hello World!
sayHello("Aaron"); //Hello Aaron!

// What if we pass 'undefined' as the name?
sayHello(undefined); //Hello World!







//*/
/*
// How did we used to make sure we had a default value?
function sayHello(name){
  var _name = name || 'World';
  console.log("Hello "+_name+"!");
}

// OR

function sayHello(name){
  var _name = name ? name : "World";
  console.log("Hello "+_name+"!");
}

// While these checked for 'undefined', they also check for falsy, which may be 
// something that you want/need to do. 





//*/
/*
// Rule, don't assign default value to a Rest parameters


// 1. Save me code
// 2. Code is easier to read
// 3. Improved predictabilty

// Historically we have 'data-proofed' our functions manually. Default Values helps 
// us as we strive to do this continually:
function foo(bar, baz){
    bar = bar ? bar : "some default";
    baz = baz ? baz : getSomeDefault();
    //rest of the code
}
// Like robots we have data-proofed our stuff manually. 










//*/
/*

// Consider the following
var a = 0; 
function inc(){ a++}
function test(b=inc()){ }
console.log("a = "+a); // a = 0

// You can have the default value be a method call, and that call would get 
// evaluated each time the default value is required. 

test(2);	//a still = 0, ie: no default value binding event fired
test(); 	//a is now = 1






//*/
/*

// In the function signature, you can declare a non-default 
// value param AFTER a default value param. I mention this because
// in other languages that have similar support this is disabled. 

// Default Values don't appear in the 'arguments' object
function foo(bar="baz"){
	console.log(arguments.length);
}
foo();	// logs '0', even though 'baz' was assigned to the 'bar' parameter, default Values
		// don't get included in the arguments object



//*/
/*

	I love default values, as they will allow me to write less boilerplate
	code, and I will acheive the same result.

*/