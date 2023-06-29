import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Connection from "./pages/Connection";
import "./reset.css";
import "./App.css";

// Imports components
import Navbar from "./components/Navbar";

// Imports contexts
import { MenuContextProvider } from "./contexts/MenuContext";
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
            </Routes>
          </Router>
        </AuthContextProvider>
      </MenuContextProvider>
    </div>
  );
}

export default App;
