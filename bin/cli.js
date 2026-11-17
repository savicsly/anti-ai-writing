#!/usr/bin/env node
"use strict";

/*
 * anti-ai-writing installer.
 * Copies the skill folder into the skills directory of one or more AI coding
 * tools. No dependencies, no network access, no telemetry, no install scripts.
 */

const fs = require("fs");
const os = require("os");
const path = require("path");
const readline = require("readline");

const SKILL_NAME = "anti-ai-writing";
const PKG_ROOT = path.resolve(__dirname, "..");
const SOURCE = path.join(PKG_ROOT, "skills", SKILL_NAME);
const VERSION = require(path.join(PKG_ROOT, "package.json")).version;
const HOME = os.homedir();

// Where each tool looks for skills. `project` is relative to the project
// folder, `global` is relative to the home folder. `signs` are folders whose
// presence suggests the tool is in use.
const TARGETS = [
  { id: "claude", label: "Claude Code", project: ".claude/skills", global: ".claude/skills",
    signs: { project: [".claude"], global: [".claude"] } },
  { id: "cursor", label: "Cursor", project: ".cursor/skills", global: ".cursor/skills",
    signs: { project: [".cursor"], global: [".cursor"] } },
  { id: "vscode", label: "VS Code (GitHub Copilot)", project: ".github/skills", global: ".copilot/skills",
    aliases: ["copilot", "github-copilot"],
    signs: { project: [".vscode", ".github/copilot-instructions.md", ".github/skills"], global: [".copilot", ".vscode"] } },
  { id: "codex", label: "OpenAI Codex", project: ".codex/skills", global: ".codex/skills",
    signs: { project: [".codex"], global: [".codex"] } },
  { id: "gemini", label: "Gemini CLI", project: ".gemini/skills", global: ".gemini/skills",
    aliases: ["gemini-cli"],
    signs: { project: [".gemini"], global: [".gemini"] } },
  { id: "windsurf", label: "Windsurf", project: ".windsurf/skills", global: ".codeium/windsurf/skills",
    signs: { project: [".windsurf"], global: [".codeium/windsurf"] } },
  { id: "opencode", label: "OpenCode", project: ".opencode/skills", global: ".config/opencode/skills",
    signs: { project: [".opencode"], global: [".config/opencode"] } },
  { id: "agents", label: "Shared .agents folder (read by several tools)", project: ".agents/skills", global: ".agents/skills",
    aliases: ["universal"],
    signs: { project: [".agents"], global: [".agents"] } },
];

const useColor = process.stdout.isTTY && !process.env.NO_COLOR;
const c = (code, s) => (useColor ? `\x1b[${code}m${s}\x1b[0m` : s);
const bold = (s) => c(1, s);
const dim = (s) => c(2, s);
const green = (s) => c(32, s);
const yellow = (s) => c(33, s);
const red = (s) => c(31, s);

const HELP = `
${bold("anti-ai-writing")} v${VERSION}
Installs the Anti-AI Writing skill into your AI coding tool.

${bold("Usage")}
  npx ${SKILL_NAME}                     Guided install
  npx ${SKILL_NAME} install [options]   Install or update
  npx ${SKILL_NAME} uninstall [options] Remove
  npx ${SKILL_NAME} status              Show where it is installed
  npx ${SKILL_NAME} targets             List supported tools and their folders

${bold("Options")}
  -a, --agent <names>   Tools to install for, comma-separated:
                        ${TARGETS.map((t) => t.id).join(", ")}
      --all             Every supported tool
  -g, --global          Install for all your projects (home folder)
  -p, --project         Install for the current project only (default)
      --dir <path>      Install into a custom skills folder instead
  -f, --force           Replace an existing folder even if it looks modified
  -y, --yes             No questions; use detected tools and defaults
  -h, --help            Show this help
  -v, --version         Show the version

${bold("Examples")}
  npx ${SKILL_NAME} install --agent cursor
  npx ${SKILL_NAME} install --agent claude,vscode --global
  npx ${SKILL_NAME} install --all --yes
  npx ${SKILL_NAME} uninstall --agent cursor

${bold("Claude Code plugin")} (alternative to copying files)
  /plugin marketplace add savicsly/anti-ai-writing
  /plugin install anti-ai-writing@human-writing

After installing, restart or reload your tool, open a project, and ask:
  "Humanize this email: ..."
`;

