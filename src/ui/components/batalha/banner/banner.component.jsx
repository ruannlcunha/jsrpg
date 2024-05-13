import { useEffect, useState } from "react";
import "./banner.style.css";
import { BANNER_TIPOS } from "../../../../constants";
import { ICONS } from "../../../../constants/images";
import PERSONAGEM from "../../../../assets/img/perfils/LOBO_PERFIL.png"
import ALVO from "../../../../assets/img/perfils/AYLA_PERFIL.png"

export function Banner({ banner }) {
  const [testeRealizado, setTesteRealizado] = useState(false);

  useEffect(() => {
    if(banner.ativo && banner.tipo=== BANNER_TIPOS.ROLAGEM) {
      setTimeout(() => {
        setTesteRealizado(true);
      }, 2500);
    } else {
      setTesteRealizado(false);
    }
  }, [banner.ativo]);

  function renderBannerTexto() {
    return <div className="banner-texto">{banner.texto}</div>
  }

  function renderBannerRolagem() {
    return (
      <div className="banner-teste">
        {testeRealizado ? (
          <h1>{banner.ataque >= banner.defesa ? "Sucesso" : "Falha"}</h1>
        ) : (
          <>
            <div>
              <div className="d20">{banner.ataque}</div>
              <h2>Ataque</h2>
            </div>
            <div>
              <div className="cross-sword"></div>
            </div>
            <div>
              <div className="shield">{banner.defesa}</div>
              <h2>Defesa</h2>
            </div>
          </>
        )}
      </div>
    )
  }

  function renderBannerAcaoInimigo() {
    return (
      <div className="banner-acao-inimigo">
        <img src={banner.personagemPerfil} alt="Sprite do personagem atacante" className="personagem"/>
        <section>
          <h1>{banner.nomeAcao}</h1>
          <img src={ICONS.SETA_DIREITA} alt="Seta branca apontando para direita" />
        </section>
        <img src={banner.alvoPerfil} alt="Sprite do personagem alvo" className="alvo"/>
      </div>
    )
  }

  return banner.ativo ? (
    <>
    {banner.tipo===BANNER_TIPOS.TEXTO ? renderBannerTexto() : null}
    {banner.tipo===BANNER_TIPOS.ROLAGEM ? renderBannerRolagem() : null}
    {banner.tipo===BANNER_TIPOS.ACAO_INIMIGO ? renderBannerAcaoInimigo() : null}
    </>
  ) : null;
}
