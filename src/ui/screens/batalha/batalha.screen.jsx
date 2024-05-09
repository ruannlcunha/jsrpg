import "./batalha.style.css"
import { BatalhaBanner, BatalhaHud, BatalhaSprites, BatalhaTurnos, ContainerScreen } from "../../components"
import { PERSONAGENS_DATA } from "../../../database/personagens.data"
import { useIniciarBatalha } from "../../../hook/batalha/"
import { useEffect, useState } from "react"
import { useAtivarBanner } from "../../../hook"

export function BatalhaScreen() {
    const PERSONAGENS_PARTY = [
        {...PERSONAGENS_DATA[0], posicaoEmCampo: 1, ordemInicial: 1},
        {...PERSONAGENS_DATA[1], posicaoEmCampo: 2, ordemInicial: 2},
        {...PERSONAGENS_DATA[2], posicaoEmCampo: 3, ordemInicial: 3},
        {...PERSONAGENS_DATA[3], posicaoEmCampo: 4, ordemInicial: 4},
    ]
    const INIMIGOS_PARTY = [
        {...PERSONAGENS_DATA[4], posicaoEmCampo: 1, ordemInicial: 5},
        {...PERSONAGENS_DATA[4], posicaoEmCampo: 2, ordemInicial: 6},
        {...PERSONAGENS_DATA[4], posicaoEmCampo: 3, ordemInicial: 7},
        {...PERSONAGENS_DATA[4], posicaoEmCampo: 4, ordemInicial: 8},
    ]
    
    const [banner, setBanner] = useState({texto: "", ativo: false})
    const { ativarBanner } = useAtivarBanner();

    const [personagens, setPersonagens] = useState([...PERSONAGENS_PARTY, ...INIMIGOS_PARTY])
    const [personagemAtivo, setPersonagemAtivo] = useState({idCombate: null})

    const { ordenarPersonagens, aliadosParty, inimigosParty } = useIniciarBatalha(PERSONAGENS_PARTY,INIMIGOS_PARTY)
    
    const [animacoes, setAnimacoes] = useState({
        iniciativaDadosAtivo: false, hudAtivo: false, iniciativaTerminou: false,
    })

    useEffect(()=>{
        ordemDeEventos()
    },[])

    function ordemDeEventos() {
        
        // ativarBanner("BATALHA", setBanner)

        // setTimeout(()=>{ativarBanner("Rolem iniciativa!", setBanner)}, 6000)

        //Rolar iniciativa
        setTimeout(()=>{
            setAnimacoes({...animacoes, iniciativaDadosAtivo: true})
            const novosPersonagens = ordenarPersonagens()
            setPersonagens(novosPersonagens)
            setPersonagemAtivo(novosPersonagens[0])
        }, 3000)

        //Sumir dados de iniciativa
        setTimeout(()=>{
            setAnimacoes({...animacoes,
                iniciativaDadosAtivo: false,
                hudAtivo:true,
                iniciativaTerminou: true
            })
        }, 8000)
    }


    return (
        <ContainerScreen>
            <div className="batalha-screen">
                <BatalhaBanner texto={banner.texto} ativo={banner.ativo}/>

                {personagens.length>0 ?
                <>
                <BatalhaTurnos 
                isD20Active={animacoes.iniciativaDadosAtivo} 
                iniciativaTerminou={animacoes.iniciativaTerminou}
                idAtivo={personagemAtivo.idCombate} 
                personagens={personagens}
                />
                
                <BatalhaSprites
                idAtivo={personagemAtivo.idCombate}
                iniciativaTerminou={animacoes.iniciativaTerminou}
                personagens={aliadosParty} 
                inimigos={inimigosParty}
                />
                
                <BatalhaHud 
                hudAtivo={animacoes.hudAtivo} 
                personagem={personagemAtivo}
                />
                </>

                :null}
            </div>
        </ContainerScreen>
    )

}