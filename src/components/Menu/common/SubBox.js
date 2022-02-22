import styled from "styled-components";
import Color from "../../../Color";

const Container = styled.div`
	width: 100%;
	padding: 1.5rem;
	border: 1px solid ${Color.lightgrey};
	color: ${Color.black};
	box-sizing: border-box;


	ul {
		margin: 0;
		padding: 0;
		list-style: none;
		position: relative;
		display: block;
		
		li {
			list-style: none;
		}
	}
`;

const SubBox = (props) => {
	return (
		<Container className={props.className}>
			{props.children}
		</Container>
	)
};

export default SubBox;
