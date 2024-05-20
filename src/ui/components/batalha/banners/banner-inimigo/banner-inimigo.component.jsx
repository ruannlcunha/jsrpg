import { ICONS, TEXTURES } from "../../../../../constants/images"
import "./banner-inimigo.style.css"

export function BannerInimigo({banners}) {

  const bannerStyle = {
    background: `url(${TEXTURES.BANNER}) top,
    linear-gradient(0deg, var(--${banners.cor}) 75%, transparent 100%)`,
    backgroundSize: "cover",
    }

    return (
        <div className="banner-inimigo" style={bannerStyle}
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