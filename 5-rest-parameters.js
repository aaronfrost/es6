// WHO KNOWS WHAT A SPLAT IS?
// WHO HAS EVER USED A SPLAT?

// WHAT ABOUT A VARARGS?

// You people already know what rest parameters are 

// Here is an example
function foo(...bar){
    console.log(bar.join(“ “));
}
foo('I', 'can', 'haz', 'teh', 'arguments'); // I can haz teh arguments




/* 
	WOW! We finally have something that will capture all arguments passed
	to the function, and not just the declared ones! I wish we had something
	like this a long time ago. 

	No one thought this. We have always had the arguments object

*/

function foo(){
    var output = “”;
    for(var i = 0; i < arguments.length; output+=arguments[i++]){}
    console.log(output);
}
foo('I', 'can', 'haz', 'teh', 'arguments'); // I can haz teh arguments

/*
	Still works. Just takes more code. Why? The arguments object isn't an actual 
	Array. It is more of a pseudo array, with indexes and a length, but no 
	additional array-ish love to share with you. 

	Rest Parameters are fully qualified arrays, and you can do all-things-arrayish 
	to them. Go ahead and try it. 
*/


/*HERE ARE THE RULES FOR WORKING WITH REST PARAMS*/



/*Once Per Function Signature*/
function lotsOArgs(...first, ...second){
    console.log(“FIRST: “+first.join(“ “));
    console.log(“SECOND: “+second.join(“ “));
}
lotsOArgs(“where”,”does”,”first”,”stop”,”and”,”second”,”begin”); 
            // SyntaxError: Multiple Rest Params Defined

/*DOES ANYONE KNOW WHY THIS IS DISALLOWED?*/            


/*Must be the last formal parameter*/            
function foo(...bar, biz){
    // your code
}
foo(1, 2, 3, 4);
// SyntaxError: Rest Param must be the last declared parameter 










/*No 'arguments' object when using rest parameters*/
