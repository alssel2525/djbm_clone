import styled from "styled-components";
import {useEffect, useRef, useState} from "react";
import visual from "../../../images/visual.jpg"
import ButtonWithIcon from "./ButtonWithIcon";
import {BsArrowLeftCircle, BsArrowRightCircle} from "react-icons/bs";
import Slider from "./Slider";
import Color from "../../../Color";

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
		margin: 0 auto;
		position: relative;
		display: block;
	}
`

const TextContainer = styled.div`
	max-width: 100%;
	height: auto;
	position: relative;
	margin-top: 20rem;
	color: ${Color.grey};

	strong {
		color: ${Color.black};
		font-size: 3.5rem;
	}
`

const Arrow = styled.div`
	position: absolute;
	top: 0;
	right: 0;
	color: ${Color.white};

	svg {
		position: absolute;
		width: 5rem;
		height: 5rem;
		right: 0;
		top: 0;
		cursor: pointer;
		border-radius: 50%;

		&:hover {
			color: ${Color.red};
		}
	}
`

const Visual = () => {
	const ref = useRef(null);
	const [left, setLeft] = useState(0);
	const [carouselIndex, setCarouselIndex] = useState(0);
	
	useEffect(() => {
		setLeft(ref.current.getBoundingClientRect().x);
		window.addEventListener("resize", () => setLeft(ref.current.getBoundingClientRect().x));
	}, []);
	
	return (
		<Container>
			<div style={{
				backgroundImage: `url(${visual})`, backgroundSize: "cover",
				width: `calc(100vw - ${left}px)`, height: "100vh", left: left,
				position: "absolute", overflow: "hidden"
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
					<BsArrowRightCircle onClick={() => setCarouselIndex(prev => prev + 1)}/>
					<BsArrowLeftCircle onClick={() => setCarouselIndex(prev => prev - 1)} style={{top: "7rem"}}/>
				</Arrow>
			</div>
			<Slider carouselIndex={carouselIndex}/>
		</Container>
	)
};

export default Visual;