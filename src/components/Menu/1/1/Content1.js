import styled from "styled-components";
import Color from "../../../../Color";
import before1 from "../../../../images/before1.png"
import djbm_bg from "../../../../images/djbm_bg.png"
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


	::after {
		content: "";
		width: 425px;
		height: 353px;
		position: absolute;
		top: 50%;
		right: 4rem;
		transform: translateY(-50%);
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
	console.log(before1)
	return (
		<Container>
			<div>
				<span className={"title"}>규제자유특구는</span>
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
		</Container>
	)
};

export default Content1;
