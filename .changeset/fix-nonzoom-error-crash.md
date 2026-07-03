---
'@neovici/cosmoz-image-viewer': patch
---

Fix crash when image fails to load in non-zoom path

Split error handlers so the non-zoom `<img>` error handler correctly
traverses the DOM to find the `.error` container, instead of returning
null and crashing on `removeAttribute`.
