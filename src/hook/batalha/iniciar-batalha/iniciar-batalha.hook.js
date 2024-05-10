import { useEffect, useState } from "react"
import { useRolarIniciativa } from "../rolar-iniciativa/use-rolar-iniciativa.hook"

export function useIniciarBatalha() {
    const { rolarIniciativa } = useRolarIniciativa()

    function ordenarPersonagens(personagens) {
        const novosPersonagens = rolarIniciativa(personagens)
        return novosPersonagens
    }

    return { ordenarPersonagens }

}