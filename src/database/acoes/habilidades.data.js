import { useHabilidades } from "../../hook/batalha";

const { cura } = useHabilidades();

export const HABILIDADES_DATA = [
  {
    id: 1,
    nome: "Cura",
    custo: 1,
    efeito: "Cura 1d8 de PV de um aliado.",
    evento: cura,
    alvos: "ALIADOS",
  },
];
