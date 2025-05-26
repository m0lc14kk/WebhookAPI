import { defineConfig } from "tsup"

export default defineConfig({
    entry: ["src/index.ts"],
    format: ["esm"],
    dts: true,
    outDir: "dist",
    splitting: false,
    minify: false,
    sourcemap: false,
    clean: true,
})
