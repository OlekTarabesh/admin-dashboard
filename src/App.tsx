import { FC } from "react";
import { Routes, Route } from "react-router-dom";
import CssBaseline from "@mui/material/CssBaseline";
import { ThemeProvider } from "@mui/material/styles";

import { Sidebarr, Topbar } from "./scenes";

import { ColorModeContext, useMode } from "./theme";
import { routes } from "./router";

const App: FC = () => {
  const [theme, colorMode] = useMode();

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <div className="app">
          <Sidebarr />
          <main className="content">
            <Topbar />
            <Routes>
              {routes.map((route) => (
                <Route key={`route-key-${route.path}`} {...route} />
              ))}
            </Routes>
          </main>
        </div>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
};

export default App;
