import staticAdapter from "@sveltejs/adapter-static";
import { vitePreprocess } from "@sveltejs/kit/vite";

import { buildPath, assetPath, sveltePath, sourcePath } from "./config.js";

/** @type {import('@sveltejs/kit').Config} */
export default {
	kit: {
		adapter: staticAdapter(),
		appDir: buildPath,
		files: {
			appTemplate: `${sourcePath}/app.html`,
			assets: assetPath,
			errorTemplate: `${sourcePath}/error.html`,
			hooks: {
				client: `${sourcePath}/hooks.client`,
				server: `${sourcePath}/hooks.server`,
			},
			lib: `${sourcePath}/lib`,
			params: `${sourcePath}/params`,
			routes: `${sourcePath}/routes`,
			serviceWorker: `${sourcePath}/service-worker`,
		},
		outDir: sveltePath,
	},
	preprocess: vitePreprocess(),
};
