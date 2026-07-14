import { initializeImageInputZone, handleImage } from "../components/ImageInputZone";
import { ImagePreview } from "../components/ImagePreview";
import { TextEditor } from "../components/TextEditor";
import { Toolbar, initializeToolbar } from "../components/Toolbar";
import { ProgressBar } from "../components/ProgressBar";
import { initializeClipboard } from "../services/ClipboardService";

console.log("Popup initialized");

// Mount components into their containers
document.querySelector("#progress-mount").innerHTML = ProgressBar();
document.querySelector("#preview-mount").innerHTML = ImagePreview();
document.querySelector("#editor-mount").innerHTML = TextEditor();
document.querySelector("#toolbar-mount").innerHTML = Toolbar();

// Wire up interactivity
initializeImageInputZone();
initializeToolbar();

// Pasting an image anywhere in the popup routes through the same
// handleImage() path as clicking or dragging a file in.
initializeClipboard((file) => {
    handleImage(file);
});