import styled, {css} from "styled-components";
import {Menus} from "../../Data";
import {Link} from "react-router-dom";
import Color from "../../Color";
import mediaQuery, {BREAKPOINT_MOBILE, BREAKPOINT_PC, BREAKPOINT_TABLET} from "../../hooks/mediaQuery";
import {useEffect, useState} from "react";

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

	// start pc
	${mediaQuery(BREAKPOINT_PC)} {
		.content {
			transition: all 0.3s;
			display: flex;
			flex-direction: row;
			position: relative;
			margin: 0;
			padding: 0;
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
			::after {
				height: 260px;
			}
		`};
	}

	// end pc

	// start tablet
	${mediaQuery(BREAKPOINT_TABLET)} {
		width: 300px;
		height: 100vh;
		position: fixed;
		right: -300px;
		top: 0;
		margin: 0;
		padding: 0 30px;
		display: flex;
		flex-direction: column;
		justify-content: left;
		transition: 0.5s right ease;
		background: ${Color.white};
		border-top: ${Color.red} solid 70px;
		box-sizing: border-box;

		.content {
			display: block;
			flex-direction: column;
			box-sizing: border-box;
			overflow: hidden;
			border-bottom: ${Color.lightgrey} solid 1px;
		}

		.depth1 {
			line-height: 70px;
		}

		.Gnb--showButton {
			font-size: 2rem;
			line-height: 70px;
			display: block;
		}

		// 어둡게 만드는 배경
		::after {
			content: "";
			width: 100vw;
			height: 100vh;
			position: fixed;
			right: 0;
			top: 0;
			visibility: hidden;
			opacity: 0;
			background-color: ${Color.black};
			z-index: -1;
			transition: all 0.5s ease;
		}

		${props => props.isActive === true && css`
			right: 0;

			::after {
				visibility: visible;
				opacity: 0.9;
				right: 300px;
			}
		`};
	}

	// end tablet
	
	// start mobile
	${mediaQuery(BREAKPOINT_MOBILE)} {
		width: 100vw;
		right: -100vw;
		
		::after {
			display: none;
		}

		${props => props.isActive === true && css`
			right: 0;
		`}
	}
	// end mobile
`

const Depth2 = styled.div`
	height: 100%;
	white-space: nowrap;
	padding: 0;
	flex-direction: column;

	a:hover {
		font-weight: bold;
		text-decoration: underline;
	}

	// start pc
	${mediaQuery(BREAKPOINT_PC)} {
		position: absolute;
		top: calc((120px - 4rem - 1.2rem) * 2);
		left: 0;
		max-width: 100%;
		display: none;

		a {
			margin-top: 1rem;
		}

		${props => props.isHover === true && css`
			display: flex;
			padding: 0;
			padding-inline: 0;
		`}
	}

	// end pc

	// start tablet
	${mediaQuery(BREAKPOINT_TABLET)} {
		position: relative;
		display: flex;
		flex-direction: column;
		box-sizing: border-box;
		margin-top: 0;
		transition: all 0.5s ease;
		overflow: hidden;

		a {
			padding-left: 20px;
			font-size: 1rem;
			line-height: 1.5rem;
		}
	}

	// end tablet
`

const Gnb = ({isHover, isActive}) => {
	const [activeIndex, setActiveIndex] = useState(-1);
	
	useEffect(() => {
		const depth2s = document.querySelectorAll(`.content .depth2`);
		depth2s.forEach((element, index) => {
			if (index === activeIndex) {
				element.style.maxHeight = `${element.scrollHeight}px`;
				element.style.marginBottom = `16px`;
			}
			else {
				element.style.maxHeight = 0;
				element.style.marginBottom = 0;
			}
		});
		
		const icons = document.querySelectorAll(`.content .Gnb--showButton`);
		icons.forEach((element, index) => {
			if (index === activeIndex) {
				element.style.transform = `rotate(180deg)`;
			}
			else {
				element.style.transform = "";
			}
		})
	}, [activeIndex]);
	
	
	return (
		<Container isHover={isHover} isActive={isActive}>
			{Menus.map((menu, index) => (
				<div key={index} className={"content"}>
					<div style={{display: "flex", flexDirection: "row", justifyContent: "space-between"}}
						onClick={() => setActiveIndex(prevState => {
							if (prevState === index) return -1; else return index
						})}>
						<Link to={"/"} className={"depth1"}>{menu.depth1}</Link>
						<div className={"Gnb--showButton material-icons"}>expand_more</div>
					</div>
					<Depth2 isHover={isHover} className={"depth2"}>
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
