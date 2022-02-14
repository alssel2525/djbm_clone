import styled from "styled-components";
import Color from "../../../Color";
import Snb1 from "../../../images/sub1.jpg";
import {Link, useParams} from "react-router-dom";
import {Menus} from "../../../Data/Data";

const Container = styled.div`
	width: 100vw;
	margin-top: 120px; // header 120px
	position: relative;
	display: flex;
	flex-direction: column;
	justify-content: flex-start;
	align-items: center;
`;

const Title = styled.div`
	width: 100vw;
	height: 260px; // gnb pc ::after 260px
	margin: 0 auto;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	background-image: url(${Snb1});
	background-size: cover;
	background-position: center;

	color: ${Color.white};

	.title {
		font-size: 2.5rem;
		font-weight: 700;
	}

	.location {
		margin-top: 1rem;
		display: flex;
		flex-direction: row;
		justify-content: center;
		align-items: center;
		font-size: 1rem;

		* {
			display: flex;
			flex-direction: row;
			justify-content: center;
			align-items: center;
		}

		> :not(:first-child) {
			::before {
				content: "keyboard_arrow_right";
				font-family: Material Icons, sans-serif;
				font-size: 1rem;
				margin: 0 1rem;
				color: ${Color.lightgrey};
			}
		}
	}
`

const List = styled.div`
	height: 70px;
	width: 1280px;
	padding: 0 110px;
	display: flex;
	flex-direction: row;
	justify-content: space-evenly;
	align-items: center;
	position: relative;
	box-sizing: border-box;

	a {
		font-size: 1.1rem;
		font-weight: 400;
		color: ${Color.black};
		cursor: pointer;
		text-decoration: none;

		:nth-child(${props => props.nowDepth2}) {
			color: ${Color.red};
			font-weight: 700;
		}

		:hover {
			color: ${Color.red};
			font-weight: 700;
		}
	}

	::after {
		content: "";
		position: absolute;
		width: 100vw;
		left: 50%;
		bottom: 0;
		transform: translateX(-50%);
		border-bottom: 1px solid ${Color.lightgrey};
	}
`

const Snb = () => {
	const params = useParams();
	
	// 유효한 param 값인지 확인하고
	// 아니라면 Snb를 표시하지 않음
	if (!
		((1 <= parseInt(params.depth1) && parseInt(params.depth1) <= Menus.length) &&
			(1 <= parseInt(params.depth2) && parseInt(params.depth2) <= Menus[params.depth1 - 1].depth2.length))) {
		return null;
	}
	
	return (
		<Container>
			<Title>
				<div className={"title"}>{Menus[params.depth1 - 1].depth2[params.depth2 - 1]}</div>
				<div className={"location"}>
					<i className={"title material-icons"} style={{fontSize: "1rem"}}>home</i>
					<span>{Menus[params.depth1 - 1].depth1}</span>
					<span>{Menus[params.depth1 - 1].depth2[params.depth2 - 1]}</span>
				</div>
			</Title>
			<List nowDepth2={params.depth2}>
				{Menus[params.depth1 - 1].depth2.map((depth2, index) => (
					<Link to={`/menu/${params.depth1}/${index + 1}`} key={index}>{depth2}</Link>
				))}
			</List>
		</Container>
	)
};

export default Snb;
