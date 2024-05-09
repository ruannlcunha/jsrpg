import { useState } from "react"
import "./batalha-hud-acoes.style.css"

export function BatalhaHudAcoes({personagem}) {
    const [subAcoesAtivo, setSubAcoesAtivo] = useState(false)
    const [subAcoesTitle, setSubAcoesTitle] = useState("")
    const [subAcoesContent, setSubAcoesContent] = useState(null)

    function selectAcao(titulo) {
        setSubAcoesTitle(titulo)
        subAcoesAtivo ? setSubAcoesAtivo(false) : setSubAcoesAtivo(true)
    }

    function renderSubAcoes() {

        return (
            <div className="hud-sub-acoes">
                <header>{subAcoesTitle}</header>
                <section>
                    <li>Ataque 1</li>
                    <li>Ataque 2</li>
                    <li>Ataque 3</li>
                    <li>Ataque 4</li>
                    <li>Ataque 5</li>
                    <li>Ataque 6</li>
                </section>
            </div>
        )

    }

    return (
        <>
        <ul className="hud-acoes">
            <li onClick={()=>selectAcao("Ataques")}>Atacar</li>
            <li onClick={()=>selectAcao("Habilidades")}>Habilidades</li>
            <li onClick={()=>selectAcao("Itens")}>Itens</li>
            <li>Pular Turno</li>
        </ul>
        {subAcoesAtivo? renderSubAcoes() :null}
        </>
    )

}