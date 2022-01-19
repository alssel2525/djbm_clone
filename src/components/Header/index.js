import styled from "styled-components"
import logo from "../../images/logo_bg.png"
import {useState} from "react";
import {Link} from "react-router-dom";
import Utils from "./Utils";

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
				<nav>
					<ul id={"gnb"}>
						<li>
							<Link to={"/menu"}>규제자유특구소개</Link>
							<ul className={"depth2"}>
								<li><a href={"/menu"}>규제자유특구란?</a></li>
								<li><a href={"/menu"}>바이오메디컬 규제자유특구</a></li>
								<li><a href={"/menu"}>특구사업자소개</a></li>
							</ul>
						</li>
						<li>
							<a href={"/menu"}>실증사업현황</a>
							<ul className={"depth2"}>
								<li><a href={"/menu"}>인체유래물은행</a></li>
								<li><a href={"/menu"}>신의료기술 평가유예</a></li>
								<li><a href={"/menu"}>병원체자원 공용연구시설</a></li>
							</ul>
						</li>
						<li><a href={"/menu"}>알림마당</a>
							<ul className={"depth2"}>
								<li><a href={"/menu"}>공지사항</a></li>
								<li><a href={"/menu"}>Q&A</a></li>
								<li><a href={"/menu"}>자료실</a></li>
							</ul>
						</li>
						<li><a href={"/menu"}>홍보마당</a>
							<ul className={"depth2"}>
								<li><a href={"/menu"}>주요성과</a></li>
								<li><a href={"/menu"}>홍보동영상</a></li>
								<li><a href={"/menu"}>포토갤러리</a></li>
								<li><a href={"/menu"}>홍보자료</a></li>
								<li><a href={"/menu"}>언론보도</a></li>
							</ul>
						</li>
						<li><a href={"/menu"}>특구사무국</a>
							<ul className={"depth2"}>
								<li><a href={"/menu"}>인사말</a></li>
								<li><a href={"/menu"}>추진경과/연혁</a></li>
								<li><a href={"/menu"}>조직도(직원현황)</a></li>
								<li><a href={"/menu"}>CI</a></li>
								<li><a href={"/menu"}>오시는길</a></li>
							</ul>
						</li>
					</ul>
				</nav>
			</div>
		</Container>
	)
};

export default Header;