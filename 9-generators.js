function simpleGenerator(){
  yield "first";
  yield "second";
  yield "third";
  for (var i = 0; i < 3; i++)
    yield i;
}
 
var g = simpleGenerator();
print(g.next()); // prints "first"
print(g.next()); // prints "second"
print(g.next()); // prints "third"
print(g.next()); // prints 0
print(g.next()); // prints 1
print(g.next()); // prints 2
print(g.next()); // StopIteration is thrown

/*
	SIMPLE WAY TO CREATE ITERATORS
*/