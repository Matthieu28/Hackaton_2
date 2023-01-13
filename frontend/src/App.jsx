import { Routes, Route, useLocation } from "react-router-dom";
import Footer from "./components/Footer";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Catalog from "./pages/Catalog";
import Map from "./pages/Map/Map";
import Panier from "./pages/Panier";
import Form from "./pages/Form";
import NavBar from "./components/NavBar";
import Home from "./pages/Accueil";

import "./App.css";

function App() {
  const { pathname } = useLocation();
  return (
    <div className="App">
      {pathname !== "/accueil" && <NavBar />}
      <main>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/home" element={<Home />} />
          <Route path="/myShopping" element={<Panier />} />
          <Route path="/catalog" element={<Catalog />} />
          <Route path="/panier" element={<Panier />} />
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
