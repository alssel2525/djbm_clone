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

	.date {
		text-overflow: ellipsis;
		white-space: nowrap;
		display: -webkit-box;
		-webkit-line-clamp: 2;
		-webkit-box-orient: vertical;
	}

	.title {
		text-overflow: ellipsis;
		white-space: nowrap;
		overflow: hidden;
	}

	.content {
		text-overflow: ellipsis;
		overflow: hidden;
		display: -webkit-box;
		-webkit-line-clamp: 2;
		-webkit-box-orient: vertical;
	}
`

const Slider = (carouselIndex) => {
	return (<Container>
		{News.map((news, index) => (
			<Slide key={index}>
				<div className={"date"}>{news.date[1]}</div>
				<div className={"date"}>{news.date[0]}</div>
				<div className={"title"}>{news.title}</div>
				<div className={"content"}>{news.content}</div>
			</Slide>
		))}
	</Container>)
};

export default Slider;