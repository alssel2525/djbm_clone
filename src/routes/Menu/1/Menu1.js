import {Route, Routes, useParams} from "react-router-dom";
import Menu11 from "../../../components/Menu/1/1";
import Menu12 from "../../../components/Menu/1/2";


const Menu1 = () => {
	const params = useParams();
	
	const componentSwitch = () => {
		switch (params.depth2) {
			case "1":
				return <Route path={"/*"} element={<Menu11/>}/>;
			case "2":
				return <Route path={"/*"} element={<Menu12/>}/>;
			default:
				return <></>;
		}
	};
	
	return (
		<Routes>
			{componentSwitch()}
		</Routes>
	)
};

export default Menu1;
