import { createTheme, ThemeProvider } from "@material-ui/core";
import React, { createContext } from "react";

export const TemplateContext = createContext(null);

function TemplateProvider({ children }) {
  const theme = createTheme({
    overrides: {
      MuiDrawer: {
        paperAnchorLeft: {
          height: "97%",
          width: "28%",
          top: 17,
          left: 61,
          boxShadow: "none",
        },
      },
      MuiBackdrop: {
        root: {
          backgroundColor: "unset",
        },
      },
    },
  });

  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
}

export default TemplateProvider;
