// export let users = [
// 	{ id: 'Joe Love', sex: 'Male', age: 27 },
// 	{ id: 'John Marks', sex: 'Male', age: 30 }
// ];

function id_exists(id_to_check) {
	for (let user_key in users) {
		if (users[user_key].id == id_to_check) {
			return true;
		}
	}
	return false;
}

export let max_swipes = 5;
export let num_seen_today = 0;

export let people = [
	{ name: 'Bonnie', age: 23, pic_num: 0, occupation: 'UI Designer' },
	{ name: 'Janet', age: 26, pic_num: 1, occupation: 'UX Designer' },
	{ name: 'Haily', age: 28, pic_num: 2, occupation: 'Product Designer' },
	{ name: 'Nicole', age: 23, pic_num: 3, occupation: 'Web Designer' },
	{ name: 'Marg', age: 25, pic_num: 4, occupation: 'Software Engineer' },
	{ name: 'Louis', age: 27, pic_num: 5, occupation: 'Systems Designer' },
	{ name: 'Maggie', age: 24, pic_num: 6, occupation: 'Interior Designer' }
];

let liked = [];
let disliked = [];

export function like(person) {
	if (num_seen_today < max_swipes) {
		liked.push(person);
		num_seen_today = num_seen_today + 1;
	} else {
		// alert('Already swiped on too many people today');
		return 'max swipes of ' + max_swipes + ' reached';
	}
}

export function dislike(person) {
	if (num_seen_today < max_swipes) {
		disliked.push(person);
		num_seen_today = num_seen_today + 1;
	} else {
		// alert('Already swiped on too many people today');
		return 'max swipes of ' + max_swipes + ' reached';
	}
}

export function find_new_person() {
	for (var x = 0; x < people.length; x++) {
		if (
			liked.find((person) => person == people[x]) != null &&
			disliked.find((person) => person == people[x]) != null
		) {
			num_seen_today = num_seen_today + 1;
			return people[x];
		} else {
			return null;
		}
	}
}
