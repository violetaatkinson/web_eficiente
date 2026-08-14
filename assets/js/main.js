(function () {
  "use strict";

  // Keep --header-height in sync with the real header (banner + nav row
  // together), so sections below never get overlapped or leave a gap.
  var headerEl = document.getElementById("header");
  function syncHeaderHeight() {
    if (headerEl) {
      document.documentElement.style.setProperty("--header-height", headerEl.offsetHeight + "px");
    }
  }
  syncHeaderHeight();
  window.addEventListener("resize", syncHeaderHeight);
  window.addEventListener("load", syncHeaderHeight);

  // Rotating word in the hero title
  var rotateEl = document.getElementById("txtRotate");
  if (rotateEl) {
    var words = JSON.parse(rotateEl.getAttribute("data-rotate") || "[]");
    var i = 0;
    if (words.length > 1) {
      setInterval(function () {
        i = (i + 1) % words.length;
        rotateEl.style.opacity = "0";
        setTimeout(function () {
          rotateEl.textContent = words[i];
          rotateEl.style.opacity = "1";
        }, 250);
      }, 2600);
      rotateEl.style.transition = "opacity .25s ease";
    }
  }

  // Ecosystem section filter tabs
  var tags = document.querySelectorAll(".filters__tag");
  tags.forEach(function (tag) {
    tag.addEventListener("click", function () {
      tags.forEach(function (t) { t.classList.remove("active"); });
      document.querySelectorAll(".protocols").forEach(function (p) { p.classList.remove("active"); });
      tag.classList.add("active");
      var target = document.getElementById(tag.getAttribute("data-target"));
      if (target) target.classList.add("active");
    });
  });

  // Mobile menu
  var mobileMenu = document.getElementById("mobileMenu");
  var openBtn = document.getElementById("mobileMenuOpen");
  var closeBtn = document.getElementById("mobileMenuClose");
  if (openBtn && mobileMenu) {
    openBtn.addEventListener("click", function () {
      mobileMenu.classList.add("is-open");
      document.body.style.overflow = "hidden";
    });
  }
  if (closeBtn && mobileMenu) {
    closeBtn.addEventListener("click", function () {
      mobileMenu.classList.remove("is-open");
      document.body.style.overflow = "";
    });
  }
  mobileMenu && mobileMenu.querySelectorAll("a").forEach(function (link) {
    link.addEventListener("click", function () {
      mobileMenu.classList.remove("is-open");
      document.body.style.overflow = "";
    });
  });

  // Scroll-top button visibility
  var scrollBtn = document.getElementById("scrollTopBtn");
  window.addEventListener("scroll", function () {
    var y = window.scrollY || window.pageYOffset;
    if (scrollBtn) scrollBtn.classList.toggle("visible", y > 600);
  });

  if (scrollBtn) {
    scrollBtn.addEventListener("click", function () {
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  }

  // Smooth in-page anchor navigation
  document.querySelectorAll('a[href^="#"]').forEach(function (link) {
    link.addEventListener("click", function (e) {
      var id = link.getAttribute("href").slice(1);
      var target = id && document.getElementById(id);
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: "smooth" });
      }
    });
  });

  // Newsletter form (no backend wired up yet)
  var newsletterForm = document.getElementById("newsletterForm");
  if (newsletterForm) {
    newsletterForm.addEventListener("submit", function (e) {
      e.preventDefault();
    });
  }
})();
