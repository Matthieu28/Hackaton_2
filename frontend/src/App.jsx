import { Routes, Route } from "react-router-dom";

import Form from "./pages/Form";
import NavBar from "./components/NavBar";
import Home from "./pages/Home";
import Login from "./pages/Login";
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
          <Route path="/Home" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/map" element={<Map />} />
          <Route path="/Register" element={<Register />} />
          <Route path="/Form" element={<Form />} />
          <Route path="*" element={<p>404 Not Found</p>} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
