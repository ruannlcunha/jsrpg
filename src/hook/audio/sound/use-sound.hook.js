import { SOUNDS } from "../../../constants/audios/sounds.constant"
import { CONTEXT_CONFIG_NAMES } from "../../../constants"
import useGlobalConfig from "../../../context/global-config.context"

export function useSound() {
    const [ config ] = useGlobalConfig()
    const volumeEfeitos = (config[CONTEXT_CONFIG_NAMES.SOM_EFEITOS])/10

    function playSound(audio) {
        const novoAudio = new Audio(audio)
        novoAudio.volume = volumeEfeitos
        novoAudio.play()
    }

    function playHover(id) {
        const audio = new Audio(SOUNDS[`HOVER_${id}`])
        audio.volume = volumeEfeitos
        audio.play()
    }

    function playClick(id) {
        const audio = new Audio(SOUNDS[`CLICK_${id}`])
        audio.volume = volumeEfeitos
        audio.play()
    }

    function playBanner() {
        const audio = new Audio(SOUNDS.BANNER)
        audio.volume = volumeEfeitos
        audio.play()
    }

    function playDado() {
        const audio = new Audio(SOUNDS.DADO)
        audio.volume = volumeEfeitos
        audio.play()
    }

    function playDadoResultado() {
        const audio = new Audio(SOUNDS.DADO_RESULTADO)
        audio.volume = volumeEfeitos
        audio.play()
    }

    return { playSound, playHover, playClick, playBanner, playDado, playDadoResultado}

}