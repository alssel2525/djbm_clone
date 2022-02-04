import {Route, Routes} from "react-router-dom";
import Menu11 from "../../../components/Menu/1/Menu11";


const Menu1 = ({depth2}) => {
	const componentSwitch = () => {
		switch (depth2) {
			case "1":
				return <Route path={"/*"} element={<Menu11/>}/>;
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