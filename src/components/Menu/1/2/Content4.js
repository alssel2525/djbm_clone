import styled from "styled-components";
import SubHeading from "../../common/SubHeading";
import sub_tit_bg1 from "../../../../images/sub-tit-bg1.png";
import Color from "../../../../Color";

const Container = styled.div`
	.box {
		width: 100%;
		height: 100%;
		padding: 2rem;
		background: ${Color.lightGreyBlue};
		box-sizing: border-box;

		article {
			width: 100%;
			display: flex;
			flex-direction: row;
		}

		.sub-title {
			width: 40px;
			height: 437px;
			display: flex;
			flex-direction: column;
			justify-content: center;
			position: relative;
			text-align: center;
			vertical-align: middle;

			color: #fff;
			background: url(${sub_tit_bg1}) no-repeat center;
			background-size: contain;

			span {
				margin: auto;
				text-align: center;
				vertical-align: middle;
				display: table-cell;
				font-weight: 700;
			}
		}

		.sub-diagram {
			width: 100%;
			padding-left: 1rem;
			display: flex;
			flex-direction: column;
			box-sizing: border-box;

			> div {
				box-sizing: border-box;
				text-align: center;
			}

			.menu1-2--content4--typo1 {
				display: flex;
				flex-direction: row;

				div {
					height: 35px;
					line-height: 35px;
					font-weight: 500;
					background: ${Color.greyBlue};
					color: ${Color.white};

					:nth-child(1) {
						flex: 2;
					}

					:nth-child(2) {
						margin-left: 1rem;
						flex: 1;
					}
				}
			}

			.menu1-2--content4--typo2 {
				margin-top: 1rem;
				display: flex;
				flex-direction: row;

				div {
					height: 70px;
					display: flex;
					flex-direction: column;
					justify-content: center;
					border: 2px dashed ${Color.greyBlue};
					border-radius: 10px;
					background: ${Color.white};
					color: ${Color.black};

					:nth-child(1) {
						flex: 2;
					}

					:nth-child(2) {
						margin-left: 1rem;
						flex: 1;
					}

					span {
						:nth-child(1) {
							font-weight: 700;
						}
					}
				}
			}

			.menu1-2--content4--typo3 {
				width: 100%;
				margin-top: 1rem;
				display: flex;
				flex-direction: row;
				box-sizing: border-box;

				&--box {
					height: 240px;
					padding: 5px;
					display: flex;
					flex-direction: column;
					justify-content: space-between;
					position: relative;
					background: ${Color.white};
					border: 1px solid ${Color.lightgrey};
					box-sizing: border-box;

					:not(:first-child) {
						margin-left: 1rem;
					}

					&--text {
						width: 100%;
						padding: 10px;
						text-align: left;
						box-sizing: border-box;

						div {
							padding-left: 10px;
							position: relative;
							box-sizing: border-box;
							white-space: nowrap;

							::before {
								content: "";
								width: 5px;
								height: 5px;
								position: absolute;
								top: 50%;
								left: 0;
								transform: translateY(-50%);
								border-radius: 50%;
								background: ${Color.grey};
							}
						}
					}

					&--title-container {
						width: 100%;
						height: 60px;
						align-self: center;
						display: flex;
						flex-direction: row;
						justify-content: center;
						align-items: center;
						position: relative;
						box-sizing: border-box;

						.title {
							width: 100%;
							height: 100%;
							max-height: 100%;
							padding: 10px;
							display: flex;
							justify-content: center;
							align-items: center;
							background: ${Color.lightgrey}a0;
							border: 1px solid ${Color.lightgrey};
							word-break: keep-all;
							box-sizing: border-box;

							:not(:first-child) {
								margin-left: 5px;
							}
						}
					}

					&--bubble {
						width: 100%;
						height: 50px;
						display: flex;
						justify-content: center;
						align-items: center;
						position: absolute;
						bottom: -70px;
						left: 50%;
						transform: translateX(-50%);
						color: ${Color.white};
						background: ${Color.blueLighter};
						border-radius: 5px;
						box-sizing: border-box;

						::before {
							content: "";
							width: 10px;
							height: 10px;
							position: absolute;
							top: 0;
							left: 50%;
							transform: translate(-50%, -50%) rotate(45deg);
							background: ${Color.blueLighter};
						}
					}
				}
			}
		}
	}
`;

