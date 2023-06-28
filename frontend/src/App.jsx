import { BrowserRouter as Router, Routes } from "react-router-dom";

// Imports CSS
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
          <Routes>{/* <Route path="/" element={<Connection />} /> */}</Routes>
        </Router>
      </MenuContextProvider>
    </div>
  );
}

export default App;
