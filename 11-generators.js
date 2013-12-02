function simpleGenerator(){
  yield "first";
  yield "second";
  yield "third";
  for (var i = 0; i < 3; i++)
    yield i;
}
 
var g = simpleGenerator();
print(g.next().done); // prints "first"
print(g.next()); // prints "second"
print(g.next()); // prints "third"
print(g.next()); // prints 0
print(g.next()); // prints 1
print(g.next()); // prints 2
print(g.next()); // StopIteration is thrown

/*
	SIMPLE WAY TO CREATE ITERATORS
*/


function fib() {
  var i = 0, j = 1;
  while (true) {
    yield i;
    var t = i;
    i = j;
    j += t;
  }
}
function take(gen, nth){
	var num,
	g = gen();
	for(let i = 0; i < nth; i++){
		num = g.next();
	}
	return num;
}
console.log(  take(fib, 1)  );
