// AFAFAFAFAFAFAFAFAFAFAFAFAFAFAFAFAFAFAFAFAFAFAFAFAFAFAFAFAFAFAFAF
// 
// ARROW FUNCTION
// 
// AFAFAFAFAFAFAFAFAFAFAFAFAFAFAFAFAFAFAFAFAFAFAFAFAFAFAFAFAFAFAFAF
// First we need to understand THIS 
// 		THIS in JS != THIS in Java
/*

// 1. GLOBAL THIS (ie: window object)
console.log(this);
function foo(){
	console.log(this);  //logs the window object
}
foo();
//*/
/*

// 2. Objects
function Foo(){
	this.bar = function(){
		console.log(this);
	}
	return this;
}
new Foo().bar(); 	//logs a new Foo object
Foo().bar();		//logs the window object

//*/
/*

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

//*/
/*


// 4. EVAL, takes the local this
function Foo(){
	eval('console.log(this);');
}
new Foo();	//logs the object


//*/
/*

// PROBLEM with the current way. Closures explode!!!
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
        this.speak = speakMethod;
        this.speak();
    }
}
new Speaker().speakForSomeone(a.saySomething); //logs 'undefined'

// QUICK FIX: var me = this;


//*/
/*



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

//*/
/*


// You don't have to exploit Arrow Functions for their lexical THIS binding.
// It is fine to use them as a simpler syntax ontop of what you are already
// used to. 
let foo = () => console.log('bar');
foo();	//logs 'bar'


//SAME AS
let foo = function(){
    console.log('bar');
}
foo();

//*/
/*


let add = (x,y)=> x+y;
console.log(add(1,2));

//note, no curly braces are necessary
//note2, if you don't use curly braces, implicit return of expression
//note3, if you use curly braces, no implicit return of expression
let add = (x, y) => { return x + y};
//*/
///*

//COOL? NOT COOL?
let foo = () => console.log('bar');     //REQUIRED
let foo = x => console.log('bar');      //OPTIONAL
let foo = (x, y) => console.log('bar'); //REQUIRED

//*/










