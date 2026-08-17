"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

type Language = "zh" | "en";

const copy = {
  zh: {
    nav: { home: "主页", about: "关于我", papers: "论文", experience: "经历", education: "教育", service: "学术服务", honors: "获奖" },
    name: "陈姝宇",
    status: "复旦大学数据科学博士研究生",
    sidebarBio: "研究方向为安全多方计算及其在隐私保护机器学习中的应用。",
    location: "中国 · 上海",
    affiliation: "复旦大学",
    email: "邮箱",
    github: "GitHub",
    about: [
      <>我目前是复旦大学计算与智能创新学院 <strong>2023 级数据科学博士研究生</strong>。2021 年至 2023 年，我在复旦大学计算机软件与理论硕士项目学习，随后通过<strong>硕转博</strong>继续攻读博士学位，导师为 <a href="https://dsg.fudan.edu.cn/#/hwl" target="_blank" rel="noreferrer">韩伟力教授</a>。此前，我于 2021 年获得天津大学软件工程学士学位，本科期间专业排名前 2%。</>,
      <>我的研究方向是<strong>人工智能数据安全</strong>，主要包括基于安全多方计算的隐私保护数据对齐、模型训练与推理，以及隐私保护大模型微调。相关成果发表于 VLDB、ACM CCS、ICML 等顶会。</>,
    ],
    sections: { publications: "论文", experience: "经历", education: "教育经历", service: "学术服务", honors: "获奖情况" },
    publicationMeta: {
      bifrost: "Proceedings of the 52nd International Conference on Very Large Data Bases (VLDB), 2026.",
      mpcarbiter: "Proceedings of the 33rd ACM Conference on Computer and Communications Security (CCS), 2026.",
      kona: "Proceedings of the 42nd International Conference on Machine Learning (ICML), 2025.",
      blitzbough: "Proceedings of the Inaugural WAIC Academic Conference (WAICA), 2026.",
    },
    pdf: "PDF",
    experience: {
      date: "2020.06–2020.09",
      company: "Microsoft",
      role: "软件开发工程师实习生",
      detail: "使用量化方法压缩树类回归模型，并完成与云平台的兼容适配；在精度损失低于 5% 的条件下，实现 3.3× 推理加速。",
    },
    education: [
      ["2023.09–至今", "复旦大学", "数据科学博士研究生（2023 级）"],
      ["2021.09–2023.06", "复旦大学", "计算机软件与理论硕士阶段，后硕转博"],
      ["2017.09–2021.07", "天津大学", "软件工程学士，专业排名前 2%"],
    ],
    service: [
      "IEEE Transactions on Information Forensics and Security（TIFS，CCF A）审稿人",
      "IEEE Transactions on Dependable and Secure Computing（TDSC，CCF A）审稿人",
    ],
    honors: [
      ["2026", "“金灵光杯”中国互联网创新大赛信息技术应用创新专题赛二等奖"],
      ["2024", "高等院校发明选拔赛金奖"],
      ["2022、2024", "复旦大学学业奖学金二等奖"],
      ["2021", "天津大学智能与计算学部杰出青年提名奖"],
      ["2018、2019、2020", "国家奖学金"],
      ["2019", "华北五省及港澳台大学生计算机应用大赛一等奖"],
    ],
  },
  en: {
    nav: { home: "Home", about: "About Me", papers: "Publications", experience: "Experience", education: "Education", service: "Service", honors: "Honors" },
    name: "Shuyu Chen",
    status: "Ph.D. Student in Data Science at Fudan University",
    sidebarBio: "My research focuses on secure multi-party computation and its applications in privacy-preserving machine learning.",
    location: "Shanghai, China",
    affiliation: "Fudan University",
    email: "Email",
    github: "GitHub",
    about: [
      <>I am currently a <strong>2023-entry Ph.D. student in Data Science</strong> at the College of Computing and Intelligence Innovation, Fudan University. From 2021 to 2023, I studied in the M.S. program in Computer Software and Theory at Fudan University before transferring into the Ph.D. program. I am advised by <a href="https://dsg.fudan.edu.cn/#/hwl" target="_blank" rel="noreferrer">Prof. Weili Han</a>. Before that, I received my B.Eng. in Software Engineering from Tianjin University in 2021, ranking in the top 2% of my major.</>,
      <>My research focuses on <strong>AI data security</strong>, primarily including privacy-preserving data alignment, model training and inference based on secure multi-party computation, as well as privacy-preserving fine-tuning of large language models. My work has been published at leading venues including VLDB, ACM CCS, and ICML.</>,
    ],
    sections: { publications: "Publications", experience: "Experience", education: "Education", service: "Academic Service", honors: "Honors and Awards" },
    publicationMeta: {
      bifrost: "Proceedings of the 52nd International Conference on Very Large Data Bases (VLDB), 2026.",
      mpcarbiter: "Proceedings of the 33rd ACM Conference on Computer and Communications Security (CCS), 2026.",
      kona: "Proceedings of the 42nd International Conference on Machine Learning (ICML), 2025.",
      blitzbough: "Proceedings of the Inaugural WAIC Academic Conference (WAICA), 2026.",
    },
    pdf: "PDF",
    experience: {
      date: "Jun. 2020–Sep. 2020",
      company: "Microsoft",
      role: "Software Engineering Intern",
      detail: "Compressed tree-based regression models through quantization and adapted them for a cloud platform, achieving 3.3× faster inference with less than 5% accuracy loss.",
    },
    education: [
      ["Sep. 2023–Present", "Fudan University", "Ph.D. Student in Data Science, Class of 2023"],
      ["Sep. 2021–Jun. 2023", "Fudan University", "M.S. program in Computer Software and Theory; transferred into the Ph.D. program"],
      ["Sep. 2017–Jul. 2021", "Tianjin University", "B.Eng. in Software Engineering, top 2%"],
    ],
    service: [
      "Reviewer, IEEE Transactions on Information Forensics and Security (TIFS, CCF A)",
      "Reviewer, IEEE Transactions on Dependable and Secure Computing (TDSC, CCF A)",
    ],
    honors: [
      ["2026", "Second Prize, China Internet Innovation Competition — IT Application Innovation Track"],
      ["2024", "Gold Award, Higher Education Invention Selection"],
      ["2022, 2024", "Fudan University Academic Scholarship, Second Prize"],
      ["2021", "Outstanding Young Scholar Nominee, Tianjin University"],
      ["2018, 2019, 2020", "National Scholarship"],
      ["2019", "First Prize, North China Five Provinces, Hong Kong, Macao & Taiwan Computer Application Competition"],
    ],
  },
};

