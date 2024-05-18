import { useRolarDado } from "../../batalha/rolar-dado/use-rolar-dado.hook";
import { useAcoesBase } from "../_base/use-acoes-base.hook";
import { EFFECTS } from "../../../constants/images";
import { ACOES_AUDIO } from "../../../constants/audios/acoes.constant";

export function useHabilidades() {
  const { rolarDado } = useRolarDado();
  const { iniciarEfeito, restaurarVida, finalizarAcao, gastarMana, informarErro } =
    useAcoesBase();

  function cura(personagem, alvo, functions) {
    functions.setAnimacoes((old) => {
      return { ...old, escolhendoAlvo: false };
    });

    try {
      gastarMana(personagem, 1, functions);
      const vidaRestaurada = rolarDado(8, personagem.atributos.inteligencia);
      const novoAlvo = restaurarVida(alvo, vidaRestaurada, functions);
      const duracao = iniciarEfeito(novoAlvo, functions, EFFECTS.CURA_EFFECT, ACOES_AUDIO.CURA);
      finalizarAcao(functions, novoAlvo, duracao);
    } catch (error) {
      informarErro(error, functions)
    }
  }

  return { cura };
}
