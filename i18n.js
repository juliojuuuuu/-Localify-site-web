:root {
  --bg: #0b1020;
  --card: #17233f;
  --text: #e9f0ff;
  --muted: #a8b6d9;
  --accent: #7a6bff;
  --border: rgba(255,255,255,.12);
  --shadow: 0 18px 40px rgba(0,0,0,.35);
}
* { box-sizing: border-box; }
body {
  margin: 0;
  font-family: Inter, Segoe UI, Roboto, Arial, sans-serif;
  color: var(--text);
  background: radial-gradient(circle at 20% 0%, #1e2c55 0%, #0b1020 45%, #070b17 100%);
  line-height: 1.6;
}
.container { width: min(1100px, 92%); margin: 0 auto; }
.hero { padding: 72px 0 48px; }
.topbar { display:flex; justify-content:space-between; align-items:center; gap:12px; }
.badge {
  display:inline-block; padding:6px 12px; border-radius:999px;
  background:rgba(122,107,255,.18); border:1px solid rgba(122,107,255,.45);
  color:#dcd6ff; font-size:.82rem; letter-spacing:.03em; text-transform:uppercase;
}
.lang-switcher { display:flex; gap:8px; }
.lang-btn {
  border:1px solid var(--border); background:rgba(255,255,255,.03); color:var(--text);
  border-radius:10px; padding:6px 10px; cursor:pointer; font-weight:700;
}
.lang-btn.active { background: var(--accent); border-color: transparent; }
h1 { font-size: clamp(2rem, 4vw, 3rem); margin: 16px 0 10px; line-height:1.2; }
.subtitle { color:var(--muted); max-width:800px; font-size:1.05rem; }
.cta-row { display:flex; gap:12px; flex-wrap:wrap; margin-top:20px; }
.btn {
  text-decoration:none; padding:11px 16px; border-radius:12px; border:1px solid var(--border);
  color:var(--text); background:rgba(255,255,255,.03); font-weight:600; transition:.2s ease;
}
.btn.primary { background: linear-gradient(120deg, var(--accent), #5da8ff); border-color:transparent; }
.btn:hover { transform: translateY(-2px); }
section {
  margin:20px 0; background:linear-gradient(180deg, rgba(255,255,255,.03), rgba(255,255,255,.01));
  border:1px solid var(--border); border-radius:18px; box-shadow:var(--shadow); padding:24px;
}
h2 { margin-top: 0; }
.grid { display:grid; grid-template-columns:repeat(auto-fit, minmax(220px, 1fr)); gap:14px; }
.card { background:var(--card); border:1px solid var(--border); border-radius:14px; padding:14px; }
code, pre { font-family: ui-monospace, SFMono-Regular, Menlo, Consolas, monospace; }
pre {
  margin:8px 0 0; background:#0a1227; border:1px solid var(--border);
  border-radius:12px; padding:12px; overflow:auto; color:#dce6ff;
}
.steps li { margin-bottom:8px; }
footer { text-align:center; color:var(--muted); font-size:.9rem; padding:26px 0 50px; }
