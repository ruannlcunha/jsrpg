import "./batalha-banner.style.css"

export function BatalhaBanner({texto, ativo}) {

    return ativo?(
        <div className="batalha-banner">
            {texto}
        </div>
    ) :null

}