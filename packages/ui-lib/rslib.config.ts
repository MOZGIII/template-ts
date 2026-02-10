import { defineConfig } from "@rslib/core";
import { pluginReact } from "@rsbuild/plugin-react";
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
  plugins: [pluginReact(), pluginSourceBuild()],
});
