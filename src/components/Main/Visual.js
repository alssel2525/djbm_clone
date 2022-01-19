import styled from "styled-components";

const Container = styled.div`
	height: 100vh;
	width: 100vw;
	position: relative;
	margin: 0;
	padding: 0;

	.__1280 {
		width: 1280px;
		margin: 0 auto;
	}
`

const TextContainer = styled.div`
	width: 1280px;
	max-width: 100%;
	position: relative;

	margin-top: 18rem;

	strong {
		font-size: 3.5rem;
	}
`

const Visual = () => {
	return (
		<Container>
			<div className={"__1280"}>
				<TextContainer>
					<strong>DAEJEON Bio Medical</strong>
					<br/>
					<span>
						Daejeon Regulation Free Special Zone
						<br/>
						for Bio medical industry
					</span>
				</TextContainer>
			</div>
		</Container>
	)
};

export default Visual;