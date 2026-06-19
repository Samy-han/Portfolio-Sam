document.querySelectorAll(".formation-steps").forEach((root) => {
  const tabs = root.querySelectorAll(".formation-steps__tab");
  const panels = root.querySelectorAll(".formation-steps__panel");

  tabs.forEach((tab) => {
    tab.addEventListener("click", () => {
      const id = tab.dataset.step;
      tabs.forEach((t) => t.classList.toggle("formation-steps__tab--active", t === tab));
      panels.forEach((p) => p.classList.toggle("formation-steps__panel--active", p.dataset.step === id));
    });
  });
});
