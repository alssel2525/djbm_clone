import styled from "styled-components"
import logo from "../../images/logo_bg.png"
import {useState} from "react";
import {Link} from "react-router-dom";
import Utils from "./Utils";
import Color from "../../Color";
import Gnb from "./Gnb";
import mediaQuery, {BREAKPOINT_MOBILE, BREAKPOINT_TABLET} from "../../hooks/mediaQuery";

const Container = styled.div`
	width: 100vw;
	height: 120px;
	margin: 0 auto;
	position: absolute;
	top: 0;
	z-index: 99;
	box-sizing: border-box;
	background-color: ${Color.white};

	.__1280 {
		width: 1280px;
		max-width: 100%;
		// margin collapse 방지용
		// https://velog.io/@raram2/CSS-%EB%A7%88%EC%A7%84-%EC%83%81%EC%87%84Margin-collapsing-%EC%9B%90%EB%A6%AC-%EC%99%84%EB%B2%BD-%EC%9D%B4%ED%95%B4
		padding-top: 1px;
		margin: -1px auto 0;
		position: relative;

		.logo {
			width: 160px;
			height: 160px;
			background-image: url(${logo});
			background-size: cover;
			position: absolute;
			transition: all 0.3s;
		}

		.Header--MenuButton {
			color: ${props => props.isActive ? Color.white : Color.black};
			position: absolute;
			display: none;
			top: 35px;
			right: 16px;
			transform: translateY(-50%);
			cursor: pointer;
		}

		${mediaQuery(BREAKPOINT_TABLET)} {
			width: 100%;
			position: absolute;

			.Header--MenuButton {
				display: block;
			}
		}
	}

	${mediaQuery(BREAKPOINT_TABLET)} {
		height: 70px;
	}

	// start mobile
	${mediaQuery(BREAKPOINT_MOBILE)} {
		.__1280 {
			.logo {
				width: 120px;
				height: 120px;
			}
		}
	}

	// end mobile
`


const Header = () => {
	const [isHover, setIsHover] = useState(false);
	const [isActive, setIsActive] = useState(false);
	const [isKor, setIsKor] = useState(true);
	
	const toggleIsActive = () => {
		setIsActive(prevState => !prevState);
	}
	
	return (
		<Container onMouseOver={() => setIsHover(true)} onMouseOut={() => setIsHover(false)} isActive={isActive}>
			<div className={`__1280`}>
				<Link to={"/"} className={"logo"}/>
				<Utils isKor={isKor} setIsKor={setIsKor}/>
				<Gnb isHover={isHover} isActive={isActive} setIsHover={setIsHover} setIsActive={setIsActive}/>
				<i className={"material-icons Header--MenuButton"} onClick={toggleIsActive}
					style={{position: isActive ? "fixed" : "absolute"}}>{isActive ? `close` : `menu_open`}</i>
			</div>
		</Container>
	)
};

export default Header;
