import { BatalhaHudAcoes, BatalhaHudStatus } from "../"
import "./batalha-hud.style.css"

export function BatalhaHud({personagem, hudAtivo, setAnimacoes, setAcaoAtiva}) {
    return hudAtivo? (
        <div className="batalha-hud">
            <BatalhaHudStatus personagem={personagem}/>
            <BatalhaHudAcoes personagem={personagem} setAnimacoes={setAnimacoes} setAcaoAtiva={setAcaoAtiva}/>
        </div>
    ) : null

}