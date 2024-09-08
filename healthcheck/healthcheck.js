const path = require("path");
const fs = require("fs");
const distPath = path.join(process.cwd(), "dist");

function healthCheck() {
	fs.existsSync(distPath) ? process.exit(0) : setTimeout(healthCheck, 1000);
}

healthCheck();
