import styled from "styled-components";
import Color from "../../../../Color";
import mediaQuery, {BREAKPOINT_TABLET} from "../../../../hooks/mediaQuery";

const Container = styled.div`
    width: 400px;
	height: 16rem;
	padding: 0 1.5rem;
	display: flex;
	flex-direction: column;
	justify-content: space-around;
	border: ${Color.grey} 1px solid;
	box-sizing: border-box;
	
	${mediaQuery(BREAKPOINT_TABLET)} {
		width: 60%;
	}
	
	${mediaQuery(BREAKPOINT_TABLET)} {
		width: 100%;
		border: none;
	}
`;

const Content = styled.div`
	position: relative;
	display: flex;
	flex-direction: row;
	align-items: center;
	justify-content: left;
	
	.icon {
		width: 4rem;
		min-width: 4rem;
		height: 4rem;
		position: relative;
		background: ${Color.red};
		
		i {
			width: 2rem;
			height: 2rem;
			position: absolute;
			top: 50%;
			left: 50%;
			transform: translate(-50%, -50%);
			font-size: 2rem;
			color: ${Color.white};
		}
	}
	
	.text {
		margin-left: 1rem;
		margin-right: 1rem;
		color: ${Color.grey};
		font-size: 0.9rem;
		word-break: keep-all;
		
		strong {
			color: ${Color.black};
			font-size: 1rem;
		}
	}
	
	::after {
		content: "keyboard_arrow_right";
		font-family: Material Icons, sans-serif;
		position: absolute;
		font-size: 1.5rem;
		top: 0;
		right: 0;
	}
	
	:not(:first-child) {
		::before {
			content: "";
			width: 100%;
			height: 0;
			position: absolute;
			top: -50%;
			border-top: 2px dotted ${Color.lightgrey};
		}
	}
`

const BoxQna = () => {
	return (
		<Container>
			<Content>
				<div className={"icon"}><i className={"material-icons"}>help_outline</i></div>
				<div className={"text"}>
					<strong>Q&A</strong><br/>
					대전 바이오메디컬 규제자유특구에 궁금하신 점을 물어보세요
				</div>
			</Content>
			<Content>
				<div className={"icon"}><i className={"material-icons"}>folder_copy</i></div>
				<div className={"text"}>
					<strong>자료실</strong><br/>
					대전 바이오메디컬 규제자유특구의 자료게시판 입니다
				</div>
			</Content>
		</Container>
	)
};

export default BoxQna;
