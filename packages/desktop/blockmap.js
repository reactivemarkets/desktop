/* eslint-disable @typescript-eslint/no-var-requires */
const { execSync } = require("child_process");
const yaml = require("js-yaml");
const fs = require("fs");
const info = require("./package.json");

console.log("Generating blockmap.");
const blockmapExe = `../../node_modules/app-builder-bin/mac/app-builder blockmap -i pack/${info.productName}-${info.version}-darwin-x64.zip -o pack/blockmap.zip`;

const blockmap = JSON.parse(execSync(blockmapExe).toString());
blockmap.blockMapSize = parseInt(
    execSync("ls -l pack/blockmap.zip | awk '{print $5}' && rm pack/blockmap.zip").toString(),
);

const latestMacFile = "pack/latest-mac.yml";
const encoding = "utf8";
const lineWidth = 65535;

console.log("Reading existing latest-mac.yml");
const latest = fs.readFileSync(latestMacFile, encoding);

const doc = yaml.safeLoad(latest);

doc.files[0].sha512 = blockmap.sha512;
doc.files[0].size = blockmap.size;
doc.files[0].blockMapSize = blockmap.blockMapSize;
doc.sha512 = blockmap.sha512;

console.log("Updating latest-mac.yml with latest blockmap.");

fs.writeFileSync(latestMacFile, yaml.safeDump(doc, { lineWidth }), encoding);
