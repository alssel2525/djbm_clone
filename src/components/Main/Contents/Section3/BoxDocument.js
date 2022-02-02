import styled from "styled-components";
import Color from "../../../../Color";
import thumbnail from "../../../../images/galleryThumbView.jfif"
import {Link} from "react-router-dom";
import mediaQuery, {BREAKPOINT_TABLET} from "../../../../hooks/mediaQuery";

const Container = styled.div`
	width: 400px;
	height: 16rem;
	display: flex;
	flex-direction: column;
	box-sizing: border-box;
	border-bottom: 1px solid ${Color.grey};
	
	${mediaQuery(BREAKPOINT_TABLET)} {
		width: 60%;
	}
`;

const Document = styled.div`
	width: 100%;
	height: 13rem;
	display: flex;
	justify-content: space-between;
	align-items: center;
	position: relative;
	padding: 2.5rem 1rem;
	box-sizing: border-box;
	background: ${Color.lightgrey}50;

	.image {
		width: 8rem;
		height: 6rem;
		position: relative;
		float: left;
		flex: 0 0 auto;
		box-shadow: 0 3px 3px #dddddd;
		border: 1px solid #d0d0d0;
		background: ${Color.white};
		overflow: hidden;
		text-align: center;

		img {
			width: 100%;
			height: 100%;
			object-fit: contain;
		}
	}

	.text {
		height: 100%;
		margin-left: 1rem;
		position: relative;
		display: flex;
		flex-direction: column;
		justify-content: center;
		box-sizing: border-box;
		overflow: hidden;
		
		.line {
			margin-bottom: 1rem;
			width: 2rem;
			height: 5px;
			background: ${Color.red};
		}
		
		a {
			text-overflow: ellipsis;
			white-space: nowrap;
			overflow: hidden;

			font-size: 1.1rem;
			text-decoration: none;
			font-weight: bold;
			color: #3b3b3b;
		}

		.date {
			margin-top: 0.5rem;
			color: ${Color.grey};
			font-weight: normal;
		}
	}
	
	${mediaQuery(BREAKPOINT_TABLET)} {
		justify-content: space-evenly;
	}
`

const Text = styled.div`
	height: 3rem;
	line-height: 3rem;
	font-weight: bold;
	position: relative;

	::after {
		content: "keyboard_arrow_right";
		font-family: Material Icons, sans-serif;
		text-align: right;
		position: absolute;
		right: 0;
		color: ${Color.grey};
	}
`

const BoxDocument = () => {
	return (
		<Container>
			<Document>
				<div className={"image"}><img src={thumbnail} alt={"대전인체유래물은행 분양안내 리플렛"}/></div>
				<div className={"text"}>
					<div className={"line"}/>
					<Link to={"/"}>대전인체유래물은행 분양안내 리플렛</Link>
					<div className={"date"}>2020. 11. 25</div>
				</div>
			</Document>
			<Text>홍보자료</Text>
		</Container>
	)
};

export default BoxDocument;