import "./card-experiencia.style.css"
import { calcularPorcentagem } from "../../../../utils";

export function CardExperiencia({personagem}) {
    
    const porcentagemExp = calcularPorcentagem(
        personagem.expAtual,
        personagem.expTotal
    );

    document.documentElement.style.setProperty('--resultadoExp', `${porcentagemExp}%`);

    return (
        <div className="card-experiencia">
            <img src={personagem.perfil} alt="Perfil do personagem" />
            <section>
                <div className="barra-perfil">   
                    <div className="triangulo" style={{borderRight: "1rem solid var(--green)"}}></div>
                    <section style={{backgroundColor: "var(--green)"}}>
                        <div className="triangulo"></div>
                        <h1>{personagem.nome}</h1>
                        <h2>Lvl {personagem.level}</h2>
                        <div className="triangulo" style={{margin: "0", transform:"scaleX(-1)"}}></div>
                    </section>
                    <div className="triangulo" style={{borderRight: "1rem solid var(--green)", transform:"scaleX(-1)"}}></div>
                </div>
                <div className="barra-experiencia">
                    <h1>Exp.</h1>
                    <h1>{personagem.expAtual}<span>/{personagem.expTotal}</span></h1>
                </div>
            </section>
        </div>
    )

}