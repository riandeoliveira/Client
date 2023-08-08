import { Fazenda } from "pages/fazenda";
import { createBrowserRouter } from "react-router-dom";

export const router = createBrowserRouter([
  {
    path: "/fazenda/cadastro",
    element: <Fazenda.Cadastro />,
  },
  {
    path: "/fazenda/edicao",
    element: <Fazenda.Edicao />,
  },
  {
    path: "/fazenda/listagem",
    element: <Fazenda.Listagem />,
  },
  {
    path: "/fazenda/visualizacao",
    element: <Fazenda.Visualizacao />,
  },
]);
