import styled from "styled-components";
import {News} from "../../../Data";
import Color from "../../../Color";

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
	border: 1px ${Color.lightgrey} solid;
	background-color: ${Color.white};
	color: ${Color.black};

	.day {
		text-align: right;
		font-size: 1.8rem;
		font-weight: bold;
	}

	.yearMonth {
		text-align: right;
		font-size: 1rem;
		color: ${Color.grey};
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

		color: ${Color.grey};
	}
`

const Slider = ({carouselIndex}) => {
	const array = Array.from(News);

	const sortFn = (a, b) => {
		if (carouselIndex >= 0) {
			return ((a.id + carouselIndex) % News.length) - ((b.id + carouselIndex) % News.length);
		}
		else return ((a.id - (-carouselIndex % News.length) + News.length) % News.length) - ((b.id - (-carouselIndex % News.length) + News.length) % News.length);
	}

	return (<Container>
		{array.sort(sortFn).map((news, index) => (
			<Slide key={index}>
				<div className={"day"}>{news.date[1]}</div>
				<div className={"yearMonth"}>{news.date[0]}</div>
				<div className={"title"}>{news.title}</div>
				<div className={"content"}>{news.content}</div>
			</Slide>
		))}
	</Container>)
};

export default Slider;