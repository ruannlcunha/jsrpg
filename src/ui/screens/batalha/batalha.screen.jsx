import "./batalha.style.css"
import { BatalhaBanner, BatalhaHud, BatalhaCampo, BatalhaTurnos, ContainerScreen } from "../../components"
import { PERSONAGENS_DATA } from "../../../database/personagens.data"
import { useIniciarBatalha } from "../../../hook/batalha/"
import { useEffect, useState } from "react"
import { useAtivarBanner } from "../../../hook"

export function BatalhaScreen() {
    const PERSONAGENS_PARTY = [
        {...PERSONAGENS_DATA[0], idCombate: 1, posicaoEmCampo: 1, ordemInicial: 1, isInimigo: false, isMorto: false},
        {...PERSONAGENS_DATA[1], idCombate: 2, posicaoEmCampo: 2, ordemInicial: 2, isInimigo: false, isMorto: false},
        {...PERSONAGENS_DATA[2], idCombate: 3, posicaoEmCampo: 3, ordemInicial: 3, isInimigo: false, isMorto: false},
        {...PERSONAGENS_DATA[3], idCombate: 4, posicaoEmCampo: 4, ordemInicial: 4, isInimigo: false, isMorto: false},
    ]
    const INIMIGOS_PARTY = [
        {...PERSONAGENS_DATA[4], idCombate: 5, posicaoEmCampo: 1, ordemInicial: 5, isInimigo: true, isMorto: false},
        {...PERSONAGENS_DATA[4], idCombate: 6, posicaoEmCampo: 2, ordemInicial: 6, isInimigo: true, isMorto: false},
        {...PERSONAGENS_DATA[4], idCombate: 7, posicaoEmCampo: 3, ordemInicial: 7, isInimigo: true, isMorto: false},
        {...PERSONAGENS_DATA[4], idCombate: 8, posicaoEmCampo: 4, ordemInicial: 8, isInimigo: true, isMorto: false},
    ]
    
    const [banner, setBanner] = useState({texto: "", ativo: false})
    const { ativarBanner } = useAtivarBanner();

    const [personagens, setPersonagens] = useState([...PERSONAGENS_PARTY, ...INIMIGOS_PARTY])
    const [personagemAtivo, setPersonagemAtivo] = useState({idCombate: null})
    const [acaoAtiva, setAcaoAtiva] = useState({personagem: null, evento: null})
    const [turno, setTurno] = useState({atual: 0, maximo: personagens.length})

    const { ordenarPersonagens } = useIniciarBatalha()
    
    const [animacoes, setAnimacoes] = useState({
        iniciativaDadosAtivo: false, hudAtivo: false, iniciativaTerminou: false, escolhendoAlvo: false
    })

    useEffect(()=>{
        ordemDeEventos()
    },[])

    useEffect(()=>{
        setPersonagemAtivo(
            personagens.sort(function(a, b) {return b.resultadoIniciativa - a.resultadoIniciativa;})[turno.atual])
    },[turno, personagens])

    console.log(personagens)

    function ordemDeEventos() {
        
        // ativarBanner("BATALHA", setBanner)

        // setTimeout(()=>{ativarBanner("Rolem iniciativa!", setBanner)}, 6000)

        //Rolar iniciativa
        setTimeout(()=>{
            setAnimacoes({...animacoes, iniciativaDadosAtivo: true})
            const novosPersonagens = ordenarPersonagens(personagens)
            setPersonagens(novosPersonagens)
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
                
                <BatalhaCampo
                idAtivo={personagemAtivo.idCombate}
                aliados={personagens.filter(item => item.isInimigo===false)} 
                inimigos={personagens.filter(item => item.isInimigo===true)}
                animacoes={animacoes}
                acaoAtiva={acaoAtiva}
                functions={{setAcaoAtiva, setAnimacoes, setPersonagens, setTurno}}
                />
                
                <BatalhaHud 
                hudAtivo={animacoes.hudAtivo} 
                personagem={personagemAtivo}
                setAnimacoes={setAnimacoes}
                setAcaoAtiva={setAcaoAtiva}
                />
                </>

                :null}
            </div>
        </ContainerScreen>
    )

}