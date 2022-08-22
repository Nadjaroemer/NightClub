import { Routes, Route, Link, BrowserRouter } from "react-router-dom";
import "./App.css";
import Hero from "./components/Hero";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Hero />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
