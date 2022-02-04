import styled from "styled-components";
import Color from "../../../Color";
import Snb1 from "../../../images/sub1.jpg";
import {useParams} from "react-router-dom";
import {Menus} from "../../../Data";

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

const Snb = () => {
	const params = useParams();
	
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
		</Container>
	)
};

export default Snb;
