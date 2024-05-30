import { useEffect } from "react"
import { useMusic } from "../../../hook"

export function AudioContainer({audio}) {

    return <audio src={audio}></audio>

}