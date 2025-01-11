# System-Info-with-NODE.js
# System Information Logger

This Node.js script gathers system information and saves it to a log file in a structured format.

## Features
- Retrieves system details including:
  - Operating System Type
  - Total Memory
  - Free Memory
  - CPU Details
- Formats the system information into a human-readable structure.
- Saves the information to a file named `system-info.txt` inside a `logs` directory.

## Prerequisites
- Node.js installed on your system.

## How It Works
1. **Gather System Information**  
   The script uses the `os` module to gather details about the system's operating system, memory, and CPU.
   
2. **Format the Information**  
   The information is converted into a formatted string for readability.
   
3. **Log File Path**  
   The file is saved in a directory called `logs` in the same directory as the script.

4. **Ensure Directory Exists**  
   The script checks for the existence of the `logs` directory and creates it if not present.

5. **Write Information to File**  
   The formatted information is written to `system-info.txt`.

## Script Breakdown
```javascript
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
