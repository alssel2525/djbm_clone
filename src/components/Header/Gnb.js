import styled, {css} from "styled-components";
import {Menus} from "../../Data";
import {Link} from "react-router-dom";
import Color from "../../Color";

const Container = styled.nav`
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
				color: ${Color.black};
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
						color: ${Color.black};
						
						&:hover {
							font-weight: bold;
							text-decoration: underline;
						}
					}
				}
			}
		}
	}

	// lnb 배경
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

	${props => props.isHover === true && css`
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
			height: 260px;
		}
	`
	}
`;

const Gnb = ({isHover}) => {
	return (
		<Container isHover={isHover}>
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
		</Container>
	)
};

export default Gnb;