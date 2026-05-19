import tailwindcss from "@tailwindcss/vite";
import react from "@vitejs/plugin-react";
import path from "path";
import { defineConfig } from "vite";

// https://vite.dev/config/
export default defineConfig(({ mode }) => ({
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  build: {
    target: "esnext",
    rolldownOptions: {
      output: {
        codeSplitting: {
          groups: [
            {
              name: "vendor",
              test: /node_modules\/(react|react-dom)(\/|$)/,
            },
            {
              name: "router",
              test: /node_modules\/react-router/,
            },
            {
              name: "icons",
              test: /node_modules\/(react-icons|lucide-react)/,
            },
            {
              name: "ui",
              test: /node_modules\/@radix-ui\/(react-separator|react-slot|react-tabs)/,
            },
          ],
        },
        ...(mode === "production" && {
          minify: {
            compress: {
              dropConsole: true,
              dropDebugger: true,
            },
          },
        }),
      },
    },
    chunkSizeWarningLimit: 1000,
    ...(mode === "production" && {
      cssCodeSplit: true,
      sourcemap: false,
      reportCompressedSize: false,
    }),
  },
  optimizeDeps: {
    include: ["react", "react-dom", "react-router"],
  },
  server: {
    hmr: true,
  },
}));
