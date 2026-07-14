export function ImagePreview() {
    return `
        <div class="image-preview empty" id="image-preview">

            <span>No image selected</span>

        </div>
    `;
}

export function renderPreviewImage(file) {
    const container = document.querySelector("#image-preview");
    if (!container) return;

    const url = URL.createObjectURL(file);

    container.classList.remove("empty");
    container.innerHTML = `<img src="${url}" alt="Selected screenshot preview">`;
}

export function clearPreviewImage() {
    const container = document.querySelector("#image-preview");
    if (!container) return;

    container.classList.add("empty");
    container.innerHTML = `<span>No image selected</span>`;
}