import { chromium } from "playwright";
const b = await chromium.launch();
const p = await (await b.newContext({ viewport: { width: 1440, height: 900 } })).newPage();
const R = [["/what-we-do","What we do"],["/who-we-are","Who we are"],["/become-a-partner","Become a partner"],["/contact","Contact us"]];
for (const PORT of [3100, 3000]) {
  console.log(`\n===== ${PORT === 3100 ? "PRODUCTION" : "DEV"} (:${PORT}) =====`);
  await p.goto(`http://localhost:${PORT}/`, { waitUntil: "domcontentloaded" });
  await p.waitForTimeout(4000);
  for (const [u, label] of R) {
    await p.goto(`http://localhost:${PORT}/`, { waitUntil: "domcontentloaded" });
    await p.waitForTimeout(1500);           // give prefetch a chance
    const t0 = Date.now();
    await p.click(`header nav a:has-text("${label}")`);
    await p.waitForFunction((path) => location.pathname === path, u, { timeout: 30000 });
    const tUrl = Date.now() - t0;
    await p.waitForFunction(() => document.body.scrollHeight > 2000, null, { timeout: 30000 });
    console.log(`  ${label.padEnd(18)} url:${String(tUrl).padStart(5)}ms  content:${String(Date.now() - t0).padStart(5)}ms`);
  }
}
await b.close();
