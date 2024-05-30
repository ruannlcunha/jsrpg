import "../../constants/index";
import { CATEGORIAS_DE_DANO, TIPOS_DE_DANO } from "../../constants/index";
import { useAtaques } from "../../hook/batalha";

const { soco } = useAtaques();

export const ATAQUES_DATA = [
    {
    id: 1,
    nome: "Soco",
    dadoDeDano: "1d3",
    categoria: CATEGORIAS_DE_DANO.CORPO_A_CORPO,
    tipo: TIPOS_DE_DANO.IMPACTO,
    custo: 0,
    evento: soco,
    alvos: "INIMIGOS",
  },
  {
    id: 2,
    nome: "Mordida",
    dadoDeDano: "1d6",
    categoria: CATEGORIAS_DE_DANO.CORPO_A_CORPO,
    tipo: TIPOS_DE_DANO.PERFURANTE,
    custo: 0,
    evento: soco,
    alvos: "INIMIGOS",
  },
];
