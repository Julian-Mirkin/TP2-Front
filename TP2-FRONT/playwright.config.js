import { defineConfig } from '@playwright/test';

import dotenv from 'dotenv';

dotenv.config({ path: '.env.local' });

export default defineConfig({
    testDir: './tests/playwright/',

  webServer: {
    command: 'npm run dev',
    port: 5173,
    reuseExistingServer: true,
  },
});