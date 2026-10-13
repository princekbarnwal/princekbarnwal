#!/usr/bin/env node
/**
 * Fetches all-time GitHub stats for a user and writes light/dark SVG cards.
 * Needs Node 18+ (global fetch). No dependencies.
 *
 * Env:
 *   GH_TOKEN  - token used for the GitHub GraphQL API
 *   GH_USER   - optional, defaults to the repo owner
 */
const fs = require("fs");
const path = require("path");

const USER = process.env.GH_USER || process.env.GITHUB_REPOSITORY_OWNER || "princekbarnwal";
const TOKEN = process.env.GH_TOKEN;
const OUT_DIR = path.join(__dirname, "..", "stats");

async function gql(query) {
  const res = await fetch("https://api.github.com/graphql", {
    method: "POST",
    headers: {
      Authorization: `bearer ${TOKEN}`,
      "Content-Type": "application/json",
      "User-Agent": "profile-stats-script",
    },
    body: JSON.stringify({ query }),
  });
  if (!res.ok) throw new Error(`GitHub API ${res.status}: ${await res.text()}`);
  const json = await res.json();
  if (json.errors) throw new Error(`GraphQL error: ${JSON.stringify(json.errors)}`);
  return json.data;
}

async function fetchStats() {
  // Basic totals + the years in which the user has contributions.
  const base = await gql(`{
    user(login: "${USER}") {
      followers { totalCount }
      pullRequests { totalCount }
      issues { totalCount }
      repositories(ownerAffiliations: OWNER, privacy: PUBLIC) { totalCount }
      contributionsCollection { contributionYears }
    }
  }`);
  const u = base.user;

  // Stars: sum across all owned public repos (paginated).
  let stars = 0;
  let cursor = null;
  for (;;) {
    const page = await gql(`{
      user(login: "${USER}") {
        repositories(ownerAffiliations: OWNER, privacy: PUBLIC, first: 100${
          cursor ? `, after: "${cursor}"` : ""
        }) {
          nodes { stargazerCount }
          pageInfo { hasNextPage endCursor }
        }
      }
    }`);
    const r = page.user.repositories;
    stars += r.nodes.reduce((sum, n) => sum + n.stargazerCount, 0);
    if (!r.pageInfo.hasNextPage) break;
    cursor = r.pageInfo.endCursor;
  }

  // Commits: one contributionsCollection per calendar year, summed.
  const years = u.contributionsCollection.contributionYears;
  const now = new Date().toISOString();
  const thisYear = new Date().getUTCFullYear();
  const aliases = years
    .map((y) => {
      const to = y === thisYear ? now : `${y}-12-31T23:59:59Z`;
      return `y${y}: contributionsCollection(from: "${y}-01-01T00:00:00Z", to: "${to}") { totalCommitContributions }`;
    })
    .join("\n");
  const commitData = await gql(`{ user(login: "${USER}") { ${aliases} } }`);
  const commits = years.reduce(
    (sum, y) => sum + commitData.user[`y${y}`].totalCommitContributions,
    0
  );

  return {
    commits,
    pullRequests: u.pullRequests.totalCount,
    issues: u.issues.totalCount,
    stars,
    repos: u.repositories.totalCount,
    updated: new Date().toISOString().slice(0, 10),
  };
}

const THEMES = {
  light: { text: "#1f2328", muted: "#656d76", line: "#d0d7de", accent: "#0969da" },
  dark: { text: "#e6edf3", muted: "#8b949e", line: "#30363d", accent: "#58a6ff" },
};

function render(stats, themeName) {
  const t = THEMES[themeName];
  const items = [
    ["Commits", stats.commits],
    ["Pull requests", stats.pullRequests],
    ["Issues", stats.issues],
    ["Stars earned", stats.stars],
    ["Public repos", stats.repos],
  ];
  const cell = 150;
  const width = cell * items.length;
  const height = 128;
  const cols = items
    .map(([label, value], i) => {
      const cx = cell * i + cell / 2;
      const sep =
        i > 0
          ? `<line x1="${cell * i}" y1="26" x2="${cell * i}" y2="84" stroke="${t.line}" stroke-width="1"/>`
          : "";
      return `${sep}
  <text x="${cx}" y="62" text-anchor="middle" font-size="30" font-weight="700" fill="${t.accent}">${Number(value).toLocaleString("en-US")}</text>
  <text x="${cx}" y="84" text-anchor="middle" font-size="11" letter-spacing="1.2" fill="${t.muted}">${label.toUpperCase()}</text>`;
    })
    .join("\n");

  return `<svg xmlns="http://www.w3.org/2000/svg" width="${width}" height="${height}" viewBox="0 0 ${width} ${height}" role="img" aria-label="All-time GitHub stats for ${USER}">
  <style>text{font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Helvetica,Arial,sans-serif}</style>
${cols}
  <text x="${width / 2}" y="116" text-anchor="middle" font-size="10" letter-spacing="1" fill="${t.muted}">ALL-TIME · UPDATED ${stats.updated}</text>
</svg>
`;
}

function writeCards(stats) {
  fs.mkdirSync(OUT_DIR, { recursive: true });
  fs.writeFileSync(path.join(OUT_DIR, "stats-light.svg"), render(stats, "light"));
  fs.writeFileSync(path.join(OUT_DIR, "stats-dark.svg"), render(stats, "dark"));
  fs.writeFileSync(path.join(OUT_DIR, "stats.json"), JSON.stringify(stats, null, 2) + "\n");
}

module.exports = { render, writeCards };

if (require.main === module) {
  if (!TOKEN) {
    console.error("GH_TOKEN is not set.");
    process.exit(1);
  }
  fetchStats()
    .then((stats) => {
      console.log("Fetched stats:", stats);
      writeCards(stats);
    })
    .catch((err) => {
      console.error(err.message);
      process.exit(1);
    });
}