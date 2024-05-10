import { useEffect, useState } from "react"
import "./batalha-turnos.style.css"

export function BatalhaTurnos({personagens, idAtivo, isD20Active, iniciativaTerminou }) {
    const [personagensAtuais, setPersonagensAtuais] = useState(personagens)

    useEffect(()=>{
        if(iniciativaTerminou) {
            setPersonagensAtuais(item => {
                const ordenados = personagens.sort(function(a, b) {return b.resultadoIniciativa - a.resultadoIniciativa;})
                return [...ordenados]
            })
        }
    },[iniciativaTerminou])

    function renderDado(iniciativa) {
        return isD20Active ?
        <div className="d20-turnos">{iniciativa}</div>
        : null
    }

    function renderPerfilTurno(personagem, index) {
        const ativo = iniciativaTerminou && personagem.idCombate===idAtivo && idAtivo
        const novoPersonagem = personagens.find(item => item.idCombate === personagem.idCombate)
        
        const perfilStyle = {
            backgroundImage: `url(${novoPersonagem.perfil})`, filter: `${novoPersonagem.isMorto?"grayscale(100%)":null}`
        }
        return (
            <div key={index} style={perfilStyle}
            className= {ativo ? "batalha-turnos-ativo" : null}>
                {renderDado(novoPersonagem.resultadoIniciativa)}
            </div>
        )
    }

    return (
        <div className="batalha-turnos">
            <header>Turnos</header>
            <section>
                <div className="batalha-turnos-ponta"></div>
                {personagensAtuais?
                    personagensAtuais.map((personagem, index)=> {
                        return renderPerfilTurno(personagem, index)
                    })
                :null}
                <div className="batalha-turnos-ponta"></div>
            </section>
        </div>
        
    )

}