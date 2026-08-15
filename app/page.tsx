"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

type Language = "zh" | "en";

const copy = {
  zh: {
    nav: { research: "研究", papers: "论文", work: "经历", about: "关于" },
    heroEyebrow: "复旦大学 · 数据科学博士生",
    heroTitle: "陈姝宇",
    heroRole: "隐私保护机器学习研究者",
    heroIntro:
      "我的研究关注如何让数据与模型在协作中保持私密，并将安全计算从可行的协议推进为高效、可部署的系统。",
    researchCta: "查看研究",
    papersCta: "阅读论文",
    current: "当前关注",
    currentText: "隐私保护大模型高效适配与安全协同推理",
    researchKicker: "Research trajectory",
    researchTitle: "一条持续演进的隐私计算研究路径",
    researchIntro:
      "从优化经典机器学习中的安全算子，到解决跨机构数据连接，再到保护大模型的微调与推理，研究问题始终围绕同一个目标：让隐私保护真正可用。",
    researchItems: [
      {
        years: "2021—2023",
        title: "传统机器学习隐私保护",
        text: "以安全多方计算为基础，优化 Key-Value 模型、量化神经网络与 KNN 等核心算子，降低隐私机器学习的计算与通信开销。",
      },
      {
        years: "2023—2026",
        title: "隐私集合求交与安全数据连接",
        text: "面向跨机构数据协作，研究 PSI 与安全数据连接协议，在隐藏用户标识和私有特征的同时完成高效数据匹配。",
      },
      {
        years: "2025—至今",
        title: "隐私保护大模型",
        text: "探索安全软提示生成、查询感知隐私掩码与 TEE–GPU 协同推理，让大模型适配兼顾隐私、精度与系统效率。",
      },
    ],
    papersKicker: "Selected publications",
    papersTitle: "已发表论文",
    papersIntro: "PDF 均来自复旦大学数据安全与治理实验室公开论文页面。",
    pdf: "查看 PDF",
    firstAuthor: "一作",
    papers: [
      {
        venue: "VLDB 2026 · CCF A",
        title: "Bifrost: A Much Simpler Secure Two-Party Data Join Protocol for Secure Data Analytics",
        authors: "Shuyu Chen, Mingxun Zhou, Haoyu Niu, Guopeng Lin, Weili Han",
        note: "高效安全两方数据连接协议；相较 SOTA 最高提速 22.3×，通信量降低 84.2%–88.9%。",
        href: "/papers/bifrost-vldb-2026.pdf",
        first: true,
      },
      {
        venue: "CCS 2026 · CCF A",
        title: "MPCArbiter: Detect Numeric Error Vulnerabilities in MPC Implementations via Distribution-Aware Differential Oracle",
        authors: "Guopeng Lin, Zhengting Jin, Shuyu Chen, Jingwei Pu, Zheng Qu, Jiaheng Zhang, Weili Han",
        note: "利用分布感知差分预言机，检测安全多方计算实现中易被随机截断噪声掩盖的数值错误漏洞。",
        href: "/papers/mpcarbiter-ccs-2026.pdf",
        first: false,
      },
      {
        venue: "WAICA 2026",
        title: "BlitzBough: An Efficient Privacy-Preserving Inference Framework for Decision Trees by Communication Optimization",
        authors: "Guopeng Lin, Yixin Tu, Jingwei Pu, Zheng Qu, Shuyu Chen, Weili Han",
        note: "通过通信优化提升决策树隐私推理效率。",
        href: "/papers/blitzbough-waica-2026.pdf",
        first: false,
      },
      {
        venue: "ICML 2025 · CCF A",
        title: "Kona: An Efficient Privacy-Preservation Framework for KNN Classification by Communication Optimization",
        authors: "Guopeng Lin, Ruisheng Zhou, Shuyu Chen, Weili Han, Jin Tan, Wenjing Fang, Lei Wang, Tao Wei",
        note: "面向隐私保护 KNN 分类的通信优化框架。",
        href: "/papers/kona-icml-2025.pdf",
        first: false,
      },
    ],
    workKicker: "Selected work",
    workTitle: "代表性研究与工程经历",
    workItems: [
      {
        date: "2025.10—至今",
        title: "大模型隐私保护高效微调",
        partner: "字节跳动合作项目",
        text: "设计约 2M 参数的软提示生成器，以单次安全前向推理替代逐数据集迭代微调；在保持任务精度的同时，将通信与计算开销降低 1–2 个数量级。",
      },
      {
        date: "2025.01—2026.03",
        title: "隐私集合求交与安全数据连接",
        partner: "联通、华为合作项目",
        text: "设计高性能跨机构安全数据连接协议，并推进至联通对账系统部署；下游安全分析最高加速 2.8×、通信减少 73.1%。",
      },
      {
        date: "2023.09—至今",
        title: "隐私保护机器学习框架 FudanMPL",
        partner: "复旦大学数据安全与治理实验室",
        text: "构建对话式隐私计算 Agent、PSI 编译器与虚拟机，并基于 Shamir 秘密共享重构神经网络训练框架。",
      },
      {
        date: "2021.11—2023.08",
        title: "隐私保护机器学习",
        partner: "蚂蚁合作项目",
        text: "设计并实现安全 Key-Value 与量化神经网络高效算子，安全量化神经网络模型相较 SOTA 提速 4.1–10.1×。",
      },
    ],
    aboutKicker: "Background",
    aboutTitle: "教育、实践与学术服务",
    education: "教育经历",
    educationItems: [
      ["复旦大学", "数据科学 · 硕博连读", "2021—至今"],
      ["天津大学", "软件工程 · 本科", "2017—2021"],
    ],
    experience: "实践与服务",
    experienceItems: [
      "Microsoft · 软件开发工程师实习生（2020）",
      "IEEE TIFS、IEEE TDSC 审稿人",
      "参与国家重点研发计划、国家密码科学基金重点项目与国家自然科学基金项目",
    ],
    honors: "部分荣誉",
    honorItems: ["国家奖学金（2018、2019、2020）", "复旦大学学业奖学金二等奖（2022、2024）", "天津大学智能与计算学部杰出青年提名奖（2021）"],
    footerTitle: "研究合作与交流",
    footerText: "欢迎围绕隐私计算、安全数据协作与大模型隐私保护交流。",
    email: "发送邮件",
    github: "GitHub",
    copyright: "陈姝宇 · 上海",
  },
  en: {
    nav: { research: "Research", papers: "Papers", work: "Experience", about: "About" },
    heroEyebrow: "Ph.D. Candidate in Data Science · Fudan University",
    heroTitle: "Shuyu Chen",
    heroRole: "Privacy-Preserving Machine Learning Researcher",
    heroIntro:
      "I study how data and models can collaborate without giving up privacy, turning secure computation from feasible protocols into efficient, deployable systems.",
    researchCta: "Explore research",
    papersCta: "Read papers",
    current: "Current focus",
    currentText: "Efficient private LLM adaptation and secure collaborative inference",
    researchKicker: "Research trajectory",
    researchTitle: "A continuous path through private computation",
    researchIntro:
      "From secure operators for classical machine learning, to cross-organization data joins, and now private LLM adaptation and inference—each stage advances the same goal: making privacy practical.",
    researchItems: [
      {
        years: "2021—2023",
        title: "Private classical machine learning",
        text: "Optimizing secure operators for key-value models, quantized neural networks, and KNN to reduce computation and communication costs in privacy-preserving ML.",
      },
      {
        years: "2023—2026",
        title: "Private set intersection & secure data joins",
        text: "Designing PSI and secure data-join protocols for cross-organization collaboration, matching records efficiently while hiding identifiers and private features.",
      },
      {
        years: "2025—present",
        title: "Privacy-preserving LLMs",
        text: "Exploring secure soft-prompt generation, query-aware privacy masking, and TEE–GPU collaborative inference to balance privacy, utility, and system efficiency.",
      },
    ],
    papersKicker: "Selected publications",
    papersTitle: "Published work",
    papersIntro: "PDFs are provided through the public publication page of Fudan University's Data Security and Governance Lab.",
    pdf: "View PDF",
    firstAuthor: "First author",
    papers: [
      {
        venue: "VLDB 2026 · CCF A",
        title: "Bifrost: A Much Simpler Secure Two-Party Data Join Protocol for Secure Data Analytics",
        authors: "Shuyu Chen, Mingxun Zhou, Haoyu Niu, Guopeng Lin, Weili Han",
        note: "A simpler secure two-party data join protocol, reaching up to 22.3× speedup and 84.2%–88.9% less communication than the state of the art.",
        href: "/papers/bifrost-vldb-2026.pdf",
        first: true,
      },
      {
        venue: "CCS 2026 · CCF A",
        title: "MPCArbiter: Detect Numeric Error Vulnerabilities in MPC Implementations via Distribution-Aware Differential Oracle",
        authors: "Guopeng Lin, Zhengting Jin, Shuyu Chen, Jingwei Pu, Zheng Qu, Jiaheng Zhang, Weili Han",
        note: "A distribution-aware differential oracle for detecting numeric errors in MPC implementations that are easily masked by probabilistic truncation noise.",
        href: "/papers/mpcarbiter-ccs-2026.pdf",
        first: false,
      },
      {
        venue: "WAICA 2026",
        title: "BlitzBough: An Efficient Privacy-Preserving Inference Framework for Decision Trees by Communication Optimization",
        authors: "Guopeng Lin, Yixin Tu, Jingwei Pu, Zheng Qu, Shuyu Chen, Weili Han",
        note: "A communication-optimized framework for efficient privacy-preserving decision-tree inference.",
        href: "/papers/blitzbough-waica-2026.pdf",
        first: false,
      },
      {
        venue: "ICML 2025 · CCF A",
        title: "Kona: An Efficient Privacy-Preservation Framework for KNN Classification by Communication Optimization",
        authors: "Guopeng Lin, Ruisheng Zhou, Shuyu Chen, Weili Han, Jin Tan, Wenjing Fang, Lei Wang, Tao Wei",
        note: "A communication-optimized framework for privacy-preserving KNN classification.",
        href: "/papers/kona-icml-2025.pdf",
        first: false,
      },
    ],
    workKicker: "Selected work",
    workTitle: "Research and engineering highlights",
    workItems: [
      {
        date: "2025.10—present",
        title: "Efficient privacy-preserving LLM adaptation",
        partner: "ByteDance collaboration",
        text: "Designing a ~2M-parameter soft-prompt generator that replaces iterative per-dataset tuning with a single secure forward pass, reducing communication and computation by 1–2 orders of magnitude while preserving accuracy.",
      },
      {
        date: "2025.01—2026.03",
        title: "Private set intersection and secure data joins",
        partner: "China Unicom & Huawei collaborations",
        text: "Building high-performance secure data-join protocols for cross-organization collaboration and deployment in a China Unicom reconciliation system; up to 2.8× faster downstream analytics with 73.1% less communication.",
      },
      {
        date: "2023.09—present",
        title: "FudanMPL privacy-preserving ML framework",
        partner: "Data Security and Governance Lab",
        text: "Developing a conversational privacy-computing agent, a PSI compiler and virtual machine, and a neural-network training framework based on Shamir secret sharing.",
      },
      {
        date: "2021.11—2023.08",
        title: "Privacy-preserving machine learning",
        partner: "Ant Group collaboration",
        text: "Designing and implementing secure operators for key-value and quantized neural-network models, accelerating secure quantized inference by 4.1–10.1× over prior work.",
      },
    ],
    aboutKicker: "Background",
    aboutTitle: "Education, practice, and academic service",
    education: "Education",
    educationItems: [
      ["Fudan University", "Data Science · M.S./Ph.D. track", "2021—present"],
      ["Tianjin University", "Software Engineering · B.Eng.", "2017—2021"],
    ],
    experience: "Practice & service",
    experienceItems: [
      "Microsoft · Software Engineering Intern (2020)",
      "Reviewer for IEEE TIFS and IEEE TDSC",
      "Research contributor to national programs in secure multi-party learning, cryptography, and data governance",
    ],
    honors: "Selected honors",
    honorItems: ["National Scholarship (2018, 2019, 2020)", "Fudan University Academic Scholarship, Second Prize (2022, 2024)", "Outstanding Young Scholar Nominee, Tianjin University (2021)"],
    footerTitle: "Research and collaboration",
    footerText: "I welcome conversations around private computation, secure data collaboration, and privacy-preserving LLMs.",
    email: "Email me",
    github: "GitHub",
    copyright: "Shuyu Chen · Shanghai",
  },
};

