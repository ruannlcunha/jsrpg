import { useEffect, useState } from "react"
import "./batalha-turnos.style.css"

export function BatalhaTurnos({personagens, idAtivo, isD20Active, iniciativaTerminou }) {
    const [personagensAtuais, setPersonagensAtuais] = useState(personagens)

    useEffect(()=>{
        if(!iniciativaTerminou) {
            setPersonagensAtuais(personagens.sort(function(a, b) {
                return a.ordemInicial - b.ordemInicial;
            }))
        }
    },[personagens])

    useEffect(()=>{
        setPersonagensAtuais(item => {
            const ordenados = personagens.sort(function(a, b) {return b.resultadoIniciativa - a.resultadoIniciativa;})
            return [...ordenados]
    })
    },[iniciativaTerminou])

    function renderDado(iniciativa) {
        return isD20Active ?
        <div className="d20-turnos">{iniciativa}</div>
        : null
    }

    function renderPerfilTurno(personagem, index) {
        const ativo = iniciativaTerminou && personagem.idCombate===idAtivo && idAtivo
        return (
            <div key={index} style={{backgroundImage: `url(${personagem.perfil})`}}
            className= {ativo ? "batalha-turnos-ativo" : null}>
                {renderDado(personagem.resultadoIniciativa)}
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