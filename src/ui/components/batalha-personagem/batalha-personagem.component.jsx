import { calcularPorcentagem } from "../../../utils/calcular-porcentagem.util"
import setaAtivo from "../../../assets/img/icons/SETA_BAIXO_ICON.png"
import "./batalha-personagem.style.css"
import { useEffect } from "react"

export function BatalhaPersonagem({personagem, idAtivo, isInimigo, iniciativaTerminou}) {
    const porcentagemVida = calcularPorcentagem(personagem.hpAtual, personagem.hpTotal)
    const estaAtivo = idAtivo===personagem.idCombate && idAtivo && iniciativaTerminou ? true : false
    
    const ativoStyle = {
        animation: `battle-${isInimigo?"inimigo":"personagem"} 1s alternate infinite ease-in-out, `+
                    `bright-${isInimigo?"inimigo":"personagem"} 0.8s alternate infinite ease-in-out`
        }

    return (
        <div className="batalha-personagem">

            {estaAtivo?<img src={setaAtivo} alt="Seta indicando para o personagem." className="seta-ativo"/>:null}

            <img src={personagem.sprite} alt="" style={estaAtivo?ativoStyle:null} className="sprite-personagem"/>

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