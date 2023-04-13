import { sveltekit } from "@sveltejs/kit/vite";

import { vitePath, vitestPath, sourcePath } from "./config.js";

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
