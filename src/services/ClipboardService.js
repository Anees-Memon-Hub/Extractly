export function initializeClipboard(onImagePaste) {

    document.addEventListener("paste", (event) => {

        const items = event.clipboardData.items;

        for (const item of items) {

            if (!item.type.startsWith("image/")) {
                continue;
            }

            const file = item.getAsFile();

            if (file) {
                onImagePaste(file);
            }

            break;
        }

    });

}

export async function copyToClipboard(text) {
    await navigator.clipboard.writeText(text);
}