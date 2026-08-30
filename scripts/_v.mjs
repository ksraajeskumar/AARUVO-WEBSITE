import { chromium } from "playwright";
const b = await chromium.launch();
const p = await b.newPage({ viewport: { width: 1600, height: 1000 } });
const bad = [];
p.on("pageerror", (e) => bad.push("ERR " + e.message.slice(0, 80)));
p.on("console", (m) => m.type() === "error" && bad.push(m.text().slice(0, 80)));
p.on("response", (r) => r.status() >= 400 && /_next\/image|\.png|\.svg/.test(r.url()) && bad.push(r.status() + " " + r.url().slice(-46)));

for (const [n, u] of [["home","/"],["what-we-do","/what-we-do"],["who-we-are","/who-we-are"],["partner","/become-a-partner"],["contact","/contact"]]) {
  await p.goto("http://localhost:3000" + u, { waitUntil: "networkidle" });
  for (let y = 0; y < 12; y++) { await p.mouse.wheel(0, 1600); await p.waitForTimeout(230); }
  await p.waitForTimeout(1200);
  const r = await p.evaluate(() => ({
    footers: document.querySelectorAll("footer").length,
    sitemapCols: [...document.querySelectorAll("*")].filter(e => e.children.length === 0 && e.textContent.trim() === "Products & pricing").length,
    pngs: [...document.querySelectorAll("img")].filter(i => /aaruvo-[a-z]+\.png/.test(i.src)).length,
    svgs: [...document.querySelectorAll("img")].filter(i => /aaruvo-[a-z]+\.svg/.test(i.src)).length,
    badges: [...document.querySelectorAll("img[alt='AARUVO']")].length,
  }));
  console.log(n.padEnd(12), JSON.stringify(r));
}
console.log("issues:", bad.length ? [...new Set(bad)].slice(0, 5).join(" | ") : "none");
await b.close();
