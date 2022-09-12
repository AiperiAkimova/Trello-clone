import "./App.css";
import Login from "./components/pages/Login";
import { Routes, Route } from "react-router-dom";
import HomePage from "./components/pages/HomePage";
import Trello from "./components/pages/Trello";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/trello" element={<Trello />} />
      </Routes>
    </div>
  );
}

export default App;
