import styled, {css} from "styled-components";
import {Menus} from "../../Data";
import {Link} from "react-router-dom";
import Color from "../../Color";

const Container = styled.nav`
	width: 840px;
	margin: 4rem 8px auto auto;
	position: relative;
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	text-decoration: none;
	box-sizing: border-box;

	a {
		text-decoration: none;
		color: ${Color.black};
	}

	.content {
		transition: all 0.3s;
		display: flex;
		position: relative;
		margin: 0;
		padding: 0;
	}

	.depth1 {
		color: ${Color.black};
		text-transform: uppercase;
		font-weight: bold;
		text-decoration: none;
		font-size: 1.2rem;
	}

	.depth2 {
		position: absolute;
		top: calc((120px - 4rem - 1.2rem) * 2);
		left: 0;
		max-width: 100%;
		display: none;
		white-space: nowrap;
		padding: 0;

		flex-direction: column;

		a {
			margin-top: 1rem;

			&:hover {
				font-weight: bold;
				text-decoration: underline;
			}
		}
	}

	// lnb 배경
	::after {
		content: "";
		width: 100vw;
		height: 0;
		position: absolute;
		right: 0;
		margin-right: calc(-1 * (8px + (100vw - 1280px) / 2));
		top: calc(-4rem + 120px); // - Gnb margin-top + header container height
		transition: height 0.3s;
		opacity: 90%;
		background-color: #f7f8fa;
		z-index: -1;
	}

	${props => props.isHover === true && css`
		.depth2 {
			display: flex;
			padding: 0;
			padding-inline: 0;
		}

		::after {
			height: 260px;
		}
	`
	}
`

const Gnb = ({isHover}) => {
	return (
		<Container isHover={isHover}>
			{Menus.map((menu, index) => (
				<div key={index} className={"content"}>
					<Link to={"/"} className={"depth1"}>{menu.depth1}</Link>
					<div className={"depth2"}>
						{menu.depth2.map((depth2item, index) => (
							<Link to={"/"} key={index}>{depth2item}</Link>
						))}
					</div>
				</div>
			))}
		</Container>
	)
};

export default Gnb;