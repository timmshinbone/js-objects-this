'use strict'

const user = {
	name: 'Christopher Robin',
	email: 'sei@christopherRobin.com',
	runs: [
		{
			date: '2017-05-25 15:00',
			distance: 1200,
			timeTaken: 600,
		},
		{
			date: '2017-05-25 15:00',
			distance: 1400,
			timeTaken: 800,
		},
	],
	overallDistance: 0,
	totalDistance: function () {
		// console.log('this is this: \n', this)
		// track distance
		// look at the runs property
		// gather the distances listed in the array(runs)
		// determine some starting point aka an accumulator
		// let result = 0
		// loop over the runs and calculate the total distance, aka add each distance to my result
		for (let i = 0; i < this.runs.length; i++) {
			this.overallDistance += this.runs[i].distance
		}
		// once done with the loop, we return the accumulator
		return this.overallDistance
	},
	longestRunDistance: function () {},
	averageSpeed: function () {},
}

console.log('this is the user \n', user)
console.log('this is the users total distance: \n', user.totalDistance())
console.log('this is user after running totalDistance function: \n', user)

module.exports = user
