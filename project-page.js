// Renders a project case study from window.PROJECTS (see projects.js) based on ?p=<slug>.
(() => {
  const root = document.getElementById("project-root");
  const data = window.PROJECTS || {};
  const order = window.PROJECT_ORDER || Object.keys(data);
  const slug = new URLSearchParams(location.search).get("p");
  const p = Object.prototype.hasOwnProperty.call(data, slug) ? data[slug] : null;

  const el = (tag, cls, text) => {
    const e = document.createElement(tag);
    if (cls) e.className = cls;
    if (text != null) e.textContent = text;
    return e;
  };
  const add = (parent, ...kids) => { kids.forEach((k) => k && parent.appendChild(k)); return parent; };
  const wrap = () => el("div", "container");

  if (!p) {
    document.title = "Project not found — Shaun Thomas Ninan";
    const box = add(wrap(), el("div", "proj-missing"));
    add(box.firstChild,
      el("h1", "", "Project not found"),
      el("p", "", "That project doesn’t exist or the link is out of date."));
    const back = el("a", "btn", "Back to all projects");
    back.href = "index.html#projects";
    box.firstChild.appendChild(back);
    root.appendChild(box);
    return;
  }

  // Page title + description
  document.title = `${p.title} — Shaun Thomas Ninan`;
  const meta = document.querySelector('meta[name="description"]');
  if (meta) meta.setAttribute("content", p.overview || p.summary);

  const cats = p.categories || [];
  const labels = [];
  if (cats.includes("dev")) labels.push("Development");
  if (cats.includes("pm")) labels.push("Management");
  const stackLabel = (p.stack || []).join(" · ");

  // ---- Hero ----
  const hero = el("section", "hero-wrap");
  const bg = el("div", "hero-bg");
  bg.setAttribute("aria-hidden", "true");
  add(bg, el("span", "blob b1"), el("span", "blob b3"), el("div", "grid-lines"));
  hero.appendChild(bg);

  const inner = el("div", "proj-hero container");
  const crumb = el("a", "crumb");
  crumb.href = "index.html#projects";
  crumb.textContent = "← All projects";
  const badges = el("div", "badges reveal");
  labels.forEach((l) => badges.appendChild(el("span", l === "Management" ? "badge badge-pm" : "badge", l)));
  const h1 = el("h1", "reveal", p.title);
  const client = el("p", "client reveal", p.client);
  const lead = el("p", "lead reveal", p.overview || p.summary);
  const tags = el("ul", "tags reveal");
  (p.stack || []).forEach((t) => tags.appendChild(el("li", "", t)));

  const facts = el("dl", "facts reveal");
  const fact = (k, v) => { const d = el("div"); add(d, el("dt", "", k), el("dd", "", v)); facts.appendChild(d); };
  fact("Client", p.client);
  fact("Responsibility", labels.join(" & "));
  if (stackLabel) fact("Focus", (p.stack || []).slice(0, 4).join(", "));

  add(inner, crumb, badges, h1, client, lead, tags, facts);
  hero.appendChild(inner);
  root.appendChild(hero);

  // ---- Sections ----
  let n = 0;
  const section = (title, build) => {
    n += 1;
    const s = el("section", "proj-section container");
    const t = el("h2", "section-title reveal");
    add(t, el("span", "mono", String(n).padStart(2, "0")), document.createTextNode(" " + title));
    s.appendChild(t);
    build(s);
    root.appendChild(s);
  };

  if (p.audience && p.audience.length) {
    section("Who it’s for", (s) => {
      const ul = el("ul", "chips reveal");
      p.audience.forEach((a) => ul.appendChild(el("li", "", a)));
      s.appendChild(ul);
    });
  }

  if (p.role) {
    section("My role", (s) => {
      const c = el("div", "card role-card reveal");
      c.appendChild(el("p", "", p.role));
      s.appendChild(c);
    });
  }

  if (p.modules && p.modules.length) {
    section("How it’s built", (s) => {
      const g = el("div", "module-grid");
      p.modules.forEach((m) => {
        const c = el("article", "card reveal");
        add(c, el("h3", "", m.name), el("p", "", m.text));
        g.appendChild(c);
      });
      s.appendChild(g);
    });
  }

  if (p.features && p.features.length) {
    section("Key functionality", (s) => {
      const g = el("div", "feature-grid");
      p.features.forEach((f, i) => {
        const c = el("article", "card feature reveal");
        add(c, el("span", "num mono", String(i + 1).padStart(2, "0")), el("h3", "", f.title), el("p", "", f.text));
        g.appendChild(c);
      });
      s.appendChild(g);
    });
  }

  if (p.workflow && p.workflow.length) {
    section("How it works", (s) => {
      const ol = el("ol", "steps");
      p.workflow.forEach((w, i) => {
        const li = el("li", "reveal");
        const body = el("div");
        add(body, el("h3", "", w.title), el("p", "", w.text));
        add(li, el("span", "step-num mono", String(i + 1).padStart(2, "0")), body);
        ol.appendChild(li);
      });
      s.appendChild(ol);
    });
  }

  if (p.highlights && p.highlights.length) {
    section("Technical highlights", (s) => {
      const ul = el("ul", "highlights reveal");
      p.highlights.forEach((h) => ul.appendChild(el("li", "", h)));
      s.appendChild(ul);
    });
  }

  // ---- Prev / next ----
  const i = order.indexOf(slug);
  const prev = data[order[(i - 1 + order.length) % order.length]];
  const next = data[order[(i + 1) % order.length]];
  const nav = el("section", "proj-section container");
  const grid = el("nav", "proj-nav reveal");
  grid.setAttribute("aria-label", "More projects");
  const link = (proj, label, cls) => {
    const a = el("a", "card " + cls);
    a.href = `project.html?p=${proj.slug}`;
    add(a, el("span", "mono", label), el("strong", "", proj.title));
    return a;
  };
  add(grid, link(prev, "← Previous", "prev"), link(next, "Next →", "next"));
  nav.appendChild(grid);
  const cta = el("p", "proj-cta reveal");
  const all = el("a", "btn btn-ghost", "All projects");
  all.href = "index.html#projects";
  const touch = el("a", "btn", "Get in touch");
  touch.href = "index.html#contact";
  add(cta, all, touch);
  nav.appendChild(cta);
  root.appendChild(nav);
})();
