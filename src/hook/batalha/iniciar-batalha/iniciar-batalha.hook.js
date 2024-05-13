import { useBanners } from "../../";
import { useRolarIniciativa } from "../rolar-iniciativa/use-rolar-iniciativa.hook";

export function useIniciarBatalha() {
  const { rolarIniciativa } = useRolarIniciativa();

  function _ordenarPersonagens(personagens) {
    const novosPersonagens = rolarIniciativa(personagens);
    return novosPersonagens;
  }

  function iniciarBatalha(personagens, functions) {
    functions.ativarBannerTexto("BATALHA", functions.setBanners);

    setTimeout(() => {
      functions.ativarBannerTexto("Rolem iniciativa!", functions.setBanners);
      //Rolar iniciativa
      setTimeout(() => {
        functions.setAnimacoes((old) => {
          return { ...old, isDadosAtivos: true };
        });
        const novosPersonagens = _ordenarPersonagens(personagens);
        functions.setPersonagens(novosPersonagens);

        //Sumir dados de iniciativa
        setTimeout(() => {
          functions.setAnimacoes((old) => {
            return {
              ...old,
              isDadosAtivos: false,
              hudAtivo: true,
              iniciativaTerminou: true,
            };
          });
        }, 5100);
      }, 5100);
    }, 5100);
  }

  return { iniciarBatalha };
}
