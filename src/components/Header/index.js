import styled from "styled-components"
import logo from "../../images/logo_bg.png"
import {useState} from "react";
import {Link} from "react-router-dom";
import Utils from "./Utils";
import {menus} from "../../Data";

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
			float: left;
			position: absolute;
			transition: all 0.3s;
		}

		nav {
			position: relative;
			float: right;
			margin-top: 5rem;

			#gnb {
				transition: all 0.3s;
				display: block;
				list-style: none;

				> li {
					float: left;
					margin-left: 6rem;
					position: relative;

					> a {
						color: black;
						text-transform: uppercase;
						margin-bottom: 2rem;
						font-weight: bold;
						text-decoration: none;
						font-size: 1.2rem;
					}

					.depth2 {
						position: absolute;
						top: 5rem;
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
		}

		::before {
			content: "";
			position: absolute;
			width: 100vw;
			height: 0;
			left: 0;
			margin-left: calc(-50vw + 50%);
			margin-top: 8.5rem;
			transition: all 0.3s;
			opacity: 90%;
			background-color: #f7f8fa;
		}

		&.active::before {
			height: 20rem;
		}
	}


	&.active {
		::before {
			height: 260px;
		}

		nav #gnb > li .depth2 {
			display: block;
		}
	}
`

const Gnb = styled.nav`
	position: relative;
	float: right;
	margin-top: 5rem;
	list-style: none;


	#gnb {
		transition: all 0.3s;
		display: block;
		list-style: none;

		> li {
			float: left;
			margin-left: 6rem;
			position: relative;

			> a {
				color: black;
				text-transform: uppercase;
				margin-bottom: 2rem;
				font-weight: bold;
				text-decoration: none;
				font-size: 1.2rem;
			}

			.depth2 {
				position: absolute;
				top: 5rem;
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
`

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
				<Gnb>
					<ul id={"gnb"}>
						{menus.map((menu, index) => (
							<li key={index}>
								<Link to={"/"}>{menu.depth1}</Link>
								<ul className={"depth2"}>
									{menu.depth2.map((depth2item, index) => (
										<li key={index}><Link to={"/"}/>{depth2item}</li>
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