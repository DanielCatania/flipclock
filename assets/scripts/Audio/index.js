export default class AudioControl {
  static $flipAudioElement = document.querySelector(".flip_audio");
  static $breakAudioElement = document.querySelector(".break_audio");
  static isMute = false;

  static changeIsMute() {
    const $soundStatusElement = document.querySelector(".sound_status");
    AudioControl.isMute = !AudioControl.isMute;

    $soundStatusElement.innerHTML = AudioControl.isMute ? "🔇" : "🔊";
  }

  static flip() {
    if (!AudioControl.isMute) this.$flipAudioElement.play();
  }

  static break() {
    this.$breakAudioElement.play();
  }
}
