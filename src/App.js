import {BrowserRouter, Route, Routes} from "react-router-dom";
import styled from "styled-components";
import Header from "./components/Header";
import Main from "./routes/Main";
import Footer from "./components/Footer";
import Menu from "./routes/Menu";

const AppContainer = styled.div`
	width: 100vw;
	height: 100%;
	min-height: 100vh;
	margin: 0;
	padding: 0;
	position: relative;
	overflow: hidden;
	
	// sticky footer를 위해
	display: flex;
	flex-direction: column;
	justify-content: flex-end;
`

function App() {
	return (
		<>
			<BrowserRouter basename={process.env.PUBLIC_URL}>
				<AppContainer>
					<Header/>
					<Routes>
						<Route path={"/"} element={<Main/>}/>
						<Route path={"/menu/:depth1/:depth2/*"} element={<Menu/>}/>
					</Routes>
					<Footer/>
				</AppContainer>
			</BrowserRouter>
		</>
	);
}

export default App;
