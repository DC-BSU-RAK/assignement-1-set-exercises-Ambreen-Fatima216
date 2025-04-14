document.addEventListener("DOMContentLoaded", function () {
    const samples = document.querySelectorAll('.sample');

    samples.forEach(sample => {
      sample.addEventListener('click', function () {
        const audioFile = this.getAttribute('data-audio');
        if (audioFile) {
          const audio = new Audio(audioFile);
          audio.play().catch(error => {
            console.error("Audio playback failed:", error);
          });
        } else {
          console.warn("No audio file specified in data-audio attribute.");
        }
      });
    });
  });