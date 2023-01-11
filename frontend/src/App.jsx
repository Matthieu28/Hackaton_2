import { Routes, Route } from "react-router-dom";

import NavBar from "@components/NavBar";
import Home from "@pages/Home";
import Login from "@pages/Login";
import MakeList from "@pages/MakeList";
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
          <Route path="/Home" element={<Home />} />
          <Route path="/login" element={<Login />} />
          {currentUser.id && <Route path="/makes" element={<MakeList />} />}
          <Route path="/map" element={<Map />} />
          <Route path="*" element={<p>404 Not Found</p>} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
