import { useEffect, useState } from "react"
import { useRolarIniciativa } from "../rolar-iniciativa/use-rolar-iniciativa.hook"

export function useIniciarBatalha(aliados, inimigos) {
    const [aliadosParty, setAliadosParty] = useState([...aliados])
    const [inimigosParty, setInimigosParty] = useState([...inimigos])
    const todosParty = [...aliados, ...inimigos]

    const { rolarIniciativa, adicionarAtributosDeCombate } = useRolarIniciativa()


    function ordenarPersonagens() {
        const novosPersonagens = rolarIniciativa(todosParty)
        setAliadosParty(adicionarAtributosDeCombate(aliadosParty, novosPersonagens))
        setInimigosParty(adicionarAtributosDeCombate(inimigosParty, novosPersonagens))
        return novosPersonagens
    }

    return { ordenarPersonagens, aliadosParty, inimigosParty }

}