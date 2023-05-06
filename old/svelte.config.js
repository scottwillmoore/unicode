import staticAdapter from "@sveltejs/adapter-static";
import { vitePreprocess } from "@sveltejs/kit/vite";

export const sourcePath = "app";

const assetPath = "static";
const buildPath = "app";
const sveltePath = ".svelte";

const urlBasePath = process.env.BASE_PATH ?? "";
const urlOrigin = process.env.ORIGIN ?? "http://sveltekit-prerender";

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
		paths: {
			base: urlBasePath,
		},
		prerender: {
			origin: urlOrigin,
		},
	},
	preprocess: vitePreprocess(),
};
