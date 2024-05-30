import { useEffect, useState } from "react";
import { IniciarBatalhaScreen, JogarBatalha, FimDeBatalha, AudioContainer } from "../../components";
import "./batalha.style.css";
import { useInstanciarPersonagens } from "../../../hook/batalha";
import { PERSONAGENS_DATA } from "../../../database";
import { useMusic } from "../../../hook";

export function BatalhaScreen() {
  const [telas, setTelas] = useState({iniciarBatalha: true, jogarBatalha: false, fimBatalha: false})
  const { instanciarPersonagens } = useInstanciarPersonagens();
  const [resultado, setResultado] = useState("")
  const [personagensInstanciados, setPersonagensInstanciados] = useState([]);
  const [musica, setMusica] = useState({src: null, loop: false})
  const { startMusic } = useMusic()

  useEffect(()=>{
    setPersonagensInstanciados(instanciarPersonagens(
      [
        PERSONAGENS_DATA[0],
      ],
      [
        PERSONAGENS_DATA[4],
      ]
    ));
  },[])

  useEffect(()=>{
    musica.src ? startMusic(musica.loop) : null
  },[musica])

  function handleIniciar() {
    setTelas({iniciarBatalha: false, jogarBatalha: true, fimBatalha: false})
  }

  function handleFinalizarBatalha(texto) {
    setTelas({iniciarBatalha: false, jogarBatalha: true, fimBatalha: true})
    setResultado(texto)
  }
  

  return personagensInstanciados.length>0 ? (
    <>
    <AudioContainer audio={musica.src}/>
    {telas.iniciarBatalha ?
    <IniciarBatalhaScreen
    aliados={personagensInstanciados.filter((item) => item.isInimigo === false)}
    inimigos={personagensInstanciados.filter((item) => item.isInimigo === true)}
    iniciarFunction={handleIniciar}
    />
    : null}
    {telas.jogarBatalha ?
    <JogarBatalha
    setMusica={setMusica}
    personagensInstanciados={personagensInstanciados}
    handleFinalizarBatalha={handleFinalizarBatalha}
    />
    : null}
    {telas.fimBatalha ?
    <FimDeBatalha
    personagens={personagensInstanciados}
    resultado={resultado}
    setMusica={setMusica}
    />
    : null}
    </>
  ) : null

}
