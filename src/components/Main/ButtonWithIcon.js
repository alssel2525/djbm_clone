import styled from "styled-components";
import {BiSearchAlt} from "react-icons/bi";

const Container = styled.a`
	width: 17rem;
	height: 4.5rem;
	margin-top: 1.5rem;
	padding: 1rem;
	border-radius: 5px;
	background: linear-gradient(135deg, #303f9f 0%, #4a148c 100%);
	color: white;
	display: flex;
	align-items: center;
	justify-content: center;
	cursor: pointer;

	.icon {
		width: 2rem;
		height: 2rem;
	}

	.text {
		margin-left: 1rem;
		font-weight: bold;
		font-size: 1.1rem;
		line-height: calc(1.2rem * 1.8);
	}
`

const ButtonWithIcon = () => {
	return (
		<Container>
			<BiSearchAlt className={"icon"}/>
			<span className={"text"}>
				검체분양 총괄시스템
				<br/>
				바로가기 >
			</span>
		</Container>
	)
};

export default ButtonWithIcon;