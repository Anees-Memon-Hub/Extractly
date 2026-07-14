import { createWorker } from "tesseract.js";

let workerPromise = null;
let progressCallback = null;

function getWorker() {
    if (!workerPromise) {
        console.log("[OCRService] Creating worker...");
        console.log("[OCRService] workerPath:", chrome.runtime.getURL("tesseract/worker.min.js"));
        console.log("[OCRService] corePath:", chrome.runtime.getURL("tesseract/tesseract-core.wasm.js"));
        console.log("[OCRService] langPath:", chrome.runtime.getURL("tesseract"));

        workerPromise = createWorker("eng", 1, {
            workerPath: chrome.runtime.getURL("tesseract/worker.min.js"),
            corePath: chrome.runtime.getURL("tesseract/tesseract-core.wasm.js"),
            langPath: chrome.runtime.getURL("tesseract"),
            workerBlobURL: false,
            logger: (message) => {
                console.log("[OCRService] logger:", message);
                if (message.status === "recognizing text" && progressCallback) {
                    progressCallback(message.progress);
                }
            },
        })
            .then((w) => {
                console.log("[OCRService] Worker created successfully.");
                return w;
            })
            .catch((err) => {
                console.error("[OCRService] createWorker failed:", err);
                workerPromise = null; // allow retry next time instead of caching a dead promise
                throw err;
            });
    }

    return workerPromise;
}

/**
 * Runs OCR on an image file and returns the extracted text.
 * @param {File} file
 * @param {(progress: number) => void} [onProgress] - called with 0..1
 */
export async function extractTextFromImage(file, onProgress) {
    progressCallback = onProgress || null;

    try {
        console.log("[OCRService] Getting worker...");
        const worker = await getWorker();

        console.log("[OCRService] Running recognize()...");
        const { data } = await worker.recognize(file);

        console.log("[OCRService] Recognition complete. Text length:", data.text.length);
        return data.text.trim();
    } catch (err) {
        console.error("[OCRService] extractTextFromImage failed:", err, err?.message, err?.stack);
        throw err;
    } finally {
        progressCallback = null;
    }
}