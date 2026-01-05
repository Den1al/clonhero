export const MathUtils = {
  clamp(value, min, max) {
    return Math.max(min, Math.min(max, value));
  },

  lerp(start, end, t) {
    return start + (end - start) * t;
  },

  distance(x1, y1, x2, y2) {
    const dx = x2 - x1;
    const dy = y2 - y1;
    return Math.sqrt(dx * dx + dy * dy);
  },

  distance3D(p1, p2) {
    const dx = p2.x - p1.x;
    const dy = p2.y - p1.y;
    const dz = p2.z - p1.z;
    return Math.sqrt(dx * dx + dy * dy + dz * dz);
  },

  distanceXZ(p1, p2) {
    const dx = p2.x - p1.x;
    const dz = p2.z - p1.z;
    return Math.sqrt(dx * dx + dz * dz);
  },

  normalize(x, y) {
    const len = Math.sqrt(x * x + y * y);
    if (len === 0) return { x: 0, y: 0 };
    return { x: x / len, y: y / len };
  },

  randomRange(min, max) {
    return Math.random() * (max - min) + min;
  },

  randomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  },

  randomChoice(array) {
    return array[Math.floor(Math.random() * array.length)];
  },

  shuffleArray(array) {
    const shuffled = [...array];
    for (let i = shuffled.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
  },

  angleToDirection(angle) {
    return {
      x: Math.cos(angle),
      y: Math.sin(angle)
    };
  },

  directionToAngle(x, y) {
    return Math.atan2(y, x);
  },

  easeOutQuad(t) {
    return t * (2 - t);
  },

  easeInOutQuad(t) {
    return t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t;
  },

  easeOutBack(t) {
    const c1 = 1.70158;
    const c3 = c1 + 1;
    return 1 + c3 * Math.pow(t - 1, 3) + c1 * Math.pow(t - 1, 2);
  },

  easeOutElastic(t) {
    const c4 = (2 * Math.PI) / 3;
    return t === 0 ? 0 : t === 1 ? 1 :
      Math.pow(2, -10 * t) * Math.sin((t * 10 - 0.75) * c4) + 1;
  }
};