const Content4 = () => {
	return (
		<Container>
			<SubHeading>대전 바이오메디컬특구 발전 방향</SubHeading>
			<div className={"box"}>
				<article>
					<div className={"sub-title"}><span>검<br/>체<br/>확<br/>보<br/>애<br/>로<br/>(As-<br/>is)</span></div>
					<div className={"sub-diagram"}>
						<div className={"menu1-2--content4--typo1"}>
							<div>검체확보의 어려움</div>
							<div>판로개척의 어려움</div>
						</div>
						<div className={"menu1-2--content4--typo2"}>
							<div>
								<span>다양한 종류의 검체필요</span>
								<span>개별 연구자 / 병원과의 공동연구 / 국립인체자원은행 활용 / (연구목적한정)</span>
							</div>
							<div>
								<span>신의료기술평가</span>
								<span>선진입 후평가 / 평가복잡 / 감염병 시범사업</span>
							</div>
						</div>
						<div className={"menu1-2--content4--typo3"}>
							<div className={"menu1-2--content4--typo3--box"}>
								<div className={"menu1-2--content4--typo3--box--text"}>
									<div>기업 자체 아이디어 및 제품 설계</div>
									<div>정부 - 지자체 과제 활용</div>
									<div>출연연 - 기업 공동 기초 연구 등</div>
								</div>
								<div className={"menu1-2--content4--typo3--box--title-container"}>
									<div className={"title"}>
										아이디어 및 제품 설계
									</div>
								</div>
								<div className={"menu1-2--content4--typo3--box--bubble"}><span>기초연구</span></div>
							</div>
							<div className={"menu1-2--content4--typo3--box"}>
								<div className={"menu1-2--content4--typo3--box--text"}>
									<div>내부연구용으로 사용</div>
									<div>기업 요구 검체 X</div>
									<div>高퀄리티 목적 검체 X</div>
									<div>많은 시간 소요</div>
								</div>
								<div className={"menu1-2--content4--typo3--box--title-container"}>
									<div className={"title"}>임상적 성능 및 시제품 제작</div>
									<div className={"title"}>임상적 유효성 검증</div>
								</div>
								<div className={"menu1-2--content4--typo3--box--bubble"}><span>제품화 연구</span></div>
							</div>
							<div className={"menu1-2--content4--typo3--box"}>
								<div className={"menu1-2--content4--typo3--box--text"}/>
								<div className={"menu1-2--content4--typo3--box--title-container"}>
									<div className={"title"}>임상시험</div>
									<div className={"title"}>식약처 허가</div>
									<div className={"title"}>신의료기술 인증</div>
								</div>
								<div className={"menu1-2--content4--typo3--box--bubble"}><span>인허가</span></div>
							</div>
							<div className={"menu1-2--content4--typo3--box"}>
								<div className={"menu1-2--content4--typo3--box--text"}>
									<div>많은 시간 소요</div>
									<div>임상문헌 불가피</div>
									<div>병원 협력 불가</div>
									<div>판매 어려움</div>
									<div>감염병 시범사업 실적 X</div>
									<div>체외진단기기 확대 범령 X</div>
								</div>
								<div className={"menu1-2--content4--typo3--box--title-container"}>
									<div className={"title"}>유용성 검증</div>
									<div className={"title"}>마케팅 임상</div>
								</div>
								<div className={"menu1-2--content4--typo3--box--bubble"}><span>판매 및 마케팅 임상</span></div>
							</div>
						</div>
					</div>
				</article>
			</div>
			<div className={"box"}>
				<article>
				
				</article>
			</div>
		</Container>
	)
};

export default Content4;
