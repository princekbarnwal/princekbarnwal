<h1 align="center">Hi, I'm Prince Kumar Barnwal 👋</h1>

<h3 align="center">Full-stack developer who ships secure, cached, tested and containerized apps<br/>React · Node.js · MongoDB · Redis · Docker · CI/CD</h3>

<p align="center">
  <a href="https://www.linkedin.com/in/princekbarnwal/"><img src="https://img.shields.io/badge/LinkedIn-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white" alt="LinkedIn"/></a>
  <a href="https://princekbarnwal.vercel.app/"><img src="https://img.shields.io/badge/Portfolio-111827?style=for-the-badge&logo=vercel&logoColor=white" alt="Portfolio"/></a>
  <a href="https://www.codechef.com/users/princekb"><img src="https://img.shields.io/badge/CodeChef-5B4638?style=for-the-badge&logo=codechef&logoColor=white" alt="CodeChef"/></a>
  <a href="https://leetcode.com/princekb"><img src="https://img.shields.io/badge/LeetCode-FFA116?style=for-the-badge&logo=leetcode&logoColor=black" alt="LeetCode"/></a>
  <a href="https://github.com/princekbarnwal?tab=followers"><img src="https://img.shields.io/github/followers/princekbarnwal?style=for-the-badge&logo=github&label=Followers" alt="GitHub followers"/></a>
</p>

<p align="center">
  <img src="https://img.shields.io/badge/CodeChef-4★%20(1829)-5B4638?style=flat-square&logo=codechef&logoColor=white" alt="CodeChef 4 star"/>
  <img src="https://img.shields.io/badge/Best%20Contest%20Rank-Global%2059-success?style=flat-square" alt="Global rank 59"/>
  <img src="https://img.shields.io/badge/Problems%20Solved-800%2B-orange?style=flat-square" alt="800+ problems"/>
  <a href="https://github.com/kestra-io/kestra/pull/20485"><img src="https://img.shields.io/badge/Kestra-PR%20Merged-7C3AED?style=flat-square&logo=github" alt="Kestra PR merged"/></a>
</p>

---

## 👨‍💻 About Me

B.Tech (Information Technology) graduate from MCKV Institute of Engineering. I build full-stack apps and care about the parts that make software production-ready: authentication, access control, validation, caching, tests and CI/CD.

I also compete in programming contests, where I'm **4★ on CodeChef (1829)**, a rating in the top 5000.

