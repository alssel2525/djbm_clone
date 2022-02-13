import styled from "styled-components";
import Color from "../../../Color";
import {useParams} from "react-router-dom";
import {Menus} from "../../../Data/Data";

const Container = styled.h1`
	width: 100%;
	position: relative;
	font-size: 2rem;
	font-weight: 700;
	color: ${Color.black};
	text-align: center;

	::after {
		content: "";
		width: 5rem;
		height: 0;
		border-bottom: ${Color.grey} solid 1px;
		position: absolute;
		bottom: -1rem;
		left: 50%;
		transform: translateX(-50%);
	}
`;

const MenuContentTitle = () => {
	const params = useParams();
	
	return (
		<Container>
			{Menus[parseInt(params.depth1) - 1].depth2[parseInt(params.depth2) - 1]}
		</Container>
	)
};

export default MenuContentTitle;
