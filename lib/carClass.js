'use strict'
// when we create a class, we always capitalize the name
// class Rectangle {
//     // classes also use a constructor, which is a special object building function
// 	constructor(height, width) {
// 		this.height = height
// 		this.width = width
// 	}
// }

// a class is a function whose purpose is to create an object
// the way we use that class to do this is like so
// const square = new Rectangle(4, 4)
// const notSquare = new Rectangle(4, 8)

// console.log('this is Rectangle class', Rectangle)
// console.log('this is square ', square)
// console.log('this is notSquare', notSquare)

class Car {
    constructor(make, model, year, color) {
        this.make = make,
        this.model = model,
        this.year = year,
        this.color = color,
        this.mileage = 0,
        this.condition = 'new',
        this.addMileage = function () {
		    this.mileage += 50
	    }
    }
}

const myCar = new Car('Honda', 'CR-V', 2002, 'white')
const myDreamCar = new Car('Bentley', 'a nice one', 2022, 'hot pink')

console.log('this is my car: \n', myCar)
console.log('this is my dream car: \n', myDreamCar)

myCar.addMileage()

const makeMilesAccurate = (vehicle) => {
    while (vehicle.mileage < 200000) {
        vehicle.addMileage()
    }
    if (vehicle.mileage > 300) {
        vehicle.condition = 'used'
    }
}

makeMilesAccurate(myCar)

console.log('this is my car, accurately: \n', myCar)
// console.log('this is my car: \n', myCar)
// console.log('this is my dream car: \n', myDreamCar)

// const anotherCar = new Car('ford', 'mustang', 1991, 'blue', 500, 'used')
// console.log('this is another car: \n', anotherCar)