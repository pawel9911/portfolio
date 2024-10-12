import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tsconfigPaths from "vite-tsconfig-paths";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), tsconfigPaths()],
  base: "/portfolio",
  server: {
    port: 4300,
    host: "localhost",
    open: "/portfolio/#/home",
  },
});
