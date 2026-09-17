import { renderPreviewImage } from "./ImagePreview";
import { setExtractedText } from "./TextEditor";
import { showProgress, hideProgress } from "./ProgressBar";
import { extractTextFromImage } from "../services/OCRService";
import { extractTextFromPDF } from "../services/PDFService";

export function initializeImageInputZone() {
    console.log("ImageInputZone initialized");

    const imageInputZone = document.querySelector(".image-input-zone");
    const pdfInputZone = document.querySelector(".pdf-input-zone");

    const imageInput = document.querySelector("#image-input");
    const pdfInput = document.querySelector("#pdf-input");

    if (!imageInputZone || !imageInput || !pdfInputZone || !pdfInput) {
        console.error("Image or PDF input zone not found.");
        return;
    }

    // Image upload
    imageInputZone.addEventListener("click", () => {
        imageInput.value = "";
        imageInput.click();
    });

    imageInput.addEventListener("change", (event) => {
        const file = event.target.files[0];

        if (file) {
            handleImage(file);
        }
    });

    // Image drag & drop
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

        if (file) {
            handleImage(file);
        }
    });

    // PDF upload
    pdfInputZone.addEventListener("click", () => {
        pdfInput.value = "";
        pdfInput.click();
    });

    pdfInput.addEventListener("change", (event) => {
        const file = event.target.files[0];

        if (file) {
            handlePDF(file);
        }
    });

    // PDF drag & drop
    pdfInputZone.addEventListener("dragover", (event) => {
        event.preventDefault();
        pdfInputZone.classList.add("dragging");
    });

    pdfInputZone.addEventListener("dragleave", () => {
        pdfInputZone.classList.remove("dragging");
    });

    pdfInputZone.addEventListener("drop", (event) => {
        event.preventDefault();
        pdfInputZone.classList.remove("dragging");

        const file = event.dataTransfer.files[0];

        if (file) {
            handlePDF(file);
        }
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
        console.error("Image OCR failed. Full details:", {
            err,
            message: err?.message,
            stack: err?.stack,
            stringified: JSON.stringify(err),
        });
    } finally {
        hideProgress();
    }
}

export async function handlePDF(file) {
    if (!file || file.type !== "application/pdf") {
        console.warn("Selected file is not a PDF.");
        return;
    }

    console.log("PDF selected:", file.name);

    setExtractedText("");
    showProgress(0);

    try {
        const text = await extractTextFromPDF(file);

        setExtractedText(text);
    } catch (err) {
        console.error("PDF extraction failed. Full details:", {
            err,
            message: err?.message,
            stack: err?.stack,
            stringified: JSON.stringify(err),
        });
    } finally {
        hideProgress();
    }
}