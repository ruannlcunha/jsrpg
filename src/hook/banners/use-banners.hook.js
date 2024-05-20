import { useState } from "react";
import { BANNER_DURACAO, BANNER_TIPOS } from "../../constants";
import { useSound } from "../audio/sound/use-sound.hook";

export function useBanners() {
  const { playBanner, playDado } = useSound()
  const [banners, setBanners] = useState({
    tipo: null, ativo: false, evento: null,
    texto: "",
    ataque: null, defesa: null, 
    dados: [], modificadores: [], total: null,
    nomeAcao: null, personagemPerfil: null, alvoPerfil: null,
  });

  function ativarBannerInimigo(nomeAcao, personagemPerfil, alvoPerfil, cor) {
    playBanner()
    setBanners((old) => {
      return { ...old, ativo: true, tipo: BANNER_TIPOS.INIMIGO,
        nomeAcao, personagemPerfil, alvoPerfil, cor,
       };
    });

    setTimeout(() => {
      setBanners((old) => {
        if (old.ativo) {
          return { ...old, ativo: false, tipo: null,
            nomeAcao: null, personagemPerfil: null, alvoPerfil: null, cor: null,
           };
        }
        return { ...old };
      });
    }, BANNER_DURACAO.INIMIGO);
  }

  function ativarBannerTexto(texto) {
    playBanner()
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
    }, BANNER_DURACAO.TEXTO);
  }

  function ativarBannerAtaque(ataque, defesa, cor) {
    playBanner()
    playDado()
    setBanners((old) => {
      return {
        ...old, ativo: true, tipo: BANNER_TIPOS.ATAQUE,
        ataque: ataque, defesa: defesa, cor: cor,
      };
    });

    setTimeout(() => {
      setBanners((old) => {
        if (old.ativo) {
          return { ...old, ativo: false, tipo: null,
          ataque: null, defesa: null, cor: null,
           };
        }
        return { ...old };
      });
    }, BANNER_DURACAO.ATAQUE);
  }

  function ativarBannerRolagem(dados, modificadores, total, cor) {
    playBanner()
    playDado()
    setBanners((old) => {
      return {
        ...old, ativo: true, tipo: BANNER_TIPOS.ROLAGEM, cor: cor,
        dados, modificadores, total,
      };
    });

    setTimeout(() => {
      setBanners((old) => {
        if (old.ativo) {
          return { ...old, ativo: false, tipo: null,
            dados: [], modificadores: [], total: null,
           };
        }
        return { ...old };
      });
    }, BANNER_DURACAO.ROLAGEM);
  }

  return { banners, setBanners, ativarBannerTexto, ativarBannerAtaque, ativarBannerInimigo, ativarBannerRolagem };
}
