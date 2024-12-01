import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import eslint from "vite-plugin-eslint";

export default defineConfig({
  plugins: [react(), eslint()],
  optimizeDeps: {
    include: ["date-fns"], // Keep this if you're using date-fns directly
  },
});
