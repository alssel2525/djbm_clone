import styled from "styled-components";
import Color from "../../../Color";
import mediaQuery, {BREAKPOINT_MOBILE} from "../../../hooks/mediaQuery";

const Container = styled.a`
	width: 18rem;
	height: 6.5rem;
	margin-top: 2rem;
	padding: 1rem;
	border-radius: 5px;
	background: ${Color.gradient};
	color: ${Color.white};
	display: flex;
	align-items: center;
	justify-content: center;
	cursor: pointer;
	box-sizing: border-box;

	.icon {
		font-size: 48px;
	}

	.text {
		margin-left: 1rem;
		font-weight: bold;
		font-size: 1.1rem;
		line-height: calc(1.1rem * 1.8);
		
		::after {
			content: "keyboard_arrow_right";
			font-family: Material Icons, sans-serif;
			margin-left: 1rem;
			font-weight: normal;
			font-style: normal;
			font-size: 1rem;
		}
	}
	
	${mediaQuery(BREAKPOINT_MOBILE)} {
		width: 100%;
	}
`

const ButtonWithIcon = ({link}) => {
	const openLink = (link) => {
		if (link && link !== "") window.open(link);
	}
	
	return (
		<Container onClick={() => openLink(link)}>
			<i className={"material-icons md-48"}>manage_search</i>
			<span className={"text"}>
				검체분양 총괄시스템
				<br/>
				바로가기
			</span>
		</Container>
	)
};

export default ButtonWithIcon;
