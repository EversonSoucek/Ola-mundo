import Rodape from "components/Rodape";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Inicio from "./components/Inicio";
import Menu from "./components/Menu";
import Sobremim from "./components/Sobremim";

function AppRoutes() {
  return (
    <BrowserRouter>
    <Menu/>
      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="/sobremim" element={<Sobremim />} />
        <Route path="*" element={<div>pagina nao encontrada</div>} />
      </Routes>
      <Rodape/>
    </BrowserRouter>
  )
}

export default AppRoutes;
