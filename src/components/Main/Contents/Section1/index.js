import styled from "styled-components";
import Color from "../../../../Color";
import Cards from "./Cards";
import useIntersectionObserver from "../../../../hooks/useIntersectionObserver";
import {animated, useTrail} from "react-spring";
import mediaQuery, {BREAKPOINT_TABLET} from "../../../../hooks/mediaQuery";

const Container = styled.div`
	width: 100vw;
	padding-top: 4rem;
	display: block;
	position: relative;
	background-color: ${Color.lightgrey}44;
	box-sizing: border-box;

	.__1280 {
		width: 1280px;
		margin: 0 auto;
		position: relative;
		box-sizing: border-box;
		
		${mediaQuery(BREAKPOINT_TABLET)} {
			width: 100%;
			padding: 0 16px;
		}
	}

`

const Title = styled.div`
	width: 100%;
	height: 5rem;
	position: relative;
	font-size: 2.5rem;
	color: ${Color.black};
	font-weight: 900;
	text-align: center;
	box-sizing: border-box;
	
	span {
		position: relative;
	}
`

const Section1 = () => {
	const [ref, isVisible] = useIntersectionObserver({threshold: 0, rootMargin: "100% 0% -20% 0%", root: null});
	const text = Array.from("실증사업현황");
	
	const trail = useTrail(text.length, {
		config: {mass: 5, tension: 2000, friction: 200},
		delay: 300,
		from: {opacity: 0, top: "-20%"},
		to: {opacity: isVisible ? 1 : 0, top: isVisible ? "0" : "-20%"},
	})
	
	return (
		<Container>
			<div className={"__1280"}>
				<Title ref={ref}>
					{trail.map((s, i) =>
						(
							<animated.span key={i} style={s}>{text[i]}</animated.span>
						)
					)}
				</Title>
				<Cards/>
			</div>
		</Container>
	)
};

export default Section1;