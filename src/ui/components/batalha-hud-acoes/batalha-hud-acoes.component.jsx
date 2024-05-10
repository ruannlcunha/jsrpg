import { useState } from "react"
import "./batalha-hud-acoes.style.css"
import { ATAQUES_DATA } from "../../../database/acoes/ataques.data"
import { HABILIDADES_DATA } from "../../../database/acoes/habilidades.data"
import { useEscolherAcao } from "../../../hook/batalha"

export function BatalhaHudAcoes({personagem, setAnimacoes, setAcaoAtiva}) {
    const { escolherAcao } = useEscolherAcao()
    const [subAcoes, setSubAcoes] = useState({
        ativo: false, titulo: "", acoesAtuais: null, data: null})

    function selectAcao(novoTitulo, novasAcoes, novaData) {
        const novasSubsAcoes = 
            {...subAcoes,
            titulo: novoTitulo,
            acoesAtuais: novasAcoes,
            data: novaData
            }

        setSubAcoes(novasSubsAcoes)

        if(subAcoes.ativo) {
            novoTitulo===subAcoes.titulo ? setSubAcoes({...novasSubsAcoes, ativo:false }) : null
        }
        else {
            setSubAcoes({...novasSubsAcoes, ativo: true })
        }
    }

    return (
        <>
        <ul className="hud-acoes">
            <li onClick={()=>selectAcao("Ataques", personagem.acoes.ataques, ATAQUES_DATA)}>Atacar</li>
            <li onClick={()=>selectAcao("Habilidades", personagem.acoes.habilidades, HABILIDADES_DATA)}>Habilidades</li>
            <li onClick={()=>selectAcao("Itens")}>Itens</li>
            <li>Pular Turno</li>
        </ul>

        {subAcoes.ativo? 
            <div className="hud-sub-acoes">
                <header>{subAcoes.titulo}</header>
                <section>
                    {subAcoes.acoesAtuais?
                        subAcoes.acoesAtuais.map((acaoId,index)=>{
                            const subAcao = subAcoes.data.find(item=> item.id===acaoId)
                            return (
                                <li key={index}
                                onClick={()=>{escolherAcao(personagem, subAcao.evento, setAcaoAtiva, setAnimacoes)}}>

                                    <h1>{subAcao.nome}</h1>
                                    {subAcao.dadoDeDano?
                                        <section>
                                            <h2>Dano: {subAcao.dadoDeDano}</h2>
                                            <h2>Tipo: {subAcao.tipo}</h2>
                                            <h2>Custo: {subAcao.custo}PM</h2>
                                        </section>
                                    :   <section>
                                            <h2>Efeito: {subAcao.efeito}</h2>
                                            <h2>Custo: {subAcao.custo}PM</h2>
                                        </section>
                                    }
                                </li>
                            )
                        })
                    :null}
                </section>
            </div>
        : null}
        </>
    )

}