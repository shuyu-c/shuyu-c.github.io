import assert from "node:assert/strict";
import { access, readFile } from "node:fs/promises";
import test from "node:test";

const root = new URL("../", import.meta.url);
const output = new URL("../dist/client/", import.meta.url);

test("exports the complete bilingual academic homepage", async () => {
  const html = await readFile(new URL("index.html", output), "utf8");

  assert.match(html, /<title>陈姝宇 Shuyu Chen · Privacy-Preserving Machine Learning<\/title>/);
  assert.match(html, /隐私保护机器学习研究者/);
  assert.match(html, /Research trajectory/);
  assert.match(html, /Bifrost: A Much Simpler Secure Two-Party Data Join Protocol/);
  assert.match(html, /MPCArbiter: Detect Numeric Error Vulnerabilities/);
  assert.match(html, /BlitzBough: An Efficient Privacy-Preserving Inference Framework/);
  assert.match(html, /Kona: An Efficient Privacy-Preservation Framework/);
  assert.match(html, /aria-pressed="true">中<\/button>/);
  assert.match(html, /aria-pressed="false">EN<\/button>/);
  assert.match(html, /https:\/\/shuyu-chen-person\.github\.io\/og\.png/);
});

test("ships all public paper PDFs and key visual assets", async () => {
  await Promise.all([
    access(new URL("papers/bifrost-vldb-2026.pdf", output)),
    access(new URL("papers/mpcarbiter-ccs-2026.pdf", output)),
    access(new URL("papers/blitzbough-waica-2026.pdf", output)),
    access(new URL("papers/kona-icml-2025.pdf", output)),
    access(new URL("portrait.jpg", output)),
    access(new URL("og.png", output)),
  ]);
});

test("does not publish private contact details or papers still under review", async () => {
  const [html, source] = await Promise.all([
    readFile(new URL("index.html", output), "utf8"),
    readFile(new URL("../app/page.tsx", import.meta.url), "utf8"),
  ]);
  const publicSurface = `${html}\n${source}`;

  assert.doesNotMatch(publicSurface, /17302279351/);
  assert.doesNotMatch(publicSurface, /yushuchenchenshuyu/);
  assert.doesNotMatch(publicSurface, /IDCloak|smpDJoin/);
  assert.doesNotMatch(publicSurface, /SPG-Adapt|AAAI 2027/);
  assert.match(publicSurface, /23110240005@m\.fudan\.edu\.cn/);
  assert.match(publicSurface, /github\.com\/stellasuc/);
  await access(new URL(".github/workflows/deploy.yml", root));
});
