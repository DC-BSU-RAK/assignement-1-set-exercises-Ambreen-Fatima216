// Wait for the entire page (DOM) to be fully loaded before running the script
document.addEventListener("DOMContentLoaded", function () {
  // Select all elements with the class Audios
  const soundButtons = document.querySelectorAll('.Audios');

  // Loop through each audio element
  soundButtons.forEach(button => {
    // Add a click to each audio element
    button.addEventListener('click', function () {
      // Get the value of the data-audio attribute 
      const file = this.getAttribute('data-audio');
      // If an audio file is specified
      if (file) {
        // Create a new Audio object with the file path
        const clip = new Audio(file);
        // Attempt to play the audio
        clip.play().catch(err => {
          // If playback fails
          console.error("Audio playback failed:", err);
        });
      } else {
        //if no audio file was found
        console.warn("No audio file specified in data-audio attribute.");
      }
    });
  });

  // Text-to-speech setup
  const speakInput = document.getElementById("text-to-speech");
  const goBtn = document.getElementById("speak-button");

  if (speakInput && goBtn) {
    function readOutLoud() {
      let userText = speakInput.value;
      let voice = new SpeechSynthesisUtterance();
      voice.lang = "en-US";
      voice.text = userText;
      voice.volume = 1;
      voice.rate = 0.5;
      voice.pitch = 1;
      window.speechSynthesis.speak(voice);
    }

    goBtn.addEventListener("click", function () {
      speakInput.classList.add("animate-input");
      goBtn.classList.add("animate-button");

      setTimeout(readOutLoud, 500);
      setTimeout(function () {
        speakInput.classList.remove("animate-input");
        goBtn.classList.remove("animate-button");
      }, 1000);
    });
  }
});
