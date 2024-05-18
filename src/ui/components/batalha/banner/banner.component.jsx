import { useEffect, useState } from "react";
import "./banner.style.css";
import { BANNER_DURACAO, BANNER_TIPOS } from "../../../../constants";
import { ICONS } from "../../../../constants/images";
import { useSound } from "../../../../hook/audio/sound/use-sound.hook";
import { bannerRolagemStyle, bannerAcaoInimigoStyle, } from "./banner-styles.style"

export function Banner({ banners, setBanners }) {
  const [testeRealizado, setTesteRealizado] = useState(false);
  const { playDadoResultado, playClick } = useSound()

  useEffect(() => {
    if(banners.ativo && banners.tipo=== BANNER_TIPOS.ROLAGEM) {
      setTimeout(() => {
        playDadoResultado()
        setTesteRealizado(true);
      }, (BANNER_DURACAO.ROLAGEM)/2);
    } else {
      setTesteRealizado(false);
    }
  }, [banners.ativo]);

  function renderBannerTexto() {
    return (
      <div className="banner-texto">
        {renderPularBanner()}
        {banners.texto}
      </div>
    )
  }

  function renderBannerRolagem() {
    return (
      <div className="banner-rolagem" style={bannerRolagemStyle(banners)}>
        {testeRealizado ? (
          <h1>{banners.ataque >= banners.defesa ? "Sucesso" : "Falha"}</h1>
        ) : (
          <>
            <div>
              <div className="d20">{banners.ataque}</div>
              <h2>Ataque</h2>
            </div>
            <div>
              <div className="cross-sword"></div>
            </div>
            <div>
              <div className="shield">{banners.defesa}</div>
              <h2>Defesa</h2>
            </div>
          </>
        )}
      </div>
    )
  }

  function renderBannerAcaoInimigo() {
    return (
      <div className="banner-acao-inimigo" style={bannerAcaoInimigoStyle(banners)}
      >
        <img src={banners.personagemPerfil} alt="Sprite do personagem atacante" className="personagem"/>
        <section>
          <h1>{banners.nomeAcao}</h1>
          <img src={ICONS.SETA_DIREITA} alt="Seta branca apontando para direita" />
        </section>
        <img src={banners.alvoPerfil} alt="Sprite do personagem alvo" className="alvo"/>
      </div>
    )
  }

  function handlePular() {
    setBanners(old => { return {...old, ativo: false} })
    playClick(2)
    banners.evento()
  }

  function renderPularBanner() {
    return <button onClick={handlePular} className="pular-banner">Pular</button>
  }

  return banners.ativo ? (
    <>
    {banners.tipo===BANNER_TIPOS.TEXTO ? renderBannerTexto() : null}
    {banners.tipo===BANNER_TIPOS.ROLAGEM ? renderBannerRolagem() : null}
    {banners.tipo===BANNER_TIPOS.ACAO_INIMIGO ? renderBannerAcaoInimigo() : null}
    </>
  ) : null;
}
