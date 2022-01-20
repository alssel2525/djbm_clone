import styled from "styled-components";
import {News} from "../../Data";

const Container = styled.div`
	position: absolute;
	width: 100vw;
	height: auto;
	bottom: 4rem;
	overflow: hidden;
	display: flex;
`

const Slide = styled.div`
	width: 20rem;
	height: 11rem;
	background-color: #ffffff;
	color: #000000;
	border-radius: 5px;
	border: 1px #d4d4d4 solid;
	display: flex;
	flex-direction: column;
	
	margin-left: 2rem;
`

const Slider = (carouselIndex) => {
	return (
		<Container>
			{News.map((news, index) => (
				<Slide key={index}>
					{news.date[1]}
				</Slide>
			))}
		</Container>
	)
};

export default Slider;