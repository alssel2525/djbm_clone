import styled from "styled-components";
import SubHeading from "../../common/SubHeading";
import icon1 from "../../../../images/icon1.png";
import icon2 from "../../../../images/icon2.png";
import icon3 from "../../../../images/icon3.png";
import Color from "../../../../Color";

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
			<>
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
			</>
		</Container>
	)
};

export default Tab1;
