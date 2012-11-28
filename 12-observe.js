function observer(records) {
  console.log(records);
}
 
// Tests
var o = {};
var o2 = {}
Object.observe(o, observer);
 
o.x = 1;
o2.x = 2; // doesn't notify

// Kind of a new Event Transmitting background