import styled from "styled-components";
import Color from "../../../Color";

const Container = styled.h2`
	height: 3rem;
	margin: 0;
	position: relative;
	font-size: 1.5rem;
	font-weight: 500;
	color: ${Color.black};
	box-sizing: border-box;
	
	::before {
		content: "";
		position: absolute;
		top: -0.5rem;
		left: 0;
		width: 1.5rem;
		height: 4px;
		background: ${Color.blue};
	}
`;

const SubHeading = (props) => {
	return (
		<Container>
			{props.children}
		</Container>
	)
};

export default SubHeading;
