import styled, {css} from "styled-components"
import logo from "../../images/logo_bg.png"
import {useState} from "react";
import {Link} from "react-router-dom";
import Utils from "./Utils";
import {Menus} from "../../Data";

const Container = styled.div`
	width: 100vw;
	margin: 0 auto;
	position: absolute;
	top: 0;
	z-index: 99;
	padding: 0 calc((100vw - (1280px)) / 2);
	box-sizing: border-box;
	background-color: white;

	.container_1280 {
		width: 1280px;
		margin: 0 auto;
		position: relative;

		.logo {
			position: absolute;
			transition: all 0.3s;
		}
	}
`

const Gnb = styled.nav`
	float: right;
	margin: 5rem auto 0;
	list-style: none;
	box-sizing: border-box;

	#gnb {
		transition: all 0.3s;
		display: block;
		list-style: none;
		margin: 0;
		padding: 0;

		> li {
			margin-left: 6rem;
			position: relative;
			display: inline-block;
			margin-bottom: 2rem;

			> a {
				color: black;
				text-transform: uppercase;
				font-weight: bold;
				text-decoration: none;
				font-size: 1.2rem;
			}

			.depth2 {
				position: absolute;
				top: 6rem;
				left: 0;
				width: 100%;
				display: none;
				white-space: nowrap;
				padding: 0;

				> li {
					margin: 0 0 1rem;
					list-style: none;

					> a {
						position: relative;
						padding: 5px 0;
						text-decoration: none;
						color: #555555;
					}
				}
			}
		}
	}

	::after {
		position: absolute;
		content: "";
		width: 100vw;
		height: 0;
		left: 0;
		margin-left: calc(-50vw + 50%);
		transition: all 0.3s;
		opacity: 90%;
		background-color: #f7f8fa;
		z-index: -1;
	}

	${props => props.isHover && css`
		#gnb {
			> li {
				.depth2 {
					display: inline;
					padding: 0;
					padding-inline: 0;
				}
			}
		}

		::after {
			height: 20rem;
		}
	`
	}
`;

const Header = () => {
	const [isHover, setIsHover] = useState(false);
	const [isKor, setIsKor] = useState(true);

	return (
		<Container onMouseEnter={() => setIsHover(true)} onMouseLeave={() => setIsHover(false)}
			className={isHover ? "active" : ""}>
			<div className={`container_1280 ${isHover ? "active" : ""}`}>
				<Utils isKor={isKor} setIsKor={setIsKor}/>
				<div className={"logo"}>
					<Link to={"/"}>
						<img src={logo} alt={"biomedical"}/>
					</Link>
				</div>
				<Gnb isHover={isHover}>
					<ul id={"gnb"}>
						{Menus.map((menu, index) => (
							<li key={index}>
								<Link to={"/"}>{menu.depth1}</Link>
								<ul className={"depth2"}>
									{menu.depth2.map((depth2item, index) => (
										<li key={index}><Link to={"/"}>{depth2item}</Link></li>
									))}
								</ul>
							</li>
						))}
					</ul>
				</Gnb>
			</div>
		</Container>
	)
};

export default Header;