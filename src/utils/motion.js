export const fadeIn = (direction = "up", delay = 0, duration = 0.6) => {
  const distance = direction === "up" ? 40 : direction === "down" ? -40 : 0;
  return {
    hidden: { opacity: 0, y: distance },
    show: {
      opacity: 1,
      y: 0,
      transition: { delay, duration, ease: [0.25, 0.1, 0.25, 1] },
    },
  };
};

export const fadeInScale = (delay = 0, duration = 0.6) => ({
  hidden: { opacity: 0, scale: 0.95 },
  show: {
    opacity: 1,
    scale: 1,
    transition: { delay, duration, ease: [0.33, 1, 0.68, 1] },
  },
});

export const staggerContainer = (delayChildren = 0.15, staggerChildren = 0.12) => ({
  hidden: {},
  show: {
    transition: {
      delayChildren,
      staggerChildren,
    },
  },
});

export const fadeInListItem = (index = 0, baseDelay = 0, duration = 0.45) => ({
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: { delay: baseDelay + index * 0.08, duration, ease: "easeOut" },
  },
});
