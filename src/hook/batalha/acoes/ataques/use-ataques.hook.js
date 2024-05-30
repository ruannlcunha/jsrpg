import { useRolarDado } from "../../rolar-dado/use-rolar-dado.hook";
import { useAcoesBase } from "../_base/use-acoes-base.hook";
import { EFFECTS } from "../../../../constants/images";
import { BANNER_DURACAO } from "../../../../constants";
import { ACOES_AUDIO } from "../../../../constants/audios/acoes.constant";

export function useAtaques() {
  const { rolarDado } = useRolarDado();
  const { iniciarEfeito, causarDano, finalizarAcao, atacar } = useAcoesBase();

  function soco(personagem, alvo, functions) {
    functions.setAnimacoes((old) => {
      return { ...old, escolhendoAlvo: false };
    });

    const modificadorForca = {valor: personagem.atributos.forca, atributo: "Força"}
    const resultadoAtaque = atacar(personagem, alvo, modificadorForca, functions)

    if(resultadoAtaque) {
      setTimeout(() => {
        const modificadores = [modificadorForca]
        const {dados, total} = rolarDado(1, 4, modificadores)
        functions.ativarBannerRolagem([...dados], modificadores, total, personagem.corTema)

        setTimeout(()=>{
          
          const novoAlvo = causarDano(alvo, total, functions);
          const duracao = iniciarEfeito(novoAlvo, functions, EFFECTS.SOCO_EFFECT, ACOES_AUDIO.SOCO);
          finalizarAcao(functions, novoAlvo, duracao);
        }, BANNER_DURACAO.ROLAGEM+100)
        
      }, (BANNER_DURACAO.ATAQUE)+100);
    } else {
      setTimeout(() => {
        finalizarAcao(functions, alvo, 0);
      }, (BANNER_DURACAO.ATAQUE)+100);
    }
    
  }

  return { soco };
}
