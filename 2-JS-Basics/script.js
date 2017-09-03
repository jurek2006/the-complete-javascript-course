const born1 = [1965, 2008, 1992];
const born2 = [1923, 2011, 2000, 1999];

function printFullAge(born){
	const fullAge = new Array();
	for(let i = 0; i < born.length; i++){
		fullAge.push(2017 - born[i] >= 18 ? true : false );
	}
	return fullAge;
}

let fullAge1 = printFullAge(born1);
let fullAge2 = printFullAge(born2);

console.log(fullAge1);
console.log(fullAge2);