import Header from "./components/Header";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Main from "./routes/Main";

function App() {
	return (
		<BrowserRouter>
			<Header/>
			<Routes>
				<Route path={"/"} element={<Main/>}/>
			</Routes>
		</BrowserRouter>
	);
}

export default App;
