import styled, {css} from "styled-components";
import {News} from "../../../Data/Data";
import Color from "../../../Color";
import {useEffect, useRef} from "react";
import mediaQuery, {BREAKPOINT_MOBILE} from "../../../hooks/mediaQuery";

// 좌우 Carousel을 숨기기 위한 컨테이너
const HiddenContainer = styled.div`
	width: 100%;
	height: 13rem;
	position: absolute;
	bottom: 3rem;
	left: 0;
	overflow-x: hidden;
	
	${mediaQuery(BREAKPOINT_MOBILE)} {
		bottom: 0;
	}
`

const Container = styled.div`
	position: absolute;
	width: 200vw;
	height: auto;
	bottom: 1rem;
	left: -20rem;
	display: flex;
`

const Slide = styled.div`
	width: 18rem;
	min-width: 18rem;
	max-width: 18rem;
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
	transition: 0.5s;
	cursor: pointer;

	.day {
		text-align: right;
		font-size: 1.8rem;
		font-weight: bold;
	}

	.yearMonth {
		text-align: right;
		font-size: 0.9rem;
		color: ${Color.grey};
	}

	.title {
		text-overflow: ellipsis;
		white-space: nowrap;
		overflow: hidden;

		margin-top: 0.3rem;

		font-size: 1.1rem;
		font-weight: 700;
	}

	.content {
		text-overflow: ellipsis;
		overflow: hidden;
		display: -webkit-box;
		-webkit-line-clamp: 2;
		-webkit-box-orient: vertical;
		font-weight: 300;
		font-size: 0.9rem;

		margin-top: 0.5rem;

		color: ${Color.grey};
	}

	${props => props.background === true && css`
		background-image: linear-gradient(rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 1)),
		url("https://www.djbm.or.kr/main/images/korean/main/main_01.jpg");
		
		background-size: cover;
		background-position: right;
		background-color: transparent;
		border: none;
		color: ${Color.white};

		.yearMonth {
			color: ${Color.lightgrey};
		}

		.content {
			color: ${Color.lightgrey};
		}
	`};

	&:hover {
		transform: scale(1.05);

		.content {
			text-decoration: underline;
		}
	}
`

const Slider = ({carouselIndex, increased}) => {
	const ref = useRef(null);
	const isInitialMount = useRef(true);
	const isSlideMoving = useRef(false);
	
	const array = News.sort((a, b) => {
		return (a.id + 4) % News.length - (b.id + 4) % News.length;
	})
	
	const showBackgroundImage = (index) => {
		return (index) === 0 || (index === News.length - 1);
	}
	
	useEffect(() => {
		if (isInitialMount.current) {
			isInitialMount.current = false;
		}
		else {
			isSlideMoving.current = true;
			ref.current.style.transform = `translateX(${increased ? 2 : -2}0rem)`;
			ref.current.style.transition = `all 0.5s ease`;
		}
	}, [carouselIndex, increased]);
	
	const moveSlide = () => {
		if (increased) {
			ref.current.removeChild(ref.current.lastElementChild);
			ref.current.insertBefore(ref.current.lastElementChild.cloneNode(true), ref.current.firstElementChild);
		}
		else {
			ref.current.removeChild(ref.current.firstElementChild);
			ref.current.appendChild(ref.current.firstElementChild.cloneNode(true));
		}
	};
	
	return (
		<HiddenContainer>
			<Container ref={ref} onTransitionEnd={(event) => {
				if (isSlideMoving.current) {
					event.target.removeAttribute("style");
					moveSlide();
					isSlideMoving.current = false;
				}
			}}>
				{array.map((news, index) => (
					<Slide key={index} background={showBackgroundImage(news.id)}>
						<div className={"day"}>{news.date[1]}</div>
						<div className={"yearMonth"}>{news.date[0]}</div>
						<div className={"title"}>{news.title}</div>
						<div className={"content"}>{news.content}</div>
					</Slide>
				))}
				<Slide background={showBackgroundImage(array[0].id)}>
					<div className={"day"}>{array[0].date[1]}</div>
					<div className={"yearMonth"}>{array[0].date[0]}</div>
					<div className={"title"}>{array[0].title}</div>
					<div className={"content"}>{array[0].content}</div>
				</Slide>
			</Container>
		</HiddenContainer>
	)
};

export default Slider;
