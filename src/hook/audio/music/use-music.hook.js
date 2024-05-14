import { useMusicsData } from './use-musics-data.hook';

export function useMusic() {
    const { MUSICS_DATA } = useMusicsData()

    function _findAudioPlaying() {
      var sounds = Howler._howls;
      for (var i = 0; i < sounds.length; i++) {
        if (sounds[i].playing()) {
          return sounds[i];
        }
      }
      return null;
    }

    function restartMusic(volume) {
        const audio = _findAudioPlaying()
        audio.pause()
        audio.volume(volume/10)
        audio.play()
    }

    function playBattle1() {
      Howler.stop()
      MUSICS_DATA.BATTLE_1.play();
    }

    return { restartMusic, playBattle1 }

}