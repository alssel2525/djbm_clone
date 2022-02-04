import styled from "styled-components";
import Color from "../../../Color";

const Container = styled.div`
	width: 100%;
	position: relative;
	margin-top: 3rem;
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

const MenuContentTitle = (props) => {
	return (
		<Container>
			{props.children}
		</Container>
	)
};

export default MenuContentTitle;
