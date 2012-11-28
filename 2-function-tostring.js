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
function foo(){
	console.log("bar");
}
console.log(foo.toString()); //logs a string version of 'foo'