- 🔨 **Building:** scalable full-stack systems with caching, high availability and automated pipelines
- 🌱 **Contributing:** open source. I have a merged PR in [Kestra](https://github.com/kestra-io/kestra/pull/20485)
- 💬 **Ask me about:** JWT refresh-token rotation, Redis cache-aside, MongoDB replica sets, Dockerized Node apps
- 📫 **Open to:** internships, full-time roles and collaboration. The best way to reach me is [LinkedIn](https://www.linkedin.com/in/princekbarnwal/)

---

## 🚀 Featured Projects

### 📝 Codeblogs: secure full-stack blogging platform
[📂 Source Code](https://github.com/princekbarnwal/Codeblogs)

<p align="center">
  <img src="assets/codeblogs.png" width="760" alt="Codeblogs home page"/>
</p>

| | |
|---|---|
| 🔐 **Auth** | JWT access + refresh token flow with **rotation** and logout-based revocation (Express 5 + Mongoose) |
| 🛡️ **Security** | Tiptap rich-text editor with `sanitize-html`, Zod validation, Helmet, rate limiting |
| ⚡ **Performance** | Redis **cache-aside** pattern with write-invalidation |
| 🧪 **Quality** | Jest + Supertest test suite, containerized with Docker Compose |
| 🎨 **Frontend** | React + Vite client, dark mode, ownership-based access control |

```mermaid
flowchart LR
    A[React + Vite Client] -->|REST + JWT| B[Express 5 API]
    B --> C{Redis Cache}
    C -->|hit| B
    C -->|miss| D[(MongoDB)]
    D --> B
```

![React](https://img.shields.io/badge/React-20232A?style=flat-square&logo=react&logoColor=61DAFB)
![Vite](https://img.shields.io/badge/Vite-646CFF?style=flat-square&logo=vite&logoColor=white)
![Node.js](https://img.shields.io/badge/Node.js-339933?style=flat-square&logo=nodedotjs&logoColor=white)
![Express](https://img.shields.io/badge/Express_5-000000?style=flat-square&logo=express&logoColor=white)
![MongoDB](https://img.shields.io/badge/MongoDB-47A248?style=flat-square&logo=mongodb&logoColor=white)
![Redis](https://img.shields.io/badge/Redis-DC382D?style=flat-square&logo=redis&logoColor=white)
![Docker](https://img.shields.io/badge/Docker-2496ED?style=flat-square&logo=docker&logoColor=white)
![Jest](https://img.shields.io/badge/Jest-C21325?style=flat-square&logo=jest&logoColor=white)

---

### 📦 Product Catalog Service: highly-available REST API
[📂 Source Code](https://github.com/princekbarnwal/Product_catalog_service) · [🟢 Live API](https://product-catalog-service-tfcn.onrender.com/products) *(hosted on a free tier, so the first request can take up to a minute to wake the server)*

| | |
|---|---|
| 🧱 **Architecture** | Layered design: routes → controllers → services → models |
| 🗄️ **High availability** | MongoDB as a **3-node replica set** with manually tested failover |
| ⚡ **Caching** | Redis cache-aside on reads, write-invalidation on POST/PUT/DELETE |
| 🚢 **DevOps** | Docker Compose stack, Jest + Supertest tests, **GitHub Actions CI** on every push/PR |

```mermaid
flowchart LR
    R[Routes] --> C[Controllers] --> S[Services] --> M[Models]
    S <--> X[(Redis)]
    M --> P[(MongoDB Primary)]
    P -.replicates.-> S1[(Secondary 1)]
    P -.replicates.-> S2[(Secondary 2)]
```

![Node.js](https://img.shields.io/badge/Node.js-339933?style=flat-square&logo=nodedotjs&logoColor=white)
![Express](https://img.shields.io/badge/Express-000000?style=flat-square&logo=express&logoColor=white)
![MongoDB](https://img.shields.io/badge/MongoDB-47A248?style=flat-square&logo=mongodb&logoColor=white)
![Redis](https://img.shields.io/badge/Redis-DC382D?style=flat-square&logo=redis&logoColor=white)
![Docker](https://img.shields.io/badge/Docker-2496ED?style=flat-square&logo=docker&logoColor=white)
![GitHub Actions](https://img.shields.io/badge/GitHub_Actions-2088FF?style=flat-square&logo=githubactions&logoColor=white)

---

### More projects

<table>
  <tr>
    <td width="50%" valign="top">
      <h4>⚡ Pokémon WebApp</h4>
      <a href="https://pokemonwebapp-princekbarnwal.vercel.app/"><img src="assets/pokemon.png" alt="Pokémon WebApp"/></a>
      <p>React Hooks + Axios, fetching and presenting data across 1,000+ Pokémon entries from PokeAPI.</p>
      <a href="https://pokemonwebapp-princekbarnwal.vercel.app/">Live Demo</a> · <a href="https://github.com/princekbarnwal/Pokemon_webapp">Source</a>
    </td>
    <td width="50%" valign="top">
      <h4>🌐 Portfolio Website</h4>
      <a href="https://princekbarnwal.vercel.app/"><img src="assets/portfolio.png" alt="Portfolio website"/></a>
      <p>Responsive, component-driven React portfolio with custom styling, smooth navigation and a preloader.</p>
      <a href="https://princekbarnwal.vercel.app/">Live Demo</a> · <a href="https://github.com/princekbarnwal/My_portfolio">Source</a>
    </td>
  </tr>
</table>

---

## 💼 Experience

**Web Developer Intern @ NTPC** · June 2025 – July 2025

- Built a responsive **Contract Closure Dashboard** managing **80+ contract records**, replacing manual spreadsheet tracking with real-time Google Apps Script CRUD integration and live data sync.
- Implemented **role-based access control** (Admin/Viewer) with secure authentication and a 30-minute session timeout to protect sensitive internal data.
- Added multi-field dynamic filtering, pagination, auto-refresh notifications, and adaptive desktop/mobile views.

---

## 🛠️ Tech Stack

**Languages**
![C++](https://img.shields.io/badge/C++-00599C?style=for-the-badge&logo=cplusplus&logoColor=white)
![Python](https://img.shields.io/badge/Python-3776AB?style=for-the-badge&logo=python&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![Java](https://img.shields.io/badge/Java-ED8B00?style=for-the-badge&logo=openjdk&logoColor=white)
![C](https://img.shields.io/badge/C-A8B9CC?style=for-the-badge&logo=c&logoColor=black)

**Frontend**
![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white)
![Bootstrap](https://img.shields.io/badge/Bootstrap-7952B3?style=for-the-badge&logo=bootstrap&logoColor=white)
![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)

**Backend & Databases**
![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)
![Express](https://img.shields.io/badge/Express-000000?style=for-the-badge&logo=express&logoColor=white)
![MongoDB](https://img.shields.io/badge/MongoDB-47A248?style=for-the-badge&logo=mongodb&logoColor=white)
![MySQL](https://img.shields.io/badge/MySQL-4479A1?style=for-the-badge&logo=mysql&logoColor=white)
![Redis](https://img.shields.io/badge/Redis-DC382D?style=for-the-badge&logo=redis&logoColor=white)

**DevOps, Testing & Tools**
![Docker](https://img.shields.io/badge/Docker-2496ED?style=for-the-badge&logo=docker&logoColor=white)
![GitHub Actions](https://img.shields.io/badge/GitHub_Actions-2088FF?style=for-the-badge&logo=githubactions&logoColor=white)
![Jest](https://img.shields.io/badge/Jest-C21325?style=for-the-badge&logo=jest&logoColor=white)
![Postman](https://img.shields.io/badge/Postman-FF6C37?style=for-the-badge&logo=postman&logoColor=white)
![Git](https://img.shields.io/badge/Git-F05032?style=for-the-badge&logo=git&logoColor=white)
![Render](https://img.shields.io/badge/Render-46E3B7?style=for-the-badge&logo=render&logoColor=black)
![Vercel](https://img.shields.io/badge/Vercel-000000?style=for-the-badge&logo=vercel&logoColor=white)

---

## 🏆 Competitive Programming & Achievements

| | |
|---|---|
| ⭐ **CodeChef** | 4★ **(1829)**, top 5000 · [@princekb](https://www.codechef.com/users/princekb) |
| 🥇 **Contest ranks** | **Global rank 59** in a CodeChef contest; rank < 100 in 3 contests and < 200 in 7+ contests |
| 🧩 **Problem solving** | **800+** problems solved across platforms · [LeetCode @princekb](https://leetcode.com/princekb) |
| 🌍 **TCS CodeVita** | Qualified Round 2 (Global Rank 12K in Round 1, 6K in Round 2) |
| 🏅 **BrainRush 2K23** | Winner of the college-level Coding & Quiz competition |

---

## 🌱 Open Source

[![Contributor](https://img.shields.io/badge/1st%20PR%20MERGED-KESTRA-1F232C?style=for-the-badge&logo=github&logoColor=200062&labelColor=CDC5FF)](https://kestra.io/community?from=github-badge)

**[kestra-io/kestra #20485](https://github.com/kestra-io/kestra/pull/20485): refactor(executions): replace explicit `any` with real types in `TaskRunLine.vue`** · closes [#20323](https://github.com/kestra-io/kestra/issues/20323)

- Replaced **17 explicit `any`** in the execution UI component with real TypeScript types: props typed with `Execution`, `FlowForExecution` and `LogEntry`, a local `TaskRunWithOutputs` type for subflow outputs the SDK doesn't model, and callbacks that now infer their parameter types.
- Reduced the repo's explicit-`any` count from **708 to 691** and removed the file from the type-debt baseline.
- Typing surfaced a real edge case: an attempt's `endDate` and `duration` can be missing while a task is still running, so the tooltip now skips the date helpers instead of passing missing values through.
- Reviewed and approved by a Kestra maintainer, with all 16 CI checks passing.

---

## 📊 GitHub Stats

<p align="center">
  <picture>
    <source media="(prefers-color-scheme: dark)" srcset="stats/stats-dark.svg">
    <img src="stats/stats-light.svg" alt="All-time GitHub stats" width="750"/>
  </picture>
</p>

<p align="center">
  <a href="https://github.com/princekbarnwal?tab=repositories">
    <picture>
      <source media="(prefers-color-scheme: dark)" srcset="https://github-readme-stats.vercel.app/api/top-langs/?username=princekbarnwal&layout=compact&hide_border=true&hide_title=true&theme=dark&bg_color=00000000&card_width=320">
      <img src="https://github-readme-stats.vercel.app/api/top-langs/?username=princekbarnwal&layout=compact&hide_border=true&hide_title=true&theme=default&bg_color=00000000&card_width=320" alt="Top languages" height="165"/>
    </picture>
  </a>
</p>

---

## 📫 Let's Connect

I'm open to internships, full-time roles and open-source collaboration. If something here is useful or interesting, a ⭐ on a repo or a follow means a lot.

[LinkedIn](https://www.linkedin.com/in/princekbarnwal/) · [Portfolio](https://princekbarnwal.vercel.app/) · [CodeChef](https://www.codechef.com/users/princekb) · [LeetCode](https://leetcode.com/princekb)

<p align="center"><i>"Great code is written twice: once in logic, once in purpose."</i></p>