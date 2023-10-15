import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import compress from 'astro-compress';
import netlify from '@astrojs/netlify/functions';



// https://astro.build/config
export default defineConfig({
  integrations: [tailwind(), compress()],
  output: 'server',
  adapter: netlify(),
});
