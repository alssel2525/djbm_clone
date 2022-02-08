import styled from "styled-components";

const Container = styled.div`
	width: 100vw;
	max-width: 1280px;
	margin: 0 auto;
	padding-bottom: 3.5rem;
	position: relative;
	font-family: 'Noto Sans KR', serif;

	> * {
		margin-top: 3.5rem;
	}
`;

const MenuContainer = (props) => {
	return (
		<Container>
			{props.children}
		</Container>
	)
};

export default MenuContainer;
