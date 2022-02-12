import styled from "styled-components";
import SubHeading from "../../common/SubHeading";
import Color from "../../../../Color";
import SubTable from "../../common/SubTable";

const Container = styled.div`
	width: 1280px;
	max-width: 100%;
`;

const Box = styled.div`
	position: relative;
	padding: 7rem 5rem;
	display: flex;
	flex-direction: row;
	justify-content: center;
	align-items: center;
	background: ${Color.lightGreyBlue};

	.background {
		position: absolute;
		top: 2rem;
		left: 50%;
		transform: translateX(-50%);
		font-size: 5rem;
		line-height: 5rem;
		color: ${Color.lightgrey};
		opacity: 0.15;
		font-family: Sora, sans-serif;
	}

	article {
		width: 100%;
		position: relative;
		text-align: center;
		vertical-align: middle;
		background: ${Color.white};
		border-radius: 5px;

		div {
			width: 85px;
			height: 85px;
			position: absolute;
			top: 0;
			left: 50%;
			transform: translate(-50%, -50%);
			border-radius: 50%;
			background: ${Color.white};

			img {
				width: 80px;
				height: 80px;
				position: absolute;
				top: 50%;
				left: 50%;
				transform: translate(-50%, -50%);
			}
		}

		span {
			display: block;
			margin-top: calc(42.5px + 1rem);
			margin-bottom: 2rem;
			font-weight: 500;
			font-size: 1.2rem;
		}

		:not(:nth-of-type(1)) {
			margin-left: 2rem;
		}

		:nth-of-type(1) {
			border: 2px solid #607db5;

			div {
				border: 3px solid #607db5;
			}
		}

		:nth-of-type(2) {
			border: 2px solid #72869B;

			div {
				border: 3px solid #BAB5B2;
			}
		}

		:nth-of-type(3) {
			border: 2px solid #B70023;

			div {
				border: 3px solid #684949;
			}
		}
	}
`

const Content3 = () => {
	return (
		<Container>
			<SubHeading>규제자유특구 지정 현황</SubHeading>
			<Box>
				<strong className={"background"}>BIO MEDICAL</strong>
				<article>
					<div><img src={"https://www.djbm.or.kr/main/images/korean/sub/sub1-2-1.png"} alt={""}/></div>
					<span>
						기업전용 인체유래물은행<br/>
						공동운영 실증
					</span>
				</article>
				<article>
					<div><img src={"https://www.djbm.or.kr/main/images/korean/sub/sub1-2-2.png"} alt={""}/></div>
					<span>
						체외진단기기의 신의료기술<br/>
						평가 유예 절차 간소화 실증
					</span>
				</article>
				<article>
					<div><img src={"https://www.djbm.or.kr/main/images/korean/sub/sub1-2-3.png"} alt={""}/></div>
					<span>
						병원체자원 공동연구시설<br/>
						구축·운영으로 백신·치료제 조기 상용화
					</span>
				</article>
			</Box>
			<SubTable>
				<thead>
					<tr>
						<th>사업명</th>
						<th>위치</th>
						<th>면적(㎡)</th>
						<th>비고<br/>(특구사업자)</th>
					</tr>
				</thead>
				<tbody>
					<tr>
						<td rowSpan={23}>바디오<br/>메디컬사업</td>
						<td>대전광역시 대덕구 문평서로 8-11</td>
						<td rowSpan={2}>12,673.4</td>
						<td>바이오니아</td>
					</tr>
					<tr>
						<td>대전광역시 대덕구 문평서로 8-11</td>
						<td>써나젠테라퓨틱스</td>
					</tr>
					<tr>
						<td>대전광역시 유성구 테크노1로 11-3</td>
						<td rowSpan={2}>8,025.0</td>
						<td>시선바이오머티리얼스</td>
					</tr>
					<tr>
						<td>대전광역시 유성구 테크노1로 11-3</td>
						<td>이앤에스헬스케어</td>
					</tr>
					<tr>
						<td>대전광역시 유성구 테크노2로 187</td>
						<td rowSpan={2}>365.0</td>
						<td>수젠텍</td>
					</tr>
					<tr>
						<td>대전광역시 유성구 테크노2로 187</td>
						<td>진켐</td>
					</tr>
					<tr>
						<td>대전광역시 유성구 과학로 125</td>
						<td rowSpan={3}>67,526.9</td>
						<td>싸이토딕스</td>
					</tr>
					<tr>
						<td>대전광역시 유성구 과학로 125</td>
						<td>레보스케치</td>
					</tr>
					<tr>
						<td>대전광역시 유성구 과학로 125</td>
						<td>바이오오케스트라</td>
					</tr>
					<tr>
						<td>대전광역시 유성구 테크노10로54</td>
						<td>5,733.6</td>
						<td>파나진</td>
					</tr>
					<tr>
						<td>대전광역시 유성구 테크노로5로 43-10</td>
						<td>3,899.2</td>
						<td>솔젠트</td>
					</tr>
					<tr>
						<td>대전광역시 유성구 테크노3로 65</td>
						<td>17,540.7</td>
						<td>안지오랩</td>
					</tr>
					<tr>
						<td>대전광역시 유성구 유성대로 1476-37</td>
						<td>7,341.9</td>
						<td>중앙백신연구소</td>
					</tr>
					<tr>
						<td>대전광역시 유성구 유성대로1628번길 62</td>
						<td>5,654.6</td>
						<td>알테오젠</td>
					</tr>
					<tr>
						<td>대전광역시 유성구 테크노4로 17</td>
						<td>25,000.0</td>
						<td>와이바이오로직스</td>
					</tr>
					<tr>
						<td>대전광역시 유성구 유성대로 1662</td>
						<td>대전테크노파크 내 입주 (면적포함)</td>
						<td>딥바이오</td>
					</tr>
					<tr>
						<td>대전광역시 유성구 테크노2로 200-9</td>
						<td>3,767.3</td>
						<td>진시스템</td>
					</tr>
					<tr>
						<td>대전광역시 유성구 유성대로 1662</td>
						<td rowSpan={2}>대전테크노파크 내 입주 (면적포함)</td>
						<td>프로테옴텍</td>
					</tr>
					<tr>
						<td>대전광역시 유성구 유성대로 1662</td>
						<td>포스백스</td>
					</tr>
					<tr>
						<td>대전광역시 중구 문화로 282</td>
						<td>59,442.0</td>
						<td>충남대학교병원</td>
					</tr>
					<tr>
						<td>대전광역시 서구 둔산서로 95</td>
						<td>21,099.1</td>
						<td>대전을지대학교병원</td>
					</tr>
					<tr>
						<td>대전광역시 서구 관저동로 158</td>
						<td>71,435.0</td>
						<td>건양대학교병원</td>
					</tr>
					<tr>
						<td>대전광역시 유성구 테크노9로 35 외</td>
						<td>63,175.0</td>
						<td>대전테크노파크</td>
					</tr>
					<tr>
						<td colSpan={2}>합계</td>
						<td>461,453.8</td>
					</tr>
				</tbody>
			</SubTable>
		</Container>
	)
};

export default Content3;
