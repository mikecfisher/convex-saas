import { defineConfig } from "vite";
import viteReact from "@vitejs/plugin-react";
import { TanStackRouterVite } from "@tanstack/router-plugin/vite";
import path from "path";

export default defineConfig({
  root: path.resolve(__dirname, "apps/web"),
  plugins: [
    TanStackRouterVite({
      routesDirectory: "./apps/web/src/routes",
      generatedRouteTree: "./apps/web/src/routeTree.gen.ts",
    }),
    viteReact(),
  ],
  resolve: {
    alias: {
      "~": __dirname,
      "@": path.resolve(__dirname, "./apps/web/src"),
      "@cvx": path.resolve(__dirname, "./packages/backend/convex"),
      "@backend": path.resolve(__dirname, "./packages/backend"),
    },
  },
});
