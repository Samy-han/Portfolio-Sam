/**
 * Configuration — Samy Hanifi
 */
const PORTFOLIO_CONFIG = {
  name: "Samy Hanifi",
  initials: "SH",
  session: "2025 – 2027",
  school: "ENSITECH — Marseille",
  bio: "Étudiant en BTS SIO option SISR à Marseille, je construis mon expertise autour des réseaux, de l'administration des systèmes et de la sécurité. Ce site retrace ma formation, mes projets et ma veille technologique.",
  email: "samy.hanifi@ensitech.eu",
  emailEtu: "samy.hanifi@etu.ensitech.fr",
  location: "Marseille, France",
  linkedin: "https://www.linkedin.com/in/samy-hanifi",
  heroImage: "assets/images/hero.jpg",
  year: new Date().getFullYear(),
};

document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll("[data-profile]").forEach((el) => {
    const key = el.dataset.profile;
    const value = PORTFOLIO_CONFIG[key];
    if (value === undefined) return;

    if (el.tagName === "A" && (key === "email" || key === "linkedin")) {
      el.href = key === "email" ? `mailto:${value}` : value;
      if (key === "email") el.setAttribute("aria-label", `Envoyer un e-mail à ${value}`);
    } else {
      el.textContent = value;
    }
  });

  const heroImg = document.getElementById("heroImage");
  if (heroImg) heroImg.src = PORTFOLIO_CONFIG.heroImage;
});
