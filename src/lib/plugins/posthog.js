/**
 * Module dependencies.
 */
import posthog from 'posthog-js';

/**
 * Plugin Setup
 */
export default {
  install(app) {
    console.log(app.config.globalProperties.config.analytics.posthog);
    if (
      app.config.globalProperties.config.analytics.posthog &&
      app.config.globalProperties.config.analytics.posthog.key &&
      app.config.globalProperties.config.analytics.posthog.host
    ) {
      console.log('posthog init');
      app.config.globalProperties.$posthog = posthog.init(app.config.globalProperties.config.analytics.posthog.key, {
        api_host: app.config.globalProperties.config.analytics.posthog.key,
      });
    }
  },
};
