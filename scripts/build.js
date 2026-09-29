const fs = require("node:fs");

fs.rmSync("dist", { recursive: true, force: true });
fs.mkdirSync("dist");
fs.writeFileSync("dist/index.js", "console.log('build ok');\n");
