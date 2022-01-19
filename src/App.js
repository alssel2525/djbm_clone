import Header from "./components/Header";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Main from "./routes/Main";
import styled from "styled-components";

const AppContainer = styled.div`
	width: 100vw;
	margin: 0;
	padding: 0;
	overflow: hidden;
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
			</AppContainer>
		</BrowserRouter>
	);
}

export default App;
