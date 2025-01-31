// Automatically play music after a small delay or when the user interacts with the page
window.onload = function () {
  const birthdayMusic = document.getElementById("birthdayMusic");

  // Try to play music automatically after a small delay
  setTimeout(() => {
    birthdayMusic.play().catch(() => {
      // If autoplay is blocked, wait for user interaction
      document.body.addEventListener(
        "click",
        () => {
          birthdayMusic.play();
        },
        { once: true }
      ); // Only listen for the first click
    });
  }, 1000); // 1-second delay
};

// Reveal surprise text when the "Click for a Surprise!" button is clicked
document
  .getElementById("surpriseButton")
  .addEventListener("click", function () {
    const surpriseText = document.getElementById("surpriseText");
    surpriseText.classList.remove("hidden");
    surpriseText.classList.add("visible");
  });
