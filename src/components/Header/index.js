import styled from "styled-components"
import logo from "../../images/logo_bg.png"
import {useState} from "react";

const Container = styled.div`
	width: 100%;
	height: 100%;
	margin: 0 auto;
	position: relative;
	z-index: 99;

	::before {
		background-color: #f7f8fa;
		width: 100%;
		height: 0;
		position: absolute;
		top: 122px;
		left: 0;
		transition: all 0.3s;
		opacity: 90%;
		content: "";
	}

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

			#gnb {
				padding-top: 5rem;
				transition: all 0.3s;
				margin: 0;
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
							display: list-item;

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
				display: block;
				content: "";
				clear: both;
			}
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

	return (
		<Container onMouseEnter={() => setIsHover(true)} onMouseLeave={() => setIsHover(false)}
			className={isHover ? "active" : ""}>
			<div className={"inner"}>
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
							</ul></li>
						<li><a href={"/menu"}>홍보마당</a>
							<ul className={"depth2"}>
								<li><a href={"/menu"}>주요성과</a></li>
								<li><a href={"/menu"}>홍보동영상</a></li>
								<li><a href={"/menu"}>포토갤러리</a></li>
								<li><a href={"/menu"}>홍보자료</a></li>
								<li><a href={"/menu"}>언론보도</a></li>
							</ul></li>
						<li><a href={"/menu"}>특구사무국</a>
							<ul className={"depth2"}>
								<li><a href={"/menu"}>인사말</a></li>
								<li><a href={"/menu"}>추진경과/연혁</a></li>
								<li><a href={"/menu"}>조직도(직원현황)</a></li>
								<li><a href={"/menu"}>CI</a></li>
								<li><a href={"/menu"}>오시는길</a></li>
							</ul></li>
					</ul>
				</nav>
			</div>
		</Container>
	)
};

export default Header;