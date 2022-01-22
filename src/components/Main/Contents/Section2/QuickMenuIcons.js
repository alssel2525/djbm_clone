import styled from "styled-components";
import {MenuData_MainContentsSection2} from "../../../../Data";

const Container = styled.div`
	width: 70%;

	display: flex;
	flex-direction: row;
	justify-content: space-between;
	align-items: center;
`;

const QuickMenu = styled.div`
	width: 80%;
	height: 100%;
	margin: 0 auto;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	
	svg {
		width: 3rem;
		height: 3rem;
	}
`

const Text = styled.div`
	height: 3rem;
	margin-top: 1rem;
	text-align: center;
	word-break: keep-all;
`


const QuickMenuIcons = () => {
	return (
		<Container>
			{
				MenuData_MainContentsSection2.map((menu, index) => {
					const Icon = MenuData_MainContentsSection2[index].icon;
					return (
						<QuickMenu key={index}>
							<Icon/>
							<Text>{MenuData_MainContentsSection2[index].content}</Text>
						</QuickMenu>
					)
				})
			}
		</Container>
	)
};

export default QuickMenuIcons;