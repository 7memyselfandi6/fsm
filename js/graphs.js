const gaugeWraps = Array.from(document.querySelectorAll(".gauge-wrap"));

const setGauge = (wrap) => {
  const value = Number(wrap.dataset.value || 0);
  const clamped = Math.max(0, Math.min(100, value));
  const color = wrap.dataset.color || "#111111";

  const path = wrap.querySelector(".gauge-fg");
  if (path) {
    path.style.stroke = color;
    const length = path.getTotalLength();
    path.style.strokeDasharray = `${length}`;
    path.style.strokeDashoffset = `${length}`;
    requestAnimationFrame(() => {
      const filled = (clamped / 100) * length;
      path.style.strokeDashoffset = `${length - filled}`;
    });
  }
};

gaugeWraps.forEach(setGauge);

const starSvg = (isOn) => {
  const fill = isOn ? "#16a34a" : "rgba(22, 163, 74, 0.25)";
  return `<svg width="18" height="18" viewBox="0 0 24 24" aria-hidden="true"><path fill="${fill}" d="M12 2l2.9 6.3 6.8.6-5.1 4.4 1.6 6.7L12 16.9 5.8 20l1.6-6.7-5.1-4.4 6.8-.6L12 2z"/></svg>`;
};

const starWraps = Array.from(document.querySelectorAll(".star-icons"));
starWraps.forEach((wrap) => {
  const rating = Number(wrap.dataset.rating || 0);
  const count = Math.max(0, Math.min(5, Math.round(rating)));
  wrap.innerHTML = Array.from({ length: 5 }, (_, i) => starSvg(i < count)).join("");
});
