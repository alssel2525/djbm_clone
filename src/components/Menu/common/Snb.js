import styled from "styled-components";
import Color from "../../../Color";
import Snb1 from "../../../images/sub1.jpg";

const Container = styled.div`
	width: 100vw;
	height: 260px; // gnb pc ::after 260px
	margin-top: 120px; // header 120px
	position: relative;
	
	background-image: url(${Snb1});
	background-size: cover;
`;

const Title = styled.div`
	margin: 0 auto;
	color: ${Color.white};

	.title {
		font-size: 3rem;
	}
`

const Snb = () => {
	return (
		<Container>
			<Title>
				<div className={"title"}>{}</div>
				<div className={"title material-icons"}>home</div>
			</Title>
		</Container>
	)
};

export default Snb;
