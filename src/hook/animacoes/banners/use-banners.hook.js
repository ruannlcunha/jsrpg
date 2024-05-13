import { useState } from "react";
import { BANNER_TIPOS } from "../../../constants";

export function useBanners() {
  const [banners, setBanners] = useState({
    texto: "", tipo: null, ativo: false, 
    ataque: null, defesa: null, 
    nomeAcao: null, personagemPerfil: null, alvoPerfil: null,
  });

  function ativarBannerInimigo(nomeAcao, personagemPerfil, alvoPerfil) {
    setBanners((old) => {
      return { ...old, ativo: true, tipo: BANNER_TIPOS.ACAO_INIMIGO,
        nomeAcao, personagemPerfil, alvoPerfil,
       };
    });

    setTimeout(() => {
      setBanners((old) => {
        if (old.ativo) {
          return { ...old, ativo: false, tipo: null,
            nomeAcao: null, personagemPerfil: null, alvoPerfil: null
           };
        }
        return { ...old };
      });
    }, 5000);
  }

  function ativarBannerTexto(texto) {
    setBanners((old) => {
      return { ...old, texto: texto, ativo: true, tipo: BANNER_TIPOS.TEXTO };
    });

    setTimeout(() => {
      setBanners((old) => {
        if (old.ativo) {
          return { ...old, texto: "", ativo: false, tipo: null };
        }
        return { ...old };
      });
    }, 5000);
  }

  function ativarBannerRolagem(ataque, defesa) {
    setBanners((old) => {
      return {
        ...old,
        ataque: ataque, defesa: defesa, ativo: true, tipo: BANNER_TIPOS.ROLAGEM,
      };
    });

    setTimeout(() => {
      setBanners((old) => {
        if (old.ativo) {
          return { ...old, texto: "", ativo: false, tipo: null };
        }
        return { ...old };
      });
    }, 5000);
  }

  return { banners, setBanners, ativarBannerTexto, ativarBannerRolagem, ativarBannerInimigo };
}
