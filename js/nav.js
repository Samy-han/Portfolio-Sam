/**
 * Navigation partagée avec icônes et sous-menus
 * Définir sur <body data-page="tcs"> la page active
 */
const PROFIL_SUBMENU = `
<div class="nav__submenu nav__submenu--profil">
  <div class="nav__submenu-panel">
    <p class="nav__submenu-title">
      <span class="profil-icon profil-icon--title" aria-hidden="true"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg></span>
      À propos de moi
    </p>
    <a href="a-propos-moi.html#parcours" class="nav__submenu-link">
      <span class="profil-icon" aria-hidden="true"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 10v6M2 10l10-5 10 5-10 5z"/><path d="M6 12v5c0 1.1 2.7 2 6 2s6-.9 6-2v-5"/></svg></span>
      <span class="nav__submenu-link-text"><strong>Mon parcours</strong><span>Mon chemin et ma formation</span></span>
    </a>
    <a href="a-propos-moi.html#competences" class="nav__submenu-link">
      <span class="profil-icon" aria-hidden="true"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polygon points="12 2 2 7 12 12 22 7 12 2"/><polyline points="2 17 12 22 22 17"/><polyline points="2 12 12 17 22 12"/></svg></span>
      <span class="nav__submenu-link-text"><strong>Mes compétences</strong><span>Mes savoir-faire SISR</span></span>
    </a>
    <a href="a-propos-moi.html#certifications" class="nav__submenu-link">
      <span class="profil-icon" aria-hidden="true"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="8" r="6"/><path d="M15.477 12.89L17 22l-5-3-5 3 1.523-9.11"/></svg></span>
      <span class="nav__submenu-link-text"><strong>Mes certifications</strong><span>Diplômes et attestations</span></span>
    </a>
    <a href="a-propos-moi.html#cv" class="nav__submenu-link">
      <span class="profil-icon" aria-hidden="true"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/></svg></span>
      <span class="nav__submenu-link-text"><strong>Mon CV</strong><span>Curriculum vitæ</span></span>
    </a>
  </div>
  <div class="nav__submenu-panel">
    <p class="nav__submenu-title">
      <span class="profil-icon profil-icon--title" aria-hidden="true"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="2" y="7" width="20" height="14" rx="2"/><path d="M16 7V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2"/></svg></span>
      Expériences professionnelles
    </p>
    <a href="experiences-pro.html#stages" class="nav__submenu-link">
      <span class="profil-icon" aria-hidden="true"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M3 21h18"/><path d="M5 21V7l8-4v18"/><path d="M19 21V11l-6-4"/></svg></span>
      <span class="nav__submenu-link-text"><strong>Expériences de stages</strong><span>Mes missions en entreprise</span></span>
    </a>
  </div>
</div>`;

const PROJETS_SUBMENU = `
<div class="nav__submenu nav__submenu--profil">
  <div class="nav__submenu-panel">
    <p class="nav__submenu-title">
      <span class="profil-icon profil-icon--title" aria-hidden="true"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"/></svg></span>
      Projets
    </p>
    <a href="projets.html#procedures" class="nav__submenu-link">
      <span class="profil-icon" aria-hidden="true"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/></svg></span>
      <span class="nav__submenu-link-text"><strong>Mes procédures</strong><span>Procédures techniques détaillées</span></span>
    </a>
    <a href="projets.html#projet-e6" class="nav__submenu-link">
      <span class="profil-icon" aria-hidden="true"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 10v6M2 10l10-5 10 5-10 5z"/><path d="M6 12v5c0 1.1 2.7 2 6 2s6-.9 6-2v-5"/></svg></span>
      <span class="nav__submenu-link-text"><strong>Projet E6</strong><span>Projet de fin de formation BTS SIO SISR</span></span>
    </a>
  </div>
</div>`;

const VEILLE_SUBMENU = `
<div class="nav__submenu nav__submenu--profil">
  <div class="nav__submenu-panel">
    <p class="nav__submenu-title">
      <span class="profil-icon profil-icon--title" aria-hidden="true"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg></span>
      Veille
    </p>
    <a href="veilles.html#veille-tech" class="nav__submenu-link">
      <span class="profil-icon" aria-hidden="true"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="2" y="3" width="20" height="14" rx="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/></svg></span>
      <span class="nav__submenu-link-text"><strong>Veille technologique</strong><span>Windows Server et administration système</span></span>
    </a>
    <a href="veilles.html#veille-juridique" class="nav__submenu-link">
      <span class="profil-icon" aria-hidden="true"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg></span>
      <span class="nav__submenu-link-text"><strong>Veille juridique</strong><span>RGPD et conformité des données</span></span>
    </a>
  </div>
</div>`;

const SUBMENUS = {
  profil: PROFIL_SUBMENU,
  projets: PROJETS_SUBMENU,
  veille: VEILLE_SUBMENU,
};

