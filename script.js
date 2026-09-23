/* ================================
   MUHAMMAD AYUB — PORTFOLIO
   JavaScript
================================ */

document.addEventListener("DOMContentLoaded", () => {
  const nav = document.querySelector(".nav");
  const menuButton = document.querySelector(".menu");
  const navLinks = document.querySelectorAll(".nav nav a");

  // Mobile menu
  if (menuButton && nav) {
    menuButton.addEventListener("click", () => {
      const isOpen = nav.classList.toggle("nav-open");

      menuButton.setAttribute("aria-expanded", isOpen ? "true" : "false");
      menuButton.textContent = isOpen ? "✕" : "☰";
    });
  }

  // Close mobile menu after clicking a navigation link
  navLinks.forEach((link) => {
    link.addEventListener("click", () => {
      if (nav) {
        nav.classList.remove("nav-open");
      }

      if (menuButton) {
        menuButton.setAttribute("aria-expanded", "false");
        menuButton.textContent = "☰";
      }
    });
  });

  // Close mobile menu when clicking outside
  document.addEventListener("click", (event) => {
    if (!nav || !menuButton) return;

    const clickedInsideNav = nav.contains(event.target);

    if (!clickedInsideNav && nav.classList.contains("nav-open")) {
      nav.classList.remove("nav-open");
      menuButton.setAttribute("aria-expanded", "false");
      menuButton.textContent = "☰";
    }
  });

  // Add accessibility state to the menu button
  if (menuButton) {
    menuButton.setAttribute("aria-expanded", "false");
  }

  // Highlight the current navigation section while scrolling
  const sections = document.querySelectorAll("main section[id]");

  const updateActiveSection = () => {
    let currentSection = "";

    sections.forEach((section) => {
      const sectionTop = section.offsetTop - 150;

      if (window.scrollY >= sectionTop) {
        currentSection = section.id;
      }
    });

    navLinks.forEach((link) => {
      const href = link.getAttribute("href");

      if (href === `#${currentSection}`) {
        link.classList.add("active");
      } else {
        link.classList.remove("active");
      }
    });
  };

  window.addEventListener("scroll", updateActiveSection, {
    passive: true
  });

  updateActiveSection();
});
