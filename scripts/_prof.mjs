import { chromium } from "playwright";
const b = await chromium.launch();
const p = await (await b.newContext({ viewport: { width: 1440, height: 900 } })).newPage();

const rsc = [];
p.on("request", r => { if (r.url().includes("_rsc=")) rsc.push({ u: r.url().split("?")[0].replace("http://localhost:3100",""), t: Date.now() }); });

await p.goto("http://localhost:3100/", { waitUntil: "domcontentloaded" });
await p.waitForTimeout(4000);
console.log("prefetch RSC requests seen while idle on home:", rsc.length, rsc.map(r => r.u).join(", ") || "(none)");

// long-task + render profile across the click
await p.evaluate(() => {
  window.__lt = [];
  new PerformanceObserver(l => l.getEntries().forEach(e => window.__lt.push(Math.round(e.duration))))
    .observe({ entryTypes: ["longtask"] });
});
const t0 = Date.now();
await p.click(`header nav a:has-text("What we do")`);
await p.waitForFunction(() => location.pathname === "/what-we-do", null, { timeout: 30000 });
const tUrl = Date.now() - t0;
await p.waitForTimeout(2500);
const lt = await p.evaluate(() => window.__lt);
console.log(`click -> url change: ${tUrl}ms`);
console.log(`long tasks after click (ms): ${lt.join(", ")}  | total blocking ${lt.reduce((a,c)=>a+c,0)}ms`);
console.log("DOM nodes on /what-we-do:", await p.evaluate(() => document.querySelectorAll("*").length));
await p.goto("http://localhost:3100/", { waitUntil: "domcontentloaded" });
await p.waitForTimeout(1500);
console.log("DOM nodes on /:", await p.evaluate(() => document.querySelectorAll("*").length));
await b.close();
