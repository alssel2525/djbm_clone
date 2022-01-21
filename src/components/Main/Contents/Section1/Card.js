import styled from "styled-components";
import {useState} from "react";
import Color from "../../../../Color";

const Container = styled.div`
	width: 400px; // (1280 - (40 * 2)) / 3
	height: 300px;
	cursor: pointer;
`;

const Image = styled.div`
	width: 100%;
	height: 190px;
	background-size: cover;
	background-image: url(${props => props.background});
`

const Title = styled.div`
	color: ${Color.grey};
	margin-top: 2rem;
	text-align: left;
	font-size: 1.2rem;
	font-weight: bold;
`

const Card = ({card}) => {
	const [isHover, setIsHover] = useState(false);
	
	return (
		<Container  onMouseEnter={() => setIsHover(true)} onMouseLeave={() => setIsHover(false)}>
			<Image background={card.background}/>
			<Title>{card.title}</Title>
		</Container>
	)
};

export default Card;