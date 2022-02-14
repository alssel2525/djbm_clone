import {Route, Routes, useParams} from "react-router-dom";
import Menu21 from "../../../components/Menu/2/1";


const Menu2 = () => {
	const params = useParams();
	
	const componentSwitch = () => {
		switch (params.depth2) {
			case "1":
				return <Route path={"/*"} element={<Menu21/>}/>;
			case "2":
				return <Route path={"/*"} element={<></>}/>;
			case "3":
				return <Route path={"/*"} element={<></>}/>;
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

export default Menu2;
