import { BANNER_DURACAO } from "../../../constants";
import { useRolarIniciativa } from "../rolar-iniciativa/use-rolar-iniciativa.hook";

export function useIniciarBatalha() {
  const { rolarIniciativa } = useRolarIniciativa();

  function _ordenarPersonagens(personagens) {
    const novosPersonagens = rolarIniciativa(personagens);
    return novosPersonagens;
  }

  function _rolarIniciativa(personagens, functions) {
    functions.setAnimacoes((old) => {
      return { ...old, isDadosAtivos: true };
    });
    const novosPersonagens = _ordenarPersonagens(personagens);
    functions.setPersonagens(novosPersonagens);

    setTimeout(() => {
      functions.setAnimacoes((old) => {
        return {
          ...old,
          isDadosAtivos: false,
          hudAtivo: true,
          iniciativaTerminou: true,
        };
      });
    }, 5000);
  }

  function _pularBannersInicio(personagens, functions, primeiroTimeout, segundoTimeout) {
    clearTimeout(primeiroTimeout)
    clearTimeout(segundoTimeout)
    _rolarIniciativa(personagens, functions)
  }

  function iniciarBatalha(personagens, functions) {
    functions.ativarBannerTexto("BATALHA", functions.setBanners);

    const primeiroTimeout = setTimeout(() => {
      functions.ativarBannerTexto("Rolem iniciativa!", functions.setBanners);
    }, BANNER_DURACAO.TEXTO+100);

    const segundoTimeout = setTimeout(() => {
      _rolarIniciativa(personagens, functions)
    }, (BANNER_DURACAO.TEXTO*2)+100);
    
    functions.setBanners(old => { return {...old, evento: 
      ()=>{_pularBannersInicio(personagens, functions, primeiroTimeout, segundoTimeout)}} })
  }

  return { iniciarBatalha };
}
