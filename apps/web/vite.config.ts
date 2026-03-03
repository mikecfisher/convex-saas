import { defineConfig } from "vite";
import viteReact from "@vitejs/plugin-react";
import { TanStackRouterVite } from "@tanstack/router-plugin/vite";
import path from "path";

export default defineConfig({
  plugins: [
    TanStackRouterVite({
      routesDirectory: "./src/routes",
      generatedRouteTree: "./src/routeTree.gen.ts",
    }),
    viteReact(),
  ],
  resolve: {
    alias: {
      "~": path.resolve(__dirname, "../.."),
      "@": path.resolve(__dirname, "./src"),
      "@cvx": path.resolve(__dirname, "../../packages/backend/convex"),
      "@backend": path.resolve(__dirname, "../../packages/backend"),
    },
  },
});
