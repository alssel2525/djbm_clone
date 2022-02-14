import styled from "styled-components";
import Color from "../../../../Color";

const Container = styled.div`
	height: 100vh;
	display: ${props => props.isActive === true ? "block" : "none"};
	background: ${Color.red};
`;

const Tab1 = ({isActive}) => {
	return (
		<Container isActive={isActive}>
		</Container>
	)
};

export default Tab1;
