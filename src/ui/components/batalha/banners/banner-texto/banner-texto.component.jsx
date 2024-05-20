import "./banner-texto.style.css"

export function BannerTexto({banners, renderPularBanner}) {

    return (
        <div className="banner-texto">
          {renderPularBanner()}
          {banners.texto}
        </div>
    )
}