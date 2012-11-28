var name = "Freddie Mercury",
    msg = `Hello, ${name}!`;
    
console.log(msg);    // "Hello, Freddie Mercury!"

/*
	Here is a simple example.
*/





/*
	You can do a more advanced expression. Check the following:
*/
var total = 30,
    msg = `The total is ${total} (${total*1.05} with tax)`;
    
console.log(msg);       // "The total is 30 (31.5 with tax)"




/*

	Multi-line Strings

*/
var text = "First line\n\
			Second line";


/*
	
	Basic String Formatting

*/			
console.log("Hello %s", "world"); 
console.log("The count is %d", 5);    // "The count is 5"