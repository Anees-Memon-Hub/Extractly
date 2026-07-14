import { getExtractedText, clearExtractedText } from "./TextEditor";
import { copyToClipboard } from "../services/ClipboardService";

export function Toolbar() {
    return `
        <div class="toolbar">

            <button class="btn btn-ghost" id="clear-btn" type="button" disabled>Clear</button>

            <button class="btn btn-ghost" id="download-btn" type="button" disabled>Download</button>

            <button class="btn btn-primary" id="copy-btn" type="button" disabled>Copy</button>

        </div>
    `;
}

export function initializeToolbar() {
    const clearBtn = document.querySelector("#clear-btn");
    const downloadBtn = document.querySelector("#download-btn");
    const copyBtn = document.querySelector("#copy-btn");
    const textarea = document.querySelector("#output-text");

    if (!clearBtn || !downloadBtn || !copyBtn || !textarea) {
        console.error("Toolbar elements not found.");
        return;
    }

    function updateButtonStates() {
        const hasText = textarea.value.length > 0;
        clearBtn.disabled = !hasText;
        copyBtn.disabled = !hasText;
        // downloadBtn stays disabled until DownloadService.js exists.
    }

    updateButtonStates();
    textarea.addEventListener("input", updateButtonStates);

    clearBtn.addEventListener("click", () => {
        clearExtractedText();
        updateButtonStates();
    });

    copyBtn.addEventListener("click", async () => {
        const text = getExtractedText();
        if (!text) return;

        try {
            await copyToClipboard(text);
        } catch (err) {
            console.error("Copy failed:", err);
        }
    });

    // TODO: once DownloadService.js is implemented, e.g.:
    //
    //   import { downloadTextFile } from "../services/DownloadService";
    //
    //   downloadBtn.addEventListener("click", () => {
    //       downloadTextFile(getExtractedText());
    //   });
}