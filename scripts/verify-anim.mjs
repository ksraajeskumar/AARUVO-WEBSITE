import { chromium } from "playwright";

const browser = await chromium.launch({
  args: ["--use-angle=swiftshader", "--enable-unsafe-swiftshader", "--ignore-gpu-blocklist"],
});
const page = await browser.newPage({ viewport: { width: 1440, height: 800 } });
await page.goto("http://localhost:3000", { waitUntil: "networkidle" });
await page.waitForTimeout(1500);

const snap = () =>
  page.evaluate(() =>
    [...document.querySelectorAll(".art-layer")].map((el) => {
      const cs = getComputedStyle(el);
      return {
        cls: el.className.replace("art-layer ", ""),
        name: cs.animationName,
        dur: cs.animationDuration,
        play: cs.animationPlayState,
        t: cs.transform,
        filter: getComputedStyle(el.firstElementChild).filter,
      };
    })
  );

const a = await snap();
await page.waitForTimeout(3000);
const b = await snap();

console.log("LAYER              ANIM          DUR    STATE     BLUR        MOVED");
a.forEach((l, i) => {
  const moved = l.t !== b[i].t;
  console.log(
    `${l.cls.padEnd(18)} ${l.name.padEnd(13)} ${l.dur.padEnd(6)} ${l.play.padEnd(9)} ${l.filter.padEnd(11)} ${moved ? "yes" : "NO"}`
  );
});

// parallax: wrapper transforms should differ between two pointer positions
const wrap = () =>
  page.evaluate(() =>
    [...document.querySelectorAll(".hero-artwork .absolute.inset-0")]
      .filter((el) => el.querySelector(":scope > .art-layer"))
      .map((el) => getComputedStyle(el).transform)
  );
await page.mouse.move(100, 100);
await page.waitForTimeout(900);
const p1 = await wrap();
await page.mouse.move(1340, 700);
await page.waitForTimeout(900);
const p2 = await wrap();
const shifts = p1.map((t, i) => (t !== p2[i] ? "yes" : "NO"));
console.log("\nparallax per layer:", shifts.join(" "));
console.log("distinct offsets  :", new Set(p2).size, "of", p2.length);

// scroll
const h = await page.evaluate(() => [document.body.scrollHeight, window.innerHeight]);
console.log("\npage height / viewport:", h.join(" / "));
await page.evaluate(() => {
  const sp = document.createElement("div");
  sp.style.height = "1200px";
  sp.id = "scroll-probe";
  document.body.appendChild(sp);
});
await page.waitForTimeout(300);
const s0 = await page.evaluate(() => getComputedStyle(document.querySelector(".hero-artwork > div")).transform);
await page.evaluate(() => window.scrollTo(0, 400));
await page.waitForTimeout(900);
const s1 = await page.evaluate(() => getComputedStyle(document.querySelector(".hero-artwork > div")).transform);
console.log("scroll transform changed:", s0 !== s1 ? "yes" : "NO");
console.log("  before:", s0, "\n  after :", s1);

await browser.close();
