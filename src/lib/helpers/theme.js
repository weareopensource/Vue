/**
 * @desc Function to return actual theme
 * @param {String} option in config
 * @return {String} theme
 */
export const defineTheme = (theme) => {
  if (theme === 'auto') {
    return window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
  }
  return theme ? 'dark' : 'light';
};

/**
 * @desc Function to return actual theme
 * @param {String} option in config
 * @return {Boolean} dark value
 */
export const isDark = (theme) => {
  if (theme === 'auto') {
    return !!(window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches);
  }
  return !!theme;
};

/**
 * @desc Function to return custom css object
 * @param {String} String, section, card, video
 * @return {Object} object in config { background: ... }
 */
export const style = (kind, object) => {
  const style = {};
  if (object && object.style && object.style[kind]) {
    if (object.style[kind].background)
      style.background =
        object.style[kind].background[0] === '#' ? object.style[kind].background : `rgb(var(--v-theme-${object.style[kind].background}))`;
    if (object.style[kind].maxWidth) style['max-width'] = object.style[kind].maxWidth;
  }
  return style;
};

/**
 * @desc default export
 */
export default { defineTheme, isDark, style };
