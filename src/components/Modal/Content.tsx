import type { ReactNode } from "react";

interface ContentProps {
  children: ReactNode;
}

export const Content = ({ children }: ContentProps): JSX.Element => {
  return <>{children}</>;
};
