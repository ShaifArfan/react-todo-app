import { defineConfig } from "vite";
import react from "@vitejs/plugin-react"; // todo Use Babel
// import react from "@vitejs/plugin-react-swc"; // todo Use SWC (Speedy Web Compiler)
import path from "path";

export default defineConfig({
	plugins: [
		react(),
	],
	resolve: {
		alias: {
			'@': path.resolve(__dirname, './src'),
		},
	},
	server: {
		port: 3000,
	}
});
