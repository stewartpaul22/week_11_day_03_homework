var arrayTasks = {

	concat: function (arr1, arr2) {
		return arr1.concat(arr2);
	},

	// insertAt: function (arr, itemToAdd, index) {

	// },

	square: function (arr) {
		const newArray = arr.map(x => x * x);
		return newArray;
	},

	sum: function (arr) {
		return arr.reduce(function(runningTotal, element){
			return runningTotal + element;
		}, 0);
	},

	// findDuplicates: function (arr) {
	// 	const newArray = [];
	// 	// for each element in array
	// 	return newArray;
	// },

	removeAndClone: function (arr, valueToRemove) {
		return arr.filter(value => value !== valueToRemove);
	},

	// findIndexesOf: function (arr, itemToFind) {

	// },

	// sumOfAllEvenNumbersSquared: function (arr) {

	// }

}

module.exports = arrayTasks
