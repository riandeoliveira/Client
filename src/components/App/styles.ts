import { createTheme } from "@mui/material";

export const theme = createTheme({
  components: {
    MuiButton: {
      defaultProps: {
        variant: "contained",
      },
    },
  },
  palette: {
    primary: {
      main: "#00635a",
    },
    secondary: {
      main: "#424242",
    },
  },
});
