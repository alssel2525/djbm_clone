import styled from "styled-components";
import {useState} from "react";
import Color from "../../../../Color";

const Container = styled.div`
	width: 400px; // (1280 - (40 * 2)) / 3
	height: 300px;
	cursor: pointer;
	position: relative;
	overflow: hidden;
`;

const Image = styled.div`
	width: 100%;
	height: 12rem;
	background-size: cover;
	background-image: url(${props => props.background});
	transition-duration: 0.5s;
	border-radius: 0.5rem;
	overflow: hidden;
	transform-origin: top;

	::before {
		content: "";
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 12rem;
		background-color: ${Color.black};
		opacity: 0;
		transition: 0.5s;
	}

	&.active {
		transform: scale(1.05);

		::before {
			transform: scale(1.05);
			opacity: 0.5;
		}
	}
`

const More = styled.div`
	width: 140px;
	height: 0;
	position: absolute;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
	text-align: center;
	line-height: 42px;
	color: ${Color.white};
	border: 2px solid ${Color.white};
	transition: all 0.5s;
	overflow: hidden;
	visibility: hidden;
	
	&.active {
		visibility: visible;
		height: 42px;
	}
`

const Number = styled.div`
	position: absolute;
	width: 4rem;
	height: 4rem;
	top: 9rem;
	right: 1rem;
	text-align: center;
	line-height: 4rem;
	background: ${Color.black};
	border-radius: 50%;
	color: ${Color.white};
	font-size: 1.5rem;
	font-weight: bold;
	transition-duration: 0.5s;

	&.active {
		background-color: ${Color.red};
	}
`

const Title = styled.div`
	color: ${Color.black};
	margin-top: 2rem;
	text-align: left;
	font-size: 1.2rem;
	font-weight: bold;

	&.active {
		text-decoration: underline;
	}
`

const Card = ({card}) => {
	const [isHover, setIsHover] = useState(false);
	
	return (
		<Container onMouseEnter={() => setIsHover(true)} onMouseLeave={() => setIsHover(false)}>
			<Image background={card.background} className={isHover ? "active" : ""}>
				<More className={isHover ? "active" : ""}>자세히 보기</More>
			</Image>
			<Number className={isHover ? "active" : ""}>0{card.id}</Number>
			<Title className={isHover ? "active" : ""}>{card.title}</Title>
		</Container>
	)
};

export default Card;