/*
 * Copyright (c) 2026 Abyssal Fragments
 * SPDX-License-Identifier: MIT
 */

import { defineConfig } from "eslint/config";
import { eslint, SharedLicense } from "@abyssalfragments/linter-config";

export default defineConfig({
  extends: eslint({
    license: {
      shared: SharedLicense.MIT,
    },
  }),
});