const publications = [
  {
    key: "bifrost" as const,
    badge: "VLDB '26",
    badgeClass: "vldb",
    title: "Bifrost: A Much Simpler Secure Two-Party Data Join Protocol for Secure Data Analytics",
    authors: "Shuyu Chen, Mingxun Zhou, Haoyu Niu, Guopeng Lin, Weili Han",
    href: "/papers/bifrost-vldb-2026.pdf",
  },
  {
    key: "mpcarbiter" as const,
    badge: "CCS '26",
    badgeClass: "ccs",
    title: "MPCArbiter: Detect Numeric Error Vulnerabilities in MPC Implementations via Distribution-Aware Differential Oracle",
    authors: "Guopeng Lin, Zhengting Jin, Shuyu Chen, Jingwei Pu, Zheng Qu, Jiaheng Zhang, Weili Han",
    href: "/papers/mpcarbiter-ccs-2026.pdf",
  },
  {
    key: "kona" as const,
    badge: "ICML '25",
    badgeClass: "icml",
    title: "Kona: An Efficient Privacy-Preservation Framework for KNN Classification by Communication Optimization",
    authors: "Guopeng Lin, Ruisheng Zhou, Shuyu Chen, Weili Han, Jin Tan, Wenjing Fang, Lei Wang, Tao Wei",
    href: "/papers/kona-icml-2025.pdf",
  },
  {
    key: "blitzbough" as const,
    badge: "WAICA '26",
    badgeClass: "waica",
    title: "BlitzBough: An Efficient Privacy-Preserving Inference Framework for Decision Trees by Communication Optimization",
    authors: "Guopeng Lin, Yixin Tu, Jingwei Pu, Zheng Qu, Shuyu Chen, Weili Han",
    href: "/papers/blitzbough-waica-2026.pdf",
  },
];

function Authors({ names }: { names: string }) {
  const parts = names.split("Shuyu Chen");
  return <>{parts[0]}<strong className="self-name">Shuyu Chen</strong>{parts[1]}</>;
}

