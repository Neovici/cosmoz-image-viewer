---
'@neovici/cosmoz-image-viewer': minor
---

Add abort signals and document disposal to the PDF loader, cancel page renders on demand, and release raster canvases after rendering. Build exported PDFs one image at a time to avoid fetching and retaining all source page buffers concurrently.
