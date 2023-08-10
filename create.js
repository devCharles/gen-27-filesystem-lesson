const fs = require("fs");

fs.writeFileSync(process.env.HOME + "/hola.txt", "Hola desde node", "utf-8");
