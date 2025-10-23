// === DM Web Solutions — main.js (fixed & clean) ===

// Loader fade-out
document.addEventListener("DOMContentLoaded", () => {
  const loader = document.getElementById("preloader");
  if (loader) {
    setTimeout(() => {
      loader.classList.add("hide");
      setTimeout(() => loader.remove(), 600);
    }, 600);
  }
});

// Sticky header
const header = document.getElementById("header");
if (header) {
  const handleScroll = () => header.classList.toggle("scrolled", window.scrollY > 10);
  window.addEventListener("scroll", handleScroll);
  handleScroll();
}

// Mobile nav toggle
const navToggle = document.getElementById("navToggle");
const nav = document.getElementById("nav");
if (navToggle && nav) {
  navToggle.addEventListener("click", () => {
    const open = nav.classList.toggle("open");
    navToggle.setAttribute("aria-expanded", open);
  });
}

// === Theme toggle ===
const themeToggle = document.getElementById("themeToggle");
const themeIcon = document.getElementById("themeIcon");
const floatingTheme = document.getElementById("floatingTheme");

function updateThemeIcon(theme) {
  if (!themeIcon) return;
  themeIcon.innerHTML =
    theme === "dark"
      ? '<path d="M21.64 13A9 9 0 1 1 11 2.36a7 7 0 1 0 10.64 10.64z"/>'
      : '<path d="M12 3a9 9 0 1 0 9 9 9.013 9.013 0 0 0-9-9Zm0 16a7 7 0 1 1 7-7 7.008 7.008 0 0 1-7 7Z"/>';
}

function toggleTheme() {
  const current =
    document.documentElement.getAttribute("data-theme") === "dark"
      ? "light"
      : "dark";
  document.documentElement.setAttribute("data-theme", current);
  localStorage.setItem("theme", current);
  updateThemeIcon(current);
}

// Load saved theme
const savedTheme = localStorage.getItem("theme");
if (savedTheme) {
  document.documentElement.setAttribute("data-theme", savedTheme);
  updateThemeIcon(savedTheme);
} else {
  updateThemeIcon("light");
}

themeToggle?.addEventListener("click", toggleTheme);
floatingTheme?.addEventListener("click", toggleTheme);

// Reveal animation
const io = new IntersectionObserver(
  (entries) => {
    entries.forEach((e) => e.isIntersecting && e.target.classList.add("in"));
  },
  { threshold: 0.1 }
);
document.querySelectorAll(".reveal").forEach((el) => io.observe(el));

// Dynamic year
const yearSpan = document.getElementById("year");
if (yearSpan) yearSpan.textContent = new Date().getFullYear();

console.log("✅ main.js loaded successfully");

// Fade-in scroll animation
const fadeElements = document.querySelectorAll('.fade-in');
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) entry.target.classList.add('visible');
  });
});
fadeElements.forEach(el => observer.observe(el));
