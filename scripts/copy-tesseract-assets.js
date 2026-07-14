import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(__dirname, "..");

const destDir = path.join(root, "public", "tesseract");
fs.mkdirSync(destDir, { recursive: true });

// 1. Worker script
const workerSrc = path.join(root, "node_modules", "tesseract.js", "dist", "worker.min.js");
fs.copyFileSync(workerSrc, path.join(destDir, "worker.min.js"));
console.log("Copied worker.min.js");

// 2. WASM core — filename varies by version, so find whichever
//    LSTM-only build is present (smallest, and all this project needs).
const coreDir = path.join(root, "node_modules", "tesseract.js-core");
const files = fs.readdirSync(coreDir);

const coreFile =
    files.find((f) => f.includes("simd-lstm") && f.endsWith(".wasm.js")) ||
    files.find((f) => f.endsWith(".wasm.js"));

if (!coreFile) {
    throw new Error(
        "Could not find a tesseract-core '.wasm.js' file in node_modules/tesseract.js-core. " +
        "Check that 'npm install tesseract.js' completed successfully."
    );
}

fs.copyFileSync(path.join(coreDir, coreFile), path.join(destDir, "tesseract-core.wasm.js"));
console.log(`Copied ${coreFile} -> tesseract-core.wasm.js`);

// Some versions ship a matching standalone .wasm binary alongside the .wasm.js loader.
const wasmBinary = coreFile.replace(".wasm.js", ".wasm");
if (fs.existsSync(path.join(coreDir, wasmBinary))) {
    fs.copyFileSync(path.join(coreDir, wasmBinary), path.join(destDir, "tesseract-core.wasm"));
    console.log(`Copied ${wasmBinary} -> tesseract-core.wasm`);
}

console.log("\nDone. Don't forget to manually place eng.traineddata.gz in public/tesseract/ too.");