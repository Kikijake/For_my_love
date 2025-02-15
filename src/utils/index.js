/**
 * Delay rendering imported component.
 *
 * @returns {delayedFunction}
 */

export const simulateDelay = (importFunction, delay = 1000) => {
  return new Promise((resolve) => {
    setTimeout(() => resolve(importFunction()), delay);
  });
};

export const loadImage = (src) => {
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.src = src;
    img.onload = () => resolve(src);
    img.onerror = (err) => reject(err);
  });
};
