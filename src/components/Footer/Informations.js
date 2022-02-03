import styled from "styled-components";
import {Link} from "react-router-dom";
import Color from "../../Color";
import mediaQuery, {BREAKPOINT_MOBILE, BREAKPOINT_PC, BREAKPOINT_TABLET} from "../../hooks/mediaQuery";

const Container = styled.div`
	width: 70%;
	float: right;

	${mediaQuery(BREAKPOINT_MOBILE)} {
		width: 100%;
	}
`;

const Links = styled.div`
	height: 2rem;
	margin: 1rem 0 0;
	padding: 0;
	display: flex;
	flex-direction: row;
	border-bottom: 1px solid ${Color.grey};
	position: relative;
	font-weight: normal;
	box-sizing: border-box;

	a {
		font-size: 0.8rem;
		text-decoration: none;
		color: ${Color.lightgrey};


		position: relative;

		:not(:first-child) {
			margin-left: 1rem;
		}

		:not(:first-child)::before {
			content: "";
			width: 1px;
			height: 1rem;
			position: absolute;
			left: -0.5rem;
			top: 50%;
			transform: translateY(-50%);
			display: inline-block;
			background: ${Color.grey};
		}
	}


	// start pc
	${mediaQuery(BREAKPOINT_PC)} {
		justify-content: left;
		align-items: center;
	}

	// end pc

	// start tablet
	${mediaQuery(BREAKPOINT_TABLET)} {
		margin: 1rem auto;
		padding: 0 0 1rem;
		justify-content: center;
		align-items: center;
	}

	// end tablet
`

const Infos = styled.address`
	margin-top: 1rem;
	color: ${Color.grey};
	font-style: normal;
	font-size: 0.8rem;

	div {
		margin-top: 0.4rem;
	}

	${mediaQuery(BREAKPOINT_TABLET)} {
		text-align: center;
	}
`

const Informations = () => {
	return (
		<Container>
			<Links>
				<Link to={"/"}>사이트맵</Link>
				<Link to={"/"}>개인정보취급방침</Link>
				<Link to={"/"}>이메일 무단수집거부</Link>
			</Links>
			<Infos>
				<div>34054 대전광역시 유성구 유성대로 1662 대전바이오벤처타운 / T. 042-930-4719 / F. 042-930-4789</div>
				<div>COPYRIGHT ⓒ 중소벤처기업부 규제자유특구기획단. ALL RIGHTS RESERVED.</div>
			</Infos>
		</Container>
	)
};

export default Informations;
