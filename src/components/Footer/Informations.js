import styled from "styled-components";
import {Link} from "react-router-dom";
import Color from "../../Color";

const Container = styled.div`
	width: 70%;
	float: right;
`;

const Links = styled.ul`
	height: 2rem;
	list-style: none;
	margin: 1rem 0 0;
	padding: 0;
	border-bottom: 1px solid ${Color.grey};

	li {
		position: relative;
		float: left;
		font-weight: normal;
		margin: 0;
		padding: 0;
		box-sizing: border-box;

		:is(:not(:first-child)) {
			margin-left: 1rem;
		}

		:is(:not(:first-child))::before {
			content: "";
			width: 1px;
			height: 1rem;
			position: absolute;
			left: -0.5rem;
			top: 50%;
			transform: translateY(-50%);
			background: ${Color.grey};
		}
		
		a {
			font-size: 0.8rem;
			text-decoration: none;
			color: inherit;
		}
	}
`

const Infos = styled.address`
	margin-top: 1rem;
	color: ${Color.grey};
	font-style: normal;
	font-size: 0.8rem;
	
	div {
		margin-top: 0.4rem;
	}
`

const Informations = () => {
	return (
		<Container>
			<Links>
				<li><Link to={"/"}>사이트맵</Link></li>
				<li><Link to={"/"}>개인정보취급방침</Link></li>
				<li><Link to={"/"}>이메일 무단수집거부</Link></li>
			</Links>
			<Infos>
				<div>34054 대전광역시 유성구 유성대로 1662 대전바이오벤처타운 / T. 042-930-4719 / F. 042-930-4789</div>
				<div>COPYRIGHT ⓒ 중소벤처기업부 규제자유특구기획단. ALL RIGHTS RESERVED.</div>
			</Infos>
		</Container>
	)
};

export default Informations;