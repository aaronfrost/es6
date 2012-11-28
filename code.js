/*
    @author: Aaron Frost
    @reason: LDSSORT 2012: JS.Next: ES6
    @version: 1
*/

/*
//####################################
//  1.1
//####################################  
//PART1
if(true){
    var a = 1;
}
console.log(a);
//doesn't fail, logs 1

//PART2
//Code gets rewritten as
var a2 = undefined;
if(true){
    a2 = 1;
}
console.log(a2);

//PART3
//Now with Let
if(true){
    let b = 2;
}
console.log(b);
//fails, can't find b

//PART4
//Another hoisting example
console.log(a3);
var a3 = 0; 
console.log(a3);
   
*/


/*
//####################################
//  1.2
//  like global hoisting, but inside a function
//####################################  
*/
/*
//PART1
var c = 1; 
function run(){
    console.log(c);
    var c = 0; 
    console.log(c);
}
run();

//PART2
var c2 = 1; 
function run2(){
    var c2 = undefined;
    console.log(c2);
    c2 = 10; 
    console.log(c2);
}
run2();

//PART3
var c3 = 1; //coule be LET, doesn't matter 
function run3(){
    console.log(c3);
    let c3 = 100; 
    console.log(c3);
}
run3();

//PART4
var c4 = 1; //could be LET, doesn't matter 
function run4(){
    console.log(c4);
    if(true){
        let c4 = 1000;
    }
    console.log(c4);
}
run4();
//logs the global instance twice 

*/

/*
//####################################
//  1.3
//  function hoisting
//  two ways to declare functions
//####################################  
*/  
/*
//PART1
console.log(test1());
console.log(test2());
function test1(){ //function expression
    return "test1";
}
var test2 = function(){ //function definition
    return "test2";
};

//PART2
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

//LET doesn't modify the function hoisting behaviour, only the variable hoisting
//but I showed it to finish the understanding of Var Hoisting
*/

/*
//####################################
//  2.1
//  LET Expressions
//####################################  
*/
/*
//PART1
var x = 10;
var y = 20;
let (x = x+1, y = y*2) 
    console.log(x+y);
console.log(x+y);

//PART2
var ooo = let (first = (2+2)/2, second = (2/2)+2 ) 
    first + second;
console.log(ooo);
//ooo has a value, and variables first and second don't exist
//in the current scope. they only existed long enough to perform the
//operation and then they got garbage collected. 
*/


/*
//####################################
//  3.1
//  LET Statements
//####################################  
*/
/*
//PART1
var x = 10;
var y = 20;
let (x = x+1, y = y*2){ 
    console.log(x+y);
    x+=1, y/=2;    
    console.log(x+y);
    //more code
}
console.log(x+y);

*/
//PART2  not working yet in FF, but will exist
//var ooo = let (first = (2+2)/2, second = (2/2)+2 ){ 
//    let test = first + second;
//    return test+1;
//}
//console.log(ooo);


/*
//####################################
//  4.1
//  LET with Looping
//####################################  
*/

/*
//PART1
for(var i = 0; i < 10; i++){
    console.log(i);
}
console.log(i);
//we know that i will get hoisting, so line four will log a 10
//This is not ideal. We don't want our loop counters to end up in our scope
for(let j = 0; j < 10; j++){
    console.log(j);
}
console.log(j); //ERROR, because j is lexically trapped inside our for loop


//PART2
let obj = {
    first: "Your First Name", 
    last:  "Your Last Name",
    middle:"Your Middle Name"
};
for(let k in obj){
    console.log(k);
}
console.log(k); //ERROR, because k is lexically trapped inside our for loop
//Logs the key names in the object obj
for each(let l in obj){
    console.log(l);
}
console.log(l); //ERROR, because l is lexically trapped inside our for each loop
//Logs the value for each key on object obj
*/

/*
//####################################
//  5.1
//  BLOCKED SCOPE BINDINGS
//####################################  
*/
/*
//PART1
let xvar = 10;
let yvar = 20;
{
    let xvar = 1, yvar = 2;
    console.log(xvar+yvar);
}
console.log(xvar+yvar);
//Created our own short term block.
//Didn't have to do a bogus if(true) in order to do it. We were able to create the short term scope
//and then have our bloody variables released for GC. Also, our namespace was kept clean because of it.
*/
/*
//####################################
//  6.1
//  Destructuring
//####################################  
*/
/*
//PART1
var externalObj = { //imagine this obj was given to us by some other library
    id: 1,
    name: "oneName",
    location: "oneLocation",
    width: 300,
    height: 400
};
//Here is how we deal with him without destructuring
function processExternalObj(xobj){
    var id = xobj.id, 
        width = xobj.width;
    //more code to manually destructure this incoming object.
    console.log("first",id, width);
}
function processExternalObj2(xobj){
    let {id,width} = xobj; //destructuring an Object
    console.log("second",id,width);
}
processExternalObj(externalObj);
processExternalObj2(externalObj);

//PART2
var externalArray = [ //imagine that this array is coming from some other lib
    "Aaron", //first
    "Frost", //last
    ["Martha","Joel"], //best friends array
    ["Javascript","Java","C#","KRL"] //fav languages array
];
function processExternalArray(arr){
    let [a,b,c,[d]] = arr;
    console.log(a,b,c,d);
}
processExternalArray(externalArray);
*/


