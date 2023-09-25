<template>
  <section>
    <div :style="{ width: '360px', height: '60px', display: isFixed ? 'block' : 'none' }" class="mt-10"></div>
    <div :class="['dynamicIsland', { fixed: isFixed, expand: animate, minimize: !animate }]" class="mt-10" :style="dynamicIslandStyle">
      <div :class="['content', { fadeIn: animate, fadeOut: !animate }]">
        <div class="d-flex justify-space-between font-weight-bold text-white">
          <span class="ml-4 mt-1 text-h6 font-weight-bold">{{ text }}</span>
          <span v-if="window && window.step !== null && window.steps !== null" class="mr-2">
            <v-btn
              v-if="window.step > 0"
              icon="fa-solid fa-chevron-left"
              color="primary"
              variant="flat"
              class="mx-1"
              :disabled="disabled"
              @click="click('-')"
              size="small"
            ></v-btn>
            <v-btn
              v-if="window.step < window.steps"
              icon="fa-solid fa-chevron-right"
              color="primary"
              variant="flat"
              class="mx-1"
              :disabled="disabled"
              @click="click('+')"
              size="small"
            ></v-btn>
          </span>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
/**
 * Export default
 */
export default {
  name: 'homeDynamicIslandComponent',
  data: () => ({
    isVisible: false,
    isFixed: false,
    animate: false,
    disabled: false,
  }),
  props: ['container', 'text', 'window', 'action'],
  computed: {
    dynamicIslandStyle() {
      return {
        background: `${this.config.vuetify.theme.appbar.background}${this.config.vuetify.theme.appbar.opacity}`,
        color: this.config.vuetify.theme.appbar.color,
        '-webkit-backdrop-filter': 'blur(8px)',
        'backdrop-filter': 'blur(8px)',
      };
    },
  },
  methods: {
    checkVisibility() {
      const container = this.container.$el.getBoundingClientRect();
      const button = this.$el.querySelector('.dynamicIsland').getBoundingClientRect();
      const scrollDownTriger = (window.innerHeight / 3) * 2;
      const offset = 30;
      // Apparition : lorsque le container prend plus d'1/3 du viewport
      if (!this.animate && container.top < scrollDownTriger) this.animate = true;
      // Positionnement fixe : lorsque le bouton est au dessus de 50 du bas du viewport
      if (this.animate && !this.isFixed && button.bottom >= window.innerHeight) this.isFixed = true;
      // Positionnement relative : lorsque le bas du button atteind le bas du container
      if (this.animate && this.isFixed && button.bottom >= container.bottom - offset) this.isFixed = false;
      // Disparition: move to top lorsque le bouton est fixe et que le container prend moins 1/3 du viewport
      if (this.animate && this.isFixed && container.top > scrollDownTriger) this.animate = false;
      // Disabled: move to bottom
      if (this.animate && !this.isFixed && container.bottom < scrollDownTriger) this.disabled = true;
      else this.disabled = false;
    },
    click(param) {
      this.disabled = true;
      this.action(param);
      setTimeout(() => {
        this.disabled = false;
      }, 400);
    },
  },
  watch: {
    container: {
      immediate: true,
      handler(newValue) {
        if (newValue && newValue.$el && this.$el) {
          window.addEventListener('scroll', this.checkVisibility);
          this.checkVisibility();
        }
      },
    },
  },
  beforeDestroy() {
    window.removeEventListener('scroll', this.checkVisibility);
  },
};
</script>

<style scoped>
@keyframes resize {
  0% {
    width: 60px;
    height: 60px;
  }
  50% {
    width: 50px;
    height: 50px;
  }
  100% {
    width: 60px;
    height: 60px;
  }
}

@keyframes expand {
  0% {
    width: 60px;
    height: 60px;
  }
  100% {
    width: 360px;
    height: 60px;
  }
}
@keyframes minimize {
  0% {
    width: 360px;
    height: 60px;
    opacity: 1;
  }
  50% {
    width: 60px;
    height: 60px;
    opacity: 1;
  }
  100% {
    width: 0px;
    height: 0px;
    opacity: 0;
  }
}

.dynamicIsland {
  display: block;
  width: 60px;
  height: 60px;
  border-radius: 30px;
  transform-origin: center;
  opacity: 0;
}

.dynamicIsland.expand {
  opacity: 1;
  animation: expand 0.5s forwards 0.5s;
}

.dynamicIsland.minimize {
  animation: minimize 0.5s;
}

.dynamicIsland.fixed {
  position: fixed;
  bottom: auto;
  left: 50%;
  bottom: 30px;
  transform: translate(-50%, 0);
}

.dynamicIsland .content {
  opacity: 0;
  height: 60px;
  width: 360px;
  display: table-cell;
  vertical-align: middle;
}

.dynamicIsland .content.fadeIn {
  transition: opacity 0.1s;
  transition-delay: 0.8s; /* 1s pour bounce + 0.1s pour expand */
  opacity: 1;
}
.dynamicIsland .content.fadeOut {
  transition: opacity 0.1s;
  opacity: 0;
}
</style>
