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
	margin-left: 2rem;
	padding: 0.8rem 1.5rem;
	display: flex;
	flex-direction: column;
	box-sizing: border-box;
	border-radius: 5px;
	border: 1px #d4d4d4 solid;
	background-color: #ffffff;
	color: #000000;

	.day {
		text-align: right;
		font-size: 1.8rem;
		font-weight: bold;
	}

	.yearMonth {
		text-align: right;
		font-size: 1rem;
		color: #878787;
	}

	.title {
		text-overflow: ellipsis;
		white-space: nowrap;
		overflow: hidden;

		margin-top: 0.3rem;

		font-size: 1.1rem;
		font-weight: bold;
	}

	.content {
		text-overflow: ellipsis;
		overflow: hidden;
		display: -webkit-box;
		-webkit-line-clamp: 2;
		-webkit-box-orient: vertical;

		margin-top: 0.5rem;

		color: #878787;
	}
`

const Slider = ({carouselIndex}) => {
	const array = Array.from(News);

	const sortFn = (a, b) => {
		return ((News.indexOf(a) + carouselIndex) % News.length) - ((News.indexOf(b) + carouselIndex) % News.length);
	}

	const pickColor = (color1, color2, weight) => {
		const w1 = 1 - weight;
		const w2 = weight;
		const rgb = [Math.round(color1[0] * w1 + color2[0] * w2),
			Math.round(color1[1] * w1 + color2[1] * w2),
			Math.round(color1[2] * w1 + color2[2] * w2),];
		console.log(rgb);
		return rgb
	}

	return (<Container>
		{array.sort(sortFn).map((news, index) => (
			<Slide key={index}
				style={{backgroundColor: `rgb(${pickColor([183, 28, 28], [48, 63, 159], News.indexOf(news) / News.length).join(",")})`}}>
				<div className={"day"}>{news.date[1]}</div>
				<div className={"yearMonth"}>{news.date[0]}</div>
				<div className={"title"}>{news.title}</div>
				<div className={"content"}>{news.content}</div>
			</Slide>
		))}
	</Container>)
};

export default Slider;