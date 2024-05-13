import { useRolarDado } from "../../batalha/rolar-dado/use-rolar-dado.hook";
import { useAcoesBase } from "../_base/use-acoes-base.hook";
import { EFFECTS } from "../../../constants/images";

export function useAtaques() {
  const { rolarDado } = useRolarDado();
  const { iniciarEfeito, causarDano, finalizarAcao } = useAcoesBase();

  function soco(personagem, alvo, functions) {
    functions.setAnimacoes((old) => {
      return { ...old, escolhendoAlvo: false };
    });

    const dano = rolarDado(3, personagem.atributos.forca);
    functions.ativarBannerRolagem(dano.resultadoTotal, 2);

    setTimeout(() => {
      const novoAlvo = causarDano(alvo, dano, functions);
      const duracao = iniciarEfeito(novoAlvo, functions, EFFECTS.SOCO_EFFECT);

      finalizarAcao(functions, novoAlvo, duracao);
    }, 5010);
  }

  return { soco };
}
