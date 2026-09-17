# 🖼️ Extractly

A modern Chrome extension that extracts editable text from **images, screenshots, and text-based PDF documents**. Built with **Vite**, **Vanilla JavaScript**, **Chrome Extension Manifest V3**, **Tesseract.js**, and **PDF.js**, Extractly provides a fast, intuitive, and privacy-focused text extraction experience.

---

# ✨ Overview

Extractly is a lightweight browser-based text extraction extension that allows users to extract editable text from images and PDF documents directly within Chrome.

Whether you're copying notes from lecture screenshots, digitizing printed documents, extracting code snippets from images, or retrieving text from PDF files, Extractly streamlines the process through a simple interface.

The extension supports image uploads, drag-and-drop input, clipboard screenshots, PDF uploads, automatic OCR processing for images, PDF text extraction, editable output, and text export options.

---

# 🚀 Features

## 📝 Intelligent OCR Extraction

* Extract text from screenshots and image files
* Automatic OCR processing after image selection
* High-quality recognition powered by **Tesseract.js**
* Support for printed and handwritten-style text recognition
* Editable extracted text before copying or saving
* Live OCR progress indication

---

## 📄 PDF Text Extraction

* Upload PDF documents directly through the dedicated PDF input area
* Extract text from text-based PDF documents
* PDF processing powered by **PDF.js**
* Multi-page PDF text extraction
* Preserves page order during extraction
* Extracted PDF text appears directly in the editable text editor

> **Current limitation:** Scanned/image-only PDFs are not yet processed through OCR. Scanned PDF OCR is planned as a future improvement.

---

## 📂 Flexible Image Input

* Upload images from your device
* Drag and drop image support
* Paste screenshots directly using **Ctrl + V**
* Instant image preview
* Supports common image formats such as:

  * PNG
  * JPG
  * JPEG
  * WEBP

---

## 📑 Dedicated Image & PDF Input

Extractly provides separate input areas for different document types:

### Image Extraction

* Paste Screenshot
* Drag & Drop Image
* Browse Image

### PDF Extraction

* Upload PDF
* Drag & Drop PDF

This keeps the workflow simple and makes it clear which type of document is being processed.

---

## ⚡ Fast User Experience

* Automatic OCR starts after image selection
* Fast PDF text extraction
* Live extraction progress indicator
* Smooth loading states
* Responsive popup interface
* Lightweight Chrome extension
* Fast startup and processing

---

## 🌍 Multi-Language Recognition

* OCR support through Tesseract.js language models
* Language configuration support
* Designed for multilingual text extraction
* Local OCR processing

---

## 📋 Text Management

* Edit extracted text
* Copy extracted text with a single click
* Download extracted text as a file
* Clear extracted content
* Save extracted results for later use

---

## 🎨 Modern User Interface

* Clean and minimal design
* Glassmorphism-inspired components
* Responsive popup layout
* Separate image and PDF workflows
* Smooth transitions and animations
* Accessibility-focused interface

---

## 🔒 Privacy First

Extractly is designed around local processing.

* Image OCR is performed locally using **Tesseract.js**
* PDF text extraction is performed locally using **PDF.js**
* Images and PDF documents are not uploaded to an external OCR server
* No user account is required
* No cloud OCR processing is required
* Documents remain within the local browser workflow

---

# 🛠 Tech Stack

| Category           | Technology                      |
| ------------------ | ------------------------------- |
| Extension Platform | Chrome Extension Manifest V3    |
| Frontend           | Vanilla JavaScript (ES Modules) |
| Build Tool         | Vite                            |
| Image OCR Engine   | Tesseract.js                    |
| PDF Processing     | PDF.js (`pdfjs-dist`)           |
| Markup             | HTML5                           |
| Styling            | CSS3                            |
| Package Manager    | npm                             |
| Version Control    | Git & GitHub                    |

---

# 📁 Project Structure

