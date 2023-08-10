const fs = require("fs");

fs.appendFileSync("hola.txt", "Nuevo texto desde node", "utf-8");
