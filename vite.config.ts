import { defineConfig } from 'vitest/config';

export default defineConfig({
	root: './', // Ou le répertoire où tu as ton fichier index.html
	publicDir: 'public',
	test: {
		globals: true,
		environment: 'jsdom',
	},
});
