// Setup file for Vitest
import { config } from '@vue/test-utils';

// Mock global config
config.global.mocks = {
  config: {
    app: {
      title: 'WAOS',
    },
  },
};

// Add any global test setup here
