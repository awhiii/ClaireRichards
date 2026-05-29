const modal = document.querySelector("#video-modal");
const frame = document.querySelector("#video-frame");
const closeButton = document.querySelector("#video-close");
const videoButtons = document.querySelectorAll(".video-thumb");

function openVideo(embedUrl) {
  if (!modal || !frame) return;

  const hasQuery = embedUrl.includes("?");
  const autoplayUrl = embedUrl + (hasQuery ? "&" : "?") + "autoplay=1";

  frame.src = autoplayUrl;
  modal.classList.add("is-open");
  modal.setAttribute("aria-hidden", "false");
}

function closeVideo() {
  if (!modal || !frame) return;

  frame.src = "";
  modal.classList.remove("is-open");
  modal.setAttribute("aria-hidden", "true");
}

videoButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const embedUrl = button.dataset.embed;
    if (!embedUrl) return;

    openVideo(embedUrl);
  });
});

if (closeButton) {
  closeButton.addEventListener("click", closeVideo);
}

if (modal) {
  modal.addEventListener("click", (event) => {
    if (event.target === modal) {
      closeVideo();
    }
  });
}

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    closeVideo();
  }
});