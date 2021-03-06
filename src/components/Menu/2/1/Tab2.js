import styled from "styled-components";
import Color from "../../../../Color";
import {Link} from "react-router-dom";

const Container = styled.div`
	padding: 40px;
	display: ${props => props.isActive === true ? "block" : "none"};
	background: ${Color.lightGreyBlue};

	p.title {
		font-size: 1.5rem;
		color: ${Color.blue};
		text-align: center;
		font-weight: bold;
	}
`;

const Table = styled.table`
	width: 100%;
	padding: 0 40px;
	border-spacing: 1rem;
	text-align: center;
	box-sizing: border-box;

	thead {
		th:first-child {
			width: 40%;
		}
		
		> tr > th {
			padding: 1rem 0;
			font-size: 1.5rem;
			font-weight: 500;
			color: ${Color.white};
			box-sizing: border-box;

			:nth-child(1) {
				background: ${Color.greyBlue};
			}

			:nth-child(2) {
				background: ${Color.blueLighter};
			}

			:nth-child(3) {
				background: ${Color.blue};
			}
		}
	}

	tbody {
		counter-reset: index;

		> tr {
			counter-increment: index;
			line-height: 2rem;

			> td {
				height: 100px;
				padding: 40px;
				background: ${Color.white};
				border: 1px solid ${Color.lightgrey};
				position: relative;
				box-sizing: border-box;

				// 운영절차
				:nth-child(1) {
					font-weight: 500;

					::before {
						content: counter(index, decimal-leading-zero);
						width: 2.5rem;
						height: 2.5rem;
						line-height: 2.5rem;
						position: absolute;
						top: 50%;
						left: 0;
						transform: translate(-50%, -50%);
						border: 7px solid ${Color.lightGreyBlue};
						border-radius: 50%;
						background: ${Color.greyBlue};
						color: ${Color.white};
						font-family: 'Sora', sans-serif;
						font-weight: 600;
					}

					// 2. 'IRB 심의'의 표
					.review_grid {
						margin-top: 1rem;
						display: grid;
						grid-gap: 5px;
						font-weight: 400;
						line-height: 1.5rem;

						div {
							padding: 1rem;
							display: flex;
							flex-direction: column;
							justify-content: center;
							align-items: center;
							border: 1px solid ${Color.lightgrey};
							border-radius: 10px;

							:nth-child(1) {
								grid-row: 1 / 3;
								grid-column: 1 / 2;
							}

							:nth-child(2) {
								grid-row: 1 / 2;
								grid-column: 2 / 3;
							}

							:nth-child(3) {
								grid-row: 2 / 3;
								grid-column: 2 / 3;
								background: ${Color.blueLighter}30;
								color: ${Color.red};
							}
						}
					}
				}

				// 추진주체
				:nth-child(2) {
					div.arrow-container {
						span {
							position: relative;

							:not(:first-child) {
								margin-left: 2rem;

								::before {
									content: "play_arrow";
									font-family: Material Icons, sans-serif;
									width: 1.4rem;
									height: 1.4rem;
									line-height: 1.4rem;
									font-size: 1rem;
									position: absolute;
									left: -1rem;
									top: 50%;
									transform: translate(-50%, -50%);
									border-radius: 50%;
									text-align: center;
									vertical-align: middle;
									background: ${Color.blue};
									color: ${Color.white};
								}
							}
						}
					}
				}

				// 주요내용
				:nth-child(3) {
					text-align: left;

					a {
						padding-left: 2.5rem;
						display: block;
						position: relative;
						text-decoration: underline;
						cursor: pointer;
						color: #000000;

						div {
							::before {
								content: "description";
								font-family: Material Icons, sans-serif;
								width: 1.5rem;
								height: 1.5rem;
								position: absolute;
								left: 0;
								top: 50%;
								transform: translateY(-50%);
								display: flex;
								flex-direction: column;
								justify-content: center;
								align-items: center;
								border: 1px solid ${Color.lightgrey};
								border-radius: 3px;
								color: ${Color.blue};
							}
						}
					}
				}
			}
		}
	}
`

