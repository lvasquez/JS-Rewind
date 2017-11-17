
// Destructuring

var foo = ['one', 'two', 'three'];

// withouth Destructuring
var one = foo[0];
var two = foo[1];
var three = foo[2];

// with Destructuring
var [one, two, three] = foo;

var a1 = true && true;
var a2 = true && false;
var a3 = false && true;
var a4 = false && (3 == 4);
var a5 = 'Cat' && 'Dog';
var a6 = false && 'Cat';
var a7 = 'Cat' && false;

var o1 = true || true;
var o2 = false || true;
var o3 = true || false;
var o4 = false || (3 === 4);
var o5 = 'Cat' || 'Dog';
var o6 = false || 'Cat';
var o7 = 'Cat' || false;

var n1 = !true;
var n2 = !false;
var n3 = !'Cat';

var mystring = 'alpha';
mystring += 'bet';

console.log(mystring);

// conditional (ternary) operator

var status = (age => 18) ? 'adult' : 'minor';

// comma operator

var x = [0,1,2,3,4,5,6,7,8,9];
var a = [x,x,x,x,x];

for (var i = 0, j = 9; i < j; i++, j--)
	console.log('a['+ i + ']['+ j + ']= ' + a[i][j]);


// delete

var trees = ['redwood', 'bay', 'cedar', 'oak', 'maple'];
delete trees[3];
if (3 in trees) {

}

// typeof

var myFun = new Function('5 + 2');
var shape = 'round';
var size = 1;
var foo = ['Apple', 'Mango', 'Orange'];
var today = new Date();

typeof myFun;
typeof shape;
typeof size;
typeof foo;
typeof today;
typeof doesntExist;

// in

var trees1 = ['redwood', 'bay', 'cedar', 'oak', 'mapple'];
0 in trees1;
3 in trees1;
6 in trees1;
'bay' in trees1;

'lenght' in trees1;