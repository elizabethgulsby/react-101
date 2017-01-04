//create a class Triangle and create instances of the class + methods//

class Triangle {
	constructor(side1, side2, side3) {
		this.side1 = side1;
		this.side2 = side2;
		this.side3 = side3;
	}
	getPerimeter() {
		return this.side1 + this.side2 + this.side3;
	}
	getArea() {
		//Heron's formula
		var s = (this.side1 + this.side2 + this.side3)/2;
		var area = Math.sqrt(s * ((s - this.side1) * (s - this.side2) * (s - this.side3)));
		console.log(((s - this.side1) * (s - this.side2) * (s - this.side3)));
		return area;
	}
}

var triangle1 = new Triangle(14,15,16);
console.log(triangle1.getArea());

class Equilateral extends Triangle {
	constructor(side1) {
		super(side1, side1, side1);
		this.name = 'equilateral';
	}
}

var equilateral1 = new Equilateral(9);
console.log(equilateral1.getPerimeter());

//practice with map//


//ES6 method
var array = [1,2,3,4,5]
var myArray = array.map((x) =>{
	return x * 4;
})

// is equivalent to:
var myArray = array.map(function(x) {
	return x * 4;
})
console.log(myArray)
console.log(array)
//using foreach
array.forEach(function(value, key) {
	console.log(key + "=" + value);
})

//iterating over a string in ES6 (for, each, let)
let iterated = "racecar";
for (let value of iterated) {
	console.log(value);
}




