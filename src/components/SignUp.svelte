<script>
	export let username;
	export let signed_in;
	// export let users;
	// import { user_store } from '../lib/stores.svelte';
	// export function id_exists() {}

	function handleSubmit(data) {
		signed_in = !signed_in;
		// username = data.email;
		// console.log(id_exists(username));
		// user_store.set(data.email);
		console.log(data.text);
	}
</script>

<form on:submit={handleSubmit}>
	<label for="email">Email:</label>
	<input type="text" id="email" bind:value={username} />
	<label for="password">Password:</label>
	<input type="text" id="password" />
	<!-- Got rid of binding thing! Only on submit -->
	<!-- <input type="text" id="password" bind:value={signed_in} />  -->
	<button type="submit">Submit</button>
</form>

<style>
</style>
