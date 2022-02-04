import styled from "styled-components";
import MenuContentTitle from "../common/MenuContentTitle";
import {useParams} from "react-router-dom";
import {Menus} from "../../../Data";

const Container = styled.div`
	width: 100vw;
	height: 100vh;
	position: relative;
`;

const Menu11 = () => {
	const params = useParams();
	console.log(params);
	
	return (
		<Container>
			<MenuContentTitle>{Menus[parseInt(params.depth1) - 1].depth2[parseInt(params.depth2) - 1]}</MenuContentTitle>
		</Container>
	)
};

export default Menu11;
