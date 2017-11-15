// for 

var step;
for (step = 0; step < 5; step++) {
	console.log(step + ' - ' + 'Walking east one step');
}

// do while

var i = 0;
do {
	i += 1;
	console.log(i);
} while (i < 5);

// while

var n = 0;
var x = 0;
while (n < 3) {
	n++;
	x += n;
}

// break

var z = 'Hello';
for (var j = 0; j < z.length; j++) {
	if (z[j] == 'e') {
		break;
	}
	
}


var x1 = 0;
var z1 = 0;
labelTest: while(true) {
	console.log('Outer loops:' + x1);
	x1 += 1;
	z1 = 1;
	while (true) {
		console.log('Inner loops:' + z1);
		z1 += 1;
		if (z1 === 10 && x1 === 10) {
			break labelTest;
		} else if (z1 === 10) {
			break;
		}
	}
};


var ia = 0;
var n1 = 0;
while (ia < 5) {
	ia++;
	console.log(ia);
	if (ia == 3) {
		continue;
	}
	n1 += ia;
	console.log('n value:' + n1);
}


// of and in

var arr = [3,4,5];
arr.foo = 'jello';

for (var i in arr) {
	console.log(i);
}

for (var j of arr) {
	console.log(j);
}
