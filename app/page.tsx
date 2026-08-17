"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

type Language = "zh" | "en";

const copy = {
  zh: {
    nav: { about: "关于", papers: "论文", experience: "经历", background: "背景", honors: "获奖" },
    aboutHeading: "关于我",
    profileInterests: "研究方向",
    profileLinks: { email: "邮箱", github: "GitHub" },
    heroEyebrow: "复旦大学 · 数据科学博士",
    heroTitle: "陈姝宇",
    current: "当前关注",
    currentText: "隐私保护大模型高效适配与多智能体安全协同",
    researchItems: ["隐私保护数据对齐", "隐私保护模型训练", "隐私保护模型推理"],
    papersKicker: "Selected publications",
    papersTitle: "论文成果",
    papersIntro: "围绕安全数据连接、MPC 实现安全与隐私保护机器学习，持续推进高性能、可部署的隐私计算研究。",
    pdf: "查看 PDF",
    firstAuthor: "一作",
    papers: [
      {
        venue: "VLDB 2026 · CCF A",
        title: "Bifrost: A Much Simpler Secure Two-Party Data Join Protocol for Secure Data Analytics",
        authors: "Shuyu Chen, Mingxun Zhou, Haoyu Niu, Guopeng Lin, Weili Han",
        note: "以轻量密码学原语与双映射优化构建高效两方安全数据连接协议，相较主流方案最高提速 22.3×，通信量降低 84.2%–88.9%。",
        href: "/papers/bifrost-vldb-2026.pdf",
        first: true,
      },
      {
        venue: "CCS 2026 · CCF A",
        title: "MPCArbiter: Detect Numeric Error Vulnerabilities in MPC Implementations via Distribution-Aware Differential Oracle",
        authors: "Guopeng Lin, Zhengting Jin, Shuyu Chen, Jingwei Pu, Zheng Qu, Jiaheng Zhang, Weili Han",
        note: "通过分布感知差分检验与 MPC 运算依赖图定位数值错误漏洞，在四个主流 MPC 框架中检出 10 类漏洞。",
        href: "/papers/mpcarbiter-ccs-2026.pdf",
        first: false,
      },
      {
        venue: "ICML 2025 · CCF A",
        title: "Kona: An Efficient Privacy-Preservation Framework for KNN Classification by Communication Optimization",
        authors: "Guopeng Lin, Ruisheng Zhou, Shuyu Chen, Weili Han, Jin Tan, Wenjing Fang, Lei Wang, Tao Wei",
        note: "基于欧几里得三元组与分治冒泡排序构建安全 KNN 分类框架；WAN 场景最高提速 232.6×。",
        href: "/papers/kona-icml-2025.pdf",
        first: false,
      },
      {
        venue: "WAICA 2026",
        title: "BlitzBough: An Efficient Privacy-Preserving Inference Framework for Decision Trees by Communication Optimization",
        authors: "Guopeng Lin, Yixin Tu, Jingwei Pu, Zheng Qu, Shuyu Chen, Weili Han",
        note: "通过矩阵分块向量点积优化隐私保护决策树推理，通信量最高缩减 35.1×，运行速度提升 8.2×。",
        href: "/papers/blitzbough-waica-2026.pdf",
        first: false,
      },
    ],
    experienceKicker: "Experience",
    experienceTitle: "经历",
    projectsTitle: "项目经历",
    internshipsTitle: "实习经历",
    projects: [
      {
        date: "2026.08—至今",
        title: "大模型隐私保护高效微调",
        partner: "字节跳动合作项目",
        text: "在 LLMaaS 场景下，软提示微调能够以较低成本实现冻结 LLM 的个性化适配，但用户私有数据与服务端模型参数的隐私保护会带来高昂的安全计算开销。为此，提出基于安全软提示生成的方法：服务端在公开数据集上本地训练 MPC 友好的软提示生成器；每次适配请求仅需通过该生成器执行一次安全推理，即可将用户的小规模无标注数据直接映射为有效软提示，使请求开销与基座 LLM 大小解耦。",
        result: "在 17 个基准上超越 SOTA 9.64 pp；最高实现 36,548× 加速、16,355× 通信降低。现有 SOTA 在 3.55 亿参数模型上需 34.7 小时，本方案在 Qwen3-8B 上 11 秒完成适配。",
      },
      {
        date: "2025.10—2026.07",
        title: "面向 6G 多智能体 A2A 通信的数据隐私保护",
        partner: "vivo 合作项目",
        text: "面向多个 6G Agent 协同访问用户数据、网络状态和服务资源时的隐私泄露风险，数据侧基于 PII 实体识别与任务意图分析实现自适应 PII 掩码，并设计最小化 A2A 上下文传递机制，仅向下游 Agent 提供子任务所需的最小任务指令。模型侧对数值任务采用 HE / MPC / PSI 实现密文计算，对自然语言任务采用协变混淆隐私推理。",
        result: "云端仅处理混淆数据，自然语言任务推理精度损失不超过 3.5%。",
      },
      {
        date: "2023.09—2025.09",
        title: "面向垂直数据场景的隐私保护数据对齐",
        partner: "中国联通、华为合作项目",
        text: "针对两方、多方和非平衡两方三类业务场景，设计三个无冗余数据对齐协议：Bifrost 基于轻量密码学原语与双映射优化，将两轮安全打乱压缩为一轮，最高提速 22.3×、通信降低 84.2%–88.9%；smpDJoin 通过分层并行通信拓扑支持任意数量参与方，通信与时间开销随参与方数量线性增长；Suda 基于多项式批量隐私信息检索避免冗余传输，通信降低 31.14–210.78×、最高提速 8.21×。",
        result: "在下游安全分析任务中，相比传统 PSI 方案最高提速 2.8×、通信量降低 73.1%；Bifrost 与 Suda 已部署至联通对账系统。",
      },
      {
        date: "2021.11—至今",
        title: "隐私保护机器学习开源框架 FudanMPL",
        partner: "复旦大学数据安全与治理实验室",
        text: "负责四类核心工作：开发可根据对话生成、编译和执行隐私计算任务的框架使用 Agent；完成 PSI 编译器指令与虚拟机底层算子；设计安全混合精度量化训练框架 MixQT，以非均匀位宽训练和无偏概率截断 / 份额转换缓解通信开销与低精度发散；设计 SecureKVM，以对数变换、多项式安全对数和矩阵折叠 / 随机排列解决键值模型定点数精度下溢并将查询通信复杂度降至 O(1)。",
        result: "PSI 技术协助上海市检察院发现 42 例违规社区矫正案例；MixQT 相较主流安全训练框架提速 4.1–10.1×；SecureKVM 全密文在线推理吞吐量达到 202 QPS。",
      },
      {
        date: "科研项目与标准",
        title: "国家级科研项目与公共数据开发利用标准",
        partner: "国家重点研发计划、国家密码科学基金重点项目、国家自然科学基金项目",
        text: "主导或参与项目申请书撰写、申请答辩、项目实施与结题等过程，并参与公共数据开发利用标准相关工作。",
        result: "承担从项目论证、技术研发到成果验收的完整科研流程。",
      },
    ],
    internships: [{
      date: "2020.06—2020.09",
      company: "Microsoft",
      role: "软件开发工程师实习生",
      text: "使用量化方法压缩树类回归模型，并完成与云平台的兼容适配；在精度损失低于 5% 的条件下，实现 3.3× 推理加速。",
    }],
    backgroundKicker: "Background",
    backgroundTitle: "教育与学术服务",
    education: "教育经历",
    educationItems: [
      ["复旦大学", "数据科学 · 博士", "2023.09—2026.06"],
      ["复旦大学", "计算机软件与理论 · 硕士", "2021.09—2023.06"],
      ["天津大学", "软件工程 · 本科（GPA 3.83 / 4.0，前 2%）", "2017.09—2021.07"],
    ],
    academicService: "学术服务",
    academicServiceItems: ["IEEE Transactions on Information Forensics and Security（TIFS，CCF A）审稿人", "IEEE Transactions on Dependable and Secure Computing（TDSC，CCF A）审稿人"],
    honors: "获奖情况",
    honorItems: [
      "国家奖学金（2018、2019、2020）",
      "复旦大学学业奖学金二等奖（2022、2024）",
      "天津大学智能与计算学部杰出青年提名奖（2021）",
      "“金灵光杯”中国互联网创新大赛信息技术应用创新专题赛二等奖（2026）",
      "高等院校发明选拔赛金奖（2024）",
      "华北五省及港澳台大学生计算机应用大赛一等奖（2019）",
    ],
    footerTitle: "研究合作与交流",
    footerText: "欢迎围绕隐私计算、安全数据协作与大模型隐私保护交流。",
    email: "发送邮件",
    github: "GitHub",
    copyright: "陈姝宇 · 上海",
  },
  en: {
    nav: { about: "About", papers: "Publications", experience: "Experience", background: "Background", honors: "Honors" },
    aboutHeading: "About",
    profileInterests: "Research interests",
    profileLinks: { email: "Email", github: "GitHub" },
    heroEyebrow: "Ph.D. in Data Science · Fudan University",
    heroTitle: "Shuyu Chen",
    current: "Current focus",
    currentText: "Efficient private LLM adaptation and secure multi-agent collaboration",
    researchItems: ["Private data alignment", "Private model training", "Private model inference"],
    papersKicker: "Selected publications",
    papersTitle: "Publications",
    papersIntro: "High-performance, deployable privacy technologies spanning secure data joins, MPC implementation security, and privacy-preserving machine learning.",
    pdf: "View PDF",
    firstAuthor: "First author",
    papers: [
      {
        venue: "VLDB 2026 · CCF A",
        title: "Bifrost: A Much Simpler Secure Two-Party Data Join Protocol for Secure Data Analytics",
        authors: "Shuyu Chen, Mingxun Zhou, Haoyu Niu, Guopeng Lin, Weili Han",
        note: "A lightweight secure two-party data-join protocol with a dual-mapping optimization, delivering up to 22.3× speedup and 84.2%–88.9% less communication.",
        href: "/papers/bifrost-vldb-2026.pdf",
        first: true,
      },
      {
        venue: "CCS 2026 · CCF A",
        title: "MPCArbiter: Detect Numeric Error Vulnerabilities in MPC Implementations via Distribution-Aware Differential Oracle",
        authors: "Guopeng Lin, Zhengting Jin, Shuyu Chen, Jingwei Pu, Zheng Qu, Jiaheng Zhang, Weili Han",
        note: "A distribution-aware differential oracle and dependency-graph analysis that identified ten classes of numeric vulnerabilities across four leading MPC frameworks.",
        href: "/papers/mpcarbiter-ccs-2026.pdf",
        first: false,
      },
      {
        venue: "ICML 2025 · CCF A",
        title: "Kona: An Efficient Privacy-Preservation Framework for KNN Classification by Communication Optimization",
        authors: "Guopeng Lin, Ruisheng Zhou, Shuyu Chen, Weili Han, Jin Tan, Wenjing Fang, Lei Wang, Tao Wei",
        note: "A secure KNN framework based on Euclidean triples and divide-and-conquer bubble sorting, reaching up to 232.6× speedup in WAN settings.",
        href: "/papers/kona-icml-2025.pdf",
        first: false,
      },
      {
        venue: "WAICA 2026",
        title: "BlitzBough: An Efficient Privacy-Preserving Inference Framework for Decision Trees by Communication Optimization",
        authors: "Guopeng Lin, Yixin Tu, Jingwei Pu, Zheng Qu, Shuyu Chen, Weili Han",
        note: "A block-matrix vector-product design for private decision-tree inference, reducing communication by up to 35.1× and improving speed by 8.2×.",
        href: "/papers/blitzbough-waica-2026.pdf",
        first: false,
      },
    ],
    experienceKicker: "Experience",
    experienceTitle: "Experience",
    projectsTitle: "Research projects",
    internshipsTitle: "Internship",
    projects: [
      {
        date: "Aug 2026—present",
        title: "Efficient privacy-preserving LLM fine-tuning",
        partner: "ByteDance collaboration",
        text: "In LLMaaS, soft-prompt tuning enables low-cost personalization of a frozen LLM, but protecting user data and server-side model parameters makes iterative MPC prohibitively expensive. I propose secure soft-prompt generation: the server locally trains an MPC-friendly generator on public data, then maps each user's small unlabeled dataset directly to an effective prompt through one secure inference, decoupling request cost from foundation-model size.",
        result: "The method beats SOTA by 9.64 pp across 17 benchmarks, with up to 36,548× speedup and 16,355× lower communication. Where prior work needs 34.7 hours on a 355M-parameter model, it adapts Qwen3-8B in 11 seconds.",
      },
      {
        date: "Oct 2025—Jul 2026",
        title: "Data privacy for 6G multi-agent A2A communication",
        partner: "vivo collaboration",
        text: "To protect users when multiple 6G agents collaborate over private data, network state, and service resources, I combine PII recognition with intent analysis for adaptive masking and pass only the minimum subtask context downstream. Numeric tasks use HE / MPC / PSI for encrypted computation, while natural-language tasks use covariant obfuscation for private cloud inference.",
        result: "The cloud processes only obfuscated data while natural-language inference loses no more than 3.5% accuracy.",
      },
      {
        date: "Sep 2023—Sep 2025",
        title: "Privacy-preserving alignment for vertically partitioned data",
        partner: "China Unicom & Huawei collaborations",
        text: "I designed three redundancy-free protocols for two-party, multi-party, and unbalanced settings. Bifrost compresses two secure shuffles into one and reaches 22.3× speedup with 84.2%–88.9% less communication; smpDJoin uses a hierarchical parallel topology whose cost scales linearly with participants; Suda uses polynomial batch private information retrieval to cut communication by 31.14–210.78× and accelerate execution by up to 8.21×.",
        result: "Downstream secure analytics run up to 2.8× faster with 73.1% less communication; Bifrost and Suda are deployed in China Unicom's reconciliation system.",
      },
      {
        date: "Nov 2021—present",
        title: "FudanMPL open-source privacy-preserving ML framework",
        partner: "Data Security and Governance Lab, Fudan University",
        text: "My work covers a conversational agent that generates, compiles, and executes private-computing tasks; PSI compiler instructions and VM operators; MixQT, which combines non-uniform bit widths with unbiased probabilistic truncation and share conversion; and SecureKVM, which uses logarithmic transformation, secure polynomial log, matrix folding, and random permutation for O(1)-communication key-value queries.",
        result: "PSI tooling helped the Shanghai Procuratorate identify 42 community-correction violations; MixQT is 4.1–10.1× faster than leading secure-training frameworks; SecureKVM reaches 202 fully encrypted online queries per second.",
      },
      {
        date: "Research & standards",
        title: "National research programs and public-data development standards",
        partner: "National Key R&D Program, National Cryptography Science Fund, and National Natural Science Foundation",
        text: "I have led or contributed to proposal writing, application defenses, implementation, and project closeout, alongside work on public-data development and utilization standards.",
        result: "The work spans project scoping, technical development, deployment, and formal acceptance.",
      },
    ],
    internships: [{
      date: "Jun 2020—Sep 2020",
      company: "Microsoft",
      role: "Software Engineering Intern",
      text: "Compressed tree-based regression models through quantization and made the compressed models cloud-platform compatible, achieving 3.3× faster inference with less than 5% accuracy loss.",
    }],
    backgroundKicker: "Background",
    backgroundTitle: "Education & academic service",
    education: "Education",
    educationItems: [
      ["Fudan University", "Ph.D. in Data Science", "Sep 2023—Jun 2026"],
      ["Fudan University", "M.S. in Computer Software and Theory", "Sep 2021—Jun 2023"],
      ["Tianjin University", "B.Eng. in Software Engineering · GPA 3.83 / 4.0, top 2%", "Sep 2017—Jul 2021"],
    ],
    academicService: "Academic service",
    academicServiceItems: ["Reviewer for IEEE Transactions on Information Forensics and Security (TIFS, CCF A)", "Reviewer for IEEE Transactions on Dependable and Secure Computing (TDSC, CCF A)"],
    honors: "Selected honors",
    honorItems: [
      "National Scholarship (2018, 2019, 2020)",
      "Fudan University Academic Scholarship, Second Prize (2022, 2024)",
      "Outstanding Young Scholar Nominee, Tianjin University (2021)",
      "China Internet Innovation Competition, IT Application Innovation Track, Second Prize (2026)",
      "Higher Education Invention Selection, Gold Award (2024)",
      "North China Five Provinces, Hong Kong, Macao & Taiwan Computer Application Competition, First Prize (2019)",
    ],
    footerTitle: "Research and collaboration",
    footerText: "I welcome conversations around private computation, secure data collaboration, and privacy-preserving LLMs.",
    email: "Email me",
    github: "GitHub",
    copyright: "Shuyu Chen · Shanghai",
  },
};

