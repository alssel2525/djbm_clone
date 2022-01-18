import styled from "styled-components";

const Container = styled.div`
	height: 100vh;
	position: relative;
	margin: 0;
	padding: 0;
`

const TextContainer = styled.div`
	width: 1280px;
	max-width: 100%;
	font-size: 3rem;
	
	margin-top: 30vh;
`

const Visual = () => {
	return (
		<Container>
			<TextContainer>
				<strong>DAEJEON Bio Medical</strong>
			</TextContainer>
		</Container>
	)
};

export default Visual;