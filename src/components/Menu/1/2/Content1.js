import styled from "styled-components";
import SubHeading from "../../common/SubHeading";
import SubBox from "../../common/SubBox";
import Color from "../../../../Color";

const Container = styled.div`
	ul {
		margin: 0;
		padding: 0;

		li {
			position: relative;
			display: block;
			margin: 0;
			padding: 0 0 0 1.2rem;
			font-size: 1rem;
			line-height: 1rem;
			text-align: left;
			vertical-align: top;
			box-sizing: border-box;

			::before {
				content: "";
				width: 5px;
				height: 5px;
				position: absolute;
				top: 0;
				left: 0;
				transform: translateY(0.5rem);
				display: block;
				border-radius: 50%;
				background-color: ${Color.lightgrey};
			}

			h3 {
				height: 1rem;
				width: 6rem;
				margin: 0;
				line-height: 1rem;
				font-size: 1rem;
				font-weight: 700;
				text-align: left;
				display: inline-block;
			}

			&:not(:first-child) {
				h3 {
					margin-top: 1rem;
				}

				::before {
					top: 1rem;
				}
			}
		}
	}
`;

const Content1 = () => {
	return (
		<Container>
			<SubHeading>대전바이오메디컬 규제자유특구 개요</SubHeading>
			<SubBox>
				<ul>
					<li>
						<h3>목적</h3>
						바이오산업 육성을 통해 일자리 창출 및 지역경제 활성화
					</li>
					<li>
						<h3>지정기간</h3>
						2019. 12. 6. ~ 2023. 12. 5.(4년)
					</li>
					<li>
						<h3>특구사업자</h3>
						대전테크노파크, 충남대병원, 대전을지대병원, 건양대병원, 기업(20개사) 등
					</li>
					<li>
						<h3>실증내용</h3>
						<div style={{display: "inline-block", verticalAlign: "top"}}>
							<span style={{display: "inline-block", marginTop: "1rem"}}>- 기업전용 인체유래물은행 공동운영 실증(4개기관)</span><br/>
							<span style={{display: "inline-block", marginTop: "1rem"}}>- 체외진단기기 신의료기술평가 유예 절차 간소화 실증(4개 기관, 10개사)</span><br/>
							<span style={{display: "inline-block", marginTop: "1rem"}}>- 병원체자원 공용연구시설 구축·운영으로 백신·치료제 조기 상용화 실증(4개기관, 12개사)</span>
						</div>
					</li>
				</ul>
			</SubBox>
		</Container>
	)
};

export default Content1;
