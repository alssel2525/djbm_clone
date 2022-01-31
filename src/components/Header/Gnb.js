import styled, {css} from "styled-components";
import {Menus} from "../../Data";
import {Link} from "react-router-dom";
import Color from "../../Color";
import mediaQuery, {BREAKPOINT_TABLET} from "../../hooks/mediaQuery";
import {useState} from "react";

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
		flex-direction: row;
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

	.Gnb--showButton {
		display: none;
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
	`}
		// end pc
		// start tablet
	${mediaQuery(BREAKPOINT_TABLET)} {
		width: 300px;
		height: 100vh;
		position: fixed;
		right: -100%;
		top: 0;
		flex-direction: column;
		justify-content: left;
		transition: 0.5s all ease;
		background: ${Color.white};
		margin: 0;
		border-top: ${Color.red} solid 70px;
		box-sizing: border-box;

		.Gnb--showButton {
			display: block;
		}

		.depth2 {
			position: absolute;
			left: 0;
			display: none;
			white-space: nowrap;
			padding: 0;
			flex-direction: column;

			a {
				&:hover {
					font-weight: bold;
					text-decoration: underline;
				}
			}
		}

		::after {
			content: "";
			width: 0;
		}

		${props => props.isActive === true && css`
			right: 0;
		`
		}
	}

	// end tablet
`

const Depth2 = styled.div`
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

	${props => props.isHover === true && css`
		display: flex;
		padding: 0;
		padding-inline: 0;
	`}

	${props => props.isActive === true && css`
		display: block;
	`};
`

const Gnb = ({isHover, isActive}) => {
	const [activeIndex, setActiveIndex] = useState(-1);
	
	return (
		<Container isHover={isHover} isActive={isActive}>
			{Menus.map((menu, index) => (
				<div key={index} className={"content"}>
					<Link to={"/"} className={"depth1"}>{menu.depth1}</Link>
					<div className={"Gnb--showButton"} onClick={() => setActiveIndex(index)}/>
					<Depth2 isActive={index === activeIndex} isHover={isHover}>
						{menu.depth2.map((depth2item, index) => (
							<Link to={"/"} key={index}>{depth2item}</Link>
						))}
					</Depth2>
				</div>
			))}
		</Container>
	)
};

export default Gnb;