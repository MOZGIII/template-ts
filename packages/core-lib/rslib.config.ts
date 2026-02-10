import { defineConfig } from "@rslib/core";
import { pluginSourceBuild } from "@rsbuild/plugin-source-build";

export default defineConfig({
  lib: [
    {
      dts: true,
      format: "esm",
    },
    {
      format: "cjs",
    },
  ],
  plugins: [pluginSourceBuild()],
});
