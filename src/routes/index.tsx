import { Fazenda } from "pages/Fazenda";
import { createBrowserRouter } from "react-router-dom";

export const router = createBrowserRouter([
  {
    path: "/fazenda/listagem",
    element: <Fazenda.Listagem />,
  },
  {
    path: "/fazenda/cadastro",
    element: <Fazenda.Acao pageActionType="register" />,
  },
  {
    path: "/fazenda/edicao",
    element: <Fazenda.Acao pageActionType="edit" />,
  },
  {
    path: "/fazenda/visualizacao",
    element: <Fazenda.Acao pageActionType="visualize" />,
  },
]);
