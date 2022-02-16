import styled from "styled-components";
import SubHeading from "../../common/SubHeading";
import icon1 from "../../../../images/icon1.png";
import icon2 from "../../../../images/icon2.png";
import icon3 from "../../../../images/icon3.png";
import Color from "../../../../Color";
import SubBox from "../../common/SubBox";

const Container = styled.div`
	width: 100%;
	height: 100vh;
	margin-top: 5rem;
	display: ${props => props.isActive === true ? "block" : "none"};
	position: relative;

	.box-container {
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		align-items: stretch;
	}

	.box-container2 {
		font-weight: 500;

		ul {
			> li {
				line-height: 1.5;
				font-size: 1.1rem;
				padding-left: 1.1rem;
				position: relative;

				::before {
					content: "menu";
					position: absolute;
					left: 0;
					top: 50%;
					transform: translateY(-50%);
					font-family: Material Icons, sans-serif;
					font-size: 1rem;
					color: ${Color.blue};
				}
			}

			> ul > li {
				line-height: 1.5;
				font-size: 1.1rem;
				padding-left: 1.1rem;
				margin-top: 1rem;
				position: relative;

				> span {
					font-size: 1rem;
					color: #555555;
					font-weight: 400;
				}

				::before {
					content: "";
					position: absolute;
					width: 5px;
					height: 5px;
					background: #C7C7C7;
					top: 1rem;
					left: 5px;
					transform: translateY(-50%);
					border-radius: 50%;
				}
			}
		}
	}
`;

const Box = styled.div`
	width: 100%;
	padding: 1.5rem;
	display: flex;
	flex-direction: column;
	position: relative;
	border: 1px solid ${Color.lightgrey};
	box-sizing: border-box;

	p {
		width: 5rem;
		height: 5rem;
		margin: 0;
		padding: 0;
		position: absolute;
		top: 1.5rem;
		right: 1.5rem;
		border-radius: 50%;

		img {
			position: absolute;
			top: 50%;
			left: 50%;
			transform: translate(-50%, -50%);
		}
	}

	.title {
		font-size: 1.5rem;
		color: ${Color.black};
		font-weight: 700;
		display: block;

		&-eng {
			margin-top: 5px;
			font-size: 1rem;
			color: ${Color.grey}a0;
			display: block;
			font-family: "Sora", sans-serif;
			letter-spacing: -0.48px;
			font-weight: 300;
		}
	}

	> span {
		padding-top: 2.5rem;
		display: block;
		word-break: keep-all;
		flex: 1 0 auto;

		> ul {
			margin: 0;
			padding: 0;
			list-style: none;

			> li {
				margin: 0;
				padding: 0;
				box-sizing: border-box;

				em {
					width: 3rem;
					height: 2rem;
					line-height: 2rem;
					display: inline-block;
					font-style: normal;
					text-align: center;
					vertical-align: top;
					border-radius: 1.5rem;
					color: ${Color.white};
					background: ${Color.greyBlue};
				}

				> span {
					width: calc(100% - 3rem);
					display: inline-block;
					padding-left: 1rem;
					box-sizing: border-box;
				}

				:not(:first-child) {
					margin-top: 1rem;
				}
			}
		}
	}

	:not(:first-child) {
		margin-left: 20px;
	}
`

const Tab1 = ({isActive}) => {
	return (
		<Container isActive={isActive}>
			<div>
				<SubHeading>사업내용</SubHeading>
				<div className={"box-container"}>
					<Box>
						<p style={{background: `${Color.greyBlue}`}}><img src={icon1} alt={"icon1"}/></p>
						<div className={"title"}>추진배경</div>
						<div className={"title-eng"}>Background</div>
						<span>대전광역시는 국내 최대 바이오 연구기관 및 기업 등이 밀집되어 있는 바이오 특화 지역임에도 불구하고
							인체 유래물 분양 및 활용에 있어서 각 기관별로 통일되지 못한 규정 등의 현실적인 규제에 묶여 바이오산업관련 연구를 위한 인적,
							물적 기본 인프라가 풍부함에도 불구 하고 바이오산업에 연계된 여러 기관별 연구 네트워크가 비활성화</span>
					</Box>
					<Box>
						<p style={{background: `${Color.blueLighter}`}}><img src={icon2} alt={"icon2"}/></p>
						<div className={"title"}>수행내용</div>
						<div className={"title-eng"}>Contents</div>
						<span>이에 대전광역시는 이를 극복하기 위하여 대전지역에서 인체유래물은행 운영 관련 허가를 받은 충남대병원,
							대전을지대병원, 건양대병원의 인체유래물은행의 공동 운영을 통해 특구사업자(기업)가 필요로 하는 검체를
							신속히 분양할 수 있도록 기반을 구축하며, 고품질의 검체를 신속하게 심의, 제공하는 원스톱 시스템 체계를 구축</span>
					</Box>
					<Box>
						<p style={{background: `${Color.blue}`}}><img src={icon3} alt={"icon3"}/></p>
						<div className={"title"}>수행기관</div>
						<div className={"title-eng"}>Institution</div>
						<span>
							<ul>
								<li>
									<em>병원</em>
									<span>충남대학교병원, 대전을지대학교병원, 건양대학교병원</span>
								</li>
								<li>
									<em>TP</em>
									<span>대전테크노파크</span>
								</li>
							</ul>
						</span>
					</Box>
				</div>
			</div>
			<div style={{marginTop: "70px"}}>
				<SubHeading>규제특례에 관한 사항</SubHeading>
				<p>인체유래물은행의 공동위원회 구성 및 위원회에서 인체유래물의 분양 심의․결정이 가능하도록 실증특례 부여</p>
				<p>※ 생명윤리 및 안전에 관한 법률 제43조 특례</p>
				<SubBox className={"box-container2"}>
					<ul>
						<li>(부대조건)</li>
						<ul>
							<li>
								(위원회 구성) 국립중앙인체자원은행 분양위원회 위원 구성 수준에 준하는 공동위원회 구성
								<br/>
								<span>※ 참고 「질병관리본부 국립중앙인체자원은행 운영·관리 규정」 제13조 제3항</span>
							</li>
							<li>
								(생명윤리법상 책임) 공동위원회의 생명윤리법상 인체유래물 제공 및 사용에 대한 의무 이행 책임 및 위반 시 부담하는 책임 명확화
							</li>
							<li>
								(개인정보 보호) 생명윤리법 등 관련 법률잉 보호하고자 하는 개인정보 관련 보호법의 보호
								<br/>
								<span>상기조건을 충족한 공동위원회 구성 및 운영규정에 대해 복지부가 승인할 것</span>
							</li>
						
						</ul>
					</ul>
				</SubBox>
			</div>
		</Container>
	)
};

export default Tab1;
