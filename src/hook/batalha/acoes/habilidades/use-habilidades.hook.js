import { useRolarDado } from "../../rolar-dado/use-rolar-dado.hook";
import { useAcoesBase } from "../_base/use-acoes-base.hook";
import { EFFECTS } from "../../../../constants/images";
import { ACOES_AUDIO } from "../../../../constants/audios/acoes.constant";
import { BANNER_DURACAO } from "../../../../constants";

export function useHabilidades() {
  const { rolarDado } = useRolarDado();
  const { iniciarEfeito, restaurarVida, finalizarAcao, gastarMana, informarErro } =
    useAcoesBase();

  function cura(personagem, alvo, functions) {
    functions.setAnimacoes((old) => {
      return { ...old, escolhendoAlvo: false };
    });
    try {
      const personagemNovo = gastarMana(personagem, 1, functions);
      const novoAlvo = personagem.idCombate===alvo.idCombate ? personagemNovo : alvo
      const modificadores = [{valor: 1, atributo: "Modificador"}]
      const {dados, total} = rolarDado(2, 8, modificadores);
      const alvoRestaurado = restaurarVida(novoAlvo, total, functions);
      functions.ativarBannerRolagem([...dados], modificadores, total, personagem.corTema)
      setTimeout(()=>{
        const duracao = iniciarEfeito(alvoRestaurado, functions, EFFECTS.CURA_EFFECT, ACOES_AUDIO.CURA);
        finalizarAcao(functions, alvoRestaurado, duracao);
      }, BANNER_DURACAO.ROLAGEM)
    } catch (error) {
      informarErro(error, functions)
    }
  }

  return { cura };
}