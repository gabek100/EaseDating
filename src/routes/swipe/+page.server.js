import * as db from '$lib/server/database.js';

export function load() {
	return {
		person: db.people[db.num_seen_today],
		num_seen_today: db.num_seen_today,
		max_swipes: db.max_swipes
	};
}

export const actions = {
	like: async ({ cookies, request }) => {
		const data = await request.formData();
		db.like();
	},

	dislike: async ({ cookies, request }) => {
		const data = await request.formData();
		db.dislike();
	}
};
