var arrayTasks = {

	concat: function (arr1, arr2) {
		return arr1.concat(arr2);
	},

	insertAt: function (arr, itemToAdd, index) {
		const newArray =[];
		for (var i = 0; i < arr.length; i++) {
			if (i === index) {
				newArray.push(itemToAdd);
			}
			newArray.push(arr[i]);
		}
		return newArray;
	},

	square: function (arr) {
		return arr.map(x => x * x);
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

	findIndexesOf: function (arr, itemToFind) {
		const indexArray = [];
		for (var i = 0; i < arr.length; i++) {
			if (arr[i] === itemToFind) {
				indexArray.push(i);
			}
		}
		return indexArray;
	},

	sumOfAllEvenNumbersSquared: function (arr) {
		const evens = arr.filter(number => (number % 2 === 0));
		const squares = evens.map(number => (number * number));
		return this.sum(squares);
	}

}

module.exports = arrayTasks
