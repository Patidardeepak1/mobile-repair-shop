import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      // Leave analytics out unless you *really* want it external
      external: [],
    },
  },
});
