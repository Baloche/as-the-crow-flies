const { resolve } = require("path");
const { defineConfig } = require("vite");

module.exports = defineConfig({
  base: "/as-the-crow-flies/",
  build: {
    rollupOptions: {
      input: {
        "": resolve(__dirname, "index.html"),
        "privacy-policy": resolve(__dirname, "privacy-policy/index.html"),
      },
    },
  },
});
