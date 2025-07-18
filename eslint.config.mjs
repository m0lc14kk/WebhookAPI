import js from "@eslint/js"
import json from "@eslint/json"
import globals from "globals"
import tseslint from "typescript-eslint"
import { defineConfig } from "eslint/config"

export default defineConfig([
    tseslint.configs.recommended,
    {
        ignores: ["dist", "node_modules", ".github", ".husky"],
    },
    {
        files: ["**/*.{js,mjs,cjs,ts}"],
        plugins: { js },
        languageOptions: {
            globals: globals.node,
        },
        rules: {
            "@typescript-eslint/no-unused-vars": [
                "error",
                {
                    argsIgnorePattern: "^_$",
                },
            ],
        },
        extends: ["js/recommended"],
    },
    {
        files: ["**/*.json"],
        plugins: { json },
        language: "json/json",
        extends: ["json/recommended"],
    },
    {
        files: ["**/*.jsonc"],
        plugins: { json },
        language: "json/jsonc",
        extends: ["json/recommended"],
    },
    {
        files: ["**/*.json5"],
        plugins: { json },
        language: "json/json5",
        extends: ["json/recommended"],
    },
])
