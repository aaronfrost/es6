function returnTwo(a,b){
	return [b,a];
}
/*WHAT IS THIS GOING TO DO?*/


/*Now let's call it with some arguments*/
var a = [1, 2, 3];
var b = returnTwo(a[0], a[1]);  // [2, 1]
var c = returnTwo(...a);        // [2, 1]
/*
	On this last call, it actually passed all three items from the array, but the 
	function only used those arguments that it needed
*/
returnTo(1,2,3) == returnTwo(...a); //true





/*
	We can also used spread args to spread an array out, as we combine arrays. Consider:
*/
var a = [1, 2, 3};
var b = ["a", "b", "c"];
var c = [ ...a, ...b ];    // [1, 2, 3, "a", "b", "c"];

/*
	We pulled them apart, and then immediately put them into a new array
*/

[ ...a, ...b ] == a.concat(b); //true












/*
	Any function that return an array can be decorated with the '...'
*/
function a(){
    return [1,2,3];
}
var b = [0, ...a()];
console.log(b);    // [0, 1, 2, 3]


