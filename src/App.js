import { ColorModeContext, useMode } from "./theme";
import CssBaseline from "@mui/material/CssBaseline";
import { Routes, Route } from 'react-router-dom'
import { ThemeProvider } from "@mui/material/styles";

import Topbar from "./scenes/global/Topbar";
import Sidebarr from "./scenes/global/Sidebar";
import Dashboard from './scenes/dashboard/dashboard'
import Team from "./scenes/team/team";
import Contacts from "./scenes/contacts/contacts";
import Invoices from "./scenes/invoices/invoices";
import Form from "./scenes/form/form";
import Calendar from "./scenes/calendar/calendar";
import FAQ from "./scenes/faq/faq";
import Bar from "./scenes/bar/bar";
import Pie from "./scenes/pie/pie";
// import Line from './scenes/line'
// import Geography from './scenes/geography'


function App() {
  const [ theme, colorMode ] = useMode();

  return (
      <ColorModeContext.Provider value={colorMode}>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <div className="app">
            <Sidebarr />
            <main className="content">
              <Topbar />
              <Routes>
                <Route path="/" element={<Dashboard />} /> 
                <Route path="/team" element={<Team />} /> 
                <Route path="/contacts" element={<Contacts />} /> 
                <Route path="/invoices" element={<Invoices />} /> 
                <Route path="/form" element={<Form />} /> 
                <Route path="/calendar" element={<Calendar />} /> 
                <Route path="/faq" element={<FAQ />} /> 
                <Route path="/bar" element={<Bar />} /> 
                <Route path="/pie" element={<Pie />} /> 
                {/* <Route path="/line" element={<Line />} />  */}
                {/* <Route path="/geography" element={<Geography />} />  */}
              </Routes>
            </main>
          </div>
        </ThemeProvider>
      </ColorModeContext.Provider>
  );
}

export default App;
