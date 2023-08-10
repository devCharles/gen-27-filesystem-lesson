const fs = require("fs");

const obj = [{ name: "charles" }, { name: "mario" }, { name: "pepe" }];

const objString = JSON.stringify(obj);

fs.writeFileSync("nombres.json", objString, "utf-8");
