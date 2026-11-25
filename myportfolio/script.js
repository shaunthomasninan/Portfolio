(() => {
  document.documentElement.classList.add("js");

  // Footer year
  const year = document.getElementById("year");
  if (year) year.textContent = new Date().getFullYear();

  // Mobile nav
  const toggle = document.querySelector(".nav-toggle");
  const links = document.getElementById("nav-links");
  const closeMenu = () => {
    links.classList.remove("open");
    toggle.setAttribute("aria-expanded", "false");
  };
  toggle.addEventListener("click", () => {
    const open = links.classList.toggle("open");
    toggle.setAttribute("aria-expanded", String(open));
  });
  links.addEventListener("click", (e) => { if (e.target.closest("a")) closeMenu(); });
  document.addEventListener("keydown", (e) => { if (e.key === "Escape") closeMenu(); });

  // Header border on scroll
  const header = document.querySelector(".site-header");
  const onScroll = () => header.classList.toggle("scrolled", window.scrollY > 8);
  onScroll();
  window.addEventListener("scroll", onScroll, { passive: true });

  // Reveal on scroll
  const reveals = document.querySelectorAll(".reveal");
  if ("IntersectionObserver" in window) {
    const io = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const el = entry.target;
          el.classList.add("in");
          // Once revealed, hand transform/transition back to the element's own hover styles
          el.addEventListener("transitionend", function done(e) {
            if (e.target !== el || e.pseudoElement || e.propertyName !== "opacity") return;
            el.classList.remove("reveal");
            el.style.transitionDelay = "";
            el.removeEventListener("transitionend", done);
          });
          io.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12 });
    reveals.forEach((el, i) => {
      el.style.transitionDelay = `${(i % 4) * 60}ms`;
      io.observe(el);
    });
  } else {
    reveals.forEach((el) => el.classList.add("in"));
  }

  // Active nav link
  const sections = [...document.querySelectorAll("main section[id]")];
  const navAnchors = [...links.querySelectorAll("a[href^='#']:not(.btn)")];
  if ("IntersectionObserver" in window) {
    const spy = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        navAnchors.forEach((a) => a.classList.toggle("active", a.getAttribute("href") === `#${entry.target.id}`));
      });
    }, { rootMargin: "-45% 0px -50% 0px" });
    sections.forEach((s) => spy.observe(s));
  }

  const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const finePointer = window.matchMedia("(hover: hover) and (pointer: fine)").matches;

  // Scroll progress bar + timeline fill (rAF-throttled)
  const bar = document.querySelector(".scroll-progress");
  const timeline = document.querySelector(".timeline");
  let ticking = false;
  const updateScroll = () => {
    const max = document.documentElement.scrollHeight - window.innerHeight;
    bar.style.setProperty("--p", max > 0 ? Math.min(window.scrollY / max, 1) : 0);
    if (timeline) {
      const r = timeline.getBoundingClientRect();
      const p = Math.min(Math.max((window.innerHeight * 0.65 - r.top) / r.height, 0), 1);
      timeline.style.setProperty("--tl", `${p * 100}%`);
    }
    ticking = false;
  };
  window.addEventListener("scroll", () => {
    if (!ticking) { ticking = true; requestAnimationFrame(updateScroll); }
  }, { passive: true });
  window.addEventListener("resize", updateScroll);
  updateScroll();

  // Typed role line
  const typed = document.getElementById("typed");
  if (typed && !reduce) {
    const words = typed.dataset.words.split("|");
    let w = 0, c = 0, deleting = false;
    const tick = () => {
      const word = words[w];
      c += deleting ? -1 : 1;
      typed.textContent = word.slice(0, c);
      let delay = deleting ? 35 : 75;
      if (!deleting && c === word.length) { deleting = true; delay = 1600; }
      else if (deleting && c === 0) { deleting = false; w = (w + 1) % words.length; delay = 350; }
      setTimeout(tick, delay);
    };
    setTimeout(() => { deleting = true; c = words[0].length; tick(); }, 1800);
  }

  // Count-up stats
  const counters = document.querySelectorAll("[data-count]");
  const countUp = (el) => {
    const target = Number(el.dataset.count), suffix = el.dataset.suffix || "";
    if (reduce) { el.textContent = target + suffix; return; }
    const dur = 1400, t0 = performance.now();
    const step = (t) => {
      const k = Math.min((t - t0) / dur, 1);
      el.textContent = Math.round(target * (1 - Math.pow(1 - k, 3))) + suffix;
      if (k < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  };
  if ("IntersectionObserver" in window && !reduce) {
    const co = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) { countUp(entry.target); co.unobserve(entry.target); }
      });
    }, { threshold: 0.6 });
    counters.forEach((el) => { el.textContent = "0" + (el.dataset.suffix || ""); co.observe(el); });
  }

  // Tech marquee: duplicate content for a seamless loop
  const track = document.querySelector(".marquee-track");
  if (track && !reduce) {
    [...track.children].forEach((n) => {
      const clone = n.cloneNode(true);
      clone.setAttribute("aria-hidden", "true");
      track.appendChild(clone);
    });
  }

  // Pointer effects (mouse only): cursor glow, card spotlight, magnetic buttons
  if (finePointer && !reduce) {
    const glow = document.querySelector(".cursor-glow");
    let gx = 0, gy = 0, raf = 0;
    window.addEventListener("pointermove", (e) => {
      gx = e.clientX; gy = e.clientY;
      glow.classList.add("on");
      if (!raf) raf = requestAnimationFrame(() => {
        glow.style.setProperty("--cx", gx + "px");
        glow.style.setProperty("--cy", gy + "px");
        raf = 0;
      });
    }, { passive: true });
    document.documentElement.addEventListener("mouseleave", () => glow.classList.remove("on"));

    document.querySelectorAll(".card").forEach((card) => {
      card.addEventListener("pointermove", (e) => {
        const r = card.getBoundingClientRect();
        card.style.setProperty("--mx", e.clientX - r.left + "px");
        card.style.setProperty("--my", e.clientY - r.top + "px");
      });
    });

    document.querySelectorAll(".btn").forEach((btn) => {
      btn.addEventListener("pointermove", (e) => {
        const r = btn.getBoundingClientRect();
        btn.style.setProperty("--tx", (e.clientX - r.left - r.width / 2) * 0.25 + "px");
        btn.style.setProperty("--ty", (e.clientY - r.top - r.height / 2) * 0.35 + "px");
      });
      btn.addEventListener("pointerleave", () => {
        btn.style.setProperty("--tx", "0px");
        btn.style.setProperty("--ty", "0px");
      });
    });
  }

  // Project filters
  const filters = document.querySelectorAll(".filter");
  const projects = document.querySelectorAll(".project");
  filters.forEach((btn) => {
    btn.addEventListener("click", () => {
      const f = btn.dataset.filter;
      filters.forEach((b) => {
        const active = b === btn;
        b.classList.toggle("is-active", active);
        b.setAttribute("aria-pressed", String(active));
      });
      projects.forEach((p) => {
        const match = f === "all" || p.dataset.category.split(" ").includes(f);
        p.hidden = !match;
      });
    });
  });
})();
