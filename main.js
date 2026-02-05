/* main.js
=========================================================
  Vanilla JS interactions:
  1) Typed effect (hero)
  2) Smooth scroll enhancements (offset for sticky header)
  3) Active nav state (IntersectionObserver)
  4) Scroll reveal animations
  5) Mobile nav toggle + close on link click / outside click
========================================================= */

(() => {
  // ---------------------------
  // Helpers
  // ---------------------------
  const $ = (sel, root = document) => root.querySelector(sel);
  const $$ = (sel, root = document) => Array.from(root.querySelectorAll(sel));

  // Update footer year
  const yearEl = $("#year");
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  // ---------------------------
  // Typed effect (no external libs)
  // ---------------------------
  const typedEl = $("#typed");
  const roles = ["Business Analyst", "Software Engineer", "Data Analyst"];
  let roleIndex = 0;
  let charIndex = 0;
  let isDeleting = false;

  function typeTick() {
    if (!typedEl) return;

    const current = roles[roleIndex];
    const visibleText = isDeleting
      ? current.slice(0, charIndex--)
      : current.slice(0, charIndex++);

    typedEl.textContent = visibleText;

    // Speed controls
    const base = 70;
    const typingSpeed = isDeleting ? base * 0.55 : base;
    const pauseAfterType = 950;
    const pauseAfterErase = 220;

    // Completed typing a word
    if (!isDeleting && charIndex > current.length) {
      isDeleting = true;
      setTimeout(typeTick, pauseAfterType);
      return;
    }

    // Completed erasing
    if (isDeleting && charIndex < 0) {
      isDeleting = false;
      roleIndex = (roleIndex + 1) % roles.length;
      setTimeout(typeTick, pauseAfterErase);
      return;
    }

    setTimeout(typeTick, typingSpeed);
  }
  typeTick();

  // ---------------------------
  // Sticky header offset smooth scroll
  // ---------------------------
  const header = $(".site-header");
  const headerOffset = () => (header ? header.getBoundingClientRect().height : 0);

  // Enhance anchor clicks so sections don't hide behind sticky header
  $$("a[data-nav]").forEach((link) => {
    link.addEventListener("click", (e) => {
      const href = link.getAttribute("href");
      if (!href || !href.startsWith("#")) return;

      const target = $(href);
      if (!target) return;

      e.preventDefault();

      const top = target.getBoundingClientRect().top + window.scrollY - headerOffset() + 2;
      window.scrollTo({ top, behavior: "smooth" });
    });
  });

  // ---------------------------
  // Mobile nav toggle
  // ---------------------------
  const navToggle = $(".nav-toggle");
  const nav = $(".site-nav");

  function setNavOpen(isOpen) {
    if (!nav || !navToggle) return;
    nav.classList.toggle("open", isOpen);
    navToggle.setAttribute("aria-expanded", String(isOpen));
    navToggle.setAttribute("aria-label", isOpen ? "Close menu" : "Open menu");
  }

  if (navToggle && nav) {
    navToggle.addEventListener("click", () => {
      const open = nav.classList.contains("open");
      setNavOpen(!open);
    });

    // Close on link click (mobile)
    $$("a[data-nav]").forEach((a) => {
      a.addEventListener("click", () => setNavOpen(false));
    });

    // Close on outside click
    document.addEventListener("click", (e) => {
      const isClickInside = nav.contains(e.target) || navToggle.contains(e.target);
      if (!isClickInside) setNavOpen(false);
    });

    // Close on ESC
    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape") setNavOpen(false);
    });
  }

  // ---------------------------
  // Scroll reveal animations
  // ---------------------------
  const revealEls = $$(".reveal");
  const revealObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          revealObserver.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.12 }
  );

  revealEls.forEach((el) => revealObserver.observe(el));

  // ---------------------------
  // Active nav state
  // ---------------------------
  const sections = ["#hero", "#about", "#services", "#skills", "#projects", "#contact"]
    .map((id) => $(id))
    .filter(Boolean);

  const navLinks = $$("a[data-nav]");
  const linkByHash = new Map(navLinks.map((a) => [a.getAttribute("href"), a]));

  function setActive(hash) {
    navLinks.forEach((a) => a.classList.remove("active"));
    const active = linkByHash.get(hash);
    if (active) active.classList.add("active");
  }

  // IntersectionObserver for sections
  const sectionObserver = new IntersectionObserver(
    (entries) => {
      // pick the most visible section
      const visible = entries
        .filter((e) => e.isIntersecting)
        .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

      if (visible) setActive(`#${visible.target.id}`);
    },
    {
      // offset approximate header height
      rootMargin: `-${Math.round(headerOffset())}px 0px -65% 0px`,
      threshold: [0.12, 0.25, 0.4, 0.6],
    }
  );

  sections.forEach((sec) => sectionObserver.observe(sec));

  // Default active
  setActive("#hero");
})();
