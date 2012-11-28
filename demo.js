// AFAFAFAFAFAFAFAFAFAFAFAFAFAFAFAFAFAFAFAFAFAFAFAFAFAFAFAFAFAFAFAF
// 
// ARROW FUNCTION
// 
// AFAFAFAFAFAFAFAFAFAFAFAFAFAFAFAFAFAFAFAFAFAFAFAFAFAFAFAFAFAFAFAF
// First we need to understand THIS 
// 		THIS in JS != THIS in Java


// 1. GLOBAL THIS (ie: window object)
console.log(this);
function foo(){
	console.log(this);  //logs the window object
}
foo();

// 2. Objects
function Foo(){
	this.bar = function(){
		console.log(this);
	}
	return this;
}
new Foo().bar(); 	//logs a new Foo object
Foo().bar();		//logs the window object

// 3. Call and Apply
function foo(){
	console.log(this);
}
foo();			//logs the window
foo.apply({});	//logs the object

// another example
window.name = "GLOBAL";
var obj = {
	name : "Aaron"
};
function foo(){
	console.log(this.name);
}
foo();
foo.call(obj);

// 4. EVAL, takes the local this
function Foo(){
	eval('console.log(this);');
}
new Foo();	//logs the object

// Problem with the current way. Closures explode!!!
function Aaron(){
    this.favoriteSaying = "I love Google!";
    this.saySomething = function(){
        console.log(this.favoriteSaying);
    }
}
var a = new Aaron();
a.saySomething();     //logs "I love Google!"

function Speaker(){
    this.speakForSomeone = function(speakMethod){
        speakMethod();
    }
}
new Speaker().speakForSomeone(a.saySomething); //logs 'undefined'

// To fix this you say var me = this;

// Arrow Functions are a new THIS
// without having to explicitly state it, your Arrow Function binds to the parent THIS.
//
// Let's see the Aaron constructor with an Arrow Function
function Aaron(){
    this.favoriteSaying = "I love Google!";
    this.saySomething = () => {
    	console.log(this.favoriteSaying);
    }
}




// AFAFAFAFAFAFAFAFAFAFAFAFAFAFAFAFAFAFAFAFAFAFAFAFAFAFAFAFAFAFAFAF
// 
// FUNCTION toString()
// 
// AFAFAFAFAFAFAFAFAFAFAFAFAFAFAFAFAFAFAFAFAFAFAFAFAFAFAFAFAFAFAFAF
/*

	This is rather silly. If you call 'toString()' on a function object, 
	you can actually ge the function in a string. This has worked for a while, 
	but was never part of the official spec. However, it works differently
	than they ever wanted it to. So, rather than change how it works, they 
	changed the spec to match it. Kind of silly, but it is. It is like changing
	tests to match behavior. 

*/




// AFAFAFAFAFAFAFAFAFAFAFAFAFAFAFAFAFAFAFAFAFAFAFAFAFAFAFAFAFAFAFAF
// 
// SCOPING
// 		1. LET and CONST
// 		2. Block Statements
// 
// AFAFAFAFAFAFAFAFAFAFAFAFAFAFAFAFAFAFAFAFAFAFAFAFAFAFAFAFAFAFAFAF


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


// NOW WITH LET
// Let's try the same thing with LET
if(true){
    let b = 2;
}
console.log(b);
//fails, can't find b

// HERE IT FAILS, AS YOU WOULD EXPECT





