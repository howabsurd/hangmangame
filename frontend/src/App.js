import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/Login.js";
import Hangman from "./pages/Hangman.js";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/game" element={<Hangman />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
