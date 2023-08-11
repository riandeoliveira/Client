import { GrupoLocais } from "pages/grupo-locais";
import { createBrowserRouter } from "react-router-dom";

export const router = createBrowserRouter([
  {
    path: "/grupo-locais/cadastro",
    element: <GrupoLocais.Cadastro />,
  },
  {
    path: "/grupo-locais/edicao/:id",
    element: <GrupoLocais.Edicao />,
  },
  {
    path: "/grupo-locais/listagem",
    element: <GrupoLocais.Listagem />,
  },
  {
    path: "/grupo-locais/visualizacao/:id",
    element: <GrupoLocais.Visualizacao />,
  },
]);
