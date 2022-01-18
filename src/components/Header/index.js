import styled from "styled-components"
import logo from "../../images/logo_bg.png"

const Container = styled.div`
	width: 1280px;
	margin: 0 auto;

	:before {
		background-color: #f7f8fa;
		width: 100%;
		height: 0;
		position: absolute;
		top: 122px;
		left: 0;
		transition: all 0.3s;
		opacity: 90%;
	}

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
				margin-left: 4.5rem;
				position: relative;
				
				> a {
					color: black;
					text-transform: uppercase;
					padding-bottom: 2rem;
					font-weight: bold;
					text-decoration: none;
					font-size: 1.2rem;
				}
			}
		}
	}
`

const Header = () => {
	return (
		<Container>
			<div className={"logo"}>
				<a href={"/"}>
					<img src={logo} alt={"biomedical"}/>
				</a>
			</div>
			<nav>
				<ul id={"gnb"}>
					<li><a href={"/menu"}>규제자유특구소개</a></li>
					<li><a href={"/menu"}>실증사업현황</a></li>
					<li><a href={"/menu"}>알림마당</a></li>
					<li><a href={"/menu"}>홍보마당</a></li>
					<li><a href={"/menu"}>특구사무국</a></li>
				</ul>
			</nav>
		</Container>
	)
};

export default Header;