function addTwoToEveryNumberInTheList(list) {
	const newList = [];

	for (let i = 0; i < list.length; i++) {
		newList.push(list[i] + 2);
	}

	return newList;
}

function findLargestNumber(list) {
	let largest = list[0];

	for (let i = 0; i < list.length; i++) {
		if (list[i] > largest) {
			largest = list[i];
		}
	}

	return largest;
}

function makeDogObject() {
	return {
		name: 'Fido',
		color: 'white',
		age: 6,
		speak() {
			return 'woof';
		},
	};
}

function getListOfNames(list) {
	const names = [];

	for (let i = 0; i < list.length; i++) {
		names.push(list[i].name);
	}
	return names;
}

function getAverageAge(list) {
	let sum = 0;

	for (let i = 0; i < list.length; i++) {
		sum += list[i].age;
	}

	return sum / list.length;
}

function getAllEngineers(list) {
	// using the same list as above, return a list of all people who have the word "Engineer" in their jobTitle

	const names = [];

	for (let i = 0; i < list.length; i++) {
		if (list[i].jobTitle.includes('Engineer')) {
			names.push(list[i].name);
		}
	}

	return names;
}

function sort(list) {
	let swapped = true;

	while (swapped) {
		swapped = false;

		for (let i = 0; i < list.length; i++) {
			if (list[i] > list[i + 1]) {
				const temp = list[i];
				list[i] = list[i + 1];
				list[i + 1] = temp;
				swapped = true;
			}
		}
	}
	return list;
}
