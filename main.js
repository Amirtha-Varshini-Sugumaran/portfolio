/* =========================================================
   Portfolio Main JS (Vanilla)
   - Mobile nav toggle (optional hook)
   - Smooth scroll
   - Scroll spy (active nav + moving indicator)
   - Typed effect in hero
   - Scroll reveal animations
========================================================= */

(function () {
  "use strict";

  // ---------------------------
  // Helpers
  // ---------------------------
  const $ = (sel, root = document) => root.querySelector(sel);
  const $$ = (sel, root = document) => Array.from(root.querySelectorAll(sel));

  // ---------------------------
  // Smooth scroll for in-page links
  // ---------------------------
  const navLinks = $$(".nav-link");
  navLinks.forEach((link) => {
    link.addEventListener("click", (e) => {
      const href = link.getAttribute("href");
      if (!href || !href.startsWith("#")) return;

      e.preventDefault();
      const target = $(href);
      if (!target) return;

      const header = $(".site-header");
      const headerH = header ? header.offsetHeight : 0;
      const y = target.getBoundingClientRect().top + window.scrollY - headerH + 2;

      window.scrollTo({ top: y, behavior: "smooth" });
    });
  });

  // ---------------------------
  // Scroll Spy + Moving Indicator
  // ---------------------------
  const headerEl = $(".site-header");
  const navList = $(".nav-links");
  let indicator = null;

  function createIndicator() {
    if (!navList) return;
    indicator = document.createElement("div");
    indicator.className = "nav-indicator";
    navList.style.position = "relative";
    navList.appendChild(indicator);
  }

  function setActiveLink(activeId) {
    navLinks.forEach((a) => {
      const href = a.getAttribute("href");
      const isActive = href === `#${activeId}`;
      a.classList.toggle("active", isActive);
    });
  }

  function moveIndicatorToActive() {
    if (!indicator || !navList) return;
    const active = $(".nav-link.active", navList);
    if (!active) return;

    const rect = active.getBoundingClientRect();
    const parentRect = navList.getBoundingClientRect();

    const left = rect.left - parentRect.left;
    const width = rect.width;

    indicator.style.transform = `translateX(${left}px)`;
    indicator.style.width = `${width}px`;
    indicator.style.opacity = "1";
  }

  function getCurrentSectionId() {
    const headerH = headerEl ? headerEl.offsetHeight : 0;
    const sections = $$("section[id]");
    const y = window.scrollY + headerH + 20;

    // Find last section whose top <= y
    let current = sections[0]?.id || "";
    for (const sec of sections) {
      const top = sec.offsetTop;
      if (top <= y) current = sec.id;
    }
    return current;
  }

  function onScrollSpy() {
    const id = getCurrentSectionId();
    if (!id) return;
    setActiveLink(id);
    moveIndicatorToActive();
  }

  // Create indicator and run once
  createIndicator();
  window.addEventListener("resize", () => {
    moveIndicatorToActive();
  });
  window.addEventListener("scroll", () => {
    onScrollSpy();
    revealOnScroll(); // keep reveal synced
  });

  // ---------------------------
  // Typed effect (Hero)
  // ---------------------------
  const typedEl = $("#typed-role");
  const roles = ["Software Engineer", "Business Analyst", "Data Analyst"];
  let roleIndex = 0;
  let charIndex = 0;
  let deleting = false;

  function typeLoop() {
    if (!typedEl) return;

    const current = roles[roleIndex];
    const speedType = 70;
    const speedDelete = 45;
    const pauseFull = 950;
    const pauseEmpty = 250;

    if (!deleting) {
      charIndex++;
      typedEl.textContent = current.slice(0, charIndex);
      if (charIndex >= current.length) {
        deleting = true;
        setTimeout(typeLoop, pauseFull);
        return;
      }
      setTimeout(typeLoop, speedType);
    } else {
      charIndex--;
      typedEl.textContent = current.slice(0, Math.max(0, charIndex));
      if (charIndex <= 0) {
        deleting = false;
        roleIndex = (roleIndex + 1) % roles.length;
        setTimeout(typeLoop, pauseEmpty);
        return;
      }
      setTimeout(typeLoop, speedDelete);
    }
  }
  typeLoop();

  // ---------------------------
  // Scroll Reveal (IntersectionObserver first; fallback to manual)
  // ---------------------------
  const revealEls = $$(".reveal");

  function revealNow(el) {
    el.classList.add("in-view");
  }

  function revealOnScroll() {
    // Fallback if no IntersectionObserver
    const threshold = 0.18;
    const vh = window.innerHeight;

    revealEls.forEach((el) => {
      if (el.classList.contains("in-view")) return;
      const rect = el.getBoundingClientRect();
      const visible = rect.top < vh * (1 - threshold);
      if (visible) revealNow(el);
    });
  }

  if ("IntersectionObserver" in window) {
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) revealNow(entry.target);
        });
      },
      { threshold: 0.12 }
    );

    revealEls.forEach((el) => io.observe(el));
  } else {
    revealOnScroll();
  }

  // Initial activation
  onScrollSpy();
  moveIndicatorToActive();
})();
