import styled from "styled-components";
import BoxVideo from "./BoxVideo";

const Container = styled.div`
    width: 100vw;
	padding: 2rem 0;
	
	.__1280 {
		width: 1280px;
		margin: 0 auto;
		display: flex;
		justify-content: space-between;
	}
`;

const Section3 = () => {
	return (
		<Container>
			<div className={"__1280"}>
				<BoxVideo/>
			</div>
		</Container>
	)
};

export default Section3;