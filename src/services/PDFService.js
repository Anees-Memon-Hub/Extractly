import * as pdfjsLib from 'pdfjs-dist';

// Configure PDF.js worker
pdfjsLib.GlobalWorkerOptions.workerSrc = new URL(
  'pdfjs-dist/build/pdf.worker.min.mjs',
  import.meta.url
).toString();

/**
 * Extract text from a PDF file.
 *
 * @param {File} file - PDF file selected by the user
 * @returns {Promise<string>} Extracted text
 */
export async function extractTextFromPDF(file) {
  if (!file || file.type !== 'application/pdf') {
    throw new Error('Please provide a valid PDF file.');
  }

  const arrayBuffer = await file.arrayBuffer();

  const pdf = await pdfjsLib.getDocument({
    data: arrayBuffer
  }).promise;

  let extractedText = '';

  for (let pageNumber = 1; pageNumber <= pdf.numPages; pageNumber++) {
    const page = await pdf.getPage(pageNumber);

    const textContent = await page.getTextContent();

    const pageText = textContent.items
      .map((item) => item.str)
      .join(' ');

    extractedText += `\n\n--- Page ${pageNumber} ---\n\n`;
    extractedText += pageText;
  }

  return extractedText.trim();
}