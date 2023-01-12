import { Routes, Route } from "react-router-dom";
import Footer from "@components/Footer";
import Form from "./pages/Form";
import NavBar from "./components/NavBar";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Map from "./pages/Map/Map";
import Register from "./pages/Register";

import "./App.css";

function App() {
  return (
    <div className="App">
      <NavBar />
      <main>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/home" element={<Home />} />
          <Route path="/map" element={<Map />} />
          <Route path="/form" element={<Form />} />
          <Route path="*" element={<p>404 Not Found</p>} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
