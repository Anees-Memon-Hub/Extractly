import { renderPreviewImage } from "./ImagePreview";
import { setExtractedText } from "./TextEditor";
import { showProgress, hideProgress } from "./ProgressBar";
import { extractTextFromImage } from "../services/OCRService";

export function initializeImageInputZone() {
    console.log("ImageInputZone initialized");

    const imageInputZone = document.querySelector(".image-input-zone");
    const fileInput = document.querySelector("#image-input");

    if (!imageInputZone || !fileInput) {
        console.error("Image Input Zone not found.");
        return;
    }

    imageInputZone.addEventListener("click", () => {
        fileInput.value = "";
        fileInput.click();
    });

    fileInput.addEventListener("change", (event) => {
        const file = event.target.files[0];
        handleImage(file);
    });

    // Drag & drop support
    imageInputZone.addEventListener("dragover", (event) => {
        event.preventDefault();
        imageInputZone.classList.add("dragging");
    });

    imageInputZone.addEventListener("dragleave", () => {
        imageInputZone.classList.remove("dragging");
    });

    imageInputZone.addEventListener("drop", (event) => {
        event.preventDefault();
        imageInputZone.classList.remove("dragging");

        const file = event.dataTransfer.files[0];
        handleImage(file);
    });
}

export async function handleImage(file) {
    if (!file || !file.type.startsWith("image/")) {
        console.warn("Selected file is not an image.");
        return;
    }

    console.log("Image selected:", file.name || "(pasted image)");

    renderPreviewImage(file);
    setExtractedText("");
    showProgress(0);

    try {
        const text = await extractTextFromImage(file, (fraction) => {
            showProgress(fraction);
        });
        setExtractedText(text);
    } catch (err) {
        console.error("OCR failed. Full details:", {
            err,
            message: err?.message,
            stack: err?.stack,
            stringified: JSON.stringify(err),
        });
    } finally {
        hideProgress();
    }
}