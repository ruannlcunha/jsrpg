import { ATAQUES_DATA } from "../../../database/acoes"
import { getRandomInt } from "../../../utils"
import { useFinalizarTurno } from "../"

export function useAutomatizarInimigo() {
    const { finalizarTurno } = useFinalizarTurno()

    function automatizarInimigo(personagemAtivo, personagens, turno, functions) {
        //(A cada 2 segundos faz alguma coisa)
        const acoes = [...personagemAtivo.acoes.ataques]
        const indexAcao = getRandomInt(1,acoes.length)
        const idAcao = acoes[indexAcao-1]
        const acaoEscolhida = ATAQUES_DATA.find(ataque=> ataque.id === idAcao)
        //Escolher alvo
        const alvos = personagens.filter(personagem=> !personagem.isInimigo)
        const indexAlvo = getRandomInt(1, alvos.length)
        const alvoEscolhido = alvos[indexAlvo-1]
        //1. Escolher uma acao aleatoria
        setTimeout(()=>{
            functions.setAnimacoes(old=> {return {...old, hudAtivo: false}})
            functions.ativarBannerInimigo(acaoEscolhida.nome,personagemAtivo.perfil,alvoEscolhido.perfil)
        }, 2000)

        setTimeout(()=>{
            acaoEscolhida.evento(personagemAtivo, alvoEscolhido, functions);
        }, 7100)

        setTimeout(()=>{
            finalizarTurno(personagens, turno, functions)
        }, 12100)
        
        
        //2. Mostrar ação aleatória

        //3. Mostrar alvo com icone apontando

        //4. Realizar ação

    }

    return { automatizarInimigo }

}