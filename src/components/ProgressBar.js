export function ProgressBar() {
    return `
        <div class="progress hidden" id="progress">

            <div class="progress-bar" id="progress-bar"></div>

        </div>
    `;
}

export function showProgress(fraction = 0) {
    const container = document.querySelector("#progress");
    const bar = document.querySelector("#progress-bar");
    if (!container || !bar) return;

    container.classList.remove("hidden");
    bar.style.width = `${Math.round(fraction * 100)}%`;
}

export function hideProgress() {
    const container = document.querySelector("#progress");
    if (!container) return;

    container.classList.add("hidden");
}