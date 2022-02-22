import {Route, Routes, useParams} from "react-router-dom";
import Snb from "../../components/Menu/common/Snb";
import styled from "styled-components";
import Menu1 from "./1/Menu1";
import Menu2 from "./2";

const Tmp = styled.div`
	height: 100vh;
	background-color: aliceblue;
`

const Menu = () => {
	const params = useParams();
	
	const componentSwitch = () => {
		switch (params.depth1) {
			case "1":
				return <Route path={"/*"} element={<Menu1/>}/>;
			case "2":
				return <Route path={"/*"} element={<Menu2/>}/>;
			case "3":
				return <Route path={"/*"} element={<Tmp/>}/>;
			case "4":
				return <Route path={"/*"} element={<Tmp/>}/>;
			case "5":
				return <Route path={"/*"} element={<Tmp/>}/>;
			default:
				return <></>;
		}
	};
	
	return (
		<>
			<Snb/>
			<Routes>
				{componentSwitch()}
			</Routes>
		</>
	)
};

export default Menu;
