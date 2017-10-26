var x = 1;
while (x <= 10) {
	console.log(x);
	x++;
}


// Falsy values

// false
// undefined
// null
// 0
// NaN
// ("")
var fruittype = "Apples";

switch (fruittype) {
	 case 'Oranges':
    console.log('Oranges are $0.59 a pound.');
    break;
  case 'Apples':
    console.log('Apples are $0.32 a pound.');
    break;
  case 'Bananas':
    console.log('Bananas are $0.48 a pound.');
    break;
  case 'Cherries':
    console.log('Cherries are $3.00 a pound.');
    break;
  case 'Mangoes':
    console.log('Mangoes are $0.56 a pound.');
    break;
  case 'Papayas':
    console.log('Mangoes and papayas are $2.79 a pound.');
    break;
  default:
   console.log('Sorry, we are out of ' + fruittype + '.');
}

// throw statement

throw 'Error';
throw 42;
throw true;
throw {toString: function() { return "I'm an object!"; }};



function UserException(message) {
	this.message = message;
	this.name = 'UserException';
}

UserException.prototype.toString = function() {
	return this.name + ': "' + this.message + '"';
}

throw new UserException('Value too high');

function getMonthName(mo) {
	mo = mo  - 1;
	var months =  ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul',
                'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

    if(months[mo]) {
    	return months[mo];
    } else {
    	throw 'InvalidMonthNo';
    }
}

try {
	monthName = getMonthName(myMonth);
}
catch(e) {
	monthName = 'unknown';
	logMyErrors(e);
}


function f() {
	try {
		console.log(0);
		throw 'bogus';
	} catch(e) {
		console.log(1);
		throw true;
		console.log(2);
	} finally {
		console.log(3);
		return false;
		console.log(4);
	}
	console.log(5);
}
f();

function doSomethingErrorProne() {
	if (1 != 2) {
		throw (new Error('Error message'))
	} else {
		console.log('this will do something with the code error');
	}
}

try {
	doSomethingErrorProne();
} catch(e) {
	console.log(e.name);
	console.log(e.message);
}