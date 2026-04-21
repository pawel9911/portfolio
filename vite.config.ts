import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tsconfigPaths from "vite-tsconfig-paths";

export default defineConfig(({ mode }) => {
  return {
    plugins: [react(), tsconfigPaths()],
    base: mode === "production" ? "/portfolio/" : "/",
    server: {
      port: 4300,
      host: "localhost",
    },
  };
});
