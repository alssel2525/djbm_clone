import styled from "styled-components";
import Color from "../../../Color";

const Container = styled.table`
	width: 100%;
	border-top: 3px solid ${Color.black};
	border-bottom: 1px solid ${Color.grey}90;
	margin: 1.5rem 0;
	font-family: 'Noto Sans KR', "Sora", sans-serif;
	border-collapse: collapse;

	th {
		width: 135px;
		padding: 1rem;
		background: ${Color.lightGreyBlue};
		border-bottom: 1px solid ${Color.lightgrey};
		font-weight: 500;
		text-align: center;
	}

	td {
		min-height: 4rem;
		padding: 0.8rem;
		position: relative;
		color: ${Color.black};
		border-bottom: 1px solid ${Color.lightgrey};
		word-break: keep-all;
		text-align: center;
	}
`;

const SubTable = (props) => {
	return (
		<Container>
			{props.children}
		</Container>
	)
};

export default SubTable;