export default function Home() {
  const [language, setLanguage] = useState<Language>("zh");
  const t = copy[language];

  useEffect(() => {
    document.documentElement.lang = language === "zh" ? "zh-CN" : "en";
  }, [language]);

  return (
    <main id="top">
      <header className="masthead">
        <div className="masthead-inner">
          <a className="home-link" href="#top">{t.nav.home}</a>
          <nav aria-label={language === "zh" ? "页面导航" : "Page navigation"}>
            <a href="#about">{t.nav.about}</a>
            <a href="#publications">{t.nav.papers}</a>
            <a href="#experience">{t.nav.experience}</a>
            <a href="#education">{t.nav.education}</a>
            <a href="#service">{t.nav.service}</a>
            <a href="#honors">{t.nav.honors}</a>
          </nav>
          <div className="language-switch" aria-label="Language">
            <button className={language === "zh" ? "active" : ""} onClick={() => setLanguage("zh")} aria-pressed={language === "zh"}>中</button>
            <span>/</span>
            <button className={language === "en" ? "active" : ""} onClick={() => setLanguage("en")} aria-pressed={language === "en"}>EN</button>
          </div>
        </div>
      </header>

      <div className="page-layout">
        <aside className="profile" aria-label={language === "zh" ? "个人信息" : "Profile"}>
          <div className="avatar"><Image src="/portrait.jpg" alt={language === "zh" ? "陈姝宇肖像" : "Portrait of Shuyu Chen"} width={1080} height={1080} priority /></div>
          <h1>{t.name}</h1>
          <p className="profile-status">{t.status}</p>
          <p className="profile-bio">{t.sidebarBio}</p>
          <ul className="profile-links">
            <li><span aria-hidden="true">📍</span>{t.location}</li>
            <li><span aria-hidden="true">🏛️</span>{t.affiliation}</li>
            <li><span aria-hidden="true">✉️</span><a href="mailto:chenshuyu21@m.fudan.edu.cn">{t.email}</a></li>
            <li><span className="github-icon" aria-hidden="true">GH</span><a href="https://github.com/stellasuc" target="_blank" rel="noreferrer">{t.github}</a></li>
          </ul>
        </aside>

        <article className="page-content">
          <section className="about" id="about">
            {t.about.map((paragraph, index) => <p key={index}>{paragraph}</p>)}
          </section>

          <section id="publications">
            <h2><span aria-hidden="true">📝</span>{t.sections.publications}</h2>
            <ul className="publication-list">
              {publications.map((paper) => (
                <li key={paper.title}>
                  <div className={`venue-badge ${paper.badgeClass}`}>{paper.badge}</div>
                  <div className="publication-copy">
                    <h3>{paper.title}</h3>
                    <p className="authors"><Authors names={paper.authors} /></p>
                    <p className="venue-meta">{t.publicationMeta[paper.key]} <a href={paper.href} target="_blank" rel="noreferrer">[{t.pdf}]</a></p>
                  </div>
                </li>
              ))}
            </ul>
          </section>

          <section id="experience">
            <h2><span aria-hidden="true">💼</span>{t.sections.experience}</h2>
            <div className="timeline-item">
              <time>{t.experience.date}</time>
              <div><h3>{t.experience.company}</h3><strong>{t.experience.role}</strong><p>{t.experience.detail}</p></div>
            </div>
          </section>

          <section id="education">
            <h2><span aria-hidden="true">📖</span>{t.sections.education}</h2>
            <ul className="simple-list education-list">
              {t.education.map(([date, school, detail]) => <li key={`${date}-${school}`}><time>{date}</time><div><strong>{school}</strong><span>{detail}</span></div></li>)}
            </ul>
          </section>

          <section id="service">
            <h2><span aria-hidden="true">🔎</span>{t.sections.service}</h2>
            <ul className="bullet-list">{t.service.map((item) => <li key={item}>{item}</li>)}</ul>
          </section>

          <section id="honors">
            <h2><span aria-hidden="true">🎖️</span>{t.sections.honors}</h2>
            <ul className="simple-list honor-list">
              {t.honors.map(([year, honor]) => <li key={`${year}-${honor}`}><time>{year}</time><strong>{honor}</strong></li>)}
            </ul>
          </section>
        </article>
      </div>

      <footer>© 2026 Shuyu Chen · Last updated Aug. 2026</footer>
    </main>
  );
}
