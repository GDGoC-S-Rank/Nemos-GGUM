import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { vanillaExtractPlugin } from "@vanilla-extract/vite-plugin";
import tsconfigPaths from "vite-tsconfig-paths";
import svgr from "vite-plugin-svgr";

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    vanillaExtractPlugin(),
    tsconfigPaths(),
    react(),
    svgr({
      svgrOptions: {
        icon: true,
        jsxRuntime: "automatic",
      },
    }),
  ],
});
