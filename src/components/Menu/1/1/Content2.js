import styled from "styled-components";
import SubHeading from "../../common/SubHeading";
import SubBox from "../../common/SubBox";

const Container = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	align-items: center;
	box-sizing: border-box;
	
	article {
		width: 100%;
	}

	article:not(:first-child) {
		margin-left: 40px;
	}
`;

const Content2 = () => {
	return (
		<Container>
			<article>
				<SubHeading>규제자유특구 지정</SubHeading>
				<SubBox>
					수도권을 제외한 시·도지사가 지역의 여건과 특성에 따라 지역혁신성장사업 또는 지역전략산업을 육성하기 위해 특구계획을 수립하고 규제자유특구 지정 신청
				</SubBox>
			</article>
			<article>
				<SubHeading>지정혜택</SubHeading>
				<SubBox>
					메뉴판식 규제특례와 규제혁신 3종 세트(규제샌드박스)등 혁신적인 규제특례가 적용되며, 지역혁신성장사업 등이 성공할 수 있도록 재정·세제·각종 부담금 감면 등도 지원
				</SubBox>
			</article>
		</Container>
	)
};

export default Content2;
