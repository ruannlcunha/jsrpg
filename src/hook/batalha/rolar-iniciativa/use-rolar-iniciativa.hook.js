import { useRolarDado } from "../rolar-dado/use-rolar-dado.hook";

export function useRolarIniciativa() {
    const { rolarDado } = useRolarDado()

    function rolarIniciativa(personagens) {
        const personagensNovos = [];

        //adiciona atributos temporários de combate "idCombate" e "resultadoIniciativa"
        personagens.map((personagem, index)=> {
            const rolagem = rolarDado(20, personagem.ficha.destreza)
            personagensNovos.push({idCombate: index+1, resultadoIniciativa: rolagem.resultadoTotal, ...personagem })
        })

        //Ordena em ordem crescente através da iniciativa
        const personagensOrdenados = personagensNovos.sort(function(a, b) {
            return b.resultadoIniciativa - a.resultadoIniciativa;
        });

        return personagensOrdenados
    }

    function adicionarAtributosDeCombate(personagensSemId, personagensComId) {
        const personagensConvertidos = []
        personagensComId.map(personagem=> {
            if(personagensSemId.find(item => item.id===personagem.id)) {
                personagensConvertidos.push(personagem)
            }
        })

        return personagensConvertidos.sort(function(a, b) {
            return a.posicaoEmCampo - b.posicaoEmCampo;
        });
    }
    
    return { rolarIniciativa, adicionarAtributosDeCombate }

}