const Tab2 = ({isActive}) => {
	return (
		<Container isActive={isActive}>
			<p className={"title"}>분양신청 방법 및 절차</p>
			<Table>
				<thead>
					<tr>
						<th>운영절차</th>
						<th>추진주체</th>
						<th>주요내용</th>
					</tr>
				</thead>
				<tbody>
					<tr>
						<td>기업 맞춤형 컨설팅</td>
						<td>인체유래물은행(대전TP)</td>
						<td>- 수요 검체 조건 등에 대한 세부 논의</td>
					</tr>
					<tr>
						<td>
							<span>IRB 심의</span>
							<div className={"review_grid"}>
								<div>IRB 심의 전<br/>진행 사항</div>
								<div>IRB* 협약**</div>
								<div>보건복지부에 등록</div>
							</div>
						</td>
						<td>
							<span>공동운영기관IRB(충남대 IRB)</span>
							<div className={"arrow-container"}>
								<span>기업</span>
								<span>충남대 IRB</span>
							</div>
							<div className={"arrow-container"}>
								<span>기업</span>
								<span>보건복지부</span>
							</div>
						</td>
						<td>
							- 연구계획 심의<br/>
							- 공동운영기관IRB와 기업간 1:1 협약(서면)<br/>
							- 협약 후 보건복지부에 협약 IRB 등록(약 한달 소요)
						</td>
					</tr>
					<tr>
						<td>분양신청</td>
						<td>
							<div className={"arrow-container"}>
								<span>기업</span>
								<span>대전TP</span>
							</div>
						</td>
						<td>
							<span>- (운영규정 별지 제2호~제5호 서식)</span>
							<Link to={"/dummy/dummy.txt"} target={"_blank"} download>
								<div>분양신청서</div>
							</Link>
							<Link to={"/dummy/dummy.txt"} target={"_blank"} download>
								<div>임상ㆍ역학정보요청서</div>
							</Link>
							<Link to={"/dummy/dummy.txt"} target={"_blank"} download>
								<div>이용계획서</div>
							</Link>
							<Link to={"/dummy/dummy.txt"} target={"_blank"} download>
								<div>서약서</div>
							</Link>
							<Link to={"/dummy/dummy.txt"} target={"_blank"} download>
								<div>개인정보 수집ㆍ이용동의서</div>
							</Link>
						</td>
					</tr>
					<tr>
						<td>
							분양심의<br/>
							(신청일로부터 14일 이내)
						</td>
						<td>
							대전인체유래물은행<br/>
							분양심의위원회
						</td>
						<td>- 안건에 따라 정기/임시/신속심의 진행</td>
					</tr>
					<tr>
						<td>
							분양심의 결과통보<br/>
							(심의일로부터 14일 이내)
						</td>
						<td>
							<div className={"arrow-container"}>
								<span>대전TP</span>
								<span>기업</span>
							</div>
							<div className={"arrow-container"}>
								<span>대전TP</span>
								<span>은행</span>
							</div>
						</td>
						<td>- 승인/시정승인/보완 후 재심의/반려</td>
					</tr>
					<tr>
						<td>
							분양이전협약 체결<br/>
							(통보일로부터 10일 이내)
						</td>
						<td>
							<div className={"arrow-container"}>
								<span>은행</span>
								<span>기업</span>
							</div>
						</td>
						<td>
							- 분양 대상 은행과 기업간 분양이전 협약 체결(별지 10호 서식)
							<Link to={"/dummy/dummy.txt"} target={"_blank"} download>
								<div>분양이전협약서</div>
							</Link>
						</td>
					</tr>
					<tr>
						<td>
							인체유래물 등의 분양<br/>
							(협약일로부터 15일 이내)
						</td>
						<td>
							<div className={"arrow-container"}>
								<span>은행</span>
								<span>기업</span>
							</div>
						</td>
						<td>- 분양신청자(기업)에 직접 이전(일정 조정)</td>
					</tr>
					<tr>
						<td>
							이의신청 등<br/>
							(수령한 날로부터 15일 이내)
						</td>
						<td>
							<div className={"arrow-container"}>
								<span>기업</span>
								<span>은행</span>
							</div>
						</td>
						<td>
							- 손상, 용량미달 등 품질 이상 및 임상・역학 정보 불일치 등 활용이 어려운 경우
							<Link to={"/dummy/dummy.txt"} target={"_blank"} download>
								<div>분양(심의)이의신청서</div>
							</Link>
						</td>
					</tr>
					<tr>
						<td>
							사후조치<br/>
							(연구결과 통보)
						</td>
						<td>
							<div className={"arrow-container"}>
								<span>기업</span>
								<span>대전TP</span>
							</div>
						</td>
						<td>- 인체유래물 활용보고서 및 폐기확인서 제출</td>
					</tr>
				</tbody>
			</Table>
		</Container>
	)
};

export default Tab2;