function parseArgs(argv) {
  const opts = { command: null, agents: [], all: false, scope: null, dir: null, force: false, yes: false };
  const args = argv.slice();
  while (args.length) {
    const a = args.shift();
    const next = () => {
      const v = args.shift();
      if (v === undefined || v.startsWith("-")) fail(`Option ${a} needs a value.`);
      return v;
    };
    if (a === "-h" || a === "--help" || a === "help") opts.command = "help";
    else if (a === "-v" || a === "--version") opts.command = "version";
    else if (a === "-a" || a === "--agent" || a === "--agents") opts.agents.push(...next().split(","));
    else if (a.startsWith("--agent=")) opts.agents.push(...a.slice(8).split(","));
    else if (a === "--all") opts.all = true;
    else if (a === "-g" || a === "--global") opts.scope = "global";
    else if (a === "-p" || a === "--project") opts.scope = "project";
    else if (a === "--dir") opts.dir = next();
    else if (a.startsWith("--dir=")) opts.dir = a.slice(6);
    else if (a === "-f" || a === "--force") opts.force = true;
    else if (a === "-y" || a === "--yes") opts.yes = true;
    else if (!a.startsWith("-") && !opts.command) opts.command = a;
    else fail(`Unknown option: ${a}\nRun "npx ${SKILL_NAME} --help" for usage.`);
  }
  opts.agents = opts.agents.map((s) => s.trim().toLowerCase()).filter(Boolean);
  return opts;
}

function fail(msg) {
  console.error(red("Error: ") + msg);
  process.exit(1);
}

function findTarget(name) {
  return TARGETS.find((t) => t.id === name || (t.aliases || []).includes(name));
}

function baseFor(scope) {
  return scope === "global" ? HOME : process.cwd();
}

function skillsDir(target, scope) {
  return path.join(baseFor(scope), ...target[scope].split("/"));
}

function detect(scope) {
  const base = baseFor(scope);
  return TARGETS.filter((t) => t.id !== "agents" &&
    t.signs[scope].some((p) => fs.existsSync(path.join(base, ...p.split("/")))));
}

function tildify(p) {
  return p.startsWith(HOME + path.sep) ? "~" + p.slice(HOME.length) : p;
}

/** True when `dir` holds a copy of this skill (so replacing it is safe). */
function isOurSkill(dir) {
  try {
    const head = fs.readFileSync(path.join(dir, "SKILL.md"), "utf8").slice(0, 400);
    return new RegExp(`^name:\\s*${SKILL_NAME}\\s*$`, "m").test(head);
  } catch {
    return false;
  }
}

function copySkill(destParent, force) {
  const dest = path.join(destParent, SKILL_NAME);
  let action = "installed";
  if (fs.existsSync(dest)) {
    if (!isOurSkill(dest) && !force) {
      return { dest, action: "skipped", reason: "a different folder with this name exists (use --force to replace it)" };
    }
    fs.rmSync(dest, { recursive: true, force: true });
    action = "updated";
  }
  fs.mkdirSync(destParent, { recursive: true });
  fs.cpSync(SOURCE, dest, {
    recursive: true,
    filter: (src) => !/(^|[\\/])(\.DS_Store)$/.test(src),
  });
  return { dest, action };
}

function ask(rl, question) {
  return new Promise((resolve) => rl.question(question, (ans) => resolve(ans.trim())));
}

async function chooseInteractively(opts) {
  const rl = readline.createInterface({ input: process.stdin, output: process.stdout });
  try {
    console.log(`\n${bold("Anti-AI Writing")} ${dim("v" + VERSION)}\n`);

    if (!opts.scope) {
      console.log("Where should the skill be available?");
      console.log(`  1) This project only ${dim("(" + tildify(process.cwd()) + ")")}`);
      console.log("  2) All my projects");
      const ans = await ask(rl, "Choose 1 or 2 [1]: ");
      opts.scope = ans === "2" ? "global" : "project";
      console.log();
    }

    if (!opts.agents.length && !opts.all) {
      const found = detect(opts.scope).map((t) => t.id);
      console.log("Which tools do you use?");
      TARGETS.forEach((t, i) => {
        const mark = found.includes(t.id) ? green(" (detected)") : "";
        console.log(`  ${i + 1}) ${t.label}${mark}`);
      });
      const def = found.length ? found.map((id) => TARGETS.findIndex((t) => t.id === id) + 1).join(",") : "";
      const ans = await ask(rl, `Enter numbers separated by commas${def ? ` [${def}]` : ""}: `);
      const picks = (ans || def).split(/[\s,]+/).filter(Boolean);
      for (const p of picks) {
        const t = /^\d+$/.test(p) ? TARGETS[Number(p) - 1] : findTarget(p.toLowerCase());
        if (!t) fail(`"${p}" is not one of the choices.`);
        opts.agents.push(t.id);
      }
      if (!opts.agents.length) fail("No tool selected.");
      console.log();
    }
  } finally {
    rl.close();
  }
}

function resolveTargets(opts) {
  if (opts.all) return TARGETS.slice();
  const out = [];
  for (const name of opts.agents) {
    const t = findTarget(name);
    if (!t) fail(`Unknown tool "${name}". Choose from: ${TARGETS.map((x) => x.id).join(", ")}`);
    if (!out.includes(t)) out.push(t);
  }
  return out;
}

