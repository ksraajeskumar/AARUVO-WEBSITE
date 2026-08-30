import { chromium } from "playwright";

const browser = await chromium.launch({
  args: [
    "--use-angle=swiftshader",
    "--enable-unsafe-swiftshader",
    "--ignore-gpu-blocklist",
    "--enable-webgl",
  ],
});
const page = await browser.newPage({
  viewport: { width: Number(process.argv[3]) || 1920, height: Number(process.argv[4]) || 840 },
  deviceScaleFactor: 1,
});
page.on("console", (m) => console.log("[console]", m.type(), m.text()));
page.on("pageerror", (e) => console.log("[pageerror]", e.message));
await page.goto("http://localhost:3000", { waitUntil: "networkidle" });
const scrollY = Number(process.argv[5]) || 0;
if (scrollY) {
  await page.evaluate((y) => window.scrollTo(0, y), scrollY);
}
await page.waitForTimeout(3500);
const gl = await page.evaluate(() => {
  const c = document.createElement("canvas");
  return !!c.getContext("webgl");
});
console.log("webgl available:", gl);
await page.screenshot({ path: process.argv[2] || "shot.png", timeout: 300000 });
await browser.close();
