import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  root: "my-react-app",
  build: {
    outDir: "../dist",
  },
  server: {
    port: 3000,
    open: true,
  },
});