import { defineConfig } from "@rstest/core";
import { withRsbuildConfig } from "@rstest/adapter-rsbuild";

export default defineConfig({
  extends: withRsbuildConfig(),
  testEnvironment: "happy-dom",
  setupFiles: ["./tests/rstest.setup.ts"],
});
