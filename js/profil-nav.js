// Surligne le lien de sous-navigation selon la section visible
const subnavLinks = document.querySelectorAll(".profil-subnav__link");
const sections = document.querySelectorAll(".profil-section[id], .veille-block[id]");

if (subnavLinks.length && sections.length) {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        const id = entry.target.id;
        subnavLinks.forEach((link) => {
          link.classList.toggle(
            "profil-subnav__link--active",
            link.getAttribute("href") === `#${id}`
          );
        });
      });
    },
    { rootMargin: "-30% 0px -55% 0px", threshold: 0 }
  );

  sections.forEach((section) => observer.observe(section));
}
