import NaoEncontrado from "components/NaoEncontrado";
import PaginaPadrao from "components/PaginaPadrao";
import Post from "components/Post";
import Rodape from "components/Rodape";
import ScrollToTop from "components/ScrollToTop";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Inicio from "./components/Inicio";
import Menu from "./components/Menu";
import Sobremim from "./components/Sobremim";

function AppRoutes() {
	return (
		<BrowserRouter>
			<ScrollToTop/>
				<Menu />
				<Routes>
					<Route path='/' element={<PaginaPadrao />}>
						<Route index element={<Inicio />} />
						<Route path="sobremim" element={<Sobremim />} />
					</Route>
					<Route path="posts/:id/*" element={<Post />} />
					<Route path="*" element={<NaoEncontrado />} />
				</Routes>
				<Rodape />
		</BrowserRouter>
	)
}

export default AppRoutes;
