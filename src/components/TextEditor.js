export function TextEditor() {
    return `
        <textarea
            id="output-text"
            placeholder="Extracted text will appear here..."
            spellcheck="false"
            readonly
        ></textarea>
    `;
}

export function setExtractedText(text) {
    const textarea = document.querySelector("#output-text");
    if (!textarea) return;

    textarea.value = text;
    // Lets anything listening (like the toolbar's button states) react.
    textarea.dispatchEvent(new Event("input"));
}

export function clearExtractedText() {
    setExtractedText("");
}

export function getExtractedText() {
    const textarea = document.querySelector("#output-text");
    return textarea ? textarea.value : "";
}