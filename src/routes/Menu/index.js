import {Route, Routes} from "react-router-dom";
import Snb from "../../components/Menu/common/Snb";
import styled from "styled-components";

const Tmp = styled.div`
	height: 100vh;
	background-color: aliceblue;
`

const index = () => {
	return (
		<>
			<Snb/>
			<Routes>
				<Route path={"/1/*"} element={<Tmp/>}/>
			</Routes>
		</>
	)
};

export default index;
