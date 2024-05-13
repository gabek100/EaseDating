<script>
	import SignUp from '../components/SignUp.svelte';
	export let data;
	// import { user_store } from '../lib/stores.svelte';

	let username = '';
	let signed_in = false;
	$: console.log(signed_in);
	console.log(username);

	// let user_store_value;

	// user_store.subscribe((value) => {
	// 	user_store_value = value;
	// });

	// const loginClickHandler = async () => {
	// 	const fromEndpoint = await res.json();
	// 	session.set({ user: fromEndpoint.user });
	// };
</script>

{#if signed_in == false}
	<div class="container">
		<h1>Welcome to Ease: Where Love is Built</h1>
		<!-- <a href="/">Sign In</a> -->
		<SignUp bind:username bind:signed_in></SignUp>
	</div>
	<!-- {#each data.people as person}
		<div>{person.name}</div>
	{/each} -->
{:else}
	<div class="container">
		<h1>Love awaits {username}</h1>
		<a href="/swipe">Begin Swiping!</a>
	</div>
{/if}

<style>
	/* h1 {
		display: flex;
		width: 100%;
		justify-content: center;
		gap: 20px;
		color: purple;
	} */
	/* a {
		display: flex;
		width: 100%;
		justify-content: center;
		gap: 20px;
		color: purple;
	} */
	.container {
		justify-content: center;
		/* display: flex; */
		/* width: 100%; */
	}
</style>
