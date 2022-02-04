import {Route, Routes, useParams} from "react-router-dom";
import Snb from "../../components/Menu/common/Snb";
import styled from "styled-components";

const Tmp = styled.div`
	height: 100vh;
	background-color: aliceblue;
`

const Menu = () => {
	const params = useParams();
	
	return (
		<>
			<Snb/>
			<Routes>
				{parseInt(params.depth1) === 1 && <Route path={`/`} element={<Tmp/>}/>}
			</Routes>
		</>
	)
};

export default Menu;
