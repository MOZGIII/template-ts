import { defineConfig } from "@rstest/core";
import { withRslibConfig } from "@rstest/adapter-rslib";

export default defineConfig({
  extends: withRslibConfig(),
  testEnvironment: "happy-dom",
  setupFiles: ["./tests/rstest.setup.ts"],
});
