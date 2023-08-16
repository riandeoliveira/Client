import type { ReactNode } from "react";
import { useEffect } from "react";

interface PrivateRouteProps {
  children: ReactNode;
}

export const PrivateRoute = ({ children }: PrivateRouteProps): JSX.Element => {
  // TODO: Enviar o token do Local Storage para um endpoint que responda se ele é válido ou não. Se for válido, permitir o acesso, caso contrário, impedir o acesso

  // TODO: Utilizar token puro mesmo, de qualquer forma

  useEffect(() => {}, []);

  return <>{children}</>;
};
