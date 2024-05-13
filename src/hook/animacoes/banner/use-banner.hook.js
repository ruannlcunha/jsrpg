import { useState } from "react";

export function useBanner() {
  function ativarBannerTexto(texto, callBack) {
    callBack((old) => {
      return { ...old, bannerTexto: { texto: texto, ativo: true } };
    });

    setTimeout(() => {
      callBack((old) => {
        if (old.bannerTexto.ativo) {
          return { ...old, bannerTexto: { texto: "", ativo: false } };
        }
        return { ...old };
      });
    }, 5000);
  }

  function ativarBannerRolagem(ataque, defesa, callBack) {
    callBack((old) => {
      return {
        ...old,
        bannerTeste: { ataque: ataque, defesa: defesa, ativo: true },
      };
    });

    setTimeout(() => {
      callBack((old) => {
        if (old.bannerTeste.ativo) {
          return { ...old, bannerTeste: { texto: "", ativo: false } };
        }
        return { ...old };
      });
    }, 5000);
  }

  return { ativarBannerTexto, ativarBannerRolagem };
}
