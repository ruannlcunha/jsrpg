import "./batalha.style.css";
import {
  CampoDeBatalha,
  Turnos,
  ContainerScreen,
  BatalhaHUD,
  OpcoesBatalha,
  Banner,
} from "../../components";
import { PERSONAGENS_DATA } from "../../../database/personagens.data";
import {
  useFinalizarTurno,
  useIniciarBatalha,
  useInstanciarPersonagens,
  useZoomCampo,
} from "../../../hook/batalha/";
import { useEffect, useState } from "react";
import { useBanners } from "../../../hook";

export function BatalhaScreen() {
  const { banners, setBanners, ativarBannerTexto, ativarBannerRolagem, ativarBannerInimigo } =
    useBanners();
  const [personagens, setPersonagens] = useState([]);
  const [personagemAtivo, setPersonagemAtivo] = useState({ idCombate: null });
  const [acaoAtiva, setAcaoAtiva] = useState({
    personagem: null,
    evento: null,
  });
  const [turno, setTurno] = useState({ atual: 0, maximo: 0 });
  const { instanciarPersonagens } = useInstanciarPersonagens();
  const { iniciarBatalha } = useIniciarBatalha(banners);
  const { finalizarTurno } = useFinalizarTurno();
  const { zoom, aumentarZoom, diminuirZoom } = useZoomCampo();

  const [animacoes, setAnimacoes] = useState({
    isDadosAtivos: false,
    hudAtivo: false,
    iniciativaTerminou: false,
    escolhendoAlvo: false,
  });

  useEffect(() => {
    const personagensInstanciados = instanciarPersonagens(
      [
        PERSONAGENS_DATA[0],
        PERSONAGENS_DATA[1],
        PERSONAGENS_DATA[2],
        PERSONAGENS_DATA[3],
      ],
      [
        PERSONAGENS_DATA[4],
        PERSONAGENS_DATA[4],
        PERSONAGENS_DATA[4],
        PERSONAGENS_DATA[4],
      ]
    );
    setTurno({ atual: 0, maximo: personagensInstanciados.length });
    setPersonagens(personagensInstanciados);
    iniciarBatalha(personagensInstanciados, {
      setBanners,
      setAnimacoes,
      setPersonagens,
      ativarBannerTexto,
    });
  }, []);

  useEffect(() => {
    finalizarTurno(personagens, turno, {
      ativarBannerTexto,
      setPersonagemAtivo,
      setBanners,
    });
  }, [turno, personagens]);

  return (
    <ContainerScreen>
      <div className="batalha-screen">
        <OpcoesBatalha
          animacoes={animacoes}
          zoom={zoom}
          functions={{ setAnimacoes, aumentarZoom, diminuirZoom }}
        />

        <Banner banner={banners}/>

        {personagens.length > 0 && personagemAtivo ? (
          <>
            <Turnos
              animacoes={animacoes}
              idAtivo={personagemAtivo.idCombate}
              personagens={personagens}
            />

            <CampoDeBatalha
              idAtivo={personagemAtivo.idCombate}
              aliados={personagens.filter((item) => item.isInimigo === false)}
              inimigos={personagens.filter((item) => item.isInimigo === true)}
              animacoes={animacoes}
              acaoAtiva={acaoAtiva}
              zoom={zoom}
              functions={{
                setAcaoAtiva,
                setAnimacoes,
                setPersonagens,
                setTurno,
                setBanners,
                ativarBannerRolagem,
              }}
            />

            <BatalhaHUD
              personagens={personagens}
              personagemAtivo={personagemAtivo}
              animacoes={animacoes}
              turno={turno}
              functions={{
                setAcaoAtiva,
                setAnimacoes,
                setPersonagens,
                setTurno,
                setBanners,
                ativarBannerRolagem,
                ativarBannerInimigo
              }}
            />
          </>
        ) : null}
      </div>
    </ContainerScreen>
  );
}
