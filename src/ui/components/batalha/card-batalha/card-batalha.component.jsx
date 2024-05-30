import { ICONS } from "../../../../constants/images"
import "./card-batalha.style.css"

export function CardBatalha({personagem, reverse}) {

    return (
        <div className="card-batalha"
        style={reverse?{flexDirection: "row"}:null}>
            <section className="card-info">
                <header><h1>{personagem.nome}</h1></header>
                <section>
                    <section className="card-status">
                        <h1>
                        PV: {personagem.pvAtual}/{personagem.pvTotal}
                        </h1>
                        <div className="barra-pv"></div>

                        <h1>
                        PM: {personagem.pmAtual}/{personagem.pmTotal}
                        </h1>
                        <div className="barra-pm"></div>
                    </section>
                    <section className="card-atributos">
                        <div>
                            <img src={ICONS.FORCA} alt="Ícone de Força" />
                            FOR: {personagem.atributos.forca}
                        </div>
                        <div>
                            <img src={ICONS.AGILIDADE} alt="Ícone de Agilidade" />
                            AGI: {personagem.atributos.agilidade}
                        </div>
                        <div>
                            <img src={ICONS.MAGIA} alt="Ícone de Magia" />
                            MAG: {personagem.atributos.magia}
                        </div>
                        <div>
                            <img src={ICONS.VIGOR} alt="Ícone de Vigor" />
                            VIG: {personagem.atributos.vigor}
                        </div>
                    </section>
                </section>
            </section>
            <div className="card-perfil"
            style={{
                transform: `${reverse?"scaleX(-1)":""}`,
                background: `url(${personagem.perfil}) center,
                radial-gradient(circle, var(--black) 7%, var(--${personagem.corTema}) 100%)`,
                backgroundSize: "cover",
                backgroundPosition: "center",
            }}>
            </div>
            <div className="card-ponta" style={reverse? {left: "-15px"}: {right: "-15px"}}></div>
        </div>
    )

}