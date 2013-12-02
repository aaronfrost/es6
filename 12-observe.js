//WORKS IN CHROME, NOT FIREFOX

function observer(records) {
  console.log(records);
}
//Make an object that can be observed 
var observable = {};
//Register the observable with a handler
Object.observe(observable, observer);

//LATER, mod the observable and the handler will take place
observable.foo = 'bar';			//type: 'new'
observable.foo = 'bar again';	//type: 'updated'
observable.baz = 'biz'; 		//type: 'new'
delete observable.baz;			//type: 'deleted'

//Great Video by Rafael Weinstein
//https://www.youtube.com/watch?v=VO--VXFJnmE

//WAY FASTER THAN DIRTY CHECKING
//https://mail.mozilla.org/pipermail/es-discuss/2012-September/024978.html
