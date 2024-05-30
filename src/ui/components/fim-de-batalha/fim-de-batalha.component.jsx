import { useEffect } from "react"
import { ContainerScreen, ResultadoExperiencia, ResultadoRecompensas } from "../"
import "./fim-de-batalha.style.css"
import { MUSICS } from "../../../constants/audios/musics.constant"

export function FimDeBatalha({ personagens, resultado, setMusica }) {

    useEffect(()=>{
        setMusica({src: MUSICS.VICTORY, loop: false})
    },[])

    const containerStyle = {
        position:"absolute", zIndex: 1000, top: 0, left: 0,
        backgroundColor: "var(--background-text)",
        animation: "fade-in 1.5s"
    }

    return (
        <ContainerScreen style={containerStyle}>
        <h1 className="resultado-batalha">{resultado}</h1>
        <div className="fim-de-batalha">
            <ResultadoExperiencia personagens={personagens} expTotal={100}/>
            <ResultadoRecompensas />
        </div>
        </ContainerScreen>
    )

}