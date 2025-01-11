const os = require("os");
const fs = require("fs");
const path = require("path");

// Gather system information
const systemInfo = {
  osType: os.type(),
  totalMemory: os.totalmem(),
  freeMemory: os.freemem(),
  cpuDetails: os.cpus(),
};

// Convert system information to a readable format
const systemInfoText = `
OS Type: ${systemInfo.osType}
Total Memory: ${systemInfo.totalMemory / 1024 ** 3} GB Free Memory: ${
  systemInfo.freeMemory / 1024 ** 3
} GB
CPU Details: ${JSON.stringify(systemInfo.cpuDetails, null, 2)}
`;

// Define log file path
const logDir = path.join(dirname, "logs");

const logFilePath = path.join(logDir, "system-info.txt");

// Ensure logs directory exists
if (!fs.existsSync(logDir)) {
  fs.mkdirSync(logDir);
}

// Write system information to log file
fs.writeFileSync(logFilePath, systemInfoText, "utf8");

console.log("System information logged to:", logFilePath);
