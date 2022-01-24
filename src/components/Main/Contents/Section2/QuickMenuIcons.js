import styled from "styled-components";
import {MenuData_MainContentsSection2} from "../../../../Data";
import Color from "../../../../Color";

const Container = styled.div`
	width: 70%;

	display: flex;
	flex-direction: row;
	justify-content: space-between;
	align-items: center;
`;

const Text = styled.div`
	height: 3rem;
	margin-top: 1rem;
	text-align: center;
	word-break: keep-all;
	color: black;
	font-weight: bold;
`

const QuickMenu = styled.div`
	width: calc(1280px * 0.7 / 7 * 0.8);
	height: 100%;
	margin: 0 auto;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	cursor: pointer;

	svg {
		color: ${Color.lightgrey};
		width: 3rem;
		height: 3rem;
		transition-duration: 0.2s;
	}

	&:hover svg {
		color: ${Color.red};
	}
	
	&:hover ${Text} {
		text-decoration: underline;
	}
`


const QuickMenuIcons = () => {
	return (
		<Container>
			{
				MenuData_MainContentsSection2.map((menu, index) => {
					return (
						<QuickMenu key={index}>
							<i className={"material-icons"}>pie_chart</i>
							<Text>{MenuData_MainContentsSection2[index].content}</Text>
						</QuickMenu>
					)
				})
			}
		</Container>
	)
};

export default QuickMenuIcons;