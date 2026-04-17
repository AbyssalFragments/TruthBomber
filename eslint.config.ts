/*
 * Copyright (c) 2026 Abyssal Fragments
 * SPDX-License-Identifier: MIT
 */

import js from "@eslint/js";
import unusedImports from "eslint-plugin-unused-imports";
import globals from "globals";
import tseslint from "typescript-eslint";
import header from "eslint-plugin-simple-header";
import { defineConfig } from "eslint/config";

export default defineConfig([
  tseslint.configs.recommended,

  {
    files: ["**/*.{js,mjs,cjs,ts,mts,cts}"],
    plugins: {
      js,
      "unused-imports": unusedImports,
      header: header,
    },
    extends: ["js/recommended"],
    languageOptions: {
      globals: {
        ...globals.node,
        ...globals.nodeBuiltin,
        ...globals.bunBuiltin,
      },
    },
    rules: {
      "header/header": [
        "error",
        {
          text: [
            "Copyright (c) 2026 Abyssal Fragments",
            "SPDX-License-Identifier: MIT",
          ],
        },
      ],
      "no-undef": "off",
      "@typescript-eslint/no-unused-vars": "off",
      "no-redeclare": "off",
      "@typescript-eslint/no-redeclare": "error",
      "no-unused-vars": "off",
      "unused-imports/no-unused-imports": "error",
      "unused-imports/no-unused-vars": [
        "warn",
        {
          vars: "all",
          varsIgnorePattern: "^_",
          args: "after-used",
          argsIgnorePattern: "^_",
        },
      ],
    },
  },
]);
