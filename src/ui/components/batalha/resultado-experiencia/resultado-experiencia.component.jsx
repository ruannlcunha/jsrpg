import { CardExperiencia } from "../../index"
import "./resultado-experiencia.style.css"

export function ResultadoExperiencia({personagens, expTotal}) {

    const aliados = personagens.filter(item=> !item.isInimigo)
    const expIndividual = Math.ceil((expTotal / (aliados.length)))

    return (
    <section className="experiencia-section">
        <header>
            <h1>Experiência</h1>
        </header>
        <div className="experiencia-obtida">
            <div className="triangulo" style={{borderRight: "1rem solid var(--pacific-blue)"}}></div>
            <section style={{backgroundColor:"var(--pacific-blue)"}}>
                <h2>Exp.Total</h2>
                <h2>{expTotal} xp</h2>
            </section>
            <div className="triangulo" style={{borderRight: "1rem solid var(--pacific-blue)", transform:"scaleX(-1)"}}></div>
        </div>
        <div className="experiencia-obtida">
            <div className="triangulo"></div>
            <section>
                <h2>Exp.Individual</h2>
                <h2>{expIndividual} xp</h2>
            </section>
            <div className="triangulo" style={{transform:"scaleX(-1)"}}></div>
        </div>
        <section className="experiencia-personagens">
            {
                aliados.map((personagem,i)=> {
                    return (
                        <CardExperiencia key={i} personagem={personagem} expRecebida={expIndividual}/>
                    )
                })
            }
        </section>
    </section>
    )

}