import { chromium } from "playwright";
const b = await chromium.launch();
const p = await (await b.newContext({ viewport: { width: 1440, height: 900 } })).newPage();

const R = [["/what-we-do","What we do"],["/who-we-are","Who we are"],["/become-a-partner","Become a partner"],["/contact","Contact us"]];

// warm every route first so dev-compile is out of the picture on pass 2
console.log("--- warming (first compile) ---");
for (const [u] of [["/"], ...R]) {
  const t0 = Date.now();
  await p.goto("http://localhost:3000" + u, { waitUntil: "domcontentloaded" });
  console.log(`${u.padEnd(20)} cold goto ${Date.now() - t0}ms`);
}
await p.goto("http://localhost:3000/", { waitUntil: "domcontentloaded" });
await p.waitForTimeout(3500);

console.log("\n--- warm client-side nav (click header link) ---");
for (const [u, label] of R) {
  await p.goto("http://localhost:3000/", { waitUntil: "domcontentloaded" });
  await p.waitForTimeout(700);
  const t0 = Date.now();
  await p.click(`header nav a:has-text("${label}")`);
  await p.waitForFunction((path) => location.pathname === path, u, { timeout: 30000 });
  const tUrl = Date.now() - t0;
  await p.waitForFunction(() => document.body.scrollHeight > 2000, null, { timeout: 30000 });
  console.log(`${label.padEnd(18)} url:${String(tUrl).padStart(5)}ms  content:${String(Date.now() - t0).padStart(5)}ms`);
}
await b.close();
