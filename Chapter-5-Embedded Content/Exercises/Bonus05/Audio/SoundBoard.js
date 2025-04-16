// Wait for the entire page (DOM) to be fully loaded before running the script
document.addEventListener("DOMContentLoaded", function () {
  // Select all elements with the class Audios
  const Audios = document.querySelectorAll('.Audios');

  // Loop through each audio element
  Audios.forEach(sample => {
    // Add a click to each audio element
    sample.addEventListener('click', function () {
      // Get the value of the data-audio attribute 
      const audioFile = this.getAttribute('data-audio');
      // If an audio file is specified
      if (audioFile) {
        // Create a new Audio object with the file path
        const audio = new Audio(audioFile);
        // Attempt to play the audio
        audio.play().catch(error => {
          // If playback fails
          console.error("Audio playback failed:", error);
        });
      } else {
        //if no audio file was found
        console.warn("No audio file specified in data-audio attribute.");
      }
    });
  });
});

