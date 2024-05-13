// import { posts } from '../lib/server/database.js';
import * as db from '$lib/server/database.js';

export function load() {
	return {
		people: db.people
	};
}
