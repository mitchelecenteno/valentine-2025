import { Component } from '@angular/core';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss'],
})
export class MainPageComponent {
  showGif!: boolean;
  additionalGif!: string;
  selectedGif: string | null = null;
  yesButton!: boolean;
  isShaking: boolean = false;
  private audio: HTMLAudioElement | null = null; // Track audio instance
  choiceYes!: boolean;

  ngOnInit() {
    this.isShaking = true;
  }

  // Play sad sound
  playSadSound() {
    if (this.audio) {
      this.audio.pause(); // Stop previous audio if any
      this.audio.currentTime = 0; // Reset audio to the start
    }
    this.audio = new Audio('./../assets/mp3/sad-meow.mp3');
    this.audio.play();
  }

  playHappySound() {
    if (this.audio) {
      this.audio.pause(); // Stop previous audio if any
      this.audio.currentTime = 0; // Reset audio to the start
    }
    this.audio = new Audio('./../assets/mp3/happy-meow.mp3');
    this.audio.play();
  }

  // Handle button clicks (YES/NO)
  onClick(choice: string) {
    if (choice === 'yes') {
      this.choiceYes = true;
      // Play happy sound and show GIF
      this.playHappySound();

      this.selectedGif = '../../assets/gif/goofy.gif'; // Show selected GIF
      setTimeout(() => {}, 1000);

      this.additionalGif = '../../assets/gif/celeb-cat.gif'; // Set additional GIF for YES
    } else {
      // Play sad sound and reset states for NO
      this.playSadSound();
      this.isShaking = false; // Stop shaking effect

      this.selectedGif = '../../assets/gif/cat-smack.gif'; // Show NO selected GIF
      this.additionalGif = ''; // Reset additional GIF

      // Hide the selected GIF and reset shaking effect after 6 seconds
      setTimeout(() => {
        this.selectedGif = null;
        this.isShaking = true; // Enable shaking again after GIF disappears
      }, 6000);
    }
  }
}
