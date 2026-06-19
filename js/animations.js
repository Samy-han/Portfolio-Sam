/**
 * Animations au scroll — révélation progressive des cartes
 */
document.addEventListener("DOMContentLoaded", () => {
  const targets = document.querySelectorAll(
    ".reveal, .reveal-stagger > *, .timeline__item, .skill-card, .objectif-card, .comp-card, .debouch-card, .proc-card, .veille-card, .formation-card"
  );

  if (!targets.length) return;

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      });
    },
    { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
  );

  targets.forEach((el, i) => {
    el.style.setProperty("--reveal-delay", `${Math.min(i % 8, 7) * 0.07}s`);
    observer.observe(el);
  });
});
