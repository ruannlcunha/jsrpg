import { useRolarDado } from "../../batalha/rolar-dado/use-rolar-dado.hook";
import { useAcoesBase } from "../_base/use-acoes-base.hook";
import { EFFECTS } from "../../../constants/images";
import { useBanner } from "../../animacoes/banner/use-banner.hook";

export function useHabilidades() {
  const { rolarDado } = useRolarDado();
  const { iniciarEfeito, restaurarVida, finalizarAcao, gastarMana } =
    useAcoesBase();
  const { ativarBannerRolagem } = useBanner();

  function cura(personagem, alvo, functions) {
    functions.setAnimacoes((old) => {
      return { ...old, escolhendoAlvo: false };
    });

    try {
      gastarMana(personagem, 1, functions);
      const vidaRestaurada = rolarDado(8, personagem.atributos.inteligencia);
      const novoAlvo = restaurarVida(alvo, vidaRestaurada, functions);
      const duracao = iniciarEfeito(novoAlvo, functions, EFFECTS.CURA_EFFECT);
      finalizarAcao(functions, novoAlvo, duracao);
    } catch (error) {
      console.log(`TOAST: ${error.message} `);
      functions.setAcaoAtiva({ personagem: null, evento: null });
      functions.setAnimacoes((old) => {
        return { ...old, escolhendoAlvo: false, hudAtivo: true };
      });
    }
  }

  return { cura };
}
