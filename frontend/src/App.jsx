import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Connection from "./pages/Connection";
import AdminUserManagement from "./pages/AdminUserManagement";

import CalculatorManagement from "./pages/CalculatorManagement";
import "./reset.css";
import "./App.css";

// Imports components
import Navbar from "./components/Navbar";

// Imports contexts
import { MenuContextProvider } from "./contexts/MenuContext";
import Calculator from "./pages/Calculator";
import { AuthContextProvider } from "./contexts/AuthContext";

function App() {
  return (
    <div className="App">
      <MenuContextProvider>
        <AuthContextProvider>
          <Router>
            <Navbar />
            <Routes>
              <Route path="/" element={<Connection />} />
              <Route path="/calculator" element={<Calculator />} />
              <Route
                path="/users-management"
                element={<AdminUserManagement />}
              />
              <Route
                path="/calculator-management"
                element={<CalculatorManagement />}
              />
            </Routes>
          </Router>
        </AuthContextProvider>
      </MenuContextProvider>
    </div>
  );
}

export default App;
