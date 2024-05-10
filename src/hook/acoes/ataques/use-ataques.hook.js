import { useRolarDado } from "../../batalha/rolar-dado/use-rolar-dado.hook"

export function useAtaques() {
    const { rolarDado } = useRolarDado()

    function _matarPersonagem(alvo) {
        return {...alvo, isMorto: true}
    }

    function _pularTurno(setTurno) {
        setTurno(old => { 
            if(old.atual>=old.maximo-1) {
                return {...old, atual: 0} 
            }
            return {...old, atual: old.atual + 1} 
        })
    }

    function _alterarPersonagem(setPersonagens, novoAlvo) {
        setPersonagens(old => {
            return old.map(personagem => {
                if(personagem.idCombate===novoAlvo.idCombate) {
                    if(novoAlvo.pvAtual<1) {
                        return _matarPersonagem(novoAlvo)
                    }
                    return novoAlvo
                }
                return personagem
            })
        })
    }

    function soco(personagem, alvo, functions) {
        const dano = rolarDado(3, personagem.atributos.forca)
        const novoAlvo = {...alvo, pvAtual: Number(alvo.pvAtual - dano.resultadoTotal)}
        functions.setAcaoAtiva({personagem: null, evento: null})
        functions.setAnimacoes(old => { return {...old, escolhendoAlvo: false, hudAtivo: true} })
        _pularTurno(functions.setTurno)
        _alterarPersonagem(functions.setPersonagens, novoAlvo)
    }

    return { soco }

}