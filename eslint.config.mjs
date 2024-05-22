import globals from "globals";
import pluginJs from "@eslint/js";
import tseslint from "typescript-eslint";

export default [
  {
    languageOptions: { globals: globals.browser },
    ignores: [
      "build/**/*",     // ignore all contents in and under `build/` directory but not the `build/` directory itself
      "node_modules/**/*", // ignore all contents in and under `node_modules/`
      "dist/**/*",      // ignore all contents in and under `dist/`
      // Add any other files or directories you want to ignore
  ],
    rules: {
      "no-unused-vars": "error",
      "no-unused-expressions": "error",
      "prefer-const": "error",
      "no-undef": "error",
      "no-console": "warn",
    },
  },
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
];