function HighlightName({ authors }: { authors: string }) {
  const parts = authors.split("Shuyu Chen");
  return <>{parts[0]}<strong>Shuyu Chen</strong>{parts[1]}</>;
}

function AboutMe({ language }: { language: Language }) {
  if (language === "zh") {
    return (
      <>
        <p className="lead">
          我于 2026 年获得复旦大学计算与智能创新学院数据科学博士学位，此前于 2023 年获得复旦大学计算机软件与理论硕士学位，并于 2021 年获得天津大学软件工程学士学位。本科期间 GPA 为 3.83 / 4.0，专业排名前 2%。
        </p>
        <p>
          我的研究聚焦人工智能数据安全，重点关注安全多方计算（MPC）及其在隐私保护数据对齐、模型训练与推理中的应用，也研究 MPC 实现中的数值错误漏洞检测。相关工作涵盖高效安全数据连接、隐私保护 KNN 与决策树推理、安全量化训练和大模型隐私保护适配，成果发表于 VLDB、ACM CCS、ICML 等会议。现担任 IEEE TIFS（CCF A）与 IEEE TDSC（CCF A）审稿人。
        </p>
      </>
    );
  }

  return (
    <>
      <p className="lead">
        I received my Ph.D. in Data Science from the College of Computing and Intelligence Innovation, Fudan University in 2026. Before that, I received my M.S. in Computer Software and Theory from Fudan University in 2023 and my B.Eng. in Software Engineering from Tianjin University in 2021, graduating with a GPA of 3.83 / 4.0 in the top 2% of my major.
      </p>
      <p>
        My research focuses on AI data security, particularly secure multi-party computation (MPC) and its applications to privacy-preserving data alignment, model training, and inference, as well as numeric-error vulnerability detection for MPC implementations. My work spans efficient secure data joins, private KNN and decision-tree inference, secure quantized training, and privacy-preserving LLM adaptation, with publications at VLDB, ACM CCS, and ICML. I also serve as a reviewer for IEEE TIFS (CCF A) and IEEE TDSC (CCF A).
      </p>
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
    <main className="site-shell" id="top">
      <header className="site-header">
        <a className="wordmark" href="#top" aria-label="Shuyu Chen home">{language === "zh" ? "陈姝宇" : "Shuyu Chen"}</a>
        <nav aria-label="Primary navigation">
          <a href="#about">{t.nav.about}</a><a href="#papers">{t.nav.papers}</a><a href="#experience">{t.nav.experience}</a><a href="#background">{t.nav.background}</a><a href="#honors">{t.nav.honors}</a>
        </nav>
        <div className="language-switch" aria-label="Language">
          <button className={language === "zh" ? "active" : ""} onClick={() => setLanguage("zh")} aria-pressed={language === "zh"}>中</button><span>/</span>
          <button className={language === "en" ? "active" : ""} onClick={() => setLanguage("en")} aria-pressed={language === "en"}>EN</button>
        </div>
      </header>

      <div className="page-grid">
        <aside className="profile-sidebar" aria-label={language === "zh" ? "个人信息" : "Profile"}>
          <div className="portrait-frame"><Image src="/portrait.jpg" alt={language === "zh" ? "陈姝宇肖像" : "Portrait of Shuyu Chen"} width={1080} height={1080} priority /></div>
          <div className="profile-heading"><h1>{t.heroTitle}</h1></div>
          <div className="profile-links" aria-label={language === "zh" ? "联系方式" : "Contact links"}>
            <a href="mailto:chenshuyu21@m.fudan.edu.cn"><span aria-hidden="true">@</span>{t.profileLinks.email}</a>
            <a href="https://github.com/stellasuc" target="_blank" rel="noreferrer"><span aria-hidden="true">GH</span>{t.profileLinks.github}</a>
          </div>
          <div className="interest-card"><h2>{t.profileInterests}</h2><ol>{t.researchItems.map((item) => <li key={item}>{item}</li>)}</ol></div>
          <div className="focus-card"><span>{t.current}</span><p>{t.currentText}</p></div>
        </aside>

        <div className="content-column">
          <section className="content-section about-intro" id="about">
            <p className="eyebrow">{t.heroEyebrow}</p><h2>{t.aboutHeading}</h2><AboutMe language={language} />
          </section>

          <section className="content-section papers-section" id="papers">
            <div className="section-heading inline-heading"><div><p className="kicker">{t.papersKicker}</p><h2>{t.papersTitle}</h2></div><p>{t.papersIntro}</p></div>
            <div className="paper-list">{t.papers.map((paper) => (
              <article className="paper" key={paper.title}>
                <div className="paper-topline"><span>{paper.venue}</span>{paper.first && <em>{t.firstAuthor}</em>}</div><h3>{paper.title}</h3>
                <p className="authors"><HighlightName authors={paper.authors} /></p><p className="paper-note">{paper.note}</p>
                <a className="pdf-link" href={paper.href} target="_blank" rel="noreferrer" aria-label={`${t.pdf}: ${paper.title}`}><span>{t.pdf}</span><span aria-hidden="true">↗</span></a>
              </article>
            ))}</div>
          </section>

          <section className="content-section experience-section" id="experience">
            <div className="section-heading"><p className="kicker">{t.experienceKicker}</p><h2>{t.experienceTitle}</h2></div>
            <div className="experience-group">
              <div className="subsection-heading"><span>01</span><h3>{t.projectsTitle}</h3></div>
              <div className="project-list">{t.projects.map((project) => (
                <article className="project-item" key={project.title}>
                  <div className="project-meta"><time>{project.date}</time><p>{project.partner}</p></div>
                  <div className="project-copy"><h4>{project.title}</h4><p>{project.text}</p><p className="project-result">{project.result}</p></div>
                </article>
              ))}</div>
            </div>
            <div className="experience-group internship-group">
              <div className="subsection-heading"><span>02</span><h3>{t.internshipsTitle}</h3></div>
              {t.internships.map((internship) => (
                <article className="internship-card" key={internship.company}>
                  <div><time>{internship.date}</time><h4>{internship.company}</h4><p className="internship-role">{internship.role}</p></div><p>{internship.text}</p>
                </article>
              ))}
            </div>
          </section>

          <section className="content-section background-section" id="background">
            <div className="section-heading"><p className="kicker">{t.backgroundKicker}</p><h2>{t.backgroundTitle}</h2></div>
            <div className="background-grid">
              <div><h3>{t.education}</h3>{t.educationItems.map(([school, degree, years]) => <div className="education-item" key={`${school}-${degree}`}><div><strong>{school}</strong><span>{degree}</span></div><time>{years}</time></div>)}</div>
              <div><h3>{t.academicService}</h3><ul>{t.academicServiceItems.map((item) => <li key={item}>{item}</li>)}</ul></div>
            </div>
          </section>

          <section className="content-section honors-section" id="honors">
            <div className="section-heading"><p className="kicker">Honors</p><h2>{t.honors}</h2></div>
            <ul className="honor-list">{t.honorItems.map((item) => <li key={item}>{item}</li>)}</ul>
          </section>
        </div>
      </div>

      <footer>
        <div><strong>{t.footerTitle}</strong><span>{t.footerText}</span></div>
        <div className="footer-links"><a href="mailto:chenshuyu21@m.fudan.edu.cn">{t.email} ↗</a><a href="https://github.com/stellasuc" target="_blank" rel="noreferrer">{t.github} ↗</a></div>
        <p>© 2026 {t.copyright}</p>
      </footer>
    </main>
  );
}