```text
Extractly
│
├── public
│   ├── icons
│   └── manifest.json
│
├── src
│   ├── components
│   │   ├── ImageInputZone.js
│   │   ├── ImagePreview.js
│   │   ├── ProgressBar.js
│   │   ├── TextEditor.js
│   │   └── ToolBar.js
│   │
│   ├── services
│   │   ├── OCRService.js
│   │   └── PDFService.js
│   │
│   ├── styles
│   │   ├── reset.css
│   │   ├── variables.css
│   │   └── global.css
│   │
│   ├── utils
│   │
│   └── popup
│       ├── popup.css
│       └── popup.js
│
├── popup.html
├── vite.config.js
├── package.json
└── README.md
```

---

# ⚙️ Core Workflow

## 🖼️ Image Workflow

```text
Image / Screenshot
       ↓
Image Input
       ↓
Image Preview
       ↓
Tesseract.js OCR
       ↓
Progress Indicator
       ↓
Editable Text
       ↓
Copy / Download / Save
```

## 📄 PDF Workflow

```text
PDF Document
       ↓
PDF Input
       ↓
PDF.js
       ↓
Text Extraction
       ↓
Editable Text
       ↓
Copy / Download / Save
```

---

# 🚀 Getting Started

## Prerequisites

* Node.js 18 or later
* Google Chrome or another Chromium-based browser
* npm

---

## Installation

Clone the repository:

```bash
git clone https://github.com/Anees-Memon-Hub/Extractly.git
```

Navigate into the project:

```bash
cd Extractly
```

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

Build the extension for production:

```bash
npm run build
```

---

# 📦 Load the Extension in Chrome

1. Run the production build:

```bash
npm run build
```

2. Open:

```text
chrome://extensions
```

3. Enable **Developer Mode**.

4. Click **Load unpacked**.

5. Select the generated:

```text
dist
```

folder.

6. Pin **Extractly** to the Chrome toolbar.

7. Open the extension and test image or PDF extraction.

---

# 🎯 Use Cases

* Extract notes from lecture screenshots
* Copy text from scanned images
* Digitize printed materials
* Extract code snippets from images
* Convert screenshots into editable text
* Extract text from PDF documents
* Retrieve text from presentations
* Academic and research workflows
* Professional document processing
* Quickly convert visual information into editable text

---

# 🔮 Future Improvements

## PDF & OCR

* Scanned PDF OCR
* Automatic detection of text-based vs scanned PDFs
* OCR processing for image-only PDF pages
* Multi-page PDF OCR progress tracking

## Image Processing

* Batch image processing
* Region selection and cropping
* Image preprocessing for improved OCR accuracy
* Automatic language detection

## Text & Export

* Searchable OCR history
* Export to PDF
* Export to DOCX
* Export to Markdown
* Improved text formatting preservation
* AI-assisted text cleanup

## User Experience

* Dark and light themes
* Custom keyboard shortcuts
* Improved accessibility
* Offline language pack management
* Drag-and-drop improvements
* Advanced document preview

## Synchronization

* Optional cloud synchronization
* Cross-device settings synchronization

---

# 📸 Screenshots

<img width="295" height="261" alt="Extractly screenshot" src="https://github.com/user-attachments/assets/eebcb159-7bad-4b48-9868-9842e3e56618" />

<img width="289" height="407" alt="Extractly screenshot" src="https://github.com/user-attachments/assets/96b64603-687e-4708-bba4-ee819b9b6225" />

---

# 👨‍💻 Developer

| Name            | GitHub                                                |
| --------------- | ----------------------------------------------------- |
| **Anees Memon** | [Anees-Memon-Hub](https://github.com/Anees-Memon-Hub) |

---

# 🤝 Contributing

Contributions, feature requests, and bug reports are welcome.

If you'd like to contribute:

1. Fork the repository.
2. Create a feature branch.
3. Make your changes.
4. Run the project tests/build.
5. Commit your changes using a clear commit message.
6. Push your branch.
7. Open a Pull Request.

---

# ⭐ Support

If you found Extractly useful, consider giving the project a **⭐ Star** on GitHub.

Your support helps the project grow and encourages future development.

---

# 📄 License

This project is licensed under the **MIT License**.

See the `LICENSE` file for more information.
