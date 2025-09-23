import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  base: "/", // avec domaine personnalisé, '/' c'est bien
  build: { outDir: "docs" },
});
