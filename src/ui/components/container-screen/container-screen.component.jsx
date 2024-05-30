import { ICONS } from "../../../constants/images";
import "./container-screen.style.css";

export function ContainerScreen({ children, style }) {

  function renderPortraitScreen() {
    if(window.innerHeight > window.innerWidth) {
      return (
        <div className="portrait-screen">
          <img src={ICONS.CHANGE_PORTRAIT} alt="Celular com seta apontando para girar para horizontal." />
          <h1>Este jogo funciona apenas na orientação horizontal </h1>
        </div>
      )
    }
  }

  return (
    <>
    {renderPortraitScreen()}
    <div className="container-screen" style={style}>
      {children}
    </div>
    </>
  )
}
