import { sveltekit } from "@sveltejs/kit/vite";

import { sourcePath } from "./svelte.config";

const vitePath = ".vite";
const vitestPath = ".vitest";

/** @type {import("vite").UserConfig} */
export default {
	cacheDir: vitePath,
	plugins: [sveltekit()],
	test: {
		cache: {
			dir: vitestPath,
		},
		include: [`${sourcePath}/**/*.test.{js,ts}`],
	},
};
