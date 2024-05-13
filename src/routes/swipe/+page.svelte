<script>
	import { Card, Dropdown, DropdownItem, Avatar, Button } from 'flowbite-svelte';
	export let data;
	import pic0 from '../../lib/images/profile-pic-0.jpeg';
	import pic1 from '../../lib/images/profile-pic-1.jpeg';
	import pic2 from '../../lib/images/profile-pic-2.jpeg';
	import pic3 from '../../lib/images/profile-pic-3.jpeg';
	import pic4 from '../../lib/images/profile-pic-4.jpeg';
	import pic5 from '../../lib/images/profile-pic-5.jpeg';
	import pic6 from '../../lib/images/profile-pic-6.jpeg';

	let person = data.person;
	let pic_num = person.pic_num;
	// let pic_path = '../../../static/images/profile-pic-' + pic_num + '.jpeg';
	let num_seen_today = data.num_seen_today;
	let max_swipes = data.max_swipes;

	let pic;
	if (pic_num == 0) {
		pic = pic0;
	} else if (pic_num == 1) {
		pic = pic1;
	} else if (pic_num == 2) {
		pic = pic2;
	} else if (pic_num == 3) {
		pic = pic3;
	} else if (pic_num == 4) {
		pic = pic4;
	} else if (pic_num == 5) {
		pic = pic5;
	} else if (pic_num == 6) {
		pic = pic6;
	}
</script>

<Card>
	Number of swipes used today: {num_seen_today}/{max_swipes}
	{#if num_seen_today == max_swipes}
		<div>No more swipes today!</div>
	{/if}
</Card>

<Card padding="md">
	<div class="flex flex-col items-center pb-4">
		<h5 class="mb-1 text-xl font-medium text-gray-900 dark:text-white">Name: {person.name}</h5>
		<h5 class="mb-1 text-xl font-medium text-gray-900 dark:text-white">Age: {person.age}</h5>
		<h5 class="mb-1 text-xl font-medium text-gray-900 dark:text-white">
			Occupation: {person.occupation}
		</h5>
		<Avatar size="lg" src={pic} alt="Picture of person {pic_num}" />
		<div>
			<form method="POST" action="?/like">
				<input type="hidden" name="like" value={person} />
				<button aria-label="Wish to Match">Wish to match</button>
			</form>
			<form method="POST" action="?/dislike">
				<input type="hidden" name="like" value={person} />
				<button aria-label="Wish to Match">Do not wish to match</button>
			</form>
		</div>
	</div>
</Card>
