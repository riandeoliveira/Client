import { Fazenda } from "pages/fazenda";
import { createBrowserRouter } from "react-router-dom";

export const router = createBrowserRouter([
  {
    path: "/fazenda/cadastro",
    element: <Fazenda.Cadastro />,
  },
  {
    path: "/fazenda/edicao/:id",
    element: <Fazenda.Edicao />,
  },
  {
    path: "/fazenda/listagem",
    element: <Fazenda.Listagem />,
  },
  {
    path: "/fazenda/visualizacao/:id",
    element: <Fazenda.Visualizacao />,
  },
]);
