import { Routes, Route } from "react-router-dom";

import NavBar from "./components/NavBar";
import Home from "./pages/Home";
import Login from "./pages/Login";
import MakeList from "./pages/MakeList";
import Map from "./pages/Map/Map";
import Register from "./pages/Register";
import { useCurrentUserContext } from "./contexts/CurrentUserContext";

import "./App.css";

function App() {
  const { currentUser } = useCurrentUserContext();
  return (
    <div className="App">
      <NavBar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/panier" element={<Panier />} />
          <Route path="/login" element={<Login />} />
          {currentUser.id && <Route path="/makes" element={<MakeList />} />}
          <Route path="/map" element={<Map />} />
          <Route path="*" element={<p>404 Not Found</p>} />
          <Route path="/Register" element={<Register />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
