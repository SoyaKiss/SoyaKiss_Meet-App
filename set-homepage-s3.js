const fs = require("fs");

const packageJson = JSON.parse(fs.readFileSync("package.json"));
packageJson.homepage = "http://soyasmeetapp.s3-website-us-east-1.amazonaws.com";
fs.writeFileSync("package.json", JSON.stringify(packageJson, null, 2));
