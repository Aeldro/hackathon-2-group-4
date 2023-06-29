import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Admin from "./pages/Admin";

import "./reset.css";
import "./App.css";

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/Admin" element={<Admin />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
