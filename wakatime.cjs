const fs = require("fs");
const path = require("path");

// Create or locate the file in your project root
const filePath = path.join(__dirname, "hello.ts");

console.log("🟢 Writing 'Hello World' continuously... Press Ctrl+C to stop.\n");

// Function to append Hello World + timestamp
const writeLine = () => {
  const timestamp = new Date().toLocaleString();
  const line = `Hello World - ${timestamp}\n`;
  fs.appendFileSync(filePath, line);
  console.log(line.trim());
};

// Write every 1 second
const interval = setInterval(writeLine, 6000);

// Handle Ctrl+C cleanly
process.on("SIGINT", () => {
  clearInterval(interval);
  console.log("\n🛑 Stopped writing. Goodbye!");
  process.exit();
});
