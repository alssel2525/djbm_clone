import styled from "styled-components";
import MenuContentTitle from "../../common/MenuContentTitle";
import {useParams} from "react-router-dom";
import {Menus} from "../../../../Data";
import Content1 from "./Content1";
import Content2 from "./Content2";

const Container = styled.div`
	width: 100vw;
	max-width: 1280px;
	margin: 0 auto;
	padding-bottom: 3.5rem;
	position: relative;
	
	> * {
		margin-top: 3.5rem;
	}
`;

const Menu11 = () => {
	const params = useParams();
	
	return (
		<Container>
			<MenuContentTitle>{Menus[parseInt(params.depth1) - 1].depth2[parseInt(params.depth2) - 1]}</MenuContentTitle>
			<Content1/>
			<Content2/>
		</Container>
	)
};

export default Menu11;
