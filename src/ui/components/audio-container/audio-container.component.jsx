import { useEffect } from "react"
import { useMusic } from "../../../hook"

export function AudioContainer({audio}) {
    const { startMusic } = useMusic()

    useEffect(()=>{
        startMusic()
    },[])

    return <audio src={audio}></audio>

}