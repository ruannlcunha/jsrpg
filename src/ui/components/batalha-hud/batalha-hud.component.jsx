import { BatalhaHudAcoes, BatalhaHudStatus } from "../"
import "./batalha-hud.style.css"

export function BatalhaHud({personagem, hudAtivo}) {

    return hudAtivo? (
        <div className="batalha-hud">
            <BatalhaHudStatus personagem={personagem}/>
            <BatalhaHudAcoes personagem={personagem}/>
        </div>
    ) : null

}