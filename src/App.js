import {BrowserRouter, Route, Routes} from "react-router-dom";
import styled from "styled-components";
import Header from "./components/Header";
import Main from "./routes/Main";
import Footer from "./components/Footer";

const AppContainer = styled.div`
	width: 100vw;
	min-height: 100%;
	margin: 0;
	padding: 0;
	position: relative;
`

function App() {
	return (
		<BrowserRouter>
			<AppContainer>
				<Header/>
				<Routes>
					<Route path={"/"} element={<Main/>}/>
				</Routes>
				<Footer/>
			</AppContainer>
		</BrowserRouter>
	);
}

export default App;
