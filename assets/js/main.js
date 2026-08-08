// Vanilla JS for Lightbox
function openLightbox(element) {
  // Find the image inside the clicked card
  const imgElement = element.querySelector("img");
  if (imgElement) {
    const lightbox = document.getElementById("certificateLightbox");
    const lightboxImg = document.getElementById("lightboxImage");

    // Set the lightbox image source to the clicked image source
    lightboxImg.src = imgElement.src;

    // Optionally, set caption
    const caption =
      element.querySelector("p.font-bold")?.innerText || "Certificate";
    document.getElementById("caption").innerText = caption;

    // Show lightbox
    lightbox.style.display = "block";
  }
}

function closeLightbox() {
  document.getElementById("certificateLightbox").style.display = "none";
}

// Close lightbox when clicking outside the image
document
  .getElementById("certificateLightbox")
  .addEventListener("click", function (event) {
    if (event.target === this) {
      closeLightbox();
    }
  });
