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
  ssr: {
    noExternal: ["react-router-dom"],
  },
  build: {
    target: "esnext",
    minify: "esbuild",
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ["react", "react-dom"],
          router: ["react-router-dom"],
          icons: ["react-icons", "lucide-react"],
          ui: [
            "@radix-ui/react-separator",
            "@radix-ui/react-slot",
            "@radix-ui/react-tabs",
          ],
        },
      },
    },
    chunkSizeWarningLimit: 1000,
    // Production optimizations
    ...(mode === "production" && {
      cssCodeSplit: true,
      sourcemap: false,
      reportCompressedSize: false,
    }),
  },
  optimizeDeps: {
    include: ["react", "react-dom", "react-router-dom"],
  },
  server: {
    hmr: true,
  },
  // Performance optimizations
  esbuild: {
    drop: mode === "production" ? ["console", "debugger"] : [],
  },
}));
