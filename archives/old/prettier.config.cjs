/** @type {import("prettier").Config} */
module.exports = {
	endOfLine: "auto",
	overrides: [
		{
			files: ".prettierrc",
			options: {
				parser: "json",
			},
		},
		{
			files: "*.svelte",
			options: {
				parser: "svelte",
			},
		},
	],
	printWidth: 100,
	useTabs: true,
};
