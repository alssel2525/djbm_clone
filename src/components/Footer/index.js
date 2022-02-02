import styled from "styled-components";
import Color from "../../Color";
import logo from "../../images/footlogo.png";
import Sites from "./Sites";
import Informations from "./Informations";
import mediaQuery, {BREAKPOINT_TABLET} from "../../hooks/mediaQuery";

const Container = styled.div`
	width: 100vw;
	height: 180px;
	position: relative;
	bottom: 0;
	padding: 2rem 0 4rem;
	background: ${Color.black};
	color: ${Color.lightgrey};
	box-sizing: border-box;

	.__1280 {
		width: 1280px;
		position: relative;
		display: flex;
		flex-direction: row;
		margin: auto;
		padding: 0;
		justify-content: space-between;
		box-sizing: border-box;
	}
	
	${mediaQuery(BREAKPOINT_TABLET)} {
		height: 100%;



		.__1280 {
			width: 100%;
			padding: 0 16px;
			flex-direction: column;
			align-items: center;
		}
	}
`;

const Logo = styled.div`
	position: relative;
	float: left;
`

const Footer = () => {
	return (
		<Container>
			<div className={"__1280"}>
				<Logo><img src={logo} alt={"logo"}/></Logo>
				<Sites/>
				<Informations/>
			</div>
		</Container>
	)
};

export default Footer;