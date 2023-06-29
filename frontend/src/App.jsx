import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Connection from "./pages/Connection";
import AdminUserManagement from "./pages/AdminUserManagement";

import "./reset.css";
import "./App.css";

// Imports components
import Navbar from "./components/Navbar";

// Imports contexts
import { MenuContextProvider } from "./contexts/MenuContext";

function App() {
  return (
    <div className="App">
      <MenuContextProvider>
        <Router>
          <Navbar />
          <Routes>
            <Route path="/" element={<Connection />} />
            <Route path="/user-management" element={<AdminUserManagement />} />
          </Routes>
        </Router>
      </MenuContextProvider>
    </div>
  );
}

export default App;
