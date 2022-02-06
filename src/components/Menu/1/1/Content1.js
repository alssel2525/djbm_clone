import styled from "styled-components";
import Color from "../../../../Color";
import before1 from "../../../../images/before1.png"
import djbm_bg from "../../../../images/djbm_bg.png"
import face1 from "../../../../images/face1.png";
import face2 from "../../../../images/face2.png";
import mediaQuery, {BREAKPOINT_TABLET} from "../../../../hooks/mediaQuery";

const Container = styled.div`
	width: 100%;
	position: relative;

	.title {
		display: block;
		padding-bottom: 10px;
		font-size: 1.3rem;
		color: ${Color.red};
		font-weight: 700;
	}

	.explain {
		width: 60%;
		display: block;
		color: ${Color.black};
		font-size: 1.7rem;
		word-break: keep-all;
	}

	.text {
		margin-top: 1.5rem;
		margin-bottom: 5rem;
		padding: 2rem 3rem;
		box-sizing: border-box;
		position: relative;
		display: block;

		strong {
			display: inline-block;
			font-size: 1.2rem;
			font-weight: 900;
			color: ${Color.black};
			vertical-align: middle;
			box-sizing: border-box;
		}

		span {
			width: 55%;
			margin-left: 2rem;
			display: inline-block;
			vertical-align: middle;
			color: #555555;
			font-size: 1.1rem;
			box-sizing: border-box;
			word-break: keep-all;
		}

		::before {
			content: "";
			width: 28px;
			height: 129px;
			position: absolute;
			top: 50%;
			left: 0;
			transform: translateY(-50%);
			background-image: url("${before1}");
		}

		::after {
			content: "";
			width: 28px;
			height: 129px;
			position: absolute;
			top: 50%;
			right: 0;
			transform: translateY(-50%) rotate(180deg);
			background-image: url("${before1}");
		}
	}

	// 현장목소리 & 규제실상
	article {
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		padding: 3rem 7rem;
		text-align: center;
		background: ${Color.lightGreyBlue};
		border: 1px solid ${Color.lightgrey};
		box-sizing: border-box;

		ul {
			width: 100%;
			margin: 0;
			padding: 0;
			position: relative;

			li {
				width: 100%;
				height: 50px;
				line-height: 50px;
				border-radius: 25px;
				margin-top: 1rem;
				position: relative;
				background: ${Color.white};
				text-decoration: none;
				list-style: none;
			}

			// 현장목소리
			:first-child {
				> li {
					border: 2px dashed ${Color.lightgrey};

					::before {
						content: "";
						width: 50px;
						height: 50px;
						position: absolute;
						left: 0;
						top: 50%;
						transform: translate(-50%, -50%);
						display: block;
						color: ${Color.grey};
						background: ${Color.white};
						border: 2px solid ${Color.blue}B0;
						border-radius: 50%;
					}

					:nth-child(even)::before {
						background-image: url(${face1});
						background-repeat: no-repeat;
						background-position: center;
					}

					:nth-child(odd)::before {
						background-image: url(${face2});
						background-repeat: no-repeat;
						background-position: center;
					}
				}
			}

			// 규제실상
			:not(:first-child) {
				margin-left: 5rem;

				> li {
					border: 2px solid ${Color.grey}70;
					font-weight: 700;

					::before {
						content: "arrow_right";
						position: absolute;
						left: -2.5rem;
						top: 50%;
						transform: translate(-50%, -50%);
						font-family: Material Icons, sans-serif;
						font-size: 2rem;
						color: ${Color.grey};
					}
				}

			}

		}

		.article-title {
			color: ${Color.blue};
			font-size: 1.5rem;
			padding-bottom: 1rem;
			font-weight: 700;
		}
	}

	::after {
		content: "";
		width: 425px;
		height: 353px;
		position: absolute;
		top: 0;
		right: 4rem;
		background-image: url("${djbm_bg}");
	}

	${mediaQuery(BREAKPOINT_TABLET)} {
		text-align: center;
		margin: 0 auto;

		.title {
			margin: 0 auto;
		}

		.explain {
			margin: 0 auto;
		}

		::after {
			display: none;
		}
	}
`;


const Content1 = () => {
	return (
		<Container>
			<div>
				<h2 className={"title"}>규제자유특구는</h2>
				<span className={"explain"}>
					‘규제자유특구 및 지역특화발전특구에 관한 규제특례법’에 따라서 수도권을 제외한&nbsp;
					<strong>광역자치단체에 혁신사업이나 전략산업을 육성</strong>
					하기 위하여 규제특례 등이 적용되는 구역
				</span>
			</div>
			<div className={"text"}>
				<strong>
					추진<br/>배경
				</strong>
				<span>
					신기술을 보유했으나 그간 각종 규제로 인하여 사업 기회에 제약을 받았던 기업들이 규제로부터 자유롭게 신사업을 추진할 수 있도록 한 한국형 규제샌드박스로, 규제자유특구를 통해 신기술을 개발·검증하거나 신제품 출시가 가능하도록 제도화
				</span>
			</div>
			<article>
				<ul>
					<div className={"article-title"}>현장목소리</div>
					<li>한번 테스트라도!</li>
					<li>임시로 허가를!</li>
					<li>되는건지 안 되는 건지?</li>
					<li>규제망을 피할 수 없어!</li>
				</ul>
				<ul>
					<div className={"article-title"}>규제실상</div>
					<li>규정이 애매해!</li>
					<li>법령상 안돼!</li>
					<li>규정이 없어!</li>
					<li>촘촘한 규제!</li>
				</ul>
			</article>
		</Container>
	)
};

export default Content1;
