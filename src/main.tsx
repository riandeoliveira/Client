import { ThemeProvider, createTheme } from "@mui/material";
import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import { router } from "routes";
import "styles/_global.scss";

const theme = createTheme({
  components: {
    MuiButton: {
      defaultProps: {
        style: {
          backgroundColor: "#00635a",
        },
      },
    },
    MuiCheckbox: {
      defaultProps: {
        style: {
          color: "#00635a",
        },
      },
    },
  },
});

const rootElement = document.querySelector("#root") as Element;

ReactDOM.createRoot(rootElement!).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <RouterProvider router={router} />
    </ThemeProvider>
  </React.StrictMode>,
);
