// NOTE : the name "cb" across this file means a "callback function"

class MyArray {
	constructor(array) {
		this.arrayInternal = array;
	}

	map(cb) {
		let newArray = [];
		for (let elem of this.arrayInternal) {
			newArray.push(cb(elem));
		}
		return newArray;
	}

	filter(cb) {
		let newArray = [];
		for (let elem of this.arrayInternal) {
			if (cb(elem)) {
				newArray.push(elem);
			}
		}
		return newArray;
	}

	reduce(cb, initVal) {
		let prevVal = initVal;
		for (let elem of this.arrayInternal) {
			prevVal = cb(prevVal, elem);
		}
		return prevVal;
	}

	forEach(cb) {
		for (let elem of this.arrayInternal) {
			cb(elem);
		}
	}
}

const myArr = new MyArray([10, 20, 30]);
console.log(
	"Map test ->",
	myArr.map((e) => e * 2)
);

console.log(
	"Filter test ->",
	myArr.filter((x) => x >= 20)
);

console.log(
	"Reduce test ->",
	myArr.reduce((prev, cur) => prev + cur, 1)
);

let something = [];

console.log("ForEach test ->");

myArr.forEach(function (elem) {
	if (something != null) {
		something.push(elem);
		console.log(elem);
	} else {
		console.log("Elem");
	}
});

console.log(something);
