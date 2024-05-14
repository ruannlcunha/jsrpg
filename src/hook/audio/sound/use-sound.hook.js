import { useSoundsData } from "./use-sounds-data.hook"

export function useSound() {
    const { SOUNDS_DATA } = useSoundsData()

    function playHover() {
        SOUNDS_DATA.HOVER.play()
    }

    function playHover2() {
        SOUNDS_DATA.HOVER_2.play()
    }

    function playClick() {
        SOUNDS_DATA.CLICK.play()
    }

    function playClick2() {
        SOUNDS_DATA.CLICK_2.play()
    }

    function playBanner() {
        SOUNDS_DATA.BANNER.play()
    }

    return { playHover, playHover2, playClick, playClick2, playBanner}

}