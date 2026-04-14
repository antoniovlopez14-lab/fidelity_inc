/* ============================================================
   DEMO THEME SWITCHER — REMOVE THIS FILE BEFORE GOING LIVE
   
   HOW TO USE:
   1. Add this script to index.html and appointments.html:
      <script src="theme-switcher.js"></script>
   2. Place the <script> tag AFTER your existing scripts at
      the bottom of <body>, e.g.:
        <script src="translations.js"></script>
        <script src="script.js"></script>
        <script src="theme-switcher.js"></script>  ← ADD THIS
   
   HOW TO REMOVE AFTER DEMO:
   - Delete this file (theme-switcher.js)
   - Remove the <script src="theme-switcher.js"></script>
     line from index.html and appointments.html
   - That's it! No other files are changed.
   ============================================================ */

(function () {

  /* ----------------------------------------------------------
     THEME DEFINITIONS
     Each theme overrides the main CSS color variables used
     across styles.css and appointments.css.
     Add or edit themes here if you want more options.
  ---------------------------------------------------------- */
  const themes = [
    {
      name: "Original",
      emoji: "🏠",
      colors: {
        "--primary":       "#0a2f44",   // dark navy — header, text
        "--accent":        "#2c7a4d",   // green — buttons, icons
        "--accent2":       "#c75c2e",   // orange-red — secondary button
        "--header-bg":     "#ffda08",   // yellow — top nav bar
        "--hero-bg1":      "#092636",
        "--hero-bg2":      "#092636",
        "--btn-primary":   "#2c7a4d",
        "--btn-secondary": "#c75c2e",
        "--btn-submit":    "#0a2f44",
        "--footer-bg":     "#0a1c2a",
        "--link-color":    "#2c7a4d",
        "--h2-bar":        "#c75c2e",
      }
    },
    {
      name: "Midnight Blue",
      emoji: "🌙",
      colors: {
        "--primary":       "#0d1b2a",
        "--accent":        "#1a73e8",
        "--accent2":       "#e84855",
        "--header-bg":     "#0d1b2a",
        "--hero-bg1":      "#0d1b2a",
        "--hero-bg2":      "#1a3a5c",
        "--btn-primary":   "#1a73e8",
        "--btn-secondary": "#e84855",
        "--btn-submit":    "#0d1b2a",
        "--footer-bg":     "#060d14",
        "--link-color":    "#1a73e8",
        "--h2-bar":        "#1a73e8",
      }
    },
    {
      name: "Forest Green",
      emoji: "🌿",
      colors: {
        "--primary":       "#1a3d2b",
        "--accent":        "#3a7d44",
        "--accent2":       "#d4a017",
        "--header-bg":     "#1a3d2b",
        "--hero-bg1":      "#1a3d2b",
        "--hero-bg2":      "#2d6a4f",
        "--btn-primary":   "#3a7d44",
        "--btn-secondary": "#d4a017",
        "--btn-submit":    "#1a3d2b",
        "--footer-bg":     "#0f2418",
        "--link-color":    "#3a7d44",
        "--h2-bar":        "#d4a017",
      }
    },
    {
      name: "Classic Red",
      emoji: "🎩",
      colors: {
        "--primary":       "#1a0a0a",
        "--accent":        "#c0392b",
        "--accent2":       "#e67e22",
        "--header-bg":     "#1a0a0a",
        "--hero-bg1":      "#2c0b0b",
        "--hero-bg2":      "#1a0a0a",
        "--btn-primary":   "#c0392b",
        "--btn-secondary": "#e67e22",
        "--btn-submit":    "#1a0a0a",
        "--footer-bg":     "#0d0505",
        "--link-color":    "#c0392b",
        "--h2-bar":        "#c0392b",
      }
    },
    {
      name: "Slate & Gold",
      emoji: "✨",
      colors: {
        "--primary":       "#2c3e50",
        "--accent":        "#b8860b",
        "--accent2":       "#c0392b",
        "--header-bg":     "#2c3e50",
        "--hero-bg1":      "#1a252f",
        "--hero-bg2":      "#2c3e50",
        "--btn-primary":   "#b8860b",
        "--btn-secondary": "#c0392b",
        "--btn-submit":    "#2c3e50",
        "--footer-bg":     "#1a252f",
        "--link-color":    "#b8860b",
        "--h2-bar":        "#b8860b",
      }
    },
    {
      name: "Ocean Teal",
      emoji: "🌊",
      colors: {
        "--primary":       "#003d4d",
        "--accent":        "#00897b",
        "--accent2":       "#ff7043",
        "--header-bg":     "#003d4d",
        "--hero-bg1":      "#002b38",
        "--hero-bg2":      "#004d60",
        "--btn-primary":   "#00897b",
        "--btn-secondary": "#ff7043",
        "--btn-submit":    "#003d4d",
        "--footer-bg":     "#001f28",
        "--link-color":    "#00897b",
        "--h2-bar":        "#ff7043",
      }
    },
  ];

  /* ----------------------------------------------------------
     APPLY THEME
     Injects a <style> block that overrides the page colors.
     All original CSS files remain untouched.
  ---------------------------------------------------------- */
  let styleTag = null;

  function applyTheme(theme) {
    if (!styleTag) {
      styleTag = document.createElement("style");
      styleTag.id = "demo-theme-overrides";
      document.head.appendChild(styleTag);
    }

    const c = theme.colors;

    styleTag.textContent = `
      /* ── Auto-injected by theme-switcher.js (demo only) ── */

      /* Main nav bar */
      header { background: ${c["--header-bg"]} !important; }

      /* Hero gradient */
      .hero {
        background: linear-gradient(135deg, ${c["--hero-bg1"]} 0%, ${c["--hero-bg2"]} 100%) !important;
      }

      /* Primary button (Schedule Appointment, Upload, etc.) */
      .btn-primary { background: ${c["--btn-primary"]} !important; }
      .btn-primary:hover { background: ${c["--btn-primary"]}cc !important; }

      /* Secondary button */
      .btn-secondary { background: ${c["--btn-secondary"]} !important; }
      .btn-secondary:hover { background: ${c["--btn-secondary"]}cc !important; }

      /* Submit / dark button */
      .btn-submit { background: ${c["--btn-submit"]} !important; }
      .btn-submit:hover { background: ${c["--btn-submit"]}dd !important; }

      /* Service card icons */
      .service-card i { color: ${c["--accent"]} !important; }

      /* Cert list icons */
      .cert-list li i { color: ${c["--accent"]} !important; }

      /* Section heading underline bar */
      h2:after { background: ${c["--h2-bar"]} !important; }

      /* Links in hero contact */
      .hero-contact a { color: white !important; }

      /* Secure upload banner border */
      .secure-upload-banner { border-left-color: ${c["--accent"]} !important; }
      .secure-upload-banner i { color: ${c["--accent"]} !important; }

      /* Footer */
      footer { background: ${c["--footer-bg"]} !important; }

      /* Appointment page header */
      .appointment-header { background: ${c["--primary"]} !important; }

      /* Form focus rings */
      .contact-form input:focus,
      .contact-form textarea:focus,
      .form-group input:focus {
        border-color: ${c["--accent"]} !important;
        box-shadow: 0 0 0 3px ${c["--accent"]}33 !important;
      }

      /* Security footer icon color */
      .security-footer { color: ${c["--accent"]} !important; }

      /* Back-to-top button */
      .back-to-top { background: ${c["--accent"]} !important; }
      .back-to-top:hover { background: ${c["--accent"]}cc !important; }

      /* Book author text */
      .book-author { color: ${c["--accent2"]} !important; }

      /* Endorsement quote icon */
      .book-endorsements i { color: ${c["--accent2"]} !important; }

      /* Trust badge border */
      .trust-badge { border-left-color: ${c["--h2-bar"]} !important; }

      /* Nav links on dark headers */
      .appointment-header nav a,
      .appointment-header .back-home { color: white !important; }
    `;
  }

  /* ----------------------------------------------------------
     BUILD THE FLOATING PANEL UI
  ---------------------------------------------------------- */
  function buildPanel() {
    // Outer floating container
    const panel = document.createElement("div");
    panel.id = "demo-theme-panel";
    panel.style.cssText = `
      position: fixed;
      bottom: 80px;
      right: 20px;
      z-index: 99999;
      font-family: 'Inter', system-ui, sans-serif;
      display: flex;
      flex-direction: column;
      align-items: flex-end;
      gap: 8px;
    `;

    // Collapsed toggle button (always visible)
    const toggle = document.createElement("button");
    toggle.id = "demo-theme-toggle";
    toggle.title = "Toggle color theme picker (demo only)";
    toggle.innerHTML = "🎨 Themes";
    toggle.style.cssText = `
      background: #1e293b;
      color: white;
      border: none;
      padding: 10px 16px;
      border-radius: 50px;
      cursor: pointer;
      font-size: 13px;
      font-weight: 600;
      box-shadow: 0 4px 16px rgba(0,0,0,0.3);
      letter-spacing: 0.3px;
      display: flex;
      align-items: center;
      gap: 6px;
      transition: background 0.2s;
    `;
    toggle.onmouseenter = () => toggle.style.background = "#334155";
    toggle.onmouseleave = () => toggle.style.background = "#1e293b";

    // Theme card grid (hidden by default)
    const drawer = document.createElement("div");
    drawer.id = "demo-theme-drawer";
    drawer.style.cssText = `
      background: white;
      border-radius: 20px;
      box-shadow: 0 8px 32px rgba(0,0,0,0.18);
      padding: 16px;
      display: none;
      flex-direction: column;
      gap: 8px;
      min-width: 200px;
      border: 1px solid #e2e8f0;
    `;

    // Label at top of drawer
    const label = document.createElement("p");
    label.textContent = "🎨 Demo Color Themes";
    label.style.cssText = `
      font-size: 11px;
      font-weight: 700;
      text-transform: uppercase;
      letter-spacing: 1px;
      color: #94a3b8;
      margin: 0 0 4px 0;
    `;
    drawer.appendChild(label);

    // One button per theme
    themes.forEach((theme, i) => {
      const btn = document.createElement("button");
      btn.dataset.themeIndex = i;
      btn.innerHTML = `${theme.emoji} ${theme.name}`;
      btn.style.cssText = `
        background: #f8fafc;
        border: 2px solid #e2e8f0;
        border-radius: 12px;
        padding: 10px 14px;
        cursor: pointer;
        font-size: 13px;
        font-weight: 600;
        text-align: left;
        color: #1e293b;
        transition: all 0.15s;
        width: 100%;
      `;
      btn.onmouseenter = () => {
        btn.style.background = "#f0fdf4";
        btn.style.borderColor = "#86efac";
      };
      btn.onmouseleave = () => {
        const isActive = btn.classList.contains("active-theme");
        btn.style.background = isActive ? "#dcfce7" : "#f8fafc";
        btn.style.borderColor = isActive ? "#4ade80" : "#e2e8f0";
      };
      btn.addEventListener("click", () => {
        // Mark active
        drawer.querySelectorAll("button").forEach(b => {
          b.classList.remove("active-theme");
          b.style.background = "#f8fafc";
          b.style.borderColor = "#e2e8f0";
        });
        btn.classList.add("active-theme");
        btn.style.background = "#dcfce7";
        btn.style.borderColor = "#4ade80";

        applyTheme(themes[i]);
        // Update toggle label
        toggle.innerHTML = `🎨 ${theme.name}`;
      });

      // Pre-mark the first (Original) as active
      if (i === 0) {
        btn.classList.add("active-theme");
        btn.style.background = "#dcfce7";
        btn.style.borderColor = "#4ade80";
      }

      drawer.appendChild(btn);
    });

    // "DEMO ONLY" note at bottom
    const note = document.createElement("p");
    note.textContent = "⚠️ Remove theme-switcher.js before launch";
    note.style.cssText = `
      font-size: 10px;
      color: #f59e0b;
      margin: 4px 0 0;
      text-align: center;
      font-weight: 600;
    `;
    drawer.appendChild(note);

    // Toggle drawer open/close
    let isOpen = false;
    toggle.addEventListener("click", () => {
      isOpen = !isOpen;
      drawer.style.display = isOpen ? "flex" : "none";
    });

    panel.appendChild(drawer);
    panel.appendChild(toggle);
    document.body.appendChild(panel);
  }

  /* ----------------------------------------------------------
     INIT — wait for DOM then build the panel
  ---------------------------------------------------------- */
  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", buildPanel);
  } else {
    buildPanel();
  }

})();
/* ============================================================
   END OF DEMO THEME SWITCHER — REMOVE THIS FILE BEFORE LAUNCH
   ============================================================ */