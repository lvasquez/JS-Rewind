
// variables

// var local can global variables
var a;
a = 'Hello a';

var b = 'Hello b';

//  let can block-scope local variable
let c;
c = 'Hello c'

let d = 'Hello d';

// variable scope

if (true) {
	var x = 5;
}
console.log(x); // 5

if (true) {
	let y = 5;
	console.log(y); // 5 (inside on the block statement)
}
//console.log(y); // ReferenceError: y is not defined


// variable hoisting

var myvar = 'my value';

(function() {
	console.log(myvar);
	var myvar = 'local value';
})();

// function hoisting

foo();
function foo() {
	console.log('bar');
}


//baz();
var baz = function() {
	console.log('bar2');
};

// constants

const MY_OBJECT = {'key': 'value'};
MY_OBJECT.key = 'otherValue';


// arrays

var myArray = [];
if(!myArray[0]) myFunction();

function myFunction() {
	console.log('Hello Function');
}

var coffees = ['French Roast', 'Colombian', 'Kona'];

var n = null;
console.log(n * 32);

// Objects literals

var sales = 'Toyota';

function carTypes(name) {
	if (name === 'Honda') {
		return name;
	} else {
		return "Sorry, we don't sell " + name + ".";
	}
}

var car = { myCar: 'Saturn', getCar: carTypes('Honda'), special: sales };

console.log(car.myCar);
console.log(car.getCar);
console.log(car.special);

var car2 = { manyCars: { a: 'Saab', 'b' : 'Jeep' }, 7: 'Mazda' };

console.log(car2.manyCars.b);
console.log(car2[7]);

// Enhanced Object literals
/*
var obj = {
	
	_proto_: theProtoObj,

	handler,

	toString() {
		return 'd' + super.toString();
	},

	['prop_' + (() => 42)() ] : 42
};
*/
// RegExp literals

var re = /ab+c/;

var quote = "He read \"The Cremation of Sam McGee\" by R.W. Service.";
console.log(quote);

var str = 'this string \
is broken \
across multiple \
lines.'
console.log(str);   // this string is broken across multiplelines.


var poem = 
'Roses are red,\n\
Violets are blue.\n\
Sugar is sweet,\n\
and so is foo.'
console.log(poem);

//ECMAScript 2015 template literals

var poem = 
`Roses are red, 
Violets are blue. 
Sugar is sweet, 
and so is foo.`
console.log(poem);