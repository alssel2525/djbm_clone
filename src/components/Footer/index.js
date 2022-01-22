import styled from "styled-components";
import Color from "../../Color";
import logo from "../../images/footlogo.png";
import Sites from "./Sites";

const Container = styled.div`
	height: 10rem;
	position: relative;
	padding: 2.5rem;
	background: ${Color.black};
	color: ${Color.lightgrey};
	box-sizing: border-box;

	.__1280 {
		position: relative;
		width: 1280px;
		padding: 0.1px;
		margin: auto;
	}
`;

const Logo = styled.div`
	display: block;
	vertical-align: middle;
	float: left;
`

const Footer = () => {
	return (
		<Container>
			<div className={"__1280"}>
				<Logo><img src={logo} alt={"logo"}/></Logo>
				<Sites action method={"post"}> </Sites>
			</div>
		</Container>
	)
};

export default Footer;