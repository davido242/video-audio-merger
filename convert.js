import ffmpeg from "fluent-ffmpeg";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const audioPath = path.join(__dirname, "motivate.wav");
const imagePath = path.join(__dirname, "test1.png");
const outputPath = path.join(__dirname, "output.mp4");

console.log("🎬 Generating video...");

ffmpeg()
  .input(imagePath)
  .loop()
  .input(audioPath)
  .outputOptions([
  "-c:v libx264",
  "-tune stillimage",
  "-vf scale=1920:1080,format=yuv420p",
  "-c:a aac",
  "-b:a 192k",
  "-shortest"
])
  .save(outputPath)
  .on("end", () => console.log("✅ Done! File saved as output.mp4"))
  .on("error", (err) => console.error("❌ Error:", err));