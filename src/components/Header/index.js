import styled from "styled-components"
import logo from "../../images/logo_bg.png"
import {useState} from "react";
import {Link} from "react-router-dom";
import Utils from "./Utils";
import Color from "../../Color";
import Gnb from "./Gnb";

const Container = styled.div`
	width: 100vw;
	margin: 0 auto;
	position: absolute;
	top: 0;
	z-index: 99;
	padding: 0 calc((100vw - (1280px)) / 2);
	box-sizing: border-box;
	background-color: ${Color.white};

	.__1280 {
		width: 1280px;
		margin: 0 auto;
		position: relative;

		.logo {
			position: absolute;
			transition: all 0.3s;
		}
	}
`

const Header = () => {
	const [isHover, setIsHover] = useState(false);
	const [isKor, setIsKor] = useState(true);

	return (
		<Container onMouseEnter={() => setIsHover(true)} onMouseLeave={() => setIsHover(false)}
			className={isHover ? "active" : ""}>
			<div className={`__1280 ${isHover ? "active" : ""}`}>
				<Utils isKor={isKor} setIsKor={setIsKor}/>
				<div className={"logo"}>
					<Link to={"/"}>
						<img src={logo} alt={"biomedical"}/>
					</Link>
				</div>
				<Gnb isHover={isHover}/>
			</div>
		</Container>
	)
};

export default Header;