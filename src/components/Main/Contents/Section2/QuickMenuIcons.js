import styled, {css} from "styled-components";
import {MenuData_MainContentsSection2} from "../../../../Data";
import Color from "../../../../Color";
import mediaQuery, {BREAKPOINT_MOBILE, BREAKPOINT_TABLET} from "../../../../hooks/mediaQuery";

const Container = styled.div`
	width: 70%;
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	align-items: center;

	${mediaQuery(BREAKPOINT_TABLET)} {
		width: 100%;
	}

	${mediaQuery(BREAKPOINT_MOBILE)} {
		display: grid;
		grid-template-columns: 1fr 1fr;
		justify-content: center;
	}
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

	// 1번째 2번째 항목 제외
	// -> 첫 row 제외
	:not(:nth-child(1)):not(:nth-child(2)) {
		margin-top: 1rem;
	}

	i {
		color: ${Color.lightgrey};
		width: 3rem;
		height: 3rem;
		opacity: 0;
		transition: opacity 0.5s 1s, color 0.2s;

		${props => props.isVisible === true && css`opacity: 1`}
	}

	&:hover i {
		color: ${Color.red};
	}

	&:hover ${Text} {
		text-decoration: underline;
	}
`


const QuickMenuIcons = ({isVisible}) => {
	return (
		<Container>
			{MenuData_MainContentsSection2.map((menu, index) => (
				<QuickMenu key={index} isVisible={isVisible}>
					<i className={"material-icons"}>{menu.icon}</i>
					<Text>{MenuData_MainContentsSection2[index].content}</Text>
				</QuickMenu>
			))}
		</Container>
	)
};

export default QuickMenuIcons;
