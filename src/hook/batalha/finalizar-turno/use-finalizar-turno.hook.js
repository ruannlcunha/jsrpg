import { useNavigate } from "react-router-dom";

export function useFinalizarTurno() {
  const navigate = useNavigate();

  function _encerrarCombate(texto, functions) {
    functions.ativarBannerTexto(texto, functions.setBanners);
    setTimeout(() => {
      navigate(0);
    }, 5010);
  }

  function finalizarTurno(personagens, turno, functions) {
    functions.setPersonagemAtivo(
      personagens.sort(function (a, b) {
        return b.resultadoIniciativa - a.resultadoIniciativa;
      })[turno.atual]
    );

    if (personagens.length > 0) {
      if (
        personagens
          .filter((item) => item.isInimigo === false)
          .every((item) => item.isMorto)
      ) {
        _encerrarCombate("DERROTA", functions);
      }

      if (
        personagens
          .filter((item) => item.isInimigo === true)
          .every((item) => item.isMorto)
      ) {
        _encerrarCombate("VITORIA", functions);
      }
    }
  }

  return { finalizarTurno };
}
