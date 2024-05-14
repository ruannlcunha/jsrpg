import { CONTEXT_CONFIG_NAMES } from "../../../constants";
import { SOUNDS } from "../../../constants/audios/sounds.constant";
import { Howl } from 'howler';
import useGlobalConfig from "../../../context/global-config.context"

export function useSoundsData() {
    const [ config ] = useGlobalConfig()
    const volumeEfeitos = (config[CONTEXT_CONFIG_NAMES.SOM_EFEITOS])/10

    const HOVER = new Howl({
        src: [SOUNDS.HOVER],
        volume: volumeEfeitos
    });

    const HOVER_2 = new Howl({
        src: [SOUNDS.HOVER_2],
        volume: volumeEfeitos
    });
    
    const CLICK = new Howl({
        src: [SOUNDS.CLICK],
        volume: volumeEfeitos
    });
    
    const CLICK_2 = new Howl({
        src: [SOUNDS.CLICK_2],
        volume: volumeEfeitos
    });
    
    const BANNER = new Howl({
        src: [SOUNDS.BANNER],
        volume: volumeEfeitos
    });

    const SOUNDS_DATA = {
        HOVER,
        HOVER_2,
        CLICK,
        CLICK_2,
        BANNER,
    }
    

    return { SOUNDS_DATA }
}