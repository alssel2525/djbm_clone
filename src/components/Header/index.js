import styled from "styled-components"
import logo from "../../images/logo_bg.png"
import {useState} from "react";
import {Link} from "react-router-dom";

const Container = styled.div`
	width: 100vw;
	margin: 0 auto;
	position: relative;
	z-index: 99;
	padding: 0 calc((100vw - (1280px)) / 2) 0.1px; // 내부 height 설정을 위해 padding-bottom을 0.1px로 함.
	box-sizing: border-box;
	background-color: white;

	.inner {
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

const Utils = styled.div`
	position: absolute;
	right: 0;
	padding-right: inherit;
	box-sizing: border-box;
	line-height: 1rem;
	text-decoration: none;
	font-weight: bold;

	li {
		list-style: none;
	}

	.site_map {
		text-decoration: none;
		display: inline-block;

		a {
			text-decoration: none;
			color: #515151;
		}
	}

	.lang {
		::before {
			content: "";
			position: absolute;

			background-color: #707070;
			width: 1px;
			height: 1rem;
			opacity: 50%;
		}

		margin-left: 1rem;
		display: inline-block;

		ul {
			padding: 0;
		}

		li {
			display: inline-block;
		}

		a {
			cursor: pointer;
			text-decoration: none;
			color: #BFBFBF;
			margin-left: 1rem;
		}

		li.active a {
			color: #B70023;
		}
	}
`;

const Header = () => {
	const [isHover, setIsHover] = useState(false);
	const [isKor, setIsKor] = useState(true);

	return (
		<Container onMouseEnter={() => setIsHover(true)} onMouseLeave={() => setIsHover(false)}
			className={isHover ? "active" : ""}>
			<Utils>
				<ul>
					<li className={"site_map"}>
						<Link to={"/menu"}>SITE MAP</Link>
					</li>
					<li className={"lang"}>
						<ul>
							<li className={isKor ? "active" : ""}>
								<Link to={"/menu"} onClick={() => setIsKor(true)}>KOR</Link>
							</li>
							<li className={isKor ? "" : "active"}>
								<Link to={"/eng"} onClick={() => setIsKor(false)}>ENG</Link>
							</li>
						</ul>
					</li>
				</ul>
			</Utils>
			<div className={`inner ${isHover ? "active" : ""}`}>
				<div className={"logo"}>
					<a href={"/"}>
						<img src={logo} alt={"biomedical"}/>
					</a>
				</div>
				<nav>
					<ul id={"gnb"}>
						<li>
							<a href={"/menu"}>규제자유특구소개</a>
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