function HighlightName({ authors }: { authors: string }) {
  const parts = authors.split("Shuyu Chen");
  return (
    <>
      {parts[0]}
      <strong>Shuyu Chen</strong>
      {parts[1]}
    </>
  );
}

export default function Home() {
  const [language, setLanguage] = useState<Language>("zh");
  const t = copy[language];

  useEffect(() => {
    document.documentElement.lang = language === "zh" ? "zh-CN" : "en";
  }, [language]);

  return (
    <main>
      <header className="site-header">
        <a className="wordmark" href="#top" aria-label="Shuyu Chen home">
          {language === "zh" ? "陈姝宇" : "Shuyu Chen"}<span> / Fudan</span>
        </a>
        <nav aria-label="Primary navigation">
          <a href="#research">{t.nav.research}</a>
          <a href="#papers">{t.nav.papers}</a>
          <a href="#work">{t.nav.work}</a>
          <a href="#about">{t.nav.about}</a>
        </nav>
        <div className="language-switch" aria-label="Language">
          <button className={language === "zh" ? "active" : ""} onClick={() => setLanguage("zh")} aria-pressed={language === "zh"}>中</button>
          <span>/</span>
          <button className={language === "en" ? "active" : ""} onClick={() => setLanguage("en")} aria-pressed={language === "en"}>EN</button>
        </div>
      </header>

      <section className="hero" id="top">
        <div className="hero-copy">
          <p className="eyebrow">{t.heroEyebrow}</p>
          <h1>{t.heroTitle}</h1>
          <p className="hero-role">{t.heroRole}</p>
          <p className="hero-intro">{t.heroIntro}</p>
          <div className="hero-actions">
            <a className="primary-link" href="#research">{t.researchCta}<span aria-hidden="true">↘</span></a>
            <a className="text-link" href="#papers">{t.papersCta}<span aria-hidden="true">→</span></a>
          </div>
        </div>
        <div className="portrait-wrap">
          <div className="portrait-frame">
            <Image
              src="/portrait.jpg"
              alt={language === "zh" ? "陈姝宇肖像" : "Portrait of Shuyu Chen"}
              width={1080}
              height={1080}
              priority
            />
          </div>
          <div className="current-focus">
            <span>{t.current}</span>
            <p>{t.currentText}</p>
          </div>
        </div>
      </section>

      <section className="section research-section" id="research">
        <div className="section-heading">
          <p className="kicker">{t.researchKicker}</p>
          <h2>{t.researchTitle}</h2>
          <p>{t.researchIntro}</p>
        </div>
        <div className="research-path">
          {t.researchItems.map((item, index) => (
            <article className="research-step" key={item.title}>
              <div className="step-top"><span>0{index + 1}</span><time>{item.years}</time></div>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section papers-section" id="papers">
        <div className="section-heading papers-heading">
          <div>
            <p className="kicker">{t.papersKicker}</p>
            <h2>{t.papersTitle}</h2>
          </div>
          <p>{t.papersIntro}</p>
        </div>
        <div className="paper-list">
          {t.papers.map((paper, index) => (
            <article className="paper" key={paper.title}>
              <div className="paper-index">{String(index + 1).padStart(2, "0")}</div>
              <div className="paper-main">
                <div className="paper-meta"><span>{paper.venue}</span>{paper.first && <em>{t.firstAuthor}</em>}</div>
                <h3>{paper.title}</h3>
                <p className="authors"><HighlightName authors={paper.authors} /></p>
                <p className="paper-note">{paper.note}</p>
              </div>
              <a className="pdf-link" href={paper.href} target="_blank" rel="noreferrer" aria-label={`${t.pdf}: ${paper.title}`}>
                <span>{t.pdf}</span><span aria-hidden="true">↗</span>
              </a>
            </article>
          ))}
        </div>
      </section>

      <section className="section work-section" id="work">
        <div className="section-heading compact-heading">
          <p className="kicker">{t.workKicker}</p>
          <h2>{t.workTitle}</h2>
        </div>
        <div className="work-list">
          {t.workItems.map((item) => (
            <article className="work-item" key={item.title}>
              <time>{item.date}</time>
              <div>
                <h3>{item.title}</h3>
                <p className="partner">{item.partner}</p>
              </div>
              <p>{item.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section about-section" id="about">
        <div className="section-heading compact-heading">
          <p className="kicker">{t.aboutKicker}</p>
          <h2>{t.aboutTitle}</h2>
        </div>
        <div className="about-grid">
          <div>
            <h3>{t.education}</h3>
            {t.educationItems.map(([school, degree, years]) => (
              <div className="education-item" key={school}>
                <div><strong>{school}</strong><span>{degree}</span></div><time>{years}</time>
              </div>
            ))}
          </div>
          <div>
            <h3>{t.experience}</h3>
            <ul>{t.experienceItems.map((item) => <li key={item}>{item}</li>)}</ul>
          </div>
          <div>
            <h3>{t.honors}</h3>
            <ul>{t.honorItems.map((item) => <li key={item}>{item}</li>)}</ul>
          </div>
        </div>
      </section>

      <footer>
        <div className="footer-main">
          <p className="kicker">Contact</p>
          <h2>{t.footerTitle}</h2>
          <p>{t.footerText}</p>
          <div className="footer-links">
            <a href="mailto:23110240005@m.fudan.edu.cn">{t.email}<span>↗</span></a>
            <a href="https://github.com/stellasuc" target="_blank" rel="noreferrer">{t.github}<span>↗</span></a>
          </div>
        </div>
        <div className="footer-bottom"><span>© 2026 {t.copyright}</span><a href="#top">↑ Top</a></div>
      </footer>
    </main>
  );
}
