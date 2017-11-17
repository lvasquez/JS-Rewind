

function square(number) {
	return number * number;
}

console.log(square(5));

function myFunc(theObject) {
	theObject.make = 'Toyota';
	theObject.model = 'Yaris';
	theObject.year = 2000;
}

var mycar = {make: 'Honda', model:'Accord', year: 1998};
var x, y;

x = mycar;
console.log(x);

myFunc(mycar);
y = mycar;
console.log(y);

// Function expression

var square = function(number) { return number * number;};
var x1 =  square(4);
console.log(x1);

var factorial = function fac(n) { return n < 2 ? 1 : n * fac(n - 1); };
console.log(factorial(3));

function map(f, a) {
	var result = [],
	i;
	for (i = 0; i != a.length; i++)
		result[i] = f(a[i]);
	return result;
}


var numbers = [0,1,2,5,10];
var cube = numbers.map(function(x) {
	return x + x;
});
console.log(cube);

var myFunc;
var num = 0;
if(num === 0) {
	myFunc = function(theObject) {
		theObject.make = 'Toyota';
	}
}

// Calling functions

console.log(square2(10));

function square2(n) {return n * n;}

function factorial2(n) {
	if ((n === 0) || (n === 1))
		return 1;
	else
		return (n * factorial2(n - 1));
}

var a, b, c, d, e;
a = factorial2(1);
b = factorial2(2);
c = factorial2(3);
d = factorial2(4);
e = factorial2(5);

// Function scope

var num1 = 20,
	num2 = 3,
	name = 'Chamahk';

function multiply() {
	return num1 * num2;
}

multiply();

function getScore() {
	var num1 = 2,
		num2 = 3;

	function add() {
		return name + ' scored ' + (num1 + num2);
	} 

	return add();
}

getScore();

// Scope and the function stack

var foo = function bar() {

};


// Recursion

function loop(x) {
	if (x >= 10)
		return;

	loop(x + 1);
}
loop(0);

function addSquares(a, b) {
	function square(x) {
		return x * x;
	}
	return square(a) + square(b);
}

a1 = addSquares(2, 3);
b1 = addSquares(3, 4);
c1 = addSquares(4, 5); 

function outside(x) {
	function inside(y) {
		return x + y;
	}
	return inside;
}

fn_inside = outside(3);
result_r = fn_inside(5);

result_r1 = outside(3)(5);

// Multiply-nested functions

function A(x) {
	function B(y) {
		function C(z) {
			console.log(x + y + z);
		}
		C(3);
	}
	B(2);
}
A(1);

// Name conflicts

function outside() {
	var x = 5;
	function inside(x) {
		return x * 2;
	}
	return inside;
}

console.log(outside()(10));


var pet = function(name) {
	var getName = function() {
		return name;
	}
	return getName;
}
myPet = pet('Vivie');

myPet();


var createPet = function(name) {
	var sex;

	return {
		setName: function(newName) {
			name = newName;
		},

		getName: function() {
			return name;
		},

		getSex: function() {
			return sex;
		},

		setSex: function(newSex) {
			if (typeof newSex === 'string' && (newSex.toLowerCase() === 'male' || newSex.toLowerCase() === 'female'))
				sex = newSex;
		}
	}
}

var pet = createPet('Vivie');
pet.getName();

pet.setName('Luis');
pet.setSex('male');
pet.getSex();
pet.getName();

var getCode = (function() {
	var secureCode = '0]Eal(eh&2';

	return function() {
		return secureCode;
	};
});

getCode();

// Arguments object

function myConcat(separator) {
	var result = '';
	var i;

	for (i = 1; i < arguments.length; i++) {
		result += arguments[i] + separator;
	}
	return result;
}

myConcat(', ', 'red', 'orange', 'blue');


// Default parameters

function multiply(a, b) {
	b = typeof b !== 'undefined' ? b : 1;

	return a * b;
}

multiply(5);

function multiply2(a, b = 1) {
	return a * b;
}

multiply2(5);


// Rest parameters

function multiply3(multiplier, ...theArgs) {
	return theArgs.map(x => multiplier * x);
}

var arr = multiply3(2, 1, 2, 3);
console.log(arr);


// Shorter functions

var ar = [
		 'Hydrogen',
		 'Helium',
		 'Lithium',
		 'Beryllim'
	];

var ar2 = ar.map(function(s) { return s.length; });

console.log(ar2);

var ar3 = ar.map(s => s.length);

console.log(ar3);


// Lexical this

function Person() {
	var self = this;

	self.age = 0;

	setInternal(function growUp() {
		self.age++;
	}, 1000);
}

var p = new Person();