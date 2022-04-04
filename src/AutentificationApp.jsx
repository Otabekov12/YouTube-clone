import { Route, Routes } from "react-router-dom";

import Home from "./Pages/Home/Home";
import Chanel from "./Pages/Chanel/Chanel";
import Player from "./Pages/Player/Player";

function AutentificationApp() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/chanel" element={<Chanel />} />
      <Route path="/player" element={<Player />} />
    </Routes>
  );
}

export default AutentificationApp;