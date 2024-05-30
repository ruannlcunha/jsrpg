import { useConsumiveis } from "../../hook/batalha"

const { pocaoCuraMenor } = useConsumiveis()

export const CONSUMIVEIS_DATA = [
  {
    id: 1,
    nome: "Poção de Cura Menor",
    efeito: "Cura 1d8 de PV de um aliado.",
    evento: pocaoCuraMenor,
    alvos: "ALIADOS",
  },
]