import "./batalha-hud-status.style.css"
import { calcularPorcentagem } from "../../../utils/calcular-porcentagem.util"
import pixelTexture from "../../../assets/img/backgrounds/pixel.png"

export function BatalhaHudStatus({personagem}) {
    const porcentagemVida = calcularPorcentagem(personagem.hpAtual, personagem.hpTotal)
    const porcentagemMana = calcularPorcentagem(personagem.mpAtual, personagem.mpTotal)

    return (
        <section className="hud-status"
        style={{background: `linear-gradient(90deg, var(--${personagem.perfilCor}) 0%, var(--${personagem.perfilCor}) 90%, transparent 99%, transparent 100%),url(${pixelTexture})`}}
        >
            <img src={personagem.perfil} alt="" />
            <header><h1>{personagem.nome}</h1></header>
            <section>

                <h2>HP: {personagem.hpAtual}/{personagem.hpTotal}</h2>
                <div
                className="batalha-hud-barra"
                style={{background: `linear-gradient(to right, var(--red) ${porcentagemVida}%, var(--light-grey) 1%)`}}
                >
                </div>

                <h2>MP: {personagem.mpAtual}/{personagem.mpTotal}</h2>
                <div
                className="batalha-hud-barra"
                style={{background: `linear-gradient(to right, var(--blue) ${porcentagemMana}%, var(--light-grey) 1%)`}}
                >
                </div>

            </section>
        </section>
    )

}