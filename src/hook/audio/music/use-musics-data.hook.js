import { CONTEXT_CONFIG_NAMES } from "../../../constants";
import { MUSICS } from "../../../constants/audios/musics.constant";
import { Howl } from 'howler';
import useGlobalConfig from "../../../context/global-config.context"

export function useMusicsData() {
    const [ config ] = useGlobalConfig()
    const volumeMusica = (config[CONTEXT_CONFIG_NAMES.SOM_MUSICA])/10
    Howler.volume(config[CONTEXT_CONFIG_NAMES.SOM_GERAL]/10)

    const BATTLE_1 = new Howl({
        src: [MUSICS.BATTLE_1],
        volume: volumeMusica,
        loop:true
    });

    const MUSICS_DATA = {
        BATTLE_1,
    }
    

    return { MUSICS_DATA }
}