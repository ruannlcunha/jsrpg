import { TEXTURES } from "../../../../../constants/images"
import "./banner-ataque.style.css"

export function BannerAtaque({banners, testeRealizado}) {

  const bannerStyle = {
    background: `url(${TEXTURES.BANNER}),
    linear-gradient(0deg,transparent 5%,var(--${banners.cor}) 15%,var(--${banners.cor}) 50%,var(--${banners.cor})
    85%,transparent 95%)`,
    backgroundSize: "contain",
    backgroundPosition: "right",
    backgroundRepeat: "no-repeat",
  }

    return (
        <div className="banner-ataque" style={bannerStyle}>
          {testeRealizado ? (
            <h1>{banners.ataque.resultadoTotal >= banners.defesa ? "Sucesso" : "Falha"}</h1>
          ) : (
            <>
              <div>
                <div className="d20">{banners.ataque.resultadoDado}</div>
                <h2>Dado</h2>
              </div>
              <h2>+</h2>
              <div>
                <div className={banners.ataque.atributo}>{banners.ataque.valor}</div>
                <h2>{banners.ataque.atributo}</h2>
              </div>
              <h2>=</h2>
              <div>
                <div className="valor-ataque">{banners.ataque.resultadoTotal}</div>
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