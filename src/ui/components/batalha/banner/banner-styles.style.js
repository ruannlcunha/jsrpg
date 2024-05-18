import backgroundTexture from "../../../../assets/img/textures/BANNER_TEXTURE.png"

function bannerRolagemStyle(banners) {
    return {
    background: `url(${backgroundTexture}),
    linear-gradient(0deg,transparent 5%,var(--${banners.cor}) 15%,var(--${banners.cor}) 50%,var(--${banners.cor}) 85%,transparent 95%)`,
    backgroundSize: "contain",
    backgroundPosition: "right",
    backgroundRepeat: "no-repeat",
    }
}

function bannerAcaoInimigoStyle(banners) {
    return {
    background: `url(${backgroundTexture}) top,
    linear-gradient(0deg, var(--${banners.cor}) 75%, transparent 100%)`,
    backgroundSize: "cover",
    }
}

export { bannerRolagemStyle, bannerAcaoInimigoStyle, }