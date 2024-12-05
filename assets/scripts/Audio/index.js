export default class AudioControl {
  static $flipAudioElement = document.querySelector(".flip_audio");
  static $breakAudioElement = document.querySelector(".break_audio");

  static flip() {
    this.$flipAudioElement.play();
  }

  static break() {
    this.$breakAudioElement.play();
  }
}