async function install(opts) {
  if (!fs.existsSync(path.join(SOURCE, "SKILL.md"))) fail(`Skill files not found at ${SOURCE}. The package looks incomplete.`);

  if (opts.dir) {
    const parent = path.resolve(opts.dir);
    report([{ label: "Custom folder", ...copySkill(parent, opts.force) }]);
    return;
  }

  const interactive = process.stdin.isTTY && process.stdout.isTTY && !opts.yes;
  const needsChoice = !opts.scope || (!opts.agents.length && !opts.all);
  if (needsChoice && interactive) {
    await chooseInteractively(opts);
  } else {
    opts.scope = opts.scope || "project";
    if (!opts.agents.length && !opts.all) {
      opts.agents = detect(opts.scope).map((t) => t.id);
      if (!opts.agents.length) {
        fail(`Could not detect which tool you use ${opts.scope === "global" ? "on this computer" : "in this folder"}.\n` +
          `Name it, for example: npx ${SKILL_NAME} install --agent cursor\n` +
          `Choices: ${TARGETS.map((t) => t.id).join(", ")}`);
      }
    }
  }

  const results = resolveTargets(opts).map((t) => ({
    label: t.label, id: t.id, ...copySkill(skillsDir(t, opts.scope), opts.force),
  }));
  report(results);

  if (results.some((r) => r.id === "claude" && r.action !== "skipped")) {
    console.log(dim("Claude Code tip: you can also install this as a plugin. See the README."));
  }
}

function report(results) {
  let ok = 0;
  for (const r of results) {
    if (r.action === "skipped") {
      console.log(`${yellow("skipped ")} ${r.label}: ${r.reason}\n         ${dim(tildify(r.dest))}`);
    } else {
      ok++;
      console.log(`${green(r.action.padEnd(8))} ${r.label}\n         ${dim(tildify(r.dest))}`);
    }
  }
  if (ok) {
    console.log(`\n${bold("Next steps")}`);
    console.log("  1. Restart or reload your AI coding tool so it picks up the skill.");
    console.log("  2. Open a project or paste the text you want to edit.");
    console.log('  3. Ask: "Rewrite this so it does not sound like AI wrote it."\n');
  } else {
    process.exitCode = 1;
  }
}

function locations() {
  const rows = [];
  for (const scope of ["project", "global"]) {
    for (const t of TARGETS) {
      const dest = path.join(skillsDir(t, scope), SKILL_NAME);
      if (!rows.some((r) => r.dest === dest)) rows.push({ t, scope, dest });
    }
  }
  return rows;
}

function status() {
  const found = locations().filter((r) => isOurSkill(r.dest));
  if (!found.length) {
    console.log(`Not installed in this project or your home folder.\nRun: npx ${SKILL_NAME} install`);
    return;
  }
  console.log(bold("Installed in:"));
  for (const r of found) console.log(`  ${r.t.label} ${dim("(" + r.scope + ")")}  ${tildify(r.dest)}`);
}

function uninstall(opts) {
  let rows;
  if (opts.dir) {
    rows = [{ t: { label: "Custom folder" }, dest: path.join(path.resolve(opts.dir), SKILL_NAME) }];
  } else {
    rows = locations();
    if (opts.scope) rows = rows.filter((r) => r.scope === opts.scope);
    if (opts.agents.length && !opts.all) {
      const ids = resolveTargets(opts).map((t) => t.id);
      rows = rows.filter((r) => ids.includes(r.t.id));
    } else if (!opts.all && !opts.yes && !opts.scope) {
      fail(`Say what to remove, for example:\n  npx ${SKILL_NAME} uninstall --agent cursor\n  npx ${SKILL_NAME} uninstall --all`);
    }
  }
  let removed = 0;
  for (const r of rows) {
    if (!fs.existsSync(r.dest)) continue;
    if (!isOurSkill(r.dest) && !opts.force) {
      console.log(`${yellow("skipped ")} ${tildify(r.dest)} ${dim("(not this skill; use --force)")}`);
      continue;
    }
    fs.rmSync(r.dest, { recursive: true, force: true });
    console.log(`${green("removed ")} ${r.t.label}  ${dim(tildify(r.dest))}`);
    removed++;
  }
  if (!removed) console.log("Nothing to remove.");
}

function targets() {
  console.log(bold("Supported tools\n"));
  const w = Math.max(...TARGETS.map((t) => t.id.length));
  for (const t of TARGETS) {
    console.log(`  ${bold(t.id.padEnd(w))}  ${t.label}`);
    console.log(`  ${" ".repeat(w)}  ${dim("project: " + t.project + "/   all projects: ~/" + t.global + "/")}`);
  }
  console.log(`\nAnother tool? Use --dir <its skills folder>. The skill follows the open Agent Skills format.`);
}

async function main() {
  const opts = parseArgs(process.argv.slice(2));
  switch (opts.command) {
    case "help": console.log(HELP); break;
    case "version": console.log(VERSION); break;
    case "targets": case "list": targets(); break;
    case "status": status(); break;
    case "uninstall": case "remove": uninstall(opts); break;
    case null: case "install": case "add": case "update": await install(opts); break;
    default: fail(`Unknown command: ${opts.command}\nRun "npx ${SKILL_NAME} --help" for usage.`);
  }
}

main().catch((err) => fail(err && err.message ? err.message : String(err)));
