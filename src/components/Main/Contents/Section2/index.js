import styled from "styled-components";
import QuickMenuIcons from "./QuickMenuIcons";
import Color from "../../../../Color";

const Container = styled.div`
	width: 100%;
	padding: 4rem 0;
	box-sizing: border-box;

	.__1280 {
		margin: 0 auto;
		width: 1280px;
		display: flex;
		flex-direction: row;
		justify-content: space-between;
	}
	
	strong {
		font-size: 2rem;
	}
	
	color: ${Color.black};
`;

const Section2 = () => {
	return (
		<Container>
			<div className={"__1280"}>
				<div>
					<strong>Quick Menu</strong><br/><br/>
					대전 바이오메디컬<br/>
					규제자유특구 빠른 메뉴 서비스
				</div>
				<QuickMenuIcons/>
			</div>
		</Container>
	)
};

export default Section2;