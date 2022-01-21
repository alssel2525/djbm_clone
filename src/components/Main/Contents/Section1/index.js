import styled from "styled-components";
import Color from "../../../../Color";
import Cards from "./Cards";

const Container = styled.div`
	width: 100vw;
	padding-top: 4rem;
	display: block;
	position: relative;
	background-color: ${Color.lightgrey}44;

	.__1280 {
		width: 1280px;
		margin: 0 auto;
		position: relative;
	}

`

const Title = styled.div`
	font-size: 2rem;
	color: ${Color.black};
	font-weight: bold;
	text-align: center;
`

const Section1 = () => {
	return (
		<Container>
			<div className={"__1280"}>
				<Title>실증사업현황</Title>
				<Cards/>
			</div>
		</Container>
	)
};

export default Section1;