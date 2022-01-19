import styled from "styled-components";

const Container = styled.div`
	height: 100vh;
	width: 100vw;
	position: relative;
	margin: 0;
	padding: 0;
`

const TextContainer = styled.div`
	width: 1280px;
	max-width: 100%;
	font-size: 3rem;
	position: relative;
	
	margin-top: 30rem;
	margin-left: 3rem;
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