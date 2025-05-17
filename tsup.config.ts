import { defineConfig } from 'tsup';

export default defineConfig({
    entry: ["src/index.ts"],
    format: ["esm"],
    dts: true,
    outDir: "dist",
    splitting: false,
    minify: true,
    sourcemap: true,
    clean: true
});
