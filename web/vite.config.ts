import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

/** Для GitHub Pages: BASE_URL=/имя-репозитория/ (задаётся в CI) */
const base = process.env.BASE_URL ?? "/";

export default defineConfig({
  base,
  plugins: [react(), tailwindcss()],
});
