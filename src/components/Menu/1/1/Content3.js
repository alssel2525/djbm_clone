import styled from "styled-components";
import SubHeading from "../../common/SubHeading";
import SubBox from "../../common/SubBox";
import Color from "../../../../Color";
import map from "../../../../images/map.png"

const Container = styled.div`
	width: 100%;
	position: relative;
	box-sizing: border-box;

	ul {
		margin: 0;
		padding: 0;
		list-style: none;
		position: relative;
		display: block;

		> li {
			position: relative;
			display: block;
			margin: 0;
			padding: 0 0 1rem 1.2rem;
			font-size: 1rem;
			line-height: 1rem;

			::before {
				content: "menu";
				position: absolute;
				top: 0;
				left: 0;
				font-family: Material Icons, sans-serif;
				color: ${Color.blue};
			}

			h3 {
				height: 1rem;
				line-height: 1rem;
				font-size: 1rem;
				font-weight: 700;
			}

			// 3차 - 신규 & 추가
			> ul {
				margin: 0;
				padding: 0;

				> li {
					position: relative;
					display: block;
					margin: 0;
					padding: 0 0 0 1.2rem;
					font-size: 1rem;
					line-height: 1rem;

					::before {
						content: "";
						width: 5px;
						height: 5px;
						position: absolute;
						top: calc((1rem - 5px) * 0.5); // (line-height 1rem - height 5px) / 2
						left: 0;
						display: block;
						border-radius: 50%;
						background-color: ${Color.lightgrey};
					}

					h4 {
						height: 1rem;
						line-height: 1rem;
						font-size: 1rem;
						font-weight: 700;
					}
				}
			}
		}
	}

	.map {
		margin-top: 1rem;
		text-align: center;

		img {
			display: block;
			margin: 0 auto;
		}
	}
`;

const Content3 = () => {
	return (
		<Container>
			<article>
				<SubHeading>규제자유특구 지정현황</SubHeading>
				<SubBox>
					<ul>
						<li>
							<h3>1차 규제자유특구 (2019.8)</h3>
							(강원)디지털헬스케어, (대구)스마트웰니스, (전남)e-모빌리티, (충북)스마트안전, (경북)차세대 배터리 리사이클링, (부산)블록체인, (세종)자율주행
						</li>
						<li>
							<h3>2차 규제자유특구 (2019.11)</h3>
							2차 규제자유특구(2019.11) : (광주) 무인저속 특장차, (대전) 바이오메디컬, (울산) 수소그린모빌리티, (전북) 친환경자동차, (전남) 에너지 신산업,
							(경남) 무인선박, (제주) 전기차 충전서비스
						</li>
						<li>
							<h3>3차 규제자유특구 (2020.7)</h3>
							<ul>
								<li>
									<h4>신규</h4>
									부산(해양모빌리티), 대구(이동식 협동로봇), 울산(게놈서비스산업), 강원(액화수소산업), 충남(수소에너지 전환), 전북(탄소융복합산업),
									경북(산업용헴프)
								</li>
								<li>
									<h4>추가</h4>
									부산(블록체인), 대전(바이오메디컬)
								</li>
							</ul>
						</li>
					</ul>
				</SubBox>
			</article>
			<article className={"map"}>
				<SubBox>
					<img src={map} alt={"map"}/>
				</SubBox>
			</article>
		</Container>
	)
};

export default Content3;
