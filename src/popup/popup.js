import { UploadZone } from "../components/UploadZone";
import { ImagePreview } from "../components/ImagePreview";
import { ProgressBar } from "../components/ProgressBar";
import { TextEditor } from "../components/TextEditor";
import { Toolbar } from "../components/Toolbar";

document.querySelector("#upload-zone").innerHTML = UploadZone();

document.querySelector("#image-preview").innerHTML = ImagePreview();

document.querySelector("#progress-container").innerHTML = ProgressBar();

document.querySelector("#text-editor").innerHTML = TextEditor();

document.querySelector("#toolbar").innerHTML = Toolbar();