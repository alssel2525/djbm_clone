import styled from "styled-components";
import Color from "../../../../Color";
import thumbnail from "../../../../images/galleryThumbView.jfif"
import {Link} from "react-router-dom";

const Container = styled.div`
	width: 400px;
	height: 16rem;
	display: flex;
	flex-direction: column;
	box-sizing: border-box;
	border-bottom: 1px solid ${Color.grey};
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
		margin-left: 1rem;
		position: relative;
		box-sizing: border-box;
		
		text-overflow: ellipsis;
		white-space: nowrap;
		overflow: hidden;
		
		a {
			width: 100%;
			box-sizing: border-box;
			
			
			text-decoration: none;
			font-weight: bold;
			color: #3b3b3b;
		}

		::before {
			position: absolute;
			top: -1rem;
			width: 2rem;
			height: 5px;
			background: ${Color.red};
			content: '';
		}

		div {
			margin-top: 0.5rem;
			color: ${Color.grey};
			font-weight: normal;
		}
	}
`

const Text = styled.div`
	height: 3rem;
	line-height: 3rem;
	font-weight: bold;
	position: relative;

	::after {
		content: ">";
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
					<Link to={"/"}>대전인체유래물은행 분양안내 리플렛</Link>
					<div>2020. 11. 25</div>
				</div>
			</Document>
			<Text>홍보자료</Text>
		</Container>
	)
};

export default BoxDocument;