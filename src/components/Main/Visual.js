import styled from "styled-components";
import {BiSearchAlt} from "react-icons/bi";
import {useEffect, useRef, useState} from "react";

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
		height: auto;
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
	color: #777777;

	strong {
		color: #444444;
		font-size: 3.5rem;
	}
`

const ButtonWithImage = styled.a`
	width: 17rem;
	height: 4.5rem;
	padding: 1rem;
	border-radius: 5px;
	background: linear-gradient(135deg, #303f9f 0%, #4a148c 100%);
	color: white;
	display: flex;
	align-items: center;
	justify-content: center;
	cursor: pointer;

	.icon {
		width: 2rem;
		height: 2rem;
	}

	.text {
		margin-left: 1rem;
		font-weight: bold;
		font-size: 1.2rem;
		line-height: calc(1.2rem * 1.8);
	}
`

const Visual = () => {
	const ref = useRef(null);
	const [left, setLeft] = useState(0);

	useEffect(() => {
		setLeft(ref.current.getBoundingClientRect().x);
	}, []);

	useEffect(() => {
		window.addEventListener("resize", () => setLeft(ref.current.getBoundingClientRect().x));
	}, []);

	return (
		<Container>
			<div style={{background: "black", width: "100vw", height: "100vh", left: left, position: "absolute"}}/>
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
				<ButtonWithImage style={{marginTop: "1.5rem"}}>
					<BiSearchAlt className={"icon"}/>
					<span className={"text"}>
						검체분양 총괄시스템
						<br/>
						바로가기  >
					</span>
				</ButtonWithImage>
			</div>
		</Container>
	)
};

export default Visual;