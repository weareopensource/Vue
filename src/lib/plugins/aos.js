/**
 * Module dependencies.
 */
import AOS from 'aos';
import 'aos/dist/aos.css'; // If ypu need load compiled AOS css here in plugin

/**
 * Plugin Setup
 */
export default {
  install: (app) => {
    app.mixin({
      updated() {
        this.$nextTick(() => {
          AOS.refreshHard(); // This is needed to avoid the un-animate aos effect
        });
      },
    });
  },
};
