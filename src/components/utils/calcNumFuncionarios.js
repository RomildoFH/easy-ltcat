import { listaEmpresas } from "../../data/listaEmpresas";

const calcNumFuncionarios = (nome) => {
  const [empresa] = listaEmpresas.filter((e) => e.nome === nome);
  console.log(empresa)

  const funcionarios = {
    masculino: 0,
    feminino: 0,
    menor: 0,
  };

  empresa.cargos.forEach((cargo) => {
    funcionarios.masculino += cargo.masc
    funcionarios.feminino += cargo.fem
    funcionarios.menor += cargo.menores
  })

  return funcionarios;
}

export default calcNumFuncionarios;