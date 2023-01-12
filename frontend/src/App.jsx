import { Routes, Route } from "react-router-dom";

import NavBar from "@components/NavBar";
import Home from "@pages/Home";
import Login from "@pages/Login";
import MakeList from "@pages/MakeList";
import Map from "@pages/Map/Map";
import { useCurrentUserContext } from "./contexts/CurrentUserContext";

import "./App.css";
import Register from "@pages/Register";

function App() {
  const { currentUser } = useCurrentUserContext();
  return (
    <div className="App">
      <NavBar />
      <main>
        <Routes>
          <Route path="/Home" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/map" element={<Map />} />
          <Route path="*" element={<p>404 Not Found</p>} />
          <Route path="/Register" element={<Register />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
