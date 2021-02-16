function addTwoToEveryNumberInTheList(list) {
	const newList = list.map((list) => list + 2);
	return newList;
}

function findLargestNumber(list) {
	const largest = Math.max(...list);
	return largest;
}

function makeDogObject() {
	return {
		speak() {
			return 'woof';
		},
		name: 'Fido',
		color: 'white',
		age: 6,
	};
}

function getListOfNames(list) {
	const names = list.map(({ name }) => name);
	return names;
}

function getAverageAge(list) {
	const sum = list.reduce((a, b) => a + b.age, 0);
	return sum / list.length;
}

function getAllEngineers(list) {
	const engineers = list
		.filter(({ jobTitle }) => jobTitle.includes('Engineer'))
		.map(({ name }) => name);
	return engineers;
}

function sort(list) {
	const sortedList = list.sort((a, b) => a - b);
	return sortedList;
}
