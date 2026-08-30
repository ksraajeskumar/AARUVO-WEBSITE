import { chromium } from "playwright";
const b = await chromium.launch();
const p = await (await b.newContext({ viewport: { width: 1440, height: 900 } })).newPage();
for (const u of ["/", "/what-we-do", "/who-we-are"]) await p.goto("http://localhost:3000" + u, { waitUntil: "domcontentloaded" });
await p.goto("http://localhost:3000/", { waitUntil: "domcontentloaded" });
await p.waitForTimeout(3500);

const reqs = [];
p.on("request", r => reqs.push({ url: r.url(), t: Date.now(), type: r.resourceType() }));
p.on("response", async r => {
  const q = reqs.find(x => x.url === r.url() && !x.done);
  if (q) { q.done = Date.now(); q.status = r.status(); try { q.size = (await r.body()).length; } catch { q.size = -1; } }
});

reqs.length = 0;
const t0 = Date.now();
await p.click(`header nav a:has-text("What we do")`);
await p.waitForFunction(() => location.pathname === "/what-we-do", null, { timeout: 30000 });
await p.waitForTimeout(500);
console.log(`total ${Date.now() - t0}ms, ${reqs.length} requests`);
reqs.filter(r => r.done).sort((a, b) => (b.done - b.t) - (a.done - a.t)).slice(0, 12)
  .forEach(r => console.log(`  ${String(r.done - r.t).padStart(5)}ms ${String(r.status).padStart(3)} ${String(r.size).padStart(8)}b ${r.type.padEnd(6)} ${r.url.replace("http://localhost:3000","").slice(0, 78)}`));
await b.close();
