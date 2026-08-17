import assert from "node:assert/strict";
import { access, readFile } from "node:fs/promises";
import test from "node:test";

const root = new URL("../", import.meta.url);
const output = new URL("../dist/client/", import.meta.url);

test("exports the updated bilingual academic homepage", async () => {
  const html = await readFile(new URL("index.html", output), "utf8");

  assert.match(html, /<title>陈姝宇 Shuyu Chen · Homepage<\/title>/);
  assert.match(html, /2023 级数据科学博士研究生/);
  assert.match(html, /硕转博/);
  assert.match(html, /韩伟力教授/);
  assert.match(html, /2021 年获得天津大学软件工程学士学位/);
  assert.match(html, /专业排名前 2%/);
  assert.match(html, /基于安全多方计算的隐私保护数据对齐/);
  assert.match(html, /我的研究方向是<strong>人工智能数据安全<\/strong>/);
  assert.match(html, /隐私保护大模型微调/);
  assert.match(html, /相关成果发表于 VLDB、ACM CCS、ICML 等顶会/);
  assert.match(html, /TIFS，CCF A/);
  assert.match(html, /TDSC，CCF A/);
  assert.match(html, /href="#honors"/);
  assert.match(html, /href="#publications"/);
  assert.match(html, /href="#education"/);
  assert.match(html, /Microsoft/);
  assert.match(html, /Bifrost: A Much Simpler Secure Two-Party Data Join Protocol/);
  assert.match(html, /MPCArbiter: Detect Numeric Error Vulnerabilities/);
  assert.match(html, /BlitzBough: An Efficient Privacy-Preserving Inference Framework/);
  assert.match(html, /Kona: An Efficient Privacy-Preservation Framework/);
  assert.match(html, /aria-pressed="true">中<\/button>/);
  assert.match(html, /aria-pressed="false">EN<\/button>/);
  assert.match(html, /https:\/\/shuyu-c\.github\.io\/og\.png/);
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

test("removes superseded profile and project content", async () => {
  const [html, source] = await Promise.all([
    readFile(new URL("index.html", output), "utf8"),
    readFile(new URL("../app/page.tsx", import.meta.url), "utf8"),
  ]);
  const publicSurface = `${html}\n${source}`;

  assert.doesNotMatch(publicSurface, /17302279351/);
  assert.doesNotMatch(publicSurface, /yushuchenchenshuyu/);
  assert.doesNotMatch(publicSurface, /一条持续演进的隐私计算研究路径/);
  assert.doesNotMatch(publicSurface, /人工智能数据安全研究者/);
  assert.doesNotMatch(publicSurface, /XingQi|星启|上海人工智能实验室|Shanghai AI Lab/);
  assert.doesNotMatch(publicSurface, /metric-strip/);
  assert.doesNotMatch(publicSurface, /项目经历|Research projects/);
  assert.doesNotMatch(publicSurface, /大模型隐私保护高效微调|面向 6G 多智能体/);
  assert.doesNotMatch(publicSurface, /GPA 3\.83|3\.83 \/ 4\.0/);
  assert.doesNotMatch(publicSurface, /我于 2026 年获得|received my Ph\.D\./);
  assert.doesNotMatch(publicSurface, /数值错误漏洞检测|numeric-error vulnerability detection/);
  assert.doesNotMatch(publicSurface, /2027|预计.*毕业|expected.*graduat/i);
  assert.match(publicSurface, /📝/);
  assert.match(publicSurface, /💼/);
  assert.match(publicSurface, /📖/);
  assert.match(publicSurface, /🎖️/);
  assert.match(publicSurface, /chenshuyu21@m\.fudan\.edu\.cn/);
  assert.match(publicSurface, /github\.com\/stellasuc/);
  await access(new URL(".github/workflows/deploy.yml", root));
});
