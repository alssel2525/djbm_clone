import MenuContainer from "../../common/MenuContainer";
import MenuContentTitle from "../../common/MenuContentTitle";
import {useParams} from "react-router-dom";
import {Menus} from "../../../../Data";
import Content1 from "./Content1";
import Content2 from "./Content2";
import Content3 from "./Content3";
import Content4 from "./Content4";

const Menu12 = () => {
	const params = useParams();
	
	return (
		<MenuContainer>
			<MenuContentTitle>{Menus[parseInt(params.depth1) - 1].depth2[parseInt(params.depth2) - 1]}</MenuContentTitle>
			<Content1/>
			<Content2/>
			<Content3/>
			<Content4/>
		</MenuContainer>
	)
};

export default Menu12;
