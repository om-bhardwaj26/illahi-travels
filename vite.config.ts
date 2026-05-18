
import { cloudflare } from "@cloudflare/vite-plugin";
import { tanstackStart } from "@tanstack/react-start/plugin/vite";
import tailwindcss from "@tailwindcss/vite";
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";
import tsconfigPaths from "vite-tsconfig-paths";

// Redirect TanStack Start's bundled server entry to src/server.ts (our SSR error wrapper).
// @cloudflare/vite-plugin builds from this — wrangler.jsonc main alone is insufficient.
export default defineConfig(({ command }) => ({
  optimizeDeps: {
    exclude: [
      "@tanstack/react-start/server-entry",
      "@tanstack/start-server-core",
      "@tanstack/start-client-core",
      "@tanstack/start-plugin-core",
    ],
  },
  environments: {
    ssr: {
      optimizeDeps: {
        exclude: [
          "@tanstack/react-start/server-entry",
          "@tanstack/start-server-core",
          "@tanstack/start-client-core",
          "@tanstack/start-plugin-core",
        ],
      },
    },
  },
  server: { port: 5173 },
  plugins: [
    tanstackStart({ server: { entry: "server" } }),
    ...(command === "build"
      ? [cloudflare({ viteEnvironment: { name: "ssr" } })]
      : []),
    tailwindcss(),
    tsconfigPaths(),
    react(),
  ],
}));