/*
//####################################
//  7.1
//  Generators
//####################################  
*/

/*
//PART1
function nexty(){
    var cur = 0;
    while(true){
        yield cur++;
    }
}
var generator = nexty();
for(let i = 0; i < 5; i++){
    console.log(generator.next());
}
generator.next();
generator.next();
generator.next();
generator.next();
generator.next();
console.log(generator.next());

*/

/*
//####################################
//  8.1
//  Iterators
//####################################  
*/
/*
var iobj = {
    name:"Utah Code Camp",
    location:"Neumont",
    sessions:[
        "Future of Javascript",
        "Backbone.js",
        "IE: The amazingness you never knew!"
    ]
};
var it = Iterator(iobj);
//var it = Iterator(iobj,true); //just returns the keys, not the values
console.log(it.next());
it.next();
console.log(it.next());
*/

/*
//####################################
//  9.1
//  Traceur Compile
//  Let's see some of this awesomeness in Chrome using Traceur
//####################################  
*/

/*
//PART1 - CLASSES
class Fighter{
    var punchNoise_ = "POW",
        kickNoise_ = "WAM";
    setPunchNoise(value){
        this.punchNoise_ = value;
    }
    getPunchNoise(){
        return this.punchNoise_;    
    }
    setKickNoise(value){
        this.kickNoise_ = value;
    }
    getKickNoise(){
        return this.kickNoise_;    
    }
    punch(){
        console.log(this.punchNoise_);
        
    }
    kick(){
        console.log(this.kickNoise_);

    }
    attack(){
        this.punch();
        this.kick();
        this.punch();
    }
}

*/

/*
//####################################
//  9.2
//  Traceur Compile
//  Let's see some of this awesomeness in Chrome using Traceur
//####################################  
*/

/*
//PART1 - Traits
trait MuscleSize{
    getMuscleSize(){
        if(!this.muscleSize){
            this.muscleSize = 10;
        }
        return this.muscleSize;
    }
    workout(){
        var ms = this.getMuscleSize();
        this.muscleSize++;
    }
    flex(){
        console.log(this.getMuscleSize());
    }
}
*/

/*
//####################################
//  9.3
//  Traceur Compile
//  Let's see some of this awesomeness in Chrome using Traceur
//####################################  
*/

/* 
//PART1 - Default Parameters
//paste into traceur
function doAnAction(height = 200, numberOfTimes = 1){
    for(let i = 0; i < numberOfTimes; i++){
        console.log("I will jump "+height+" high");    
    }
}
doAnAction();
*/

/*
//####################################
//  9.4
//  Traceur Compile
//  Let's see some of this awesomeness in Chrome using Traceur
//####################################  
*/

/* 
//PART1 - Rest Args
//paste into traceur
function temp(...vars){
    var output = "";
    for(var i = 0; i < vars.length; i++){
        output+= vars[i].toString() + " - ";
    }
    console.log(output);
}
temp(1,2,3,4);
//DON'T LET ME FORGET TO EXPLAIN HOW THESE ARE BETTER THAN THE CURRENT arguments
*/
/*
//####################################
//  9.5
//  Traceur Compile
//  Let's see some of this awesomeness in Chrome using Traceur
//####################################  
*/

/* 
//PART1 - Spread Operator
//paste into traceur

function add(x,y){
    console.log(x+y);
}
var nums = [1,2,3];
add(nums[1],nums[2]);
add(...nums);


*/

//PART2 - Spread to combine 
/*
var a = [1];
var b = [2,3,4];
var c = [6,7];
var d = [0,...a,...b,5,...c];
console.log(d);
*/

/*
//####################################
//  9.6
//  Traceur Compile
//  Let's see some of this awesomeness in Chrome using Traceur
//####################################  

//To see this, replace "function " with before any function declaration, and it will still be a function
//Try it with the add function from 9.5
*/
























