import { ThemeProvider } from "@mui/material";
import { PageLoading } from "components/PageLoading";
import { ToastBox } from "components/Toast";
import { StrictMode } from "react";
import { RouterProvider } from "react-router-dom";
import { router } from "routes";
import { theme } from "./styles";

export const App = (): JSX.Element => {
  return (
    <StrictMode>
      <ThemeProvider theme={theme}>
        <PageLoading />
        <ToastBox />
        <RouterProvider router={router} />
      </ThemeProvider>
    </StrictMode>
  );
};
