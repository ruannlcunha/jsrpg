import "./modal-config-som.style.css"
import useGlobalConfig from "../../../context/global-config.context"
import { Modal } from "../modal/modal.component"
import { useEffect, useState } from "react"
import { CONTEXT_CONFIG_NAMES } from "../../../constants"
import { useMusic, useSound } from "../../../hook"
import { ICONS } from "../../../constants/images"

export function ModalConfigSom({isOpen, setIsOpen}) {
    const [efeitosVolume, setEfeitosVolume] = useState(10)
    const [musicaVolume, setMusicaVolume] = useState(10)
    const [config, setConfig] = useGlobalConfig()
    const { playClick } = useSound()
    const { restartMusic } = useMusic()

    useEffect(()=> {
        setEfeitosVolume(config[CONTEXT_CONFIG_NAMES.SOM_EFEITOS])
        setMusicaVolume(config[CONTEXT_CONFIG_NAMES.SOM_MUSICA])
    },[])

    function handleDiminuir(configName, volume, setVolume) {
        playClick(1)
        if(volume>0)  {
            setVolume(volume-1)
            setConfig({
                ...config,
                [configName]: volume-1,
            })
        }
        configName==="somMusica" ? restartMusic(volume-1) : null
    }

    function handleAumentar(configName, volume, setVolume) {
        playClick(1)
        if(volume<10)  {
            setVolume(volume+1)
            setConfig({
                ...config,
                [configName]: volume+1,
            })
        }
        configName==="somMusica" ? restartMusic(volume+1) : null
    }

    function selectVolumeIcon(volume) {
        if(volume<=10 && volume>=7) return ICONS.VOLUME_ALTO
        if(volume<=6 && volume>=4) return ICONS.VOLUME_MEDIO
        if(volume<=3 && volume>=1) return ICONS.VOLUME_BAIXO
        if(volume===0) return ICONS.VOLUME_MUTADO
        return ICONS.VOLUME_ALTO
    }

    function renderOption(text, configName,volume, setVolume) {
        let _volumeIcon = selectVolumeIcon(volume)

        return (
        <li>
            {text}
            <div className="config-volume">
                <img src={_volumeIcon} alt="" />
                <button onClick={volume>0?()=>handleDiminuir(configName, volume, setVolume):null}>-</button>
                <h2>{volume}</h2>
                <button onClick={volume<10?()=>handleAumentar(configName, volume, setVolume):null}>+</button>
            </div>
        </li>
        )
    }

    return (
        <Modal isOpen={isOpen} setIsOpen={setIsOpen}>
            <div className="config-som"> 
                <h1>Configurações de Som</h1>
                <ul>
                    {renderOption("Volume de Efeitos Sonoros", CONTEXT_CONFIG_NAMES.SOM_EFEITOS, efeitosVolume, setEfeitosVolume)}
                    {renderOption("Volume de Músicas", CONTEXT_CONFIG_NAMES.SOM_MUSICA, musicaVolume, setMusicaVolume)}
                </ul>
            </div>
        </Modal>
    )

}