import useGlobalConfig from '../../../context/global-config.context';
import { CONTEXT_CONFIG_NAMES } from '../../../constants';

export function useMusic() {
    const [ config ] = useGlobalConfig()
    const volumeMusica = (config[CONTEXT_CONFIG_NAMES.SOM_MUSICA])/10

    function startMusic(loop) {
      const audioContext = new AudioContext();

      const audioElement = document.querySelector("audio");
      audioElement.volume = volumeMusica
      audioElement.loop = loop

      if (audioContext.state === "suspended") {
        audioContext.resume();
      }
      audioElement.play();
    }

    function restartMusic(novoVolume) {
      const audioElement = document.querySelector("audio");
      audioElement.pause();
      audioElement.volume = novoVolume/10;
      audioElement.play();
    }

    return { restartMusic, startMusic }

}