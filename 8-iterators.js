var iobj = {
    name:"LDS Sort 2012",
    location:"UofU",
    sessions:[
        "JS.Next: ES6",
        "Backbone.js",
        "IE: The amazingness you never knew!",
        "Punching yourself in the face with Marklogic"
    ]
};
var it = Iterator(iobj)
console.log(it.next());
console.log(it.next());
console.log(it.next());

/*
	Simple way to interate over something that evenly an interate. 
*/

/*
	Use an iterators with for-in loops
*/
var it = Iterator(iobj);
for (var pair in it)
  print(pair); 