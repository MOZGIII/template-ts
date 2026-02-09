import { defineConfig } from "@rsbuild/core";
import { pluginReact } from "@rsbuild/plugin-react";
import { pluginSourceBuild } from "@rsbuild/plugin-source-build";

export default defineConfig({
  html: {
    title: "App",
  },
  plugins: [pluginReact(), pluginSourceBuild()],
});
