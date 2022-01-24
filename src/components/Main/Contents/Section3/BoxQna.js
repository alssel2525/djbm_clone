import styled from "styled-components";
import Color from "../../../../Color";

const Container = styled.div`
    width: 400px;
	height: 16rem;
	padding: 0 1.5rem;
	display: flex;
	flex-direction: column;
	justify-content: space-around;
	border: ${Color.grey} 1px solid;
	box-sizing: border-box;
`;

const Content = styled.div`
	position: relative;
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	
	.icon {
		width: 4rem;
		height: 4rem;
		position: relative;
		background: ${Color.red};
		
		i {
			width: 3rem;
			height: 3rem;
			position: absolute;
			top: 50%;
			left: 50%;
			transform: translate(-50%, -50%);
			font-size: 3rem;
			color: ${Color.white};
		}
	}
	
	.text {
		width: 70%;
		color: ${Color.grey};
		font-size: 0.8rem;
		
		strong {
			color: ${Color.black};
			font-size: 1rem;
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