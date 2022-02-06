import styled from "styled-components";
import Color from "../../../Color";

const Container = styled.div`
	width: 100%;
	padding: 1.5rem;
	border: 1px solid ${Color.lightgrey};
	color: ${Color.black};
	box-sizing: border-box;
`;

const SubBox = (props) => {
	return (
		<Container>
			{props.children}
		</Container>
	)
};

export default SubBox;
