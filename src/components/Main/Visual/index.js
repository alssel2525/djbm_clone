import styled from "styled-components";
import {useEffect, useRef, useState} from "react";
import visual from "../../../images/visual.webp"
import ButtonWithIcon from "./ButtonWithIcon";
import Slider from "./Slider";
import Color from "../../../Color";
import {News} from "../../../Data";
import mediaQuery, {BREAKPOINT_TABLET} from "../../../hooks/mediaQuery";

const Container = styled.div`
	height: 100vh;
	width: 100vw;
	position: relative;
	margin: 0;
	padding: 0;
	box-sizing: border-box;
	display: inline-block;

	.__1280 {
		width: 1280px;
		height: 100vh;
		margin: -1px auto 0;
		padding-top: 1px;
		position: relative;
		display: block;
		box-sizing: border-box;

		${mediaQuery(BREAKPOINT_TABLET)} {
			width: 100%;
			padding: 1px 16px 0;
		}
	}
`

const TextContainer = styled.div`
	max-width: 100%;
	height: auto;
	position: relative;
	margin-top: 18rem;
	color: ${Color.black};

	strong {
		font-size: 3.5rem;
	}

	span {
		font-weight: 300;
	}
`

const Arrow = styled.div`
	position: absolute;
	top: 18rem;
	right: 0;
	color: ${Color.white};

	div {
		position: absolute;
		width: 4rem;
		height: 4rem;
		right: 0;
		top: 0;
		cursor: pointer;
		border-radius: 50%;
		border: solid ${Color.white} 2px;
		transition: 0.2s;

		&:hover {
			border-color: ${Color.red};
			background: ${Color.red};
		}

		i {
			font-size: 30px;
			position: absolute;
			top: 50%;
			left: 50%;
			transform: translate(-50%, -50%);
		}
	}
	
	${mediaQuery(BREAKPOINT_TABLET)} {
		right: 16px;
	}
`

const Visual = () => {
	const ref = useRef(null);
	const [left, setLeft] = useState(1000000);
	const [carouselIndex, setCarouselIndex] = useState(0);
	const [increased, setIncreased] = useState(true);
	
	const decreaseCarouselIndex = () => {
		setCarouselIndex(prev => {
			if (prev === 0) return News.length - 1;
			else return prev - 1;
		});
		setIncreased(false);
	};
	
	const increaseCarouselIndex = () => {
		setCarouselIndex(prev => (prev + 1) % News.length);
		setIncreased(true);
	};
	
	useEffect(() => {
		document.fonts.ready.then(() => {
			setLeft(ref.current.getBoundingClientRect().left);
		})
		window.addEventListener("resize", () => setLeft(ref.current.getBoundingClientRect().left));
	}, []);
	
	return (
		<Container>
			<div style={{
				backgroundImage: `url(${visual})`, backgroundSize: "cover",
				width: `calc(100vw - ${left}px)`, height: "100vh", right: 0,
				position: "absolute", overflow: "hidden",
			}}/>
			<div className={"__1280"}>
				<TextContainer>
					<strong>{`DAEJEON Bio `}</strong>
					<strong ref={ref} style={{color: "#ffffff"}}>Medical</strong>
					<br/>
					<span>
						Daejeon Regulation Free Special Zone
						<br/>
						for Bio medical industry
					</span>
				</TextContainer>
				<ButtonWithIcon link={"https://portal.djbm.or.kr:8443/djbm/"}/>
				<Arrow>
					<div onClick={() => increaseCarouselIndex()}>
						<i className={"material-icons"}>arrow_forward</i>
					</div>
					<div onClick={() => decreaseCarouselIndex()} style={{top: "5rem"}}>
						<i className={"material-icons"}>arrow_back</i>
					</div>
				</Arrow>
			</div>
			<Slider carouselIndex={carouselIndex} increased={increased}/>
		</Container>
	)
};

export default Visual;