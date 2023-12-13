import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import jsconfigPaths from "vite-jsconfig-paths";
import browserslistToEsbuild from "browserslist-to-esbuild";

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [
		react({
			jsxImportSource: "@emotion/react",
			babel: {
				plugins: ["@emotion/babel-plugin"],
			},
		}),
		jsconfigPaths()
	],
	server: {
		port: 3000
	},
	build: {
		target: browserslistToEsbuild([
			">0.2%",
			"not dead",
			"not op_mini all"
		]),
	}
});
