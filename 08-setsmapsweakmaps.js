//Collections

//Sets        (Reference: http://www.nczonline.net/blog/2012/09/25/ecmascript-6-collections-part-1-sets/



var items = new Set();
items.add(5);
items.add("5");
items.add(5);     // oops, duplicate

console.log(items.size());   //what is the answer? 1, 2 or 3?


//duplicates. How many?


var items = new Set([1, 2, 3, 4, 5, 5, 5, 5]);
console.log(items.size());  //what is the answer?


//demo has
var items = new Set();
items.add(5);
items.add("5");

console.log(items.has(5));    // true
console.log(items.has(6));    // false

// demo delete
var items = new Set();
items.add(5);
items.add("5");

console.log(items.has(5));    // true

items.delete(5)

console.log(items.has(5));    // false


//====switch to nightly...
var items = new Set([1, 2, 3, 4, 5]);

for (let num of items) {
    console.log(num);
}

=============Maps=========
var pseudoMap = {}; //just a regular object


var key = 5;

for(i=0; i<10;i++){
    pseudoMap[i]=i;
}

if (!pseudoMap[5]) {
    pseudoMap[key] = 5;
}

key ="5"
//if (!map[key]) {
pseudoMap[key] = "8";
//}


console.log(pseudoMap[5]+" "+"truthy?"+typeof pseudoMap[5]);
console.log(pseudoMap["5"]+" "+"truthy?"+typeof pseudoMap["5"]);

//----  firefox, works by default; chrome://flags and enable "Experimental JavaScript Features"
var simpleMap = new Map();
// same as using map.items()
for(i=0;i<10;i++)   {
    simpleMap.set(i,i);
}
simpleMap.set("5",8);


for (var [name, value] of simpleMap) {
    console.log(typeof(name) +" "+name + " = " + value);
}

============================

    Weak Maps

var wm = WeakMap();
var obj = null;

(function () {
    obj = {test:"foo"};
    wm.set(obj, "1");
    console.log(wm.get(obj))
})();
obj={};
console.log(typeof(wm));
console.log(wm.get(obj));


When the above function finishes execution, obj is no longer reachable, so it can be garbage collected even though our WeakMap object is still reachable.

    WeakMap is still in memory and not collected, but the key-value pair referenced by obj is garbage collected.

http://whattheheadsaid.com/2011/10/es6-a-quick-look-at-weak-maps
http://www.nczonline.net/blog/2012/11/06/ecmascript-6-collections-part-3-weakmaps/

https://developer.mozilla.org/en-US/docs/JavaScript/Reference/Global_Objects/WeakMap

