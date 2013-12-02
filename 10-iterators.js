var conference = {
    name:"RWX 2013",
    location:"Ft. Lauderdale",
    sessions:[
        "JS.Next: ES6",
        "TRIBUTE: To the greatest JS build in the world",
        "RWX Twilio/Heroku Survivor",
        "Glass Intro",
        "Chromeapps: The most native web apps ever."
    ]
};
var it = Iterator(conference);
console.log(it.next());
console.log(it.next());
console.log(it.next());

/*
	Simple way to interate over something 
    that evenly an interate. 
*/

/*
	Use an iterators with for-in loops
*/
var it = Iterator(conference);
for (var pair in it)
  print(pair); 