const ICON = {
  accueil: '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>',
  profil: '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>',
  tcs: '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M9 5H7a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2h-2"/><rect x="9" y="3" width="6" height="4" rx="1"/><path d="M9 12h6"/><path d="M9 16h6"/></svg>',
  formation: '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 10v6M2 10l10-5 10 5-10 5z"/><path d="M6 12v5c0 1.1 2.7 2 6 2s6-.9 6-2v-5"/></svg>',
  travaux: '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"/></svg>',
  veille: '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>',
  parcours: '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 10v6M2 10l10-5 10 5-10 5z"/><path d="M6 12v5c0 1.1 2.7 2 6 2s6-.9 6-2v-5"/></svg>',
  competences: '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polygon points="12 2 2 7 12 12 22 7 12 2"/><polyline points="2 17 12 22 22 17"/><polyline points="2 12 12 17 22 12"/></svg>',
  cert: '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="8" r="6"/><path d="M15.477 12.89L17 22l-5-3-5 3 1.523-9.11"/></svg>',
  cv: '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/></svg>',
  stages: '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M3 21h18"/><path d="M5 21V7l8-4v18"/><path d="M19 21V11l-6-4"/></svg>',
  expPro: '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="2" y="7" width="20" height="14" rx="2"/><path d="M16 7V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2"/></svg>',
  procedures: '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/></svg>',
  e6: '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 10v6M2 10l10-5 10 5-10 5z"/></svg>',
  veilleTech: '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="2" y="3" width="20" height="14" rx="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/></svg>',
  veilleJur: '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>',
};

const NAV_ITEMS = [
  { id: "accueil", href: "index.html", label: "Accueil", icon: ICON.accueil },
  { id: "profil", href: "a-propos-moi.html", label: "Profil", icon: ICON.profil, dropdown: "profil" },
  { id: "tcs", href: "tcs.html", label: "TCS", icon: ICON.tcs },
  { id: "formation", href: "bts-sio.html", label: "Formation", icon: ICON.formation },
  { id: "projets", href: "projets.html", label: "Projets", icon: ICON.travaux, dropdown: "projets" },
  { id: "veille", href: "veilles.html", label: "Veille", icon: ICON.veille, dropdown: "veille" },
];

function getActivePage() {
  return document.body.dataset.page || "";
}

function navLinkClass(id, active) {
  return `nav__link${active === id ? " nav__link--active" : ""}`;
}

function renderDesktopNav(container, active) {
  const ul = document.createElement("ul");
  ul.className = "nav__list";

  NAV_ITEMS.forEach((item) => {
    const li = document.createElement("li");
    if (item.dropdown) {
      li.className = "nav__dropdown";
      li.innerHTML = `
        <a href="${item.href}" class="${navLinkClass(item.id, active)}">
          <span class="nav__icon" aria-hidden="true">${item.icon}</span>
          ${item.label}
        </a>
        ${SUBMENUS[item.dropdown]}
      `;
    } else {
      li.innerHTML = `
        <a href="${item.href}" class="${navLinkClass(item.id, active)}">
          <span class="nav__icon" aria-hidden="true">${item.icon}</span>
          ${item.label}
        </a>
      `;
    }
    ul.appendChild(li);
  });

  container.appendChild(ul);
}

function mobileLink(href, label, icon, active, isSublink) {
  const cls = isSublink
    ? `mobile-menu__sublink${active ? " mobile-menu__sublink--active" : ""}`
    : `mobile-menu__link${active ? " mobile-menu__link--active" : ""}`;
  return `<a href="${href}" class="${cls}"><span class="nav__icon nav__icon--mobile" aria-hidden="true">${icon}</span>${label}</a>`;
}

function renderMobileNav(container, active) {
  container.innerHTML = mobileLink("index.html", "Accueil", ICON.accueil, active === "accueil", false);

  container.innerHTML += `
    <div class="mobile-menu__group">
      <p class="mobile-menu__group-title"><span class="profil-icon profil-icon--title" aria-hidden="true">${ICON.profil}</span>À propos de moi</p>
      ${mobileLink("a-propos-moi.html#parcours", "Mon parcours", ICON.parcours, false, true)}
      ${mobileLink("a-propos-moi.html#competences", "Mes compétences", ICON.competences, false, true)}
      ${mobileLink("a-propos-moi.html#certifications", "Mes certifications", ICON.cert, false, true)}
      ${mobileLink("a-propos-moi.html#cv", "Mon CV", ICON.cv, false, true)}
    </div>
    <div class="mobile-menu__group">
      <p class="mobile-menu__group-title"><span class="profil-icon profil-icon--title" aria-hidden="true">${ICON.expPro}</span>Expériences professionnelles</p>
      ${mobileLink("experiences-pro.html#stages", "Expériences de stages", ICON.stages, false, true)}
    </div>
    <div class="mobile-menu__group">
      <p class="mobile-menu__group-title"><span class="profil-icon profil-icon--title" aria-hidden="true">${ICON.travaux}</span>Projets</p>
      ${mobileLink("projets.html#procedures", "Mes procédures — Procédures techniques détaillées", ICON.procedures, false, true)}
      ${mobileLink("projets.html#projet-e6", "Projet E6 — Fin de formation BTS SIO SISR", ICON.e6, false, true)}
    </div>
    <div class="mobile-menu__group">
      <p class="mobile-menu__group-title"><span class="profil-icon profil-icon--title" aria-hidden="true">${ICON.veille}</span>Veille</p>
      ${mobileLink("veilles.html#veille-tech", "Veille technologique — Windows Server", ICON.veilleTech, false, true)}
      ${mobileLink("veilles.html#veille-juridique", "Veille juridique — RGPD", ICON.veilleJur, false, true)}
    </div>
  `;

  ["tcs", "formation"].forEach((id) => {
    const item = NAV_ITEMS.find((n) => n.id === id);
    container.innerHTML += mobileLink(item.href, item.label, item.icon, active === id, false);
  });
}

document.addEventListener("DOMContentLoaded", () => {
  const active = getActivePage();
  const siteNav = document.getElementById("siteNav");
  const mobileNav = document.getElementById("mobileNav");

  if (siteNav) renderDesktopNav(siteNav, active);
  if (mobileNav) renderMobileNav(mobileNav, active);
});
