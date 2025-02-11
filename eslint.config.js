// eslint.config.js
import { ESLint } from "eslint";

export default [
    new ESLint({
        baseConfig: {
            env: {
                browser: true,
                es2021: true,
                node: true
            },
            extends: [
                "eslint:recommended",
                "plugin:@typescript-eslint/recommended"
            ],
            parser: "@typescript-eslint/parser",
            parserOptions: {
                ecmaVersion: 12,
                sourceType: "module"
            },
            plugins: ["@typescript-eslint"],
            rules: {
                semi: ["error", "always"],
                quotes: ["error", "single"]
            }
        }
    })
];
