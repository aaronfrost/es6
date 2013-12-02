//Collections

//==========================SETS==========================
//==========================SETS==========================
//==========================SETS==========================
//==========================SETS==========================
//(Reference: http://www.nczonline.net/blog/2012/09/25/ecmascript-6-collections-part-1-sets/

//NEW SET
var items = new Set();
items.add(5);
items.add("5");



//SIZE
console.log(items.size);   //what is the answer? 1, 2 or 3?





//DUPLICATES
var items = new Set([1, 2, 3, 4, 5, 5, 5, 5]);
console.log(items.size);  //what is the answer?





//HAS
var items = new Set();
items.add(5);
items.add("5");

console.log(items.has(5));    // true
console.log(items.has('5'));  // true
console.log(items.has(6));    // false





//DELETE
var items = new Set();
items.add(5);
items.delete(5)

console.log(items.has(5));    // false





//FOR-OF loop for iterators
var items = new Set([1, 2, 3, 4, 5]);

for (let num of items) { 
    console.log(num);
}





//EXAMPLE
//Instead of:
var properties = {
    width: 1, 
    height: 1
};
if(properties[propName]){
    //do something
}

//You can:
var properties = new Set();
properties.add('width');
properties.add('height');

if(properties.has(propName)){
    //do something
}











//==========================Maps==========================
//==========================Maps==========================
//==========================Maps==========================
//==========================Maps==========================

//OLD WAY
var map = {}; //POJO

//SOMEWHERE ELSE IN YOUR CODE
map[keyName] = 'someValue' || {} || [] || true;

//KEYS ARE ALWAYS CONVERTED TO STRINGS
//boolean
map[true] = 'foo';
map[true] == map['true'];   //TRUE
//object
map[{}] = 'bar';
map[{}] == map['[object Object]'];  //TRUE
//DOM Element
var body = document.getElementsByTagName('body')[0];
map[body] = 'baz';
map[body] == map['[object HTMLBodyElement]'];

//WE CAN'T USE KEYS THAT CAN'T toString PROPERLY








//MAPS CAN HAVE OBJECTS AS KEYS
var map = new Map();
map.set(true, 'foo');
map.set('true', 'bar');

//THESE ARE NOT THE SAME PROPERTY ANYMORE
map.get(true) != map.get('true');   //TRUE
console.log(map.get(true) + map.get('true'));





//METHODS
var map = new Map();
map.set('name', 'Aaron');


//HAS
console.log(map.has('name')); //TRUE

//GET
console.log(map.get('name')); //Aaron

//SIZE
console.log(map.size);        //1

//DELETE
map.delete('name');
console.log(map.size);        //0

//CLEAR
map.set('foo', 'bar');
map.set('biz', 'baz');
map.clear();
console.log(map.size);        //0

//FOREACH
map.set('band', 'Queen');
map.set('rank', 1);
map.set('lead', 'Freddy');
map.forEach(function(value, key){
    console.log(value, key);
});



//KEYS CAN BE OBJECTS

//ARRAY
var array = [1, 2, 3];
map.set(array, 'this the value for the array key');

//FUNCTION
function add(a, b){
    return a + b;
}
map.set(add, 'this is my add function');


//DOM ELEMENT
var body = document.body;
map.set(body, 'this is the document body');
map.get(document.body); 

//CAN YOU THINK OF ANYTHING ELSE?


//CAN YOU THINK OF ANY PROBLEMS WITH THIS?








//==========================WeakMaps==========================
//==========================WeakMaps==========================
//==========================WeakMaps==========================
//==========================WeakMaps==========================
    
var map = new WeakMap(),
    element = document.querySelector(".element");

map.set(element, "Original");

// later
var value = map.get(element);
console.log(value);             // "Original"

// later still - remove reference
element.parentNode.removeChild(element);
element = null;

value = map.get(element);
console.log(value);             // undefined


//http://whattheheadsaid.com/2011/10/es6-a-quick-look-at-weak-maps
//http://www.nczonline.net/blog/2012/11/06/ecmascript-6-collections-part-3-weakmaps/
//https://developer.mozilla.org/en-US/docs/JavaScript/Reference/Global_Objects/WeakMap

