import { calcularPorcentagem } from "../../../utils/calcular-porcentagem.util"
import "./batalha-personagem.style.css"
import { useEffect, useState } from "react"

export function BatalhaPersonagem({personagem, idAtivo, isInimigo, animacoes, acaoAtiva, functions}) {
    const porcentagemVida = calcularPorcentagem(personagem.pvAtual, personagem.hpTotal)
    const estaAtivo = idAtivo===personagem.idCombate && idAtivo && animacoes.iniciativaTerminou ? true : false
    const [estaEscolhido, setEstaEscolhido] = useState(false)

    useEffect(()=>{
        animacoes.escolhendoAlvo ? null : setEstaEscolhido(false)
    },[animacoes])
    
    const spriteStyle = {
        animation: `${estaAtivo?`battle-${isInimigo?"inimigo":"personagem"} 1s alternate infinite ease-in-out, `+
                    `bright-${isInimigo?"inimigo":"personagem"} 0.8s alternate infinite ease-in-out}`:null}`,
        filter: `${personagem.isMorto?"grayscale(100%)":null}`
        }

    function hoverEscolher() {
        if(animacoes.escolhendoAlvo) {
            estaEscolhido ? setEstaEscolhido(false) : setEstaEscolhido(true)
        }
    }

    function handleEscolher() {
        acaoAtiva.evento(acaoAtiva.personagem, personagem, functions)
    }

    return (
        <div className={estaEscolhido?"personagem-escolhido": null}
        onClick={handleEscolher}
        onMouseEnter={hoverEscolher} onMouseLeave={hoverEscolher}>
            
            {estaAtivo||estaEscolhido?
            <div className="seta-ativo"></div>
            :null}

            <img src={personagem.sprite} alt="" style={spriteStyle} className="sprite-personagem"/>

            <section>
                <h1>{personagem.nome}</h1>
                <h2>Lv {personagem.level}</h2>

                <div
                className="batalha-sprite-vida"
                style={{background: `linear-gradient(to right, var(--red) ${porcentagemVida}%, var(--light-grey) 1%)`}}
                >
                </div>

            </section>
        </div>
    )

}