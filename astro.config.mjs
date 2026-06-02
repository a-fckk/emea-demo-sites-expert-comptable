import { fileURLToPath } from "node:url";
import { defineConfig } from "astro/config";

const shim = (name) => fileURLToPath(new URL(`./src/shims/${name}.js`, import.meta.url));

export default defineConfig({
  output: "static",
  devToolbar: {
    enabled: false
  },
  vite: {
    cacheDir: ".vite-batch-cache",
    resolve: {
      extensions: [".mjs", ".js", ".mts", ".ts", ".jsx", ".tsx", ".json"],
      alias: {
        "aria-query": shim("aria-query"),
        "axobject-query": shim("axobject-query")
      }
    },
    optimizeDeps: {
      exclude: ["aria-query", "axobject-query"]
    }
  }
});
