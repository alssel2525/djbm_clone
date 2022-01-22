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
		font-size: 1rem;
		font-weight: normal;
		margin: 0;
		padding: 0;

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
			background: ${Color.lightgrey};
		}
		
		a {
			font-size: 1rem;
			text-decoration: none;
			color: inherit;
		}
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
		</Container>
	)
};

export default Informations;