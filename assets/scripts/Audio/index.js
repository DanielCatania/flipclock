export default class AudioControl {
  static $flipAudioElement = document.querySelector(".flip_audio");

  static flip() {
    this.$flipAudioElement.play();
  }
}
