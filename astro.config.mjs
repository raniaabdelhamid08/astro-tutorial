import { defineConfig } from "astro/config";

import preact from "@astrojs/preact";

export default defineConfig({
  site: "https://unique-macaron-6289d6.netlify.app",
  integrations: [preact()]
});