import { useAutomatizarInimigo, usePularTurno } from "../"

export function useIniciarTurno() {
    const { pularTurno } = usePularTurno()
    const { automatizarInimigo } = useAutomatizarInimigo()

    function iniciarTurno(personagemAtivo, personagens, turno, functions) {
        if(personagemAtivo.isInimigo && !personagemAtivo.isMorto) {
            automatizarInimigo(personagemAtivo, personagens, turno, functions)
        }
        personagemAtivo.isMorto ? pularTurno(functions.setTurno) : null
    }

    return { iniciarTurno }

}