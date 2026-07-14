export default {
  manifest_version: 3,

  name: "Extractly",

  description: "Extract text from screenshots and images using OCR.",

  version: "1.0.0",

  action: {
    default_popup: "popup.html"
  },

  content_security_policy: {
    extension_pages: "script-src 'self' 'wasm-unsafe-eval'; object-src 'self';"
  }

};